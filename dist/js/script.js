(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],3:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],10:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithoutHoles.js":2,"./iterableToArray.js":8,"./nonIterableSpread.js":9,"./unsupportedIterableToArray.js":11}],11:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],12:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":13}],13:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAccordion = exports.Accordion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Accordion = /*#__PURE__*/function () {
  function Accordion(_btn, _text, activeBtn, activeClasses, activeText, textToggle, textToggleBtn, transitionTime, heightVar, additionalElement, elementBody) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Accordion);
    (0, _defineProperty2["default"])(this, "initEvents", function () {
      _this.initArrayBtn();
    });
    (0, _defineProperty2["default"])(this, "fullHeight", function (element) {
      /*   */
      setTimeout(function () {
        // element.style.maxHeight = 300 + 'px';
        ; // element.style.maxHeight = 1000 + 'px';

        element.style.maxHeight = _this.elementBody.clientHeight + 'px'; // element.style.height = this.elementBody.clientHeight + 'px';

        setTimeout(function () {
          element.style.maxHeight = '100%';
        }, _this.transitionTime);
      }, _this.transitionTime);
    });
    (0, _defineProperty2["default"])(this, "initArrayBtn", function () {
      console.log(_this.btn);

      _this.btn.map(function (item, i) {
        item.addEventListener('click', function (e) {
          // console.log(e.target)
          if (!e.target.dataset.element) {
            _this.textToggle && _this.changeBtnText(item, _this.textToggleBtn);

            _this.changeTextVisibility(_this.text[i], item);
          } // this.additionalElement && this.fullHeight(this.additionalElement)

        });
      });
    });
    (0, _defineProperty2["default"])(this, "initBtn", function () {
      _this.btn.addEventListener('click', function (e) {
        _this.textToggle && _this.changeBtnText(_this.btn, _this.textToggleBtn);

        _this.changeTextVisibility(_this.text, _this.btn);
      });
    });
    (0, _defineProperty2["default"])(this, "changeTextVisibility", function (text, btn) {
      console.log(text, btn);

      _this.setMaxHeight(text, btn);

      btn.classList.toggle(_this.activeBtn);
      _this.activeText && text.classList.toggle(_this.activeText);
    });
    (0, _defineProperty2["default"])(this, "setMaxHeight", function (element, btn) {
      console.log(_this.activeBtn);

      _this.setHeightValue(element).then(function (res) {
        if (btn.classList.contains(_this.activeBtn)) {
          console.log(btn);
          setTimeout(function () {
            element.style.setProperty(_this.heightVar, "initial");
          }, _this.transitionTime);
        }
      });
    });
    (0, _defineProperty2["default"])(this, "changeBtnText", function (btn) {
      console.log(_this.textToggleBtn, _this);
      btn.classList.contains(_this.activeBtn) ? _this.textToggleBtn.textContent = _this.textToggle[0] : _this.textToggleBtn.textContent = _this.textToggle[1];
    });
    this.btn = _btn;
    this.text = _text;
    this.activeBtn = activeBtn;
    this.activeClasses = activeClasses;
    this.activeText = activeText;
    this.textToggle = textToggle;
    this.textToggleBtn = textToggleBtn;
    this.transitionTime = transitionTime;
    this.heightVar = heightVar;
    this.additionalElement = additionalElement;
    this.elementBody = elementBody;
    this.initEvents();
  }

  (0, _createClass2["default"])(Accordion, [{
    key: "setHeightValue",
    value: function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(element) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(element.scrollHeight);

                if (element.clientHeight === 0) {
                  console.log(element.scrollHeight);
                  element.style.setProperty(this.heightVar, "".concat(element.scrollHeight, "px"));
                } else {
                  console.log('ok', element.scrollHeight, this.heightVar);
                  element.style.setProperty(this.heightVar, "".concat(element.scrollHeight, "px"));
                  setTimeout(function () {
                    element.style.setProperty(_this2.heightVar, '0px');
                  }, 50);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setHeightValue(_x) {
        return _ref.apply(this, arguments);
      }

      return setHeightValue;
    }()
  }]);
  return Accordion;
}();

exports.Accordion = Accordion;

var initAccordion = function initAccordion() {
  // ACCORDION INIT
  var faqBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".item-faq"));

  if (faqBtn.length !== 0) {
    var faqBtnText = (0, _toConsumableArray2["default"])(document.querySelectorAll(".item-faq__text"));
    var faqBtnActive = 'incDec-btn--minus';
    var activeClasses = ['item-faq__body', 'item-faq__text'];
    var faqTransitionTime = 500;
    var heightFaqVar = '--max-heightFaq';
    new Accordion(faqBtn, faqBtnText, faqBtnActive, activeClasses, null, null, null, faqTransitionTime, heightFaqVar);
  } // Cities


  var citiesList = (0, _toConsumableArray2["default"])(document.querySelectorAll(".cities__content-hidden"));
  console.log(citiesList);

  if (citiesList.length !== 0) {
    var citiesBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".cities__accordion-body"));
    var citiesBtnActive = 'cities__accordion-body--hide';
    var citiesTextToggleBtn = document.querySelector(".cities__link");
    var citiesTextToggle = ['Все города', 'Свернуть'];
    var citiesTransitionTime = 500;
    var heightCitiesVar = '--max-heightCities';
    new Accordion(citiesBtn, citiesList, citiesBtnActive, null, null, citiesTextToggle, citiesTextToggleBtn, citiesTransitionTime, heightCitiesVar);
  } // Direction


  var directionList = (0, _toConsumableArray2["default"])(document.querySelectorAll(".direction__content-overflow"));
  console.log(directionList);

  if (directionList.length !== 0) {
    var directionBody = document.querySelector(".direction__body ");
    var directionBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".direction__accordion-body"));
    var directionBtnActive = 'direction__accordion-body--hide';
    var directionListActive = 'direction__content-overflow--visible';
    var directionBackgroundRect = document.querySelector(".direction__background-img");
    var directionTextToggleBtn = document.querySelector(".direction__link");
    var directionTextToggle = ['Все направления', 'Свернуть'];
    var directionTransitionTime = 300;
    var heightDirectionVar = '--max-heightDirection';
    new Accordion(directionBtn, directionList, directionBtnActive, null, directionListActive, directionTextToggle, directionTextToggleBtn, directionTransitionTime, heightDirectionVar, directionBackgroundRect, directionBody);
  }
};

