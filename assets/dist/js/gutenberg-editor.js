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
/* harmony import */ var _blocks_wsuwp_card_editor_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/wsuwp-card/editor/block */ "./blocks/wsuwp-card/editor/block.js");
/* harmony import */ var _blocks_wsuwp_callout_editor_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/wsuwp-callout/editor/block */ "./blocks/wsuwp-callout/editor/block.js");





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
  onChange
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: blockRendered
    }
  });
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

/***/ "./assets/src/js/partials/block-controls/blockControls.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/blockControls.js ***!
  \****************************************************************/
/*! exports provided: FormatSelector, PostPicker, FeedPostsControl, PerRow */
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
  const [searchString, setSearchString] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [searchResults, setSearchResults] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isLoading, setIsLoading] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [selectedItems, setSelectedItems] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [latestPosts, setLatestPosts] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [postTypeLabels, setPostTypeLabels] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
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

  const getLatestPost = async () => {
    const params = `count=5&post_types=${postTypes}`;
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wsu-gutenberg/v1/get-latest-posts-for-post-types?' + params,
      method: 'GET'
    });
    setLatestPosts(JSON.parse(response));
  };

  const getPostTypeLabels = async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wp/v2/types',
      method: 'GET'
    });
    setPostTypeLabels(response);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPostTypeLabels();
    getSelectedItems();
    getLatestPost();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
  }, [searchString]);
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
  })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    ref: searchInputRef,
    placeholder: placeholder,
    label: label,
    onChange: value => debouncedSetSearchString(value)
  }), isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), searchString.length ? !isLoading && !searchResults.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Items found')) : !isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SuggestionList, {
    attributes: attributes,
    title: `Search Results`,
    suggestions: searchResults,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) : postTypes.map(postType => {
    var _latestPosts$postType;

    return ((_latestPosts$postType = latestPosts[postType]) === null || _latestPosts$postType === void 0 ? void 0 : _latestPosts$postType.length) > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SuggestionList, {
      key: postType,
      attributes: attributes,
      title: `Latest ${postTypeLabels[postType].name}`,
      suggestions: latestPosts[postType],
      searchTerm: searchString,
      onItemSelect: handleItemSelection
    });
  }));
};

function SuggestionList(props) {
  const {
    attributes,
    title,
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: post.id,
      className: `${CSSNAMESPACE}__suggestion-list-item`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Suggestion, {
      onClick: () => onItemSelect(post),
      searchTerm: searchTerm,
      suggestion: post,
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
    id = ''
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
  }, suggestion.type)));
}

/* harmony default export */ __webpack_exports__["default"] = (PostPicker);

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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Display Options",
    initialOpen: false
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelDisplayOptions);

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
/*! exports provided: PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions */
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
  title: "Callout",
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

/***/ "./blocks/wsuwp-callout/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/wsuwp-callout/editor/edit.js ***!
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
const {
  InspectorControls,
  BlockControls,
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

const Edit = ({
  className,
  isSelected,
  attributes,
  setAttributes
}) => {
  const blockProps = useBlockProps({
    className: 'wsu-callout',
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  }));
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
/* harmony import */ var _variationNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variationNews */ "./blocks/wsuwp-card/editor/variationNews.js");
/* harmony import */ var _variationNews__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_variationNews__WEBPACK_IMPORTED_MODULE_3__);


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

/***/ "./blocks/wsuwp-card/editor/edit.js":
/*!******************************************!*\
  !*** ./blocks/wsuwp-card/editor/edit.js ***!
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
    blockName: "wsuwp/card"
  })));
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

const columnsSave = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (columnsSave);

/***/ }),

/***/ "./blocks/wsuwp-card/editor/variationNews.js":
/*!***************************************************!*\
  !*** ./blocks/wsuwp-card/editor/variationNews.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wp.blocks.registerBlockVariation('wsuwp/card', {
  name: 'news',
  title: 'News Card',
  attributes: {
    type: 'news',
    hideDate: false
  }
});

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
  attributes: {},
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
  InspectorControls,
  BlockControls,
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

const Edit = ({
  className,
  isSelected,
  attributes,
  setAttributes
}) => {
  const blockProps = useBlockProps({
    className: 'wsu-column',
    style: {}
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false
  }));
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");

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
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z",
    fill: "black"
  }))
}, {
  label: 'Halves',
  slug: 'halves',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z",
    fill: "black"
  }))
}, {
  label: 'Thirds',
  slug: 'thirds',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  }))
}, {
  label: 'Quarters',
  slug: 'quarters',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Right',
  slug: 'sidebar-right',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebar Left',
  slug: 'sidebar-left',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z",
    fill: "black"
  }))
}, {
  label: 'Sidebars',
  slug: 'sidebars',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
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

const getColumnsTemplate = template => {
  return template in layoutTemplates ? layoutTemplates[template] : [];
};

const Edit = ({
  className,
  attributes,
  setAttributes
}) => {
  const blockProps = useBlockProps({
    className: attributes.layout ? 'wsu-row wsu-row--' + attributes.layout : 'wsu-gutenberg-format-selector',
    style: {}
  });

  if (!attributes.layout) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__["FormatSelector"], {
      options: layoutOptions,
      onSelect: layout => {
        setAttributes({
          layout
        });
      },
      title: "Select Layout"
    }));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: attributes.layout in layoutTemplates ? layoutTemplates[attributes.layout] : [],
      templateLock: "insert",
      allowedBlocks: ['wsuwp/column']
    }));
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

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