/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/partials/block-components/ApiRenderBlock.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-components/ApiRenderBlock.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);



const blockResponse = {
  requestData: '',
  rendered: 'hello world'
};
const ApiRenderBlock = _ref => {
  let {
    attributes,
    blockName,
    onChange,
    children
  } = _ref;
  const [blockRendered, setBlockRendered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  blockName = blockName.replace('/', '--');
  attributes.apiRender = true;
  let requestData = JSON.stringify(attributes);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wsu-gutenberg/v1/render-block/' + blockName,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestData
    }).then(res => {
      let block = JSON.parse(res);
      setBlockRendered(block.rendered);
    });
  }, [requestData]);
  if (blockRendered) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRenderBlock": function() { return /* reexport safe */ _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiRenderBlock */ "./assets/src/js/partials/block-components/ApiRenderBlock.js");


/***/ }),

/***/ "./assets/src/js/partials/block-controls/AlignItemControl.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AlignItemControl.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");





const AlignItemControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  let buttonOptions = [{
    label: 'Align Left',
    value: 'left',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
    }))
  }, {
    label: 'Align Center',
    value: 'center',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
    }))
  }, {
    label: 'Align Right',
    value: 'right',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
    }))
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_3__.SvgButtonGroupControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onClick: value => {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-align-item--', value);
    },
    isActive: value => {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-align-item--'),
    label: "Align Element",
    buttonOptions: buttonOptions
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (AlignItemControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/AnchorControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AnchorControl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const AnchorControl = props => {
  var _attributes$id;
  let {
    attributes,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "HTML anchor",
    value: (_attributes$id = attributes.id) !== null && _attributes$id !== void 0 ? _attributes$id : '',
    onChange: id => setAttributes({
      id
    }),
    help: "Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an \u201Canchor.\u201D Then, you\u2019ll be able to link directly to this section of your page."
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (AnchorControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/BorderControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BorderControl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const BorderControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  let buttonOptions = [{
    label: 'Border Left',
    value: 'left',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "3.41",
      y1: "2.67",
      x2: "3.41",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Top',
    value: 'top',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "2.9",
      y1: "3.52",
      x2: "27.1",
      y2: "3.52",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Bottom',
    value: 'bottom',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "3.41",
      y: "3.27",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "2.9",
      y1: "26.34",
      x2: "27.1",
      y2: "26.34",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Right',
    value: 'right',
    svg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "26.09",
      y1: "2.67",
      x2: "26.09",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_2__.SvgButtonGroupControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onClick: value => {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassName)(attributes, setAttributes, 'wsu-border--add-', value);
    },
    isActive: value => {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-border--add-'),
    label: "Add Border",
    buttonOptions: buttonOptions
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BorderControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/BreakPointControl.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BreakPointControl.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const BreakPointWidthControl = props => {
  let {
    label,
    value,
    setAttributes,
    attributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: 'Width at ' + label,
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-break--' + value + '-'),
    onChange: size => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassName)(attributes, setAttributes, 'wsu-break--' + value + '-', size),
    options: [{
      label: 'N/A',
      value: ''
    }, {
      label: 'Auto',
      value: 'auto'
    }, {
      label: '100%',
      value: '100'
    }, {
      label: '66.66%',
      value: '66'
    }, {
      label: '50%',
      value: '50'
    }, {
      label: '33.33%',
      value: '33'
    }, {
      label: '25%',
      value: '25'
    }]
  });
};
const BreakPointControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  let defaultBreakPoints = [{
    label: 'xxUltrawide (2400px)',
    value: 'xxultrawide'
  }, {
    label: 'xUltrawide (1900px)',
    value: 'xultrawide'
  }, {
    label: 'Ultrawide (1600px)',
    value: 'ultrawide'
  }, {
    label: 'Desktop (1260px)',
    value: 'desktop'
  }, {
    label: 'Tablet Large (992px)',
    value: 'tablet-large'
  }, {
    label: 'Tablet Medium (860px)',
    value: 'tablet-medium'
  }, {
    label: 'Tablet (768px)',
    value: 'tablet'
  }, {
    label: 'Phone (576px)',
    value: 'phone'
  }, {
    label: 'Phone Small (450px)',
    value: 'phone-small'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, defaultBreakPoints.map(breakPoint => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BreakPointWidthControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakPoint, props));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BreakPointControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ButtonControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ButtonControl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const ButtonControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    let selectedColor = onSetColor ? value : (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassName)(classNames, prefix);
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
    let updatedClasses = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName)(classNames, prefix, selectedColor);
    setAttributes({
      className: updatedClasses
    });
  };
  const returnColorName = color => {
    let colorName = getColorName(color);
    onSetColor(colorName);
  };
  let pickerId = 'color-picker-' + Math.floor(Math.random() * 1000000);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    id: pickerId,
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(colorSettings, cs => cs.prefix === prefix);
  }
  function getColorObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }
    const colorName = className.replace(prefix, '');
    const colors = getColorSetting(prefix).colors;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(colors, c => {
      return c.className === colorName;
    });
  }
  const getSelectedColorByPrefix = prefix => {
    var _getColorObjectByClas;
    if (!attributes.className) {
      return;
    }
    const appliedClasses = attributes.className.split(' ');
    const selectedColorClassName = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(appliedClasses, c => c.startsWith(prefix));
    return (_getColorObjectByClas = getColorObjectByClassName(prefix, selectedColorClassName)) === null || _getColorObjectByClas === void 0 ? void 0 : _getColorObjectByClas.color;
  };
  const updateSelectedColors = (prefix, color) => {
    var _attributes$className, _attributes$className2;
    const colors = getColorSetting(prefix).colors;
    const colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorObjectByColorValue)(colors, color);
    const colorClass = colorObject ? prefix + colorObject.className : '';
    const appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(appliedClasses, c => !c.startsWith(prefix)).concat(colorClass);
    const newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(c => c).join(' ');
    setAttributes({
      className: newClassName
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const CountControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '0',
    onChange: count => setAttributes({
      count
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CountControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js":
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/DeveloperToolsControl.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const DeveloperToolsControl = props => {
  var _attributes$developer;
  let {
    attributes,
    setAttributes
  } = props;
  console.log(attributes);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Developer Tools",
    checked: (_attributes$developer = attributes.developerTools) !== null && _attributes$developer !== void 0 ? _attributes$developer : '',
    onChange: developerTools => setAttributes({
      developerTools
    }),
    help: "Show developer tools panel."
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DeveloperToolsControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FeedPostsControl.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FeedPostsControl.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Use Feed",
    checked: attributes.useFeed ? attributes.useFeed : false,
    onChange: value => setUseFeed(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: value => setTerms(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '',
    onChange: value => setCount(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  var _attributes$prefix, _attributes$label, _sizes;
  let {
    attributes,
    setAttributes,
    sizes,
    elementClass = 'className'
  } = props;
  let prefix = (_attributes$prefix = attributes.prefix) !== null && _attributes$prefix !== void 0 ? _attributes$prefix : 'wsu-font-size--';
  let label = (_attributes$label = attributes.label) !== null && _attributes$label !== void 0 ? _attributes$label : 'Font Size';
  sizes = (_sizes = sizes) !== null && _sizes !== void 0 ? _sizes : wsuFontSizes;
  // let blockClassNames = attributes.className ?? '';
  // let classNames = attributes.elementClass ?? blockClassNames;

  console.log(attributes);

  //let value = getBlockClassNameOption( classNames, prefix );
  let value = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, prefix, '', elementClass);
  console.log(value);
  const setFontSize = size => {
    if ('onChange' in attributes) {
      attributes.onChange(size);
    } else {
      //setBlockClassName( attributes, setAttributes, prefix, size );
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, prefix, size, elementClass);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const OptionItem = (option, onSelect) => {
  console.log(option);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wsu-gutenberg-format-selector__option",
    onClick: event => {
      onSelect(option.slug);
    }
  }, option.icon, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wsu-gutenberg-format-selector__option__label"
  }, option.label));
};
const FormatSelector = _ref => {
  let {
    options,
    onSelect,
    title
  } = _ref;
  if (options) {
    console.log(options);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-gutenberg-format-selector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-gutenberg-format-selector__title"
    }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const HostControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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

/***/ "./assets/src/js/partials/block-controls/MaxWidthControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/MaxWidthControl.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



const MaxWidthControl = props => {
  let {
    attributes,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Max Width",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-max-width--'),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Hero (1200px)',
      value: 'hero'
    }, {
      label: 'xxLarge (1000px)',
      value: 'xxlarge'
    }, {
      label: 'xLarge (900px)',
      value: 'xlarge'
    }, {
      label: 'Large (800px)',
      value: 'large'
    }, {
      label: 'xxMedium (693px)',
      value: 'xxmedium'
    }, {
      label: 'xMedium (600px)',
      value: 'xmedium'
    }, {
      label: 'Medium (506px)',
      value: 'medium'
    }, {
      label: 'Small (400px)',
      value: 'small'
    }, {
      label: 'xSmall (318px)',
      value: 'xsmall'
    }, {
      label: 'xxSmall (225px)',
      value: 'xxsmall'
    }, {
      label: 'sxxSmall (150px)',
      value: 'sxxsmall'
    }],
    onChange: width => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-max-width--', width)
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MaxWidthControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/OffsetControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/OffsetControl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const OffsetControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PerRow = _ref => {
  let {
    attributes,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const RequireFirstImageControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const RequireImageControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TaxonomyTermSelectControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TaxonomyTypeSelectControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const TitleTagControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignItemControl": function() { return /* reexport safe */ _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__["default"]; },
/* harmony export */   "AnchorControl": function() { return /* reexport safe */ _AnchorControl__WEBPACK_IMPORTED_MODULE_27__["default"]; },
/* harmony export */   "BorderControl": function() { return /* reexport safe */ _BorderControl__WEBPACK_IMPORTED_MODULE_32__["default"]; },
/* harmony export */   "BreakPointControl": function() { return /* reexport safe */ _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__["default"]; },
/* harmony export */   "ButtonControl": function() { return /* reexport safe */ _ButtonControl__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "ColorClassControl": function() { return /* reexport safe */ _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "ColorClassNameSelector": function() { return /* reexport safe */ _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "CountControl": function() { return /* reexport safe */ _CountControl__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "DeveloperToolsControl": function() { return /* reexport safe */ _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__["default"]; },
/* harmony export */   "DisplayFieldControl": function() { return /* reexport safe */ _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   "FeedPostsControl": function() { return /* reexport safe */ _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "FontIconPickerControl": function() { return /* reexport safe */ _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "FontSizeControl": function() { return /* reexport safe */ _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "FormatSelector": function() { return /* reexport safe */ _FormatSelector__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "HeadingControl": function() { return /* reexport safe */ _HeadingControl__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "HeadingTagControl": function() { return /* reexport safe */ _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "HostControl": function() { return /* reexport safe */ _HostControl__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "ImageFrameControl": function() { return /* reexport safe */ _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "MaxWidthControl": function() { return /* reexport safe */ _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__["default"]; },
/* harmony export */   "MultipleImagePicker": function() { return /* reexport safe */ _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   "OffsetControl": function() { return /* reexport safe */ _OffsetControl__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "PerRow": function() { return /* reexport safe */ _PerRowControl__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "PostPicker": function() { return /* reexport safe */ _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "PostTypeSelectControl": function() { return /* reexport safe */ _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "RequireFirstImageControl": function() { return /* reexport safe */ _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "RequireImageControl": function() { return /* reexport safe */ _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "RequiredAlertControl": function() { return /* reexport safe */ _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "ResetControl": function() { return /* reexport safe */ _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "SpacingClassNameSelector": function() { return /* reexport safe */ _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "SvgButtonGroupControl": function() { return /* reexport safe */ _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__["default"]; },
/* harmony export */   "TaxonomyTermSelectControl": function() { return /* reexport safe */ _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "TaxonomyTypeSelectControl": function() { return /* reexport safe */ _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "TermSelectorControl": function() { return /* reexport safe */ _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "TitleTagControl": function() { return /* reexport safe */ _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__["default"]; }
/* harmony export */ });
/* harmony import */ var _FormatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatSelector */ "./assets/src/js/partials/block-controls/FormatSelector.js");
/* harmony import */ var _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-picker/PostPicker */ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js");
/* harmony import */ var _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedPostsControl */ "./assets/src/js/partials/block-controls/FeedPostsControl.js");
/* harmony import */ var _PerRowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerRowControl */ "./assets/src/js/partials/block-controls/PerRowControl.js");
/* harmony import */ var _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorClassNameSelector */ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js");
/* harmony import */ var _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing-class-name-selector/spacing-class-name-selector */ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js");
/* harmony import */ var _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-icon-picker-control/FontIconPickerControl */ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js");
/* harmony import */ var _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyTypeSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js");
/* harmony import */ var _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostTypeSelectControl */ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js");
/* harmony import */ var _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaxonomyTermSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js");
/* harmony import */ var _CountControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CountControl */ "./assets/src/js/partials/block-controls/CountControl.js");
/* harmony import */ var _OffsetControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OffsetControl */ "./assets/src/js/partials/block-controls/OffsetControl.js");
/* harmony import */ var _HostControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HostControl */ "./assets/src/js/partials/block-controls/HostControl.js");
/* harmony import */ var _ButtonControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonControl */ "./assets/src/js/partials/block-controls/ButtonControl.js");
/* harmony import */ var _HeadingControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeadingControl */ "./assets/src/js/partials/block-controls/HeadingControl.js");
/* harmony import */ var _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heading-tag-control.js/HeadingTagControl */ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js");
/* harmony import */ var _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TitleTagControl */ "./assets/src/js/partials/block-controls/TitleTagControl.js");
/* harmony import */ var _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FontSizeControl */ "./assets/src/js/partials/block-controls/FontSizeControl.js");
/* harmony import */ var _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-control/ResetControl */ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js");
/* harmony import */ var _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RequireImageControl */ "./assets/src/js/partials/block-controls/RequireImageControl.js");
/* harmony import */ var _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RequireFirstImageControl */ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js");
/* harmony import */ var _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ColorClassControl */ "./assets/src/js/partials/block-controls/ColorClassControl.js");
/* harmony import */ var _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./required-alert-control/RequiredAlertControl */ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js");
/* harmony import */ var _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./term-selector-control/TermSelectorControl */ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js");
/* harmony import */ var _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-frame-control/ImageFrameControl */ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js");
/* harmony import */ var _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./display-fields-control/DisplayFieldsControl */ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js");
/* harmony import */ var _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./multiple-image-picker/MultipleImagePicker */ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js");
/* harmony import */ var _AnchorControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./AnchorControl */ "./assets/src/js/partials/block-controls/AnchorControl.js");
/* harmony import */ var _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BreakPointControl */ "./assets/src/js/partials/block-controls/BreakPointControl.js");
/* harmony import */ var _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svg-button-group-control/SvgButtonGroupControl */ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js");
/* harmony import */ var _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./AlignItemControl */ "./assets/src/js/partials/block-controls/AlignItemControl.js");
/* harmony import */ var _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./MaxWidthControl */ "./assets/src/js/partials/block-controls/MaxWidthControl.js");
/* harmony import */ var _BorderControl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./BorderControl */ "./assets/src/js/partials/block-controls/BorderControl.js");
/* harmony import */ var _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./DeveloperToolsControl */ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js");



































/***/ }),

/***/ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const DisplayField = _ref => {
    let {
      field
    } = _ref;
    let {
      label = '',
      value = ''
    } = field;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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
  return fieldOptions.map(field => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DisplayField, {
    field: field
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayFieldControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedCountControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




let abortController = null;
const FeedHostControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.host);
  const [isValid, setIsValid] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(FeedHostControl);
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
    setValue(url);

    // reset if empty
    if (url === "") {
      setIsValid(false);
      setAttributes({
        host: ""
      });
      return;
    }

    // validate if url is a valid WP site
    updateValidity(url);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateValidity(attributes.host);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Host (optional)",
    id: id,
    help: "URL for the site to get results from (i.e. https://news.wsu.edu)."
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-input-with-icon"
  }, value && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: `dashicon wsu-gutenberg-input-with-icon__icon ${isValid ? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success" : "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error"}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedOffsetControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOptions);
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOptions();
  }, [props.host]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const defaultOptions = [];
const FeedTaxonomyControl = props => {
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOptions);
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOptions();
  }, [props.host, props.postType]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


const FeedTermControl = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blockControls__WEBPACK_IMPORTED_MODULE_1__.TermSelectorControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const FeedUseAndLogicControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedCountControl": function() { return /* reexport safe */ _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "FeedHostControl": function() { return /* reexport safe */ _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "FeedOffsetControl": function() { return /* reexport safe */ _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "FeedPanel": function() { return /* reexport safe */ _FeedPanel__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "FeedPanelAdvanced": function() { return /* reexport safe */ _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "FeedPostTypeControl": function() { return /* reexport safe */ _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "FeedTaxonomyControl": function() { return /* reexport safe */ _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "FeedTermControl": function() { return /* reexport safe */ _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "FeedUseAndLogicControl": function() { return /* reexport safe */ _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedPostTypeControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js");
/* harmony import */ var _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedTaxonomyControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js");
/* harmony import */ var _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedTermControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js");
/* harmony import */ var _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedCountControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js");
/* harmony import */ var _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeedOffsetControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js");
/* harmony import */ var _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedUseAndLogicControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js");
/* harmony import */ var _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedHostControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js");
/* harmony import */ var _FeedPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeedPanel */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js");
/* harmony import */ var _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedPanelAdvanced */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js");










/***/ }),

/***/ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleVisible = () => {
    setIsVisible(state => !state);
  };
  function selectIcon(icon) {
    toggleVisible();
    props.onChange(icon);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-font-icon-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: props.help
  }, props.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, props.label), props.value ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-gutenberg-font-icon-picker__selected-icon",
    onClick: toggleVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wsu-icon wsu-i-${props.value}`
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => props.onChange("")
  }, "Remove")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-gutenberg-font-icon-picker__select-icon-button",
    onClick: toggleVisible
  }, "Select Icon"), isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-font-icon-picker__icon-list"
  }, icons.map(i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: i,
    title: i,
    className: "wsu-gutenberg-font-icon-picker__icon-button",
    onClick: () => selectIcon(i)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wsu-icon wsu-i-${i}`
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (FontIconPickerControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "wsu-heading-tag-block-control",
    id: "heading-tag",
    label: "Heading Level",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, allowedTags.includes('h1') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h1'),
    isPressed: isActive('h1'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.81,6.75v10.5h-2v-4.5H6.43v4.5H4.49V6.75H6.43v4.34h5.43V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.51,6.75v10.5h-2V8.39H15.34V6.75Z"
  }))), allowedTags.includes('h2') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h2'),
    isPressed: isActive('h2'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.83,6.83V17.32H9.88v-4.5H4.45v4.5H2.5V6.83h2v4.33H9.88V6.83Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.5,15.68v1.64H13.76V16l4.17-4c1-1,1.2-1.59,1.2-2.17,0-1-.66-1.52-1.95-1.52a3,3,0,0,0-2.46,1.1L13.36,8.42a4.83,4.83,0,0,1,4-1.74c2.28,0,3.75,1.15,3.75,3,0,1-.29,2-1.74,3.32l-2.81,2.67Z"
  }))), allowedTags.includes('h3') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h3'),
    isPressed: isActive('h3'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.9,6.68V17.17H10v-4.5H4.52v4.5H2.57V6.68H4.52V11H10V6.68Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.43,14c0,1.77-1.34,3.3-4.16,3.3a6.61,6.61,0,0,1-3.94-1.21l.84-1.52a4.84,4.84,0,0,0,3.07,1c1.4,0,2.22-.61,2.22-1.59s-.69-1.56-2.28-1.56h-1V11.15l2.39-2.84H13.84V6.68H21V8l-2.55,3C20.42,11.27,21.43,12.45,21.43,14Z"
  }))), allowedTags.includes('h4') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h4'),
    isPressed: isActive('h4'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11,6.75v10.5H9v-4.5H3.57v4.5H1.62V6.75H3.57v4.34H9V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.38,14.86H20.52v2.39H18.63V14.86H12.87V13.51L18,6.75h2.09l-4.88,6.47h3.44V11.1h1.83v2.12h1.86Z"
  }))), allowedTags.includes('h5') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h5'),
    isPressed: isActive('h5'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.81,6.68V17.17h-2v-4.5H4.43v4.5H2.48V6.68H4.43V11H9.86V6.68Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.52,14c0,1.84-1.34,3.37-4.16,3.37a6.59,6.59,0,0,1-3.94-1.21l.82-1.52a4.94,4.94,0,0,0,3.09,1c1.4,0,2.22-.61,2.22-1.6s-.64-1.64-2.82-1.64H14.2l.54-5.71H20.9V8.31H16.39l-.23,2.43h1C20.27,10.74,21.52,12.09,21.52,14Z"
  }))), allowedTags.includes('h6') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('h6'),
    isPressed: isActive('h6'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  }))), allowedTags.includes('div') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setTag('div'),
    isPressed: isActive('div'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "div"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (HeadingTagControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: blockClasses
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imageSrc
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wsu-image-frame-control__button",
      onClick: () => setAttributes({
        [imageSrcKey]: '',
        [imageIdKey]: '',
        [imageAltKey]: ''
      })
    }, "Remove Image")));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wsu-image-frame wsu-image-frame-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const [editingImage, setEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [editingElement, setEditingElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [skipNextPopover, setSkipNextPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
        return {
          ...item,
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label,
    help: help,
    className: "wsu-gutenberg-mip"
  }, editingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    headerTitle: "Edit Focal Point",
    focusOnMount: "container",
    position: "middle left",
    onFocusOutside: closeEditPopover,
    onClose: closeEditPopover,
    getAnchorRect: () => (editingElement === null || editingElement === void 0 ? void 0 : editingElement.getBoundingClientRect()) || null
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-mip__focal-point-picker-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FocalPointPicker, {
    url: editingImage.url,
    value: editingImage.focalPoint,
    onChange: focalPoint => updateFocalPoint(editingImage, focalPoint)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-mip__images"
  }, value.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: item.id,
    className: "wsu-gutenberg-mip__thumbnail-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: `wsu-gutenberg-mip__select-button${(editingImage === null || editingImage === void 0 ? void 0 : editingImage.id) === item.id ? " is-selected" : ""}`,
    onClick: e => openEditPopover(e, item)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wsu-gutenberg-mip__thumbnail",
    src: item.thumbnail
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => updateSelectedMedia(media),
    allowedTypes: ["image"],
    multiple: true,
    gallery: true,
    value: value.map(item => item.id),
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: open,
        className: "wsu-gutenberg-mip__open-button"
      }, "Select Images"));
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MultipleImagePicker);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/PostPicker.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    placeholder = 'Search Content...'
  } = props;
  const searchInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isMounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const [searchString, setSearchString] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedItems, setSelectedItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [latestPosts, setLatestPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [postTypeData, setPostTypeData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const debouncedSetSearchString = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(value => setSearchString(value), 250);
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMounted.current) {
      (async function handleSearch() {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(searchString)) {
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getPostTypeData();
    getSelectedItems();
    getLatestPosts();
    isMounted.current = true;
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: CSSNAMESPACE
  }, selectedItems.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, selectedItems.map(post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: post.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: `${CSSNAMESPACE}__remove-btn`,
      icon: "no-alt",
      onClick: () => handleItemRemove(post)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${CSSNAMESPACE}__remove-btn-text`
    }, post.title)));
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: searchInputRef,
    placeholder: placeholder,
    label: label,
    onChange: value => debouncedSetSearchString(value)
  }), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), searchString.length ? !isLoading && !searchResults.length ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Items found')) : !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SuggestionList, {
    attributes: attributes,
    title: "Search Results",
    postTypeData: postTypeData,
    suggestions: searchResults,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) : latestPosts.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SuggestionList, {
    attributes: attributes,
    title: "Recent Content",
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${CSSNAMESPACE}__suggestion-list-container`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: `${CSSNAMESPACE}__suggestion-list-title`
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `${CSSNAMESPACE}__suggestion-list`
  }, suggestions.map((post, index) => {
    var _postTypeData$post$ty;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: post.id,
      className: `${CSSNAMESPACE}__suggestion-list-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Suggestion, {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    id: id,
    onClick: onClick,
    className: `${CSSNAMESPACE}__suggestion ${isSelected && 'is-selected'}`,
    title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(suggestion.title),
    disabled: isSelected
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CSSNAMESPACE}__suggestion-title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextHighlight, {
    text: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(suggestion.title),
    highlight: searchTerm
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CSSNAMESPACE}__suggestion-meta-container`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": true,
    className: `${CSSNAMESPACE}__suggestion-meta`
  }, suggestion.date), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
function TextControl(_ref, ref) {
  let {
    label,
    hideLabelFromVision,
    value,
    help,
    className,
    onChange,
    type = 'text',
    ...props
  } = _ref;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(TextControl);
  const id = `inspector-text-control-${instanceId}`;
  const onChangeValue = ( /** @type {import('react').ChangeEvent<HTMLInputElement>} */
  event) => onChange(event.target.value);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "components-text-control__input",
    type: type,
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    ref: ref
  }, props)));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(TextControl));

/***/ }),

/***/ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const RequiredAlertControl = props => {
  let {
    attributes,
    onChange
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wsu-gutenberg-alert-control"
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (RequiredAlertControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/reset-control/ResetControl.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-block-control-reset",
    onClick: () => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, prefix, '')
  }, label);
};
/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  key: 'sxxsmall',
  name: 'sxxsmall'
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
}, {
  key: 'xhero',
  name: 'xhero'
}, {
  key: 'xxhero',
  name: 'xxhero'
}];
const SpacingClassNameSelector = props => {
  const {
    title = 'Space Settings',
    attributes,
    setAttributes,
    spaceSettings
  } = props;
  function getOptionByKey(key) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(ALLOPTIONS, o => {
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
    const selectedOptionClassName = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(appliedClasses, c => c.startsWith(prefix));
    return getOptionObjectByClassName(prefix, selectedOptionClassName);
  };
  const getValueForProperty = property => {
    return getSelectedValueByPrefix(property.prefix) || getOptionByKey(property.default) || '';
  };
  const updateSelectedOptions = (property, control) => {
    var _attributes$className, _attributes$className2;
    let optionClass = '';

    // only apply className if it is not equal to the current default state
    if (control && !(control.selectedItem.key === property.default)) {
      optionClass = property.prefix + control.selectedItem.key;
    }
    const appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    const newClasses = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(appliedClasses, c => !c.startsWith(property.prefix)).concat(optionClass);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title,
    initialOpen: false,
    className: `${CSSNAMESPACE}`
  }, spaceSettings.map(spaceSetting => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: spaceSetting.label,
      className: `${CSSNAMESPACE}__setting`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: `${CSSNAMESPACE}__setting-label`
    }, spaceSetting.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${CSSNAMESPACE}__setting-properties`
    }, spaceSetting.properties.map(property => {
      const options = ALLOPTIONS.filter(o => {
        var _property$ignoreOptio;
        return !((_property$ignoreOptio = property.ignoreOptions) !== null && _property$ignoreOptio !== void 0 && _property$ignoreOptio.includes(o.key));
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: property.label
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CustomSelectControl, {
        label: property.label,
        options: options,
        onChange: control => {
          updateSelectedOptions(property, control);
        },
        value: getValueForProperty(property)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: `${CSSNAMESPACE}__reset-btn`,
        isSmall: true,
        onClick: () => resetToDefault(property)
      }, "Reset to Default"));
    })));
  }), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (SpacingClassNameSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const SvgButtonOption = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => props.onClick(props.value),
    isPressed: props.isActive(props.value),
    className: "",
    variant: "primary",
    "aria-label": props.value
  }, props.svg);
};
const SvgButtonGroupControl = props => {
  let {
    attributes,
    setAttributes,
    buttonOptions,
    currentValue,
    label
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    className: "wsu-gutenberg-svg-button-group-control",
    id: "svg-button-group-control",
    label: label,
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, buttonOptions.map(buttonOption => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SvgButtonOption, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, buttonOption));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (SvgButtonGroupControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [availableTerms, setAvailableTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value); // keep track of all terms for mapping later
  const [termSuggestions, setTermSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedTerms, setSelectedTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);
  const handleInputChange = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useDebounce)(updateSuggestions, 250);
  async function updateSuggestions(input) {
    var _abortController, _abortController2;
    if (input.length < 2) {
      return;
    }
    setIsLoading(true);

    // cancel existing requests and set up new abort controller
    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();

    // make request to terms api
    const response = await fetch(props.host + `/wp-json/wp/v2/search?type=term&subtype=${props.taxonomy}&search=${input}`, {
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    });
    if (response.ok) {
      const results = await response.json();

      // process results
      const suggestions = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.differenceBy)(results, selectedTerms, "id");
      if (suggestions.length > 0) {
        setTermSuggestions(suggestions.map(v => {
          return {
            label: v.title,
            value: v.id
          };
        }));
        setAvailableTerms([...availableTerms, ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.differenceBy)(results, availableTerms, "id")]);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-term-selector"
  }, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-gutenberg-term-selector__selected_terms"
  }, selectedTerms.map((term, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: term.id,
      className: "wsu-gutenberg-term-selector__selected_term"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      class: "components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon",
      onClick: () => removeTerm(term)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wsu-gutenberg-term-selector__remove-btn-text"
    }, term.title, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wsu-gutenberg-term-selector__remove-btn-taxonomy-text"
    }, term.type.replace('post_', ''))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PanelAdvancedFeedOptions = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Advanced Feed Options",
    initialOpen: false
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelAdvancedFeedOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelAnimate.js":
/*!*************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelAnimate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");




const animateStyles = [{
  label: 'None',
  value: ''
}, {
  label: 'Fade',
  value: 'fade'
}, {
  label: 'In From Left',
  value: 'fade-left'
}, {
  label: 'In From Right',
  value: 'fade-right'
}, {
  label: 'In From Bottom',
  value: 'fade-bottom'
}, {
  label: 'In From Botom left',
  value: 'fade-bottom-right'
}, {
  label: 'In From Botom Right',
  value: 'fade-bottom-right'
}];
const animateTiming = [{
  label: '5% in view',
  value: 'early'
}, {
  label: '15% in view',
  value: ''
}, {
  label: '25% in view',
  value: 'late'
}];
const PanelAnimate = props => {
  let {
    isOpen = false,
    attributes,
    setAttributes
  } = props;
  let isAnimatable = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.hasBlockClassName)(attributes, 'wsu-animate');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isAnimatable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Animate Options",
    initialOpen: isOpen
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Animation Type",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-animate--action-'),
    options: animateStyles,
    onChange: animationStyle => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--action-', animationStyle)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Trigger Animation at:",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-animate--timing-'),
    options: animateTiming,
    onChange: animateAt => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--timing-', animateAt)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Animation Delay",
    value: parseInt((0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-animate--delay-', 0)),
    onChange: delay => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--delay-', delay),
    help: "Increments of 200ms",
    min: 0,
    max: 6
  }), props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (PanelAnimate);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelColorOptions.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelColorOptions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Color Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelColorOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelDeveloperTools.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelDeveloperTools.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


const {
  ToggleControl,
  SelectControl,
  RangeControl
} = wp.components;


const PanelDeveloperTools = props => {
  let {
    isOpen = false,
    positionElement = false,
    alignItem = false,
    maxWidth = false,
    zindex = true,
    overflow = true,
    hide = true,
    animate = false,
    attributes,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Developer Tools",
    initialOpen: isOpen
  }, maxWidth && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.MaxWidthControl, props), positionElement && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Position Element",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.hasBlockClassName)(attributes, 'wsu-position--relative'),
    onChange: position => {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-position--relative', position);
    },
    help: "Sets element position to relative."
  }), alignItem && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.AlignItemControl, props), zindex && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: "Element z-index",
    value: parseInt((0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-zindex--level-')),
    onChange: zindex => setBlockClassName(attributes, setAttributes, 'wsu-zindex--level-', zindex),
    help: "Position element must be on if the element isn't already positioned in CSS.",
    min: 0,
    max: 7
  }), overflow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Overflow Hidden",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.hasBlockClassName)(attributes, 'wsu-overflow--hidden'),
    onChange: overflow => {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-overflow--hidden', overflow);
    }
  }), hide && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: "Hide at Breakpoint",
    value: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-hide--'),
    options: [{
      label: 'none',
      value: ''
    }, {
      label: 'xxultrawide',
      value: 'xxultrawide'
    }, {
      label: 'xultrawide',
      value: 'xultrawide'
    }, {
      label: 'ultrawide',
      value: 'ultrawide'
    }, {
      label: 'desktop',
      value: 'desktop'
    }, {
      label: 'tablet-large',
      value: 'tablet-large'
    }, {
      label: 'tablet-medium',
      value: 'tablet-medium'
    }, {
      label: 'tablet',
      value: 'tablet'
    }, {
      label: 'phone',
      value: 'phone'
    }, {
      label: 'phone-small',
      value: 'phone-small'
    }],
    onChange: animationStyle => setBlockClassName(attributes, setAttributes, 'wsu-hide--', animationStyle)
  }), animate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Animate",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.hasBlockClassName)(attributes, 'wsu-animate'),
    onChange: overflow => {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_2__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-animate', overflow);
    }
  }), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelDeveloperTools);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelDisplayOptions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PanelFeedOptions = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");



const PanelFeedPosts = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Feed Posts",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.FeedPostsControl, props), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelFeedPosts);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelGeneralOptions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const PanelGeneralOptions = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");



const PanelInsertPost = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Select Post/Page",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.PostPicker, props));
};
/* harmony default export */ __webpack_exports__["default"] = (PanelInsertPost);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/blockPanels.js":
/*!************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/blockPanels.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedAdvancedPanel": function() { return /* reexport safe */ _nested_advanced_panel_NestedAdvancedPanel__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "PanelAdvancedFeedOptions": function() { return /* reexport safe */ _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "PanelAnimate": function() { return /* reexport safe */ _PanelAnimate__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "PanelColorOptions": function() { return /* reexport safe */ _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "PanelDeveloperTools": function() { return /* reexport safe */ _PanelDeveloperTools__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "PanelDisplayOptions": function() { return /* reexport safe */ _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "PanelFeedOptions": function() { return /* reexport safe */ _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "PanelFeedPosts": function() { return /* reexport safe */ _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "PanelGeneralOptions": function() { return /* reexport safe */ _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "PanelInsertPost": function() { return /* reexport safe */ _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "PanelStyleOptions": function() { return /* reexport safe */ _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__["default"]; }
/* harmony export */ });
/* harmony import */ var _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelInsertPost */ "./assets/src/js/partials/block-panels/PanelInsertPost.js");
/* harmony import */ var _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelDisplayOptions */ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js");
/* harmony import */ var _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelFeedPosts */ "./assets/src/js/partials/block-panels/PanelFeedPosts.js");
/* harmony import */ var _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelGeneralOptions */ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js");
/* harmony import */ var _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanelFeedOptions */ "./assets/src/js/partials/block-panels/PanelFeedOptions.js");
/* harmony import */ var _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PanelAdvancedFeedOptions */ "./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js");
/* harmony import */ var _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PanelColorOptions */ "./assets/src/js/partials/block-panels/PanelColorOptions.js");
/* harmony import */ var _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-style-options/PanelStyleOptions */ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js");
/* harmony import */ var _PanelAnimate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PanelAnimate */ "./assets/src/js/partials/block-panels/PanelAnimate.js");
/* harmony import */ var _nested_advanced_panel_NestedAdvancedPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nested-advanced-panel/NestedAdvancedPanel */ "./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js");
/* harmony import */ var _PanelDeveloperTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PanelDeveloperTools */ "./assets/src/js/partials/block-panels/PanelDeveloperTools.js");