exports.initAccordion = initAccordion;

},{"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10,"@babel/runtime/regenerator":12}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCountTarif = exports.CountTarif = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var CountTarif = function CountTarif(switchRadio, switchLabel, togglersTariff, totalPriceEl) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, CountTarif);
  (0, _defineProperty2["default"])(this, "setDiscounts", function () {
    for (var i = 0; i <= _this.limitier; i++) {
      i === 0 && _this.disountArr.push(1);
      i === 1 && _this.disountArr.push(0.9);
      i > 1 && _this.disountArr.push(0.85);
    }
  });
  (0, _defineProperty2["default"])(this, "getindicators", function () {
    return _this.togglersTariff.map(function (item) {
      _this.tariffIndicators['indicator'].push(_this.strToNumbaer(item.children[1]));
    });
  });
  (0, _defineProperty2["default"])(this, "initSwitchTariffBtns", function () {
    _this.switchRadio.map(function (item, i) {
      return item.addEventListener('click', function () {
        return _this.changeTariff(i);
      });
    });

    _this.switchLabel.map(function (item, i) {
      return item.addEventListener('click', function () {
        return _this.changeTariff(i);
      });
    });
  });
  (0, _defineProperty2["default"])(this, "initTogglers", function () {
    _this.togglersTariff.map(function (item, i) {
      return item.addEventListener('click', function (e) {
        return _this.toggleTariffIndicators(e, item, i);
      });
    });
  });
  (0, _defineProperty2["default"])(this, "toggleTariffIndicators", function (e, item, i) {
    console.log(e.target.classList);
    e.target.classList.contains('incDec-btn__dec') && _this.decrIndicator(i);
    e.target.classList.contains('incDec-btn__inc') && _this.incrIndicator(i);
    /*   e.target.classList[0].includes('inc') && this.decrIndicator() */

    console.log(e.target, item, i);
  });
  (0, _defineProperty2["default"])(this, "decrIndicator", function (i) {
    console.log(_this.tariffIndicators);

    if (_this.priceIndex > 1) {
      _this.priceIndex--;

      _this.togglersTariff.map(function (item, z) {
        var indicator = _this.strToNumbaer(_this.togglersTariff[z].children[1]) - _this.tariffIndicators['indicator'][z];

        _this.togglersTariff[z].children[1].textContent = _this.addSpacesToNum(indicator);
      });

      _this.countTotalPrice();

      _this.showTotalPrice();
    }
  });
  (0, _defineProperty2["default"])(this, "incrIndicator", function (i) {
    console.log(_this.tariffIndicators);

    if (_this.priceIndex < _this.limitier) {
      _this.priceIndex++;

      _this.togglersTariff.map(function (item, z) {
        var indicator = _this.strToNumbaer(_this.togglersTariff[z].children[1]) + _this.tariffIndicators['indicator'][z];

        _this.togglersTariff[z].children[1].textContent = _this.addSpacesToNum(indicator);
      });

      _this.countTotalPrice();

      _this.showTotalPrice();
    }
  });
  (0, _defineProperty2["default"])(this, "countTotalPrice", function () {
    /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
         const discount = this.primaryPrice * this.tariffIndicators['discount'];
            console.log(discount)
            this.discountPrice += discount; */
    console.log(_this.primaryPrice, _this.disountArr[_this.priceIndex]);
    _this.discountPrice = _this.primaryPrice * _this.disountArr[_this.priceIndex - 1];
    console.log(_this.discountPrice);
    _this.totalPrice = _this.discountPrice * _this.priceIndex;
    console.log(_this.priceIndex);
  });
  (0, _defineProperty2["default"])(this, "addSpacesToNum", function (element) {
    element = element.toString().split('');

    for (var i = 3; i <= element.length; i += 4) {
      element.reverse().splice(i, 0, ' ');
      element = element.reverse();
    }

    return element.join('');
  });
  (0, _defineProperty2["default"])(this, "changeTariff", function (i) {
    console.log(_this.totalPrice);
    i === 0 ? _this.primaryPrice = 1600 : _this.primaryPrice = 1800;
    console.log(_this.discountPrice);

    _this.countTotalPrice();

    _this.showTotalPrice();
  });
  (0, _defineProperty2["default"])(this, "showTotalPrice", function () {
    var totalSum = _this.totalPrice;
    _this.totalPriceEl.textContent = _this.addSpacesToNum(totalSum);
  });
  (0, _defineProperty2["default"])(this, "strToNumbaer", function (element) {
    return +element.textContent.replace(/\s+/g, '');
  });
  this.switchRadio = switchRadio;
  this.switchLabel = switchLabel;
  this.togglersTariff = togglersTariff;
  this.totalPriceEl = totalPriceEl;
  this.discountPrice = 1600;
  this.primaryPriceIndex = 1;
  this.priceIndex = 1;
  this.limitier = 10;
  this.disountArr = [];
  this.totalPrice = this.strToNumbaer(this.totalPriceEl);
  this.primaryPrice = this.totalPrice;
  this.tariffIndicators = {
    'indicator': [],
    'discount': 1
  };
};

exports.CountTarif = CountTarif;

var initCountTarif = function initCountTarif() {
  // Coffee Slider
  var switchRadio = (0, _toConsumableArray2["default"])(document.querySelectorAll(".switch-radio__input"));
  var switchLabel = (0, _toConsumableArray2["default"])(document.querySelectorAll(".switch-radio__label"));
  var togglersTariff = (0, _toConsumableArray2["default"])(document.querySelectorAll(".togglers-tariff__btn"));
  var totalPrice = document.querySelector(".total-price__amount");
  console.log(switchRadio, switchLabel, togglersTariff, totalPrice);

  if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
    var countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
    countTarif.getindicators();
    countTarif.initSwitchTariffBtns();
    countTarif.initTogglers();
    countTarif.setDiscounts();
  }
}; // class CountTarif {
//     constructor(switchRadio, switchLabel, togglersTariff, totalPriceEl) {
//         this.switchRadio = switchRadio;
//         this.switchLabel = switchLabel;
//         this.togglersTariff = togglersTariff;
//         this.totalPriceEl = totalPriceEl;
//         this.discountPrice = 1600;
//         this.primaryPriceIndex = 1;
//         this.priceIndex = 1;
//         this.limitier = 9;
//         this.disountArr = [];
//         this.totalPrice = this.strToNumbaer(this.totalPriceEl);
//         this.primaryPrice = this.totalPrice;
//         this.tariffIndicators = {
//             'indicator': [],
//             'countIndex': [],
//             'discount': 1
//         };
//     }
//     setDiscounts = () => {
//         for (let i = 0; i <= this.limitier; i++) {
//             i === 0 && this.disountArr.push(1)
//             i === 1 && this.disountArr.push(0.9)
//             i > 1 && this.disountArr.push(0.85)
//         }
//     }
//     getindicators = () => this.togglersTariff.map(item => {
//         this.tariffIndicators['indicator'].push(this.strToNumbaer(item.children[1]));
//         this.tariffIndicators['countIndex'].push(0);
//     })
//     initSwitchTariffBtns = () => {
//         this.switchRadio.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//         this.switchLabel.map((item, i) => item.addEventListener('click', () => this.changeTariff(i)))
//     }
//     initTogglers = () => {
//         this.togglersTariff.map((item, i) => item.addEventListener('click', (e) => this.toggleTariffIndicators(e, item, i)))
//     }
//     toggleTariffIndicators = (e, item, i) => {
//         console.log(e.target.classList)
//         e.target.classList.contains('incDec-btn__dec') && this.decrIndicator(i)
//         e.target.classList.contains('incDec-btn__inc') && this.incrIndicator(i)
//         /*   e.target.classList[0].includes('inc') && this.decrIndicator() */
//         console.log(e.target, item, i)
//     }
//     decrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] > 0) {
//             this.tariffIndicators['countIndex'][i]--;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) - this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex--;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }
//     countDiscount = (indicator, i) => {
//         indicator === 2 && (this.tariffIndicators['discount'] = 0.9);
//         indicator === 3 && (this.tariffIndicators['discount'] = 0.85);
//     }
//     incrIndicator = (i) => {
//         console.log(this.tariffIndicators)
//         if (this.tariffIndicators['countIndex'][i] < this.limitier) {
//             this.tariffIndicators['countIndex'][i]++;
//             let indicator = this.strToNumbaer(this.togglersTariff[i].children[1]) + this.tariffIndicators['indicator'][i];
//             console.log(indicator)
//             i === 2 ? this.countDiscount(indicator, i) : this.priceIndex++;
//             this.togglersTariff[i].children[1].textContent = this.addSpacesToNum(indicator);
//             i !== 2 ? this.countTotalPrice() : this.countPrimaryPrice(i);
//             this.showTotalPrice()
//         }
//     }
//     countTotalPrice = (i) => {
//         this.totalPrice = this.discountPrice * this.priceIndex;
//         console.log(this.priceIndex, this.discountPrice)
//         /*    this.totalPrice = this.totalPrice * (this.tariffIndicators['countIndex'][2] + 1) */
//         console.log(this.totalPrice)
//     }
//     countPrimaryPrice = (i) => {
//         /*      console.log(this.primaryPrice, this.totalPrice, this.tariffIndicators['countIndex'][i], this.tariffIndicators['discount'], this.priceIndex);
//              const discount = this.primaryPrice * this.tariffIndicators['discount'];
//                 console.log(discount)
//                 this.discountPrice += discount; */
//         console.log(this.tariffIndicators['countIndex'][i] + 1)
//         this.discountPrice = 0;
//         console.log(this.priceIndex)
//         for (let z = 0; z < this.tariffIndicators['countIndex'][i] + 1; z++) {
//             this.discountPrice += this.primaryPrice * this.disountArr[z]/*  * this.priceIndex */;
//             /*    console.log(this.disountArr[z], this.primaryPrice)
//                console.log(price.toFixed()) */
//         }
//         this.totalPrice = this.discountPrice * this.priceIndex;
//     }
//     addSpacesToNum = (element) => {
//         element = element.toString().split('')
//         for (let i = 3; i <= element.length; i += 4) {
//             element.reverse().splice(i, 0, ' ');
//             element = element.reverse()
//         }
//         return element.join('')
//     }
//     changeTariff = (i) => {
//         console.log(this.totalPrice)
//         i === 0 ? this.primaryPrice = 1600 : this.primaryPrice = 1800;
//         this.discountPrice = this.primaryPrice;
//         console.log(this.discountPrice)
//         this.countPrimaryPrice(2)
//         this.showTotalPrice()
//     }
//     showTotalPrice = () => {
//         const totalSum = this.totalPrice;
//         this.totalPriceEl.textContent = this.addSpacesToNum(totalSum)
//     }
//     strToNumbaer = (element) => +element.textContent.replace(/\s+/g, '')
// }
// document.addEventListener('DOMContentLoaded', () => {
//     // Coffee Slider
//     const switchRadio = [...document.querySelectorAll(".switch-radio__input")];
//     const switchLabel = [...document.querySelectorAll(".switch-radio__label")];
//     const togglersTariff = [...document.querySelectorAll(".togglers-tariff__btn")];
//     const totalPrice = document.querySelector(".total-price__amount");
//     console.log(switchRadio)
//     if (switchRadio.length !== 0 && switchRadio.length !== 0 && togglersTariff.length !== 0 && totalPrice !== null) {
//         const countTarif = new CountTarif(switchRadio, switchLabel, togglersTariff, totalPrice);
//         countTarif.getindicators();
//         countTarif.initSwitchTariffBtns();
//         countTarif.initTogglers();
//         countTarif.setDiscounts();
//     }
// })


