webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_EditBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EditBtn */ "./components/EditBtn.js");
/* harmony import */ var _components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal_EditTags */ "./components/Modal_EditTags.js");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ "./sass/GalleryPage.module.scss");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/times-circle-solid.png */ "./images/times-circle-solid.png");
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/modalStyles */ "./utils/modalStyles.js");


var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\pages\\gallery.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













react_modal__WEBPACK_IMPORTED_MODULE_8___default.a.setAppElement("body");
function Gallery() {
  _s();

  var _this = this;

  // windowSize custom hook
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"])(); //state declarations

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      galleryImages = _useState[0],
      setGalleryImages = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      galleryTags = _useState2[0],
      setGalleryTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      clickedImage = _useState3[0],
      setClickedImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      clickedImageId = _useState4[0],
      setClickedImageId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState5[0],
      setIsOpen = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      uploadModalIsOpen = _useState6[0],
      setUploadModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      tagsModalIsOpen = _useState7[0],
      setTagsModal = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      logged = _useState8[0],
      setLogged = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      imagesToUpload = _useState9[0],
      setImagesToUpload = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clickedDone = _useState10[0],
      setClickedDone = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      stagedImageIndex = _useState11[0],
      setStagedImageIndex = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      preview = _useState12[0],
      setPreview = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      thumbs = _useState13[0],
      setThumbs = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addingImage = _useState14[0],
      setAddingImage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState15[0],
      setTags = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      inputKey = _useState16[0],
      setInputkey = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("All"),
      category = _useState17[0],
      setActiveCategory = _useState17[1]; //variable and function declarations


  var allTags = ["Residential", "Commercial", "Interior", "Exterior", "Cabinets"];
  var allCategories = ["All"].concat(allTags);
  var public_ids = [];
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({
    withCredentials: true
  }); //Modal functions

  function openModal() {
    setIsOpen(true);
  }

  function openUploadModal() {
    setUploadModal(true);
  }

  function openTagsModal() {
    setTagsModal(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeUploadModal() {
    setUploadModal(false);
  }

  function closeTagsModal() {
    setTagsModal(false);
  } //tagging functions


  function addTag(t, i) {
    if (!tags[i]) {
      setTags([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags), [tags[i] = [t]]));
    } else {
      var temp = tags[i];
      setTags(tags.map(function (arr, index) {
        if (index == i) {
          return arr[i] = temp.concat(t);
        } else {
          return arr;
        }
      }));
    }
  }

  function cancelTag(t, i) {
    setTags(tags.map(function (arr, index) {
      if (index === i) {
        return arr.filter(function (tag) {
          return tag !== t;
        });
      } else {
        return arr;
      }
    }));
  } // toast functions


  var successToast = function successToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success(" Upload Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.toastSuccess
    });
  };

  var errorToast = function errorToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Upload error, please refresh", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  var warningToast = function warningToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].warn("No images selected", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }; // file functions


  var resetInput = function resetInput() {
    var sign = Date.now();
    setInputkey(sign);
  };

  var onFileChange = function onFileChange(e) {
    setClickedDone(false);
    setAddingImage(true);
    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(imagesToUpload), [e.target.files[0]]));
    setStagedImageIndex(imagesToUpload.length - 1);
  };

  function deleteUpload(i) {
    if (thumbs.length > 1) {
      if (preview === thumbs[i]) {
        setPreview(thumbs[i - 1]);
      }

      var temp1 = thumbs.splice(i, 1);
      var temp2 = imagesToUpload.splice(i, 1);
      var temp3 = tags.splice(i, 1);
      setThumbs(thumbs.filter(function (el) {
        return el !== temp1;
      }));
      setImagesToUpload(imagesToUpload.filter(function (el) {
        return el !== temp2.splice(i, 1);
      }));
      setTags(tags.filter(function (t) {
        return t !== temp3;
      }));
      setAddingImage(false);
    } else {
      setTags([]);
      setThumbs([]);
      setImagesToUpload([]);
      setPreview(null);
      console.log("preview", preview);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!imagesToUpload.length) {
      return warningToast();
    }

    var formData = new FormData();
    imagesToUpload.forEach(function (e, i) {
      formData.append("images", e);
      formData.append("tags", tags[i]);
      console.log(tags[i]);
    });

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        console.log(pair[1], pair[2]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/upload", formData).then(function (res) {
      console.log(res);
      successToast();
      closeUploadModal();
      setPreview(null);
      setImagesToUpload([]);
    })["catch"](function (err) {
      console.log(err);
      errorToast();
    });
  } // Side effects


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (imagesToUpload.length && addingImage === true) {
      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);
      setPreview(objectUrl);
      setStagedImageIndex(imagesToUpload.length - 1);
      setAddingImage(false);
      console.log("***", imagesToUpload);
    }
  }, [imagesToUpload]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLogged(localStorage.getItem("rrandall-authorization"));
    axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/search").then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []); //initialize

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/", {}).then(function (res) {
      console.log(res.data);
      setGalleryImages(res.data.map(function (a, i) {
        return {
          id: i,
          url: a
        };
      }));
      return axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/");
    }).then(function (res) {
      console.log(res.data);
      public_ids = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data);
      console.log(public_ids);
      return axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags", {
        ids: res.data
      });
    }).then(function (res) {
      console.log("**tags", res.data);
      setGalleryTags(res.data);
    })["catch"](function (err) {
      console.log("cannot get tags", err);
      console.log(public_ids);
    })["catch"](function (err) {
      console.log(public_ids);
      console.log("cannot GET", err);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (galleryTags.length > 0) {
      setGalleryImages(galleryImages.map(function (a, i) {
        return {
          id: a.id,
          url: a.url,
          tags: galleryTags[i]
        };
      }));
    }
  }, [galleryTags]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
    integrity: "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["photoModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: uploadModalIsOpen,
    onRequestClose: closeUploadModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["uploadModalStyle"],
    contentLabel: "Modal",
    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  }, __jsx("input", {
    key: inputKey || "",
    type: "file",
    name: "imgCollection",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadInput,
    onChange: onFileChange,
    multiple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 19
    }
  }, "Tags"), !tags[stagedImageIndex] ? allTags.map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        addTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 27
      }
    }, t));
  }) : allTags.filter(function (t) {
    for (var i = 0; i < tags[stagedImageIndex].length; i++) {
      if (t === tags[stagedImageIndex][i]) {
        return false;
      }
    }

    return true;
  }).map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        addTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 29
      }
    }, t));
  }), __jsx("button", {
    disabled: !tags[stagedImageIndex] || clickedDone ? "disabled" : null,
    className: tags[stagedImageIndex] ? tags[stagedImageIndex].length === 0 ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.disable : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.doneBtn : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.disable,
    onClick: function onClick() {
      setThumbs([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbs), [preview]));
      setClickedDone(true);
      resetInput();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 19
    }
  }, tags[stagedImageIndex] && tags[stagedImageIndex].map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        cancelTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  })), thumbs.length > 0 && thumbs.map(function (p, i) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
      onClick: function onClick() {
        setStagedImageIndex(i);
        thumbs.length > 1 && setPreview(thumbs[i]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 19
      }
    }, __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.crossIcon,
      onClick: function onClick() {
        deleteUpload(i);
      },
      src: _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      alt: "exit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 21
      }
    }));
  }))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: tagsModalIsOpen,
    onRequestClose: closeTagsModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["tagsModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 9
    }
  }, allCategories.map(function (c, i) {
    return __jsx("div", {
      className: category === c ? "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagBtn, " ").concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTagBtn) : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagBtn,
      onClick: function onClick() {
        setActiveCategory(c);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryImage,
      alt: "picture at index ".concat(index),
      onClick: function onClick() {
        openModal();
        setClickedImage(el.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(public_ids[index]);
        console.log(clickedImageId);
        console.log("Public IDs");
        console.log(public_ids);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 25
      }
    })));
  }) : category !== "ALL" && galleryTags.length > 0 ? galleryImages.filter(function (el) {
    return el.tags.includes(category.toLowerCase());
  }).map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryImage,
      alt: "picture at index ".concat(index),
      onClick: function onClick() {
        openModal();
        setClickedImage(el.url);
        setClickedImageId(public_ids[index]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 25
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 27
      }
    })));
  }) : null))));
}

