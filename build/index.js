module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioBtn = function (_Component) {
  _inherits(RadioBtn, _Component);

  function RadioBtn(props) {
    _classCallCheck(this, RadioBtn);

    var _this = _possibleConstructorReturn(this, (RadioBtn.__proto__ || Object.getPrototypeOf(RadioBtn)).call(this, props));

    _this.state = {
      radius: props.size / 2,
      stroke: props.size / 3,
      font: props.size * 2 / 3
    };
    return _this;
  }

  _createClass(RadioBtn, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handler(this.props.index);
    }
  }, {
    key: 'render',
    value: function render() {
      var button = void 0;
      if (!this.props.useImages) {
        button = _react2.default.createElement(
          'svg',
          { width: this.props.size, height: this.props.size, style: { display: 'inline-block', padding: '6px 8px 8px 8px' } },
          _react2.default.createElement('circle', {
            cx: this.state.radius,
            cy: this.state.radius,
            r: this.state.radius,
            fill: this.props.isChecked ? this.props.color : "transparent",
            stroke: this.props.color,
            strokeWidth: 3
          })
        );
      } else {
        button = _react2.default.createElement('img', { src: this.props.isChecked ? this.props.fill : this.props.blank,
          style: { padding: '6px 8px 8px 8px', width: this.props.size, height: this.props.size, display: 'inline-block' }
        });
      }

      if (this.props.horizontal) {
        return _react2.default.createElement(
          'span',
          { className: 'radio-btn-group', onClick: this.handleClick.bind(this) },
          _react2.default.createElement('span', { className: this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked", 'data-value': this.props.value }),
          button,
          _react2.default.createElement(
            'label',
            { style: { fontSize: this.state.radius, position: 'relative', bottom: this.state.radius, padding: '0 15px 0 0' } },
            this.props.text
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'radio-btn-group', onClick: this.handleClick.bind(this) },
          _react2.default.createElement('div', { className: this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked", 'data-value': this.props.value }),
          button,
          _react2.default.createElement(
            'label',
            { style: { fontSize: this.props.size, position: 'relative', bottom: this.state.radius, display: 'inline-block' } },
            this.props.text
          )
        );
      }
    }
  }]);

  return RadioBtn;
}(_react.Component);

var RadioSet = function (_Component2) {
  _inherits(RadioSet, _Component2);

  function RadioSet(props) {
    _classCallCheck(this, RadioSet);

    var _this2 = _possibleConstructorReturn(this, (RadioSet.__proto__ || Object.getPrototypeOf(RadioSet)).call(this, props));

    _this2.state = {
      selectedIndex: props.defaultIndex || 0,
      selectedValue: props.options[props.defaultIndex || 0],
      options: props.options,
      horizontal: props.horizontal,
      fill: props.fill,
      blank: props.blank,
      color: props.color || "#b3c1cb",
      size: props.size || "32px",
      useImages: props.useImages || false
    };
    return _this2;
  }

  _createClass(RadioSet, [{
    key: 'toggle',
    value: function toggle(selection) {
      this.setState({
        selectedIndex: selection,
        selectedValue: this.state.options[selection]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.state.options.map(function (option, i) {
          return _react2.default.createElement(RadioBtn, {
            key: i,
            isChecked: _this3.state.selectedIndex === i,
            text: option,
            value: option,
            index: i,
            handler: _this3.toggle.bind(_this3),
            horizontal: _this3.state.horizontal,
            color: _this3.state.color,
            fill: _this3.state.fill,
            blank: _this3.state.blank,
            size: _this3.state.size,
            useImages: _this3.state.useImages
          });
        })
      );
    }
  }]);

  return RadioSet;
}(_react.Component);

exports.default = RadioSet;

/***/ })
/******/ ]);