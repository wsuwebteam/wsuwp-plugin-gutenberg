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
/* harmony import */ var _js_partials_editor_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/partials/editor-config/constants */ "./assets/src/js/partials/editor-config/constants.js");
/* harmony import */ var _js_partials_editor_config_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_wsuwp_accordion_editor_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/wsuwp-accordion/editor/block */ "./blocks/wsuwp-accordion/editor/block.js");
/* harmony import */ var _blocks_wsuwp_callout_editor_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/wsuwp-callout/editor/block */ "./blocks/wsuwp-callout/editor/block.js");
/* harmony import */ var _blocks_wsuwp_note_editor_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/wsuwp-note/editor/block */ "./blocks/wsuwp-note/editor/block.js");
/* harmony import */ var _blocks_wsuwp_card_editor_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/wsuwp-card/editor/block */ "./blocks/wsuwp-card/editor/block.js");
/* harmony import */ var _blocks_wsuwp_card_group_editor_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/wsuwp-card-group/editor/block */ "./blocks/wsuwp-card-group/editor/block.js");
/* harmony import */ var _blocks_wsuwp_column_editor_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/wsuwp-column/editor/block */ "./blocks/wsuwp-column/editor/block.js");
/* harmony import */ var _blocks_wsuwp_container_editor_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/wsuwp-container/editor/block */ "./blocks/wsuwp-container/editor/block.js");
/* harmony import */ var _blocks_wsuwp_banner_editor_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/wsuwp-banner/editor/block */ "./blocks/wsuwp-banner/editor/block.js");
/* harmony import */ var _blocks_wsuwp_decorator_editor_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/wsuwp-decorator/editor/block */ "./blocks/wsuwp-decorator/editor/block.js");
/* harmony import */ var _blocks_wsuwp_hero_editor_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/wsuwp-hero/editor/block */ "./blocks/wsuwp-hero/editor/block.js");
/* harmony import */ var _blocks_wsuwp_hero_slider_editor_block__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/wsuwp-hero-slider/editor/block */ "./blocks/wsuwp-hero-slider/editor/block.js");
/* harmony import */ var _blocks_wsuwp_image_editor_block__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blocks/wsuwp-image/editor/block */ "./blocks/wsuwp-image/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_editor_block__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../blocks/wsuwp-news/editor/block */ "./blocks/wsuwp-news/editor/block.js");
/* harmony import */ var _blocks_wsuwp_row_editor_block__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../blocks/wsuwp-row/editor/block */ "./blocks/wsuwp-row/editor/block.js");
/* harmony import */ var _blocks_wsuwp_section_editor_block__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../blocks/wsuwp-section/editor/block */ "./blocks/wsuwp-section/editor/block.js");
/* harmony import */ var _blocks_wsuwp_pagetitle_editor_block__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../blocks/wsuwp-pagetitle/editor/block */ "./blocks/wsuwp-pagetitle/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_cards_editor_block__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../blocks/wsuwp-news-cards/editor/block */ "./blocks/wsuwp-news-cards/editor/block.js");
/* harmony import */ var _blocks_wsuwp_people_list_editor_block__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../blocks/wsuwp-people-list/editor/block */ "./blocks/wsuwp-people-list/editor/block.js");
/* harmony import */ var _blocks_wsuwp_people_list_editor_edit_advanced__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../blocks/wsuwp-people-list/editor/edit-advanced */ "./blocks/wsuwp-people-list/editor/edit-advanced.js");
/* harmony import */ var _blocks_wsuwp_button_editor_block__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../blocks/wsuwp-button/editor/block */ "./blocks/wsuwp-button/editor/block.js");
/* harmony import */ var _blocks_wsuwp_menu_editor_block__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../blocks/wsuwp-menu/editor/block */ "./blocks/wsuwp-menu/editor/block.js");
/* harmony import */ var _blocks_wsuwp_outline_header_editor_block__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../blocks/wsuwp-outline-header/editor/block */ "./blocks/wsuwp-outline-header/editor/block.js");
/* harmony import */ var _blocks_wsuwp_stat_editor_block__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../blocks/wsuwp-stat/editor/block */ "./blocks/wsuwp-stat/editor/block.js");
/* harmony import */ var _blocks_wsuwp_sticky_nav_editor_block__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../blocks/wsuwp-sticky-nav/editor/block */ "./blocks/wsuwp-sticky-nav/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_cards_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../blocks/wsuwp-news-cards/editor/blockEditFilter */ "./blocks/wsuwp-news-cards/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_heading_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../blocks/core-heading/editor/blockEditFilter */ "./blocks/core-heading/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_image_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../blocks/core-image/editor/blockEditFilter */ "./blocks/core-image/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_list_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../blocks/core-list/editor/blockEditFilter */ "./blocks/core-list/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_button_blockEditFilter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../blocks/core-button/blockEditFilter */ "./blocks/core-button/blockEditFilter.js");
/* harmony import */ var _blocks_core_paragraph_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../blocks/core-paragraph/editor/blockEditFilter */ "./blocks/core-paragraph/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_quote_editor_block_filter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../blocks/core-quote/editor/block-filter */ "./blocks/core-quote/editor/block-filter.js");
/* harmony import */ var _blocks_wsuwp_news_list_editor_block__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../blocks/wsuwp-news-list/editor/block */ "./blocks/wsuwp-news-list/editor/block.js");
/* harmony import */ var _js_partials_editor_config_spacing_control__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../js/partials/editor-config/spacing-control */ "./assets/src/js/partials/editor-config/spacing-control.js");
/* harmony import */ var _js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../js/partials/editor-config/allowed-embeds */ "./assets/src/js/partials/editor-config/allowed-embeds.js");
/* harmony import */ var _js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../js/partials/editor-config/block-styles */ "./assets/src/js/partials/editor-config/block-styles.js");
/* harmony import */ var _js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../js/partials/editor-config/block-categories */ "./assets/src/js/partials/editor-config/block-categories.js");
/* harmony import */ var _js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../js/partials/editor-config/block-class-name */ "./assets/src/js/partials/editor-config/block-class-name.js");
/* harmony import */ var _js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _js_partials_editor_config_block_flex_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../js/partials/editor-config/block-flex-layout */ "./assets/src/js/partials/editor-config/block-flex-layout.js");
/* harmony import */ var _js_partials_editor_config_block_flex_align_bottom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../js/partials/editor-config/block-flex-align-bottom */ "./assets/src/js/partials/editor-config/block-flex-align-bottom.js");
/* harmony import */ var _js_partials_editor_config_additional_advanced_controls_block_additional_advanced_control__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../js/partials/editor-config/additional-advanced-controls/block-additional-advanced-control */ "./assets/src/js/partials/editor-config/additional-advanced-controls/block-additional-advanced-control.js");










































/***/ }),

/***/ "./assets/src/js/partials/block-components/ApiRenderBlock.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-components/ApiRenderBlock.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);



const blockResponse = {
  queryString: '',
  rendered: 'hello world'
};

const ApiRenderBlock = ({
  attributes,
  blockName,
  onChange,
  children
}) => {
  const [blockRendered, setBlockRendered] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  blockName = blockName.replace('/', '--');
  attributes.apiRender = true;
  let queryString = Object.keys(attributes).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(attributes[key])).join('&');
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wsu-gutenberg/v1/render-block/' + blockName + '?' + queryString,
      method: 'GET'
    }).then(res => {
      let block = JSON.parse(res);
      setBlockRendered(block.rendered);
    });
  }, [queryString]);

  if (blockRendered) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-bc-api-render",
      dangerouslySetInnerHTML: {
        __html: blockRendered
      }
    });
  } else {
    return children;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ApiRenderBlock);

/***/ }),

/***/ "./assets/src/js/partials/block-components/blockComponents.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-components/blockComponents.js ***!
  \********************************************************************/
/*! exports provided: ApiRenderBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiRenderBlock */ "./assets/src/js/partials/block-components/ApiRenderBlock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiRenderBlock", function() { return _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/js/partials/block-controls/ButtonControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ButtonControl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const ButtonControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Button Link",
    value: attributes.buttonLink ? attributes.buttonLink : '',
    onChange: buttonLink => setAttributes({
      buttonLink
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ColorClassControl.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassControl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");

const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  ColorPalette
} = wp.components;


const ColorClassControl = props => {
  let {
    attributes,
    setAttributes,
    colors,
    label = 'Color',
    prefix = 'wsu-color-background--',
    value = '#ffffff',
    onSetColor = false
  } = props;

  const getSelectedColor = () => {
    var _attributes$className;

    let selectedValue = '';
    let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
    let selectedColor = onSetColor ? value : Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["getBlockClassName"])(classNames, prefix);

    if ('' !== selectedColor) {
      colors.forEach((colorObj, index) => {
        if (selectedColor === colorObj.name) {
          selectedValue = colorObj.color;
        }
      });
    }

    return selectedValue;
  };

  const getColorName = color => {
    let colorName = '';
    colors.forEach((colorObj, index) => {
      if (color === colorObj.color) {
        colorName = colorObj.name;
      }
    });
    return colorName;
  };

  const addColor = color => {
    var _attributes$className2;

    let selectedColor = getColorName(color);
    let classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
    let updatedClasses = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["addBlockClassName"])(classNames, prefix, selectedColor);
    setAttributes({
      className: updatedClasses
    });
  };

  const returnColorName = color => {
    let colorName = getColorName(color);
    onSetColor(colorName);
  };

  let pickerId = 'color-picker-' + Math.floor(Math.random() * 1000000);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    id: pickerId,
    label: label
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
    colors: colors,
    value: getSelectedColor(),
    onChange: color => {
      onSetColor ? returnColorName(color) : addColor(color);
    },
    clearable: false,
    disableCustomColors: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorClassControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassNameSelector.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/*
 @example 
 <ColorClassNameSelector
    title="Color Settings"
    colorSettings={[
        {
            label: 'Background Color',
            prefix: 'wsu-color-background--',
            colors: [
                { name: 'Gray 85', color: '#262626', className: 'gray-85' },
                { name: 'Gray 95', color: '#080808', className: 'gray-95' },
            ],
        },
        {
            label: 'Text Color',
            prefix: 'wsu-color-text--',
            colors: [			
                { name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
                { name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
            ],
        }
    ]}
    {...props}>
</ColorClassNameSelector>
*/

/**
 * Functions just like the Wordpress color picker (PanelColorSettings), but instead of 
 * saving a color code it adds a class to the component className field.
 * Each color setting requires a prefix e.g. wsu-color-text--
 * Each color requires a className e.g. gray-10
 * The result will be a class of 'wsu-color-text--gray-10' added to the component className
 */

const ColorClassNameSelector = props => {
  const {
    title,
    attributes,
    setAttributes,
    colorSettings
  } = props;

  function getColorSetting(prefix) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(colorSettings, cs => cs.prefix === prefix);
  }

  function getColorObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }

    const colorName = className.replace(prefix, '');
    const colors = getColorSetting(prefix).colors;
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(colors, c => {
      return c.className === colorName;
    });
  }

  const getSelectedColorByPrefix = prefix => {
    var _getColorObjectByClas;

    if (!attributes.className) {
      return;
    }

    const appliedClasses = attributes.className.split(' ');
    const selectedColorClassName = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(appliedClasses, c => c.startsWith(prefix));
    return (_getColorObjectByClas = getColorObjectByClassName(prefix, selectedColorClassName)) === null || _getColorObjectByClas === void 0 ? void 0 : _getColorObjectByClas.color;
  };

  const updateSelectedColors = (prefix, color) => {
    var _attributes$className, _attributes$className2;

    const colors = getColorSetting(prefix).colors;
    const colorObject = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["getColorObjectByColorValue"])(colors, color);
    const colorClass = colorObject ? prefix + colorObject.className : '';
    const appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(appliedClasses, c => !c.startsWith(prefix)).concat(colorClass);
    const newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(c => c).join(' ');
    setAttributes({
      className: newClassName
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PanelColorSettings"], {
    title: title,
    colorSettings: colorSettings.map(cs => {
      return {
        colors: cs.colors,
        value: getSelectedColorByPrefix(cs.prefix),
        onChange: color => {
          updateSelectedColors(cs.prefix, color);
        },
        label: cs.label
      };
    }),
    disableCustomGradients: true,
    disableCustomColors: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ColorClassNameSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/CountControl.js":
/*!***************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/CountControl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const CountControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Count",
    value: attributes.count ? attributes.count : '0',
    onChange: count => setAttributes({
      count
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CountControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FeedPostsControl.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FeedPostsControl.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);





const FeedPostsControl = props => {
  let {
    attributes,
    setAttributes,
    setPostType,
    setTaxonomy,
    setTerms,
    setCount,
    setOffset,
    setUseFeed
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Use Feed",
    checked: attributes.useFeed ? attributes.useFeed : false,
    onChange: value => setUseFeed(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : '',
    options: [{
      label: 'Post',
      value: 'page'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: value => setPostType(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Taxonomy",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: value => setTaxonomy(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: value => setTerms(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Count",
    value: attributes.count ? attributes.count : '',
    onChange: value => setCount(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '',
    onChange: value => setOffset(value)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeedPostsControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FontSizeControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FontSizeControl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const wsuFontSizes = [{
  label: 'Not Set',
  value: ''
}, {
  label: 'xxSmall',
  value: 'xxsmall'
}, {
  label: 'xSmall',
  value: 'xsmall'
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'xMedium',
  value: 'xmedium'
}, {
  label: 'xxMedium',
  value: 'xxmedium'
}, {
  label: 'Large',
  value: 'large'
}, {
  label: 'xLarge',
  value: 'xlarge'
}, {
  label: 'xxLarge',
  value: 'xxlarge'
}, {
  label: 'Hero',
  value: 'hero'
}];

const FontSizeControl = props => {
  var _attributes$prefix, _attributes$label, _sizes, _attributes$className;

  let {
    attributes,
    setAttributes,
    sizes
  } = props;
  let prefix = (_attributes$prefix = attributes.prefix) !== null && _attributes$prefix !== void 0 ? _attributes$prefix : 'wsu-font-size--';
  let label = (_attributes$label = attributes.label) !== null && _attributes$label !== void 0 ? _attributes$label : 'Font Size';
  sizes = (_sizes = sizes) !== null && _sizes !== void 0 ? _sizes : wsuFontSizes;
  let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  let value = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameOption"])(classNames, prefix);
  console.log(value);

  const setFontSize = size => {
    if ('onChange' in attributes) {
      attributes.onChange(size);
    } else {
      Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["setBlockClassName"])(attributes, setAttributes, prefix, size);
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: label,
    value: value,
    options: sizes,
    onChange: fontSize => setFontSize(fontSize)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FontSizeControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FormatSelector.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FormatSelector.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const OptionItem = (option, onSelect) => {
  console.log(option);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "wsu-gutenberg-format-selector__option",
    onClick: event => {
      onSelect(option.slug);
    }
  }, option.icon, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-gutenberg-format-selector__option__label"
  }, option.label));
};

const FormatSelector = ({
  options,
  onSelect,
  title
}) => {
  if (options) {
    console.log(options);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-gutenberg-format-selector"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-gutenberg-format-selector__title"
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "wsu-gutenberg-format-selector__options"
    }, options.map(option => OptionItem(option, onSelect))));
  } else {
    return '';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FormatSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/HeadingControl.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HeadingControl.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const HeadingControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_blockControls__WEBPACK_IMPORTED_MODULE_2__["HeadingTagControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Heading Text",
    value: attributes.headingText ? attributes.headingText : '',
    onChange: headingText => setAttributes({
      headingText
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadingControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/HostControl.js":
/*!**************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HostControl.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const HostControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Host",
    value: attributes.host ? attributes.host : '',
    onChange: host => setAttributes({
      host
    }),
    placeholder: "https://...."
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HostControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/OffsetControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/OffsetControl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const OffsetControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '0',
    onChange: offset => setAttributes({
      offset
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OffsetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/PerRowControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PerRowControl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PerRow = ({
  attributes,
  onChange
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Cards Per Row",
    value: attributes.perRow ? attributes.perRow : '',
    onChange: value => onChange(value)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PerRow);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js":
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PostTypeSelectControl.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PostTypeSelectControl = props => {
  console.log(props);
  let {
    attributes,
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : 'post',
    options: [{
      label: 'Post',
      value: 'post'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: postType => setAttributes({
      postType
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostTypeSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireFirstImageControl.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const RequireFirstImageControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Require First Image",
    checked: attributes.requireFirstImage ? attributes.requireFirstImage : false,
    onChange: requireFirstImage => setAttributes({
      requireFirstImage
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequireFirstImageControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/RequireImageControl.js":
/*!**********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireImageControl.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const RequireImageControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Require Image",
    checked: attributes.requireImage ? attributes.requireImage : false,
    onChange: requireImage => setAttributes({
      requireImage
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequireImageControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js":
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const TaxonomyTermSelectControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: terms => setAttributes({
      terms
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaxonomyTermSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js":
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const TaxonomyTypeSelectControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Filter By",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaxonomyTypeSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TitleTagControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TitleTagControl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const TitleTagControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Title Tag",
    value: attributes.titleTag ? attributes.titleTag : 'h2',
    options: [{
      label: 'H2',
      value: 'h2'
    }, {
      label: 'H3',
      value: 'h3'
    }, {
      label: 'H4',
      value: 'h4'
    }, {
      label: 'H5',
      value: 'h5'
    }, {
      label: 'H6',
      value: 'h6'
    }, {
      label: 'div',
      value: 'div'
    }],
    onChange: titleTag => setAttributes({
      titleTag
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TitleTagControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/blockControls.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/blockControls.js ***!
  \****************************************************************/
/*! exports provided: FormatSelector, PostPicker, FeedPostsControl, PerRow, ColorClassNameSelector, SpacingClassNameSelector, FontIconPickerControl, TaxonomyTypeSelectControl, PostTypeSelectControl, TaxonomyTermSelectControl, CountControl, OffsetControl, HostControl, ButtonControl, HeadingControl, HeadingTagControl, TitleTagControl, FontSizeControl, ResetControl, RequireImageControl, RequireFirstImageControl, ColorClassControl, RequiredAlertControl, TermSelectorControl, ImageFrameControl, DisplayFieldControl, MultipleImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatSelector */ "./assets/src/js/partials/block-controls/FormatSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSelector", function() { return _FormatSelector__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-picker/PostPicker */ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPicker", function() { return _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedPostsControl */ "./assets/src/js/partials/block-controls/FeedPostsControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedPostsControl", function() { return _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PerRowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerRowControl */ "./assets/src/js/partials/block-controls/PerRowControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerRow", function() { return _PerRowControl__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorClassNameSelector */ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNameSelector", function() { return _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing-class-name-selector/spacing-class-name-selector */ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingClassNameSelector", function() { return _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-icon-picker-control/FontIconPickerControl */ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontIconPickerControl", function() { return _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyTypeSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTypeSelectControl", function() { return _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostTypeSelectControl */ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTypeSelectControl", function() { return _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaxonomyTermSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTermSelectControl", function() { return _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _CountControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CountControl */ "./assets/src/js/partials/block-controls/CountControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountControl", function() { return _CountControl__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _OffsetControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OffsetControl */ "./assets/src/js/partials/block-controls/OffsetControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffsetControl", function() { return _OffsetControl__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _HostControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HostControl */ "./assets/src/js/partials/block-controls/HostControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HostControl", function() { return _HostControl__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ButtonControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonControl */ "./assets/src/js/partials/block-controls/ButtonControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonControl", function() { return _ButtonControl__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _HeadingControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeadingControl */ "./assets/src/js/partials/block-controls/HeadingControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingControl", function() { return _HeadingControl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heading-tag-control.js/HeadingTagControl */ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingTagControl", function() { return _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TitleTagControl */ "./assets/src/js/partials/block-controls/TitleTagControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleTagControl", function() { return _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FontSizeControl */ "./assets/src/js/partials/block-controls/FontSizeControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizeControl", function() { return _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-control/ResetControl */ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetControl", function() { return _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RequireImageControl */ "./assets/src/js/partials/block-controls/RequireImageControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequireImageControl", function() { return _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RequireFirstImageControl */ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequireFirstImageControl", function() { return _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ColorClassControl */ "./assets/src/js/partials/block-controls/ColorClassControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassControl", function() { return _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./required-alert-control/RequiredAlertControl */ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredAlertControl", function() { return _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./term-selector-control/TermSelectorControl */ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermSelectorControl", function() { return _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-frame-control/ImageFrameControl */ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageFrameControl", function() { return _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./display-fields-control/DisplayFieldsControl */ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayFieldControl", function() { return _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./multiple-image-picker/MultipleImagePicker */ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleImagePicker", function() { return _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__["default"]; });





























/***/ }),

/***/ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  IconButton,
  ToggleControl
} = wp.components;

const DisplayFieldControl = props => {
  let {
    attributes,
    setAttributes,
    fieldOptions = []
  } = props;
  let {
    displayFields = []
  } = attributes;

  const DisplayField = ({
    field
  }) => {
    let {
      label = '',
      value = ''
    } = field;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: label,
      checked: displayFields.includes(value),
      onChange: value => updateDisplayFieldArray(field, value)
    });
  };

  const updateDisplayFieldArray = (field, value) => {
    console.log(value);
    let fieldValues = displayFields.split(',');

    if (value) {
      fieldValues.push(field.value);
    } else {
      let index = fieldValues.indexOf(field.value);

      if (index > -1) {
        fieldValues.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    console.log(fieldValues);
    setAttributes({
      displayFields: fieldValues.join(',')
    });
  };

  return fieldOptions.map(field => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DisplayField, {
    field: field
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayFieldControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const FeedCountControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Count",
    value: attributes.count,
    onChange: count => setAttributes({
      count
    }),
    help: "Number of results to return"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FeedCountControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js":
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




let abortController = null;

const FeedHostControl = ({
  attributes,
  setAttributes
}) => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(attributes.host);
  const [isValid, setIsValid] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["useInstanceId"])(FeedHostControl);
  const id = `inspector-text-control-${instanceId}`;

  function isValidUrl(url) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }

    return true;
  }

  function checkWpApi(url) {
    var _abortController, _abortController2;

    // cancel existing requests and set up new abort controller
    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();
    return fetch(url + `/wp-json/wp/v2/statuses`, {
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    });
  }

  function updateValidity(url) {
    if (isValidUrl(url)) {
      checkWpApi(url).then(response => {
        if (response.ok) {
          setIsValid(true);
          setAttributes({
            host: url
          });
        } else {
          setIsValid(false);
        }
      }).catch(error => {
        setIsValid(false);
      });
    } else {
      setIsValid(false);
    }
  }

  async function handleHostChange(url) {
    setValue(url); // reset if empty

    if (url === "") {
      setIsValid(false);
      setAttributes({
        host: ""
      });
      return;
    } // validate if url is a valid WP site


    updateValidity(url);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateValidity(attributes.host);
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: "Host (optional)",
    id: id,
    help: "URL for the site to get results from (i.e. https://news.wsu.edu)."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-input-with-icon"
  }, value && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: `dashicon wsu-gutenberg-input-with-icon__icon ${isValid ? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success" : "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error"}`
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "components-text-control__input",
    type: "text",
    id: id,
    value: value,
    onChange: e => handleHostChange(e.target.value),
    "aria-describedby": id + "__help"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeedHostControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const FeedOffsetControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: "Offset",
    value: attributes.offset,
    onChange: offset => setAttributes({
      offset
    }),
    help: "Offset skips a given number of items before starting results."
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FeedOffsetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js":
/*!**************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const FeedPanel = props => {
  let {
    isOpen = false
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Feed Options",
    initialOpen: isOpen
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FeedPanel);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const FeedPanelAdvanced = props => {
  let {
    isOpen = false
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Advanced Feed Options",
    initialOpen: isOpen
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FeedPanelAdvanced);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js":
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const defaultOptions = [{
  label: "Any",
  value: "any"
}];

const FeedPostTypeControl = props => {
  const [options, setOptions] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultOptions);
  const defaultIgnorePostTypes = ["attachment", "tribe_organizer", "wp_block", "theme_part", "tribe_venue", "customize_changeset", "curated_news", "news_feed"];
  let {
    ignorePostTypes = defaultIgnorePostTypes
  } = props;

  function shouldListPostType(postType) {
    if (ignorePostTypes && ignorePostTypes.includes(postType)) return false;
    return true;
  }

  function optionSorter(a, b) {
    const aLabel = a.label.toUpperCase();
    const bLabel = b.label.toUpperCase();

    if (aLabel < bLabel) {
      return -1;
    }

    if (aLabel > bLabel) {
      return 1;
    }

    return 0;
  }

  async function fetchOptions() {
    const response = await fetch(props.host + "/wp-json/wp/v2/types", {
      method: "GET"
    });

    if (response.ok) {
      const postTypes = await response.json();

      if (postTypes) {
        let fetchedOptions = [];

        for (const key in postTypes) {
          if (postTypes.hasOwnProperty(key)) {
            const postType = postTypes[key];

            if (shouldListPostType(postType["slug"])) {
              fetchedOptions.push({
                label: postType["name"],
                value: postType["slug"]
              });
            }
          }
        }

        fetchedOptions.sort(optionSorter);
        const newOptions = defaultOptions.concat(fetchedOptions);
        setOptions(newOptions);
      }
    }
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchOptions();
  }, [props.host]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: props.label || "Post Type",
    help: props.help,
    value: props.value,
    options: options,
    onChange: postType => props.onChange(postType)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeedPostTypeControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js":
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const defaultOptions = [];

const FeedTaxonomyControl = props => {
  const [options, setOptions] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultOptions);

  function shouldListTaxonomy(taxonomy) {
    if (!props.postType || props.postType === "any") return true;
    const supportedTypes = taxonomy["types"];
    return supportedTypes.includes(props.postType);
  }

  function optionSorter(a, b) {
    const aLabel = a.label.toUpperCase();
    const bLabel = b.label.toUpperCase();

    if (aLabel < bLabel) {
      return -1;
    }

    if (aLabel > bLabel) {
      return 1;
    }

    return 0;
  }

  async function fetchOptions() {
    const response = await fetch(props.host + "/wp-json/wp/v2/taxonomies", {
      method: "GET"
    });

    if (response.ok) {
      const taxonomies = await response.json();

      if (taxonomies) {
        let fetchedOptions = [];

        for (const key in taxonomies) {
          if (taxonomies.hasOwnProperty(key)) {
            const taxonomy = taxonomies[key];

            if (shouldListTaxonomy(taxonomy)) {
              fetchedOptions.push({
                label: taxonomy["name"],
                value: taxonomy["slug"]
              });
            }
          }
        }

        fetchedOptions.sort(optionSorter);
        const newOptions = defaultOptions.concat(fetchedOptions);
        setOptions(newOptions);
      }
    }
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchOptions();
  }, [props.host, props.postType]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: props.label || "Taxonomy",
    help: props.help,
    value: props.value,
    options: options.length ? options : [{
      label: "",
      value: ""
    }],
    onChange: taxonomy => props.onChange(taxonomy)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FeedTaxonomyControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js":
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");



const FeedTermControl = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_blockControls__WEBPACK_IMPORTED_MODULE_1__["TermSelectorControl"], {
    label: props.label || "Terms",
    help: props.help,
    host: props.host,
    taxonomy: props.taxonomy,
    value: props.value,
    onChange: newval => props.onChange(newval)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeedTermControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const FeedUseAndLogicControl = ({
  attributes,
  setAttributes
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Use AND logic for terms",
    checked: attributes.useAndLogic,
    onChange: useAndLogic => {
      setAttributes({
        useAndLogic
      });
    },
    help: "AND Logic limits results to only those that have ALL terms."
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FeedUseAndLogicControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js":
/*!******************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/feed-controls.js ***!
  \******************************************************************************/
/*! exports provided: FeedPostTypeControl, FeedTaxonomyControl, FeedTermControl, FeedCountControl, FeedOffsetControl, FeedUseAndLogicControl, FeedHostControl, FeedPanel, FeedPanelAdvanced */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedPostTypeControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedPostTypeControl", function() { return _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedTaxonomyControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedTaxonomyControl", function() { return _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedTermControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedTermControl", function() { return _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedCountControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedCountControl", function() { return _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeedOffsetControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedOffsetControl", function() { return _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedUseAndLogicControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedUseAndLogicControl", function() { return _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedHostControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedHostControl", function() { return _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _FeedPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeedPanel */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedPanel", function() { return _FeedPanel__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedPanelAdvanced */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedPanelAdvanced", function() { return _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const {
  BaseControl,
  Panel,
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl
} = wp.components;

const FontIconPickerControl = props => {
  const icons = ["alarm", "alert-notification", "arrow-down-carrot", "arrow-down", "arrow-left-carrot", "arrow-left", "arrow-right-carrot", "arrow-right", "arrow-up-carrot", "arrow-up", "attachment", "basket", "bookmark", "calendar", "cart", "check", "collapse", "comment", "contrast", "credit-card", "cut", "discussion", "document", "download", "edit", "email", "expand", "favorite", "feedback", "filter", "flag", "gallery", "graph", "home", "info", "key", "light-bulb", "link", "location", "map-location", "map", "menu", "minus-circle", "minus", "mobile", "monitor", "more-vertical", "more", "next", "pause", "phone", "photos", "play-circle", "play", "plus", "pluse-circle", "previous", "print", "profile-circle", "profile", "rate", "refresh", "save", "search", "secure", "send", "settings", "share", "social-facebook", "social-instagram", "social-linkedin", "social-twitter", "social-youtube", "stop-circle", "stop", "tag", "tent", "time", "trash", "upload", "video-slideshow", "warning-caution", "warning-stop", "x-close", "zoom-in", "zoom-out"];
  const [isVisible, setIsVisible] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleVisible = () => {
    setIsVisible(state => !state);
  };

  function selectIcon(icon) {
    toggleVisible();
    props.onChange(icon);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-font-icon-picker"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: props.help
  }, props.label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, props.label), props.value ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wsu-gutenberg-font-icon-picker__selected-icon",
    onClick: toggleVisible
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
    className: `wsu-icon wsu-i-${props.value}`
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => props.onChange("")
  }, "Remove")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wsu-gutenberg-font-icon-picker__select-icon-button",
    onClick: toggleVisible
  }, "Select Icon"), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-font-icon-picker__icon-list"
  }, icons.map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    key: i,
    title: i,
    className: "wsu-gutenberg-font-icon-picker__icon-button",
    onClick: () => selectIcon(i)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
    className: `wsu-icon wsu-i-${i}`
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontIconPickerControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const HeadingTagControl = props => {
  let defaultTags = ['h2', 'h3', 'h4', 'h5', 'h6'];
  let {
    attributes,
    setAttributes,
    allowedTags = defaultTags
  } = props;

  const isActive = value => {
    return value === attributes.headingTag ? true : false;
  };

  const setTag = value => {
    setAttributes({
      headingTag: value
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "wsu-heading-tag-block-control",
    id: "heading-tag",
    label: "Heading Level",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, allowedTags.includes('h1') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h1'),
    isPressed: isActive('h1'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M13.81,6.75v10.5h-2v-4.5H6.43v4.5H4.49V6.75H6.43v4.34h5.43V6.75Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M19.51,6.75v10.5h-2V8.39H15.34V6.75Z"
  }))), allowedTags.includes('h2') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h2'),
    isPressed: isActive('h2'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11.83,6.83V17.32H9.88v-4.5H4.45v4.5H2.5V6.83h2v4.33H9.88V6.83Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M21.5,15.68v1.64H13.76V16l4.17-4c1-1,1.2-1.59,1.2-2.17,0-1-.66-1.52-1.95-1.52a3,3,0,0,0-2.46,1.1L13.36,8.42a4.83,4.83,0,0,1,4-1.74c2.28,0,3.75,1.15,3.75,3,0,1-.29,2-1.74,3.32l-2.81,2.67Z"
  }))), allowedTags.includes('h3') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h3'),
    isPressed: isActive('h3'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11.9,6.68V17.17H10v-4.5H4.52v4.5H2.57V6.68H4.52V11H10V6.68Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M21.43,14c0,1.77-1.34,3.3-4.16,3.3a6.61,6.61,0,0,1-3.94-1.21l.84-1.52a4.84,4.84,0,0,0,3.07,1c1.4,0,2.22-.61,2.22-1.59s-.69-1.56-2.28-1.56h-1V11.15l2.39-2.84H13.84V6.68H21V8l-2.55,3C20.42,11.27,21.43,12.45,21.43,14Z"
  }))), allowedTags.includes('h4') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h4'),
    isPressed: isActive('h4'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11,6.75v10.5H9v-4.5H3.57v4.5H1.62V6.75H3.57v4.34H9V6.75Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M22.38,14.86H20.52v2.39H18.63V14.86H12.87V13.51L18,6.75h2.09l-4.88,6.47h3.44V11.1h1.83v2.12h1.86Z"
  }))), allowedTags.includes('h5') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h5'),
    isPressed: isActive('h5'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11.81,6.68V17.17h-2v-4.5H4.43v4.5H2.48V6.68H4.43V11H9.86V6.68Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M21.52,14c0,1.84-1.34,3.37-4.16,3.37a6.59,6.59,0,0,1-3.94-1.21l.82-1.52a4.94,4.94,0,0,0,3.09,1c1.4,0,2.22-.61,2.22-1.6s-.64-1.64-2.82-1.64H14.2l.54-5.71H20.9V8.31H16.39l-.23,2.43h1C20.27,10.74,21.52,12.09,21.52,14Z"
  }))), allowedTags.includes('h6') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('h6'),
    isPressed: isActive('h6'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  }))), allowedTags.includes('div') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setTag('div'),
    isPressed: isActive('div'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "div"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadingTagControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  MediaPlaceholder,
  MediaUpload
} = wp.editor;

