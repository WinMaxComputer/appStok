(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth-login-boxed"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_authentication_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/authentication/auth-boxed.scss */ "./resources/js/src/assets/sass/authentication/auth-boxed.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) { if (n.call(r, o)) return e.value = r[o], e.done = !1, e; } return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) { e.unshift(n); } return function t() { for (; e.length;) { if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; } return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) { "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); } }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'login_boxed',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Login Boxed'
    });
    var pwd_type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('password');
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var set_pwd_type = function set_pwd_type() {
      if (pwd_type.value === 'password') {
        pwd_type.value = 'text';
      } else {
        pwd_type.value = 'password';
      }
    };
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      email: '',
      password: ''
    });
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();
    // console.log(form.value.email)

    var login = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store.dispatch('LogIn', form.value).then(function (response) {
                  // console.log('result: ', response)
                  router.push({
                    path: '/barang'
                  });
                })["catch"](function (error) {
                  // console.log('error: ', error)
                  return;
                });
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function login() {
        return _ref2.apply(this, arguments);
      };
    }();
    var __returned__ = {
      pwd_type: pwd_type,
      store: store,
      set_pwd_type: set_pwd_type,
      form: form,
      router: router,
      route: route,
      login: login,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get axios() {
        return axios__WEBPACK_IMPORTED_MODULE_5__["default"];
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter;
      },
      get useRoute() {
        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute;
      },
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_3__.useStore;
      },
      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_images_winmax_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/winmax.png */ "./resources/js/src/assets/images/winmax.png");
/* harmony import */ var _assets_images_winmax_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_winmax_png__WEBPACK_IMPORTED_MODULE_1__);


