"use strict";

function _typeof(obj) {
	"@babel/helpers - typeof";
	return (
		(_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      	? function (obj) {
      		return typeof obj;
      	}
      	: function (obj) {
      		return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
      			? "symbol"
      			: typeof obj;
      	}),
		_typeof(obj)
	);
}
Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports["default"] = void 0;
function _slicedToArray(arr, i) {
	return (
		_arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
	);
}
function _nonIterableRest() {
	throw new TypeError(
		"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
	);
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
		return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _iterableToArrayLimit(arr, i) {
	var _i =
    null == arr
    	? null
    	: ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
	if (null != _i) {
		var _s,
			_e,
			_x,
			_r,
			_arr = [],
			_n = !0,
			_d = !1;
		try {
			if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
				if (Object(_i) !== _i) return;
				_n = !1;
			} else
				for (
					;
					!(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
					_n = !0
				);
		} catch (err) {
			(_d = !0), (_e = err);
		} finally {
			try {
				if (
					!_n &&
          null != _i["return"] &&
          ((_r = _i["return"]()), Object(_r) !== _r)
				)
					return;
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
}
function _arrayWithHoles(arr) {
	if (Array.isArray(arr)) return arr;
}
function _regeneratorRuntime() {
	"use strict";
	/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
    	return exports;
    };
	var exports = {},
		Op = Object.prototype,
		hasOwn = Op.hasOwnProperty,
		defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
      	obj[key] = desc.value;
      },
		$Symbol = "function" == typeof Symbol ? Symbol : {},
		iteratorSymbol = $Symbol.iterator || "@@iterator",
		asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
		toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	function define(obj, key, value) {
		return (
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: !0,
				configurable: !0,
				writable: !0,
			}),
			obj[key]
		);
	}
	try {
		define({}, "");
	} catch (err) {
		define = function define(obj, key, value) {
			return (obj[key] = value);
		};
	}
	function wrap(innerFn, outerFn, self, tryLocsList) {
		var protoGenerator =
        outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
			generator = Object.create(protoGenerator.prototype),
			context = new Context(tryLocsList || []);
		return (
			defineProperty(generator, "_invoke", {
				value: makeInvokeMethod(innerFn, self, context),
			}),
			generator
		);
	}
	function tryCatch(fn, obj, arg) {
		try {
			return { type: "normal", arg: fn.call(obj, arg) };
		} catch (err) {
			return { type: "throw", arg: err };
		}
	}
	exports.wrap = wrap;
	var ContinueSentinel = {};
	function Generator() {}
	function GeneratorFunction() {}
	function GeneratorFunctionPrototype() {}
	var IteratorPrototype = {};
	define(IteratorPrototype, iteratorSymbol, function () {
		return this;
	});
	var getProto = Object.getPrototypeOf,
		NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
	var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
	function defineIteratorMethods(prototype) {
		["next", "throw", "return"].forEach(function (method) {
			define(prototype, method, function (arg) {
				return this._invoke(method, arg);
			});
		});
	}
	function AsyncIterator(generator, PromiseImpl) {
		function invoke(method, arg, resolve, reject) {
			var record = tryCatch(generator[method], generator, arg);
			if ("throw" !== record.type) {
				var result = record.arg,
					value = result.value;
				return value &&
          "object" == _typeof(value) &&
          hasOwn.call(value, "__await")
					? PromiseImpl.resolve(value.__await).then(
						function (value) {
							invoke("next", value, resolve, reject);
						},
						function (err) {
							invoke("throw", err, resolve, reject);
						}
					)
					: PromiseImpl.resolve(value).then(
						function (unwrapped) {
							(result.value = unwrapped), resolve(result);
						},
						function (error) {
							return invoke("throw", error, resolve, reject);
						}
					);
			}
			reject(record.arg);
		}
		var previousPromise;
		defineProperty(this, "_invoke", {
			value: function value(method, arg) {
				function callInvokeWithMethodAndArg() {
					return new PromiseImpl(function (resolve, reject) {
						invoke(method, arg, resolve, reject);
					});
				}
				return (previousPromise = previousPromise
					? previousPromise.then(
						callInvokeWithMethodAndArg,
						callInvokeWithMethodAndArg
					)
					: callInvokeWithMethodAndArg());
			},
		});
	}
	function makeInvokeMethod(innerFn, self, context) {
		var state = "suspendedStart";
		return function (method, arg) {
			if ("executing" === state)
				throw new Error("Generator is already running");
			if ("completed" === state) {
				if ("throw" === method) throw arg;
				return doneResult();
			}
			for (context.method = method, context.arg = arg; ; ) {
				var delegate = context.delegate;
				if (delegate) {
					var delegateResult = maybeInvokeDelegate(delegate, context);
					if (delegateResult) {
						if (delegateResult === ContinueSentinel) continue;
						return delegateResult;
					}
				}
				if ("next" === context.method)
					context.sent = context._sent = context.arg;
				else if ("throw" === context.method) {
					if ("suspendedStart" === state)
						throw ((state = "completed"), context.arg);
					context.dispatchException(context.arg);
				} else
					"return" === context.method && context.abrupt("return", context.arg);
				state = "executing";
				var record = tryCatch(innerFn, self, context);
				if ("normal" === record.type) {
					if (
						((state = context.done ? "completed" : "suspendedYield"),
						record.arg === ContinueSentinel)
					)
						continue;
					return { value: record.arg, done: context.done };
				}
				"throw" === record.type &&
          ((state = "completed"),
          (context.method = "throw"),
          (context.arg = record.arg));
			}
		};
	}
	function maybeInvokeDelegate(delegate, context) {
		var methodName = context.method,
			method = delegate.iterator[methodName];
		if (undefined === method)
			return (
				(context.delegate = null),
				("throw" === methodName &&
          delegate.iterator["return"] &&
          ((context.method = "return"),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          "throw" === context.method)) ||
          ("return" !== methodName &&
            ((context.method = "throw"),
            (context.arg = new TypeError(
            	"The iterator does not provide a '" + methodName + "' method"
            )))),
				ContinueSentinel
			);
		var record = tryCatch(method, delegate.iterator, context.arg);
		if ("throw" === record.type)
			return (
				(context.method = "throw"),
				(context.arg = record.arg),
				(context.delegate = null),
				ContinueSentinel
			);
		var info = record.arg;
		return info
			? info.done
				? ((context[delegate.resultName] = info.value),
				(context.next = delegate.nextLoc),
				"return" !== context.method &&
            ((context.method = "next"), (context.arg = undefined)),
				(context.delegate = null),
				ContinueSentinel)
				: info
			: ((context.method = "throw"),
			(context.arg = new TypeError("iterator result is not an object")),
			(context.delegate = null),
			ContinueSentinel);
	}
	function pushTryEntry(locs) {
		var entry = { tryLoc: locs[0] };
		1 in locs && (entry.catchLoc = locs[1]),
		2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
		this.tryEntries.push(entry);
	}
	function resetTryEntry(entry) {
		var record = entry.completion || {};
		(record.type = "normal"), delete record.arg, (entry.completion = record);
	}
	function Context(tryLocsList) {
		(this.tryEntries = [{ tryLoc: "root" }]),
		tryLocsList.forEach(pushTryEntry, this),
		this.reset(!0);
	}
	function values(iterable) {
		if (iterable) {
			var iteratorMethod = iterable[iteratorSymbol];
			if (iteratorMethod) return iteratorMethod.call(iterable);
			if ("function" == typeof iterable.next) return iterable;
			if (!isNaN(iterable.length)) {
				var i = -1,
					next = function next() {
						for (; ++i < iterable.length; )
							if (hasOwn.call(iterable, i))
								return (next.value = iterable[i]), (next.done = !1), next;
						return (next.value = undefined), (next.done = !0), next;
					};
				return (next.next = next);
			}
		}
		return { next: doneResult };
	}
	function doneResult() {
		return { value: undefined, done: !0 };
	}
	return (
		(GeneratorFunction.prototype = GeneratorFunctionPrototype),
		defineProperty(Gp, "constructor", {
			value: GeneratorFunctionPrototype,
			configurable: !0,
		}),
		defineProperty(GeneratorFunctionPrototype, "constructor", {
			value: GeneratorFunction,
			configurable: !0,
		}),
		(GeneratorFunction.displayName = define(
			GeneratorFunctionPrototype,
			toStringTagSymbol,
			"GeneratorFunction"
		)),
		(exports.isGeneratorFunction = function (genFun) {
			var ctor = "function" == typeof genFun && genFun.constructor;
			return (
				!!ctor &&
        (ctor === GeneratorFunction ||
          "GeneratorFunction" === (ctor.displayName || ctor.name))
			);
		}),
		(exports.mark = function (genFun) {
			return (
				Object.setPrototypeOf
					? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
					: ((genFun.__proto__ = GeneratorFunctionPrototype),
					define(genFun, toStringTagSymbol, "GeneratorFunction")),
				(genFun.prototype = Object.create(Gp)),
				genFun
			);
		}),
		(exports.awrap = function (arg) {
			return { __await: arg };
		}),
		defineIteratorMethods(AsyncIterator.prototype),
		define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
			return this;
		}),
		(exports.AsyncIterator = AsyncIterator),
		(exports.async = function (
			innerFn,
			outerFn,
			self,
			tryLocsList,
			PromiseImpl
		) {
			void 0 === PromiseImpl && (PromiseImpl = Promise);
			var iter = new AsyncIterator(
				wrap(innerFn, outerFn, self, tryLocsList),
				PromiseImpl
			);
			return exports.isGeneratorFunction(outerFn)
				? iter
				: iter.next().then(function (result) {
					return result.done ? result.value : iter.next();
				});
		}),
		defineIteratorMethods(Gp),
		define(Gp, toStringTagSymbol, "Generator"),
		define(Gp, iteratorSymbol, function () {
			return this;
		}),
		define(Gp, "toString", function () {
			return "[object Generator]";
		}),
		(exports.keys = function (val) {
			var object = Object(val),
				keys = [];
			for (var key in object) keys.push(key);
			return (
				keys.reverse(),
				function next() {
					for (; keys.length; ) {
						var key = keys.pop();
						if (key in object)
							return (next.value = key), (next.done = !1), next;
					}
					return (next.done = !0), next;
				}
			);
		}),
		(exports.values = values),
		(Context.prototype = {
			constructor: Context,
			reset: function reset(skipTempReset) {
				if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = undefined),
					(this.done = !1),
					(this.delegate = null),
					(this.method = "next"),
					(this.arg = undefined),
					this.tryEntries.forEach(resetTryEntry),
					!skipTempReset)
				)
					for (var name in this)
						"t" === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
			},
			stop: function stop() {
				this.done = !0;
				var rootRecord = this.tryEntries[0].completion;
				if ("throw" === rootRecord.type) throw rootRecord.arg;
				return this.rval;
			},
			dispatchException: function dispatchException(exception) {
				if (this.done) throw exception;
				var context = this;
				function handle(loc, caught) {
					return (
						(record.type = "throw"),
						(record.arg = exception),
						(context.next = loc),
						caught && ((context.method = "next"), (context.arg = undefined)),
						!!caught
					);
				}
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i],
						record = entry.completion;
					if ("root" === entry.tryLoc) return handle("end");
					if (entry.tryLoc <= this.prev) {
						var hasCatch = hasOwn.call(entry, "catchLoc"),
							hasFinally = hasOwn.call(entry, "finallyLoc");
						if (hasCatch && hasFinally) {
							if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
							if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
						} else if (hasCatch) {
							if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
						} else {
							if (!hasFinally)
								throw new Error("try statement without catch or finally");
							if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
						}
					}
				}
			},
			abrupt: function abrupt(type, arg) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (
						entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc
					) {
						var finallyEntry = entry;
						break;
					}
				}
				finallyEntry &&
          ("break" === type || "continue" === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
				var record = finallyEntry ? finallyEntry.completion : {};
				return (
					(record.type = type),
					(record.arg = arg),
					finallyEntry
						? ((this.method = "next"),
						(this.next = finallyEntry.finallyLoc),
						ContinueSentinel)
						: this.complete(record)
				);
			},
			complete: function complete(record, afterLoc) {
				if ("throw" === record.type) throw record.arg;
				return (
					"break" === record.type || "continue" === record.type
						? (this.next = record.arg)
						: "return" === record.type
							? ((this.rval = this.arg = record.arg),
							(this.method = "return"),
							(this.next = "end"))
							: "normal" === record.type && afterLoc && (this.next = afterLoc),
					ContinueSentinel
				);
			},
			finish: function finish(finallyLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.finallyLoc === finallyLoc)
						return (
							this.complete(entry.completion, entry.afterLoc),
							resetTryEntry(entry),
							ContinueSentinel
						);
				}
			},
			catch: function _catch(tryLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.tryLoc === tryLoc) {
						var record = entry.completion;
						if ("throw" === record.type) {
							var thrown = record.arg;
							resetTryEntry(entry);
						}
						return thrown;
					}
				}
				throw new Error("illegal catch attempt");
			},
			delegateYield: function delegateYield(iterable, resultName, nextLoc) {
				return (
					(this.delegate = {
						iterator: values(iterable),
						resultName: resultName,
						nextLoc: nextLoc,
					}),
					"next" === this.method && (this.arg = undefined),
					ContinueSentinel
				);
			},
		}),
		exports
	);
}
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
var knex = require("../../../mysql");
var _default = {
	Query: {
		bancadas: (function () {
			var _bancadas = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
					return _regeneratorRuntime().wrap(function _callee$(_context) {
						while (1)
							switch ((_context.prev = _context.next)) {
							case 0:
								return _context.abrupt(
									"return",
									knex("bancadas").select("*")
								);
							case 1:
							case "end":
								return _context.stop();
							}
					}, _callee);
				})
			);
			function bancadas() {
				return _bancadas.apply(this, arguments);
			}
			return bancadas;
		})(),
		bancada: (function () {
			var _bancada = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(_, _ref) {
					var idBancada, bancada;
					return _regeneratorRuntime().wrap(function _callee2$(_context2) {
						while (1)
							switch ((_context2.prev = _context2.next)) {
							case 0:
								idBancada = _ref.idBancada;
								_context2.next = 3;
								return knex("bancadas").where("idBancada", idBancada).first();
							case 3:
								bancada = _context2.sent;
								return _context2.abrupt("return", bancada);
							case 5:
							case "end":
								return _context2.stop();
							}
					}, _callee2);
				})
			);
			function bancada(_x, _x2) {
				return _bancada.apply(this, arguments);
			}
			return bancada;
		})(),
		bancadasByLocal: (function () {
			var _bancadasByLocal = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(_, _ref2) {
					var local, bancadas;
					return _regeneratorRuntime().wrap(function _callee3$(_context3) {
						while (1)
							switch ((_context3.prev = _context3.next)) {
							case 0:
								local = _ref2.local;
								_context3.next = 3;
								return knex("bancadas").where("local", local);
							case 3:
								bancadas = _context3.sent;
								return _context3.abrupt("return", bancadas);
							case 5:
							case "end":
								return _context3.stop();
							}
					}, _callee3);
				})
			);
			function bancadasByLocal(_x3, _x4) {
				return _bancadasByLocal.apply(this, arguments);
			}
			return bancadasByLocal;
		})(),
		bancadasByStatus: (function () {
			var _bancadasByStatus = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(_, _ref3) {
					var status, bancadas;
					return _regeneratorRuntime().wrap(function _callee4$(_context4) {
						while (1)
							switch ((_context4.prev = _context4.next)) {
							case 0:
								status = _ref3.status;
								_context4.next = 3;
								return knex("bancadas").where("status", status);
							case 3:
								bancadas = _context4.sent;
								return _context4.abrupt("return", bancadas);
							case 5:
							case "end":
								return _context4.stop();
							}
					}, _callee4);
				})
			);
			function bancadasByStatus(_x5, _x6) {
				return _bancadasByStatus.apply(this, arguments);
			}
			return bancadasByStatus;
		})(),
		searchBancadas: (function () {
			var _searchBancadas = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(_, _ref4) {
					var filter, bancadas;
					return _regeneratorRuntime().wrap(function _callee5$(_context5) {
						while (1)
							switch ((_context5.prev = _context5.next)) {
							case 0:
								filter = _ref4.filter;
								_context5.next = 3;
								return knex("bancadas").where(function (builder) {
									if (filter.local) {
										builder.where(
											"local",
											"like",
											"%".concat(filter.local, "%")
										);
									}
									if (filter.status) {
										builder.where("status", filter.status);
									}
								});
							case 3:
								bancadas = _context5.sent;
								return _context5.abrupt("return", bancadas);
							case 5:
							case "end":
								return _context5.stop();
							}
					}, _callee5);
				})
			);
			function searchBancadas(_x7, _x8) {
				return _searchBancadas.apply(this, arguments);
			}
			return searchBancadas;
		})(),
	},
	Mutation: {
		createBancada: (function () {
			var _createBancada = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(_, _ref5) {
					var data, _yield$knex$insert, _yield$knex$insert2, id, novaBancada;
					return _regeneratorRuntime().wrap(function _callee6$(_context6) {
						while (1)
							switch ((_context6.prev = _context6.next)) {
							case 0:
								data = _ref5.data;
								_context6.next = 3;
								return knex("bancadas").insert(data);
							case 3:
								_yield$knex$insert = _context6.sent;
								_yield$knex$insert2 = _slicedToArray(_yield$knex$insert, 1);
								id = _yield$knex$insert2[0];
								_context6.next = 8;
								return knex("bancadas").where("idBancada", id).first();
							case 8:
								novaBancada = _context6.sent;
								return _context6.abrupt("return", novaBancada);
							case 10:
							case "end":
								return _context6.stop();
							}
					}, _callee6);
				})
			);
			function createBancada(_x9, _x10) {
				return _createBancada.apply(this, arguments);
			}
			return createBancada;
		})(),
		updateBancada: (function () {
			var _updateBancada = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(_, _ref6) {
					var idBancada, data, bancadaAtualizada, bancada;
					return _regeneratorRuntime().wrap(function _callee7$(_context7) {
						while (1)
							switch ((_context7.prev = _context7.next)) {
							case 0:
								(idBancada = _ref6.idBancada), (data = _ref6.data);
								_context7.next = 3;
								return knex("bancadas")
									.where("idBancada", idBancada)
									.update(data);
							case 3:
								bancadaAtualizada = _context7.sent;
								_context7.next = 6;
								return knex("bancadas").where("idBancada", idBancada).first();
							case 6:
								bancada = _context7.sent;
								return _context7.abrupt("return", bancada);
							case 8:
							case "end":
								return _context7.stop();
							}
					}, _callee7);
				})
			);
			function updateBancada(_x11, _x12) {
				return _updateBancada.apply(this, arguments);
			}
			return updateBancada;
		})(),
		deleteBancada: (function () {
			var _deleteBancada = _asyncToGenerator(
				/*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(_, _ref7) {
					var idBancada;
					return _regeneratorRuntime().wrap(function _callee8$(_context8) {
						while (1)
							switch ((_context8.prev = _context8.next)) {
							case 0:
								idBancada = _ref7.idBancada;
								_context8.next = 3;
								return knex("bancadas").where("idBancada", idBancada).del();
							case 3:
								return _context8.abrupt("return", true);
							case 4:
							case "end":
								return _context8.stop();
							}
					}, _callee8);
				})
			);
			function deleteBancada(_x13, _x14) {
				return _deleteBancada.apply(this, arguments);
			}
			return deleteBancada;
		})(),
	},
};
exports["default"] = _default;