const ImageFrameControl = props => {
  let {
    attributes,
    setAttributes,
    controlTitle = 'Add an Image...',
    imageIdKey = 'imageId',
    imageSrcKey = 'imageSrc',
    imageAltKey = 'imageAlt',
    imageRatioKey = 'imageRatio'
  } = props;

  const setImage = media => {
    if (typeof media === 'object' && 'id' in media) {
      let {
        alt = '',
        id,
        url
      } = media;
      console.log(url);
      setAttributes({
        [imageSrcKey]: url,
        [imageIdKey]: id,
        [imageAltKey]: alt
      });
    }
  };

  let blockClasses = 'wsu-image-frame wsu-image-frame-control';
  blockClasses += attributes.hasOwnProperty(imageRatioKey) && attributes[imageRatioKey] ? ' wsu-image--ratio-' + attributes[imageRatioKey] : '';

  if (attributes.imageSrc) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: blockClasses
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.imageSrc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "wsu-image-frame-control__button",
      onClick: () => setAttributes({
        [imageSrcKey]: '',
        [imageIdKey]: '',
        [imageAltKey]: ''
      })
    }, "Remove Image")));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wsu-image-frame wsu-image-frame-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaPlaceholder, {
      icon: "format-image",
      labels: {
        title: controlTitle
      },
      className: "block-image",
      onSelect: value => {
        setImage(value);
      },
      accept: "image/*",
      allowedTypes: ['image']
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ImageFrameControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);





const MultipleImagePicker = props => {
  const {
    label = "Select Media",
    help = "",
    onChange,
    value = []
  } = props;
  const [editingImage, setEditingImage] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [editingElement, setEditingElement] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [skipNextPopover, setSkipNextPopover] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function updateSelectedMedia(media) {
    const images = mapToImageObjects(media);
    setEditingImage(null);
    onChange(images);
  }

  function mapToImageObjects(media) {
    return media.map(item => {
      const currentImage = value.find(image => image.id === item.id);
      return {
        id: item.id,
        url: item.url,
        thumbnail: item.sizes.thumbnail.url,
        focalPoint: (currentImage === null || currentImage === void 0 ? void 0 : currentImage.focalPoint) || {
          x: 0.5,
          y: 0.25
        }
      };
    });
  }

  function updateFocalPoint(image, focalPoint) {
    const images = value.map(item => {
      if (item.id === image.id) {
        return { ...item,
          focalPoint
        };
      }

      return item;
    });
    setEditingImage(images.find(item => item.id === image.id));
    onChange(images);
  }

  function openEditPopover(e, item) {
    if (!skipNextPopover) {
      setEditingElement(e.currentTarget);
      setEditingImage(item);
    }

    setSkipNextPopover(false);
  }

  function closeEditPopover(e) {
    if (e) {
      setSkipNextPopover(e.relatedTarget === editingElement);
    }

    setEditingElement(null);
    setEditingImage(null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: label,
    help: help,
    className: "wsu-gutenberg-mip"
  }, editingImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    headerTitle: "Edit Focal Point",
    focusOnMount: "container",
    position: "middle left",
    onFocusOutside: closeEditPopover,
    onClose: closeEditPopover,
    getAnchorRect: () => (editingElement === null || editingElement === void 0 ? void 0 : editingElement.getBoundingClientRect()) || null
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-mip__focal-point-picker-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["FocalPointPicker"], {
    url: editingImage.url,
    value: editingImage.focalPoint,
    onChange: focalPoint => updateFocalPoint(editingImage, focalPoint)
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-mip__images"
  }, value.map(item => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: item.id,
    className: "wsu-gutenberg-mip__thumbnail-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `wsu-gutenberg-mip__select-button${(editingImage === null || editingImage === void 0 ? void 0 : editingImage.id) === item.id ? " is-selected" : ""}`,
    onClick: e => openEditPopover(e, item)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "wsu-gutenberg-mip__thumbnail",
    src: item.thumbnail
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: media => updateSelectedMedia(media),
    allowedTypes: ["image"],
    multiple: true,
    gallery: true,
    value: value.map(item => item.id),
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: true,
      onClick: open,
      className: "wsu-gutenberg-mip__open-button"
    }, "Select Images"))
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MultipleImagePicker);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/PostPicker.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _text_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-control */ "./assets/src/js/partials/block-controls/post-picker/text-control.js");









const CSSNAMESPACE = 'wsu-gutenberg-post-picker';

const PostPicker = props => {
  const {
    attributes,
    onChange,
    label = '',
    postTypes = ['post', 'page'],
    placeholder = 'Search posts...'
  } = props;
  const searchInputRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const isMounted = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const [searchString, setSearchString] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [searchResults, setSearchResults] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isLoading, setIsLoading] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [selectedItems, setSelectedItems] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [latestPosts, setLatestPosts] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [postTypeData, setPostTypeData] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const debouncedSetSearchString = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["useDebounce"])(value => setSearchString(value), 250);

  const handleItemSelection = post => {
    if (attributes.postIn.split(',').includes(post.id.toString())) {
      return;
    }

    setSelectedItems([...selectedItems, post]);
    onChange([...attributes.postIn.split(','), post.id.toString()].join(','));
    setSearchResults([]);
    setSearchString('');
    searchInputRef.current.value = '';
  };

  const handleItemRemove = post => {
    setSelectedItems(selectedItems.filter(item => item.id !== post.id));
    onChange(attributes.postIn.split(',').filter(id => id !== post.id.toString()).join(','));
  };

  const resetSearch = () => {
    setSearchResults([]);
    setIsLoading(false);
  };

  const getSelectedItems = async () => {
    if (attributes.postIn.split(',').length === 0) {
      return;
    }

    const params = `ids=${attributes.postIn}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wsu-gutenberg/v1/get-posts-by-id?' + params,
      method: 'GET'
    });
    setSelectedItems(JSON.parse(response));
  };

  const getLatestPosts = async () => {
    setIsLoading(true);
    const params = `count=8&post_types=${postTypes}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wsu-gutenberg/v1/get-latest-posts?' + params,
      method: 'GET'
    });
    setLatestPosts(JSON.parse(response));
    setIsLoading(false);
  };

  const getPostTypeData = async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wp/v2/types',
      method: 'GET'
    });
    setPostTypeData(response);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isMounted.current) {
      (async function handleSearch() {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(searchString)) {
          resetSearch();
          return;
        }

        setIsLoading(true);
        const params = `search_term=${searchString}&post_types=${postTypes}`;
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
          path: '/wsu-gutenberg/v1/search-posts?' + params,
          method: 'GET'
        });
        setSearchResults(JSON.parse(response));
        setIsLoading(false);
      })();
    }
  }, [searchString]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPostTypeData();
    getSelectedItems();
    getLatestPosts();
    isMounted.current = true;
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: CSSNAMESPACE
  }, selectedItems.length > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, selectedItems.map(post => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: post.id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: `${CSSNAMESPACE}__remove-btn`,
      icon: "no-alt",
      onClick: () => handleItemRemove(post)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: `${CSSNAMESPACE}__remove-btn-text`
    }, post.title)));
  })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_text_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: searchInputRef,
    placeholder: placeholder,
    label: label,
    onChange: value => debouncedSetSearchString(value)
  }), isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), searchString.length ? !isLoading && !searchResults.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Items found')) : !isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SuggestionList, {
    attributes: attributes,
    title: "Search Results",
    postTypeData: postTypeData,
    suggestions: searchResults,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) : latestPosts.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SuggestionList, {
    attributes: attributes,
    title: "Recent Posts",
    postTypeData: postTypeData,
    suggestions: latestPosts,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) || '');
};

function SuggestionList(props) {
  const {
    attributes,
    title,
    postTypeData,
    suggestions,
    onItemSelect,
    searchTerm = ''
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `${CSSNAMESPACE}__suggestion-list-container`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: `${CSSNAMESPACE}__suggestion-list-title`
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: `${CSSNAMESPACE}__suggestion-list`
  }, suggestions.map((post, index) => {
    var _postTypeData$post$ty;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: post.id,
      className: `${CSSNAMESPACE}__suggestion-list-item`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Suggestion, {
      onClick: () => onItemSelect(post),
      searchTerm: searchTerm,
      suggestion: post,
      postTypeLabel: (_postTypeData$post$ty = postTypeData[post.type]) === null || _postTypeData$post$ty === void 0 ? void 0 : _postTypeData$post$ty.name,
      isSelected: attributes.postIn.split(',').includes(post.id.toString())
    }));
  })));
}

function Suggestion(props) {
  const {
    suggestion,
    onClick,
    searchTerm = '',
    isSelected = false,
    id = '',
    postTypeLabel = ''
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: id,
    onClick: onClick,
    className: `${CSSNAMESPACE}__suggestion ${isSelected && 'is-selected'}`,
    title: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(suggestion.title),
    disabled: isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: `${CSSNAMESPACE}__suggestion-title`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextHighlight"], {
    text: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(suggestion.title),
    highlight: searchTerm
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: `${CSSNAMESPACE}__suggestion-meta-container`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "aria-hidden": true,
    className: `${CSSNAMESPACE}__suggestion-meta`
  }, suggestion.date), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "aria-hidden": true,
    className: `${CSSNAMESPACE}__suggestion-meta`
  }, postTypeLabel || suggestion.type)));
}

/* harmony default export */ __webpack_exports__["default"] = (PostPicker);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/post-picker/text-control.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/text-control.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * @typedef OwnProps
 * @property {string}                  label                 Label for the control.
 * @property {boolean}                 [hideLabelFromVision] Whether to accessibly hide the label.
 * @property {string}                  value                 Value of the input.
 * @property {string}                  [help]                Optional help text for the control.
 * @property {string}                  [className]           Classname passed to BaseControl wrapper
 * @property {(value: string) => void} onChange              Handle changes.
 * @property {string}                  [type='text']         Type of the input.
 */

/** @typedef {OwnProps & import('react').ComponentProps<'input'>} Props */

/**
 *
 * @param {Props}                                 props Props
 * @param {import('react').Ref<HTMLInputElement>} [ref]
 */

function TextControl({
  label,
  hideLabelFromVision,
  value,
  help,
  className,
  onChange,
  type = 'text',
  ...props
}, ref) {
  const instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["useInstanceId"])(TextControl);
  const id = `inspector-text-control-${instanceId}`;

  const onChangeValue = (
  /** @type {import('react').ChangeEvent<HTMLInputElement>} */
  event) => onChange(event.target.value);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "components-text-control__input",
    type: type,
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    ref: ref
  }, props)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(TextControl));