/***/ }),

/***/ "./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js":
/*!******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const NestedAdvancedPanel = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Additional Advanced Settings",
    initialOpen: false,
    className: "wsu-gutenberg-panel-nested-advanced"
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (NestedAdvancedPanel);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  let currentValue = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(classString, prefix);
  const setStyleClassNames = value => {
    let updatedClasses = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.addBlockClassName)(classString, prefix, value);
    setAttributes({
      [setKey]: updatedClasses
    });
  };
  const styleItem = styleObj => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      isPressed: currentValue == styleObj.value,
      onClick: () => setStyleClassNames(styleObj.value)
    }, styleObj.icon, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, styleObj.label));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Style Options",
    initialOpen: isOpen
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: "wsu-block-style",
    className: "wsu-block-style"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, styles.map(styleObj => styleItem(styleObj)))), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelStyleOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockClassName.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockClassName.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBlockClassName": function() { return /* binding */ addBlockClassName; },
/* harmony export */   "getBlockClassName": function() { return /* binding */ getBlockClassName; },
/* harmony export */   "getBlockClassNameValue": function() { return /* binding */ getBlockClassNameValue; },
/* harmony export */   "hasBlockClassName": function() { return /* binding */ hasBlockClassName; },
/* harmony export */   "removeBlockClassName": function() { return /* binding */ removeBlockClassName; },
/* harmony export */   "setBlockClassName": function() { return /* binding */ setBlockClassName; },
/* harmony export */   "setBlockClassNameBool": function() { return /* binding */ setBlockClassNameBool; },
/* harmony export */   "setChildBlockClassName": function() { return /* binding */ setChildBlockClassName; },
/* harmony export */   "setClassName": function() { return /* binding */ setClassName; }
/* harmony export */ });
/**
 * Add a class prefix/value to a given string of classnames.
 * 
 * @param { string } classString String of class names
 * @param {string } prefix Previx of class to add or remove
 * @param { string } value Value to append to prefix
 * @param { boolean } remove Remove class names with matching prefixes
 * @returns String of classnames
 */

