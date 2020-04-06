// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */

  uniq(array) {
    let result = [];
    let test = false;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          test = true;
        }
      }
      if (test === false) {
        result.push(array[i]);
      }
      test = false;
    }
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    let result = [];
    this.each(collection, (val) => result.push(iteratee(val)));
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    let result = [];
    this.filter(collection, (val) => {
      if (!test(val)) {
        result.push(val);
      }
    });
    return result;
  }

  reduce(collection, iterator, accumulator) {
    let result = accumulator;
    if (typeof accumulator === "undefined") {
      result = collection[0];
      collection = collection.slice(1);
    }
    this.each(collection, (val) => {
      result = iterator(result, val);
    });
    return result;
  }

  every(collection, iterator) {
    //if previous result is true check the next value is true or false using reduce
    return this.reduce(
      collection,
      (val) => {
        if (!!iterator(val) === false) {
          return false;
        }
      },
      true
    );
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