/***/ }),

/***/ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const RequiredAlertControl = props => {
  let {
    attributes,
    onChange
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wsu-gutenberg-alert-control"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (RequiredAlertControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/reset-control/ResetControl.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const ResetControl = props => {
  let {
    attributes,
    setAttributes,
    prefix,
    label = 'Reset'
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wsu-block-control-reset",
    onClick: () => Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["setBlockClassName"])(attributes, setAttributes, prefix, '')
  }, label);
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


 // TODO: 
// - Use desired names for spacing options

/*
 @example 
<SpacingClassNameSelector
    title="Spacing"
    spaceSettings={[
        {
            label: 'Outside Spacing (Margin)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-before--',
                    ignoreOptions: ['none', 'xmedium', 'xxmedium'],									
                    default: 'small',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-after--',
                    default: 'none',
                }
            ]
        },
        {
            label: 'Inside Spacing (Padding)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-top--',
                    default: 'medium',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-bottom--',
                    default: 'large',
                }
            ]
        }
    ]}
    {...props}>					
</SpacingClassNameSelector>
*/

const CSSNAMESPACE = 'wsu-gutenberg-spacing';
const ALLOPTIONS = [{
  key: 'default',
  name: 'default'
}, {
  key: 'none',
  name: 'none'
}, {
  key: 'xxsmall',
  name: 'xxsmall'
}, {
  key: 'xsmall',
  name: 'xsmall'
}, {
  key: 'small',
  name: 'small'
}, {
  key: 'medium',
  name: 'medium'
}, {
  key: 'xmedium',
  name: 'xmedium'
}, {
  key: 'xxmedium',
  name: 'xxmedium'
}, {
  key: 'large',
  name: 'large'
}, {
  key: 'xlarge',
  name: 'xlarge'
}, {
  key: 'xxlarge',
  name: 'xxlarge'
}, {
  key: 'hero',
  name: 'hero'
}];

const SpacingClassNameSelector = props => {
  const {
    title = 'Space Settings',
    attributes,
    setAttributes,
    spaceSettings
  } = props;

  function getOptionByKey(key) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(ALLOPTIONS, o => {
      return o.key === key;
    });
  }

  function getOptionObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }

    const optionKey = className.replace(prefix, '');
    return getOptionByKey(optionKey);
  }

  const getSelectedValueByPrefix = prefix => {
    if (!attributes.className) {
      return;
    }

    const appliedClasses = attributes.className.split(' ');
    const selectedOptionClassName = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(appliedClasses, c => c.startsWith(prefix));
    return getOptionObjectByClassName(prefix, selectedOptionClassName);
  };

  const getValueForProperty = property => {
    return getSelectedValueByPrefix(property.prefix) || getOptionByKey(property.default) || '';
  };

  const updateSelectedOptions = (property, control) => {
    var _attributes$className, _attributes$className2;

    let optionClass = ''; // only apply className if it is not equal to the current default state

    if (control && !(control.selectedItem.key === property.default)) {
      optionClass = property.prefix + control.selectedItem.key;
    }

    const appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(appliedClasses, c => !c.startsWith(property.prefix)).concat(optionClass);
    const newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(c => c).join(' ');
    setAttributes({
      className: newClassName
    });
  };

  const resetToDefault = property => {
    updateSelectedOptions(property, null);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: title,
    initialOpen: false,
    className: `${CSSNAMESPACE}`
  }, spaceSettings.map(spaceSetting => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: spaceSetting.label,
      className: `${CSSNAMESPACE}__setting`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: `${CSSNAMESPACE}__setting-label`
    }, spaceSetting.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: `${CSSNAMESPACE}__setting-properties`
    }, spaceSetting.properties.map(property => {
      const options = ALLOPTIONS.filter(o => {
        var _property$ignoreOptio;

        return !((_property$ignoreOptio = property.ignoreOptions) !== null && _property$ignoreOptio !== void 0 && _property$ignoreOptio.includes(o.key));
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        key: property.label
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CustomSelectControl"], {
        label: property.label,
        options: options,
        onChange: control => {
          updateSelectedOptions(property, control);
        },
        value: getValueForProperty(property)
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: `${CSSNAMESPACE}__reset-btn`,
        isSmall: true,
        onClick: () => resetToDefault(property)
      }, "Reset to Default"));
    })));
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingClassNameSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




const {
  ComboboxControl,
  Spinner
} = wp.components;
let abortController = null;

const TermSelectorControl = function (props) {
  const [isLoading, setIsLoading] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [availableTerms, setAvailableTerms] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value); // keep track of all terms for mapping later

  const [termSuggestions, setTermSuggestions] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedTerms, setSelectedTerms] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value);
  const handleInputChange = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["useDebounce"])(updateSuggestions, 250);

  async function updateSuggestions(input) {
    var _abortController, _abortController2;

    if (input.length < 2) {
      return;
    }

    setIsLoading(true); // cancel existing requests and set up new abort controller

    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController(); // make request to terms api

    const response = await fetch(props.host + `/wp-json/wp/v2/search?type=term&subtype=${props.taxonomy}&search=${input}`, {
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    });

    if (response.ok) {
      const results = await response.json(); // process results

      const suggestions = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["differenceBy"])(results, selectedTerms, "id");

      if (suggestions.length > 0) {
        setTermSuggestions(suggestions.map(v => {
          return {
            label: v.title,
            value: v.id
          };
        }));
        setAvailableTerms([...availableTerms, ...Object(lodash__WEBPACK_IMPORTED_MODULE_2__["differenceBy"])(results, availableTerms, "id")]);
      } else {
        setTermSuggestions([]);
      }
    }

    setIsLoading(false);
  }

  function selectTerm(termId) {
    const term = availableTerms.find(t => t.id === termId);
    const updatedSelectedTerms = [...selectedTerms, term];
    updateSelectedTerms(updatedSelectedTerms);
    setTermSuggestions([]);
  }

  function removeTerm(term) {
    const updatedSelectedTerms = selectedTerms.filter(t => t.id !== term.id);
    updateSelectedTerms(updatedSelectedTerms);
  }

  function updateSelectedTerms(termsArray) {
    let termsString = '';
    let queryTerms = [];

    if (Array.isArray(termsArray) && termsArray.length > 0) {
      termsString = termsArray.map(function (term) {
        return term.id.toString();
      }).join(",");
      queryTerms = termsArray.map(term => {
        return {
          termID: term.id,
          taxonomy: term.type
        };
      });
    }

    setSelectedTerms(termsArray);
    props.onChange({
      termsList: termsString,
      termsSelected: termsArray,
      queryTerms: queryTerms
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-term-selector"
  }, isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "wsu-gutenberg-term-selector__selected_terms"
  }, selectedTerms.map((term, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: term.id,
      className: "wsu-gutenberg-term-selector__selected_term"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      class: "components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon",
      onClick: () => removeTerm(term)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "wsu-gutenberg-term-selector__remove-btn-text"
    }, term.title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "wsu-gutenberg-term-selector__remove-btn-taxonomy-text"
    }, term.type.replace('post_', ''))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "dashicon dashicons dashicons-no-alt wsu-gutenberg-term-selector__remove-btn-icon"
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TermSelectorControl);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PanelAdvancedFeedOptions = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Advanced Feed Options",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelAdvancedFeedOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelColorOptions.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelColorOptions.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PanelColorOptions = props => {
  let {
    isOpen = false
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Color Options",
    initialOpen: isOpen
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelColorOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelDisplayOptions.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PanelDisplayOptions = props => {
  let {
    isOpen = false
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Display Options",
    initialOpen: isOpen
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelDisplayOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelFeedOptions.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelFeedOptions.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PanelFeedOptions = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Feed Options",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelFeedOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelFeedPosts.js":
/*!***************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelFeedPosts.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const PanelFeedPosts = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Feed Posts",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["FeedPostsControl"], props), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelFeedPosts);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelGeneralOptions.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const PanelGeneralOptions = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "General Options",
    initialOpen: true
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelGeneralOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelInsertPost.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelInsertPost.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




const PanelInsertPost = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Select Post/Page",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["PostPicker"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelInsertPost);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/blockPanels.js":
/*!************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/blockPanels.js ***!
  \************************************************************/
/*! exports provided: PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions, PanelFeedOptions, PanelAdvancedFeedOptions, PanelColorOptions, PanelStyleOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelInsertPost */ "./assets/src/js/partials/block-panels/PanelInsertPost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelInsertPost", function() { return _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelDisplayOptions */ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelDisplayOptions", function() { return _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelFeedPosts */ "./assets/src/js/partials/block-panels/PanelFeedPosts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFeedPosts", function() { return _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelGeneralOptions */ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelGeneralOptions", function() { return _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanelFeedOptions */ "./assets/src/js/partials/block-panels/PanelFeedOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFeedOptions", function() { return _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PanelAdvancedFeedOptions */ "./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelAdvancedFeedOptions", function() { return _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PanelColorOptions */ "./assets/src/js/partials/block-panels/PanelColorOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelColorOptions", function() { return _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-style-options/PanelStyleOptions */ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStyleOptions", function() { return _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const PanelStyleOptions = props => {
  var _attributes$setKey;

  let {
    isOpen = false,
    styles = [],
    prefix,
    attributes,
    setAttributes,
    setKey = 'className'
  } = props;
  let classString = (_attributes$setKey = attributes[setKey]) !== null && _attributes$setKey !== void 0 ? _attributes$setKey : '';
  let currentValue = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameValue"])(classString, prefix);

  const setStyleClassNames = value => {
    let updatedClasses = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["addBlockClassName"])(classString, prefix, value);
    setAttributes({
      [setKey]: updatedClasses
    });
  };

  const styleItem = styleObj => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      isPressed: currentValue == styleObj.value,
      onClick: () => setStyleClassNames(styleObj.value)
    }, styleObj.icon, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, styleObj.label));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Style Options",
    initialOpen: isOpen
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    id: "wsu-block-style",
    className: "wsu-block-style"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, styles.map(styleObj => styleItem(styleObj)))), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelStyleOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockClassName.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockClassName.js ***!
  \******************************************************************/
/*! exports provided: addBlockClassName, hasBlockClassName, getBlockClassName, getBlockClassNameValue, removeBlockClassName, setClassName, setBlockClassName, setBlockClassNameBool, setChildBlockClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockClassName", function() { return addBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBlockClassName", function() { return hasBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockClassName", function() { return getBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockClassNameValue", function() { return getBlockClassNameValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlockClassName", function() { return removeBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClassName", function() { return setClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockClassName", function() { return setBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockClassNameBool", function() { return setBlockClassNameBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChildBlockClassName", function() { return setChildBlockClassName; });
/**
 * Add a class prefix/value to a given string of classnames.
 * 
 * @param { string } classString String of class names
 * @param {string } prefix Previx of class to add or remove
 * @param { string } value Value to append to prefix
 * @param { boolean } remove Remove class names with matching prefixes
 * @returns String of classnames
 */
const addClassName = (classString, prefix, value, remove = true) => {
  let classNames = classString !== null && classString !== void 0 ? classString : '';
  let classArray = classNames.split(' ');
  let newClasses = [];

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });

    if ('' !== value) {
      newClasses.push(prefix + value);
    }
  }

  return newClasses.join(' ');
};
/**
 * Add class names from block attributes
 * 
 * @param { object } attributes | Block attributes
 * @param { string } prefix | Class prefix to attach value to
 * @param { string } value | Value to append to class prefix 
 * @param { boolean } remove | Remove matching class prefixes 
 * @returns { string } String of class values
 */


const addBlockClassName = (attributes, prefix, value, remove = true) => {
  let classNames;

  if (typeof attributes === 'object') {
    var _attributes$className;

    classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }

  return addClassName(classNames, prefix, value, remove);
};

const hasBlockClassName = (attributes, value) => {
  let classNames;

  if (typeof attributes === 'object') {
    var _attributes$className2;

    classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }

  return classNames.includes(value) ? true : false;
};

const getBlockClassName = (className, prefix) => {
  let classArray = className.split(' ');
  let value = '';

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }

  return value;
};

const getClassNameValue = (classesString, prefix, defaultValue = '') => {
  let className = classesString !== null && classesString !== void 0 ? classesString : '';
  let classArray = className.split(' ');
  let value = defaultValue;

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }

  return value;
};

const getBlockClassNameValue = (attributes, prefix, defaultValue = '', setKey = 'className') => {
  let className;

  if (typeof attributes === 'object') {
    var _attributes$setKey;

    className = (_attributes$setKey = attributes[setKey]) !== null && _attributes$setKey !== void 0 ? _attributes$setKey : '';
  } else {
    className = attributes !== null && attributes !== void 0 ? attributes : '';
  }

  return getClassNameValue(className, prefix, defaultValue);
};

const removeBlockClassName = (className, prefix) => {
  let classNames = className !== null && className !== void 0 ? className : '';
  let classArray = classNames.split(' ');
  let newClasses = [];

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });
  }

  return newClasses.join(' ');
};
/**
 * @param { string } classesString | String of class names 
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } setKey | Attribute key to set 
 */


const setClassName = (classesString, prefix, value, setAttributes, setKey = 'className') => {
  var _classesString;

  classesString = (_classesString = classesString) !== null && _classesString !== void 0 ? _classesString : '';
  let classes = addClassName(classesString, prefix, value);
  setAttributes({
    [setKey]: classes
  });
};
/**
 * @param { object } attributes | String of class names
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 */


const setBlockClassName = (attributes, setAttributes, prefix, value, setKey = 'className') => {
  let classNames;

  if (typeof attributes === 'object') {
    var _attributes$setKey2;

    classNames = (_attributes$setKey2 = attributes[setKey]) !== null && _attributes$setKey2 !== void 0 ? _attributes$setKey2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }

  setClassName(classNames, prefix, value, setAttributes, setKey);
};

const setBlockClassNameBool = (attributes, setAttributes, blockClass, value) => {
  var _attributes$className3;

  let classNames = (_attributes$className3 = attributes.className) !== null && _attributes$className3 !== void 0 ? _attributes$className3 : '';
  let classArray = classNames.split(' ');
  let newClasses = [];

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass != blockClass) {
        newClasses.push(itemClass);
      }
    });

    if (value) {
      newClasses.push(blockClass);
    }
  }

  setAttributes({
    className: newClasses.join(' ')
  });
};

const setChildBlockClassName = (clientId, prefix, value, setKey = 'className') => {
  let children = wp.data.select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
  children.forEach(function (child, index) {
    let attributes = wp.data.select('core/editor').getBlockAttributes(child.clientId);
    let classNames = addBlockClassName(attributes, prefix, value);
    wp.data.dispatch('core/editor').updateBlockAttributes(child.clientId, {
      className: classNames
    });
  });
};



/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockUtilities.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockUtilities.js ***!
  \******************************************************************/
/*! exports provided: getBlockClassNameOption, getBlockClassName, getBlockClassNameValue, hasBlockClassName, removeBlockClassName, setClassName, setBlockClassName, addBlockClassName, setBlockClassNameBool, setChildBlockClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlockClassNameOption */ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlockClassNameOption", function() { return _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _blockClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["getBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlockClassNameValue", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["getBlockClassNameValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["hasBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["removeBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["setClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["setBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["addBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockClassNameBool", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["setBlockClassNameBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setChildBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["setChildBlockClassName"]; });












/***/ }),

/***/ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/getBlockClassNameOption.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getBlockClassNameOption = (className, prefix) => {
  let classArray = className.split(' ');
  let value = '';

  if (Array.isArray(classArray)) {
    classArray.forEach((itemClass, index) => {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }

  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (getBlockClassNameOption);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/additional-advanced-controls/block-additional-advanced-control.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/additional-advanced-controls/block-additional-advanced-control.js ***!
  \****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const {
  ToggleControl
} = wp.components;
const {
  RangeControl
} = wp.components;

function additionalAdvancedControls(OriginalComponent) {
  return function (props) {
    const unsupportedPosition = [];
    const unsupportedZindex = [];
    const unsupportedOverflow = [];
    let {
      attributes,
      setAttributes
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorAdvancedControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Additional Advanced Settings",
      initialOpen: false,
      className: "wsu-block-control-additional-advanced"
    }, !unsupportedPosition.includes(props.name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Position Element",
      checked: Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["hasBlockClassName"])(attributes, 'wsu-position--relative'),
      onChange: position => {
        Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-position--relative', position);
      },
      help: "Sets element position to relative."
    }), !unsupportedZindex.includes(props.name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Element z-index",
      value: parseInt(Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["getBlockClassNameValue"])(attributes, 'wsu-zindex--level-')),
      onChange: zindex => Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["setBlockClassName"])(attributes, setAttributes, 'wsu-zindex--level-', zindex),
      help: "Position element must be on if the element isn't already positioned in CSS.",
      min: 0,
      max: 7
    }), !unsupportedOverflow.includes(props.name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Overflow Hidden",
      checked: Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["hasBlockClassName"])(attributes, 'wsu-overflow--hidden'),
      onChange: overflow => {
        Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-overflow--hidden', overflow);
      }
    }))));
  };
}

wp.hooks.addFilter('editor.BlockEdit', 'wsuwp-plugin-gutenberg/additional-advanced-controls', additionalAdvancedControls);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/allowed-embeds.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/allowed-embeds.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function () {
  let blockLoaded = false;
  let blockLoadedInterval = setInterval(function () {
    if (document.getElementById('post-title-0')) {
      const enabledEmbeds = ['ted', 'twitter', 'vimeo', 'wordpress', 'youtube'];
      const embedBlock = wp.blocks.getBlockVariations('core/embed');

      if (embedBlock) {
        embedBlock.forEach(function (el) {
          if (!enabledEmbeds.includes(el.name)) {
            wp.blocks.unregisterBlockVariation('core/embed', el.name);
          }
        });
      }

      blockLoaded = true;
    }

    if (blockLoaded) {
      clearInterval(blockLoadedInterval);
    }
  }, 500);
});

/***/ }),

/***/ "./assets/src/js/partials/editor-config/block-categories.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/block-categories.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const rearrangeBlockCategoriesMap = {
  'core/code': 'advanced',
  'core/html': 'advanced',
  'core/buttons': 'text',
  'core/shortcode': 'text'
};

function rearrangeBlockCategories(settings, name) {
  if (rearrangeBlockCategoriesMap[name]) {
    settings.category = rearrangeBlockCategoriesMap[name];
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp-plugin-gutenberg/block-categories', rearrangeBlockCategories);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/block-class-name.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/block-class-name.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const el = wp.element.createElement;

function injectBlockClassName(OriginalComponent) {
  return function (props) {
    return el(wp.element.Fragment, {}, el(wp.blockEditor.InspectorControls, {}, el('div', {
      className: "is-inspector-for-" + props.name.replace('core/', 'core--'),
      "aria-hidden": "true"
    }, '')), el(OriginalComponent, props));
  };
}

wp.hooks.addFilter('editor.BlockEdit', 'wsuwp-plugin-gutenberg/inject-block-class-name', injectBlockClassName);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/block-flex-align-bottom.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/block-flex-align-bottom.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const blockFlexAlignBottomControl = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && (props.name == 'core/buttons' || props.name == 'wsuwp/callout') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: 'Align Bottom',
      checked: Object(_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["hasBlockClassName"])(attributes, 'wsu-align-item--flex-bottom'),
      onChange: value => Object(_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-align-item--flex-bottom', value),
      help: "Parent container must have \"Enable Align Bottom\" activated (Advanced/Enable Align Bottom)"
    })));
  };
}, 'blockFlexAlignBottomControl');
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp/block-flex-align-bottom-control', blockFlexAlignBottomControl);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/block-flex-layout.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/block-flex-layout.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const blockFlexLayoutControl = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && (props.name == 'wsuwp/column' || props.name == 'wsuwp/callout') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: 'Enable Align Bottom',
      checked: Object(_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["hasBlockClassName"])(attributes, 'wsu-item-layout--flex-column'),
      onChange: value => Object(_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-item-layout--flex-column', value),
      help: "Individual child items must have \"Align Bottom\" activated (Advanced/Align Bottom)"
    })));
  };
}, 'coverAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp/block-flex-layout-control', blockFlexLayoutControl);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/block-styles.js":
/*!**************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/block-styles.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function () {
  let blockLoaded = false;
  let blockLoadedInterval = setInterval(function () {
    if (document.getElementById('post-title-0')) {
      wp.blocks.unregisterBlockStyle('core/button', ['fill', 'outline']);
      wp.blocks.unregisterBlockStyle('core/image', ['default', 'rounded']);
      wp.blocks.unregisterBlockStyle('core/separator', ['default', 'wide', 'dots']);
      blockLoaded = true;
    }

    if (blockLoaded) {
      clearInterval(blockLoadedInterval);
    }
  }, 500);
});

/***/ }),

/***/ "./assets/src/js/partials/editor-config/constants.js":
/*!***********************************************************!*\
  !*** ./assets/src/js/partials/editor-config/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.wsu = {
  ROOT_URL: function () {
    const href = window.location.href;
    const index = href.indexOf("/wp-admin");
    const rootUrl = href.substring(0, index);
    return rootUrl;
  }()
};

/***/ }),

/***/ "./assets/src/js/partials/editor-config/spacing-control.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/spacing-control.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");





function insertSpacingControl(OriginalComponent) {
  return function (props) {
    const unsupportedBlockTypes = ['core/image', 'wsuwp/card', 'wsuwp/image', 'wsuwp/row', 'wsuwp/column', 'core/button', 'core/paragraph', 'wsuwp/section', 'wsuwp/card-group', 'wsuwp/callout', 'wsuwp/container'];

    if (!unsupportedBlockTypes.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        spaceSettings: [{
          label: 'Outside Spacing (Margin)',
          properties: [{
            label: 'Top',
            prefix: 'wsu-spacing-before--',
            default: 'none'
          }, {
            label: 'Bottom',
            prefix: 'wsu-spacing-after--',
            default: 'xmedium'
          }]
        }]
      }, props))));
    } // return default


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
  };
}