const addClassName = function (classString, prefix, value) {
  let remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
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

const addBlockClassName = function (attributes, prefix, value) {
  let remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
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
const getClassNameValue = function (classesString, prefix) {
  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
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
const getBlockClassNameValue = function (attributes, prefix) {
  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'className';
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
const setClassName = function (classesString, prefix, value, setAttributes) {
  var _classesString;
  let setKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'className';
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
const setBlockClassName = function (attributes, setAttributes, prefix, value) {
  let setKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'className';
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
const setChildBlockClassName = function (clientId, prefix, value) {
  let setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'className';
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName; },
/* harmony export */   "getBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassName; },
/* harmony export */   "getBlockClassNameOption": function() { return /* reexport safe */ _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "getBlockClassNameValue": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue; },
/* harmony export */   "hasBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName; },
/* harmony export */   "removeBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.removeBlockClassName; },
/* harmony export */   "setBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName; },
/* harmony export */   "setBlockClassNameBool": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool; },
/* harmony export */   "setChildBlockClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setChildBlockClassName; },
/* harmony export */   "setClassName": function() { return /* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setClassName; }
/* harmony export */ });
/* harmony import */ var _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlockClassNameOption */ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js");
/* harmony import */ var _blockClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");











/***/ }),

/***/ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/getBlockClassNameOption.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");





const {
  ToggleControl,
  SelectControl,
  RangeControl
} = wp.components;
function additionalAdvancedControls(OriginalComponent) {
  return function (props) {
    const unsupportedPosition = [];
    const unsupportedZindex = [];
    const unsupportedOverflow = [];
    const unsupportedHide = [];
    const supportsAnimation = ['wsuwp/card', 'core/image', 'core/heading', 'wsuwp/banner', 'wsuwp/button', 'wsuwp/callout', 'wsuwp/column', 'wsuwp/container', 'wsuwp/decorator', 'wsuwp/row', 'wsuwp/section', 'core/paragraph', 'wsuwp/stat'];
    const supportsAnchor = ['wsuwp/card', 'wsuwp/card-group', 'wsuwp/banner', 'wsuwp/button', 'wsuwp/callout', 'wsuwp/column', 'wsuwp/container', 'wsuwp/row', 'wsuwp/section', 'wsuwp/stat'];
    const excludeAdvanced = ['wsuwp/card'];
    let {
      attributes,
      setAttributes
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(OriginalComponent, props), !excludeAdvanced.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorAdvancedControls, null, supportsAnchor.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__.AnchorControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Additional Advanced Settings",
      initialOpen: false,
      className: "wsu-block-control-additional-advanced"
    }, !unsupportedPosition.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Position Element",
      checked: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.hasBlockClassName)(attributes, 'wsu-position--relative'),
      onChange: position => {
        (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-position--relative', position);
      },
      help: "Sets element position to relative."
    }), !unsupportedZindex.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: "Element z-index",
      value: parseInt((0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-zindex--level-')),
      onChange: zindex => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassName)(attributes, setAttributes, 'wsu-zindex--level-', zindex),
      help: "Position element must be on if the element isn't already positioned in CSS.",
      min: 0,
      max: 7
    }), !unsupportedOverflow.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Overflow Hidden",
      checked: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.hasBlockClassName)(attributes, 'wsu-overflow--hidden'),
      onChange: overflow => {
        (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-overflow--hidden', overflow);
      }
    }), !unsupportedOverflow.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Hide at Breakpoint",
      value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-hide--'),
      options: [{
        label: 'none',
        value: ''
      }, {
        label: 'xxultrawide',
        value: 'xxultrawide'
      }, {
        label: 'xultrawide',
        value: 'xultrawide'
      }, {
        label: 'ultrawide',
        value: 'ultrawide'
      }, {
        label: 'desktop',
        value: 'desktop'
      }, {
        label: 'tablet-large',
        value: 'tablet-large'
      }, {
        label: 'tablet-medium',
        value: 'tablet-medium'
      }, {
        label: 'tablet',
        value: 'tablet'
      }, {
        label: 'phone',
        value: 'phone'
      }, {
        label: 'phone-small',
        value: 'phone-small'
      }],
      onChange: animationStyle => (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassName)(attributes, setAttributes, 'wsu-hide--', animationStyle)
    }), supportsAnimation.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Animate",
      checked: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.hasBlockClassName)(attributes, 'wsu-animate'),
      onChange: overflow => {
        (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-animate', overflow);
      }
    })))));
  };
}
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp-plugin-gutenberg/additional-advanced-controls', additionalAdvancedControls);