exports.initCountTarif = initCountTarif;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDirection = exports.Direction = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classToggle = _interopRequireDefault(require("./utilities/classToggle"));

var Direction = function Direction(directionsBody, directions, directionActive) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Direction);
  (0, _defineProperty2["default"])(this, "initEvents", function () {
    console.log('');

    _this.directionResizeObserver();
  });
  (0, _defineProperty2["default"])(this, "directionRzeObrCallback", function (entries) {
    /*  console.log(entries[0].target) */
    _this.directions.map(function (direction, i) {
      _this.detectOverflow(direction);
    });
  });
  (0, _defineProperty2["default"])(this, "directionResizeObserver", function (direction) {
    _this.resizerDirection = new ResizeObserver(_this.directionRzeObrCallback);

    _this.resizerDirection.observe(_this.directionsBody);
  });
  (0, _defineProperty2["default"])(this, "detectOverflow", function (direction) {
    var childMarginTop = +window.getComputedStyle(direction).marginTop.split('px').join('');
    var childMarginRight = +window.getComputedStyle(direction).marginRight.split('px').join('');
    childMarginTop = +childMarginTop.toFixed();
    var parentTop = direction.parentNode.getBoundingClientRect().top;
    parentTop = +parentTop.toFixed();
    var childTop = direction.getBoundingClientRect().top;
    childTop = +childTop.toFixed(); // let directionUlLength = direction.parentNode.children.length;

    var directionUl = (0, _toConsumableArray2["default"])(direction.parentNode.children);

    if (window.innerWidth > 1190) {
      childMarginRight > 0 && (direction.style.marginRight = '0'); // console.log 
    }

    if (childTop - parentTop > childMarginTop && direction.classList.contains(_this.directionActive) && directionUl.indexOf(direction) !== 0) {
      _classToggle["default"].removeClass(direction, _this.directionActive);

      direction.previousElementSibling.style.marginRight = '34px';
    }

    if (childTop - parentTop === childMarginTop && !direction.classList.contains(_this.directionActive) && directionUl.indexOf(direction) !== 0) {
      direction.previousElementSibling.style.marginRight = '0';

      _classToggle["default"].addClass(direction, _this.directionActive);
    }
  });
  this.directionsBody = directionsBody;
  this.directions = directions;
  this.directionActive = directionActive;
  this.initEvents();
};

exports.Direction = Direction;

var initDirection = function initDirection() {
  // Coffee Slider
  var directions = (0, _toConsumableArray2["default"])(document.querySelectorAll(".direction__item"));
  var directionsBody = document.querySelector(".direction__body-wrapper");
  var directionActive = 'direction__item--margin';
  directions.length !== 0 && new Direction(directionsBody, directions, directionActive);
};

exports.initDirection = initDirection;

},{"./utilities/classToggle":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModal = exports.Modal = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classToggle = _interopRequireDefault(require("./utilities/classToggle"));

var _Styles = _interopRequireDefault(require("./utilities/Styles"));

var Modal = function Modal(body, popup, _popupModal, popupModalWrapper, wrapperMargin, _btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll, staticForm) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Modal);
  (0, _defineProperty2["default"])(this, "initEvents", function () {
    console.log(_this.btnPopup);

    _this.initArrayBtnPopup();

    _this.initCloseBtn();
  });
  (0, _defineProperty2["default"])(this, "initCloseBtn", function () {
    _this.popup.addEventListener('click', function (e) {
      console.log(e.target);

      if (e.target.classList.contains('popup__modal--active') || e.target.classList.contains('popup__modal-close') || e.target.dataset.modal === 'close') {
        e.stopPropagation();
        console.log(e.target.classList, _this.popupModal);

        _this.popupModal.map(function (popupModal, i) {
          if (popupModal.classList.contains(_this.popupModalActive)) {
            _classToggle["default"].removeClass(_this.body, _this.bodyNoScroll);

            _this.removeNoScrollStyles(_this.body);
            /*  !popupModal.classList.contains(this.staticForm) && this.removeNoScrollStyles(popupModal); */


            !popupModal.classList.contains(_this.staticForm) && _classToggle["default"].removeClass(popupModal, _this.popupModalActive);

            _classToggle["default"].addClass(_this.popup, _this.popupHidden);
          }
        });
      }
    });
  });
  (0, _defineProperty2["default"])(this, "initArrayBtnPopup", function () {
    _this.btnPopup.map(function (btnPopup, i) {
      console.log(btnPopup, btnPopup.type);

      if (btnPopup.type === 'submit') {
        console.log('ok');
        /* console.log(this.btnPopup[i], this.popupModal[i]) */

        _this.popupModal.map(function (popupModal, i) {
          popupModal.dataset.modal === 'form' && _this.submitForm(popupModal);
        });
      } else {
        btnPopup.addEventListener('click', function () {
          _this.popupModal.map(function (popupModal, i) {
            // console.log(popupModal.children[0])
            _Styles["default"].addTransition(popupModal.children[0], 'all', '0.5s', 'ease-in-out');

            if (btnPopup.dataset.modal === popupModal.dataset.modal) {
              popupModal.dataset.modal === 'form' && _this.submitForm(popupModal);
              /* this.addNoScrollStyles(popupModal) */

              window.innerWidth - _this.body.offsetWidth > 0 && _this.addMarginToBlock(_this.popupModalWrapper[i]);
              !_this.body.classList.contains(_this.bodyNoScroll) && (_this.addNoScrollStyles(_this.body), _classToggle["default"].addClass(_this.body, _this.bodyNoScroll));

              _classToggle["default"].addClass(popupModal, _this.popupModalActive);

              console.log('ok');
              _this.popup.classList.contains(_this.popupHidden) && _classToggle["default"].removeClass(_this.popup, _this.popupHidden);
            }
          });
          /*      this.changeTextVisibility(this.text[i], item);
               this.textBtn && this.changeBtnText(item) */

        });
      }
    });
  });
  (0, _defineProperty2["default"])(this, "addNoScrollStyles", function (element) {
    console.log('pk');
    element.style.paddingRight = window.innerWidth - _this.body.offsetWidth +
    /* 12 +  */
    'px';
    element.style.width = '100vw'; // ? 
  });
  (0, _defineProperty2["default"])(this, "addMarginToBlock", function (element) {
    _classToggle["default"].addClass(element, _this.wrapperMargin);
  });
  (0, _defineProperty2["default"])(this, "removeNoScrollStyles", function (element) {
    element.style.paddingRight = 0 + 'px';
    element.style.width = '100%';
  });
  (0, _defineProperty2["default"])(this, "submitForm", function (popupModalForm) {
    console.log(popupModalForm);
    popupModalForm.addEventListener('submit', function (e) {
      console.log('ok');
      var tempParams = {
        name: _this.formInputs[0].value,
        phone: _this.formInputs[1].value
      };
      console.log(Xhr.makeRequest(tempParams));
      e.preventDefault();
      !popupModalForm.classList.contains(_this.staticForm) && _classToggle["default"].removeClass(popupModalForm, _this.popupModalActive);
      _this.popup.classList.contains(_this.popupHidden) && _classToggle["default"].removeClass(_this.popup, _this.popupHidden);

      _this.clearFields(_this.formInputs);

      _this.popupModal.map(function (popupModal, i) {
        if (popupModal.dataset.modal === 'success') {
          console.log(_this.staticForm);

          _classToggle["default"].addClass(popupModal, _this.popupModalActive);
        }

        console.log(e.target, popupModal);
      });
    });
  });
  (0, _defineProperty2["default"])(this, "clearFields", function (fields) {
    // console.log(fields)
    fields.map(function (field, i) {
      return field.value = '';
    });
  });
  this.body = body;
  this.popup = popup;
  this.popupModal = _popupModal;
  this.popupModalWrapper = popupModalWrapper;
  this.wrapperMargin = wrapperMargin;
  this.btnPopup = _btnPopup;
  this.closeBtn = closeBtn;
  this.formInputs = formInputs;
  this.popupModalActive = popupModalActive;
  this.popupHidden = popupHidden;
  this.bodyNoScroll = bodyNoScroll;
  this.staticForm = staticForm;
  /*         this.textBtn = textBtn;
   */

  this.initEvents();
};