wp.hooks.addFilter('editor.BlockEdit', 'wsuwp-plugin-gutenberg/insert-spacing-control', insertSpacingControl);

/***/ }),

/***/ "./blocks/core-button/blockEditFilter.js":
/*!***********************************************!*\
  !*** ./blocks/core-button/blockEditFilter.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;


const {
  InspectorControls
} = wp.blockEditor;
const {
  Panel,
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  Button,
  FocalPointPicker,
  BaseControl
} = wp.components;


const coreButtonControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  let buttonStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "6.18",
      style: {
        fill: '#a60f2d'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#fff'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "21.11",
      style: {
        fill: '#a60f2d'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#fff'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#fff'
      }
    })),
    label: 'Round',
    value: 'round'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "6.18",
      style: {
        fill: 'none',
        stroke: '#58595b',
        strokeMiterlimit: 10
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#414042'
      }
    })),
    label: 'Outline',
    value: 'outline'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "21.96",
      style: {
        fill: 'none',
        stroke: '#58595b',
        strokeMiterlimit: 10
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#414042'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#414042'
      }
    })),
    label: 'Outline Round',
    value: 'outline-round'
  }];
  let buttonSizes = [];
  return props => {
    var _attributes$className;

    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    let blockClassNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/button' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      styles: buttonStyles,
      prefix: "wsu-button--style-"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Button Size",
      value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassName"])(blockClassNames, 'wsu-button--size-'),
      options: [{
        label: 'Large',
        value: 'large'
      }, {
        label: 'Medium',
        value: ''
      }, {
        label: 'Small',
        value: 'small'
      }],
      onChange: buttonSize => {
        setAttributes({
          className: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["addBlockClassName"])(blockClassNames, 'wsu-button--size-', buttonSize)
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      title: "Space Settings",
      spaceSettings: [{
        label: 'Outside Spacing (Margin)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: 'none'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: 'xmedium'
        }]
      }]
    }, props)))));
  };
}, 'coreButtonControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-button-controls', coreButtonControls);

/***/ }),

/***/ "./blocks/core-heading/editor/blockEditFilter.js":
/*!*******************************************************!*\
  !*** ./blocks/core-heading/editor/blockEditFilter.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;

const {
  InspectorControls
} = wp.blockEditor;
const {
  ToggleControl
} = wp.components;

const coreHeadingControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  let headingStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M26.52,20.22V37H23.4v-7.2H14.71V37H11.59V20.22h3.12v6.93H23.4V20.22Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M42.74,31.57H32.68a3.88,3.88,0,0,0,4.16,3.07,4.57,4.57,0,0,0,3.48-1.39l1.61,1.85a6.51,6.51,0,0,1-5.16,2.09c-4.3,0-7.09-2.76-7.09-6.58a6.37,6.37,0,0,1,6.63-6.55,6.25,6.25,0,0,1,6.48,6.62C42.79,30.92,42.77,31.28,42.74,31.57Zm-10.08-2h7.27a3.48,3.48,0,0,0-3.62-3.12A3.54,3.54,0,0,0,32.66,29.58Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M56,29.51V37H53.21V35.46a4.57,4.57,0,0,1-4,1.73c-2.93,0-4.77-1.61-4.77-3.84s1.44-3.82,5.33-3.82H53v-.19c0-1.75-1.06-2.79-3.2-2.79A6.34,6.34,0,0,0,46,27.83l-1.18-2.19a9.06,9.06,0,0,1,5.43-1.58C53.9,24.06,56,25.81,56,29.51ZM53,33V31.52h-3.1c-2,0-2.59.77-2.59,1.71S48.26,35,49.8,35A3.27,3.27,0,0,0,53,33Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M72.55,19.21V37H69.67V35.36a5.28,5.28,0,0,1-4.25,1.83,6.24,6.24,0,0,1-6.48-6.58,6.22,6.22,0,0,1,6.48-6.55,5.24,5.24,0,0,1,4.13,1.73V19.21Zm-3,11.4a3.82,3.82,0,1,0-7.64,0,3.82,3.82,0,1,0,7.64,0Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M76.08,20.29A1.82,1.82,0,0,1,78,18.49a1.79,1.79,0,0,1,1.92,1.73A1.85,1.85,0,0,1,78,22.09,1.82,1.82,0,0,1,76.08,20.29Zm.4,3.91h3V37h-3Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M96,29.67V37H93v-7c0-2.28-1.12-3.39-3-3.39-2.14,0-3.58,1.3-3.58,3.87V37h-3V24.2h2.86v1.66a5.54,5.54,0,0,1,4.41-1.8C93.76,24.06,96,25.81,96,29.67Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M112.7,24.2V35.08c0,4.65-2.42,6.76-6.91,6.76A10.18,10.18,0,0,1,99.55,40l1.34-2.26a7.72,7.72,0,0,0,4.73,1.54c2.83,0,4.08-1.3,4.08-3.89v-.67a5.66,5.66,0,0,1-4.3,1.7c-3.67,0-6.48-2.49-6.48-6.21s2.81-6.17,6.48-6.17a5.52,5.52,0,0,1,4.44,1.85V24.2Zm-3,6a3.91,3.91,0,1,0-3.89,3.67A3.61,3.61,0,0,0,109.75,30.23Z",
      fill: "#231f20"
    })),
    label: 'Default',
    value: ''
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M26.52,15.9V32.7H23.4V25.5H14.71v7.2H11.59V15.9h3.12v6.94H23.4V15.9Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M42.74,27.26H32.68a3.88,3.88,0,0,0,4.16,3.07,4.61,4.61,0,0,0,3.48-1.39l1.61,1.84a6.51,6.51,0,0,1-5.16,2.09c-4.3,0-7.09-2.76-7.09-6.57a6.38,6.38,0,0,1,6.63-6.56,6.26,6.26,0,0,1,6.48,6.63C42.79,26.61,42.77,27,42.74,27.26Zm-10.08-2h7.27a3.49,3.49,0,0,0-3.62-3.12A3.54,3.54,0,0,0,32.66,25.26Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M56,25.19V32.7H53.21V31.14c-.72,1.11-2.12,1.73-4,1.73-2.93,0-4.77-1.61-4.77-3.84s1.44-3.81,5.33-3.81H53V25c0-1.75-1.06-2.78-3.2-2.78A6.33,6.33,0,0,0,46,23.51l-1.18-2.18a9,9,0,0,1,5.43-1.59C53.9,19.74,56,21.5,56,25.19ZM53,28.7V27.21h-3.1c-2,0-2.59.77-2.59,1.7s.91,1.78,2.45,1.78A3.27,3.27,0,0,0,53,28.7Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M72.55,14.89V32.7H69.67V31.05a5.3,5.3,0,0,1-4.25,1.82,6.23,6.23,0,0,1-6.48-6.57,6.22,6.22,0,0,1,6.48-6.56,5.24,5.24,0,0,1,4.13,1.73V14.89Zm-3,11.41a3.82,3.82,0,1,0-7.64,0,3.82,3.82,0,1,0,7.64,0Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M76.08,16A1.83,1.83,0,0,1,78,14.17a1.79,1.79,0,0,1,1.92,1.73A1.84,1.84,0,0,1,78,17.77,1.82,1.82,0,0,1,76.08,16Zm.4,3.92h3V32.7h-3Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M96,25.36V32.7H93v-7c0-2.28-1.12-3.38-3-3.38-2.14,0-3.58,1.3-3.58,3.86V32.7h-3V19.89h2.86v1.65a5.58,5.58,0,0,1,4.41-1.8C93.76,19.74,96,21.5,96,25.36Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
      d: "M112.7,19.89V30.76c0,4.66-2.42,6.77-6.91,6.77a10.18,10.18,0,0,1-6.24-1.83l1.34-2.25A7.78,7.78,0,0,0,105.62,35c2.83,0,4.08-1.29,4.08-3.88v-.68a5.63,5.63,0,0,1-4.3,1.71,6.13,6.13,0,0,1-6.48-6.22c0-3.72,2.81-6.17,6.48-6.17a5.55,5.55,0,0,1,4.44,1.85v-1.7Zm-3,6a3.91,3.91,0,1,0-3.89,3.67A3.6,3.6,0,0,0,109.75,25.91Z",
      fill: "#231f20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "47.72",
      y: "41.04",
      width: "28.55",
      height: "4.5",
      fill: "#a60f2d"
    })),
    label: 'Callout',
    value: 'callout'
  }];
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/heading' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      styles: headingStyles,
      prefix: "wsu-heading--style-"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["FontSizeControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      sizes: [{
        label: 'Not Set',
        value: ''
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'xMedium',
        value: 'xmedium'
      }, {
        label: 'xxMedium',
        value: 'xxmedium'
      }, {
        label: 'Large',
        value: 'large'
      }, {
        label: 'xLarge',
        value: 'xlarge'
      }, {
        label: 'xxLarge',
        value: 'xxlarge'
      }]
    }))))));
  };
}, 'coreHeadingControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-heading-controls', coreHeadingControls);

/***/ }),

/***/ "./blocks/core-image/editor/blockEditFilter.js":
/*!*****************************************************!*\
  !*** ./blocks/core-image/editor/blockEditFilter.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;

const {
  InspectorControls
} = wp.blockEditor;
const {} = wp.components;


const coreParagraphControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  const imageStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "9.37",
      y: "7.94",
      width: "105.27",
      height: "44.12",
      style: {
        fill: '#6d6e71',
        stroke: '#fff',
        strokeMiterlimit: 10,
        strokeWidth: '2px'
      }
    })),
    label: 'Framed',
    value: 'framed'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
      cx: "62",
      cy: "30",
      r: "26.71",
      fill: "#6d6e71"
    })),
    label: 'Round',
    value: 'round'
  }];
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/image' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      styles: imageStyles,
      prefix: "wsu-image--style-"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      title: "Space Settings",
      spaceSettings: [{
        label: 'Margin (Outside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: 'default'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: 'xmedium'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-margin-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-margin-right--',
          default: 'default'
        }]
      }]
    }, props)))));
  };
}, 'coreParagraphControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-paragraph-controls', coreParagraphControls);

/***/ }),

/***/ "./blocks/core-list/editor/blockEditFilter.js":
/*!****************************************************!*\
  !*** ./blocks/core-list/editor/blockEditFilter.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");

const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;

const {
  InspectorControls
} = wp.blockEditor;
const {
  RangeControl
} = wp.components;

const coreParagraphControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/list' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Number of Columns",
      help: "Number of columns to display.",
      value: parseInt(Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameValue"])(attributes, 'wsu-list--columns-', 1)),
      onChange: columns => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["setBlockClassName"])(attributes, setAttributes, 'wsu-list--columns-', columns),
      min: 1,
      max: 4
    })))));
  };
}, 'coreParagraphControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-paragraph-controls', coreParagraphControls);

/***/ }),

/***/ "./blocks/core-paragraph/editor/blockEditFilter.js":
/*!*********************************************************!*\
  !*** ./blocks/core-paragraph/editor/blockEditFilter.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;

const {
  InspectorControls
} = wp.blockEditor;
const {} = wp.components;


const coreParagraphControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    let FontSizeValue = isSelected && props.name == 'core/paragraph' ? Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-font-size--') : '';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/paragraph' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["FontSizeControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      sizes: [{
        label: 'xSmall',
        value: 'xsmall'
      }, {
        label: 'Small',
        value: 'small'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'xMedium (Default)',
        value: ''
      }, {
        label: 'xxMedium',
        value: 'xxmedium'
      }, {
        label: 'Large',
        value: 'large'
      }, {
        label: 'xLarge',
        value: 'xlarge'
      }]
    })), FontSizeValue && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequiredAlertControl"], null, "Should this be a heading instead?", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), "Paragraph text should not be used as a substitue for a heading.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      spaceSettings: [{
        label: 'Outside Spacing (Margin)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: 'none'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: 'xmedium'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-margin-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-margin-right--',
          default: 'default'
        }]
      }, {
        label: 'Padding (Inside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-top--',
          default: 'default'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-bottom--',
          default: 'default'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-padding-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-padding-right--',
          default: 'default'
        }]
      }]
    }, props)))));
  };
}, 'coreParagraphControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-paragraph-controls', coreParagraphControls);

/***/ }),

/***/ "./blocks/core-quote/editor/block-filter.js":
/*!**************************************************!*\
  !*** ./blocks/core-quote/editor/block-filter.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;

const {
  InspectorControls
} = wp.blockEditor;
const {} = wp.components;


const coreQuoteControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/quote' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["FontSizeControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      sizes: [{
        label: 'Not Set',
        value: ''
      }, {
        label: 'Small',
        value: 'small'
      }, {
        label: 'Medium (Default)',
        value: 'medium'
      }, {
        label: 'xMedium',
        value: 'xmedium'
      }, {
        label: 'Large',
        value: 'large'
      }, {
        label: 'xLarge',
        value: 'xlarge'
      }]
    }))))));
  };
}, 'coreQuoteControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-quote-controls', coreQuoteControls);

/***/ }),

/***/ "./blocks/wsuwp-accordion/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-accordion/editor/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-accordion/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-accordion/editor/save.js");


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


registerBlockType("wsuwp/accordion", {
  title: "Accordion",
  apiVersion: 2,
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
    title: {
      type: 'string',
      default: ''
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-accordion/editor/edit.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-accordion/editor/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






const {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  URLInput,
  InnerBlocks
} = wp.blockEditor;

const DEFAULT_SPACING = {
  spaceBefore: 'none',
  spaceAfter: 'none',
  spaceTop: 'none',
  spaceBottom: 'none'
};

const Edit = props => {
  var _attributes$className2;

  const blockProps = useBlockProps({
    className: 'wsu-accordion',
    style: {}
  });
  let {
    attributes,
    setAttributes
  } = props;

  const addSizeClassName = value => {
    var _attributes$className;

    let blockClasses = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';

    if (value) {
      setAttributes({
        className: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["addBlockClassName"])(blockClasses, 'wsu-accordion--size-', 'small')
      });
    } else {
      setAttributes({
        className: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["removeBlockClassName"])(blockClasses, 'wsu-accordion--size')
      });
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__["HeadingTagControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: "Reduce Size",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["hasBlockClassName"])((_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '', 'wsu-accordion--size-small'),
    onChange: value => addSizeClassName(value)
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "wsu-accordion__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "wsu-accordion__title-button wsu-accordion--toggle",
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.title // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: title => setAttributes({
      title
    }) // Store updated content as a block attribute
    ,
    placeholder: "Add Accordion Title Text..." // Display this text before any content has been added by the user

  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-accordion__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-accordion__content-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-accordion/editor/save.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-accordion/editor/save.js ***!
  \***********************************************/
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

/***/ "./blocks/wsuwp-banner/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-banner/editor/block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-banner/editor/edit.js");


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

registerBlockType("wsuwp/banner", {
  title: "Page Banner (Beta)",
  apiVersion: 2,
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "48",
    height: "48",
    fill: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    y: "8.79",
    width: "48",
    height: "30.42",
    fill: "#231f20"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "19.09 14.21 6.08 32.95 19.33 32.95 26.44 24.04 19.09 14.21",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polyline", {
    points: "21.91 32.95 32.54 20.46 41.51 32.95",
    fill: "#fff"
  })),
  attributes: {
    imageId: {
      type: 'integer',
      default: 0
    },
    imageSrc: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-banner/editor/edit.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-banner/editor/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const {
  SelectControl,
  TextControl,
  ToggleControl,
  FocalPointPicker,
  BaseControl,
  Button
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-callout',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  const bannerStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "9.37",
      y: "7.94",
      width: "105.27",
      height: "44.12",
      style: {
        fill: '#6d6e71',
        stroke: '#fff',
        strokeMiterlimit: 10,
        strokeWidth: '2px'
      }
    })),
    label: 'Framed',
    value: 'framed'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Full Width Background",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  }), attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imageDimensions,
    value: attributes.imageFocalPoint,
    onChange: focalPoint => setAttributes({
      imageFocalPoint: focalPoint
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: media => setAttributes({
      imageId: media.id,
      imageSrc: media.url
    }) // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
      label: "Replace Background Image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isLink: true,
      onClick: open
    }, "Open Media Library"))
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Height",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-page-banner--size-'),
    options: [{
      label: 'xSmall',
      value: 'xsmall'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: ''
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'xLarge',
      value: 'xlarge'
    }, {
      label: 'xxLarge',
      value: 'xxlarge'
    }, {
      label: 'Full',
      value: 'full'
    }],
    onChange: size => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-page-banner--size-', size)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    styles: bannerStyles,
    prefix: "wsu-page-banner--style-"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Outside Spacing (Margin)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'xmedium'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, "Page Banner"));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-button/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-button/editor/block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-button/editor/edit.js");

const {
  registerBlockType
} = wp.blocks;

registerBlockType("wsuwp/button", {
  title: "Button",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"
  })),
  apiVersion: 2,
  category: "text",
  attributes: {
    buttonText: {
      type: "string",
      default: ""
    },
    buttonUrl: {
      type: "string",
      default: ""
    },
    iconBefore: {
      type: "string",
      default: ""
    },
    iconAfter: {
      type: "string",
      default: ""
    },
    buttonClassName: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  }
});

/***/ }),

/***/ "./blocks/wsuwp-button/editor/edit.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-button/editor/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");






const {
  URLPopover,
  RichText,
  InspectorControls,
  InspectorAdvancedControls,
  BlockControls,
  useBlockProps,
  AlignmentToolbar,
  __experimentalLinkControl: LinkControl
} = wp.blockEditor;
const {
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;
const {
  Popover,
  ToolbarButton,
  ToolbarGroup,
  BaseControl,
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl
} = wp.components;
let buttonStyles = [{
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "6.18",
    style: {
      fill: "#a60f2d"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#fff"
    }
  })),
  label: "Default",
  value: ""
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "21.11",
    style: {
      fill: "#a60f2d"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#fff"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#fff"
    }
  })),
  label: "Round",
  value: "round"
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "6.18",
    style: {
      fill: "none",
      stroke: "#58595b",
      strokeMiterlimit: 10
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#414042"
    }
  })),
  label: "Outline",
  value: "outline"
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "21.96",
    style: {
      fill: "none",
      stroke: "#58595b",
      strokeMiterlimit: 10
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#414042"
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#414042"
    }
  })),
  label: "Outline Round",
  value: "outline-round"
}];

const edit = props => {
  const {
    className,
    attributes,
    setAttributes
  } = props;
  const [showInlineLinkEdit, setShowInlineLinkEdit] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [showSidebarLinkEdit, setShowSidebarLinkEdit] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function unlink() {
    setAttributes({
      buttonUrl: "",
      opensInNewTab: false
    });
    setShowInlineLinkEdit(false);
  }

  function handleLinkChange(newLink) {
    setAttributes({
      buttonUrl: newLink.url,
      opensInNewTab: newLink.opensInNewTab
    });
  }

  function toggleInlineLinkEditPopover() {
    setShowInlineLinkEdit(state => !state);
  }

  function toggleSidebarLinkEditPopover() {
    setShowSidebarLinkEdit(state => !state);
  }

  function setClassField(classField, prefix, value) {
    var _attributes$classFiel;

    let classNames = (_attributes$classFiel = attributes[classField]) !== null && _attributes$classFiel !== void 0 ? _attributes$classFiel : "";
    let classArray = classNames.split(" ");
    let newClasses = [];

    if (Array.isArray(classArray)) {
      classArray.forEach((itemClass, index) => {
        if (!itemClass.includes(prefix)) {
          newClasses.push(itemClass);
        }
      });

      if ("" !== value) {
        newClasses.push(prefix + value);
      }
    }

    setAttributes({
      [classField]: newClasses.join(" ")
    });
  }

  function getClassFieldValue(className, prefix) {
    let classArray = className.split(" ");
    let value = "";

    if (Array.isArray(classArray)) {
      classArray.forEach((itemClass, index) => {
        if (itemClass.includes(prefix)) {
          value = itemClass.replace(prefix, "");
        }
      });
    }

    return value;
  }

  const blockProps = useBlockProps({
    className: "wsu-cta",
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    icon: "admin-links",
    onClick: toggleInlineLinkEditPopover
  }), attributes.buttonUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    icon: "editor-unlink",
    isPressed: true,
    onClick: unlink
  }), showInlineLinkEdit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
    position: "bottom right",
    focusOnMount: false,
    onClose: toggleInlineLinkEditPopover
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(LinkControl, {
    settings: [],
    value: {
      url: attributes.buttonUrl,
      opensInNewTab: attributes.opensInNewTab
    },
    onChange: handleLinkChange
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Button Text",
    help: "",
    placeholder: "Button Text",
    value: attributes.buttonText,
    onChange: val => setAttributes({
      buttonText: val.replace(/<[^>]+>/g, "")
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Clickthrough URL"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLPopover.LinkViewer, {
    url: attributes.buttonUrl,
    onEditLinkClick: toggleSidebarLinkEditPopover
  }), showSidebarLinkEdit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
    onClose: toggleSidebarLinkEditPopover
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(LinkControl, {
    settings: [],
    value: {
      url: attributes.buttonUrl,
      opensInNewTab: attributes.opensInNewTab
    },
    onChange: handleLinkChange
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    styles: buttonStyles,
    prefix: "wsu-button--style-",
    setKey: "buttonClassName"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: "Display Options",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setClassName"])(attributes.buttonClassName, "wsu-button--size-", val, setAttributes, "buttonClassName"),
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes.buttonClassName, "wsu-button--size-"),
    defaultChecked: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "small"
  }, "Small"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: ""
  }, "Default"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "large"
  }, "Large")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Width"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, "wsu-cta--width-", val),
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, "wsu-cta--width-"),
    defaultChecked: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "inline"
  }, "Inline"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: ""
  }, "Default"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "full"
  }, "Full")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["FontIconPickerControl"], {
    label: "Before Icon",
    help: "",
    value: attributes.iconBefore,
    onChange: val => setAttributes({
      iconBefore: val
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["FontIconPickerControl"], {
    label: "After Icon",
    help: "",
    value: attributes.iconAfter,
    onChange: val => setAttributes({
      iconAfter: val
    })
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Button CSS Class(es)",
    help: "Classes will be applied to the block's wrapper. Separate multiple classes with spaces.",
    value: attributes.buttonClassName,
    onChange: buttonClassName => setAttributes({
      buttonClassName
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Align Bottom",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, "wsu-align-item--flex-bottom"),
    onChange: value => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, "wsu-align-item--flex-bottom", value),
    help: "Parent container must have \"Enable Align Bottom\" activated (Advanced/Enable Align Bottom)"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, "wsu-text-align--"),
    onChange: val => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, "wsu-text-align--", val)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    className: "wsu-button " + attributes.buttonClassName
  }, attributes.iconBefore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
    className: `wsu-icon wsu-i-${attributes.iconBefore}`
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    allowedFormats: [],
    withoutInteractiveFormatting: true,
    disableLineBreaks: true,
    multiline: false,
    placeholder: "Button Text",
    tagName: "span",
    onChange: val => setAttributes({
      buttonText: val.replace(/<[^>]+>/g, "")
    }),
    value: attributes.buttonText
  }), attributes.iconAfter && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
    className: `wsu-icon wsu-i-${attributes.iconAfter}`
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-callout/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-callout/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-callout/editor/save.js");


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


