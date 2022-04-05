(ns indexed.db.key-range-test
  (:require [cljs.test :refer [deftest is testing]]
            [indexed.db :as indexed.db]))

(deftest test-lower
  (testing "with a bound key range"
    (let [bound (indexed.db/bound "a" "b")]
      (is (= "a" (indexed.db/lower bound)))))
  (testing "with an only key range"
    (let [only (indexed.db/only "a")]
      (is (= "a" (indexed.db/lower only)))))
  (testing "with a lower bound key range"
    (let [lower (indexed.db/lower-bound "a")]
      (is (= "a" (indexed.db/lower lower)))))
  (testing "with a upper bound key range"
    (let [upper (indexed.db/upper-bound "a")]
      (is (nil? (indexed.db/lower upper))))))

(deftest test-upper
  (testing "with a bound key range"
    (let [bound (indexed.db/bound "a" "b")]
      (is (= "b" (indexed.db/upper bound)))))
  (testing "with an only key range"
    (let [only (indexed.db/only "a")]
      (is (= "a" (indexed.db/upper only)))))
  (testing "with a lower bound key range"
    (let [lower (indexed.db/lower-bound "a")]
      (is (nil? (indexed.db/upper lower)))))
  (testing "with a upper bound key range"
    (let [upper (indexed.db/upper-bound "a")]
      (is (= "a" (indexed.db/upper upper))))))

(deftest test-lower-open?
  (testing "with a bound key range"
    (let [bound (indexed.db/bound "a" "b" true)]
      (is (indexed.db/lower-open? bound))))
  (testing "with an only key range"
    (let [only (indexed.db/only "a")]
      (is (not (indexed.db/lower-open? only)))))
  (testing "with a lower bound key range"
    (let [lower (indexed.db/lower-bound "a" true)]
      (is (indexed.db/lower-open? lower))))
  (testing "with a upper bound key range"
    (let [upper (indexed.db/upper-bound "a")]
      (is (indexed.db/lower-open? upper)))))

(deftest test-upper-open?
  (testing "with a bound key range"
    (let [bound (indexed.db/bound "a" "b" true true)]
      (is (indexed.db/upper-open? bound))))
  (testing "with an only key range"
    (let [only (indexed.db/only "a")]
      (is (not (indexed.db/upper-open? only)))))
  (testing "with a lower bound key range"
    (let [lower (indexed.db/lower-bound "a" true)]
      (is (indexed.db/upper-open? lower))))
  (testing "with a upper bound key range"
    (let [upper (indexed.db/upper-bound "a" true)]
      (is (indexed.db/upper-open? upper)))))
