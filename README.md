<p align="center">
    <br>
    <img width="128" height="128" src="indexeddb.gif">
</p>

# indexed.db

It's just [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for ClojureSript. No assumptions made. No clever macros. Just plain IndexedDB via ClojureScript.


[![cljdoc badge](https://cljdoc.org/badge/com.github.brianium/indexed.db)](https://cljdoc.org/d/com.github.brianium/indexed.db/CURRENT) [![Clojars Project](https://img.shields.io/clojars/v/com.github.brianium/indexed.db.svg)](https://clojars.org/com.github.brianium/indexed.db)


## Table of contents

- [Goals](#goals)
- [Example](#example)
- [Implementation](#implementation)

### Goals

This library aims to be a straightforward ClojureScript wrapper around the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) API. By straightforward, I mean a literal port providing the same exact functionality as the JS API.


The aim is to cover the entire API and allow ClojureScript programmers to program with little to no interop code. It is meant to provide a more pleasant experience than using the JS API. This library would make a great backbone for something more opinionated.

This library provides:
* A full [test suite](https://brianium.github.io/indexed.db/)
* A function for every piece of functionality offered by IndexedDB
* Name parity - i.e `window.indexedDB.open` becomes `(db/open)` and `transaction.objectStore` becomes `(db/object-store transaction)`
* Specs!
* Documentation!

#### Non-goals

The following are not goals of this library:

* Fancy macros to make you feel like you aren't using IndexedDB
* Schema management/migrations
* High level functions for querying or inserting
* Use [core.async](https://github.com/clojure/core.async) or promises
* Manage events (this library makes no assumptions about what should be in an IDBRequest result)

There is nothing wrong with these goals. It should be relatively simple to build any of these on top of this library. Please do so :)

### Example

The [tests](test/indexed/db) will be the best place to see complete examples, but here is a sample of opening a database connection:

```clojure
(require '[indexed.db :as db])

(-> (db/open "mydb" 1)
    (db/on "error" handle-error)
    (db/on "blocked" handle-blocked)
    (db/on "upgradeneeded" handle-upgrade)
    (db/on "success" handle-success))
```

As mentioned in the [non-goals](#non-goals) section, this library does not make assumptions about event payloads, but it does
provide factory functions for turning those payloads into something more useful for a Clojure developer. Here is how the `handle-upgrade` function in the above example might look:

```clojure
(defn handle-upgrade
  [e]
  (-> (db/create-version-change-event e)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "toDoList" {:key-path "taskTitle"})
      (db/create-index "hours" "hours" {:unique? false})))
```

### Implementation

Every native JS type has been backed by a [ClojureScript protocol](src/indexed/db/impl/protocols.cljs). These protocols can be reified by `create-x` style factory functions:

- `create-object-store`
- `create-database`
- `create-cursor`
- `create-request`
- `create-version-change-event`
- etc

There is a simple API over the browser's [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface in the form of `on` and `off` functions.

#### Property/method collisions

Many types in the IndexedDB API provide access to parent objects via property accessors. That is an `IDBRequest` object has a `transaction` property that references it's parent transaction. The `IDBDatabase` type also provides a `transaction` method for creating a new transaction.

A design goal of this library is to export a single `indexed.db` namespace for use. To avoid these collisions, property access of the kind mentioned above is handled by converting the `transaction` property accessor function to `get-transaction`. If you are trying to get a parent transaction, request, store, etc... try the `get-x` variety first.