var _hoisted_1 = {
  "class": "form auth-boxed"
};
var _hoisted_2 = {
  "class": "form-container outer"
};
var _hoisted_3 = {
  "class": "form-form"
};
var _hoisted_4 = {
  "class": "form-form-wrap"
};
var _hoisted_5 = {
  "class": "form-container"
};
var _hoisted_6 = {
  "class": "form-content"
};
var _hoisted_7 = {
  "class": "text-start"
};
var _hoisted_8 = {
  "class": "form"
};
var _hoisted_9 = {
  id: "username-field",
  "class": "field-wrapper input"
};
var _hoisted_10 = {
  id: "password-field",
  "class": "field-wrapper input mb-2"
};
var _hoisted_11 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_12 = ["type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"media\"><div class=\"w-img\"><img src=\"" + (_assets_images_winmax_png__WEBPACK_IMPORTED_MODULE_1___default()) + "\" class=\"img-fluid\" alt=\"img-fluid\"></div></div><h1 class=\"\">Sign In</h1><p class=\"\">Log in to your account to continue.</p>", 3)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "username"
  }, "USERNAME", -1 /* HOISTED */)), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-user"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.email = $event;
    }),
    "class": "form-control",
    placeholder: "e.g John_Doe"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "password"
  }, "PASSWORD", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/auth/pass-recovery-boxed",
    "class": "forgot-pass-link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Forgot Password?")]);
    }),
    _: 1 /* STABLE */
  })]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-lock"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.pwd_type,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.password = $event;
    }),
    "class": "form-control",
    placeholder: "Password"
  }, null, 8 /* PROPS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.form.password]]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: $setup.set_pwd_type,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    id: "toggle-password",
    "class": "feather feather-eye"
  }, _cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }, null, -1 /* HOISTED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-sm-flex justify-content-between"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "field-wrapper"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-primary w-100 mb-4 me-2",
    onClick: $setup.login
  }, "Log In"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-success mb-2 me-1\" @click=\"kompliment()\">kompliment</button> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"signup-link\">Not registered ? <router-link to=\"/auth/register-boxed\">Create an account</router-link></p> ")])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n}\n\n.auth-boxed {\n  background: #fff;\n}\n\n.auth-boxed .form-form {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  margin: 0 auto;\n}\n\n.auth-boxed .form-form .form-form-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  align-self: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n.auth-boxed .form-form .form-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  width: 100%;\n  min-height: 100%;\n}\n\n.auth-boxed .form-form .form-container .form-content {\n  display: block;\n  width: 100%;\n  padding: 25px;\n  background: #fff;\n  text-align: center;\n  border-radius: 15px;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.002), 0 0.2px 0px rgba(0, 0, 0, 0.003), 0 0.4px 0px rgba(0, 0, 0, 0.004), 0 0.6px 0px rgba(0, 0, 0, 0.004), 0 0.9px 0px rgba(0, 0, 0, 0.005), 0 1.2px 0px rgba(0, 0, 0, 0.006), 0 1.8px 0px rgba(0, 0, 0, 0.006), 0 2.6px 0px rgba(0, 0, 0, 0.007), 0 3.9px 0px rgba(0, 0, 0, 0.008), 0 7px 0px rgba(0, 0, 0, 0.01);\n}\n\n.auth-boxed .form-form .form-container .form-content h1 {\n  font-size: 32px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-container .form-content > p {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta {\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta img {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-right: 15px;\n  border: 4px solid #e0e6ed;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta div {\n  align-self: center;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta p {\n  font-size: 31px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap h1 .brand-name {\n  color: #3b3f5c;\n  font-weight: 600;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link {\n  font-size: 14px;\n  color: #3b3f5c;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.register {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 25px;\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.recovery {\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link a {\n  color: #4361ee;\n  border-bottom: 1px solid;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper {\n  width: 100%;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input {\n  padding: 11px 0px 16px 0;\n  border-bottom: none;\n  position: relative;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input:focus {\n  border: 1px solid #000;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass p {\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .logged-in-user-name {\n  font-size: 37px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper label {\n  font-size: 10px;\n  font-weight: 700;\n  color: #3b3f5c;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition {\n  margin-bottom: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition label {\n  font-size: 14px;\n  color: #888ea8;\n  padding-left: 31px;\n  font-weight: 100;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition a {\n  color: #4361ee;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-user {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-lock {\n  top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign {\n  top: 47px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign.register {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg:not(.feather-eye) {\n  position: absolute;\n  left: 12px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 20px;\n  height: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-eye {\n  position: absolute;\n  top: 49px;\n  right: 13px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 17px;\n  cursor: pointer;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 6px;\n  min-width: 50px;\n  max-width: 635px;\n  width: 100%;\n  transition: all 0.2s ease-in-out 0s;\n  color: #3b3f5c;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 13px 35px 13px 46px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input::-webkit-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-ms-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-moz-placeholder {\n  color: #bfc9d4;\n  font-size: 14px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper button.btn {\n  align-self: center;\n  width: 100%;\n  padding: 11px 14px;\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper a.forgot-pass-link {\n  font-weight: 600;\n  color: #888ea8;\n  display: block;\n  letter-spacing: 1px;\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator {\n  top: 2px;\n  border: 1px solid #bfc9d4;\n  background-color: #f1f2f3;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator:after {\n  top: 54%;\n}\n\n.auth-boxed .new-control.new-checkbox.checkbox-primary > input:checked ~ span.new-control-indicator {\n  border: none;\n}\n\n.auth-boxed .form-form .form-form-wrap form .division {\n  text-align: center;\n  font-size: 13px;\n  margin: 35px 0 38px 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social {\n  text-align: center;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a {\n  background: transparent;\n  box-shadow: none;\n  border: 1px solid #e0e6ed;\n  padding: 12px 10px;\n  width: 181px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb {\n  margin-right: 15px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb svg,\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb .brand-name {\n  color: #4361ee;\n}\n\n@media (max-width: 991px) {\n  .auth-boxed .form-form {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-form-wrap {\n    min-width: auto;\n    margin: 0 auto;\n  }\n  .auth-boxed .form-form .form-container .form-content {\n    border-radius: 15px;\n  }\n}\n@media (max-width: 575px) {\n  .auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass {\n    margin-bottom: 28px;\n  }\n  .auth-boxed .form-form .form-form-wrap form .social a.social-fb, .auth-boxed .form-form .form-form-wrap form .social a.social-github {\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    display: block;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .auth-boxed .form-form .form-form-wrap {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-container {\n    height: 100%;\n  }\n}\n@supports (-ms-ime-align: auto) {\n  .auth-boxed .form-form .form-form-wrap {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/winmax.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/winmax.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/winmax-90e19e7f41d823ab49c83617de39c94d.png";

/***/ }),

/***/ "./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!*********************************************************************!*\
  !*** ./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./auth-boxed.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=template&id=eb6bc012 */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012");
/* harmony import */ var _login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/auth/login_boxed.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=template&id=eb6bc012 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012");


/***/ })

}]);