registerBlockType("wsuwp/callout", {
  apiVersion: 2,
  title: "Aside / Callout",
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
    title: {
      type: 'string',
      default: ''
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    useAsideTag: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-callout/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl
} = wp.components;



const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-callout',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Callout Heading",
    value: attributes.title ? attributes.title : '',
    onChange: title => setAttributes({
      title
    })
  }), attributes.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["HeadingTagControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Use HTML <aside> tag",
    checked: attributes.useAsideTag,
    onChange: useAsideTag => {
      setAttributes({
        useAsideTag
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Outside Spacing (Margin)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'none'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'xmedium'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, attributes.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
    class: "wsu-callout__title"
  }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-callout/editor/save.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/save.js ***!
  \*********************************************/
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

/***/ "./blocks/wsuwp-card-group/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-card-group/editor/block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-card-group/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-card-group/editor/save.js");


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


registerBlockType("wsuwp/card-group", {
  title: "Card Group",
  apiVersion: 2,
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
    id: "b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 18.5)",
    fill: "none",
    stroke: "#070000",
    "stroke-width": "1"
  }))),
  attributes: {
    imageId: {
      type: "string",
      default: ""
    },
    imageSrc: {
      type: "string",
      default: ""
    },
    imageAlt: {
      type: "string",
      default: ""
    },
    imageRatio: {
      type: "string",
      default: "16-9"
    },
    title: {
      type: "string",
      default: ""
    },
    caption: {
      type: "string",
      default: ""
    },
    columns: {
      type: "integer",
      default: 3
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    postType: {
      type: 'string',
      default: 'post'
    },
    taxonomy: {
      type: 'string',
      default: 'category'
    },
    termsSelected: {
      type: 'array',
      default: []
    },
    terms: {
      type: 'string',
      default: ''
    },
    count: {
      type: 'string',
      default: '3'
    },
    offset: {
      type: 'string',
      default: '0'
    },
    host: {
      type: 'string',
      default: ''
    },
    useAndLogic: {
      type: 'boolean',
      default: false
    },
    useFeed: {
      type: 'boolean',
      default: false
    },
    allowCustomCards: {
      type: 'boolean',
      default: false
    },
    cardClassName: {
      type: 'string',
      default: ''
    },
    showHeading: {
      type: 'boolean',
      default: true
    },
    showCaption: {
      type: 'boolean',
      default: true
    },
    showImage: {
      type: 'boolean',
      default: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-card-group/editor/edit.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-card-group/editor/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/feed-controls/feed-controls */ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");


const {
  __
} = wp.i18n;
const {
  select
} = wp.editor;
const {
  useEffect
} = wp.element;
const {
  InnerBlocks,
  InspectorControls,
  InspectorAdvancedControls,
  useBlockProps,
  RichText
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl,
  RangeControl,
  PanelBody,
  SelectControl
} = wp.components;





const {
  MediaPlaceholder,
  MediaUpload
} = wp.editor;

const Edit = props => {
  let {
    attributes,
    setAttributes,
    clientId
  } = props;
  let blockClasses = ['wsu-card-wrapper', 'wsu-card-wrapper--per-row-' + attributes.columns];

  if (attributes.useFeed && !attributes.allowCustomCards) {
    blockClasses.push('wsu-is-feed');
  }

  const blockProps = useBlockProps({
    className: blockClasses.join(' '),
    style: {}
  });
  let blockTemplate = attributes.useFeed ? [] : [['wsuwp/card', {}, []], ['wsuwp/card', {}, []], ['wsuwp/card', {}, []]];
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];

  const updateChildBlockClasses = (prefix, value) => {
    ;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: "Number of Columns",
    help: "Number of columns to display per row.",
    value: attributes.columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 4
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Feed Content",
    checked: attributes.useFeed,
    onChange: useFeed => setAttributes({
      useFeed
    }),
    help: "Feed in post, pages, or other content automatically into card group."
  }), attributes.useFeed && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Show Image",
    checked: attributes.showImage,
    onChange: showImage => setAttributes({
      showImage
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Show Title",
    checked: attributes.showHeading,
    onChange: showHeading => setAttributes({
      showHeading
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Show Caption",
    checked: attributes.showCaption,
    onChange: showCaption => setAttributes({
      showCaption
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Image Ratio (width x height)",
    value: attributes.imageRatio,
    options: [{
      label: '2-5',
      value: '2-5'
    }, {
      label: '16-9',
      value: '16-9'
    }, {
      label: '6-4',
      value: '6-4'
    }, {
      label: '4-3',
      value: '4-3'
    }, {
      label: '1-1',
      value: '1-1'
    }, {
      label: '3-4',
      value: '3-4'
    }],
    onChange: imageRatio => {
      setAttributes({
        imageRatio
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["HeadingTagControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'div']
  })))), attributes.useFeed && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedPostTypeControl"], {
    label: "Post type",
    help: "Select post type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedTaxonomyControl"], {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedTermControl"], {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: terms => setAttributes({
      terms: terms.termsList,
      termsSelected: terms.termsSelected
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedCountControl"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedPanelAdvanced"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedUseAndLogicControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedOffsetControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__["FeedHostControl"], props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-color-background--', '', 'cardClassName'),
    onSetColor: color => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setChildBlockClassName"])(clientId, 'wsu-color-background--', color);
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-color-background--', color, 'cardClassName');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-border-top--color-', '', 'cardClassName'),
    onSetColor: color => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setChildBlockClassName"])(clientId, 'wsu-border-top--color-', color);
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-border-top--color-', color, 'cardClassName');
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Outside Spacing (Margin)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'none'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'none'
      }]
    }]
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Collapse Card Spacing",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-card-group--spacing-none'),
    onChange: collapseSpacing => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-card-group--spacing-none', collapseSpacing)
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Allow Custom Cards With Feed",
    checked: attributes.allowCustomCards,
    onChange: allowCustomCards => setAttributes({
      allowCustomCards
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: blockTemplate,
    templateLock: false,
    allowedBlocks: ['wsuwp/card']
  }), attributes.useFeed && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__["ApiRenderBlock"], {
    attributes: attributes,
    blockName: "wsuwp/card-group"
  }, "No News Items Found")));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-card-group/editor/save.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-card-group/editor/save.js ***!
  \************************************************/
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

const sectionSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-card/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-card/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-card/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-card/editor/save.js");


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


registerBlockType("wsuwp/card", {
  title: "Card",
  apiVersion: 2,
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
    id: "b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 18.5)",
    fill: "none",
    stroke: "#070000",
    "stroke-width": "1"
  }))),
  attributes: {
    imageId: {
      type: "integer",
      default: 0
    },
    imageSrc: {
      type: "string",
      default: ""
    },
    imageAlt: {
      type: "string",
      default: ""
    },
    imageRatio: {
      type: "string",
      default: "16-9"
    },
    title: {
      type: "string",
      default: ""
    },
    headingTag: {
      type: "string",
      default: "h3"
    },
    caption: {
      type: "string",
      default: ""
    },
    link: {
      type: "string",
      default: ""
    },
    showHeading: {
      type: 'boolean',
      default: true
    },
    showCaption: {
      type: 'boolean',
      default: true
    },
    showImage: {
      type: 'boolean',
      default: true
    },
    showContent: {
      type: 'boolean',
      default: false
    },
    version: {
      type: "string",
      default: "1"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-card/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-card/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  InspectorAdvancedControls,
  useBlockProps,
  RichText,
  URLInputButton
} = wp.blockEditor;
const {
  SelectControl,
  TextControl,
  ToggleControl,
  PanelBody
} = wp.components;



const {
  MediaPlaceholder,
  MediaUpload
} = wp.editor;

const Edit = props => {
  let {
    attributes,
    setAttributes,
    clientId
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-card',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  let displayFields = attributes.displayFields;

  if ('2' === attributes.version) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      colors: backgroundColors,
      label: "Background Color",
      value: "#f2f2f2"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      colors: borderColors,
      label: "Border Color",
      value: "#e6e6e6",
      prefix: "wsu-border-top--color-"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      spaceSettings: [{
        label: 'Margin (Outside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: 'none'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: 'xmedium'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-margin-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-margin-right--',
          default: 'default'
        }]
      }, {
        label: 'Padding (Inside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-top--',
          default: 'default'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-bottom--',
          default: 'default'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-padding-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-padding-right--',
          default: 'default'
        }]
      }]
    }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: 'Use Version 2',
      checked: '2' === attributes.version,
      onChange: checked => {
        let cardVersion = checked ? '2' : '1';
        setAttributes({
          version: cardVersion
        });
      },
      help: 'Use Version 2 of the Card.'
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: [['wsuwp/image', {}], ['core/heading', {
        className: 'wsu-title'
      }], ['core/paragraph', {}]],
      templateLock: false
    })));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
      isOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: "Link URL",
      value: attributes.link,
      onChange: link => setAttributes({
        link
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Image Ratio (width x height)",
      value: attributes.imageRatio,
      options: [{
        label: '2-5',
        value: '2-5'
      }, {
        label: '16-9',
        value: '16-9'
      }, {
        label: '6-4',
        value: '6-4'
      }, {
        label: '4-3',
        value: '4-3'
      }, {
        label: '1-1',
        value: '1-1'
      }, {
        label: '3-4',
        value: '3-4'
      }],
      onChange: imageRatio => {
        setAttributes({
          imageRatio
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["HeadingTagControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'div']
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Card Settings",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: "Show Image",
      checked: attributes.showImage,
      onChange: showImage => setAttributes({
        showImage
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: "Show Title",
      checked: attributes.showHeading,
      onChange: showHeading => setAttributes({
        showHeading
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: "Show Caption",
      checked: attributes.showCaption,
      onChange: showCaption => setAttributes({
        showCaption
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: "Custom Content",
      checked: attributes.showContent,
      onChange: showContent => setAttributes({
        showContent
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      colors: backgroundColors,
      label: "Background Color",
      value: "#f2f2f2"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      colors: borderColors,
      label: "Border Color",
      value: "#e6e6e6",
      prefix: "wsu-border-top--color-"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      spaceSettings: [{
        label: 'Margin (Outside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: 'none'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: 'xmedium'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-margin-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-margin-right--',
          default: 'default'
        }]
      }, {
        label: 'Padding (Inside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-top--',
          default: 'default'
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-bottom--',
          default: 'default'
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-padding-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-padding-right--',
          default: 'default'
        }]
      }]
    }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: 'Use Version 2',
      checked: '2' === attributes.version,
      onChange: checked => {
        let cardVersion = checked ? '2' : '1';
        setAttributes({
          version: cardVersion
        });
      },
      help: 'Use Version 2 of the Card.'
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, attributes.showImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ImageFrameControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "wsu-card__content"
    }, attributes.showHeading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: "h2" // The tag here is the element output and editable in the admin
      ,
      value: attributes.title // Any existing content, either from the database or an attribute default
      ,
      className: "wsu-title",
      allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: title => setAttributes({
        title
      }) // Store updated content as a block attribute
      ,
      placeholder: 'Add a Card Heading...' // Display this text before any content has been added by the user

    }), attributes.showCaption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      tagName: "div" // The tag here is the element output and editable in the admin
      ,
      value: attributes.caption // Any existing content, either from the database or an attribute default
      ,
      className: "wsu-caption" //allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: caption => setAttributes({
        caption
      }) // Store updated content as a block attribute
      ,
      placeholder: 'Add a card caption...' // Display this text before any content has been added by the user

    }), attributes.showContent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      templateLock: false
    }))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-card/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-card/editor/save.js ***!
  \******************************************/
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

const save = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

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
  apiVersion: 2,
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
    className: {
      type: 'string'
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");





const DEFAULT_SPACING = {
  spaceBefore: 'none',
  spaceAfter: 'none',
  spaceTop: 'none',
  spaceBottom: 'none'
};

const Edit = props => {
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: 'wsu-column',
    style: {}
  });
  const [spacingDefaults, setSpacingDefaults] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(DEFAULT_SPACING);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.attributes.className && props.attributes.className.includes('wsu-color-background--')) {
      setSpacingDefaults({
        spaceBefore: 'none',
        spaceAfter: 'xmedium',
        spaceTop: 'xmedium',
        spaceBottom: 'none'
      });
    } else {
      setSpacingDefaults(DEFAULT_SPACING);
    }
  }, [props.attributes.className]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["ColorClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Color Settings",
    colorSettings: [{
      label: 'Background Color',
      prefix: 'wsu-color-background--',
      colors: [{
        name: 'White',
        color: '#ffffff',
        className: 'white'
      }, {
        name: 'Gray 0',
        color: '#f7f7f7',
        className: 'gray-0'
      }, {
        name: 'Gray 5',
        color: '#f2f2f2',
        className: 'gray-5'
      }, {
        name: 'Gray 10',
        color: '#e6e6e6',
        className: 'gray-10'
      }, {
        name: 'Gray 85',
        color: '#262626',
        className: 'gray-85'
      }, {
        name: 'Gray 95',
        color: '#080808',
        className: 'gray-95'
      }]
    }]
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Margin (Outside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: spacingDefaults['spaceBefore']
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: spacingDefaults['spaceAfter']
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: spacingDefaults['spaceTop']
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: spacingDefaults['spaceBottom']
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

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

/***/ "./blocks/wsuwp-container/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-container/editor/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-container/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-container/editor/save.js");


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


registerBlockType("wsuwp/container", {
  title: "Generic Container",
  apiVersion: 2,
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "5.83",
    y: "4.88",
    width: "36.34",
    height: "38.25",
    fill: "#fff",
    stroke: "#231f20",
    "stroke-miterlimit": "10",
    "stroke-width": "4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M25.29,19.75c0-1-1-1.66-2.29-1.66A3.67,3.67,0,0,0,19.75,20l-3.87-2.08C17.26,15.56,19.78,14,23.6,14c4,0,6.86,1.72,6.86,4.89,0,4.06-4.26,4.65-4.26,7H21.57C21.57,22.56,25.29,21.7,25.29,19.75ZM21,30.1a2.71,2.71,0,0,1,2.94-2.68,2.74,2.74,0,0,1,3,2.68,2.79,2.79,0,0,1-3,2.73A2.76,2.76,0,0,1,21,30.1Z",
    fill: "#231f20"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "48",
    height: "48",
    fill: "none"
  })),
  attributes: {
    tag: {
      type: "string",
      default: "div"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-container/editor/edit.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-container/editor/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
  InspectorAdvancedControls
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-container',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#ffffff'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  const containerTags = [{
    label: 'div',
    value: 'div'
  }, {
    label: 'section',
    value: 'section'
  }, {
    label: 'nav',
    value: 'nav'
  }, {
    label: 'span',
    value: 'span'
  }, {
    label: 'header',
    value: 'header'
  }, {
    label: 'footer',
    value: 'footer'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "HTML Tag",
    value: attributes.tag,
    options: containerTags,
    onChange: tag => setAttributes({
      tag
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#ffffff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#ffffff",
    prefix: "wsu-callout--color-"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Margin (Outside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'none'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'xmedium'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Full Width",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Use Flexbox",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-flex--wrap'),
    onChange: fullWidth => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-flex--wrap', fullWidth);
    }
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-flex--wrap') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: "Flex items per row",
    value: parseInt(Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-flex--columns-')),
    onChange: columns => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-flex--columns-', columns),
    min: 1,
    max: 4
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-flex--wrap') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Flex Breakpoint",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-flex--breakpoint-'),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Desktop',
      value: 'desktop'
    }, {
      label: 'Tablet Large',
      value: 'tablet-large'
    }, {
      label: 'Tablet Medium',
      value: 'tablet-medium'
    }, {
      label: 'Table',
      value: 'tablet'
    }, {
      label: 'Phone',
      value: 'phone'
    }, {
      label: 'Phone Small',
      value: 'phone-small'
    }],
    onChange: breakpoint => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-flex--breakpoint-', breakpoint)
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-flex--wrap') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Flex Spacing",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-flex--spacing-'),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'xMedium',
      value: 'xmedium'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'xLarge',
      value: 'xlarge'
    }],
    onChange: spacing => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-flex--spacing-', spacing)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-container/editor/save.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-container/editor/save.js ***!
  \***********************************************/
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

const sectionSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-decorator/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-decorator/editor/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-decorator/editor/edit.js");


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

registerBlockType("wsuwp/decorator", {
  title: "Decorator",
  apiVersion: 2,
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
    top: {
      type: "string",
      default: ""
    },
    bottom: {
      type: "string",
      default: ""
    },
    left: {
      type: "string",
      default: ""
    },
    right: {
      type: "string",
      default: ""
    },
    width: {
      type: "string",
      default: ""
    },
    height: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-decorator/editor/edit.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-decorator/editor/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl,
  SelectControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-decorator',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  /*const decoratorStyles = [
  	{ label: 'Triangle: Crimson Right', value: 'triangle-crimson-right' },
  	{ label: 'Triangle: Crimson Left', value: 'triangle-crimson-left' },
  	{ label: 'Triangle: Crimson WSU Steep Right', value: 'triangle-crimson-wsu-steep-right' },
  	{ label: 'Triangle: Crimson WSU Steep Left', value: 'triangle-crimson-wsu-steep-left' },
  	{ label: 'Triangle: Crimson WSU Steep Top Right', value: 'triangle-crimson-wsu-steep-top-right' },
  	{ label: 'Triangle: Crimson WSU Steep Top Left', value: 'triangle-crimson-wsu-steep-top-left' },
  	{ label: 'Triangle: Gray Right', value: 'triangle-gray-right' },
  	{ label: 'Triangle: Gray Left', value: 'triangle-gray-left' },
  	{ label: 'Block: Gray', value: 'block-gray' },
  	{ label: 'Block: Gray WSU', value: 'block-gray-wsu' },
  	{ label: 'Block: Gray Dark', value: 'block-gray-dark' },
  	{ label: 'Block: Crimson', value: 'block-crimson' },
  	{ label: 'Block: Crimson WSU', value: 'block-crimson-wsu' },
  	{ label: 'Block: Crimson Light', value: 'block-crimson-light' },
  	{ label: 'None', value: '' },
  ];*/

  const decoratorStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "32 60 92 60 92 0 32 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle',
    value: 'triangle-crimson-right'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "32 0 32 60 92 60 32 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle',
    value: 'triangle-crimson-left'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "78.69 0 78.69 60 45.31 60 78.69 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-right'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "45.31 0 45.31 60 78.69 60 45.31 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-left'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "45.31 60 45.31 0 78.69 0 45.31 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-top-left'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "78.69 60 78.69 0 45.31 0 78.69 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-top-right'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "32 60 92 60 92 0 32 60",
      fill: "#dad9d9"
    })),
    label: 'Triangle',
    value: 'triangle-gray-right'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polygon", {
      points: "32 0 32 60 92 60 32 0",
      fill: "#dad9d9"
    })),
    label: 'Triangle',
    value: 'triangle-gray-left'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#dad9d9"
    })),
    label: 'Block',
    value: 'block-gray'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#dad9d9"
    })),
    label: 'Block (WSU)',
    value: 'block-gray-wsu'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "gray"
    })),
    label: 'Block',
    value: 'block-gray-dark'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#a61d2f"
    })),
    label: 'Block',
    value: 'block-crimson'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#a61d2f"
    })),
    label: 'Block (WSU)',
    value: 'block-crimson-wsu'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#ca2039"
    })),
    label: 'Block',
    value: 'block-crimson-light'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "14.39",
      y1: "51.39",
      x2: "57.16",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "25.91",
      y1: "51.39",
      x2: "68.68",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "36.81",
      y1: "51.39",
      x2: "79.58",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "46.91",
      y1: "51.39",
      x2: "89.68",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "58.43",
      y1: "51.39",
      x2: "101.2",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "69.33",
      y1: "51.39",
      x2: "112.1",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    })),
    label: 'Lines Crimson',
    value: 'lines-crimson'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "14.39",
      y1: "51.39",
      x2: "57.16",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "25.91",
      y1: "51.39",
      x2: "68.68",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "36.81",
      y1: "51.39",
      x2: "79.58",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "46.91",
      y1: "51.39",
      x2: "89.68",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "58.43",
      y1: "51.39",
      x2: "101.2",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
      x1: "69.33",
      y1: "51.39",
      x2: "112.1",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    })),
    label: 'Lines Gray',
    value: 'lines-gray'
  }];

  const getDecoratorName = () => {
    let value = Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-decorator--style-', '');
    let name = 'None';
    decoratorStyles.forEach(style => {
      if (style.value === value) {
        name = style.label;
      }
    });
    return name;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    styles: decoratorStyles,
    prefix: "wsu-decorator--style-"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Top",
    value: attributes.top,
    onChange: top => setAttributes({
      top
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Bottom",
    value: attributes.bottom,
    onChange: bottom => setAttributes({
      bottom
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Left",
    value: attributes.left,
    onChange: left => setAttributes({
      left
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Right",
    value: attributes.right,
    onChange: right => setAttributes({
      right
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "width",
    value: attributes.width,
    onChange: width => setAttributes({
      width
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "height",
    value: attributes.height,
    onChange: height => setAttributes({
      height
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Z Index",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, 'wsu-z-index--', ''),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Content 1',
      value: '1-content'
    }, {
      label: 'Content 2',
      value: '2-content'
    }, {
      label: 'Content 3',
      value: '3-content'
    }, {
      label: 'Content 4',
      value: '4-content'
    }, {
      label: 'Content 5',
      value: '5-content'
    }, {
      label: 'Content 6',
      value: '6-content'
    }],
    onChange: style => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, 'wsu-z-index--', style);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, "Decorator: ", getDecoratorName()));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-hero-slider/editor/block.js":
/*!**************************************************!*\
  !*** ./blocks/wsuwp-hero-slider/editor/block.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./blocks/wsuwp-hero-slider/editor/hooks.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-hero-slider/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-hero-slider/editor/save.js");
/**
 *
 * WordPress Dependencies
 *
 */

const {
  registerBlockType
} = wp.blocks;


registerBlockType("wsuwp/hero-slider", {
  apiVersion: 2,
  title: "Hero Slider",
  category: "design",
  icon: "slides",
  attributes: {
    autoplay: {
      type: "boolean",
      default: false
    },
    autoplayDelay: {
      type: "integer",
      default: 5000
    }
  },
  innerBlocks: [{
    name: "wsuwp/hero"
  }],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-hero-slider/editor/edit.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-hero-slider/editor/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");




const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  ButtonGroup,
  Button,
  ToggleControl,
  TextControl
} = wp.components;

const Edit = props => {
  const {
    select,
    dispatch
  } = wp.data;
  const {
    clientId,
    attributes,
    setAttributes
  } = props;
  const [selectedSlideIndex, setSelectedSlideIndex] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const slideBlocks = select("core/block-editor").getBlocks(clientId);
  const blockProps = useBlockProps({
    className: "wsu-gutenberg-hero-slider",
    style: {}
  });

  function selectSlide(blockId, index) {
    index = index !== undefined ? index : getSlideIndex(blockId);
    setSelectedSlideIndex(index);
    dispatch("core/block-editor").selectBlock(blockId);
  }

  function insertBlock() {
    dispatch("core/block-editor").insertBlock(wp.blocks.createBlock("wsuwp/hero", {
      requiredClassName: "swiper-slide"
    }), slideBlocks.length, clientId, true).then(response => {
      const block = response.blocks[0];
      selectSlide(block.clientId, response.index);
      console.log(response);
    });
  }

  function removeSlide(blockId) {
    const index = getSlideIndex(blockId);
    const isLastSlideSelected = selectedSlideIndex === slideBlocks.length - 1;
    dispatch("core/block-editor").removeBlock(blockId, false).then(() => {
      // select new index
      if (isLastSlideSelected || selectedSlideIndex > index) {
        setSelectedSlideIndex(Math.max(0, selectedSlideIndex - 1));
      } else if (selectedSlideIndex === index) {
        setSelectedSlideIndex(Math.max(0, index - 1));
      }
    });
  }

  function moveBlock(blockId, oldIndex, newIndex) {
    const isMovingSelectedSlide = selectedSlideIndex === oldIndex;
    newIndex = Math.max(0, Math.min(newIndex, slideBlocks.length - 1)); // ensure new index is within slide range

    dispatch("core/block-editor").moveBlockToPosition(blockId, clientId, clientId, newIndex).then(() => {
      if (isMovingSelectedSlide) {
        setSelectedSlideIndex(newIndex);
      } else if (newIndex === selectedSlideIndex) {
        setSelectedSlideIndex(oldIndex);
      }
    });
  }

  function getSlideIndex(blockId) {
    return slideBlocks.findIndex(slide => slide.clientId === blockId);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Autoplay Slider",
    checked: attributes.autoplay,
    onChange: val => setAttributes({
      autoplay: val
    }),
    help: "Slider will automatically advance to the next slide on a time interval."
  }), attributes.autoplay === true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Delay between slides",
    help: "Delay between slides in milliseconds. 1000 = 1 second.",
    placeholder: "5000",
    value: attributes.autoplayDelay,
    onChange: delay => setAttributes({
      autoplayDelay: delay
    })
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    "data-selected-slide-index": selectedSlideIndex
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wsu-gutenberg-hero-slider__slides"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: [["wsuwp/hero", {
      requiredClassName: "swiper-slide"
    }]],
    templateLock: false,
    allowedBlocks: ["wsuwp/hero"],
    orientation: "horizontal",
    renderAppender: false,
    __experimentalCaptureToolbars: true
  })), slideBlocks && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wsu-gutenberg-hero-slider__controls"
  }, slideBlocks.map((b, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    key: `slide-${i}`,
    className: `wsu-gutenberg-hero-slider__control-container${selectedSlideIndex === i ? " is-selected" : ""}`
  }, slideBlocks.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wsu-gutenberg-hero-slider__sub-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    className: "wsu-gutenberg-hero-slider__sub-controls-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    showTooltip: true,
    label: "Move Left",
    icon: "arrow-left-alt2",
    isSmall: true,
    iconSize: 16,
    disabled: i === 0,
    onClick: () => moveBlock(b.clientId, i, i - 1)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    showTooltip: true,
    label: "Delete Slide",
    icon: "no-alt",
    isSmall: true,
    iconSize: 16,
    onClick: () => removeSlide(b.clientId)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    showTooltip: true,
    label: "Move Right",
    icon: "arrow-right-alt2",
    isSmall: true,
    disabled: i === slideBlocks.length - 1,
    onClick: () => moveBlock(b.clientId, i, i + 1)
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    className: "wsu-gutenberg-hero-slider__select-control",
    onClick: () => selectSlide(b.clientId)
  }, b.attributes.title || "Slide " + (i + 1)))), slideBlocks.length < 5 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    className: "wsu-gutenberg-hero-slider__insert-control",
    showTooltip: true,
    label: "Insert Slide",
    icon: "plus",
    isSmall: true,
    onClick: insertBlock
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-hero-slider/editor/hooks.js":
/*!**************************************************!*\
  !*** ./blocks/wsuwp-hero-slider/editor/hooks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const el = wp.element.createElement; // super hacky function to hide the toolbar on the hero slider blocks

function hideToolbar(OriginalComponent) {
  return function (props) {
    if (props.name === "wsuwp/hero" && props.isSelected) {
      requestAnimationFrame(() => {
        const el = jQuery(".wp-block-wsuwp-hero.wsu-hero.is-selected");
        const isInSlider = jQuery(el).closest(".wsu-gutenberg-hero-slider__slides").length;

        if (isInSlider) {
          jQuery(".components-popover__content").hide();
        }
      });
    }

    return el(OriginalComponent, props);
  };
}

wp.hooks.addFilter("editor.BlockEdit", "wsuwp/block-hero-slider", hideToolbar);

/***/ }),