exports.Modal = Modal;

var initModal = function initModal() {
  // Coffee Slider
  var popupMain = document.getElementById("popup-main");

  if (popupMain !== null) {
    var body = document.querySelector(".body");
    var popup = document.querySelector(".popup");
    var popupModal = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal"));
    var popupModalWrapper = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal-wrapper"));
    var btnPopup = (0, _toConsumableArray2["default"])(document.querySelectorAll(".btn__popup"));
    var closeBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal-close"));
    var formInputs = (0, _toConsumableArray2["default"])(document.querySelectorAll(".contact-form__input"));
    var popupModalActive = 'popup__modal--active';
    var popupHidden = 'popup--hidden';
    var bodyNoScroll = 'body--noscroll';
    var wrapperMargin = 'popup__modal-wrapper--margin';
    console.log(closeBtn);
    new Modal(body, popup, popupModal, popupModalWrapper, wrapperMargin, btnPopup, closeBtn, formInputs, popupModalActive, popupHidden, bodyNoScroll);
  }

  var popupContact = document.getElementById("popup-contact");

  if (popupContact !== null) {
    console.log('ok');

    var _body = document.querySelector(".body");

    var _popup = document.querySelector(".popup");

    var _popupModal2 = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal"));

    var _popupModalWrapper = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal-wrapper"));

    var _btnPopup2 = (0, _toConsumableArray2["default"])(document.querySelectorAll(".btn__popup"));

    var _closeBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".popup__modal-close"));

    console.log(_closeBtn);

    var _formInputs = (0, _toConsumableArray2["default"])(document.querySelectorAll(".contact-form__input"));

    var _popupModalActive = 'popup__modal--active';
    var _popupHidden = 'popup--hidden';
    var _bodyNoScroll = 'body--noscroll';
    var staticForm = 'contact__form';
    var _wrapperMargin = 'popup__modal-wrapper--margin';
    new Modal(_body, _popup, _popupModal2, _popupModalWrapper, _wrapperMargin, _btnPopup2, _closeBtn, _formInputs, _popupModalActive, _popupHidden, _bodyNoScroll, staticForm);
  } // const citiesList = document.querySelector(".cities__list-hidden");
  // const citiesBtn = document.querySelector(".cities__link");
  // const citiesBtnActive = 'cities__link--hide';
  // const textToggleBtn = ['Все города', 'Свернуть']
  // console.log(citiesList)
  // citiesList !== null && new Accordion(citiesBtn, citiesList, citiesBtnActive, textToggleBtn);

};

exports.initModal = initModal;

},{"./utilities/Styles":23,"./utilities/classToggle":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSidebar = exports.Sidebar = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Styles = _interopRequireDefault(require("./utilities/Styles"));

var Sidebar = function Sidebar(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay, transitionTime) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Sidebar);
  (0, _defineProperty2["default"])(this, "sidebarManipulation", function () {
    console.log('ok');

    window.onresize = function () {
      if (window.innerWidth > 1224 && _this.sidebar.classList.contains('page__sidebar--active')) {
        _this.sidebar.classList.contains('sidebar--full-page') && _this.page.classList.toggle('page_screen_full');

        _this.removeSidebar();
      }
    };

    _this.sidebarOverlay.onclick = function () {
      return _this.removeSidebar();
    };

    _this.hamburgerMenu.onclick = function (e) {
      return _this.toggleSidebar();
    }, _Styles["default"].addTransition(_this.sidebarBody, 'transform', '0.3s', 'ease-in-out');

    _this.mobileMenuItems.map(function (item) {
      return item.onclick = function () {
        return _this.removeSidebar();
      };
    });
  });
  (0, _defineProperty2["default"])(this, "toggleSidebar", function () {
    console.log('ok');
    _this.sidebar.classList.contains('sidebar--full-page') && _this.page.classList.toggle('page_screen_full');

    _this.sidebar.classList.toggle('page__sidebar--active');

    _this.page.classList.toggle('page--noScroll');

    _this.sidebarBody.classList.toggle('sidebar__content--active');

    console.log(_this.sidebarBody);
    setTimeout(function () {
      _this.sidebarBody.classList.toggle('sidebar__content--visible');
    }, _this.sidebarBody.classList.contains('sidebar__content--active') ? 0 : _this.transitionTime);

    _this.sidebarOverlay.classList.toggle('overlay--show');

    _this.hamburgerMenu.classList.toggle('hamburger-menu__content--active');
    /*      window.scrollTo({
             top: 0,
             behavior: "smooth"
         }) */

  });
  (0, _defineProperty2["default"])(this, "removeSidebar", function () {
    _this.sidebar.classList.contains('sidebar--full-page') && _this.page.classList.remove('page_screen_full');
    setTimeout(function () {
      console.log('ok');

      _this.sidebarBody.classList.remove('sidebar__content--visible');
    }, _this.transitionTime);

    _this.sidebar.classList.remove('page__sidebar--active');

    _this.page.classList.remove('page--noScroll');

    _this.sidebarBody.classList.remove('sidebar__content--active');

    _this.sidebarOverlay.classList.remove('overlay--show');

    _this.hamburgerMenu.classList.remove('hamburger-menu__content--active');
  });
  (0, _defineProperty2["default"])(this, "menuItemsInit", function () {
    _this.menuItems.map(function (menuItem, i) {
      return menuItem.onclick = function () {
        _this.changeItemStyle(i);
      };
    });
    /*   this.menuItems.map((menuItem, i) => menuItem.onmouseover = () => { this.hoverItemStyleOver(menuItem) })
      this.menuItems.map((menuItem, i) => menuItem.onmouseout = () => { this.hoverItemStyleOut(menuItem) }) */

  });
  (0, _defineProperty2["default"])(this, "changeItemStyle", function (i) {
    console.log('object');
    var activeMenuItem = document.querySelector('.menu__items--active');
    activeMenuItem.classList.remove('menu__items--active');

    _this.menuItems[i].classList.add('menu__items--active');
    /* this.menuItems.map((menuItem, z) => i !== z && (console.log(z))) */

  });
  this.page = page, this.sections = sections, this.menuItems = menuItems, this.mobileMenuItems = mobileMenuItems, this.index = 0, this.sidebar = sidebar, this.hamburgerMenu = hamburgerMenu, this.sidebarBody = sidebarBody, this.sidebarOverlay = sidebarOverlay, this.transitionTime = transitionTime;
};

exports.Sidebar = Sidebar;

var initSidebar = function initSidebar() {
  var page = document.querySelector('.page');
  var sections = (0, _toConsumableArray2["default"])(document.querySelectorAll('.section'));
  var menuItems = (0, _toConsumableArray2["default"])(document.querySelectorAll('.menu__items'));
  var mobileMenuItems = (0, _toConsumableArray2["default"])(document.querySelectorAll('.mobile-menu__item'));
  var sidebar = document.querySelector('.page__sidebar');
  var sidebarBody = document.querySelector('.sidebar__content');
  var sidebarOverlay = document.querySelector('.overlay');
  var hamburgerMenu = document.querySelector('.hamburger-menu__content');
  var transitionTime = 300;
  var scroll = new Sidebar(page, sections, menuItems, mobileMenuItems, hamburgerMenu, sidebar, sidebarBody, sidebarOverlay, transitionTime);
  scroll.menuItemsInit();
  scroll.sidebarManipulation();
};

