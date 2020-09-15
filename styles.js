(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.colors-dark-theme {\n  --theme-primary: #fca311;\n  --theme-primary-hover: #fdb643;\n  --theme-primary-pressed: #d78703;\n  --theme-secondary: #e5e5e5;\n  --theme-secondary-hover: white;\n  --theme-secondary-pressed: #cccccc;\n  --theme-on-primary: #000;\n  --theme-on-secondary: #000;\n  --theme-background: #292929;\n  --theme-surface: #121212;\n  --theme-on-background: #BBB;\n  --theme-on-surface: #BBB;\n  --theme-error: #b61827;\n  --theme-ok: #087f23;\n  --theme-warning: #fff59d;\n  --theme-info: #bbdefb;\n  --theme-on-error: #FFF;\n  --theme-on-ok: #FFF;\n  --theme-on-warning: #000;\n  --theme-on-info: #000;\n  --theme-header-elevation: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);\n  --theme-card-elevation: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);\n}\n.colors-light-theme {\n  --theme-primary: #E63946;\n  --theme-primary-hover: #ec6670;\n  --theme-primary-pressed: #d21a28;\n  --theme-secondary: #F1FAEE;\n  --theme-secondary-hover: white;\n  --theme-secondary-pressed: #d1eec7;\n  --theme-on-primary: ;\n  --theme-on-secondary: ;\n  --theme-background: #FFF;\n  --theme-surface: #F5F5F5;\n  --theme-on-background: #000;\n  --theme-on-surface: #000;\n  --theme-error: #b61827;\n  --theme-ok: #087f23;\n  --theme-warning: #fff59d;\n  --theme-info: #bbdefb;\n  --theme-on-error: #FFF;\n  --theme-on-ok: #FFF;\n  --theme-on-warning: #000;\n  --theme-on-info: #000;\n  --theme-header-elevation: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);\n  --theme-card-elevation: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Roboto\";\n  color: var(--theme-on-surface);\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n.error-msg {\n  background-color: var(--theme-error);\n  color: var(--theme-on-error);\n  padding: 10px;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/sass/_variables.scss"],"names":[],"mappings":"AAAA,8EAAA;AAGA;EC+EI,wBAAA;EACA,8BAAA;EACA,gCAAA;EACA,0BAAA;EACA,8BAAA;EACA,kCAAA;EACA,wBAAA;EACA,0BAAA;EAEA,2BAAA;EACA,wBAAA;EACA,2BAAA;EACA,wBAAA;EAEA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,qBAAA;EAEA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,qBAAA;EAEA,kIAAA;EACA,+HAAA;ADnFJ;AAjBA;EC2EI,wBAAA;EACA,8BAAA;EACA,gCAAA;EACA,0BAAA;EACA,8BAAA;EACA,kCAAA;EACA,oBAAA;EACA,sBAAA;EAEA,wBAAA;EACA,wBAAA;EACA,2BAAA;EACA,wBAAA;EAEA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,qBAAA;EAEA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,qBAAA;EAEA,kIAAA;EACA,+HAAA;AD1DJ;AAtCA;EACI,sBAAA;EACA,qBAAA;EACA,8BCwGe;AD/DnB;AAtCA;EACI,SAAA;EACA,UAAA;AAyCJ;AAtCA;EACI,oCCiGU;EDhGV,4BCiGa;EDhGb,aCqGM;EDpGN,kBCuGM;AD9DV","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import \"./sass/variables\";\n\n.colors-dark-theme {\n    @include theme_vars(\"dark\");\n}\n\n.colors-light-theme {\n    @include theme_vars(\"light\");\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Roboto';\n    color: $theme_on_surface;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.error-msg {\n    background-color: $theme_error;\n    color: $theme_on_error;\n    padding: $padding;\n    border-radius: $rounded;\n}","$darkPrimary: #fca311;\n$darkSecondary: #e5e5e5;\n\n$darkTheme: (\n    \"primary\": $darkPrimary,\n    \"primary-hover\": lighten($darkPrimary, 10%),\n    \"primary-pressed\": darken($darkPrimary, 10%),\n\n    \"secondary\":$darkSecondary,\n    \"secondary-hover\": lighten($darkSecondary, 10%),\n    \"secondary-pressed\": darken($darkSecondary, 10%),\n    \n    \"on-primary\":  #000,\n    \"on-secondary\": #000,\n\n    \"background\": #292929,\n    \"surface\": #121212,\n    \"on-background\": #BBB,\n    \"on-surface\": #BBB,\n\n    \"error\": #b61827,\n    \"ok\": #087f23,\n    \"warning\": #fff59d,\n    \"info\": #bbdefb,\n\n    \"on-error\": #FFF,\n    \"on-ok\": #FFF,\n    \"on-warning\": #000,\n    \"on-info\": #000,    \n);\n\n$elevations: (\n    \"header-elevation\": \"0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)\",\n    \"card-elevation\": \"0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)\"\n);\n\n$darkTheme: map-merge($darkTheme, $elevations);\n\n$lightPrimary:#E63946;\n$lightSecondary:#F1FAEE;\n\n$lightTheme: (\n    \"primary\": $lightPrimary,\n    \"primary-hover\": lighten($lightPrimary, 10%),\n    \"primary-pressed\": darken($lightPrimary, 10%),\n\n    \"secondary\":$lightSecondary,\n    \"secondary-hover\": lighten($lightSecondary, 10%),\n    \"secondary-pressed\": darken($lightSecondary, 10%),\n\n    \"background\": #FFF,\n    \"surface\": #F5F5F5,\n    \"on-background\": #000,\n    \"on-surface\": #000,\n\n    \"error\": #b61827,\n    \"ok\": #087f23,\n    \"warning\": #fff59d,\n    \"info\": #bbdefb,\n\n    \"on-error\": #FFF,\n    \"on-ok\": #FFF,\n    \"on-warning\": #000,\n    \"on-info\": #000,\n);\n\n$lightTheme: map-merge($lightTheme, $elevations);\n\n@function theme_data($name, $value){\n    @if $name == \"dark\" {\n        @return map-get($darkTheme, $value);\n    }\n    @return map-get($lightTheme, $value);\n}\n\n@mixin desktop-only {\n\t@media (min-width : 1024px) {\n\t\t@content;\n\t}\n}\n\n@mixin theme_vars($theme:'dark'){\n    --theme-primary: #{theme_data($theme, 'primary')}; \n    --theme-primary-hover: #{theme_data($theme, 'primary-hover')}; \n    --theme-primary-pressed: #{theme_data($theme, 'primary-pressed')};\n    --theme-secondary: #{theme_data($theme, 'secondary')}; \n    --theme-secondary-hover: #{theme_data($theme, 'secondary-hover')}; \n    --theme-secondary-pressed: #{theme_data($theme, 'secondary-pressed')}; \n    --theme-on-primary: #{theme_data($theme, 'on-primary')}; \n    --theme-on-secondary: #{theme_data($theme, 'on-secondary')}; \n\n    --theme-background: #{theme_data($theme, 'background')}; \n    --theme-surface: #{theme_data($theme, 'surface')}; \n    --theme-on-background: #{theme_data($theme, 'on-background')}; \n    --theme-on-surface: #{theme_data($theme, 'on-surface')}; \n\n    --theme-error: #{theme_data($theme, 'error')}; \n    --theme-ok: #{theme_data($theme, 'ok')}; \n    --theme-warning: #{theme_data($theme, 'warning')}; \n    --theme-info: #{theme_data($theme, 'info')}; \n\n    --theme-on-error: #{theme_data($theme, 'on-error')}; \n    --theme-on-ok: #{theme_data($theme, 'on-ok')}; \n    --theme-on-warning: #{theme_data($theme, 'on-warning')}; \n    --theme-on-info: #{theme_data($theme, 'on-info')}; \n\n    --theme-header-elevation: #{theme_data($theme, 'header-elevation')}; \n    --theme-card-elevation: #{theme_data($theme, 'card-elevation')};\n}\n\n$theme_primary: var(--theme-primary);\n$theme_primary_hover: var(--theme-primary-hover);\n$theme_primary_pressed: var(--theme-primary-pressed);\n$theme_on_primary: var(--theme-on-primary);\n\n$theme_background: var(--theme-background);\n$theme_surface: var(--theme-surface);\n$theme_on_background: var(--theme-on-background);\n$theme_on_surface: var(--theme-on-surface);\n\n$theme_error: var(--theme-error);\n$theme_on_error: var(--theme-on-error);\n\n$theme_header_elevation: var(--theme-header-elevation);\n$theme_card_elevation: var(--theme-card-elevation);\n\n$padding: 10px;\n$button_padding: $padding / 2;\n$margin: 10px;\n$rounded: 5px;\n\n$workarea: 1024px;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\to_github\colors-ng\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map