/***/ "./blocks/wsuwp-hero-slider/editor/save.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-hero-slider/editor/save.js ***!
  \*************************************************/
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

const heroSliderSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (heroSliderSave);

/***/ }),

/***/ "./blocks/wsuwp-hero/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-hero/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-hero/editor/edit.js");


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

registerBlockType("wsuwp/hero", {
  title: "Hero Banner",
  apiVersion: 2,
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
    requiredClassName: {
      type: "string",
      default: ""
    },
    eyebrowHeading: {
      type: "string",
      default: ""
    },
    title: {
      type: "string",
      default: ""
    },
    headingTag: {
      type: "string",
      default: "div"
    },
    caption: {
      type: "string",
      default: ""
    },
    buttonText: {
      type: "string",
      default: ""
    },
    photoCredit: {
      type: "string",
      default: ""
    },
    overlay: {
      type: "string",
      default: "dark-left"
    },
    imageId: {
      type: "integer",
      default: 0
    },
    imageSrc: {
      type: "string",
      default: ""
    },
    link: {
      type: "string",
      default: ""
    },
    imageFocalPoint: {
      type: "object",
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    imageDimensions: {
      type: "object",
      default: {
        width: 1070,
        height: 500
      }
    },
    lightOverlay: {
      type: "boolean",
      default: false
    },
    pattern: {
      type: "string",
      default: "wsu-light-radial-left"
    },
    sliderImages: {
      type: "array",
      default: []
    },
    sliderEffect: {
      type: "string",
      default: "slide"
    },
    sliderDelay: {
      type: "integer",
      default: 3000
    },
    backgroundType: {
      type: "string",
      default: ""
    },
    backgroundVideo: {
      type: "boolean",
      default: false
    },
    videoId: {
      type: "string",
      default: ""
    },
    videoTitle: {
      type: "string",
      default: ""
    },
    videoDescription: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-hero/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-hero/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");

const {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  URLInput
} = wp.blockEditor;
const {
  Panel,
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  Button,
  FocalPointPicker,
  BaseControl,
  TextareaControl,
  RangeControl
} = wp.components;
const {
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;




const Edit = ({
  className,
  isSelected,
  attributes,
  setAttributes
}) => {
  var _attributes$className, _attributes$sliderIma, _attributes$sliderIma2;

  let blockClasses = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';

  const getOverlayClasses = () => {
    let classArray = ['wsu-overlay', 'wsu-pattern-after'];
    classArray.push('wsu-overlay--' + attributes.overlay);
    classArray.push('wsu-pattern--' + attributes.pattern);
    return classArray.join(' ');
  };

  const blockProps = useBlockProps({
    className: 'wsu-hero  wsu-pattern--wsu-light-radial-left',
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Set as Page Title",
    checked: attributes.headingTag === 'h1' ? true : false,
    onChange: isPageTitle => {
      let tag = isPageTitle ? 'h1' : 'div';
      setAttributes({
        headingTag: tag
      });
    },
    help: "Set Hero Banner Title to H1 and remove auto generated page title"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Hero Banner Link",
    value: attributes.link ? attributes.link : '',
    onChange: link => setAttributes({
      link
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Photo Credits",
    value: attributes.photoCredit ? attributes.photoCredit : '',
    onChange: photoCredit => setAttributes({
      photoCredit
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Height",
    value: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameValue"])(blockClasses, 'wsu-hero--size-'),
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'xSmall',
      value: 'xsmall'
    }, {
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'Full',
      value: 'full'
    }],
    onChange: size => {
      setAttributes({
        className: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["addBlockClassName"])(blockClasses, 'wsu-hero--size-', size)
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Overlay",
    value: attributes.overlay,
    options: [{
      label: 'Default',
      value: 'dark-left'
    }, {
      label: 'Lighter',
      value: 'light'
    }, {
      label: 'None',
      value: 'none'
    }],
    onChange: overlay => {
      setAttributes({
        overlay
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Pattern",
    value: attributes.pattern,
    options: [{
      label: 'WSU',
      value: 'wsu-light-radial-left'
    }, {
      label: 'None',
      value: 'none'
    }],
    onChange: pattern => {
      setAttributes({
        pattern
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Background Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => setAttributes({
      backgroundType: val
    }),
    checked: attributes.backgroundVideo && !attributes.backgroundType ? 'video' : attributes.backgroundType,
    defaultChecked: "image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "image"
  }, "Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "video"
  }, "Video"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "slider"
  }, "Slider"))), (attributes.backgroundType === 'image' || !attributes.backgroundType && !attributes.backgroundVideo) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Focal Point Picker"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imageDimensions,
    value: attributes.imageFocalPoint,
    onChange: focalPoint => setAttributes({
      imageFocalPoint: focalPoint
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: media => setAttributes({
      imageId: media.id,
      imageSrc: media.url
    }),
    allowedTypes: ['image'],
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: `${attributes.imageSrc ? 'Replace' : 'Choose'} Background Image`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isLink: true,
      onClick: open
    }, "Open Media Library"))
  }))), attributes.backgroundType === 'slider' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["MultipleImagePicker"], {
    label: "Slider Images",
    help: "Choose images to rotate through and select focal points by clicking the desired image.",
    onChange: images => setAttributes({
      sliderImages: images
    }),
    value: attributes.sliderImages
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: "Effect used when transitioning to the next slide."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Effect"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => setAttributes({
      sliderEffect: val
    }),
    checked: attributes.sliderEffect,
    defaultChecked: "slide"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "slide"
  }, "Slide"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "fade"
  }, "Fade"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    label: "Slider Delay",
    help: "Delay in milliseconds between slides.",
    value: attributes.sliderDelay,
    onChange: val => setAttributes({
      sliderDelay: val
    }),
    min: 100,
    max: 10000,
    step: 50
  })), (attributes.backgroundType === 'video' || attributes.backgroundVideo && !attributes.backgroundType) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Background Video ID (Vimeo)",
    value: attributes.videoId ? attributes.videoId : '',
    onChange: videoId => setAttributes({
      videoId
    }),
    help: "Video ID only. Example: 76979871 from https://player.vimeo.com/video/76979871"
  }), attributes.videoId && (!attributes.videoTitle || !attributes.videoDescription) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequiredAlertControl"], null, "Video title and text description are required for the video to render."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Background Video Title",
    value: attributes.videoTitle ? attributes.videoTitle : '',
    onChange: videoTitle => setAttributes({
      videoTitle
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    label: "Background Video Text Description",
    value: attributes.videoDescription ? attributes.videoDescription : '',
    onChange: videoDescription => setAttributes({
      videoDescription
    })
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-image-frame wsu-image-frame--fill"
  }, attributes.backgroundType === 'image' && attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: attributes.imageSrc
  }) || attributes.backgroundType === 'slider' && ((_attributes$sliderIma = attributes.sliderImages[0]) === null || _attributes$sliderIma === void 0 ? void 0 : _attributes$sliderIma.url) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: (_attributes$sliderIma2 = attributes.sliderImages[0]) === null || _attributes$sliderIma2 === void 0 ? void 0 : _attributes$sliderIma2.url
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: getOverlayClasses()
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-hero__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-hero__caption"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "wsu-eyebrow-heading",
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.eyebrowHeading // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: eyebrowHeading => setAttributes({
      eyebrowHeading
    }) // Store updated content as a block attribute
    ,
    placeholder: "Intro Text..." // Display this text before any content has been added by the user

  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "wsu-title",
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.title // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: title => setAttributes({
      title
    }) // Store updated content as a block attribute
    ,
    placeholder: "Add Hero Banner Text..." // Display this text before any content has been added by the user

  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "wsu-caption",
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.caption // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: caption => setAttributes({
      caption
    }) // Store updated content as a block attribute
    ,
    placeholder: "Add Hero Banner caption text here..." // Display this text before any content has been added by the user

  }), attributes.link && attributes.buttonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-button wsu-button--size-small",
    href: "#",
    "aria-labelledby": "unique-id-hero-banner-title"
  }, attributes.buttonText)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-image/editor/block.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-image/editor/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-image/editor/edit.js");


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

registerBlockType("wsuwp/image", {
  title: "WSU Image Block",
  apiVersion: 2,
  parent: ['wsuwp/card'],
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
    imageId: {
      type: "integer",
      default: 0
    },
    imageSrc: {
      type: "string",
      default: ""
    },
    imageAlt: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-image/editor/edit.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-image/editor/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  InspectorAdvancedControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-image',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  const imageStyles = [{
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      x: "9.37",
      y: "7.94",
      width: "105.27",
      height: "44.12",
      style: {
        fill: '#6d6e71',
        stroke: '#fff',
        strokeMiterlimit: 10,
        strokeWidth: '2px'
      }
    })),
    label: 'Framed',
    value: 'framed'
  }, {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
      cx: "62",
      cy: "30",
      r: "26.71",
      fill: "#6d6e71"
    })),
    label: 'Round',
    value: 'round'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    styles: imageStyles,
    prefix: "wsu-image--style-"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Margin (Outside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ImageFrameControl"], props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-menu/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-menu/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-menu/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-menu/editor/save.js");
const {
  registerBlockType
} = wp.blocks;


registerBlockType("wsuwp/menu", {
  title: "Menu",
  icon: "menu",
  apiVersion: 2,
  category: "text",
  attributes: {
    slug: {
      type: "string",
      default: ""
    },
    tag: {
      type: "tag",
      default: "nav"
    },
    menuClassname: {
      type: "string",
      default: ""
    },
    custom: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-menu/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-menu/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






const edit = props => {
  const {
    className,
    attributes,
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: "wsu-gutenberg-menu-block",
    style: {}
  });
  const [menus, setMenus] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/wsu-gutenberg/v1/get-wp-menus"
    }).then(response => {
      const menus = JSON.parse(response);

      if (menus) {
        const options = menus.map(menu => {
          return {
            label: menu.name,
            value: menu.slug
          };
        });
        options.push({
          label: 'None',
          value: ''
        });
        setMenus(options);
      }
    });
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "General",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Menu Wrapper Tag",
    value: attributes.tag,
    options: [{
      label: 'nav',
      value: 'nav'
    }, {
      label: 'div',
      value: 'div'
    }, {
      label: 'None',
      value: ''
    }],
    onChange: tag => setAttributes({
      tag
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Menu to Display",
    value: attributes.slug,
    options: menus,
    onChange: slug => setAttributes({
      slug: slug
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: 'Enable Custom Blocks',
    checked: attributes.custom,
    onChange: custom => setAttributes({
      custom
    }),
    help: 'Add custom blocks to menu'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorAdvancedControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Menu CSS class(es)",
    value: attributes.menuClassname,
    onChange: menuClassname => setAttributes({
      menuClassname
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "dashicon dashicons dashicons-menu wsu-gutenberg-menu-block__icon"
  }), " ", "Menu: ", attributes.slug, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, attributes.custom && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    templateLock: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-menu/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-menu/editor/save.js ***!
  \******************************************/
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

const save = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/wsuwp-news-cards/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-news-cards/editor/block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-news-cards/editor/edit.js");


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

registerBlockType("wsuwp/news-cards", {
  title: "News Cards",
  apiVersion: 2,
  category: "feeds",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
    id: "b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 18.5)",
    fill: "none",
    stroke: "#070000",
    "stroke-width": "1"
  }))),
  attributes: {
    perRow: {
      type: 'string',
      default: '1'
    },
    source: {
      type: 'string',
      default: 'feed'
    },
    hideDate: {
      type: 'boolean',
      default: false
    },
    hideCaption: {
      type: 'boolean',
      default: true
    },
    hideImage: {
      type: 'boolean',
      default: false
    },
    showButton: {
      type: 'boolean',
      default: false
    },
    showHeading: {
      type: 'boolean',
      default: false
    },
    hideShownPosts: {
      type: 'boolean',
      default: false
    },
    buttonText: {
      type: 'string',
      default: 'More News'
    },
    buttonLink: {
      type: 'string',
      default: ''
    },
    headingText: {
      type: 'string',
      default: ''
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    linkHeading: {
      type: 'boolean',
      default: false
    },
    postType: {
      type: 'string',
      default: 'post'
    },
    taxonomy: {
      type: 'string',
      default: 'category'
    },
    termsSelected: {
      type: 'array',
      default: []
    },
    queryTerms: {
      type: 'array',
      default: []
    },
    terms: {
      type: 'string',
      default: ''
    },
    count: {
      type: 'string',
      default: '1'
    },
    offset: {
      type: 'string',
      default: '0'
    },
    host: {
      type: 'string',
      default: ''
    },
    postIn: {
      type: 'string',
      default: ''
    },
    requireFirstImage: {
      type: 'boolean',
      default: false
    },
    requireImage: {
      type: 'boolean',
      default: false
    },
    useAndLogic: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-news-cards/editor/blockEditFilter.js":
/*!***********************************************************!*\
  !*** ./blocks/wsuwp-news-cards/editor/blockEditFilter.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");

const {
  addFilter
} = wp.hooks;
const {
  Fragment
} = wp.element;
const {
  InspectorAdvancedControls
} = wp.editor;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  ToggleControl
} = wp.components;

const newsCardAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && props.name == 'wsuwp/news-cards' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Show Feed Button",
      checked: attributes.showButton,
      onChange: showButton => {
        setAttributes({
          showButton
        });
      }
    }), attributes.showButton && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__["ButtonControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Show Feed Heading",
      checked: attributes.showHeading,
      onChange: showHeading => {
        setAttributes({
          showHeading
        });
      }
    }), attributes.showHeading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__["HeadingControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Link Heading",
      checked: attributes.linkHeading,
      onChange: linkHeading => {
        setAttributes({
          linkHeading
        });
      }
    }))));
  };
}, 'newsCardAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/news-card-advanced-controls', newsCardAdvancedControls);

/***/ }),

/***/ "./blocks/wsuwp-news-cards/editor/edit.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-news-cards/editor/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/feed-controls/feed-controls */ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  IconButton,
  ToggleControl,
  PanelRow
} = wp.components;
const {
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;









const NewsCardGeneralOptions = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_5__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Content Source",
    value: attributes.source,
    options: [{
      label: 'Feed',
      value: 'feed'
    }, {
      label: 'Select Posts',
      value: 'select'
    }],
    onChange: source => setAttributes({
      source
    })
  }));
};

const NewsCardDisplayOptions = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_5__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Cards Per Row",
    value: attributes.perRow,
    options: [{
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2'
    }, {
      label: '3',
      value: '3'
    }, {
      label: '4',
      value: '4'
    }],
    onChange: perRow => setAttributes({
      perRow
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["HeadingTagControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Image",
    checked: attributes.hideImage,
    onChange: hideImage => {
      setAttributes({
        hideImage
      });
    }
  }));
};

const FeedPlaceHolder = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-card-news__placeholder"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-card-news__placeholder-message"
  }, "No Cards Found"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-card-news__placeholder-text"
  }, "Try changing your feed settings!"));
};

