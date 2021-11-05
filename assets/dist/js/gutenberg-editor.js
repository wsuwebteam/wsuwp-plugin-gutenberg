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
/* harmony import */ var _blocks_wsuwp_accordion_editor_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/wsuwp-accordion/editor/block */ "./blocks/wsuwp-accordion/editor/block.js");
/* harmony import */ var _blocks_wsuwp_callout_editor_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/wsuwp-callout/editor/block */ "./blocks/wsuwp-callout/editor/block.js");
/* harmony import */ var _blocks_wsuwp_column_editor_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/wsuwp-column/editor/block */ "./blocks/wsuwp-column/editor/block.js");
/* harmony import */ var _blocks_wsuwp_hero_editor_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/wsuwp-hero/editor/block */ "./blocks/wsuwp-hero/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_editor_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/wsuwp-news/editor/block */ "./blocks/wsuwp-news/editor/block.js");
/* harmony import */ var _blocks_wsuwp_row_editor_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/wsuwp-row/editor/block */ "./blocks/wsuwp-row/editor/block.js");
/* harmony import */ var _blocks_wsuwp_pagetitle_editor_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/wsuwp-pagetitle/editor/block */ "./blocks/wsuwp-pagetitle/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_cards_editor_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/wsuwp-news-cards/editor/block */ "./blocks/wsuwp-news-cards/editor/block.js");
/* harmony import */ var _blocks_wsuwp_news_cards_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/wsuwp-news-cards/editor/blockEditFilter */ "./blocks/wsuwp-news-cards/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_heading_editor_blockEditFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/core-heading/editor/blockEditFilter */ "./blocks/core-heading/editor/blockEditFilter.js");
/* harmony import */ var _blocks_core_button_blockEditFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/core-button/blockEditFilter */ "./blocks/core-button/blockEditFilter.js");
/* harmony import */ var _js_partials_editor_config_spacing_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../js/partials/editor-config/spacing-control */ "./assets/src/js/partials/editor-config/spacing-control.js");
/* harmony import */ var _js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../js/partials/editor-config/allowed-embeds */ "./assets/src/js/partials/editor-config/allowed-embeds.js");
/* harmony import */ var _js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_allowed_embeds__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../js/partials/editor-config/block-styles */ "./assets/src/js/partials/editor-config/block-styles.js");
/* harmony import */ var _js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../js/partials/editor-config/block-categories */ "./assets/src/js/partials/editor-config/block-categories.js");
/* harmony import */ var _js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_categories__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../js/partials/editor-config/block-class-name */ "./assets/src/js/partials/editor-config/block-class-name.js");
/* harmony import */ var _js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_partials_editor_config_block_class_name__WEBPACK_IMPORTED_MODULE_15__);

















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
    value = '#ffffff'
  } = props;

  const getSelectedColor = () => {
    var _attributes$className;

    let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
    let selectedColor = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__["getBlockClassName"])(classNames, prefix);
    let selectedValue = value;

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
    let selectedColor = '';
    colors.forEach((colorObj, index) => {
      if (color === colorObj.color) {
        selectedColor = colorObj.name;
      }
    });
    return selectedColor;
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

  let pickerId = 'color-picker-' + Math.floor(Math.random() * 1000000);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    id: pickerId,
    label: label
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
    colors: colors,
    value: getSelectedColor(),
    onChange: color => addColor(color),
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
  var _attributes$prefix, _attributes$label, _sizes, _attributes$className, _attributes$value;

  let {
    attributes,
    setAttributes,
    sizes
  } = props;
  let prefix = (_attributes$prefix = attributes.prefix) !== null && _attributes$prefix !== void 0 ? _attributes$prefix : 'wsu-font-size--';
  let label = (_attributes$label = attributes.label) !== null && _attributes$label !== void 0 ? _attributes$label : 'Font Size';
  sizes = (_sizes = sizes) !== null && _sizes !== void 0 ? _sizes : wsuFontSizes;
  let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  let value = (_attributes$value = attributes.value) !== null && _attributes$value !== void 0 ? _attributes$value : Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameOption"])(classNames, prefix);

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
/*! exports provided: FormatSelector, PostPicker, FeedPostsControl, PerRow, ColorClassNameSelector, SpacingClassNameSelector, TaxonomyTypeSelectControl, PostTypeSelectControl, TaxonomyTermSelectControl, CountControl, OffsetControl, HostControl, ButtonControl, HeadingControl, HeadingTagControl, TitleTagControl, FontSizeControl, ResetControl, RequireImageControl, RequireFirstImageControl, ColorClassControl */
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