exports.initSidebar = initSidebar;

},{"./utilities/Styles":23,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSlider = exports.Slider = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Math = _interopRequireDefault(require("./utilities/Math"));

var _classToggle = _interopRequireDefault(require("./utilities/classToggle"));

var Slider = /*#__PURE__*/function () {
  function Slider(content, main, wrapper, sliderBreakpoint, arrow, circeTogglers, circleActiveClass, slideResizeOberverObj, toggleBtn, toggleMoveGif, stopperFactor, slideNumber, toggleResizeOberverObj) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Slider);
    (0, _defineProperty2["default"])(this, "initDrag", function () {
      _this.content.map(function (dragableItem, i) {
        /* if (innerWidth < this.sliderBreakpoint) { */
        dragableItem.addEventListener('dragstart', function (e) {
          return e.preventDefault();
        }); //touch event

        dragableItem.addEventListener('touchstart', _this.touchStart(i), {
          passive: true
        });
        dragableItem.addEventListener('touchend', function (e) {
          return _this.touchEnd(e);
        });
        dragableItem.addEventListener('touchmove', _this.touchMove, {
          passive: true
        }); //mouse event

        dragableItem.addEventListener('mousedown', _this.touchStart(i), {
          passive: true
        });
        dragableItem.addEventListener('mouseup', function (e) {
          return _this.touchEnd(e);
        });
        dragableItem.addEventListener('mousemove', _this.touchMove, {
          passive: true
        });
        dragableItem.addEventListener('mouseleave', function (e) {
          return _this.isDragging && _this.touchEnd(e);
        });
        /* } */
      });
    });
    (0, _defineProperty2["default"])(this, "contextMenu", function () {
      window.oncontextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
    });
    (0, _defineProperty2["default"])(this, "animation", function () {
      // анимация если драг активен
      console.log('ok');

      _this.setSliderPositionX(_this.main, _this.currentTranslationX);

      if (_this.isDragging) requestAnimationFrame(_this.animation);
    });
    (0, _defineProperty2["default"])(this, "touchStart", function (i) {
      // Начало тач события 
      return function (event) {
        console.log(_this.sliderBreakpoint, innerWidth);

        if (_this.sliderBreakpoint > innerWidth) {
          console.log('ok');

          _classToggle["default"].removeClass(_this.main, 'slider--smooth'); // удаляем плавность при движении, чтобы не было задержек


          _this.startPos = _this.getPositionX(event); // узнаем стартовую позицию мыши

          _this.isDragging = true; // инициализируем перетаскивание

          _this.animationID = requestAnimationFrame(_this.animation); // запускаем анимацию
        }
      };
    });
    (0, _defineProperty2["default"])(this, "touchMove", function (e) {
      // тач событие
      if (_this.isDragging && _this.sliderBreakpoint > innerWidth) {
        // если драг активен
        var currentPosition = _this.getPositionX(e); // узнаем  позицию мыши


        var wrapperRight = window.innerWidth - (_this.wrapper.getBoundingClientRect().left + _this.wrapper.clientWidth);

        var lastElementRight = window.innerWidth - (_this.content[_this.content.length - 1].getBoundingClientRect().left + _this.content[_this.content.length - 1].clientWidth);

        if (lastElementRight <= _this.sliderLimit && +Math.abs(_this.currentTranslationX).toFixed() <= (_this.translateStepX * (_this.content.length - 1) + _this.elemntsMargins).toFixed() && _this.currentTranslationX < 2 || _this.currentTranslationX >= _this.prevTranslation && _this.currentTranslationX < 2) {
          _this.currentTranslationX = _Math["default"].absToPercent(_this.prevTranslation * _this.main.clientWidth / 100 + currentPosition - _this.startPos, _this.main.clientWidth);
        }
      }
    });
    (0, _defineProperty2["default"])(this, "touchEnd", function (e) {
      // Остановка тач события
      if (_this.sliderBreakpoint > innerWidth) {
        _classToggle["default"].addClass(_this.main, 'slider--smooth'); // возвращаем плавность для событий на клик стрелки


        cancelAnimationFrame(_this.animationID); // отмена анимацию

        _this.isDragging = false; // отсановка перетаскивания
        // Изменям индекс в зависимости от текущей трансформации

        if (_this.currentIndex < _this.content.length - 1) {
          Math.abs(_this.currentTranslationX) > Math.abs(_this.prevTranslation) + _this.translateStepX / 3.5 && _this.currentIndex++;
        }

        if (_this.currentIndex >= 0) {
          Math.abs(_this.currentTranslationX) < Math.abs(_this.prevTranslation) - _this.translateStepX / 3.5 && _this.currentIndex--;
        }

        _this.setPrevTranslation(); // Устанавливаем предыдущий транслэйте


        _this.setCurrentXTranslation(); // Устанавливаем текущий транслэйте


        _this.changeArrowActivity(); // Изменяем активность кнопопк


        _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера


        _this.getUnactiveElts(); // меняем опасити элементов 


        if (_this.circeTogglers) {
          _this.setCircleActivity(_this.circeTogglers[_this.currentIndex]);
        }

        setTimeout(function () {
          var wrapperRight = window.innerWidth - (_this.wrapper.getBoundingClientRect().left + _this.wrapper.clientWidth);

          console.log(wrapperRight);

          var lastElementRight = window.innerWidth - (_this.content[_this.content.length - 1].getBoundingClientRect().left + _this.content[_this.content.length - 1].clientWidth);

          console.log(lastElementRight);
          lastElementRight > 0 ? _this.sliderLimit = wrapperRight + lastElementRight : _this.sliderLimit = 0;
          console.log(_this.sliderLimit);
        }, 500);
      }
    });
    (0, _defineProperty2["default"])(this, "initArrowsBtns", function () {
      _this.arrow[0].addEventListener("click", function () {
        return _this.left();
      }); // левая стрелка


      _this.arrow[1].addEventListener("click", function () {
        return _this.rigth();
      }); // праввая стрелка

    });
    (0, _defineProperty2["default"])(this, "rigth", function () {
      if (_this.currentIndex < _this.getMainToContentIndex()) {
        _this.currentIndex++;

        _this.setPrevTranslation(); // Устанавливаем предыдущий транслэйт


        _this.setCurrentXTranslation(); // Устанавливаем текущий транслэйт


        _this.changeArrowActivity(); // Изменяем активность кнопопк


        _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера


        _this.getUnactiveElts(); // меняем опасити элементов 

      }
    });
    (0, _defineProperty2["default"])(this, "left", function () {
      if (Math.abs(_this.currentTranslationX) > 0) {
        _this.currentIndex--;

        _this.setPrevTranslation(); // Устанавливаем предыдущий транслэйт


        _this.setCurrentXTranslation(); // Устанавливаем текущий транслэйт


        _this.changeArrowActivity(); // Изменяем активность кнопопк


        _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера


        _this.getUnactiveElts(); // меняем опасити элементов 

      }
    });
    (0, _defineProperty2["default"])(this, "initToggleBtns", function () {
      _this.toggleBtn.map(function (item, i) {
        return item.addEventListener("click", function () {
          !_this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && _classToggle["default"].toggleClass(_this.toggleMoveGif, 'togglers__item-move--smooth');
          _this.currentIndex = i;

          _this.setCurrentXTranslation(); // Меняем текущий транслэйт слайдер 


          _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера


          _this.setSlideNumber(_this.slideNumber);

          if (_this.direction() === 'column') {
            _this.setSliderPositionY(_this.toggleMoveGif, _this.setCurrentFullBodyTranslation(100)); // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента

          } else {
            _this.setSliderPositionX(_this.toggleMoveGif, _this.setCurrentFullBodyTranslation(100));
          }
        });
      });
    });
    (0, _defineProperty2["default"])(this, "direction", function () {
      return window.getComputedStyle(_this.toggleBtn[0].parentElement).flexDirection;
    });
    (0, _defineProperty2["default"])(this, "initCirceTogglers", function () {
      /*  */
      _this.circeTogglers.map(function (item, i) {
        return item.addEventListener("click", function () {
          /*  !this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && ClassToggle.toggleClass(this.toggleMoveGif, 'togglers__item-move--smooth') */
          _this.setCircleActivity(item);

          _this.currentIndex = i;

          _this.setPrevTranslation();

          _this.setCurrentXTranslation(); // Меняем текущий транслэйт слайдер 


          _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера

        });
      });
    });
    (0, _defineProperty2["default"])(this, "getActiveElement", function (activeClass) {
      return document.querySelector(".".concat(activeClass));
    });
    (0, _defineProperty2["default"])(this, "setCircleActivity", function (item) {
      _classToggle["default"].toggleClass(_this.getActiveElement(_this.circleActiveClass), _this.circleActiveClass);

      _classToggle["default"].toggleClass(item, _this.circleActiveClass);
    });
    (0, _defineProperty2["default"])(this, "changeArrowActivity", function () {
      // меняем активность стрелок
      if (_this.arrow) {
        // Левая стрелка
        if (Math.abs(_this.currentTranslationX) > 0) {
          _this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && _classToggle["default"].removeClass(_this.arrow[0], 'carousel__toggle-btn--unactive');
        } else {
          !_this.arrow[0].classList.contains('carousel__toggle-btn--unactive') && _classToggle["default"].addClass(_this.arrow[0], 'carousel__toggle-btn--unactive');
        } // Правая стрелка


        if (_this.currentIndex === _this.getMainToContentIndex()) {
          _classToggle["default"].addClass(_this.arrow[1], 'carousel__toggle-btn--unactive');
        } else {
          _classToggle["default"].removeClass(_this.arrow[1], 'carousel__toggle-btn--unactive');
        }
      }
    });
    (0, _defineProperty2["default"])(this, "getUnactiveElts", function () {
      return _this.content.map(function (item, i) {
        // меняем опасити элементов 
        var translationtoAbs = _Math["default"].percentToAbsolute(Math.abs(_this.currentTranslationX), _this.main.clientWidth).toFixed();

        if (_this.main.clientWidth <= item.offsetLeft + _this.margin + i - translationtoAbs || item.offsetLeft + i - translationtoAbs < 0) {
          _classToggle["default"].addClass(item, 'carousel__item--unActive');
        } else {
          item.classList.contains('carousel__item--unActive') && _classToggle["default"].removeClass(item, 'carousel__item--unActive');
        }
      });
    });
    (0, _defineProperty2["default"])(this, "slideRzeObrCallback", function (entries) {
      var waitMargin = new Promise(function (resolve, reject) {
        console.log('ok');
        setTimeout(function () {
          _this.getMargin();

          resolve();
        }, 300);
      }); // Настройка слайдера после изменения ширина слайда(в процентом соотношении)

      console.log('ok');
      waitMargin.then(function () {
        console.log('ok');

        _this.getTranslateStepX(); // Узнаем шаг для X транслэйта
        // Уменьшаем индекс при переполнении


        if (_this.currentIndex > _this.getMainToContentIndex()) {
          var decresseIndex = _this.currentIndex - _this.getMainToContentIndex();

          _this.currentIndex -= decresseIndex;
        }

        if (_this.sliderBreakpoint < innerWidth) {
          _this.currentIndex = 0;
        }

        if (_this.circeTogglers) {
          _this.setCircleActivity(_this.circeTogglers[_this.currentIndex]);
        }
        /*     console.log(this.getMainToContentIndex())
        console.log(this.currentIndex) */


        _this.setPrevTranslation(); // Устанавливаем предыдущий транслэйт


        _this.getMainToContentIndex(); // Узнаем насколько могут переполнятся элементы с контейнера слайдера, берется как отношенее элеметов в контецнера слайдера к общему количеству элементов в слайдере


        _this.setCurrentXTranslation(); // Устанавливаем текущий транслэйт


        _this.changeArrowActivity(); // Изменяем активность кнопопок


        _this.setSliderPositionX(_this.main, _this.currentTranslationX); // Устанавливаем транслэйт для слайдера


        _this.getUnactiveElts(); // меняем опасити элементов 

      });
    });
    (0, _defineProperty2["default"])(this, "slideResizeObserver", function () {
      // resizeInteraction событие, которое срабатывает при измненнении ширины элемента
      _this.resizerSlide = new ResizeObserver(_this.slideRzeObrCallback);

      _this.resizerSlide.observe(_this.slideResizeOberverObj);
    });
    (0, _defineProperty2["default"])(this, "toggleContainerRzeObrCallback", function () {
      _this.toggleMoveGif.classList.contains('togglers__item-move--smooth') && _classToggle["default"].toggleClass(_this.toggleMoveGif, 'togglers__item-move--smooth');

      if (_this.direction() === 'column') {
        _this.setSliderPositionY(_this.toggleMoveGif, _this.setCurrentFullBodyTranslation(100)); // Меняем текущий транслэйт движущегося элемента и станавливаем транслэйт для движущегося элемента

      } else {
        _this.setSliderPositionX(_this.toggleMoveGif, _this.setCurrentFullBodyTranslation(100));
      }
    });
    (0, _defineProperty2["default"])(this, "toggleContainerResizeObserver", function () {
      _this.resizerToggler = new ResizeObserver(_this.toggleContainerRzeObrCallback);

      _this.resizerToggler.observe(_this.toggleResizeOberverObj);
    });
    (0, _defineProperty2["default"])(this, "getMainToContentIndex", function () {
      return _this.content.length - (_Math["default"].absToPercent(_this.main.clientWidth, _this.getTotalElementsWidth()).toFixed() / 100 * _this.content.length).toFixed();
    });
    (0, _defineProperty2["default"])(this, "setSliderPositionX", function (element, translation) {
      return element.style.transform = "translateX(".concat(translation, "%)");
    });
    (0, _defineProperty2["default"])(this, "setSliderPositionY", function (element, translation) {
      return element.style.transform = "translateY(".concat(translation, "%)");
    });
    (0, _defineProperty2["default"])(this, "getPositionX", function (event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    });
    (0, _defineProperty2["default"])(this, "setSlideNumber", function (elem) {
      return elem.textContent = _this.currentIndex + 1;
    });
    (0, _defineProperty2["default"])(this, "setPrevTranslation", function () {
      return _this.prevTranslation = _this.currentIndex * -_Math["default"].absToPercent(_this.content[0].clientWidth + _this.margin, _this.main.clientWidth).toFixed();
    });
    (0, _defineProperty2["default"])(this, "setCurrentXTranslation", function () {
      return _this.currentTranslationX = _this.currentIndex * -_this.translateStepX;
    });
    (0, _defineProperty2["default"])(this, "setCurrentFullBodyTranslation", function (translate) {
      return _this.currentIndex * translate;
    });
    (0, _defineProperty2["default"])(this, "getTranslateStepX", function () {
      _this.translateStepX = _Math["default"].absToPercent(_this.content[1].clientWidth + _this.margin, _this.main.clientWidth).toFixed(); // Узнаем шаг для X транслэйта
    });
    (0, _defineProperty2["default"])(this, "getTotalElementsWidth", function () {
      return (_this.content[1].clientWidth + _this.margin) * _this.content.length;
    });
    this.content = content, this.main = main, this.wrapper = wrapper, this.sliderBreakpoint = sliderBreakpoint, this.arrow = arrow, this.circeTogglers = circeTogglers, this.circleActiveClass = circleActiveClass, this.slideResizeOberverObj = slideResizeOberverObj, this.toggleResizeOberverObj = toggleResizeOberverObj, this.toggleBtn = toggleBtn, this.toggleMoveGif = toggleMoveGif, this.slideNumber = slideNumber, this.isDragging = false, this.currentIndex = 0, this.startPos = 0, this.translateStepX = 0, this.currentTranslationX = 0, this.currentTranslationMove, this.margin = 0, this.sliderLimit = 0, this.elemntsMargins = 0, this.prevTranslation = 0, this.animationID = 0, this.stopperFactor = stopperFactor, this.oserver = null;
  }
  /*                                                ТАЧ СОБЫТИЕ                                             */


  (0, _createClass2["default"])(Slider, [{
    key: "getMargin",
    value: //Меняем текущий Y транслэйт
    function getMargin() {
      // Узнаем отутупы для правельного транслэйта

      /*  const result = */
      this.margin = +getComputedStyle(this.content[1]).marginLeft.split('px').join('');
      this.elemntsMargins = _Math["default"].absToPercent(this.margin * this.content.length - 1, this.getTotalElementsWidth()) - this.stopperFactor;
      console.log(window.getComputedStyle(this.content[1]).marginLeft);
      console.log(this.content[1], getComputedStyle(this.content[1]).marginLeft, this.margin);
    } // Узнаем общую ширину для всех эелементов слайдера

  }]);
  return Slider;
}();