const Edit = props => {
  let {
    className,
    attributes,
    setAttributes,
    clientId
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-card-wrapper wsu-card-wrapper--news wsu-card-wrapper--per-row-' + attributes.perRow,
    style: {}
  });
  let queryAttrs = attributes;
  queryAttrs['hideLink'] = true;
  console.log(attributes.queryTerms);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NewsCardDisplayOptions, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Feed Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: source => setAttributes({
      source
    }),
    checked: attributes.source,
    defaultChecked: "feed"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "feed"
  }, "Basic"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Radio, {
    value: "select"
  }, "Select")))), attributes.source == 'feed' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedPostTypeControl"], {
    label: "Content Type",
    help: "Select content type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedTaxonomyControl"], {
    label: "Taxonomy (Category, Tag, etc...)",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedTermControl"], {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: terms => setAttributes({
      terms: terms.termsList,
      termsSelected: terms.termsSelected,
      queryTerms: terms.queryTerms
    })
  })), attributes.source == 'select' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["PostPicker"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedCountControl"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedPanelAdvanced"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedUseAndLogicControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedOffsetControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__["FeedHostControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequireImageControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequireFirstImageControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Shown Posts",
    checked: attributes.hideShownPosts,
    onChange: hideShownPosts => {
      setAttributes({
        hideShownPosts
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__["ApiRenderBlock"], {
    attributes: queryAttrs,
    blockName: "wsuwp/news-cards"
  }, 'feed' === attributes.source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FeedPlaceHolder, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-news-list/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-news-list/editor/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-news-list/editor/edit.js");


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

registerBlockType("wsuwp/news-list", {
  title: "News List",
  apiVersion: 2,
  category: "feeds",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
    id: "b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
    x2: "13",
    transform: "translate(5.5 18.5)",
    fill: "none",
    stroke: "#070000",
    "stroke-width": "1"
  }))),
  attributes: {
    hideDate: {
      type: 'boolean',
      default: false
    },
    hideCaption: {
      type: 'boolean',
      default: false
    },
    headingTag: {
      type: 'string',
      default: 'h3'
    },
    postType: {
      type: 'string',
      default: 'post'
    },
    taxonomy: {
      type: 'string',
      default: 'category'
    },
    termsSelected: {
      type: 'array',
      default: []
    },
    terms: {
      type: 'string',
      default: ''
    },
    count: {
      type: 'string',
      default: '3'
    },
    offset: {
      type: 'string',
      default: '0'
    },
    host: {
      type: 'string',
      default: ''
    },
    postIn: {
      type: 'string',
      default: ''
    },
    useAndLogic: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-news-list/editor/edit.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-news-list/editor/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");
/* harmony import */ var _assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/feed-controls/feed-controls */ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js");

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  IconButton,
  ToggleControl
} = wp.components;









const Edit = props => {
  let {
    className,
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: "wsu-news-list",
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
    key: "setting"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedPostTypeControl"], {
    label: "Post type",
    help: "Select post type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedTaxonomyControl"], {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedTermControl"], {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: terms => setAttributes({
      terms: terms.termsList,
      termsSelected: terms.termsSelected
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedCountControl"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedPanelAdvanced"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedUseAndLogicControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedOffsetControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__["FeedHostControl"], props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__["ApiRenderBlock"], {
    attributes: attributes,
    blockName: "wsuwp/news-list"
  }, "No News Items Found")));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-news/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-news/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-news/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-news/editor/save.js");
/* harmony import */ var _variationCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variationCard */ "./blocks/wsuwp-news/editor/variationCard.js");
/* harmony import */ var _variationCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_variationCard__WEBPACK_IMPORTED_MODULE_3__);


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


registerBlockType("wsuwp/news", {
  title: "News (Deprecated)",
  apiVersion: 2,
  category: "feeds",
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
    },
    type: {
      type: 'string',
      default: ''
    },
    useSelect: {
      type: 'boolean',
      default: false
    },
    postIn: {
      type: 'string',
      default: ''
    },
    hideDate: {
      type: 'boolean',
      default: true
    },
    hideCaption: {
      type: 'boolean',
      default: false
    },
    hideImage: {
      type: 'boolean',
      default: false
    },
    postType: {
      type: 'string',
      default: 'post'
    },
    taxonomy: {
      type: 'string',
      default: 'category'
    },
    terms: {
      type: 'string',
      default: ''
    },
    count: {
      type: 'string',
      default: '5'
    },
    offset: {
      type: 'string',
      default: '0'
    },
    useFeed: {
      type: 'boolean',
      default: false
    },
    hideShownPosts: {
      type: 'boolean',
      default: false
    },
    requireFirstImage: {
      type: 'boolean',
      default: false
    },
    requireImage: {
      type: 'boolean',
      default: false
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    buttonLink: {
      type: 'string',
      default: ''
    },
    headerText: {
      type: 'string',
      default: ''
    },
    headerTag: {
      type: 'string',
      default: ''
    },
    headerLink: {
      type: 'string',
      default: ''
    },
    perRow: {
      type: 'string',
      default: '3'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});


/***/ }),

/***/ "./blocks/wsuwp-news/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-news/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl,
  ToggleControl
} = wp.components;





const Edit = ({
  className,
  attributes,
  setAttributes
}) => {
  const blockProps = useBlockProps({
    className: 'wsu-card wsu-card-news',
    style: {}
  });
  let queryAttrs = attributes;
  queryAttrs['hideLink'] = true;
  let newsPlaceholder;

  switch (attributes.type) {
    case 'card':
      newsPlaceholder = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardPlaceholder, null);
      break;

    case 'list':
      newsPlaceholder = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ListPlaceholder, null);
      break;

    default:
      newsPlaceholder = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IndexPlaceholder, null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
    key: "setting"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Header",
    value: attributes.headerText ? attributes.headerText : '',
    onChange: headerText => setAttributes({
      headerText
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Header Link",
    value: attributes.headerLink ? attributes.headerLink : '',
    onChange: headerLink => setAttributes({
      headerLink
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Link",
    value: attributes.buttonLink ? attributes.buttonLink : '',
    onChange: buttonLink => setAttributes({
      buttonLink
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Image",
    checked: attributes.hideImage,
    onChange: hideImage => {
      setAttributes({
        hideImage
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Hide Shown Posts",
    checked: attributes.hideShownPosts,
    onChange: hideShownPosts => {
      setAttributes({
        hideShownPosts
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__["PerRow"], {
    label: "Cards Per Row",
    attributes: attributes,
    value: attributes.perRow ? attributes.perRow : '',
    onChange: perRow => setAttributes({
      perRow
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelInsertPost"], {
    attributes: attributes,
    onChange: value => setAttributes({
      postIn: value
    }),
    postTypes: ['news_article', 'press_release', 'announcement', 'post', 'page'],
    placeholder: "Search posts..."
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelFeedPosts"], {
    attributes: attributes,
    setUseFeed: useFeed => setAttributes({
      useFeed
    }),
    setPostType: postType => setAttributes({
      postType
    }),
    setTaxonomy: taxonomy => setAttributes({
      taxonomy
    }),
    setTerms: terms => setAttributes({
      terms
    }),
    setCount: count => setAttributes({
      count
    }),
    setOffset: offset => setAttributes({
      offset
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Require Images",
    checked: attributes.requireImage,
    onChange: requireImage => {
      setAttributes({
        requireImage
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Require First Image",
    checked: attributes.requireFirstImage,
    onChange: requireFirstImage => {
      setAttributes({
        requireFirstImage
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_3__["ApiRenderBlock"], {
    attributes: queryAttrs,
    blockName: "wsuwp/news"
  }, newsPlaceholder)));
};

const CardPlaceholder = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-image-frame  wsu-image-frame--fixed-ratio"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")));
};

const IndexPlaceholder = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-image-frame  wsu-image-frame--fixed-ratio"
  }));
};

const ListPlaceholder = props => {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal wsu-card--small"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-card__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-news/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-news/editor/save.js ***!
  \******************************************/
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

/***/ "./blocks/wsuwp-news/editor/variationCard.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-news/editor/variationCard.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.blocks.registerBlockVariation('wsuwp/news', {
  name: 'news-card',
  title: 'News Card',
  attributes: {
    type: 'card'
  }
});

/***/ }),

/***/ "./blocks/wsuwp-note/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-note/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-note/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-note/editor/save.js");
/**
 *
 * WordPress Dependencies
 *
 */

const {
  registerBlockType
} = wp.blocks;


registerBlockType("wsuwp/note", {
  apiVersion: 2,
  title: "Note",
  category: "design",
  icon: "admin-post",
  attributes: {
    title: {
      type: "string",
      default: ""
    },
    icon: {
      type: "string",
      default: ""
    },
    titleTag: {
      type: "string",
      default: "div"
    },
    showTitle: {
      type: "boolean",
      default: true
    },
    useAsideTag: {
      type: "boolean",
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-note/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-note/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
  RichText
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl,
  SelectControl,
  BaseControl,
  PanelBody,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: "wsu-note",
    style: {}
  });
  const borderColors = [{
    name: "crimson",
    color: "#A60F2D"
  }, {
    name: "crimson-light",
    color: "#CA1237"
  }, {
    name: "autumn",
    color: "#FF6727"
  }, {
    name: "goldfinch",
    color: "#F3E700"
  }, {
    name: "vineyard",
    color: "#AADC24"
  }, {
    name: "pacificsky",
    color: "#5BC3F5"
  }, {
    name: "midnight",
    color: "#002D61"
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["FontIconPickerControl"], {
    label: "Icon",
    help: "",
    value: attributes.icon,
    onChange: val => setAttributes({
      icon: val
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Note Title",
    value: attributes.title ? attributes.title : "",
    onChange: title => setAttributes({
      title
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Title Tag",
    value: attributes.titleTag ? attributes.titleTag : "div",
    options: [{
      label: "Div",
      value: "div"
    }, {
      label: "H2",
      value: "h2"
    }, {
      label: "H3",
      value: "h3"
    }, {
      label: "H4",
      value: "h4"
    }, {
      label: "H5",
      value: "h5"
    }, {
      label: "H6",
      value: "h6"
    }],
    onChange: tag => setAttributes({
      titleTag: tag
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Use HTML <aside> tag",
    help: "Wraps the note in an aside tag instead of a div.",
    checked: attributes.useAsideTag,
    onChange: useAsideTag => {
      setAttributes({
        useAsideTag
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Show Title",
    checked: attributes.showTitle,
    onChange: showTitle => {
      setAttributes({
        showTitle
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Font Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    defaultChecked: "default",
    onChange: val => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassName"])(attributes, setAttributes, "wsu-note--size-", val),
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["getBlockClassNameValue"])(attributes, "wsu-note--size-")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "default"
  }, "Default"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Radio, {
    value: "small"
  }, "Small"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#A60F2D",
    prefix: "wsu-note--border-"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, attributes.icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
    className: `wsu-note__icon wsu-icon wsu-i-${attributes.icon}`
  }), attributes.showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    className: "wsu-note__title",
    placeholder: "Note Title",
    multiline: false,
    allowedFormats: [],
    onChange: title => setAttributes({
      title: title
    }),
    value: attributes.title ? attributes.title : ""
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-note/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-note/editor/save.js ***!
  \******************************************/
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

/***/ "./blocks/wsuwp-outline-header/editor/block.js":
/*!*****************************************************!*\
  !*** ./blocks/wsuwp-outline-header/editor/block.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-outline-header/editor/edit.js");


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

registerBlockType("wsuwp/outline-header", {
  title: "(Experimental) Outline Header",
  apiVersion: 2,
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
    before: {
      type: "string",
      default: ""
    },
    outline: {
      type: "string",
      default: ""
    },
    after: {
      type: "string",
      default: ""
    },
    tag: {
      type: "h2",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-outline-header/editor/edit.js":
/*!****************************************************!*\
  !*** ./blocks/wsuwp-outline-header/editor/edit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");

const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl,
  SelectControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-decorator',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  const decoratorStyles = [{
    label: 'Triangle: Crimson Right',
    value: 'triangle-crimson-right'
  }, {
    label: 'Triangle: Crimson Left',
    value: 'triangle-crimson-left'
  }, {
    label: 'Triangle: Gray Right',
    value: 'triangle-gray-right'
  }, {
    label: 'Triangle: Gray Left',
    value: 'triangle-gray-left'
  }, {
    label: 'Block: Gray',
    value: 'block-gray'
  }, {
    label: 'Block: Gray Dark',
    value: 'block-gray-dark'
  }, {
    label: 'Block: Crimson',
    value: 'block-crimson'
  }, {
    label: 'Block: Crimson Light',
    value: 'block-crimson-light'
  }, {
    label: 'None',
    value: ''
  }];

  const getDecoratorName = () => {
    let value = Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__["getBlockClassNameValue"])(attributes, 'wsu-decorator--style-', '');
    let name = 'None';
    decoratorStyles.forEach(style => {
      if (style.value === value) {
        name = style.label;
      }
    });
    return name;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Before Outline",
    value: attributes.before,
    onChange: before => setAttributes({
      before
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Outline",
    value: attributes.outline,
    onChange: outline => setAttributes({
      outline
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "After",
    value: attributes.after,
    onChange: after => setAttributes({
      after
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Tag",
    value: attributes.tag,
    onChange: tag => setAttributes({
      tag
    })
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", blockProps, attributes.before, " ", attributes.outline, " ", attributes.after));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-pagetitle/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-pagetitle/editor/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-pagetitle/editor/edit.js");


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

registerBlockType("wsuwp/pagetitle", {
  title: "Page Title",
  apiVersion: 2,
  category: "design",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M9.66955 8.60874C8.46034 8.60874 7.38339 8.98662 6.58984 9.72348V5H3V19.0193H6.58984V14.0691C6.58984 12.3686 7.47786 11.6507 8.63039 11.6507C9.66955 11.6507 10.3119 12.2742 10.3119 13.7479V19.0193H13.9018V13.1622C13.9018 9.988 12.0691 8.60874 9.66955 8.60874Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M14.8028 5.79354V8.68431H17.259V19.0193H21V5.79354H14.8028Z"
  })),
  attributes: {
    title: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-pagetitle/editor/edit.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-pagetitle/editor/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  useBlockProps,
  RichText
} = wp.blockEditor;
const {
  select
} = wp.data;
const {
  PostTitle
} = wp.editor;

const Edit = ({
  className,
  isSelected,
  attributes,
  setAttributes
}) => {
  const title = attributes.title ? attributes.title : select("core/editor").getEditedPostAttribute('title');
  const blockProps = useBlockProps({
    className: 'wsu-article-header',
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "wsu-article-header__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "wsu-article-header__title-input",
    tagName: "span" // The tag here is the element output and editable in the admin
    ,
    value: attributes.title // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: title => setAttributes({
      title
    }) // Store updated content as a block attribute
    ,
    placeholder: title // Display this text before any content has been added by the user

  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-people-list/editor/block.js":
/*!**************************************************!*\
  !*** ./blocks/wsuwp-people-list/editor/block.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-people-list/editor/edit.js");
const {
  registerBlockType
} = wp.blocks;

registerBlockType("wsuwp/people-list", {
  title: "People List",
  icon: "groups",
  category: "common",
  attributes: {
    count: {
      type: "string",
      default: "10"
    },
    page: {
      type: "string",
      default: "1"
    },
    nid: {
      type: "string",
      default: ""
    },
    classification: {
      type: "array",
      default: []
    },
    university_category: {
      type: "array",
      default: []
    },
    university_location: {
      type: "array",
      default: []
    },
    university_organization: {
      type: "array",
      default: []
    },
    university_tag: {
      type: "array",
      default: []
    },
    query_logic: {
      type: "string",
      default: 'IN'
    },
    profile_order: {
      type: "string",
      default: ""
    },
    display_fields: {
      type: "array",
      default: ["photo", "name", "title", "office", "email"]
    },
    website_link_text: {
      type: "string",
      default: "Website"
    },
    profile_link: {
      type: "string",
      default: ""
    },
    columns: {
      type: "integer",
      default: 3
    },
    headingTag: {
      type: "string",
      default: "h2"
    },
    photo_size: {
      type: "string",
      default: "medium"
    },
    filters: {
      type: "array",
      default: []
    },
    only_show_selected_term_values: {
      type: "boolean",
      default: false
    },
    include_term_values: {
      type: "array",
      default: []
    },
    exclude_term_values: {
      type: "array",
      default: []
    },
    category_filter_label: {
      type: "string",
      default: ""
    },
    category_filter_terms: {
      type: "array",
      default: []
    },
    classification_filter_label: {
      type: "string",
      default: ""
    },
    classification_filter_terms: {
      type: "array",
      default: []
    },
    location_filter_label: {
      type: "string",
      default: ""
    },
    location_filter_terms: {
      type: "array",
      default: []
    },
    organization_filter_label: {
      type: "string",
      default: ""
    },
    organization_filter_terms: {
      type: "array",
      default: []
    },
    tag_filter_label: {
      type: "string",
      default: ""
    },
    tag_filter_terms: {
      type: "array",
      default: []
    },
    search_filter_label: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function () {
    return null;
  }
});

/***/ }),

/***/ "./blocks/wsuwp-people-list/editor/edit-advanced.js":
/*!**********************************************************!*\
  !*** ./blocks/wsuwp-people-list/editor/edit-advanced.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  TextControl
} = wp.components;
const peopleListAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && props.name == 'wsuwp/people-list' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Profile Page Link",
      value: attributes.profile_link ? attributes.profile_link : '',
      onChange: profile_link => setAttributes({
        profile_link
      })
    })));
  };
}, 'peopleListAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp/people-list-advanced-controls', peopleListAdvancedControls);

/***/ }),

/***/ "./blocks/wsuwp-people-list/editor/edit.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-people-list/editor/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _term_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term-selector */ "./blocks/wsuwp-people-list/editor/term-selector.js");

const {
  __
} = wp.i18n;
const {
  useBlockProps,
  InspectorControls
} = wp.blockEditor;
const {
  TextControl,
  PanelBody,
  PanelRow,
  BaseControl,
  CheckboxControl,
  RangeControl,
  ToggleControl,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup
} = wp.components;



const apiEndpoint = window.location.hostname.includes(".local") ? "http://wsuwp.local/wp-json/peopleapi/v1/people?" : "https://people.wsu.edu/wp-json/peopleapi/v1/people?"; // FIXME: Find a way to set via environment config

const queryAttributes = ["count", "page", "nid", "classification", "university_category", "university_location", "university_organization", "university_tag", "photo_size", "profile_order", "query_logic"];
const filterOptions = ["classification", "organization", "location", "category", "tag", "search"];
const displayOptions = ["photo", "name", "title", "office", "email", "degree", "address", "phone", "website"];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [profiles, setProfiles] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const debouncedAttributes = useValueDebounce(attributes, 1000);

  function handleCheckboxListChange(listKey, option, value) {
    let selectedItemList = attributes[listKey].slice();

    if (value) {
      if (selectedItemList.indexOf(option) === -1) {
        selectedItemList.push(option);
      }
    } else {
      selectedItemList = selectedItemList.filter(v => v !== option);
    }

    setAttributes({
      [listKey]: selectedItemList
    });
  }

  function getQueryAttributeSlugs(terms) {
    if (terms.length > 0) {
      return terms.map(t => t.slug).join(",");
    }

    return "";
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function loadProfiles() {
      setLoading(true); // build url params based on attributes

      const params = queryAttributes.reduce(function (acc, curr, idx) {
        if (attributes[curr]) {
          const val = Array.isArray(attributes[curr]) ? getQueryAttributeSlugs(attributes[curr]) : attributes[curr];
          acc.push(curr.replace("_", "-") + "=" + val);
        }

        return acc;
      }, []).join("&"); // make request

      const response = await fetch(apiEndpoint + params);

      if (!response.ok) {
        setLoading(false);
        return;
      } // update state


      const profilesJson = await response.json();
      setProfiles(JSON.parse(profilesJson));
      setLoading(false);
    }

    loadProfiles();
  }, queryAttributes.map(k => debouncedAttributes[k])); // only run on init and when query attributes are changed

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", useBlockProps(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "People Directory Settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Number of Results",
    help: "Number of results per page. 'All' returns all profiles. Defaults to 10.",
    value: attributes.count,
    onChange: newval => setAttributes({
      count: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Network IDs",
    help: "Comma delimited list of people network ids",
    placeholder: "butch.cougar",
    value: attributes.nid,
    onChange: newval => setAttributes({
      nid: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Classification",
    help: "Display people by searching and selecting a classification",
    taxonomy: "classification",
    value: attributes.classification,
    onChange: newval => setAttributes({
      classification: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Category",
    help: "Display people by searching and selecting a university category",
    taxonomy: "wsuwp_university_category",
    value: attributes.university_category,
    onChange: newval => setAttributes({
      university_category: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Location",
    help: "Display people by searching and selecting a university location",
    taxonomy: "wsuwp_university_location",
    value: attributes.university_location,
    onChange: newval => setAttributes({
      university_location: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Organization",
    help: "Display people by searching and selecting a university organization",
    taxonomy: "wsuwp_university_org",
    value: attributes.university_organization,
    onChange: newval => setAttributes({
      university_organization: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Tag",
    help: "Display people by searching and selecting a university tag",
    taxonomy: "post_tag",
    value: attributes.university_tag,
    onChange: newval => setAttributes({
      university_tag: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Profile Order",
    help: "Comma delimited list of people network ids to sort them at the top of the list",
    placeholder: "butch.cougar",
    value: attributes.profile_order,
    onChange: newval => setAttributes({
      profile_order: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Require all terms",
    checked: attributes.query_logic === 'AND' ? true : false,
    onChange: query_logic => {
      let logic = query_logic ? 'AND' : 'IN';
      setAttributes({
        query_logic: logic
      });
    },
    help: "Only profiles matching all selected terms will display"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "People Display Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-people-list-block__checkboxlist",
    label: "Display Fields",
    help: "Fields to display for each profile."
  }, displayOptions.map((o, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    key: o,
    className: "wsu-people-list-block__checkboxlist-item",
    label: o,
    checked: attributes.display_fields.indexOf(o) > -1,
    onChange: val => handleCheckboxListChange("display_fields", o, val)
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    label: "Number of Columns",
    help: "Number of columns to display per row.",
    value: attributes.columns,
    onChange: newval => setAttributes({
      columns: newval
    }),
    min: 1,
    max: 4
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Website Link Text",
    help: "Link text to display for the website field when it is being output. Defaults to Website.",
    placeholder: "Website",
    value: attributes.website_link_text,
    onChange: newval => setAttributes({
      website_link_text: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["HeadingTagControl"], props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Filter Display Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    className: "wsu-people-list-block__checkboxlist",
    label: "Filters",
    help: "Filtering options to display on the page."
  }, filterOptions.map((o, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    key: o,
    className: "wsu-people-list-block__checkboxlist-item",
    label: o,
    checked: attributes.filters.indexOf(o) > -1,
    onChange: val => handleCheckboxListChange("filters", o, val)
  })))), attributes.filters.includes('category') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Category Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Category'",
    placeholder: "Filter by Category",
    value: attributes.category_filter_label,
    onChange: newval => setAttributes({
      category_filter_label: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Category Filter Terms",
    help: "Search and select terms to include in filters",
    taxonomy: "wsuwp_university_category,category",
    value: attributes.category_filter_terms,
    onChange: newval => setAttributes({
      category_filter_terms: newval
    })
  }))), attributes.filters.includes('classification') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Classification Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Classification'",
    placeholder: "Filter by Classification",
    value: attributes.classification_filter_label,
    onChange: newval => setAttributes({
      classification_filter_label: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Classification Filter Terms",
    help: "Search and select term values to include in filters",
    taxonomy: "classification",
    value: attributes.classification_filter_terms,
    onChange: newval => setAttributes({
      classification_filter_terms: newval
    })
  }))), attributes.filters.includes('location') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Location Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Location'",
    placeholder: "Filter by Location",
    value: attributes.location_filter_label,
    onChange: newval => setAttributes({
      location_filter_label: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Location Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "wsuwp_university_location",
    value: attributes.location_filter_terms,
    onChange: newval => setAttributes({
      location_filter_terms: newval
    })
  }))), attributes.filters.includes('organization') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Organization Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Organization'",
    placeholder: "Filter by Organization",
    value: attributes.organization_filter_label,
    onChange: newval => setAttributes({
      organization_filter_label: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Organization Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "wsuwp_university_org",
    value: attributes.organization_filter_terms,
    onChange: newval => setAttributes({
      organization_filter_terms: newval
    })
  }))), attributes.filters.includes('tag') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Tag Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Tag'",
    placeholder: "Filter by Tag",
    value: attributes.tag_filter_label,
    onChange: newval => setAttributes({
      tag_filter_label: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Tag Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "post_tag",
    value: attributes.tag_filter_terms,
    onChange: newval => setAttributes({
      tag_filter_terms: newval
    })
  }))), attributes.filters.includes('search') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Search Filter Label",
    help: "Label to display for filter. Defaults to 'Type to search'",
    placeholder: "Type to search",
    value: attributes.search_filter_label,
    onChange: newval => setAttributes({
      search_filter_label: newval
    })
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "(Legacy) Exclude Terms from Filters",
    help: "Search and select terms to exclude from filters",
    taxonomy: "classification,wsuwp_university_category,wsuwp_university_location,wsuwp_university_org,post_tag,category",
    value: attributes.exclude_term_values,
    onChange: newval => setAttributes({
      exclude_term_values: newval
    })
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list"
  }, attributes.filters.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list__filters"
  }, attributes.filters.filter(f => f !== "search").map((filter, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: "filter-" + index,
    className: "wsu-gutenberg-people-list__filter"
  }, attributes[filter + "_filter_label"] || "Filter by " + filter, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-gutenberg-people-list__filter-icon dashicons dashicons-arrow-down-alt2"
  }))), attributes.filters.includes("search") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: "filter-search",
    className: "wsu-gutenberg-people-list__filter"
  }, attributes["search_filter_label"], Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-gutenberg-people-list__filter-icon dashicons dashicons-search"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `wsu-gutenberg-people-list__profiles wsu-gutenberg-people-list__profiles--per-row-${attributes.columns}`
  }, [...Array(attributes.columns)].map((e, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list__profile"
  }, attributes.display_fields.includes("photo") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list__profile-image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list__profile-content"
  }, attributes.display_fields.includes("name") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "wsu-gutenberg-people-list__profile-name"
  }, "Person Name"), attributes.display_fields.includes("title") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wsu-gutenberg-people-list__profile-title"
  }, "Position Title"), attributes.display_fields.includes("email") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "dashicons-before dashicons-email-alt wsu-gutenberg-people-list__profile-icon-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "butch.cougar@wsu.edu")), attributes.display_fields.includes("office") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "dashicons-before dashicons-location wsu-gutenberg-people-list__profile-icon-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Office Location")), attributes.display_fields.includes("phone") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "dashicons-before dashicons-phone wsu-gutenberg-people-list__profile-icon-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "555-555-5555")), attributes.display_fields.includes("website") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "dashicons-before dashicons-admin-links wsu-gutenberg-people-list__profile-icon-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, attributes.website_link_text)))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "wsu-gutenberg-people-list__names-label"
  }, "Profiles to be displayed:"), loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading..."), !loading && profiles.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", {
    className: "wsu-gutenberg-people-list__names"
  }, profiles.map((p, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    key: p.nid,
    className: "wsu-gutenberg-people-list__name",
    dangerouslySetInnerHTML: {
      __html: `${p.name}<br/>(${p.nid})`
    }
  }))))));
} // useDebounce Hook - https://usehooks.com/useDebounce/

function useValueDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

/***/ }),

/***/ "./blocks/wsuwp-people-list/editor/term-selector.js":
/*!**********************************************************!*\
  !*** ./blocks/wsuwp-people-list/editor/term-selector.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





const {
  ComboboxControl,
  Spinner
} = wp.components;
const apiEndpoint = window.location.hostname.includes(".local") ? "http://wsuwp.local/wp-json/peopleapi/v1/terms?" : "https://people.wsu.edu/wp-json/peopleapi/v1/terms?"; // FIXME: Find a way to set via environment config

let abortController = null;

const TermSelector = function (props) {
  const [isLoading, setIsLoading] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [availableTerms, setAvailableTerms] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value); // keep track of all terms for mapping later

  const [termSuggestions, setTermSuggestions] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedTerms, setSelectedTerms] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value);
  const handleInputChange = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["useDebounce"])(updateSuggestions, 250);

  async function updateSuggestions(input) {
    var _abortController, _abortController2;

    if (input.length < 2) {
      return;
    }

    setIsLoading(true); // cancel existing requests and set up new abort controller

    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController(); // make request to terms api

    const params = `taxonomy=${props.taxonomy}&s=${input}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      url: apiEndpoint + params,
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    }); // process results

    const results = JSON.parse(response);
    const suggestions = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["differenceBy"])(results, selectedTerms, "term_id");

    if (suggestions.length > 0) {
      setTermSuggestions(suggestions.map(v => {
        return {
          label: v.name,
          value: v.term_id
        };
      }));
      setAvailableTerms([...availableTerms, ...Object(lodash__WEBPACK_IMPORTED_MODULE_3__["differenceBy"])(results, availableTerms, "term_id")]);
    } else {
      setTermSuggestions([]);
    }

    setIsLoading(false);
  }

  function selectTerm(termId) {
    const term = availableTerms.find(t => t.term_id === termId);
    const updatedSelectedTerms = [...selectedTerms, term];
    updateSelectedTerms(updatedSelectedTerms);
    setTermSuggestions([]);
  }

  function removeTerm(term) {
    const updatedSelectedTerms = selectedTerms.filter(t => t.term_id !== term.term_id);
    updateSelectedTerms(updatedSelectedTerms);
  }

  function updateSelectedTerms(terms) {
    setSelectedTerms(terms);
    props.onChange(terms);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-gutenberg-people-list-term-selector"
  }, isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "wsu-gutenberg-people-list-term-selector__selected_terms"
  }, selectedTerms.map((term, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: term.term_id,
      className: "wsu-gutenberg-people-list-term-selector__selected_term"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      class: "components-button wsu-gutenberg-people-list-term-selector__remove-btn has-text has-icon",
      onClick: () => removeTerm(term)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "wsu-gutenberg-people-list-term-selector__remove-btn-text"
    }, term.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "dashicon dashicons dashicons-no-alt wsu-gutenberg-people-list-term-selector__remove-btn-icon"
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TermSelector);

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
  apiVersion: 2,
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.blockEditor;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  FocalPointPicker,
  BaseControl
} = wp.components;


 //import EditOptions from './edit-options';
//import { SpacingSelector, DecoratorControl,
//SpacingPanelVertical } from '../../../block-controls';

const layoutOptions = [{
  label: 'Single',
  slug: 'single',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z",
    fill: "black"
  }))
}, {
  label: 'Halves',
  slug: 'halves',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z",
    fill: "black"
  }))
}, {
  label: 'Thirds',
  slug: 'thirds',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  }))
}, {
  label: 'Quarters',
  slug: 'quarters',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Right',
  slug: 'sidebar-right',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Left',
  slug: 'sidebar-left',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebars',
  slug: 'sidebars',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z",
    fill: "black"
  }))
}];
const layoutTemplates = {
  'single': [['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'halves': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'thirds': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'quarters': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'sidebar-right': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'sidebar-left': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]],
  'sidebars': [['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]], ['wsuwp/column', {}, [['core/paragraph', {}, []]]]]
};
const DEFAULT_SPACING = {
  spaceBefore: 'none',
  spaceAfter: 'none',
  spaceTop: 'none',
  spaceBottom: 'none'
};

const getColumnsTemplate = template => {
  return template in layoutTemplates ? layoutTemplates[template] : [];
};

const Edit = props => {
  let {
    className,
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: attributes.layout ? 'wsu-row wsu-row--' + attributes.layout : 'wsu-gutenberg-format-selector',
    style: {}
  });
  const [spacingDefaults, setSpacingDefaults] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(DEFAULT_SPACING);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.attributes.className && props.attributes.className.includes('wsu-color-background--')) {
      setSpacingDefaults({
        spaceBefore: 'none',
        spaceAfter: 'xmedium',
        spaceTop: 'xmedium',
        spaceBottom: 'none'
      });
    } else {
      setSpacingDefaults(DEFAULT_SPACING);
    }
  }, [props.attributes.className]);

  if (!attributes.layout) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["FormatSelector"], {
      options: layoutOptions,
      onSelect: layout => {
        setAttributes({
          layout
        });
      },
      title: "Select Layout"
    }));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      title: "Color Settings",
      colorSettings: [{
        label: 'Background Color',
        prefix: 'wsu-color-background--',
        colors: [{
          name: 'White',
          color: '#ffffff',
          className: 'white'
        }, {
          name: 'Gray 0',
          color: '#f7f7f7',
          className: 'gray-0'
        }, {
          name: 'Gray 5',
          color: '#f2f2f2',
          className: 'gray-5'
        }, {
          name: 'Gray 10',
          color: '#e6e6e6',
          className: 'gray-10'
        }, {
          name: 'Gray 85',
          color: '#262626',
          className: 'gray-85'
        }, {
          name: 'Gray 95',
          color: '#080808',
          className: 'gray-95'
        }]
      }]
    }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      title: "Space Settings",
      spaceSettings: [{
        label: 'Margin (Outside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-before--',
          default: spacingDefaults['spaceBefore']
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-after--',
          default: spacingDefaults['spaceAfter']
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-margin-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-margin-right--',
          default: 'default'
        }]
      }, {
        label: 'Padding (Inside Spacing)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-top--',
          default: spacingDefaults['spaceTop']
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-bottom--',
          default: spacingDefaults['spaceBottom']
        }, {
          label: 'Left',
          prefix: 'wsu-spacing-padding-left--',
          default: 'default'
        }, {
          label: 'Right',
          prefix: 'wsu-spacing-padding-right--',
          default: 'default'
        }]
      }]
    }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: attributes.layout in layoutTemplates ? layoutTemplates[attributes.layout] : [],
      templateLock: "insert",
      allowedBlocks: ['wsuwp/column']
    })));
  }
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

/* harmony default export */ __webpack_exports__["default"] = (Edit);

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

/***/ "./blocks/wsuwp-section/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/wsuwp-section/editor/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-section/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-section/editor/save.js");


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


registerBlockType("wsuwp/section", {
  title: "Section",
  apiVersion: 2,
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
  attributes: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-section/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-section/editor/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-callout',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Full Width Background",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Outside Spacing (Margin)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'xmedium'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    templateLock: false
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-section/editor/save.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-section/editor/save.js ***!
  \*********************************************/
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

const sectionSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-stat/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-stat/editor/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-stat/editor/edit.js");
const {
  registerBlockType
} = wp.blocks;

registerBlockType("wsuwp/stat", {
  title: "Stat",
  icon: "money-alt",
  apiVersion: 2,
  category: "text",
  attributes: {
    stat: {
      type: "string",
      default: ""
    },
    caption: {
      type: "string",
      default: ""
    },
    icon: {
      type: "string",
      default: ""
    },
    unit: {
      type: "string",
      default: ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function () {
    return null;
  }
});

/***/ }),

/***/ "./blocks/wsuwp-stat/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-stat/editor/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _style_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-options */ "./blocks/wsuwp-stat/editor/style-options.js");









let statStyles = [{
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_style_options__WEBPACK_IMPORTED_MODULE_7__["Default"], null),
  label: "Default",
  value: ""
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_style_options__WEBPACK_IMPORTED_MODULE_7__["CircleUnit"], null),
  label: "Unit",
  value: "unit"
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_style_options__WEBPACK_IMPORTED_MODULE_7__["CircleBottom"], null),
  label: "Bottom",
  value: "bottom"
}, {
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_style_options__WEBPACK_IMPORTED_MODULE_7__["CircleTop"], null),
  label: "Top",
  value: "top"
}];

const edit = props => {
  const {
    className,
    attributes,
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: "wsu-stat",
    role: "statistic",
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "General",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Value",
    help: "",
    placeholder: "565",
    value: attributes.stat,
    onChange: val => setAttributes({
      stat: val
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Caption",
    help: "",
    placeholder: "Study Abroad Programs",
    value: attributes.caption,
    onChange: val => setAttributes({
      caption: val
    })
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["hasBlockClassName"])(attributes, "wsu-stat--style-circles-unit") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Unit",
    help: "",
    placeholder: "Million",
    value: attributes.unit,
    onChange: val => setAttributes({
      unit: val
    })
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["hasBlockClassName"])(attributes, "wsu-stat--style-circles-") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_5__["FontIconPickerControl"], {
    label: "Icon",
    help: "",
    value: attributes.icon,
    onChange: val => setAttributes({
      icon: val
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelStyleOptions"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    styles: statStyles,
    prefix: "wsu-stat--style-circles-"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    className: "wsu-settings__base-control",
    help: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"].VisualLabel, {
    className: "wsu-settings__label"
  }, "Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalRadioGroup"], {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["setClassName"])(attributes.className, "wsu-stat--size-", val, setAttributes, "className"),
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["getBlockClassNameValue"])(attributes.className, "wsu-stat--size-"),
    defaultChecked: ""
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalRadio"], {
    value: "xsmall"
  }, "XSmall"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalRadio"], {
    value: "small"
  }, "Small"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalRadio"], {
    value: ""
  }, "Default"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: "Display inline",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["hasBlockClassName"])(attributes, "wsu-display--inline-block"),
    onChange: value => Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["setBlockClassNameBool"])(attributes, setAttributes, "wsu-display--inline-block", value),
    help: ""
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    className: "wsu-stat__value",
    allowedFormats: [],
    withoutInteractiveFormatting: true,
    disableLineBreaks: true,
    multiline: false,
    placeholder: "Value",
    tagName: "span",
    onChange: val => setAttributes({
      stat: val
    }),
    value: attributes.stat
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["hasBlockClassName"])(attributes, "wsu-stat--style-circles-unit") && attributes.unit && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    className: "wsu-stat__unit",
    allowedFormats: [],
    withoutInteractiveFormatting: true,
    disableLineBreaks: true,
    multiline: false,
    placeholder: "Unit",
    tagName: "span",
    onChange: val => setAttributes({
      unit: val
    }),
    value: attributes.unit
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    className: "wsu-stat__caption",
    allowedFormats: [],
    withoutInteractiveFormatting: true,
    disableLineBreaks: true,
    multiline: false,
    placeholder: "Caption",
    tagName: "span",
    onChange: val => setAttributes({
      caption: val
    }),
    value: attributes.caption
  }), Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__["hasBlockClassName"])(attributes, "wsu-stat--style-circles-") && attributes.icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
    className: `wsu-stat__icon wsu-i-${attributes.icon}`
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-stat/editor/style-options.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-stat/editor/style-options.js ***!
  \***************************************************/
/*! exports provided: Default, CircleTop, CircleUnit, CircleBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default", function() { return Default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleTop", function() { return CircleTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleUnit", function() { return CircleUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleBottom", function() { return CircleBottom; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function Default() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 318 80",
    style: {
      margin: "0.5em"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#CA1237",
    d: "M0 0h239.94v47H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#4D4D4D",
    d: "M0 64h318v16H0z"
  }));
}
function CircleTop() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 331 257",
    style: {
      margin: "0.5em"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("mask", {
    id: "a",
    width: 118,
    height: 115,
    x: 172,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#000",
    stroke: "#000",
    d: "M242.19 112.963c-64.4 8-73-45.334-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    stroke: "#A60F2D",
    strokeWidth: 2,
    mask: "url(#a)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m186.482 98.256 83-83M224.482 128.256l83-83M211.482 118.256l83-83M200.482 106.256l83-83M174.482 87.256l83-83M161.482 77.256l83-83M149.482 67.256l83-83"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 161,
    cy: 142,
    r: 115,
    fill: "#D9D9D9"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#4D4D4D",
    d: "M117 195h201v18H117zM117 223h148v18H117z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#CA1237",
    d: "M0 67h331v64H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 75.5,
    cy: 211.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fff",
    d: "m76 199 2.919 8.983h9.445l-7.642 5.551 2.92 8.983L76 216.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L76 199Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#C4C4C4",
    d: "M27 165h188v14H27z"
  }));
}
function CircleUnit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 322 250",
    style: {
      margin: "0.5em"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("mask", {
    id: "a",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 176,
    y: 3,
    width: 146,
    height: 142
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M263.062 143.266c-80.104 9.951-90.802-56.388-84.582-90.18L225.124 5.82c33.17-6.427 98.763.622 95.777 80.228l-57.839 57.218Z",
    fill: "#000",
    stroke: "#000"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    mask: "url(#a)",
    stroke: "#A60F2D",
    strokeWidth: 2
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m193.943 125.145 103.24-103.24M241.209 162.46l74-74m-90.17 61.561 103.24-103.24m-116.922 88.314 103.24-103.24m-135.581 79.606L282.257 8.222M162.846 99.024l103.24-103.24M147.92 86.585l103.24-103.24"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 177,
    cy: 130,
    r: 115,
    fill: "#D9D9D9"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#CA1237",
    d: "M16 55h189v64H16zm16 93h80v18H32z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 132.5,
    cy: 20.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m133 8 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L133 25.966l-7.641 5.551 2.918-8.983-7.641-5.551h9.445L133 8Z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#C4C4C4",
    d: "M0 187h135v14H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#4D4D4D",
    d: "M159 148h115v18H159zm0 28h102v18H159zm0 28h111v18H159zm0 28h91v18h-91z"
  }));
}
function CircleBottom() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 311 230",
    style: {
      margin: "0.5em"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 152,
    cy: 115,
    r: 115,
    fill: "#D9D9D9"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#4D4D4D",
    d: "M102 29h201v18H102zm0 28h148v18H102z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#CA1237",
    d: "M138 139h173v64H138z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: 47.5,
    cy: 70.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m48 58 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L48 75.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L48 58Z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#C4C4C4",
    d: "M128 100h161v14H128z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("mask", {
    id: "a",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 109,
    width: 118,
    height: 115
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M70.19 221.963c-64.4 8-73-45.333-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z",
    fill: "#000",
    stroke: "#000"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    mask: "url(#a)",
    stroke: "#A60F2D",
    strokeWidth: 2
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m16.293 206.293 83-83m-45 113 83-83m-96 73 83-83m-94 71 83-83m-109 64 83-83m-96 73 83-83m-95 73 83-83"
  })));
}

/***/ }),

/***/ "./blocks/wsuwp-sticky-nav/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-sticky-nav/editor/block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/wsuwp-sticky-nav/editor/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/wsuwp-sticky-nav/editor/save.js");


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


registerBlockType("wsuwp/sticky-nav", {
  title: "Sticky Navigation",
  apiVersion: 2,
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
  attributes: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-sticky-nav/editor/edit.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-sticky-nav/editor/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


const {
  __
} = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  ToggleControl
} = wp.components;




const Edit = props => {
  let {
    attributes,
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    className: 'wsu-sticky-nav',
    style: {}
  });
  const backgroundColors = [{
    name: 'gray-5',
    color: '#f2f2f2'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'gray-85',
    color: '#262626'
  }];
  const borderColors = [{
    name: 'default',
    color: '#e6e6e6'
  }, {
    name: 'white',
    color: '#ffffff'
  }, {
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'autumn',
    color: '#FF6727'
  }, {
    name: 'goldfinch',
    color: '#F3E700'
  }, {
    name: 'vineyard',
    color: '#AADC24'
  }, {
    name: 'pacificsky',
    color: '#5BC3F5'
  }, {
    name: 'midnight',
    color: '#002D61'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelDisplayOptions"], {
    isOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: "Full Width Background",
    checked: Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["hasBlockClassName"])(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      Object(_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__["setBlockClassNameBool"])(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__["PanelColorOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["ColorClassControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__["SpacingClassNameSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    title: "Space Settings",
    spaceSettings: [{
      label: 'Outside Spacing (Margin)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-before--',
        default: 'none'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-after--',
        default: 'xmedium'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-margin-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-margin-right--',
        default: 'default'
      }]
    }, {
      label: 'Padding (Inside Spacing)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: 'default'
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: 'default'
      }, {
        label: 'Left',
        prefix: 'wsu-spacing-padding-left--',
        default: 'default'
      }, {
        label: 'Right',
        prefix: 'wsu-spacing-padding-right--',
        default: 'default'
      }]
    }]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    template: [['core/list', {
      className: 'wsu-anchor-menu'
    }]],
    templateLock: 'all'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-sticky-nav/editor/save.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-sticky-nav/editor/save.js ***!
  \************************************************/
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

const sectionSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg-editor.js.map