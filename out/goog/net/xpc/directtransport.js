/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.xpc.DirectTransport");
goog.require("goog.Timer");
goog.require("goog.async.Deferred");
goog.require("goog.events.EventHandler");
goog.require("goog.log");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CfgFields");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
goog.require("goog.object");
goog.requireType("goog.dom.DomHelper");
goog.requireType("goog.net.xpc.CrossPageChannel");
goog.scope(function() {
  const CfgFields = goog.net.xpc.CfgFields;
  const CrossPageChannelRole = goog.net.xpc.CrossPageChannelRole;
  const Deferred = goog.async.Deferred;
  const EventHandler = goog.events.EventHandler;
  const Timer = goog.Timer;
  const Transport = goog.net.xpc.Transport;
  goog.net.xpc.DirectTransport = function(channel, opt_domHelper) {
    goog.net.xpc.DirectTransport.base(this, "constructor", opt_domHelper);
    this.channel_ = channel;
    this.eventHandler_ = new EventHandler(this);
    this.registerDisposable(this.eventHandler_);
    this.maybeAttemptToConnectTimer_ = new Timer(DirectTransport.CONNECTION_ATTEMPT_INTERVAL_MS_, this.getWindow());
    this.registerDisposable(this.maybeAttemptToConnectTimer_);
    this.setupAckReceived_ = new Deferred;
    this.setupAckSent_ = new Deferred;
    this.connected_ = new Deferred;
    this.endpointId_ = goog.net.xpc.getRandomString(10);
    this.peerEndpointId_ = null;
    this.asyncSendsMap_ = {};
    this.originalChannelName_ = this.channel_.name;
    this.channel_.updateChannelNameAndCatalog(DirectTransport.getRoledChannelName_(this.channel_.name, this.channel_.getRole()));
    this.initialized_ = false;
    this.connected_.awaitDeferred(this.setupAckReceived_);
    this.connected_.awaitDeferred(this.setupAckSent_);
    this.connected_.addCallback(this.notifyConnected_, this);
    this.connected_.callback(true);
    this.eventHandler_.listen(this.maybeAttemptToConnectTimer_, Timer.TICK, this.maybeAttemptToConnect_);
    goog.log.info(goog.net.xpc.logger, "DirectTransport created. role\x3d" + this.channel_.getRole());
  };
  goog.inherits(goog.net.xpc.DirectTransport, Transport);
  const DirectTransport = goog.net.xpc.DirectTransport;
  DirectTransport.CONNECTION_ATTEMPT_INTERVAL_MS_ = 100;
  DirectTransport.CONNECTION_DELAY_INTERVAL_MS_ = 0;
  DirectTransport.isSupported = function(peerWindow) {
    try {
      return window.document.domain == peerWindow.document.domain;
    } catch (e) {
      return false;
    }
  };
  DirectTransport.activeCount_ = {};
  DirectTransport.GLOBAL_TRANPORT_PATH_ = "crosswindowmessaging.channel";
  DirectTransport.MESSAGE_DELIMITER_ = ",";
  DirectTransport.initialize_ = function(listenWindow) {
    const uid = goog.getUid(listenWindow);
    const value = DirectTransport.activeCount_[uid] || 0;
    if (value == 0) {
      const globalProxy = goog.getObjectByName(DirectTransport.GLOBAL_TRANPORT_PATH_, listenWindow);
      if (globalProxy == null) {
        goog.exportSymbol(DirectTransport.GLOBAL_TRANPORT_PATH_, DirectTransport.messageReceivedHandler_, listenWindow);
      }
    }
    DirectTransport.activeCount_[uid]++;
  };
  DirectTransport.getRoledChannelName_ = function(channelName, role) {
    return channelName + "_" + role;
  };
  DirectTransport.messageReceivedHandler_ = function(literal) {
    const msg = DirectTransport.Message_.fromLiteral(literal);
    const channelName = msg.channelName;
    const service = msg.service;
    const payload = msg.payload;
    goog.log.fine(goog.net.xpc.logger, "messageReceived: channel\x3d" + channelName + ", service\x3d" + service + ", payload\x3d" + payload);
    const allChannels = goog.module.get("goog.net.xpc.CrossPageChannel").channels;
    const channel = allChannels[channelName];
    if (channel) {
      channel.xpcDeliver(service, payload);
      return true;
    }
    const transportMessageType = DirectTransport.parseTransportPayload_(payload)[0];
    for (let staleChannelName in allChannels) {
      const staleChannel = allChannels[staleChannelName];
      if (staleChannel.getRole() == CrossPageChannelRole.INNER && !staleChannel.isConnected() && service == goog.net.xpc.TRANSPORT_SERVICE && transportMessageType == goog.net.xpc.SETUP) {
        staleChannel.updateChannelNameAndCatalog(channelName);
        staleChannel.xpcDeliver(service, payload);
        return true;
      }
    }
    goog.log.info(goog.net.xpc.logger, "channel name mismatch; message ignored.");
    return false;
  };
  DirectTransport.prototype.transportType = goog.net.xpc.TransportTypes.DIRECT;
  DirectTransport.prototype.transportServiceHandler = function(payload) {
    const transportParts = DirectTransport.parseTransportPayload_(payload);
    const transportMessageType = transportParts[0];
    const peerEndpointId = transportParts[1];
    switch(transportMessageType) {
      case goog.net.xpc.SETUP_ACK:
        if (!this.setupAckReceived_.hasFired()) {
          this.setupAckReceived_.callback(true);
        }
        break;
      case goog.net.xpc.SETUP:
        this.sendSetupAckMessage_();
        if (this.peerEndpointId_ != null && this.peerEndpointId_ != peerEndpointId) {
          goog.log.info(goog.net.xpc.logger, "Sending SETUP and changing peer ID to: " + peerEndpointId);
          this.sendSetupMessage_();
        }
        this.peerEndpointId_ = peerEndpointId;
        break;
    }
  };
  DirectTransport.prototype.sendSetupMessage_ = function() {
    let payload = goog.net.xpc.SETUP;
    payload += DirectTransport.MESSAGE_DELIMITER_;
    payload += this.endpointId_;
    this.send(goog.net.xpc.TRANSPORT_SERVICE, payload);
  };
  DirectTransport.prototype.sendSetupAckMessage_ = function() {
    this.send(goog.net.xpc.TRANSPORT_SERVICE, goog.net.xpc.SETUP_ACK);
    if (!this.setupAckSent_.hasFired()) {
      this.setupAckSent_.callback(true);
    }
  };
  DirectTransport.prototype.connect = function() {
    const win = this.getWindow();
    if (win) {
      DirectTransport.initialize_(win);
      this.initialized_ = true;
      this.maybeAttemptToConnect_();
    } else {
      goog.log.fine(goog.net.xpc.logger, "connect(): no window to initialize.");
    }
  };
  DirectTransport.prototype.maybeAttemptToConnect_ = function() {
    if (this.channel_.isConnected()) {
      this.maybeAttemptToConnectTimer_.stop();
      return;
    }
    this.maybeAttemptToConnectTimer_.start();
    this.sendSetupMessage_();
  };
  DirectTransport.prototype.send = function(service, payload) {
    if (!this.channel_.getPeerWindowObject()) {
      goog.log.fine(goog.net.xpc.logger, "send(): window not ready");
      return;
    }
    const channelName = DirectTransport.getRoledChannelName_(this.originalChannelName_, this.getPeerRole_());
    const message = new DirectTransport.Message_(channelName, service, payload);
    if (this.channel_.getConfig()[CfgFields.DIRECT_TRANSPORT_SYNC_MODE]) {
      this.executeScheduledSend_(message);
    } else {
      this.asyncSendsMap_[goog.getUid(message)] = Timer.callOnce(goog.bind(this.executeScheduledSend_, this, message), 0);
    }
  };
  DirectTransport.prototype.executeScheduledSend_ = function(message) {
    const messageId = goog.getUid(message);
    if (this.asyncSendsMap_[messageId]) {
      delete this.asyncSendsMap_[messageId];
    }
    let peerProxy;
    try {
      peerProxy = goog.getObjectByName(DirectTransport.GLOBAL_TRANPORT_PATH_, this.channel_.getPeerWindowObject());
    } catch (error) {
      goog.log.warning(goog.net.xpc.logger, "Can't access other window, ignoring.", error);
      return;
    }
    if (peerProxy === null) {
      goog.log.warning(goog.net.xpc.logger, "Peer window had no global function.");
      return;
    }
    try {
      peerProxy(message.toLiteral());
      goog.log.info(goog.net.xpc.logger, "send(): channelName\x3d" + message.channelName + " service\x3d" + message.service + " payload\x3d" + message.payload);
    } catch (error) {
      goog.log.warning(goog.net.xpc.logger, "Error performing call, ignoring.", error);
    }
  };
  DirectTransport.prototype.getPeerRole_ = function() {
    const role = this.channel_.getRole();
    return role == goog.net.xpc.CrossPageChannelRole.OUTER ? goog.net.xpc.CrossPageChannelRole.INNER : goog.net.xpc.CrossPageChannelRole.OUTER;
  };
  DirectTransport.prototype.notifyConnected_ = function() {
    this.channel_.notifyConnected(this.channel_.getConfig()[CfgFields.DIRECT_TRANSPORT_SYNC_MODE] ? DirectTransport.CONNECTION_DELAY_INTERVAL_MS_ : 0);
  };
  DirectTransport.prototype.disposeInternal = function() {
    if (this.initialized_) {
      const listenWindow = this.getWindow();
      const uid = goog.getUid(listenWindow);
      const value = --DirectTransport.activeCount_[uid];
      if (value == 1) {
        goog.exportSymbol(DirectTransport.GLOBAL_TRANPORT_PATH_, null, listenWindow);
      }
    }
    if (this.asyncSendsMap_) {
      goog.object.forEach(this.asyncSendsMap_, function(timerId) {
        Timer.clear(timerId);
      });
      this.asyncSendsMap_ = null;
    }
    if (this.setupAckReceived_) {
      this.setupAckReceived_.cancel();
      delete this.setupAckReceived_;
    }
    if (this.setupAckSent_) {
      this.setupAckSent_.cancel();
      delete this.setupAckSent_;
    }
    if (this.connected_) {
      this.connected_.cancel();
      delete this.connected_;
    }
    DirectTransport.base(this, "disposeInternal");
  };
  DirectTransport.parseTransportPayload_ = function(payload) {
    const transportParts = payload.split(DirectTransport.MESSAGE_DELIMITER_);
    transportParts[1] = transportParts[1] || null;
    return transportParts;
  };
  DirectTransport.Message_ = function(channelName, service, payload) {
    this.channelName = channelName;
    this.service = service;
    this.payload = payload;
  };
  DirectTransport.Message_.prototype.toLiteral = function() {
    return {"channelName":this.channelName, "service":this.service, "payload":this.payload, };
  };
  DirectTransport.Message_.fromLiteral = function(literal) {
    return new DirectTransport.Message_(literal["channelName"], literal["service"], literal["payload"]);
  };
});
