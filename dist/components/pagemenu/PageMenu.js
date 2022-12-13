"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PageMenuContent = require("./PageMenuContent");
var _PageMenuSide = require("./PageMenuSide");
require("./PageMenu.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BACK = '__BACK__';
var PageMenu = function PageMenu(_ref) {
  var page = _ref.page;
  // Hooks //

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    parentPages = _useState2[0],
    setParentPages = _useState2[1];
  var _useState3 = (0, _react.useState)(page),
    _useState4 = _slicedToArray(_useState3, 2),
    menuPage = _useState4[0],
    setMenuPage = _useState4[1];
  var _useState5 = (0, _react.useState)(page.content ? page : page.pages[0]),
    _useState6 = _slicedToArray(_useState5, 2),
    displayPage = _useState6[0],
    setDisplayPage = _useState6[1];

  // Events //

  var handleItemClick = function handleItemClick(id) {
    if (id === BACK && parentPages.length) {
      var newPage = parentPages.pop();
      setMenuPage(newPage);
      setDisplayPage(newPage.content ? newPage : newPage.pages[0]);
      setParentPages(parentPages);
    } else {
      var _newPage = menuPage.pages.find(function (childPage) {
        return childPage.id === id;
      });
      if (_newPage.pages && _newPage.pages.length) {
        parentPages.push(menuPage);
        setMenuPage(_newPage);
        setDisplayPage(_newPage.content ? _newPage : _newPage.pages[0]);
        setParentPages(parentPages);
      } else {
        setDisplayPage(_newPage);
      }
    }
  };

  // Rendering //

  var buildItems = function buildItems() {
    var links = (menuPage.pages || []).map(function (subPage) {
      return {
        id: subPage.id,
        icon: subPage.icon,
        selected: subPage === displayPage,
        text: subPage.title
      };
    });
    if (parentPages.length) {
      links.push({
        id: BACK,
        selected: false,
        text: 'Back'
      });
    }
    return links;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-menu"
  }, /*#__PURE__*/_react["default"].createElement(_PageMenuSide.PageMenuSide, {
    collapsed: false,
    title: menuPage.title,
    items: buildItems(),
    onItemClick: handleItemClick
  }), /*#__PURE__*/_react["default"].createElement(_PageMenuContent.PageMenuContent, null, displayPage.content));
};
exports.PageMenu = PageMenu;