/***/ }),

/***/ "./assets/src/js/partials/editor-config/allowed-embeds.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/editor-config/allowed-embeds.js ***!
  \****************************************************************/
/***/ (function() {

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
/***/ (function() {

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
/***/ (function() {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && (props.name == 'core/buttons' || props.name == 'wsuwp/callout') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: 'Align Bottom',
      checked: (0,_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-align-item--flex-bottom'),
      onChange: value => (0,_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-align-item--flex-bottom', value),
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && (props.name == 'wsuwp/column' || props.name == 'wsuwp/callout') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: 'Enable Align Bottom',
      checked: (0,_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-item-layout--flex-column'),
      onChange: value => (0,_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-item-layout--flex-column', value),
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
/***/ (function() {

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
/***/ (function() {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");




function insertSpacingControl(OriginalComponent) {
  return function (props) {
    const unsupportedBlockTypes = ['core/image', 'wsuwp/card', 'wsuwp/image', 'wsuwp/row', 'wsuwp/column', 'core/button', 'core/paragraph', 'wsuwp/section', 'wsuwp/card-group', 'wsuwp/callout', 'wsuwp/container', 'wsuwp/button'];
    if (!unsupportedBlockTypes.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(OriginalComponent, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }

    // return default
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(OriginalComponent, props);
  };
}
wp.hooks.addFilter('editor.BlockEdit', 'wsuwp-plugin-gutenberg/insert-spacing-control', insertSpacingControl);

/***/ }),

/***/ "./blocks/core-button/blockEditFilter.js":
/*!***********************************************!*\
  !*** ./blocks/core-button/blockEditFilter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "6.18",
      style: {
        fill: '#a60f2d'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#fff'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "11.14",
      y: "7.66",
      width: "101.72",
      height: "44.67",
      rx: "21.11",
      style: {
        fill: '#a60f2d'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#fff'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#fff'
      }
    })),
    label: 'Round',
    value: 'round'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
      style: {
        fill: '#414042'
      }
    })),
    label: 'Outline',
    value: 'outline'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
      style: {
        fill: '#414042'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && props.name == 'core/button' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      styles: buttonStyles,
      prefix: "wsu-button--style-"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: "Button Size",
      value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassName)(blockClassNames, 'wsu-button--size-'),
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
          className: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.addBlockClassName)(blockClassNames, 'wsu-button--size-', buttonSize)
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M26.52,20.22V37H23.4v-7.2H14.71V37H11.59V20.22h3.12v6.93H23.4V20.22Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M42.74,31.57H32.68a3.88,3.88,0,0,0,4.16,3.07,4.57,4.57,0,0,0,3.48-1.39l1.61,1.85a6.51,6.51,0,0,1-5.16,2.09c-4.3,0-7.09-2.76-7.09-6.58a6.37,6.37,0,0,1,6.63-6.55,6.25,6.25,0,0,1,6.48,6.62C42.79,30.92,42.77,31.28,42.74,31.57Zm-10.08-2h7.27a3.48,3.48,0,0,0-3.62-3.12A3.54,3.54,0,0,0,32.66,29.58Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M56,29.51V37H53.21V35.46a4.57,4.57,0,0,1-4,1.73c-2.93,0-4.77-1.61-4.77-3.84s1.44-3.82,5.33-3.82H53v-.19c0-1.75-1.06-2.79-3.2-2.79A6.34,6.34,0,0,0,46,27.83l-1.18-2.19a9.06,9.06,0,0,1,5.43-1.58C53.9,24.06,56,25.81,56,29.51ZM53,33V31.52h-3.1c-2,0-2.59.77-2.59,1.71S48.26,35,49.8,35A3.27,3.27,0,0,0,53,33Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M72.55,19.21V37H69.67V35.36a5.28,5.28,0,0,1-4.25,1.83,6.24,6.24,0,0,1-6.48-6.58,6.22,6.22,0,0,1,6.48-6.55,5.24,5.24,0,0,1,4.13,1.73V19.21Zm-3,11.4a3.82,3.82,0,1,0-7.64,0,3.82,3.82,0,1,0,7.64,0Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M76.08,20.29A1.82,1.82,0,0,1,78,18.49a1.79,1.79,0,0,1,1.92,1.73A1.85,1.85,0,0,1,78,22.09,1.82,1.82,0,0,1,76.08,20.29Zm.4,3.91h3V37h-3Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M96,29.67V37H93v-7c0-2.28-1.12-3.39-3-3.39-2.14,0-3.58,1.3-3.58,3.87V37h-3V24.2h2.86v1.66a5.54,5.54,0,0,1,4.41-1.8C93.76,24.06,96,25.81,96,29.67Z",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M112.7,24.2V35.08c0,4.65-2.42,6.76-6.91,6.76A10.18,10.18,0,0,1,99.55,40l1.34-2.26a7.72,7.72,0,0,0,4.73,1.54c2.83,0,4.08-1.3,4.08-3.89v-.67a5.66,5.66,0,0,1-4.3,1.7c-3.67,0-6.48-2.49-6.48-6.21s2.81-6.17,6.48-6.17a5.52,5.52,0,0,1,4.44,1.85V24.2Zm-3,6a3.91,3.91,0,1,0-3.89,3.67A3.61,3.61,0,0,0,109.75,30.23Z",
      fill: "#231f20"
    })),
    label: 'Default',
    value: ''
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "12.84",
      y: "15.43",
      width: "98.32",
      height: "16.04",
      rx: "6.8",
      fill: "#231f20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "13.39",
      y: "38.35",
      width: "25.61",
      height: "4.11",
      fill: "#9e1c20"
    })),
    label: 'Marked',
    value: 'marked'
  }];
  let markColors = [{
    name: 'crimson',
    color: '#A60F2D'
  }, {
    name: 'crimson-light',
    color: '#CA1237'
  }, {
    name: 'gray',
    color: '#b3b3b3'
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && props.name == 'core/heading' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      styles: headingStyles,
      prefix: "wsu-heading--style-"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__.FontSizeControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      sizes: [{
        label: 'Default',
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
    })), 'marked' == (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-heading--style-') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Mark Above Title",
      checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.hasBlockClassName)(attributes, 'wsu-heading--mark-top'),
      onChange: above => {
        (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-heading--mark-top', above);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Mark centered",
      checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.hasBlockClassName)(attributes, 'wsu-heading--mark-centered'),
      onChange: centered => {
        (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-heading--mark-centered', centered);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      colors: markColors,
      label: "Mark Color",
      value: "#CA1237",
      prefix: "wsu-heading--mark-color-"
    })))))));
  };
}, 'coreHeadingControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-heading-controls', coreHeadingControls);

/***/ }),

/***/ "./blocks/core-image/editor/blockEditFilter.js":
/*!*****************************************************!*\
  !*** ./blocks/core-image/editor/blockEditFilter.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle", {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && props.name == 'core/image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      styles: imageStyles,
      prefix: "wsu-image--style-"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && props.name == 'core/list' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_1__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: "Number of Columns",
      help: "Number of columns to display.",
      value: parseInt((0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-list--columns-', 1)),
      onChange: columns => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-list--columns-', columns),
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    let FontSizeValue = isSelected && props.name == 'core/paragraph' ? (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-font-size--') : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && props.name == 'core/paragraph' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.FontSizeControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
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
    })), FontSizeValue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.RequiredAlertControl, null, "Should this be a heading instead?", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("br", null), "Paragraph text should not be used as a substitute for a heading."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.AlignItemControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.MaxWidthControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && props.name == 'core/quote' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.FontSizeControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
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
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props))));
  };
}, 'coreQuoteControls');
wp.hooks.addFilter('editor.BlockEdit', 'wsu/core-quote-controls', coreQuoteControls);

/***/ }),

/***/ "./blocks/wsuwp-accordion/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-accordion/editor/block.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        className: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.addBlockClassName)(blockClasses, 'wsu-accordion--size-', 'small')
      });
    } else {
      setAttributes({
        className: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.removeBlockClassName)(blockClasses, 'wsu-accordion--size')
      });
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.HeadingTagControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Reduce Size",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.hasBlockClassName)((_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '', 'wsu-accordion--size-small'),
    onChange: value => addSizeClassName(value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "wsu-accordion__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-accordion__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-accordion__content-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    templateLock: false
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-accordion/editor/save.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-accordion/editor/save.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnsSave);

/***/ }),

/***/ "./blocks/wsuwp-banner/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-banner/editor/block.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "48",
    height: "48",
    fill: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    y: "8.79",
    width: "48",
    height: "30.42",
    fill: "#231f20"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "19.09 14.21 6.08 32.95 19.33 32.95 26.44 24.04 19.09 14.21",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polyline", {
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
    },
    id: {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelGeneralOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Full Width Background",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  }), attributes.imageSrc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imageDimensions,
    value: attributes.imageFocalPoint,
    onChange: focalPoint => setAttributes({
      imageFocalPoint: focalPoint
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
    onSelect: media => setAttributes({
      imageId: media.id,
      imageSrc: media.url
    })
    // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
        label: "Replace Background Image"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "Height",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-page-banner--size-'),
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
    onChange: size => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-page-banner--size-', size)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: bannerStyles,
    prefix: "wsu-page-banner--style-"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, "Page Banner"));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-button/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-button/editor/block.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"
  })),
  apiVersion: 2,
  category: "text",
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
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
    },
    buttonAriaLabel: {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "6.18",
    style: {
      fill: "#a60f2d"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#fff"
    }
  })),
  label: "Default",
  value: ""
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.14",
    y: "7.66",
    width: "101.72",
    height: "44.67",
    rx: "21.11",
    style: {
      fill: "#a60f2d"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#fff"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#fff"
    }
  })),
  label: "Round",
  value: "round"
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z",
    style: {
      fill: "#414042"
    }
  })),
  label: "Outline",
  value: "outline"
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z",
    style: {
      fill: "#414042"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
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
  const [showInlineLinkEdit, setShowInlineLinkEdit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showSidebarLinkEdit, setShowSidebarLinkEdit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
    icon: "admin-links",
    onClick: toggleInlineLinkEditPopover
  }), attributes.buttonUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
    icon: "editor-unlink",
    isPressed: true,
    onClick: unlink
  }), showInlineLinkEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, {
    position: "bottom right",
    focusOnMount: false,
    onClose: toggleInlineLinkEditPopover
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LinkControl, {
    settings: [],
    value: {
      url: attributes.buttonUrl,
      opensInNewTab: attributes.opensInNewTab
    },
    onChange: handleLinkChange
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Button Text",
    help: "",
    placeholder: "Button Text",
    value: attributes.buttonText,
    onChange: val => setAttributes({
      buttonText: val.replace(/<[^>]+>/g, "")
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Clickthrough URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(URLPopover.LinkViewer, {
    url: attributes.buttonUrl,
    onEditLinkClick: toggleSidebarLinkEditPopover
  }), showSidebarLinkEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, {
    onClose: toggleSidebarLinkEditPopover
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LinkControl, {
    settings: [],
    value: {
      url: attributes.buttonUrl,
      opensInNewTab: attributes.opensInNewTab
    },
    onChange: handleLinkChange
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: buttonStyles,
    prefix: "wsu-button--style-",
    setKey: "buttonClassName"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: "Display Options",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setClassName)(attributes.buttonClassName, "wsu-button--size-", val, setAttributes, "buttonClassName"),
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes.buttonClassName, "wsu-button--size-"),
    defaultChecked: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "small"
  }, "Small"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: ""
  }, "Default"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "large"
  }, "Large")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, "wsu-cta--width-", val),
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, "wsu-cta--width-"),
    defaultChecked: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "inline"
  }, "Inline"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: ""
  }, "Default"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "full"
  }, "Full")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.FontIconPickerControl, {
    label: "Before Icon",
    help: "",
    value: attributes.iconBefore,
    onChange: val => setAttributes({
      iconBefore: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.FontIconPickerControl, {
    label: "After Icon",
    help: "",
    value: attributes.iconAfter,
    onChange: val => setAttributes({
      iconAfter: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }]
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Button CSS Class(es)",
    help: "Classes will be applied to the block's wrapper. Separate multiple classes with spaces.",
    value: attributes.buttonClassName,
    onChange: buttonClassName => setAttributes({
      buttonClassName
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Button aria-label",
    help: "By default, an element will use its text content as the accessibility label. If an element has aria-label, the accessible name becomes the text that's used.",
    value: attributes.buttonAriaLabel,
    onChange: buttonAriaLabel => setAttributes({
      buttonAriaLabel
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Align Bottom",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, "wsu-align-item--flex-bottom"),
    onChange: value => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, "wsu-align-item--flex-bottom", value),
    help: "Parent container must have \"Enable Align Bottom\" activated (Advanced/Enable Align Bottom)"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AlignmentToolbar, {
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, "wsu-text-align--"),
    onChange: val => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, "wsu-text-align--", val)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    className: "wsu-button " + attributes.buttonClassName
  }, attributes.iconBefore && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: `wsu-icon wsu-i-${attributes.iconBefore}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
  }), attributes.iconAfter && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: `wsu-icon wsu-i-${attributes.iconAfter}`
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-callout/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/block.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    id: {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  let calloutStyles = [{
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "9.45",
      y: "5.8",
      width: "105.1",
      height: "48.4",
      rx: "1.88",
      fill: "#d1d3d4",
      stroke: "#939598",
      "stroke-miterlimit": "10"
    })),
    label: "Default",
    value: ""
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "#d1d3d4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "9.45",
      y: "5.8",
      width: "105.1",
      height: "48.4",
      fill: "#fff"
    })),
    label: "Basic",
    value: "basic"
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelGeneralOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Callout Heading",
    value: attributes.title ? attributes.title : '',
    onChange: title => setAttributes({
      title
    })
  }), attributes.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Use HTML <aside> tag",
    checked: attributes.useAsideTag,
    onChange: useAsideTag => {
      setAttributes({
        useAsideTag
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.BorderControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.AlignItemControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.MaxWidthControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: calloutStyles,
    prefix: "wsu-callout--style-"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "",
    prefix: "wsu-border--color-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, attributes.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
    class: "wsu-callout__title"
  }, attributes.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-callout/editor/save.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnSave);

/***/ }),

/***/ "./blocks/wsuwp-card-group/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-card-group/editor/block.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "b"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
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
    id: {
      type: 'string',
      default: ''
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
    label: "Number of Columns",
    help: "Number of columns to display per row.",
    value: attributes.columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 4
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Feed Content",
    checked: attributes.useFeed,
    onChange: useFeed => setAttributes({
      useFeed
    }),
    help: "Feed in post, pages, or other content automatically into card group."
  }), attributes.useFeed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Show Image",
    checked: attributes.showImage,
    onChange: showImage => setAttributes({
      showImage
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Show Title",
    checked: attributes.showHeading,
    onChange: showHeading => setAttributes({
      showHeading
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Show Caption",
    checked: attributes.showCaption,
    onChange: showCaption => setAttributes({
      showCaption
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'div']
  })))), attributes.useFeed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedPanel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedPostTypeControl, {
    label: "Post type",
    help: "Select post type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedTaxonomyControl, {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedTermControl, {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: terms => setAttributes({
      terms: terms.termsList,
      termsSelected: terms.termsSelected
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedCountControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedPanelAdvanced, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedUseAndLogicControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedOffsetControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_5__.FeedHostControl, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-color-background--', '', 'cardClassName'),
    onSetColor: color => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setChildBlockClassName)(clientId, 'wsu-color-background--', color);
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-color-background--', color, 'cardClassName');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-border-top--color-', '', 'cardClassName'),
    onSetColor: color => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setChildBlockClassName)(clientId, 'wsu-border-top--color-', color);
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-border-top--color-', color, 'cardClassName');
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Collapse Card Spacing",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-card-group--spacing-none'),
    onChange: collapseSpacing => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-card-group--spacing-none', collapseSpacing)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Allow Custom Cards With Feed",
    checked: attributes.allowCustomCards,
    onChange: allowCustomCards => setAttributes({
      allowCustomCards
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    template: blockTemplate,
    templateLock: false,
    allowedBlocks: ['wsuwp/card']
  }), attributes.useFeed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__.ApiRenderBlock, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-card/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-card/editor/block.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "b"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
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
    },
    headingClass: {
      type: "string",
      default: ""
    },
    developerTools: {
      type: 'boolean',
      default: false
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
const cardStyles = [{
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "32.2",
    y: "2.34",
    width: "59.6",
    height: "31.32",
    fill: "#373737"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "32.2",
    y: "37.66",
    width: "59.6",
    height: "6.58",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "32.2",
    y: "47.01",
    width: "59.6",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "32.2",
    y: "53.7",
    width: "59.6",
    height: "3.91",
    rx: "1.96"
  })),
  label: 'Default',
  value: ''
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "4.34",
    y: "2.52",
    width: "56.06",
    height: "53.06",
    fill: "#373737"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "66.07",
    y: "11.16",
    width: "53.59",
    height: "6.58",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "66.07",
    y: "23.68",
    width: "48.5",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "66.07",
    y: "29.93",
    width: "48.5",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "66.07",
    y: "36.19",
    width: "48.5",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "66.07",
    y: "42.26",
    width: "48.5",
    height: "3.91",
    rx: "1.96"
  })),
  label: 'Horizontal 50%',
  value: 'horizontal-50'
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "4.34",
    y: "3.86",
    width: "41.73",
    height: "53.06",
    fill: "#373737"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "52.68",
    y: "11.16",
    width: "66.98",
    height: "6.58",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "52.68",
    y: "23.68",
    width: "61.9",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "52.68",
    y: "29.93",
    width: "61.9",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "52.68",
    y: "36.19",
    width: "61.9",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "52.68",
    y: "42.26",
    width: "61.9",
    height: "3.91",
    rx: "1.96"
  })),
  label: 'Horizontal 33%',
  value: 'horizontal-33'
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "4.34",
    y: "12.66",
    width: "38.65",
    height: "31.32",
    fill: "#373737"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "50.26",
    y: "14.71",
    width: "69.4",
    height: "6.58",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "50.26",
    y: "26.48",
    width: "64.32",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "50.26",
    y: "32.74",
    width: "64.32",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "50.26",
    y: "39",
    width: "64.32",
    height: "3.91",
    rx: "1.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "50.26",
    y: "45.06",
    width: "64.32",
    height: "3.91",
    rx: "1.96"
  })),
  label: 'Horizontal 25%',
  value: 'horizontal-25'
}];
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      styles: cardStyles,
      prefix: "wsu-card--style-"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      colors: backgroundColors,
      label: "Background Color",
      value: "#f2f2f2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      colors: borderColors,
      label: "Border Color",
      value: "#e6e6e6",
      prefix: "wsu-border-top--color-"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: 'Use Version 2',
      checked: '2' === attributes.version,
      onChange: checked => {
        let cardVersion = checked ? '2' : '1';
        setAttributes({
          version: cardVersion
        });
      },
      help: 'Use Version 2 of the Card.'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
      template: [['wsuwp/image', {}], ['core/heading', {
        className: 'wsu-title'
      }], ['core/paragraph', {}]],
      templateLock: false
    })));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
      isOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
      label: "Link URL",
      value: attributes.link,
      onChange: link => setAttributes({
        link
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'div']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.FontSizeControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      sizes: [{
        label: 'Default',
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
      }],
      elementClass: "headingClass"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      styles: cardStyles,
      prefix: "wsu-card--style-"
    }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-card--style-horizontal-', false) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Reverse Layout",
      checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-card--layout-', false) ? true : false,
      onChange: isReversed => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-card--layout-reversed', isReversed)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: "Card Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Show Image",
      checked: attributes.showImage,
      onChange: showImage => setAttributes({
        showImage
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Show Title",
      checked: attributes.showHeading,
      onChange: showHeading => setAttributes({
        showHeading
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Show Caption",
      checked: attributes.showCaption,
      onChange: showCaption => setAttributes({
        showCaption
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: "Custom Content",
      checked: attributes.showContent,
      onChange: showContent => setAttributes({
        showContent
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      colors: backgroundColors,
      label: "Background Color",
      value: "#f2f2f2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      colors: borderColors,
      label: "Border Color",
      value: "#e6e6e6",
      prefix: "wsu-border-top--color-"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }, props)), attributes.developerTools && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDeveloperTools, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      maxWidth: true,
      alignItem: true,
      positionElement: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: 'Use Version 2',
      checked: '2' === attributes.version,
      onChange: checked => {
        let cardVersion = checked ? '2' : '1';
        setAttributes({
          version: cardVersion
        });
      },
      help: 'Use Version 2 of the Card.'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.DeveloperToolsControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, attributes.showImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ImageFrameControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "wsu-card__content"
    }, attributes.showHeading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: "h2" // The tag here is the element output and editable in the admin
      ,
      value: attributes.title // Any existing content, either from the database or an attribute default
      ,
      className: `wsu-title ${attributes.headingClass}`,
      allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: title => setAttributes({
        title
      }) // Store updated content as a block attribute
      ,
      placeholder: 'Add a Card Heading...' // Display this text before any content has been added by the user
    }), attributes.showCaption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: "div" // The tag here is the element output and editable in the admin
      ,
      value: attributes.caption // Any existing content, either from the database or an attribute default
      ,
      className: "wsu-caption"
      //allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: caption => setAttributes({
        caption
      }) // Store updated content as a block attribute
      ,
      placeholder: 'Add a card caption...' // Display this text before any content has been added by the user
    }), attributes.showContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/wsuwp-column/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-column/editor/block.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    className: {
      type: 'string'
    },
    customWidth: {
      type: 'boolean',
      default: false
    },
    id: {
      type: 'string',
      default: ''
    },
    width: {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");





const {
  SelectControl,
  TextControl,
  ToggleControl,
  Panel,
  PanelBody,
  PanelRow
} = wp.components;

//import { Panel, PanelBody, PanelRow } from '@wordpress/components';


const DEFAULT_SPACING = {
  spaceBefore: 'none',
  spaceAfter: 'none',
  spaceTop: 'none',
  spaceBottom: 'none'
};
const Edit = props => {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'wsu-column',
    style: {}
  });
  let {
    attributes,
    setAttributes
  } = props;
  const [spacingDefaults, setSpacingDefaults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_SPACING);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.ColorClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__.PanelAnimate, props), attributes.customWidth && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: "Column Width",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Column Width",
    value: attributes.width ? attributes.width : '',
    onChange: width => setAttributes({
      width
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.BreakPointControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: 'Allow Custom Width',
    checked: attributes.customWidth,
    onChange: customWidth => {
      setAttributes({
        customWidth
      });
    },
    help: 'Use Version 2 of the Card.'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-column/editor/save.js":
/*!********************************************!*\
  !*** ./blocks/wsuwp-column/editor/save.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnSave);

/***/ }),

/***/ "./blocks/wsuwp-container/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-container/editor/block.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "5.83",
    y: "4.88",
    width: "36.34",
    height: "38.25",
    fill: "#fff",
    stroke: "#231f20",
    "stroke-miterlimit": "10",
    "stroke-width": "4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M25.29,19.75c0-1-1-1.66-2.29-1.66A3.67,3.67,0,0,0,19.75,20l-3.87-2.08C17.26,15.56,19.78,14,23.6,14c4,0,6.86,1.72,6.86,4.89,0,4.06-4.26,4.65-4.26,7H21.57C21.57,22.56,25.29,21.7,25.29,19.75ZM21,30.1a2.71,2.71,0,0,1,2.94-2.68,2.74,2.74,0,0,1,3,2.68,2.79,2.79,0,0,1-3,2.73A2.76,2.76,0,0,1,21,30.1Z",
    fill: "#231f20"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "48",
    height: "48",
    fill: "none"
  })),
  attributes: {
    tag: {
      type: "string",
      default: "div"
    },
    id: {
      type: 'string',
      default: ''
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "HTML Tag",
    value: attributes.tag,
    options: containerTags,
    onChange: tag => setAttributes({
      tag
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.BorderControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.AlignItemControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.MaxWidthControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#ffffff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "",
    prefix: "wsu-border--color-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Full Width",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Use Flexbox",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-flex--wrap'),
    onChange: fullWidth => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-flex--wrap', fullWidth);
    }
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-flex--wrap') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
    label: "Flex items per row",
    value: parseInt((0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-flex--columns-')),
    onChange: columns => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-flex--columns-', columns),
    min: 1,
    max: 4
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-flex--wrap') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "Flex Breakpoint",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-flex--breakpoint-'),
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
    onChange: breakpoint => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-flex--breakpoint-', breakpoint)
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-flex--wrap') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "Flex Spacing",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-flex--spacing-'),
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
    onChange: spacing => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-flex--spacing-', spacing)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-container/editor/save.js":
/*!***********************************************!*\
  !*** ./blocks/wsuwp-container/editor/save.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-decorator/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-decorator/editor/block.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "32 60 92 60 92 0 32 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle',
    value: 'triangle-crimson-right'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "32 0 32 60 92 60 32 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle',
    value: 'triangle-crimson-left'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "78.69 0 78.69 60 45.31 60 78.69 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-right'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "45.31 0 45.31 60 78.69 60 45.31 0",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-left'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "45.31 60 45.31 0 78.69 0 45.31 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-top-left'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "78.69 60 78.69 0 45.31 0 78.69 60",
      fill: "#a61d2f"
    })),
    label: 'Triangle (WSU)',
    value: 'triangle-crimson-wsu-steep-top-right'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "32 60 92 60 92 0 32 60",
      fill: "#dad9d9"
    })),
    label: 'Triangle',
    value: 'triangle-gray-right'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("polygon", {
      points: "32 0 32 60 92 60 32 0",
      fill: "#dad9d9"
    })),
    label: 'Triangle',
    value: 'triangle-gray-left'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#dad9d9"
    })),
    label: 'Block',
    value: 'block-gray'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#dad9d9"
    })),
    label: 'Block (WSU)',
    value: 'block-gray-wsu'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "gray"
    })),
    label: 'Block',
    value: 'block-gray-dark'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#a61d2f"
    })),
    label: 'Block',
    value: 'block-crimson'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#a61d2f"
    })),
    label: 'Block (WSU)',
    value: 'block-crimson-wsu'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      x: "25.92",
      width: "72.17",
      height: "60",
      fill: "#ca2039"
    })),
    label: 'Block',
    value: 'block-crimson-light'
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "14.39",
      y1: "51.39",
      x2: "57.16",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "25.91",
      y1: "51.39",
      x2: "68.68",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "36.81",
      y1: "51.39",
      x2: "79.58",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "46.91",
      y1: "51.39",
      x2: "89.68",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "58.43",
      y1: "51.39",
      x2: "101.2",
      y2: "8.61",
      fill: "none",
      stroke: "#a61d2f",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "14.39",
      y1: "51.39",
      x2: "57.16",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "25.91",
      y1: "51.39",
      x2: "68.68",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "36.81",
      y1: "51.39",
      x2: "79.58",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "46.91",
      y1: "51.39",
      x2: "89.68",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
      x1: "58.43",
      y1: "51.39",
      x2: "101.2",
      y2: "8.61",
      fill: "none",
      stroke: "#bfbfbf",
      "stroke-miterlimit": "10",
      "stroke-width": "3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line", {
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
    let value = (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-decorator--style-', '');
    let name = 'None';
    decoratorStyles.forEach(style => {
      if (style.value === value) {
        name = style.label;
      }
    });
    return name;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: decoratorStyles,
    prefix: "wsu-decorator--style-"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Top",
    value: attributes.top,
    onChange: top => setAttributes({
      top
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Bottom",
    value: attributes.bottom,
    onChange: bottom => setAttributes({
      bottom
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Left",
    value: attributes.left,
    onChange: left => setAttributes({
      left
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Right",
    value: attributes.right,
    onChange: right => setAttributes({
      right
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "width",
    value: attributes.width,
    onChange: width => setAttributes({
      width
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "height",
    value: attributes.height,
    onChange: height => setAttributes({
      height
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "Z Index",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, 'wsu-z-index--', ''),
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
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, 'wsu-z-index--', style);
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelAnimate, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, "Decorator: ", getDecoratorName()));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-hero-slider/editor/block.js":
/*!**************************************************!*\
  !*** ./blocks/wsuwp-hero-slider/editor/block.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  const [selectedSlideIndex, setSelectedSlideIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelGeneralOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Autoplay Slider",
    checked: attributes.autoplay,
    onChange: val => setAttributes({
      autoplay: val
    }),
    help: "Slider will automatically advance to the next slide on a time interval."
  }), attributes.autoplay === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Delay between slides",
    help: "Delay between slides in milliseconds. 1000 = 1 second.",
    placeholder: "5000",
    value: attributes.autoplayDelay,
    onChange: delay => setAttributes({
      autoplayDelay: delay
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    "data-selected-slide-index": selectedSlideIndex
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-gutenberg-hero-slider__slides"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    template: [["wsuwp/hero", {
      requiredClassName: "swiper-slide"
    }]],
    templateLock: false,
    allowedBlocks: ["wsuwp/hero"],
    orientation: "horizontal",
    renderAppender: false,
    __experimentalCaptureToolbars: true
  })), slideBlocks && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-gutenberg-hero-slider__controls"
  }, slideBlocks.map((b, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    key: `slide-${i}`,
    className: `wsu-gutenberg-hero-slider__control-container${selectedSlideIndex === i ? " is-selected" : ""}`
  }, slideBlocks.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-gutenberg-hero-slider__sub-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
    className: "wsu-gutenberg-hero-slider__sub-controls-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    showTooltip: true,
    label: "Move Left",
    icon: "arrow-left-alt2",
    isSmall: true,
    iconSize: 16,
    disabled: i === 0,
    onClick: () => moveBlock(b.clientId, i, i - 1)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    showTooltip: true,
    label: "Delete Slide",
    icon: "no-alt",
    isSmall: true,
    iconSize: 16,
    onClick: () => removeSlide(b.clientId)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    showTooltip: true,
    label: "Move Right",
    icon: "arrow-right-alt2",
    isSmall: true,
    disabled: i === slideBlocks.length - 1,
    onClick: () => moveBlock(b.clientId, i, i + 1)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    className: "wsu-gutenberg-hero-slider__select-control",
    onClick: () => selectSlide(b.clientId)
  }, b.attributes.title || "Slide " + (i + 1)))), slideBlocks.length < 6 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
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
/***/ (function() {

const el = wp.element.createElement;

// super hacky function to hide the toolbar on the hero slider blocks
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (heroSliderSave);

/***/ }),

/***/ "./blocks/wsuwp-hero/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-hero/editor/block.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
      default: "fade"
    },
    sliderDelay: {
      type: "integer",
      default: 5000
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


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



let heroStyles = [{
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    width: "124",
    height: "60",
    fill: "#4a4b4c"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "18.84",
    width: "50.06",
    height: "6.96",
    rx: "3.19",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "30.1",
    width: "60.28",
    height: "3.19",
    rx: "1.08",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "35.29",
    width: "60.28",
    height: "3.19",
    rx: "1.08",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "40.49",
    width: "37.68",
    height: "3.19",
    rx: "1.08",
    fill: "#fff"
  })),
  label: "Default",
  value: ""
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 60"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    width: "124",
    height: "60",
    fill: "#4a4b4c"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "6.74",
    y: "35.51",
    width: "73.82",
    height: "17.01",
    fill: "#231f20"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "31.69",
    width: "50.06",
    height: "6.96",
    rx: "3.19",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "11.94",
    y: "42.95",
    width: "60.28",
    height: "3.19",
    rx: "1.08",
    fill: "#fff"
  })),
  label: "Bold Caption",
  value: "caption"
}];
const Edit = props => {
  var _attributes$className, _attributes$sliderIma, _attributes$sliderIma2;
  let {
    className,
    isSelected,
    attributes,
    setAttributes
  } = props;
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelGeneralOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Set as Page Title",
    checked: attributes.headingTag === 'h1' ? true : false,
    onChange: isPageTitle => {
      let tag = isPageTitle ? 'h1' : 'div';
      setAttributes({
        headingTag: tag
      });
    },
    help: "Set Hero Banner Title to H1 and remove auto generated page title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Hero Banner Link",
    value: attributes.link ? attributes.link : '',
    onChange: link => setAttributes({
      link
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Photo Credits",
    value: attributes.photoCredit ? attributes.photoCredit : '',
    onChange: photoCredit => setAttributes({
      photoCredit
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: "Height",
    value: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(blockClasses, 'wsu-hero--size-'),
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
        className: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.addBlockClassName)(blockClasses, 'wsu-hero--size-', size)
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: "Background",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Background Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => setAttributes({
      backgroundType: val
    }),
    checked: attributes.backgroundVideo && !attributes.backgroundType ? 'video' : attributes.backgroundType,
    defaultChecked: "image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "image"
  }, "Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "video"
  }, "Video"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "slider"
  }, "Slider"))), (attributes.backgroundType === 'image' || !attributes.backgroundType && !attributes.backgroundVideo) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, attributes.imageSrc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    help: "Select where you would like the background to resize around."
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Focal Point Picker"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imageDimensions,
    value: attributes.imageFocalPoint,
    onChange: focalPoint => setAttributes({
      imageFocalPoint: focalPoint
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
    onSelect: media => setAttributes({
      imageId: media.id,
      imageSrc: media.url
    }),
    allowedTypes: ['image'],
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
        label: `${attributes.imageSrc ? 'Replace' : 'Choose'} Background Image`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), attributes.backgroundType === 'slider' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__.MultipleImagePicker, {
    label: "Slider Images",
    help: "Choose images to rotate through and select focal points by clicking the desired image.",
    onChange: images => setAttributes({
      sliderImages: images
    }),
    value: attributes.sliderImages
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: "Effect used when transitioning to the next slide."
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Effect"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => setAttributes({
      sliderEffect: val
    }),
    checked: attributes.sliderEffect,
    defaultChecked: "slide"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "fade"
  }, "Fade"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "slide"
  }, "Slide"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "stacked"
  }, "Stacked"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
    label: "Slider Delay",
    help: "Delay in milliseconds between slides.",
    value: attributes.sliderDelay,
    onChange: val => setAttributes({
      sliderDelay: val
    }),
    min: 100,
    max: 10000,
    step: 50
  })), (attributes.backgroundType === 'video' || attributes.backgroundVideo && !attributes.backgroundType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Background Video ID (Vimeo)",
    value: attributes.videoId ? attributes.videoId : '',
    onChange: videoId => setAttributes({
      videoId
    }),
    help: "Video ID only. Example: 76979871 from https://player.vimeo.com/video/76979871"
  }), attributes.videoId && (!attributes.videoTitle || !attributes.videoDescription) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_4__.RequiredAlertControl, null, "Video title and text description are required for the video to render."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Background Video Title",
    value: attributes.videoTitle ? attributes.videoTitle : '',
    onChange: videoTitle => setAttributes({
      videoTitle
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextareaControl, {
    label: "Background Video Text Description",
    value: attributes.videoDescription ? attributes.videoDescription : '',
    onChange: videoDescription => setAttributes({
      videoDescription
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: heroStyles,
    prefix: "wsu-hero--style-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-image-frame wsu-image-frame--fill"
  }, attributes.backgroundType === 'image' && attributes.imageSrc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: attributes.imageSrc
  }) || attributes.backgroundType === 'slider' && ((_attributes$sliderIma = attributes.sliderImages[0]) === null || _attributes$sliderIma === void 0 ? void 0 : _attributes$sliderIma.url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: (_attributes$sliderIma2 = attributes.sliderImages[0]) === null || _attributes$sliderIma2 === void 0 ? void 0 : _attributes$sliderIma2.url
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: getOverlayClasses()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-hero__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wsu-hero__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
  }), attributes.link && attributes.buttonText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 109.71 52.59"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "109.71",
      height: "52.59",
      style: {
        fill: '#6d6e71'
      }
    })),
    label: 'Default',
    value: ''
  }, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      style: {
        fill: '#6d6e71'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
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
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 124 60"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
      width: "124",
      height: "60",
      fill: "none"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle", {
      cx: "62",
      cy: "30",
      r: "26.71",
      fill: "#6d6e71"
    })),
    label: 'Round',
    value: 'round'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: imageStyles,
    prefix: "wsu-image--style-"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ImageFrameControl, props)));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-menu/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-menu/editor/block.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "wsu-gutenberg-menu-block",
    style: {}
  });
  const [menus, setMenus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Menu to Display",
    value: attributes.slug,
    options: menus,
    onChange: slug => setAttributes({
      slug: slug
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: 'Enable Custom Blocks',
    checked: attributes.custom,
    onChange: custom => setAttributes({
      custom
    }),
    help: 'Add custom blocks to menu'
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Menu CSS class(es)",
    value: attributes.menuClassname,
    onChange: menuClassname => setAttributes({
      menuClassname
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicon dashicons dashicons-menu wsu-gutenberg-menu-block__icon"
  }), " ", "Menu: ", attributes.slug, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.custom && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    templateLock: false
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-menu/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-menu/editor/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/wsuwp-news-cards/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-news-cards/editor/block.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "b"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
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
    },
    cardClassName: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-news-cards/editor/blockEditFilter.js":
/*!***********************************************************!*\
  !*** ./blocks/wsuwp-news-cards/editor/blockEditFilter.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && props.name == 'wsuwp/news-cards' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Show Feed Button",
      checked: attributes.showButton,
      onChange: showButton => {
        setAttributes({
          showButton
        });
      }
    }), attributes.showButton && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.ButtonControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Show Feed Heading",
      checked: attributes.showHeading,
      onChange: showHeading => {
        setAttributes({
          showHeading
        });
      }
    }), attributes.showHeading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.HeadingControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  useBlockProps,
  InspectorAdvancedControls
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_5__.PanelGeneralOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_5__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.HeadingTagControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "wsu-card-news__placeholder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "wsu-card-news__placeholder-message"
  }, "No Cards Found"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NewsCardDisplayOptions, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedPanel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Content Source"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: source => setAttributes({
      source
    }),
    checked: attributes.source,
    defaultChecked: "feed"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Radio, {
    value: "feed"
  }, "Feed"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Radio, {
    value: "select"
  }, "Select")))), attributes.source == 'feed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedPostTypeControl, {
    label: "Content Type",
    help: "Select content type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedTaxonomyControl, {
    label: "Taxonomy (Category, Tag, etc...)",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedTermControl, {
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
  })), attributes.source == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.PostPicker, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedCountControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedPanelAdvanced, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedUseAndLogicControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedOffsetControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_4__.FeedHostControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.RequireImageControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.RequireFirstImageControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Shown Posts",
    checked: attributes.hideShownPosts,
    onChange: hideShownPosts => {
      setAttributes({
        hideShownPosts
      });
    }
  }))), attributes.source == 'feed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Card Classes",
    value: attributes.cardClassName,
    onChange: cardClassName => setAttributes({
      cardClassName
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_6__.ApiRenderBlock, {
    attributes: queryAttrs,
    blockName: "wsuwp/news-cards"
  }, 'feed' === attributes.source && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FeedPlaceHolder, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-news-list/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-news-list/editor/block.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "b"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "a",
    "clip-path": "url(#b)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(2 2)",
    fill: "#fff",
    stroke: "#030000",
    "stroke-width": "2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z",
    stroke: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z",
    fill: "none"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "14",
    height: "10",
    rx: "2",
    transform: "translate(5 5)",
    fill: "#0a0000"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x2: "13",
    transform: "translate(5.5 16.5)",
    fill: "none",
    stroke: "#060000",
    "stroke-width": "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
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
    queryTerms: {
      type: 'array',
      default: []
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedPanel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedPostTypeControl, {
    label: "Post type",
    help: "Select post type to display",
    host: attributes.host || window.wsu.ROOT_URL,
    value: attributes.postType,
    onChange: postType => setAttributes({
      postType
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedTaxonomyControl, {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: taxonomy => setAttributes({
      taxonomy
    })
  }), attributes.taxonomy && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedTermControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedCountControl, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedPanelAdvanced, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedUseAndLogicControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedOffsetControl, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedHostControl, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__.ApiRenderBlock, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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




const Edit = _ref => {
  let {
    className,
    attributes,
    setAttributes
  } = _ref;
  const blockProps = useBlockProps({
    className: 'wsu-card wsu-card-news',
    style: {}
  });
  let queryAttrs = attributes;
  queryAttrs['hideLink'] = true;
  let newsPlaceholder;
  switch (attributes.type) {
    case 'card':
      newsPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardPlaceholder, null);
      break;
    case 'list':
      newsPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListPlaceholder, null);
      break;
    default:
      newsPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IndexPlaceholder, null);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelGeneralOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Header",
    value: attributes.headerText ? attributes.headerText : '',
    onChange: headerText => setAttributes({
      headerText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Header Link",
    value: attributes.headerLink ? attributes.headerLink : '',
    onChange: headerLink => setAttributes({
      headerLink
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Button Link",
    value: attributes.buttonLink ? attributes.buttonLink : '',
    onChange: buttonLink => setAttributes({
      buttonLink
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Caption",
    checked: attributes.hideCaption,
    onChange: hideCaption => {
      setAttributes({
        hideCaption
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Date",
    checked: attributes.hideDate,
    onChange: hideDate => {
      setAttributes({
        hideDate
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Image",
    checked: attributes.hideImage,
    onChange: hideImage => {
      setAttributes({
        hideImage
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Hide Shown Posts",
    checked: attributes.hideShownPosts,
    onChange: hideShownPosts => {
      setAttributes({
        hideShownPosts
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.PerRow, {
    label: "Cards Per Row",
    attributes: attributes,
    value: attributes.perRow ? attributes.perRow : '',
    onChange: perRow => setAttributes({
      perRow
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelInsertPost, {
    attributes: attributes,
    onChange: value => setAttributes({
      postIn: value
    }),
    postTypes: ['news_article', 'press_release', 'announcement', 'post', 'page'],
    placeholder: "Search posts..."
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelFeedPosts, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Require Images",
    checked: attributes.requireImage,
    onChange: requireImage => {
      setAttributes({
        requireImage
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Require First Image",
    checked: attributes.requireFirstImage,
    onChange: requireFirstImage => {
      setAttributes({
        requireFirstImage
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_3__.ApiRenderBlock, {
    attributes: queryAttrs,
    blockName: "wsuwp/news"
  }, newsPlaceholder)));
};
const CardPlaceholder = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-image-frame  wsu-image-frame--fixed-ratio"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")));
};
const IndexPlaceholder = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-image-frame  wsu-image-frame--fixed-ratio"
  }));
};
const ListPlaceholder = props => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal wsu-card--small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-card__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-title"
  }, "Lorem ipsum dolor sit amet"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-caption"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.")));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-news/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-news/editor/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnsSave);

/***/ }),

/***/ "./blocks/wsuwp-news/editor/variationCard.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-news/editor/variationCard.js ***!
  \***************************************************/
/***/ (function() {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.FontIconPickerControl, {
    label: "Icon",
    help: "",
    value: attributes.icon,
    onChange: val => setAttributes({
      icon: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: "Note Title",
    value: attributes.title ? attributes.title : "",
    onChange: title => setAttributes({
      title
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Use HTML <aside> tag",
    help: "Wraps the note in an aside tag instead of a div.",
    checked: attributes.useAsideTag,
    onChange: useAsideTag => {
      setAttributes({
        useAsideTag
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Show Title",
    checked: attributes.showTitle,
    onChange: showTitle => {
      setAttributes({
        showTitle
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Font Size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    defaultChecked: "default",
    onChange: val => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassName)(attributes, setAttributes, "wsu-note--size-", val),
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.getBlockClassNameValue)(attributes, "wsu-note--size-")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "default"
  }, "Default"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Radio, {
    value: "small"
  }, "Small"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#A60F2D",
    prefix: "wsu-note--border-"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, attributes.icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: `wsu-note__icon wsu-icon wsu-i-${attributes.icon}`
  }), attributes.showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
    className: "wsu-note__title",
    placeholder: "Note Title",
    multiline: false,
    allowedFormats: [],
    onChange: title => setAttributes({
      title: title
    }),
    value: attributes.title ? attributes.title : ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-note/editor/save.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-note/editor/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnSave);

/***/ }),

/***/ "./blocks/wsuwp-outline-header/editor/block.js":
/*!*****************************************************!*\
  !*** ./blocks/wsuwp-outline-header/editor/block.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    let value = (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_3__.getBlockClassNameValue)(attributes, 'wsu-decorator--style-', '');
    let name = 'None';
    decoratorStyles.forEach(style => {
      if (style.value === value) {
        name = style.label;
      }
    });
    return name;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Before Outline",
    value: attributes.before,
    onChange: before => setAttributes({
      before
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Outline",
    value: attributes.outline,
    onChange: outline => setAttributes({
      outline
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "After",
    value: attributes.after,
    onChange: after => setAttributes({
      after
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Tag",
    value: attributes.tag,
    onChange: tag => setAttributes({
      tag
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", blockProps, attributes.before, " ", attributes.outline, " ", attributes.after));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-pagetitle/editor/block.js":
/*!************************************************!*\
  !*** ./blocks/wsuwp-pagetitle/editor/block.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.66955 8.60874C8.46034 8.60874 7.38339 8.98662 6.58984 9.72348V5H3V19.0193H6.58984V14.0691C6.58984 12.3686 7.47786 11.6507 8.63039 11.6507C9.66955 11.6507 10.3119 12.2742 10.3119 13.7479V19.0193H13.9018V13.1622C13.9018 9.988 12.0691 8.60874 9.66955 8.60874Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const Edit = _ref => {
  let {
    className,
    isSelected,
    attributes,
    setAttributes
  } = _ref;
  const title = attributes.title ? attributes.title : select("core/editor").getEditedPostAttribute('title');
  const blockProps = useBlockProps({
    className: 'wsu-article-header',
    style: {}
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "wsu-article-header__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    tag: {
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
    focus_area_label: {
      type: "string",
      default: 'Focus Area'
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && props.name == 'wsuwp/people-list' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
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

const queryAttributes = ["count", "page", "nid", "classification", "university_category", "university_location", "university_organization", "tag", "photo_size", "profile_order", "query_logic"];
const filterOptions = ["classification", "organization", "location", "category", "tag", "search"];
const displayOptions = ["photo", "name", "title", "office", "email", "degree", "focus-area", "address", "phone", "website"];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [profiles, setProfiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function loadProfiles() {
      setLoading(true);

      // build url params based on attributes
      const params = queryAttributes.reduce(function (acc, curr, idx) {
        if (attributes[curr]) {
          const val = Array.isArray(attributes[curr]) ? getQueryAttributeSlugs(attributes[curr]) : attributes[curr];
          acc.push(curr.replace("_", "-") + "=" + val);
        }
        return acc;
      }, []).join("&");

      // make request
      const response = await fetch(apiEndpoint + params);
      if (!response.ok) {
        setLoading(false);
        return;
      }

      // update state
      const profilesJson = await response.json();
      setProfiles(JSON.parse(profilesJson));
      setLoading(false);
    }
    loadProfiles();
  }, queryAttributes.map(k => debouncedAttributes[k])); // only run on init and when query attributes are changed

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "People Directory Settings",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Number of Results",
    help: "Number of results per page. 'All' returns all profiles. Defaults to 10.",
    value: attributes.count,
    onChange: newval => setAttributes({
      count: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Network IDs",
    help: "Comma delimited list of people network ids",
    placeholder: "butch.cougar",
    value: attributes.nid,
    onChange: newval => setAttributes({
      nid: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Classification",
    help: "Display people by searching and selecting a classification",
    taxonomy: "classification",
    value: attributes.classification,
    onChange: newval => setAttributes({
      classification: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Category",
    help: "Display people by searching and selecting a university category",
    taxonomy: "wsuwp_university_category",
    value: attributes.university_category,
    onChange: newval => setAttributes({
      university_category: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Location",
    help: "Display people by searching and selecting a university location",
    taxonomy: "wsuwp_university_location",
    value: attributes.university_location,
    onChange: newval => setAttributes({
      university_location: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Organization",
    help: "Display people by searching and selecting a university organization",
    taxonomy: "wsuwp_university_org",
    value: attributes.university_organization,
    onChange: newval => setAttributes({
      university_organization: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "University Tag",
    help: "Display people by searching and selecting a university tag",
    taxonomy: "post_tag",
    value: attributes.tag,
    onChange: newval => setAttributes({
      tag: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Profile Order",
    help: "Comma delimited list of people network ids to sort them at the top of the list",
    placeholder: "butch.cougar",
    value: attributes.profile_order,
    onChange: newval => setAttributes({
      profile_order: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: "Require all terms",
    checked: attributes.query_logic === 'AND' ? true : false,
    onChange: query_logic => {
      let logic = query_logic ? 'AND' : 'IN';
      setAttributes({
        query_logic: logic
      });
    },
    help: "Only profiles matching all selected terms will display"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "People Display Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "wsu-people-list-block__checkboxlist",
    label: "Display Fields",
    help: "Fields to display for each profile."
  }, displayOptions.map((o, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    key: o,
    className: "wsu-people-list-block__checkboxlist-item",
    label: o.replace('-', ' '),
    checked: attributes.display_fields.indexOf(o) > -1,
    onChange: val => handleCheckboxListChange("display_fields", o, val)
  })))), attributes.display_fields.includes('focus-area') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Focus Area Label",
    placeholder: "Focus Area",
    value: attributes.focus_area_label,
    onChange: focus_area_label => setAttributes({
      focus_area_label
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: "Number of Columns",
    help: "Number of columns to display per row.",
    value: attributes.columns,
    onChange: newval => setAttributes({
      columns: newval
    }),
    min: 1,
    max: 4
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Website Link Text",
    help: "Link text to display for the website field when it is being output. Defaults to Website.",
    placeholder: "Website",
    value: attributes.website_link_text,
    onChange: newval => setAttributes({
      website_link_text: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Filter Display Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "wsu-people-list-block__checkboxlist",
    label: "Filters",
    help: "Filtering options to display on the page."
  }, filterOptions.map((o, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    key: o,
    className: "wsu-people-list-block__checkboxlist-item",
    label: o,
    checked: attributes.filters.indexOf(o) > -1,
    onChange: val => handleCheckboxListChange("filters", o, val)
  })))), attributes.filters.includes('category') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Category Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Category'",
    placeholder: "Filter by Category",
    value: attributes.category_filter_label,
    onChange: newval => setAttributes({
      category_filter_label: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Category Filter Terms",
    help: "Search and select terms to include in filters",
    taxonomy: "wsuwp_university_category,category",
    value: attributes.category_filter_terms,
    onChange: newval => setAttributes({
      category_filter_terms: newval
    })
  }))), attributes.filters.includes('classification') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Classification Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Classification'",
    placeholder: "Filter by Classification",
    value: attributes.classification_filter_label,
    onChange: newval => setAttributes({
      classification_filter_label: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Classification Filter Terms",
    help: "Search and select term values to include in filters",
    taxonomy: "classification",
    value: attributes.classification_filter_terms,
    onChange: newval => setAttributes({
      classification_filter_terms: newval
    })
  }))), attributes.filters.includes('location') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Location Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Location'",
    placeholder: "Filter by Location",
    value: attributes.location_filter_label,
    onChange: newval => setAttributes({
      location_filter_label: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Location Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "wsuwp_university_location",
    value: attributes.location_filter_terms,
    onChange: newval => setAttributes({
      location_filter_terms: newval
    })
  }))), attributes.filters.includes('organization') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Organization Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Organization'",
    placeholder: "Filter by Organization",
    value: attributes.organization_filter_label,
    onChange: newval => setAttributes({
      organization_filter_label: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Organization Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "wsuwp_university_org",
    value: attributes.organization_filter_terms,
    onChange: newval => setAttributes({
      organization_filter_terms: newval
    })
  }))), attributes.filters.includes('tag') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Tag Filter Label",
    help: "Label to display for filter. Defaults to 'Filter by Tag'",
    placeholder: "Filter by Tag",
    value: attributes.tag_filter_label,
    onChange: newval => setAttributes({
      tag_filter_label: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Tag Terms to Display",
    help: "Search and select term values to include in filters",
    taxonomy: "post_tag",
    value: attributes.tag_filter_terms,
    onChange: newval => setAttributes({
      tag_filter_terms: newval
    })
  }))), attributes.filters.includes('search') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Search Filter Label",
    help: "Label to display for filter. Defaults to 'Type to search'",
    placeholder: "Type to search",
    value: attributes.search_filter_label,
    onChange: newval => setAttributes({
      search_filter_label: newval
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_term_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "(Legacy) Exclude Terms from Filters",
    help: "Search and select terms to exclude from filters",
    taxonomy: "classification,wsuwp_university_category,wsuwp_university_location,wsuwp_university_org,post_tag,category",
    value: attributes.exclude_term_values,
    onChange: newval => setAttributes({
      exclude_term_values: newval
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list"
  }, attributes.filters.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list__filters"
  }, attributes.filters.filter(f => f !== "search").map((filter, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: "filter-" + index,
    className: "wsu-gutenberg-people-list__filter"
  }, attributes[filter + "_filter_label"] || "Filter by " + filter, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "wsu-gutenberg-people-list__filter-icon dashicons dashicons-arrow-down-alt2"
  }))), attributes.filters.includes("search") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: "filter-search",
    className: "wsu-gutenberg-people-list__filter"
  }, attributes["search_filter_label"], (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "wsu-gutenberg-people-list__filter-icon dashicons dashicons-search"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wsu-gutenberg-people-list__profiles wsu-gutenberg-people-list__profiles--per-row-${attributes.columns}`
  }, [...Array(attributes.columns)].map((e, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list__profile"
  }, attributes.display_fields.includes("photo") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list__profile-image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list__profile-content"
  }, attributes.display_fields.includes("name") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "wsu-gutenberg-people-list__profile-name"
  }, "Person Name"), attributes.display_fields.includes("title") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wsu-gutenberg-people-list__profile-title"
  }, "Position Title"), attributes.display_fields.includes("email") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "dashicons-before dashicons-email-alt wsu-gutenberg-people-list__profile-icon-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "butch.cougar@wsu.edu")), attributes.display_fields.includes("office") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "dashicons-before dashicons-location wsu-gutenberg-people-list__profile-icon-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Office Location")), attributes.display_fields.includes("phone") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "dashicons-before dashicons-phone wsu-gutenberg-people-list__profile-icon-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "555-555-5555")), attributes.display_fields.includes("website") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "dashicons-before dashicons-admin-links wsu-gutenberg-people-list__profile-icon-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.website_link_text)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "wsu-gutenberg-people-list__names-label"
  }, "Profiles to be displayed:"), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Loading..."), !loading && profiles.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
    className: "wsu-gutenberg-people-list__names"
  }, profiles.map((p, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: p.nid,
    className: "wsu-gutenberg-people-list__name",
    dangerouslySetInnerHTML: {
      __html: `${p.name}<br/>(${p.nid})`
    }
  }))))));
}

