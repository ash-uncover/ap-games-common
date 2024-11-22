"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioList = void 0;
var _jsUtils = require("@uncover/js-utils");
var _AudioCategory = require("../constants/AudioCategory");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var callback;
var _paths = /*#__PURE__*/new WeakMap();
var _current = /*#__PURE__*/new WeakMap();
var _audio = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _volume = /*#__PURE__*/new WeakMap();
var _onEnd = /*#__PURE__*/new WeakMap();
var _AudioList_brand = /*#__PURE__*/new WeakSet();
var AudioList = exports.AudioList = /*#__PURE__*/function () {
  // Constructor //

  function AudioList(paths, options) {
    _classCallCheck(this, AudioList);
    // Internal methods //
    _classPrivateMethodInitSpec(this, _AudioList_brand);
    // Attributes //

    _classPrivateFieldInitSpec(this, _paths, void 0);
    _classPrivateFieldInitSpec(this, _current, 0);
    _classPrivateFieldInitSpec(this, _audio, new Audio());
    _classPrivateFieldInitSpec(this, _options, void 0);
    _classPrivateFieldInitSpec(this, _volume, 100);
    _classPrivateFieldInitSpec(this, _onEnd, void 0);
    callback = _assertClassBrand(_AudioList_brand, this, _handleEnd).bind(this);
    _classPrivateFieldSet(_options, this, options || {});
    _classPrivateFieldSet(_paths, this, paths);
    if (_classPrivateFieldGet(_options, this).shufffle) {
      _classPrivateFieldSet(_paths, this, _jsUtils.ArrayUtils.shuffle(_classPrivateFieldGet(_paths, this)));
    }
    _assertClassBrand(_AudioList_brand, this, _prepare).call(this, 0);
  }

  // Getters & Setters //
  return _createClass(AudioList, [{
    key: "onEnd",
    set: function set(listener) {
      _classPrivateFieldSet(_onEnd, this, listener);
    }
  }, {
    key: "category",
    get: function get() {
      return _classPrivateFieldGet(_options, this).category || _AudioCategory.AudioCategories.NONE;
    }
  }, {
    key: "volume",
    set: function set(v) {
      _classPrivateFieldSet(_volume, this, v);
      _classPrivateFieldGet(_audio, this).volume = v / 100;
    }

    // Public methods //
  }, {
    key: "previous",
    value: function previous() {
      if (_classPrivateFieldGet(_audio, this).currentTime > 1000) {
        this.stop();
        this.play();
      } else {
        this.pause();
        _assertClassBrand(_AudioList_brand, this, _prepare).call(this, _classPrivateFieldGet(_current, this) - 1);
        this.play();
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.pause();
      _assertClassBrand(_AudioList_brand, this, _prepare).call(this, _classPrivateFieldGet(_current, this) + 1);
      this.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      var audio = _classPrivateFieldGet(_audio, this);
      audio.load();
    }
  }, {
    key: "pause",
    value: function pause() {
      var audio = _classPrivateFieldGet(_audio, this);
      audio.pause();
    }
  }, {
    key: "play",
    value: function play() {
      var audio = _classPrivateFieldGet(_audio, this);
      audio.play();
    }
  }]);
}();
function _prepare(index) {
  _classPrivateFieldGet(_audio, this).removeEventListener('ended', callback);
  var realIndex = (index + _classPrivateFieldGet(_paths, this).length) % _classPrivateFieldGet(_paths, this).length;
  _classPrivateFieldSet(_current, this, realIndex);
  _classPrivateFieldSet(_audio, this, new Audio(_classPrivateFieldGet(_paths, this)[realIndex]));
  _classPrivateFieldGet(_audio, this).volume = _classPrivateFieldGet(_volume, this) / 100;
  _classPrivateFieldGet(_audio, this).addEventListener('ended', callback);
}
function _handleEnd() {
  if (_classPrivateFieldGet(_current, this) < _classPrivateFieldGet(_paths, this).length - 1) {
    this.next();
  } else if (_classPrivateFieldGet(_options, this).loop && _classPrivateFieldGet(_current, this) === _classPrivateFieldGet(_paths, this).length - 1) {
    this.next();
  } else if (!_classPrivateFieldGet(_options, this).loop && _classPrivateFieldGet(_current, this) === _classPrivateFieldGet(_paths, this).length - 1 && _classPrivateFieldGet(_onEnd, this)) {
    _classPrivateFieldGet(_onEnd, this).call(this);
  }
}