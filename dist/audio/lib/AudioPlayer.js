"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayer = void 0;
var _jsUtils = require("@sol.ac/js-utils");
var _AudioCategory = require("../constants/AudioCategory");
var _AudioLoader = require("./AudioLoader");
var _AudioVolumeManager = require("./AudioVolumeManager");
var _AudioList = require("./AudioList");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _loader = /*#__PURE__*/new WeakMap();
var _volumeManager = /*#__PURE__*/new WeakMap();
var _playing = /*#__PURE__*/new WeakMap();
var _listeners = /*#__PURE__*/new WeakMap();
var AudioPlayer = exports.AudioPlayer = /*#__PURE__*/function () {
  // Constructor //

  function AudioPlayer(loader, volumeManager) {
    _classCallCheck(this, AudioPlayer);
    // Attributes //

    _classPrivateFieldInitSpec(this, _loader, void 0);
    _classPrivateFieldInitSpec(this, _volumeManager, void 0);
    _classPrivateFieldInitSpec(this, _playing, void 0);
    _classPrivateFieldInitSpec(this, _listeners, []);
    _classPrivateFieldSet(_loader, this, loader || new _AudioLoader.AudioLoader());
    _classPrivateFieldSet(_volumeManager, this, volumeManager || new _AudioVolumeManager.AudioVolumeManager());
    _classPrivateFieldSet(_playing, this, []);
  }

  // Getters & Setters //
  return _createClass(AudioPlayer, [{
    key: "playing",
    get: function get() {
      return _classPrivateFieldGet(_playing, this);
    }
  }, {
    key: "master",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).master;
    },
    set: function set(on) {
      _classPrivateFieldGet(_volumeManager, this).master = on;
    }
  }, {
    key: "masterVolume",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).masterVolume;
    },
    set: function set(volume) {
      _classPrivateFieldGet(_volumeManager, this).masterVolume = volume;
    }
  }, {
    key: "game",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).game;
    },
    set: function set(on) {
      _classPrivateFieldGet(_volumeManager, this).game = on;
    }
  }, {
    key: "gameVolume",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).gameVolume;
    },
    set: function set(volume) {
      _classPrivateFieldGet(_volumeManager, this).gameVolume = volume;
    }
  }, {
    key: "music",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).music;
    },
    set: function set(on) {
      _classPrivateFieldGet(_volumeManager, this).music = on;
    }
  }, {
    key: "musicVolume",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).musicVolume;
    },
    set: function set(volume) {
      _classPrivateFieldGet(_volumeManager, this).musicVolume = volume;
    }
  }, {
    key: "ui",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).ui;
    },
    set: function set(on) {
      _classPrivateFieldGet(_volumeManager, this).ui = on;
    }
  }, {
    key: "uiVolume",
    get: function get() {
      return _classPrivateFieldGet(_volumeManager, this).uiVolume;
    },
    set: function set(volume) {
      _classPrivateFieldGet(_volumeManager, this).uiVolume = volume;
    }

    // Public methods //
  }, {
    key: "register",
    value: function register(listener) {
      _classPrivateFieldGet(_listeners, this).push(listener);
    }
  }, {
    key: "unregister",
    value: function unregister(listener) {
      _classPrivateFieldSet(_listeners, this, _jsUtils.ArrayUtils.removeElement(_classPrivateFieldGet(_listeners, this), listener));
    }
  }, {
    key: "notify",
    value: function notify() {
      var _this = this;
      _classPrivateFieldGet(_listeners, this).forEach(function (listener) {
        listener({
          playing: _this.playing
        });
      });
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path, onProgress) {
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
                return _classPrivateFieldGet(_loader, _this2).load(p).then(function () {
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
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "mount",
    value: function mount(path, options) {
      var paths = _jsUtils.ObjectUtils.arrayfy(path);
      var list = new _AudioList.AudioList(paths, options);
      _classPrivateFieldGet(_playing, this).push(list);
      this.updateVolume();
      return list;
    }
  }, {
    key: "unmount",
    value: function unmount(list) {
      list.stop();
      _classPrivateFieldSet(_playing, this, _jsUtils.ArrayUtils.removeElement(_classPrivateFieldGet(_playing, this), list));
    }
  }, {
    key: "updateVolume",
    value: function updateVolume() {
      var _this3 = this;
      _classPrivateFieldGet(_playing, this).forEach(function (list) {
        switch (list.category) {
          case _AudioCategory.AudioCategories.NONE:
            {
              if (_this3.master) {
                list.volume = _this3.masterVolume;
              } else {
                list.volume = 0;
              }
              break;
            }
          case _AudioCategory.AudioCategories.GAME:
            {
              if (_this3.master && _this3.game) {
                list.volume = _this3.masterVolume * _this3.gameVolume / 100;
              } else {
                list.volume = 0;
              }
              break;
            }
          case _AudioCategory.AudioCategories.MUSIC:
            {
              if (_this3.master && _this3.music) {
                list.volume = _this3.masterVolume * _this3.musicVolume / 100;
              } else {
                list.volume = 0;
              }
              break;
            }
          case _AudioCategory.AudioCategories.UI:
            {
              if (_this3.master && _this3.ui) {
                list.volume = _this3.masterVolume * _this3.uiVolume / 100;
              } else {
                list.volume = 0;
              }
              break;
            }
        }
      });
    }
  }]);
}();