exports.Slider = Slider;

var initSlider = function initSlider() {
  var contentAdvantages = (0, _toConsumableArray2["default"])(document.querySelectorAll(".advantages__carousel-item"));

  if (contentAdvantages.length !== 0) {
    var wrapperAdvantages = document.querySelector(".advantages__body");
    var mainAdvantages = document.querySelector(".advantages__slider");
    var resizeOberverAdvantages = document.querySelector(".advantages__resizer");
    var circeTogglersCard = (0, _toConsumableArray2["default"])(document.querySelectorAll(".circe-togglers__advantages"));
    console.log(circeTogglersCard);
    var circleActiveClass = 'circe-togglers__item--active';
    var sliderBreakpointAdvantages = 480;
    var sliderAdvantages = new Slider(contentAdvantages, mainAdvantages, wrapperAdvantages, sliderBreakpointAdvantages, null, circeTogglersCard, circleActiveClass, resizeOberverAdvantages, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */

    sliderAdvantages.getMargin();
    sliderAdvantages.getTranslateStepX();
    sliderAdvantages.initDrag();
    sliderAdvantages.initCirceTogglers();
    sliderAdvantages.slideResizeObserver();
  }

  var contentEffect = (0, _toConsumableArray2["default"])(document.querySelectorAll(".effect__item"));

  if (contentEffect.length !== 0) {
    var wrapperEffect = document.querySelector(".effect__body");
    var mainEffect = document.querySelector(".effect__slider");
    var resizeOberverEffect = document.querySelector(".effect__resizer");
    var sliderBreakpointEffect = 768;
    var sliderEffect = new Slider(contentEffect, mainEffect, wrapperEffect, sliderBreakpointEffect, null, null, null, resizeOberverEffect, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */

    sliderEffect.getMargin();
    sliderEffect.getTranslateStepX();
    sliderEffect.initDrag();
    sliderEffect.slideResizeObserver();
  } // Advantages Slider


  var contentProgramm = (0, _toConsumableArray2["default"])(document.querySelectorAll(".programm__item "));

  if (contentProgramm.length !== 0) {
    var wrapperProgramm = document.querySelector(".programm__body");
    var mainProgramm = document.querySelector(".programm__slider ");
    var resizeOberverProgramm = document.querySelector(".programm__resizer");
    var sliderBreakpointProgramm = 1225;
    var sliderProgramm = new Slider(contentProgramm, mainProgramm, wrapperProgramm, sliderBreakpointProgramm, null, null, null, resizeOberverProgramm, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */

    sliderProgramm.getMargin();
    sliderProgramm.getTranslateStepX();
    sliderProgramm.initDrag();
    sliderProgramm.slideResizeObserver();
  }

  var contentCard = (0, _toConsumableArray2["default"])(document.querySelectorAll(".tariffsec__card"));

  if (contentCard.length !== 0) {
    var mainCard = document.querySelector(".tariffsec__slider");
    var wrapperCard = document.querySelector(".tariffsec__body");
    var resizeOberverCard = document.querySelector(".tariffsec__resizer");

    var _circeTogglersCard = (0, _toConsumableArray2["default"])(document.querySelectorAll(".circe-togglers__item"));

    var _circleActiveClass = 'circe-togglers__item--active';
    var sliderBreakpointCard = 480;

    var _sliderProgramm = new Slider(contentCard, mainCard, wrapperCard, sliderBreakpointCard, null, _circeTogglersCard, _circleActiveClass, resizeOberverCard, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */


    var waitMargin = new Promise(function (resolve, reject) {
      console.log('ok');
      setTimeout(function () {
        _sliderProgramm.getMargin();

        resolve();
      }, 100);
    });
    console.log('ok');
    waitMargin.then(function () {
      _sliderProgramm.getTranslateStepX();

      _sliderProgramm.initDrag();

      _sliderProgramm.initCirceTogglers();

      _sliderProgramm.slideResizeObserver();
    });
  }

  var contentService = (0, _toConsumableArray2["default"])(document.querySelectorAll(".interest-service__slider-item"));

  if (contentService.length !== 0) {
    var mainService = document.querySelector(".interest-service__slider");
    var wrapperService = document.querySelector(".interest-service__body");
    var resizeOberverService = document.querySelector(".interest-service__resizer");
    var sliderBreakpointService = 1225;

    var _sliderProgramm2 = new Slider(contentService, mainService, wrapperService, sliderBreakpointService, null, null, null, resizeOberverService, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */


    _sliderProgramm2.getMargin();

    _sliderProgramm2.getTranslateStepX();

    _sliderProgramm2.initDrag();

    _sliderProgramm2.slideResizeObserver();
  }

  var contentArticles = (0, _toConsumableArray2["default"])(document.querySelectorAll(".articles-content__slide"));

  if (contentService.length !== 0) {
    var mainArticles = document.querySelector(".usefull-articles__slider");
    var wrapperArticles = document.querySelector(".usefull-articles__body");
    var resizeOberverArticles = document.querySelector(".articles-content__resizer");
    var sliderBreakpointArticles = 1225;

    var _sliderProgramm3 = new Slider(contentArticles, mainArticles, wrapperArticles, sliderBreakpointArticles, null, null, null, resizeOberverArticles, null, null, 0, null, null);
    /*  sliderCoffee.getUnactiveElts(); */

    /* sliderCoffee.initArrowsBtns(); */


    _sliderProgramm3.getMargin();

    _sliderProgramm3.getTranslateStepX();

    _sliderProgramm3.initDrag();

    _sliderProgramm3.slideResizeObserver();
  }
};
/* const carousel = {
    type: "carousel",
    settings: {
        customSetting: {
            effects: "",
            touch: "true/false",
        },
        switchers: {
            dots: "true/false",
            arrows: "true/false",
        }
    }
}

const slider3d = {
    type: "3dslider",
    settings: {
        customSetting: {
            effects: "rota",
        },
        switchers: {
            dots:  "true/false",
            arrows: "true/false",
            togglers: "true/false",
        }
    }
}

const sliderGif = new Slider (

) */


exports.initSlider = initSlider;

},{"./utilities/Math":22,"./utilities/classToggle":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScroll = exports.Scroll = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/* smoothscroll.polyfill(); */
var Scroll = function Scroll(btn, _scrollToSection, speed) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Scroll);
  (0, _defineProperty2["default"])(this, "initEvents", function () {
    _this.initArrayBtn();
  });
  (0, _defineProperty2["default"])(this, "initArrayBtn", function () {
    console.log(_this.btn);

    _this.btn.map(function (item, i) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        _this.scrollToSection[i].dataset.scroll === _this.btn[i].dataset.scroll && _this.setScroll(_this.scrollToSection[i]); // this.additionalElement && this.fullHeight(this.additionalElement)
      });
    });
  });
  (0, _defineProperty2["default"])(this, "setScroll", function (scrollToSection) {
    // this.smoothScroll(scrollToSection)
    _this.scrollTop = window.scrollY;
    _this.scrollTo = scrollToSection.getBoundingClientRect().top + _this.scrollTop;

    _this.animation();
  });
  (0, _defineProperty2["default"])(this, "animation", function () {
    _this.scrollTop += _this.speed;
    window.scrollTo({
      top: _this.scrollTop,
      behavior: "auto"
    });
    _this.scrollTop < _this.scrollTo && requestAnimationFrame(_this.animation);
  });
  this.btn = btn;
  this.scrollToSection = _scrollToSection;
  this.scrollTop = null;
  this.scrollTo = null;
  this.speed = speed; // this.smoothScroll = require('smoothscroll');

  this.initEvents();
};

