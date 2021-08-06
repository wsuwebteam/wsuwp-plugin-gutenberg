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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/gutenberg-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/gutenberg-editor.js":
/*!*******************************************!*\
  !*** ./assets/src/js/gutenberg-editor.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_wsuwp_row_editor_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/wsuwp-row/editor/block */ "./blocks/wsuwp-row/editor/block.js");
/* harmony import */ var _blocks_wsuwp_column_editor_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/wsuwp-column/editor/block */ "./blocks/wsuwp-column/editor/block.js");



/***/ }),

/***/ "./blocks/wsuwp-column/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-column/editor/block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-column/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-column/editor/save.js");


/**
 *
 * WordPress Dependencies
 *
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Icon
} = wp.components;


registerBlockType("wsuwp/column", {
  title: "Column",
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    layout: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-column/editor/edit.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-column/editor/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl
} = wp.components; //import EditOptions from './edit-options';
//import { SpacingSelector, DecoratorControl,
//SpacingPanelVertical } from '../../../block-controls';

/*const columnFormats = [

	{
		label: 'Single',
		slug: 'single',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
		]
	},
	{
		label: 'Halves',
		slug: 'halves',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Thirds',
		slug: 'thirds',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Quarters',
		slug: 'quarters',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Right',
		slug: 'sidebar-right',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Left',
		slug: 'sidebar-left',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
];

/*const LayoutOption = ( layout, attributes, setAttributes  ) => {

	return (
		<li 
			className="wsu-c-columns-editor__option"
			onClick={ ( event ) => { setAttributes( { layout : layout.slug } ) } }
			>
			{layout.icon}
			<span className="wsu-c-columns-editor__option__label">{layout.label}</span>
		</li>
	);
}

/*const getColumnsTemplate = ( attributes ) => {

	let slug = ( attributes.layout ) ? attributes.layout : 'single';

	let template = [];

	columnFormats.forEach( ( layout ) => { 
			if ( slug == layout.slug ) {
				template = layout.template;
			}
		} 
	)

	return template;
}*/

const rowEdit = ({
  className,
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Row Here");
  /*{ 
  	if ( ! attributes.layout ) {
  
  		return (
  			<div className="wsu-c-columns-editor__wrapper">
  				<div className="wsu-c-columns-editor__title">Select Column Layout</div>
  				<ul className="wsu-c-columns-editor__options">
  				{ columnFormats.map( ( layout ) => LayoutOption( layout, attributes, setAttributes ) ) }
  				</ul>
  			</div>
  		)
  
  	} else {
  		return (
  			<>
  				{
  					<InspectorControls>
  						<DecoratorControl 
  							decorators={attributes.decorators}
  							onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
  							/>
  						<PanelBody title="Style" initialOpen={false}>
  							<SelectControl
  								label="Background Color"
  								value={attributes.backgroundColor}
  								onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
  								options={[
  									{ label: 'Default', value: 'default' },
  									{ label: 'White', value: 'white' },
  									{ label: 'Gray 5%', value: 'gray-5' },
  									{ label: 'Gray 10%', value: 'gray-10' },
  								]}
  							/>
  						</PanelBody>
  
  						<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
  					</InspectorControls>
  				}
  				<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout }  >
  					<InnerBlocks
  						template={ getColumnsTemplate( attributes ) }
  						templateLock={ "insert" }
  						allowedBlocks={ ['wsuwp/column'] }
  					/>
  				</div>
  			</>
  		)
  	}
  }*/
};

/* harmony default export */ __webpack_exports__["default"] = (rowEdit);

/***/ }),

/***/ "./blocks/wsuwp-column/editor/save.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-column/editor/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;

const columnSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (columnSave);

/***/ }),

/***/ "./blocks/wsuwp-row/editor/block.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-row/editor/block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-row/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-row/editor/save.js");


/**
 *
 * WordPress Dependencies
 *
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Icon
} = wp.components;


registerBlockType("wsuwp/row", {
  title: "Columns",
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    layout: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-row/editor/edit.js":
/*!*****************************************!*\
  !*** ./blocks/wsuwp-row/editor/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl
} = wp.components; //import EditOptions from './edit-options';
//import { SpacingSelector, DecoratorControl,
//SpacingPanelVertical } from '../../../block-controls';

/*const columnFormats = [

	{
		label: 'Single',
		slug: 'single',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
		]
	},
	{
		label: 'Halves',
		slug: 'halves',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Thirds',
		slug: 'thirds',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Quarters',
		slug: 'quarters',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Right',
		slug: 'sidebar-right',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Left',
		slug: 'sidebar-left',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" fill="black"/></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
];

/*const LayoutOption = ( layout, attributes, setAttributes  ) => {

	return (
		<li 
			className="wsu-c-columns-editor__option"
			onClick={ ( event ) => { setAttributes( { layout : layout.slug } ) } }
			>
			{layout.icon}
			<span className="wsu-c-columns-editor__option__label">{layout.label}</span>
		</li>
	);
}

/*const getColumnsTemplate = ( attributes ) => {

	let slug = ( attributes.layout ) ? attributes.layout : 'single';

	let template = [];

	columnFormats.forEach( ( layout ) => { 
			if ( slug == layout.slug ) {
				template = layout.template;
			}
		} 
	)

	return template;
}*/

const rowEdit = ({
  className,
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Row Here");
  /*{ 
  	if ( ! attributes.layout ) {
  
  		return (
  			<div className="wsu-c-columns-editor__wrapper">
  				<div className="wsu-c-columns-editor__title">Select Column Layout</div>
  				<ul className="wsu-c-columns-editor__options">
  				{ columnFormats.map( ( layout ) => LayoutOption( layout, attributes, setAttributes ) ) }
  				</ul>
  			</div>
  		)
  
  	} else {
  		return (
  			<>
  				{
  					<InspectorControls>
  						<DecoratorControl 
  							decorators={attributes.decorators}
  							onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
  							/>
  						<PanelBody title="Style" initialOpen={false}>
  							<SelectControl
  								label="Background Color"
  								value={attributes.backgroundColor}
  								onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
  								options={[
  									{ label: 'Default', value: 'default' },
  									{ label: 'White', value: 'white' },
  									{ label: 'Gray 5%', value: 'gray-5' },
  									{ label: 'Gray 10%', value: 'gray-10' },
  								]}
  							/>
  						</PanelBody>
  
  						<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
  					</InspectorControls>
  				}
  				<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout }  >
  					<InnerBlocks
  						template={ getColumnsTemplate( attributes ) }
  						templateLock={ "insert" }
  						allowedBlocks={ ['wsuwp/column'] }
  					/>
  				</div>
  			</>
  		)
  	}
  }*/
};

/* harmony default export */ __webpack_exports__["default"] = (rowEdit);

/***/ }),

/***/ "./blocks/wsuwp-row/editor/save.js":
/*!*****************************************!*\
  !*** ./blocks/wsuwp-row/editor/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;

const columnsSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (columnsSave);

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg-editor.js.map