// useDebounce Hook - https://usehooks.com/useDebounce/
function useValueDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Cancel the timeout if value changes (also on delay change or unmount)
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [availableTerms, setAvailableTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value); // keep track of all terms for mapping later
  const [termSuggestions, setTermSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedTerms, setSelectedTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);
  const handleInputChange = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useDebounce)(updateSuggestions, 250);
  async function updateSuggestions(input) {
    var _abortController, _abortController2;
    if (input.length < 2) {
      return;
    }
    setIsLoading(true);

    // cancel existing requests and set up new abort controller
    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();

    // make request to terms api
    const params = `taxonomy=${props.taxonomy}&s=${input}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      url: apiEndpoint + params,
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    });

    // process results
    const results = JSON.parse(response);
    const suggestions = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.differenceBy)(results, selectedTerms, "term_id");
    if (suggestions.length > 0) {
      setTermSuggestions(suggestions.map(v => {
        return {
          label: v.name,
          value: v.term_id
        };
      }));
      setAvailableTerms([...availableTerms, ...(0,lodash__WEBPACK_IMPORTED_MODULE_3__.differenceBy)(results, availableTerms, "term_id")]);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gutenberg-people-list-term-selector"
  }, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-gutenberg-people-list-term-selector__selected_terms"
  }, selectedTerms.map((term, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: term.term_id,
      className: "wsu-gutenberg-people-list-term-selector__selected_term"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      class: "components-button wsu-gutenberg-people-list-term-selector__remove-btn has-text has-icon",
      onClick: () => removeTerm(term)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wsu-gutenberg-people-list-term-selector__remove-btn-text"
    }, term.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z",
    fill: "black"
  }))
}, {
  label: 'Halves',
  slug: 'halves',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z",
    fill: "black"
  }))
}, {
  label: 'Thirds',
  slug: 'thirds',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  }))
}, {
  label: 'Quarters',
  slug: 'quarters',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Right',
  slug: 'sidebar-right',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Left',
  slug: 'sidebar-left',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebars',
  slug: 'sidebars',
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
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
  const [spacingDefaults, setSpacingDefaults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_SPACING);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.FormatSelector, {
      options: layoutOptions,
      onSelect: layout => {
        setAttributes({
          layout
        });
      },
      title: "Select Layout"
    }));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.ColorClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_2__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_3__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (columnsSave);

/***/ }),

/***/ "./blocks/wsuwp-section/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/wsuwp-section/editor/block.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  attributes: {
    id: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/wsuwp-section/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-section/editor/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Full Width Background",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelAnimate, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/wsuwp-section/editor/save.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-section/editor/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "./blocks/wsuwp-stat/editor/block.js":
/*!*******************************************!*\
  !*** ./blocks/wsuwp-stat/editor/block.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    id: {
      type: 'string',
      default: ''
    },
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_style_options__WEBPACK_IMPORTED_MODULE_7__.Default, null),
  label: "Default",
  value: ""
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_style_options__WEBPACK_IMPORTED_MODULE_7__.CircleUnit, null),
  label: "Circle Left",
  value: "circle-left"
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_style_options__WEBPACK_IMPORTED_MODULE_7__.CircleBottom, null),
  label: "Circle Right",
  value: "circle-right"
}, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_style_options__WEBPACK_IMPORTED_MODULE_7__.CircleTop, null),
  label: "Circle Center",
  value: "circle-center"
}];
const edit = props => {
  const {
    className,
    attributes,
    setAttributes
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "wsu-stat",
    role: "statistic",
    style: {}
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "General",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Value",
    help: "",
    placeholder: "565",
    value: attributes.stat,
    onChange: val => setAttributes({
      stat: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Caption",
    help: "",
    placeholder: "Study Abroad Programs",
    value: attributes.caption,
    onChange: val => setAttributes({
      caption: val
    })
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.hasBlockClassName)(attributes, "wsu-stat--style-circle-left") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Unit",
    help: "",
    placeholder: "Million",
    value: attributes.unit,
    onChange: val => setAttributes({
      unit: val
    })
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.hasBlockClassName)(attributes, "wsu-stat--style-circle-") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_5__.FontIconPickerControl, {
    label: "Icon",
    help: "",
    value: attributes.icon,
    onChange: val => setAttributes({
      icon: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__.PanelStyleOptions, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    styles: statStyles,
    prefix: "wsu-stat--style-"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    className: "wsu-settings__base-control",
    help: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, "Size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalRadioGroup, {
    className: "wsu-gutenberg-button__radio-group",
    onChange: val => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.setClassName)(attributes.className, "wsu-stat--size-", val, setAttributes, "className"),
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.getBlockClassNameValue)(attributes.className, "wsu-stat--size-"),
    defaultChecked: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalRadio, {
    value: "xsmall"
  }, "XSmall"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalRadio, {
    value: "small"
  }, "Small"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalRadio, {
    value: ""
  }, "Default"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Display inline",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.hasBlockClassName)(attributes, "wsu-display--inline-block"),
    onChange: value => (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.setBlockClassNameBool)(attributes, setAttributes, "wsu-display--inline-block", value),
    help: ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__.PanelAnimate, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
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
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.hasBlockClassName)(attributes, "wsu-stat--style-circle-left") && attributes.unit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
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
  }), (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_6__.hasBlockClassName)(attributes, "wsu-stat--style-circle-") && attributes.icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: `wsu-stat__icon wsu-i-${attributes.icon}`
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./blocks/wsuwp-stat/editor/style-options.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-stat/editor/style-options.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleBottom": function() { return /* binding */ CircleBottom; },
/* harmony export */   "CircleTop": function() { return /* binding */ CircleTop; },
/* harmony export */   "CircleUnit": function() { return /* binding */ CircleUnit; },
/* harmony export */   "Default": function() { return /* binding */ Default; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function Default() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 318 80",
    style: {
      margin: "0.5em"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#CA1237",
    d: "M0 0h239.94v47H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#4D4D4D",
    d: "M0 64h318v16H0z"
  }));
}
function CircleTop() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 331 257",
    style: {
      margin: "0.5em"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "a",
    width: 118,
    height: 115,
    x: 172,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000",
    stroke: "#000",
    d: "M242.19 112.963c-64.4 8-73-45.334-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    stroke: "#A60F2D",
    strokeWidth: 2,
    mask: "url(#a)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m186.482 98.256 83-83M224.482 128.256l83-83M211.482 118.256l83-83M200.482 106.256l83-83M174.482 87.256l83-83M161.482 77.256l83-83M149.482 67.256l83-83"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 161,
    cy: 142,
    r: 115,
    fill: "#D9D9D9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#4D4D4D",
    d: "M117 195h201v18H117zM117 223h148v18H117z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#CA1237",
    d: "M0 67h331v64H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 75.5,
    cy: 211.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    d: "m76 199 2.919 8.983h9.445l-7.642 5.551 2.92 8.983L76 216.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L76 199Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C4C4C4",
    d: "M27 165h188v14H27z"
  }));
}
function CircleUnit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 322 250",
    style: {
      margin: "0.5em"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "a",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 176,
    y: 3,
    width: 146,
    height: 142
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M263.062 143.266c-80.104 9.951-90.802-56.388-84.582-90.18L225.124 5.82c33.17-6.427 98.763.622 95.777 80.228l-57.839 57.218Z",
    fill: "#000",
    stroke: "#000"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    mask: "url(#a)",
    stroke: "#A60F2D",
    strokeWidth: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m193.943 125.145 103.24-103.24M241.209 162.46l74-74m-90.17 61.561 103.24-103.24m-116.922 88.314 103.24-103.24m-135.581 79.606L282.257 8.222M162.846 99.024l103.24-103.24M147.92 86.585l103.24-103.24"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 177,
    cy: 130,
    r: 115,
    fill: "#D9D9D9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#CA1237",
    d: "M16 55h189v64H16zm16 93h80v18H32z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 132.5,
    cy: 20.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m133 8 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L133 25.966l-7.641 5.551 2.918-8.983-7.641-5.551h9.445L133 8Z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C4C4C4",
    d: "M0 187h135v14H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#4D4D4D",
    d: "M159 148h115v18H159zm0 28h102v18H159zm0 28h111v18H159zm0 28h91v18h-91z"
  }));
}
function CircleBottom() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 311 230",
    style: {
      margin: "0.5em"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 152,
    cy: 115,
    r: 115,
    fill: "#D9D9D9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#4D4D4D",
    d: "M102 29h201v18H102zm0 28h148v18H102z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#CA1237",
    d: "M138 139h173v64H138z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 47.5,
    cy: 70.5,
    r: 20.5,
    fill: "#C4C4C4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m48 58 2.919 8.983h9.445l-7.641 5.551 2.918 8.983L48 75.966l-7.641 5.551 2.919-8.983-7.642-5.551h9.445L48 58Z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C4C4C4",
    d: "M128 100h161v14H128z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "a",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 109,
    width: 118,
    height: 115
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M70.19 221.963c-64.4 8-73-45.333-68-72.5l37.5-38c26.666-5.167 79.4.5 77 64.5l-46.5 46Z",
    fill: "#000",
    stroke: "#000"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    mask: "url(#a)",
    stroke: "#A60F2D",
    strokeWidth: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m16.293 206.293 83-83m-45 113 83-83m-96 73 83-83m-94 71 83-83m-109 64 83-83m-96 73 83-83m-95 73 83-83"
  })));
}

/***/ }),

/***/ "./blocks/wsuwp-sticky-nav/editor/block.js":
/*!*************************************************!*\
  !*** ./blocks/wsuwp-sticky-nav/editor/block.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelDisplayOptions, {
    isOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: "Full Width Background",
    checked: (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.hasBlockClassName)(attributes, 'wsu-width--full'),
    onChange: fullWidth => {
      (0,_assets_src_js_partials_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_4__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-width--full', fullWidth);
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_3__.PanelColorOptions, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: backgroundColors,
    label: "Background Color",
    value: "#f2f2f2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.ColorClassControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    colors: borderColors,
    label: "Border Color",
    value: "#e6e6e6",
    prefix: "wsu-callout--color-"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.SpacingClassNameSelector, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
};
/* harmony default export */ __webpack_exports__["default"] = (sectionSave);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************************************!*\
  !*** ./assets/src/js/gutenberg-editor.js ***!
  \*******************************************/
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









































}();
/******/ })()
;
//# sourceMappingURL=gutenberg-editor.js.map