exports.Scroll = Scroll;

var initScroll = function initScroll() {
  var scrollBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".data-scroll__btn"));
  console.log(scrollBtn);

  if (scrollBtn.length !== 0) {
    var scrollToSection = (0, _toConsumableArray2["default"])(document.querySelectorAll(".data-scrollTo"));
    var speed = 100;
    console.log(scrollToSection);
    new Scroll(scrollBtn, scrollToSection, speed);
  }
};

exports.initScroll = initScroll;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTogglers = exports.Togglers = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classToggle = _interopRequireDefault(require("./utilities/classToggle"));

var Togglers = function Togglers(_btn, _item, btnActiveClass, itemActiveClass) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Togglers);
  (0, _defineProperty2["default"])(this, "initEvents", function () {
    _this.initArrayBtn();
  });
  (0, _defineProperty2["default"])(this, "initArrayBtn", function () {
    console.log(_this.btn);

    _this.btn.map(function (btn, i) {
      btn.addEventListener('click', function (e) {
        var activeBtn = document.querySelector(".".concat(_this.btnActiveClass));

        _classToggle["default"].removeClass(activeBtn, _this.btnActiveClass);

        _classToggle["default"].addClass(btn, _this.btnActiveClass);

        _this.switchContent(btn);
      });
    });
  });
  (0, _defineProperty2["default"])(this, "switchContent", function (btn) {
    _this.item.map(function (item, i) {
      console.log('ok');
      btn.dataset.show === item.dataset.show ? _classToggle["default"].addClass(item, _this.itemActiveClass) : _classToggle["default"].removeClass(item, _this.itemActiveClass);
    });
  });
  this.btn = _btn;
  this.item = _item;
  this.btnActiveClass = btnActiveClass;
  this.itemActiveClass = itemActiveClass;
  this.initEvents();
};