/* harmony import */ var _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaxonomyTypeSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTypeSelectControl", function() { return _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostTypeSelectControl */ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTypeSelectControl", function() { return _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaxonomyTermSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTermSelectControl", function() { return _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CountControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CountControl */ "./assets/src/js/partials/block-controls/CountControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountControl", function() { return _CountControl__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _OffsetControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OffsetControl */ "./assets/src/js/partials/block-controls/OffsetControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffsetControl", function() { return _OffsetControl__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _HostControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HostControl */ "./assets/src/js/partials/block-controls/HostControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HostControl", function() { return _HostControl__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ButtonControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ButtonControl */ "./assets/src/js/partials/block-controls/ButtonControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonControl", function() { return _ButtonControl__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _HeadingControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeadingControl */ "./assets/src/js/partials/block-controls/HeadingControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingControl", function() { return _HeadingControl__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./heading-tag-control.js/HeadingTagControl */ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingTagControl", function() { return _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _TitleTagControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TitleTagControl */ "./assets/src/js/partials/block-controls/TitleTagControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleTagControl", function() { return _TitleTagControl__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _FontSizeControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FontSizeControl */ "./assets/src/js/partials/block-controls/FontSizeControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizeControl", function() { return _FontSizeControl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reset-control/ResetControl */ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetControl", function() { return _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _RequireImageControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequireImageControl */ "./assets/src/js/partials/block-controls/RequireImageControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequireImageControl", function() { return _RequireImageControl__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RequireFirstImageControl */ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequireFirstImageControl", function() { return _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ColorClassControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ColorClassControl */ "./assets/src/js/partials/block-controls/ColorClassControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassControl", function() { return _ColorClassControl__WEBPACK_IMPORTED_MODULE_20__["default"]; });























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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SpacingClassNameSelector);

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
  var _attributes$className;

  let {
    isOpen = false,
    styles = [],
    prefix,
    attributes,
    setAttributes
  } = props;
  let blockClassNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  let currentValue = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["getBlockClassNameValue"])(blockClassNames, prefix);

  const setClassNames = value => {
    let updatedClasses = Object(_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__["addBlockClassName"])(blockClassNames, prefix, value);
    setAttributes({
      className: updatedClasses
    });
  };

  const styleItem = styleObj => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      isPressed: currentValue == styleObj.value,
      onClick: () => setClassNames(styleObj.value)
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
/*! exports provided: addBlockClassName, hasBlockClassName, getBlockClassName, getBlockClassNameValue, removeBlockClassName, setBlockClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockClassName", function() { return addBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBlockClassName", function() { return hasBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockClassName", function() { return getBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockClassNameValue", function() { return getBlockClassNameValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlockClassName", function() { return removeBlockClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockClassName", function() { return setBlockClassName; });
const addBlockClassName = (className, prefix, value, remove = true) => {
  let classNames = className !== null && className !== void 0 ? className : '';
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

const hasBlockClassName = (classNames, value) => {
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

const getBlockClassNameValue = (className, prefix) => {
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

const setBlockClassName = (attributes, setAttributes, prefix, value) => {
  var _attributes$className;

  let classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
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

  setAttributes({
    className: newClasses.join(' ')
  });
};



/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockUtilities.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockUtilities.js ***!
  \******************************************************************/
/*! exports provided: getBlockClassNameOption, getBlockClassName, getBlockClassNameValue, hasBlockClassName, removeBlockClassName, setBlockClassName, addBlockClassName */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["setBlockClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBlockClassName", function() { return _blockClassName__WEBPACK_IMPORTED_MODULE_1__["addBlockClassName"]; });









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
    const unsupportedBlockTypes = ['wsuwp/row', 'wsuwp/column', 'core/button'];

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
      default: true
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
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, attributes.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
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
        name: 'Gray 75',
        color: '#404040',
        className: 'gray-75'
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
      label: 'Outside Spacing (Margin)',
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
      label: 'Inside Spacing (Padding)',
      properties: [{
        label: 'Top',
        prefix: 'wsu-spacing-top--',
        default: spacingDefaults['spaceTop']
      }, {
        label: 'Bottom',
        prefix: 'wsu-spacing-bottom--',
        default: spacingDefaults['spaceBottom']
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
    eyebrowHeading: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    caption: {
      type: 'string',
      default: ''
    },
    buttonText: {
      type: 'string',
      default: ''
    },
    photoCredit: {
      type: 'string',
      default: ''
    },
    overlay: {
      type: 'string',
      default: 'dark-left'
    },
    imageId: {
      type: 'integer',
      default: 0
    },
    imageSrc: {
      type: 'string',
      default: ''
    },
    link: {
      type: 'string',
      default: ''
    },
    imageFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    imageDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    lightOverlay: {
      type: 'boolean',
      default: false
    },
    pattern: {
      type: 'string',
      default: 'wsu-light-radial-left'
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
  BaseControl
} = wp.components;



const Edit = ({
  className,
  isSelected,
  attributes,
  setAttributes
}) => {
  var _attributes$className;

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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
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
  }, attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
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
    }) // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: "Replace Background Image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isLink: true,
      onClick: open
    }, "Open Media Library"))
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-image-frame wsu-image-frame--fill"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: attributes.imageSrc
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
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");

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








