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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/less.less":
/*!***********************!*\
  !*** ./css/less.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./css/less.less?");

/***/ }),

/***/ "./css/scss.scss":
/*!***********************!*\
  !*** ./css/scss.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./css/scss.scss?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myscript */ \"./src/myscript.js\");\n/* harmony import */ var _myJson_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myJson.json */ \"./src/myJson.json\");\nvar _myJson_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./myJson.json */ \"./src/myJson.json\", 1);\n/* harmony import */ var _webpack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpack.png */ \"./src/webpack.png\");\n/* harmony import */ var _xmlFile_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xmlFile.xml */ \"./src/xmlFile.xml\");\n/* harmony import */ var _xmlFile_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xmlFile_xml__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pathToStyleDir_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pathToStyleDir/style.css */ \"./css/style.css\");\n/* harmony import */ var _pathToStyleDir_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pathToStyleDir_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_less_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/less.less */ \"./css/less.less\");\n/* harmony import */ var _css_less_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_less_less__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_scss_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/scss.scss */ \"./css/scss.scss\");\n/* harmony import */ var _css_scss_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_scss_scss__WEBPACK_IMPORTED_MODULE_6__);\n//import * as $ from 'jquery'; // переводится как имортируем всё в переменную $ или можно import $ from \"jquery\";\r\n\r\n // можно импортировать json файлы\r\n // можно импортировать картинки\r\n // возможность работать с xml\r\n // или \"../css/style.css\"\r\n\r\n\r\n\r\n\r\nconst message = new _myscript__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"hello frate\");\r\n\r\n// alert(message);\r\n// alert(json[0].name + \" \" + json[1].surname);\r\n// document.body.innerHTML += `<span>${image}</span>`;\r\n// console.log(xmlFile);\r\n// $(\"h1\").text(\"zzzzz\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/myJson.json":
/*!*************************!*\
  !*** ./src/myJson.json ***!
  \*************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Vladislav\\\"},{\\\"surname\\\":\\\"Tomasciuc\\\"}]\");\n\n//# sourceURL=webpack:///./src/myJson.json?");

/***/ }),

/***/ "./src/myscript.js":
/*!*************************!*\
  !*** ./src/myscript.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mymessage; });\nclass Mymessage {\r\n    constructor(title) {\r\n        this.title = title;\r\n    }\r\n\r\n    toString() {\r\n        return this.title;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/myscript.js?");

/***/ }),

/***/ "./src/webpack.png":
/*!*************************!*\
  !*** ./src/webpack.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"855c92f49fddc8ca5d72c2eadf9b06db.png\");\n\n//# sourceURL=webpack:///./src/webpack.png?");

/***/ }),

/***/ "./src/xmlFile.xml":
/*!*************************!*\
  !*** ./src/xmlFile.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"email\":{\"to\":[\"Vladislav\"],\"from\":[\"Webpack\"],\"heading\":[\"Tutorial\"],\"body\":[\"Finish the record\"]}}\n\n//# sourceURL=webpack:///./src/xmlFile.xml?");

/***/ })

/******/ });