exports.Togglers = Togglers;

var initTogglers = function initTogglers() {
  var togglersBtn = (0, _toConsumableArray2["default"])(document.querySelectorAll(".togglers__button"));

  if (togglersBtn.length !== 0) {
    var tariffItem = (0, _toConsumableArray2["default"])(document.querySelectorAll(".tariff__switch"));
    var togglersActiveClass = 'togglers__button--active';
    var itemActiveClass = 'tariff__switch--active';
    new Togglers(togglersBtn, tariffItem, togglersActiveClass, itemActiveClass);
  }
};

exports.initTogglers = initTogglers;

},{"./utilities/classToggle":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var MathUtl = function MathUtl() {
  (0, _classCallCheck2["default"])(this, MathUtl);
};

exports["default"] = MathUtl;
(0, _defineProperty2["default"])(MathUtl, "percentToAbsolute", function (percent, container) {
  return percent / 100 * container;
});
(0, _defineProperty2["default"])(MathUtl, "absToPercent", function (absolute, container) {
  return absolute / container * 100;
});
(0, _defineProperty2["default"])(MathUtl, "toggleClass", function (element, clas) {
  element.classList.toggle(clas);
});

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Styles = /*#__PURE__*/function () {
  function Styles() {
    (0, _classCallCheck2["default"])(this, Styles);
  }

  (0, _createClass2["default"])(Styles, null, [{
    key: "addTransition",
    value: function addTransition(element, type, dur, effect) {
      element.style.transition = "".concat(type, " ").concat(dur, " ").concat(effect);
    }
  }, {
    key: "addTransform",
    value: function addTransform(element, type, value, unit) {
      element.style.transform = "".concat(type, "( ").concat(dur, " ").concat(effect, ")");
    }
  }]);
  return Styles;
}();

var _default = Styles;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ClassToggle = function ClassToggle() {
  (0, _classCallCheck2["default"])(this, ClassToggle);
};

exports["default"] = ClassToggle;
(0, _defineProperty2["default"])(ClassToggle, "addClass", function (element, clas) {
  element.classList.add(clas);
});
(0, _defineProperty2["default"])(ClassToggle, "removeClass", function (element, clas) {
  element.classList.remove(clas);
});
(0, _defineProperty2["default"])(ClassToggle, "toggleClass", function (element, clas) {
  element.classList.toggle(clas);
});

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7}],25:[function(require,module,exports){
"use strict";

var _toggler = require("./modules/toggler");

var _accordion = require("./modules/accordion");

var _slider = require("./modules/slider");

var _countTariff = require("./modules/countTariff");

var _direction = require("./modules/direction");

var _modal = require("./modules/modal");

var _sidebar = require("./modules/sidebar");

var _smoothScrolll = require("./modules/smoothScrolll");

// import initRipple from './modules/ripple'
document.addEventListener('DOMContentLoaded', function () {
  // INIT SIDEBAR 
  (0, _sidebar.initSidebar)(); // ACCORDION INIT

  (0, _accordion.initAccordion)(); // SLIDER INIT

  (0, _slider.initSlider)(); // COUNT TARIFF INIT

  (0, _toggler.initTogglers)();
  (0, _countTariff.initCountTarif)(); // DIRECTION INIT

  (0, _direction.initDirection)(); // MODAL INIT

  (0, _modal.initModal)();
  /*  //  RIPPLE INIT
   initRipple() */
  //  SCROLL INIT

  (0, _smoothScrolll.initScroll)();

  var applyStyle = function applyStyle(css) {
    // console.log('ok')
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.body.appendChild(style);
  };

  var hasCSS = function hasCSS() {
    var test = document.createElement('div');
    test.className = 'rippleJS';
    document.body.appendChild(test);
    var s = window.getComputedStyle(test);
    var result = s.position == 'absolute';
    document.body.removeChild(test); // console.log(result)

    return result;
  };

  if (!hasCSS()) {
    var css = '/*rippleJS*/.rippleJS{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0;content:""}.rippleJS.fill.active{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.5;transition:all .4s ease-out;width:0;height:0;pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:1}.rippleJS .ripple.done{opacity:0}';
    applyStyle(css);
  }

  var startRipple = function startRipple(type, at) {
    // console.log('ok')
    var holder = at.target; // console.log(holder)
    // holder.style.zIndex = 0;

    var cl = holder.classList;

    if (!cl.contains('rippleJS')) {
      return false; // ignore
    } // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.


    var prev = holder.getAttribute('data-event');

    if (prev && prev != type) {
      return false;
    }

    holder.setAttribute('data-event', type); // Create and position the ripple.

    var rect = holder.getBoundingClientRect();
    var x = at.offsetX;
    var y;

    if (x !== undefined) {
      y = at.offsetY;
    } else {
      x = at.clientX - rect.left;
      y = at.clientY - rect.top;
    }

    var ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.transform = 'translate(' + x + 'px, ' + y + 'px';
    ripple.style.webkitTransform = ripple.style.transform; // ripple.style.zIndex = -1;
    // Activate/add the element, forcing an animation (setTimeout).

    cl.add('active');
    holder.appendChild(ripple);
    window.setTimeout(function () {
      var max;

      if (rect.width == rect.height) {
        max = rect.width * 1.412;
      } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
      }

      var dim = max * 2 + 'px';
      var margin = -max + 'px';
      ripple.style.width = dim;
      ripple.style.height = dim;
      ripple.style.marginLeft = margin;
      ripple.style.marginTop = margin;
      ripple.classList.add('held');
    }, 20);
    var releaseEvent = type == 'mousedown' ? 'mouseup' : 'touchend';

    var release = function release(ev) {
      // TODO: We don't check for _our_ touch here. Releasing one finger
      // releases all ripples.
      document.removeEventListener(releaseEvent, release);
      ripple.classList.add('done'); // larger than animation: duration in css

      window.setTimeout(function () {
        holder.removeChild(ripple);

        if (!holder.children.length) {
          cl.remove('active');
          holder.removeAttribute('data-event');
        }
      }, 650);
    };

    document.addEventListener(releaseEvent, release);
  };

  document.addEventListener('mousedown', function (ev) {
    if (ev.button == 0) {
      // trigger on left click only
      startRipple(ev.type, ev);
    }
  });
  document.addEventListener('touchstart', function (ev) {
    for (var i = 0; i < ev.changedTouches.length; ++i) {
      startRipple(ev.type, ev.changedTouches[i]);
    }
  });
});

},{"./modules/accordion":14,"./modules/countTariff":15,"./modules/direction":16,"./modules/modal":17,"./modules/sidebar":18,"./modules/slider":19,"./modules/smoothScrolll":20,"./modules/toggler":21}]},{},[25]);
