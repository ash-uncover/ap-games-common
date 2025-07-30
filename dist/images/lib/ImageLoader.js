"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLoader = void 0;
var _jsUtils = require("@sol.ac/js-utils");
var _ImageLoadState = require("../constants/ImageLoadState");
var _jsUtilsLogger = require("@sol.ac/js-utils-logger");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var LOGGER = new _jsUtilsLogger.Logger('ImageLoader');
var _images = /*#__PURE__*/new WeakMap();
var _ImageLoader_brand = /*#__PURE__*/new WeakSet();
var ImageLoader = exports.ImageLoader = /*#__PURE__*/function () {
  // Constructor //

  function ImageLoader() {
    _classCallCheck(this, ImageLoader);
    // Internal methods //
    _classPrivateMethodInitSpec(this, _ImageLoader_brand);
    // Attributes //

    _classPrivateFieldInitSpec(this, _images, {});
  }

  // Getters & Setters //
  return _createClass(ImageLoader, [{
    key: "images",
    get: function get() {
      var _this = this;
      return Object.keys(_classPrivateFieldGet(_images, this)).map(function (id) {
        return {
          id: id,
          state: _this.getImageState(id)
        };
      });
    }
  }, {
    key: "getImageState",
    value: function getImageState(id) {
      var _classPrivateFieldGet2;
      return ((_classPrivateFieldGet2 = _classPrivateFieldGet(_images, this)[id]) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.state) || _ImageLoadState.ImageLoadStates.NONE;
    }

    // Public methods //
  }, {
    key: "loadImages",
    value: function () {
      var _loadImages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path, onProgress) {
        var _this2 = this;
        var paths, loaded;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              paths = _jsUtils.ObjectUtils.arrayfy(path);
              if (!path.length) {
                _context.n = 1;
                break;
              }
              loaded = 0;
              return _context.a(2, Promise.allSettled(paths.map(function (p) {
                return _this2.load(p).then(function () {
                  if (onProgress) {
                    loaded++;
                    onProgress(loaded);
                  }
                })["catch"](function (error) {
                  if (onProgress) {
                    loaded++;
                    onProgress(loaded);
                  }
                  throw error;
                });
              })));
            case 1:
              return _context.a(2, Promise.resolve());
          }
        }, _callee);
      }));
      function loadImages(_x, _x2) {
        return _loadImages.apply(this, arguments);
      }
      return loadImages;
    }()
  }, {
    key: "load",
    value: function () {
      var _load2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
        var state, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              state = this.getImageState(id);
              _t = state;
              _context2.n = _t === _ImageLoadState.ImageLoadStates.NONE ? 1 : _t === _ImageLoadState.ImageLoadStates.LOADING ? 2 : _t === _ImageLoadState.ImageLoadStates.LOAD_ERROR ? 3 : _t === _ImageLoadState.ImageLoadStates.LOADED ? 4 : 5;
              break;
            case 1:
              _assertClassBrand(_ImageLoader_brand, this, _load).call(this, id);
            case 2:
              return _context2.a(2, _classPrivateFieldGet(_images, this)[id].loader);
            case 3:
              return _context2.a(2, Promise.reject());
            case 4:
              return _context2.a(2, Promise.resolve());
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function load(_x3) {
        return _load2.apply(this, arguments);
      }
      return load;
    }()
  }]);
}();
function _load(_x4) {
  return _load3.apply(this, arguments);
}
function _load3() {
  _load3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    var _this3 = this;
    var image, loader;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          image = new Image();
          loader = new Promise(function (resolve, reject) {
            LOGGER.debug("load ".concat(id));
            image.addEventListener('load', function () {
              return _assertClassBrand(_ImageLoader_brand, _this3, _loadSuccess).call(_this3, id, resolve);
            });
            image.addEventListener('error', function () {
              return _assertClassBrand(_ImageLoader_brand, _this3, _loadError).call(_this3, id, reject);
            });
            image.src = id;
          });
          _classPrivateFieldGet(_images, this)[id] = {
            image: image,
            state: _ImageLoadState.ImageLoadStates.LOADING,
            loader: loader
          };
        case 1:
          return _context3.a(2);
      }
    }, _callee3, this);
  }));
  return _load3.apply(this, arguments);
}
function _loadSuccess(id, cb) {
  _classPrivateFieldGet(_images, this)[id].state = _ImageLoadState.ImageLoadStates.LOADED;
  LOGGER.debug("load ".concat(id, " - canplaythrough"));
  cb();
}
function _loadError(id, cb) {
  _classPrivateFieldGet(_images, this)[id].state = _ImageLoadState.ImageLoadStates.LOAD_ERROR;
  LOGGER.debug("load ".concat(id, " - canplaythrough"));
  cb();
}