_s(Gallery, "narWsTbNinvDOz6KjM//1jPk0b0=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = Gallery;

var _c;

$RefreshReg$(_c, "Gallery");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJhbGxDYXRlZ29yaWVzIiwiY29uY2F0IiwicHVibGljX2lkcyIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsIm9wZW5UYWdzTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwibWFwIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJ0YWciLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b2FzdFN1Y2Nlc3MiLCJlcnJvclRvYXN0IiwiZXJyb3IiLCJ3YXJuaW5nVG9hc3QiLCJ3YXJuIiwicmVzZXRJbnB1dCIsInNpZ24iLCJEYXRlIiwibm93Iiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJkYXRhIiwiYSIsImlkIiwidXJsIiwiaWRzIiwicGhvdG9Nb2RhbFN0eWxlIiwidXBsb2FkTW9kYWxTdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJwcmV2aWV3cyIsInN0YWdpbmciLCJ0YWdzVGl0bGUiLCJ0YWdSb3ciLCJkaXNhYmxlIiwiZG9uZUJ0biIsIlN0YWdpbmdQaWNEaXYiLCJzdGFnaW5nUGljIiwiYWN0aXZlVGFncyIsInRhZ2dlZEljb24iLCJ0YWdnZWQiLCJtYWludGh1bWJzRGl2IiwidGh1bWJzRGl2IiwicGx1c0ljb24iLCJwIiwiY3Jvc3NJY29uIiwiY2FuY2VsSWNvbiIsInByZXZpZXdUaHVtYiIsInRhZ3NNb2RhbFN0eWxlIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJjYXRlZ29yaWVzIiwiYyIsInRhZ0J0biIsImFjdGl2ZVRhZ0J0biIsImdyaWQiLCJyb3dzIiwiaXRlbSIsImdhbGxlcnlJbWFnZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQztBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQWEsRUFBMUIsQ0FGZ0MsQ0FJaEM7O0FBSmdDLGtCQUtVQyxzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUt6QkMsYUFMeUI7QUFBQSxNQUtWQyxnQkFMVTs7QUFBQSxtQkFNTUYsc0RBQVEsQ0FBQyxFQUFELENBTmQ7QUFBQSxNQU16QkcsV0FOeUI7QUFBQSxNQU1aQyxjQU5ZOztBQUFBLG1CQU9RSixzREFBUSxDQUFDLEVBQUQsQ0FQaEI7QUFBQSxNQU96QkssWUFQeUI7QUFBQSxNQU9YQyxlQVBXOztBQUFBLG1CQVFZTixzREFBUSxDQUFDLEVBQUQsQ0FScEI7QUFBQSxNQVF6Qk8sY0FSeUI7QUFBQSxNQVFUQyxpQkFSUzs7QUFBQSxtQkFTQ1Isc0RBQVEsQ0FBQyxLQUFELENBVFQ7QUFBQSxNQVN6QlMsV0FUeUI7QUFBQSxNQVNaQyxTQVRZOztBQUFBLG1CQVVZVixzREFBUSxDQUFDLEtBQUQsQ0FWcEI7QUFBQSxNQVV6QlcsaUJBVnlCO0FBQUEsTUFVTkMsY0FWTTs7QUFBQSxtQkFXUVosc0RBQVEsQ0FBQyxLQUFELENBWGhCO0FBQUEsTUFXekJhLGVBWHlCO0FBQUEsTUFXUkMsWUFYUTs7QUFBQSxtQkFZSmQsc0RBQVEsQ0FBQyxJQUFELENBWko7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ZTtBQUNsQixXQUNFO0FBQUssZUFBUyxFQUFFZ0Isb0VBQUssQ0FBQ2dGLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBRTVELEVBQUUsQ0FBQ3lCLEdBRFY7QUFFRSxlQUFTLEVBQUU3QyxvRUFBSyxDQUFDaUYsWUFGbkI7QUFHRSxTQUFHLDZCQUFzQmpHLEtBQXRCLENBSEw7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFDYlosaUJBQVM7QUFDVHJDLHVCQUFlLENBQUNxRixFQUFFLENBQUN5QixHQUFKLENBQWY7QUFDQTVHLHlCQUFpQixDQUFDOEIsVUFBVSxDQUFDaUIsS0FBRCxDQUFYLENBQWpCO0FBQ0QsT0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFXRTtBQUFLLGFBQU8sRUFBRSxtQkFBTTtBQUNsQlYscUJBQWE7QUFDYnZDLHVCQUFlLENBQUNxRixFQUFFLENBQUN5QixHQUFKLENBQWY7QUFDQyxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQVhGLENBREY7QUFvQkQsR0F6QkgsQ0FEQSxHQTJCQSxJQXRETixDQURGLENBekJGLENBaExGLENBREY7QUF1UUQ7O0dBOWhCdUJ2SCxPO1VBRVRFLDZEOzs7S0FGU0YsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LmY3MmEyMjViZjRhNDk3OWQ3MmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdEJ0blwiO1xyXG5pbXBvcnQgRWRpdFRhZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvdGltZXMtY2lyY2xlLXNvbGlkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmltcG9ydCB7IHBob3RvTW9kYWxTdHlsZSwgdXBsb2FkTW9kYWxTdHlsZSwgdGFnc01vZGFsU3R5bGUgfSBmcm9tIFwiLi4vdXRpbHMvbW9kYWxTdHlsZXNcIjtcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoXCJib2R5XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcclxuICAvLyB3aW5kb3dTaXplIGN1c3RvbSBob29rXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgLy9zdGF0ZSBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBbZ2FsbGVyeUltYWdlcywgc2V0R2FsbGVyeUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dhbGxlcnlUYWdzLCBzZXRHYWxsZXJ5VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjbGlja2VkSW1hZ2VJZCwgc2V0Q2xpY2tlZEltYWdlSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzTW9kYWxJc09wZW4sIHNldFRhZ3NNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkRG9uZSwgc2V0Q2xpY2tlZERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdGFnZWRJbWFnZUluZGV4LCBzZXRTdGFnZWRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aHVtYnMsIHNldFRodW1ic10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FkZGluZ0ltYWdlLCBzZXRBZGRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnB1dEtleSwgc2V0SW5wdXRrZXldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG5cclxuICAvL3ZhcmlhYmxlIGFuZCBmdW5jdGlvbiBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBhbGxUYWdzID0gW1xyXG4gICAgXCJSZXNpZGVudGlhbFwiLFxyXG4gICAgXCJDb21tZXJjaWFsXCIsXHJcbiAgICBcIkludGVyaW9yXCIsXHJcbiAgICBcIkV4dGVyaW9yXCIsXHJcbiAgICBcIkNhYmluZXRzXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFtcIkFsbFwiXS5jb25jYXQoYWxsVGFncyk7XHJcblxyXG4gIHZhciBwdWJsaWNfaWRzID0gW107XHJcblxyXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICAvL01vZGFsIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5VcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VVcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vdGFnZ2luZyBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFnKHQsIGkpIHtcclxuICAgIGlmICghdGFnc1tpXSkge1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCAodGFnc1tpXSA9IFt0XSldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSB0YWdzW2ldO1xyXG4gICAgICBzZXRUYWdzKFxyXG4gICAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFycltpXSA9IHRlbXAuY29uY2F0KHQpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbFRhZyh0LCBpKSB7XHJcbiAgICBzZXRUYWdzKFxyXG4gICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSB0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9hc3QgZnVuY3Rpb25zXHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiIFVwbG9hZCBTdWNjZXNzXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgY2xhc3NOYW1lOiBzdHlsZS50b2FzdFN1Y2Nlc3MsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgZXJyb3JUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5lcnJvcihcIlVwbG9hZCBlcnJvciwgcGxlYXNlIHJlZnJlc2hcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC53YXJuKFwiTm8gaW1hZ2VzIHNlbGVjdGVkXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAvLyBmaWxlIGZ1bmN0aW9uc1xyXG4gIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2lnbiA9IERhdGUubm93KCk7XHJcbiAgICBzZXRJbnB1dGtleShzaWduKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRG9uZShmYWxzZSk7XHJcbiAgICBzZXRBZGRpbmdJbWFnZSh0cnVlKTtcclxuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcclxuICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVXBsb2FkKGkpIHtcclxuICAgIGlmICh0aHVtYnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gdGh1bWJzW2ldKSB7XHJcbiAgICAgICAgc2V0UHJldmlldyh0aHVtYnNbaSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wMSA9IHRodW1icy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAyID0gaW1hZ2VzVG9VcGxvYWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMyA9IHRhZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBzZXRUaHVtYnModGh1bWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMSkpO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDIuc3BsaWNlKGksIDEpKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRUYWdzKHRhZ3MuZmlsdGVyKCh0KSA9PiB0ICE9PSB0ZW1wMykpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgc2V0VGh1bWJzKFtdKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInByZXZpZXdcIiwgcHJldmlldyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWltYWdlc1RvVXBsb2FkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gd2FybmluZ1RvYXN0KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VzVG9VcGxvYWQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRhZ3NcIiwgdGFnc1tpXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhZ3NbaV0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0sIHBhaXJbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3NUb2FzdCgpO1xyXG4gICAgICAgIGNsb3NlVXBsb2FkTW9kYWwoKTtcclxuICAgICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGVycm9yVG9hc3QoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTaWRlIGVmZmVjdHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGggJiYgYWRkaW5nSW1hZ2UgPT09IHRydWUpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZFtpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxXVxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcmV2aWV3KG9iamVjdFVybCk7XHJcbiAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCIqKipcIiwgaW1hZ2VzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9zZWFyY2hcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vaW5pdGlhbGl6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCIsXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgICByZXMuZGF0YS5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGksIHVybDogYSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHB1YmxpY19pZHMgPSBbLi4ucmVzLmRhdGFdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY19pZHMpO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3RhZ3NcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWRzOiByZXMuZGF0YSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKnRhZ3NcIiwgcmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlUYWdzKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IHRhZ3NcIiwgZXJyKTsgY29uc29sZS5sb2cocHVibGljX2lkcyl9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY19pZHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW5ub3QgR0VUXCIsIGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGdhbGxlcnlUYWdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0R2FsbGVyeUltYWdlcyhcclxuICAgICAgICBnYWxsZXJ5SW1hZ2VzLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgaWQ6IGEuaWQsIHVybDogYS51cmwsIHRhZ3M6IGdhbGxlcnlUYWdzW2ldIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbZ2FsbGVyeVRhZ3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SLlJhbmRhbGwgR2FsbGVyeTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICBzdHlsZT17cGhvdG9Nb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17Y2xpY2tlZEltYWdlfVxyXG4gICAgICAgICAgYWx0PVwiZ2FsbGVyeSBtb2RhbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNsaWNrZWRJbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3VwbG9hZE1vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZVVwbG9hZE1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt1cGxvYWRNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgICBpZD17c3R5bGUudXBsb2FkTW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtpbnB1dEtleSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1nQ29sbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5zdWJtaXRCdG59PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlVwbG9hZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3ID8gc3R5bGUucHJldmlld3MgOiBudWxsfT5cclxuICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdGFnaW5nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50YWdzfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50YWdzVGl0bGV9PlRhZ3M8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7IXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICA/IGFsbFRhZ3MubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhbGxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA8IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9PT0gdGFnc1tzdGFnZWRJbWFnZUluZGV4XVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAhdGFnc1tzdGFnZWRJbWFnZUluZGV4XSB8fCBjbGlja2VkRG9uZSA/IFwiZGlzYWJsZWRcIiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc3R5bGUuZGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuZG9uZUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGh1bWJzKFsuLi50aHVtYnMsIHByZXZpZXddKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWREb25lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEb25lXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU3RhZ2luZ1BpY0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuc3RhZ2luZ1BpY31cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInN0YWdpbmcgcHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmVUYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnc1tzdGFnZWRJbWFnZUluZGV4XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGltZXNgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50YWdnZWR9Pnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW50aHVtYnNEaXZ9PlxyXG4gICAgICAgICAgICAgIHt0aHVtYnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGUtdXBsb2FkXCIgY2xhc3M9XCJjdXN0b20tZmlsZS11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BZGQgTW9yZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXMgZmEtcGx1cyAke3N0eWxlLnBsdXNJY29ufWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZS11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt0aHVtYnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGh1bWJzLm1hcCgocCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50aHVtYnNEaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRodW1icy5sZW5ndGggPiAxICYmIHNldFByZXZpZXcodGh1bWJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jcm9zc0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVwbG9hZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhbmNlbEljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3VGh1bWJ9IHNyYz17cH0gdGFiSW5kZXg9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17dGFnc01vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZVRhZ3NNb2RhbH1cclxuICAgICAgICBzdHlsZT17dGFnc01vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEVkaXRUYWdzIGltZz17Y2xpY2tlZEltYWdlfSBpZD17Y2xpY2tlZEltYWdlSWR9Lz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVBhZ2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cclxuICAgICAgICB7bG9nZ2VkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRCdG59IG9uQ2xpY2s9e29wZW5VcGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICB7YWxsQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gY1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7c3R5bGUudGFnQnRufSAke3N0eWxlLmFjdGl2ZVRhZ0J0bn1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS50YWdCdG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkoYyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJvd3N9PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPT09IFwiQWxsXCJcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVGFnc01vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZUlkKHB1YmxpY19pZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlB1YmxpYyBJRHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHVibGljX2lkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0QnRuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBjYXRlZ29yeSAhPT0gXCJBTExcIiAmJiBnYWxsZXJ5VGFncy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ3MuaW5jbHVkZXMoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlSWQocHVibGljX2lkc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9