const NewsCardGeneralOptions = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelGeneralOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelDisplayOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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

  if ('feed' === attributes.source) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NewsCardGeneralOptions, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NewsCardDisplayOptions, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelFeedOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["PostTypeSelectControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["TaxonomyTypeSelectControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["TaxonomyTermSelectControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["CountControl"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelAdvancedFeedOptions"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["OffsetControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["HostControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequireImageControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__["RequireFirstImageControl"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Hide Shown Posts",
      checked: attributes.hideShownPosts,
      onChange: hideShownPosts => {
        setAttributes({
          hideShownPosts
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Use AND logic for terms",
      checked: attributes.useAndLogic,
      onChange: useAndLogic => {
        setAttributes({
          useAndLogic
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__["ApiRenderBlock"], {
      attributes: queryAttrs,
      blockName: "wsuwp/news-cards"
    }, 'feed' === attributes.source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FeedPlaceHolder, null))));
  } else if ('select' === attributes.source) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NewsCardGeneralOptions, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(NewsCardDisplayOptions, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__["PanelInsertPost"], {
      attributes: attributes,
      onChange: value => setAttributes({
        postIn: value
      }),
      postTypes: ['any'],
      placeholder: "Search posts..."
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__["ApiRenderBlock"], {
      attributes: queryAttrs,
      blockName: "wsuwp/news-cards"
    }, 'feed' === attributes.source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FeedPlaceHolder, null))));
  }
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
/* harmony import */ var _variationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variationList */ "./blocks/wsuwp-news/editor/variationList.js");
/* harmony import */ var _variationList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_variationList__WEBPACK_IMPORTED_MODULE_4__);


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

/***/ "./blocks/wsuwp-news/editor/variationList.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-news/editor/variationList.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.blocks.registerBlockVariation('wsuwp/news', {
  name: 'news-list',
  title: 'News List',
  attributes: {
    type: 'list'
  }
});

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
          name: 'Gray 75',
          color: '#404040',
          className: 'gray-75'
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
        label: 'Outside Spacing (Margin)',
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
        label: 'Inside Spacing (Padding)',
        properties: [{
          label: 'Top',
          prefix: 'wsu-spacing-top--',
          default: spacingDefaults['spaceTop']
        }, {
          label: 'Bottom',
          prefix: 'wsu-spacing-bottom--',
          default: spacingDefaults['spaceBottom']
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

/***/ })

/******/ });
//# sourceMappingURL=gutenberg-editor.js.map