(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-invoice-preview"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_apps_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/apps/invoice-preview.scss */ "./resources/js/src/assets/sass/apps/invoice-preview.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'preview',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Invoice Preview'
    });
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_data();
    });
    var bind_data = function bind_data() {
      columns.value = [{
        key: 'id',
        label: 'S.NO'
      }, {
        key: 'title',
        label: 'ITEMS'
      }, {
        key: 'quantity',
        label: 'QTY'
      }, {
        key: 'price',
        label: 'PRICE',
        "class": 'text-end'
      }, {
        key: 'amount',
        label: 'AMOUNT',
        "class": 'text-end'
      }];
      items.value = [{
        id: 1,
        title: 'Calendar App Customization',
        quantity: 1,
        price: '120',
        amount: '120'
      }, {
        id: 2,
        title: 'Chat App Customization',
        quantity: 1,
        price: '230',
        amount: '230'
      }, {
        id: 3,
        title: 'Laravel Integration',
        quantity: 1,
        price: '405',
        amount: '405'
      }, {
        id: 4,
        title: 'Backend UI Design',
        quantity: 1,
        price: '2500',
        amount: '2500'
      }];
    };
    var print = function print() {
      window.print();
    };
    var __returned__ = {
      items: items,
      columns: columns,
      bind_data: bind_data,
      print: print,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_apps_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/apps/invoice-preview.scss */ "./resources/js/src/assets/sass/apps/invoice-preview.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
/* harmony import */ var usemodal_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! usemodal-vue3 */ "./node_modules/usemodal-vue3/index.mjs");
/* harmony import */ var vue3_signature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue3-signature */ "./node_modules/vue3-signature/dist/vue3-signature.es.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) { if (n.call(r, o)) return e.value = r[o], e.done = !1, e; } return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) { e.unshift(n); } return function t() { for (; e.length;) { if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; } return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) { "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); } }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'invoicePenjualan',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Invoice'
    });
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRoute)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_6__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var items_jasa = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var columns_jasa = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var nmPelanggan = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var alamatPelanggan = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var noNota = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var tglNota = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var discPenjualan = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var typeBayar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var termPenjualan = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var namaPenerima = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var isVisible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var invoiceId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var ttdPenerima = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_data();
      getInvoiceDetails();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      // You can add logic here if needed before the component is mounted
      invoiceId.value = store.getters.SetidNota;
    });
    var bind_data = function bind_data() {
      columns.value = [{
        key: 'kdBarang',
        label: 'CODE'
      }, {
        key: 'nmBarang',
        label: 'ITEMS'
      }, {
        key: 'hrgJual',
        label: 'HARGA'
      }, {
        key: 'qty',
        label: 'QTY',
        "class": 'text-end'
      }, {
        key: 'disc',
        label: 'Disc',
        "class": 'text-end'
      }, {
        key: 'totalJual',
        label: 'AMOUNT',
        "class": 'text-end'
      }];
      columns_jasa.value = [{
        key: 'kdJasa',
        label: 'CODE'
      }, {
        key: 'nmJasa',
        label: 'ITEMS'
      }, {
        key: 'biayaJasa',
        label: 'HARGA'
      }, {
        key: 'qtyjasa',
        label: 'QTY',
        "class": 'text-end'
      }, {
        key: 'totalJasa',
        label: 'AMOUNT',
        "class": 'text-end'
      }];
      // items.value = [
      //     { id: 1, title: 'Calendar App Customization', quantity: 1, price: '120', amount: '120' },
      //     { id: 2, title: 'Chat App Customization', quantity: 1, price: '230', amount: '230' },
      //     { id: 3, title: 'Laravel Integration', quantity: 1, price: '405', amount: '405' },
      //     { id: 4, title: 'Backend UI Design', quantity: 1, price: '2500', amount: '2500' },
      // ];
    };
    var print = function print() {
      window.print();
    };
    var openModal = function openModal() {
      // Logic to open the modal
      // console.log('Modal opened' + invoiceId.value);
      isVisible.value = true;
    };
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      count: 0,
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)"
      },
      disabled: false
    });
    var signature1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var save = function save(t) {
      console.log(signature1.value.save(t));
    };
    var clear = function clear() {
      signature1.value.clear();
    };
    var undo = function undo() {
      signature1.value.undo();
    };
    var addWaterMark = function addWaterMark() {
      signature1.value.addWaterMark({
        text: "mark text",
        // watermark text, > default ''
        font: "20px Arial",
        // mark font, > default '20px sans-serif'
        style: 'all',
        // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
        fillStyle: "red",
        // fillcolor, > default '#333'
        strokeStyle: "blue",
        // strokecolor, > default '#333'
        x: 100,
        // fill positionX, > default 20
        y: 200,
        // fill positionY, > default 20
        sx: 100,
        // stroke positionX, > default 40
        sy: 200 // stroke positionY, > default 40
      });
    };
    var handleDisabled = function handleDisabled() {
      state.disabled = !state.disabled;
    };
    var simpanPenerima = function simpanPenerima() {
      // Logic to save the recipient name
      store.dispatch('penerimaNota', {
        noNota: invoiceId.value,
        namaPenerima: namaPenerima.value,
        signature: signature1.value.save('image/jpeg')
      }).then(function (response) {
        isVisible.value = false;
        getInvoiceDetails;
      })["catch"](function (error) {
        console.error('Error saving recipient name:', error);
      });
      // console.log('Recipient name saved:', namaPenerima.value + ' ' + invoiceId.value);
    };
    var getInvoiceDetails = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // const response = await axios.get(`/api/invoices/${invoiceId.value}`);
                // const invoiceDetails = response.data;
                // items.value = invoiceDetails.items;
                console.log(invoiceId.value);
                _context.next = 4;
                return store.dispatch('GetDetailPenjualan', {
                  noNota: invoiceId.value
                }).then(function (response) {
                  items.value = store.getters.SdetailPenjualan[1];
                  items_jasa.value = store.getters.SdetailPenjualan[2];
                  nmPelanggan.value = store.getters.SdetailPenjualan[0][0].nmPelanggan;
                  alamatPelanggan.value = store.getters.SdetailPenjualan[0][0].almtPelanggan;
                  noNota.value = invoiceId.value;
                  tglNota.value = store.getters.SdetailPenjualan[0][0].tglPenjualan;
                  discPenjualan.value = store.getters.SdetailPenjualan[0][0].discPenjualan;
                  typeBayar.value = store.getters.SdetailPenjualan[0][0].typeBayar;
                  termPenjualan.value = store.getters.SdetailPenjualan[0][0].termPenjualan;
                  namaPenerima.value = store.getters.SdetailPenjualan[0][0].penerimaNota;
                  ttdPenerima.value = store.getters.SdetailPenjualan[0][0].ttdPenerima;
                  // console.log(nmPelanggan.value);
                  console.log(response);
                })["catch"](function (error) {
                  console.log(error);
                  router.push({
                    name: 'penjualan-barang'
                  });
                });
              case 4:
                _context.next = 9;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching invoice details:', _context.t0);
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));
      return function getInvoiceDetails() {
        return _ref2.apply(this, arguments);
      };
    }();
    var __returned__ = {
      route: route,
      store: store,
      router: router,
      items: items,
      items_jasa: items_jasa,
      columns: columns,
      columns_jasa: columns_jasa,
      nmPelanggan: nmPelanggan,
      alamatPelanggan: alamatPelanggan,
      noNota: noNota,
      tglNota: tglNota,
      discPenjualan: discPenjualan,
      typeBayar: typeBayar,
      termPenjualan: termPenjualan,
      namaPenerima: namaPenerima,
      isVisible: isVisible,
      invoiceId: invoiceId,
      ttdPenerima: ttdPenerima,
      bind_data: bind_data,
      print: print,
      openModal: openModal,
      state: state,
      signature1: signature1,
      save: save,
      clear: clear,
      undo: undo,
      addWaterMark: addWaterMark,
      handleDisabled: handleDisabled,
      simpanPenerima: simpanPenerima,
      getInvoiceDetails: getInvoiceDetails,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta;
      },
      get Modal() {
        return usemodal_vue3__WEBPACK_IMPORTED_MODULE_3__.Modal;
      },
      get Vue3Signature() {
        return vue3_signature__WEBPACK_IMPORTED_MODULE_4__["default"];
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_5__.useRouter;
      },
      get useRoute() {
        return vue_router__WEBPACK_IMPORTED_MODULE_5__.useRoute;
      },
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_6__.useStore;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_images_cork_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/cork-logo.png */ "./resources/js/src/assets/images/cork-logo.png");
/* harmony import */ var _assets_images_cork_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_cork_logo_png__WEBPACK_IMPORTED_MODULE_1__);


var _hoisted_1 = {
  "class": "layout-px-spacing"
};
var _hoisted_2 = {
  "class": "row invoice layout-top-spacing layout-spacing apps-invoice"
};
var _hoisted_3 = {
  "class": "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
};
var _hoisted_4 = {
  "class": "doc-container"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-xl-9"
};
var _hoisted_7 = {
  "class": "invoice-container"
};
var _hoisted_8 = {
  "class": "invoice-inbox"
};
var _hoisted_9 = {
  id: "ct",
  "class": ""
};
var _hoisted_10 = {
  "class": "invoice-00001"
};
var _hoisted_11 = {
  "class": "content-section"
};
var _hoisted_12 = {
  "class": "inv--product-table-section"
};
var _hoisted_13 = {
  "class": "table-responsive"
};
var _hoisted_14 = {
  "class": "table table-hover"
};
var _hoisted_15 = {
  "class": "text-end"
};
var _hoisted_16 = {
  "class": "text-end"
};
var _hoisted_17 = {
  "class": "col-xl-3"
};
var _hoisted_18 = {
  "class": "invoice-actions-btn"
};
var _hoisted_19 = {
  "class": "invoice-action-btn"
};
var _hoisted_20 = {
  "class": "row"
};
var _hoisted_21 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
var _hoisted_22 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "navbar-nav flex-row"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "page-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
    "class": "breadcrumb-one",
    "aria-label": "breadcrumb"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
    "class": "breadcrumb"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;"
  }, "Apps")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item active",
    "aria-current": "page"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Invoice Preview")])])])])])], -1 /* HOISTED */))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"inv--head-section inv--detail-section\"><div class=\"row\"><div class=\"col-sm-6 col-12 me-auto\"><div class=\"d-flex\"><img class=\"company-logo\" src=\"" + (_assets_images_cork_logo_png__WEBPACK_IMPORTED_MODULE_1___default()) + "\" alt=\"company\"><h3 class=\"in-heading align-self-center\">Cork Inc.</h3></div></div><div class=\"col-sm-6 text-sm-end\"><p class=\"inv-list-number\"><span class=\"inv-title\">Invoice : </span> <span class=\"inv-number\">#0001</span></p></div><div class=\"col-sm-6 align-self-center mt-3\"><p class=\"inv-street-addr\">XYZ Delta Street</p><p class=\"inv-email-address\">info@company.com</p><p class=\"inv-email-address\">(120) 456 789</p></div><div class=\"col-sm-6 align-self-center mt-3 text-sm-end\"><p class=\"inv-created-date\"><span class=\"inv-title\">Invoice Date : </span> <span class=\"inv-date\">20 Aug 2020</span></p><p class=\"inv-due-date\"><span class=\"inv-title\">Due Date : </span> <span class=\"inv-date\">26 Aug 2020</span></p></div></div></div><div class=\"inv--detail-section inv--customer-detail-section\"><div class=\"row\"><div class=\"col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center\"><p class=\"inv-to\">Invoice To</p></div><div class=\"col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info\"><h6 class=\"inv-title\">Payment Info:</h6></div><div class=\"col-xl-8 col-lg-7 col-md-6 col-sm-4\"><p class=\"inv-customer-name\">Jesse Cory</p><p class=\"inv-street-addr\">405 Mulberry Rd. Mc Grady, NC, 28649</p><p class=\"inv-email-address\">redq@company.com</p><p class=\"inv-email-address\">(128) 666 070</p></div><div class=\"col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1\"><div class=\"inv--payment-info\"><p><span class=\"inv-subtitle\">Bank Name:</span> <span>Bank of America</span></p><p><span class=\"inv-subtitle\">Account Number: </span> <span>1234567890</span></p><p><span class=\"inv-subtitle\">SWIFT code:</span> <span>VS70134</span></p><p><span class=\"inv-subtitle\">Country: </span> <span>United States</span></p></div></div></div></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.columns, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: item.key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item["class"]])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"inv--total-amounts\"><div class=\"row mt-4\"><div class=\"col-sm-5 col-12 order-sm-0 order-1\"></div><div class=\"col-sm-7 col-12 order-sm-1 order-0\"><div class=\"text-sm-end\"><div class=\"row\"><div class=\"col-sm-8 col-7\"><p class=\"\">Sub Total:</p></div><div class=\"col-sm-4 col-5\"><p class=\"\">$3155</p></div><div class=\"col-sm-8 col-7\"><p class=\"\">Tax Amount:</p></div><div class=\"col-sm-4 col-5\"><p class=\"\">$700</p></div><div class=\"col-sm-8 col-7\"><p class=\"discount-rate\">Discount : <span class=\"discount-percentage\">5%</span></p></div><div class=\"col-sm-4 col-5\"><p class=\"\">$10</p></div><div class=\"col-sm-8 col-7 grand-total-title\"><h4 class=\"\">Grand Total :</h4></div><div class=\"col-sm-4 col-5 grand-total-amount\"><h4 class=\"\">$3845</h4></div></div></div></div></div></div><div class=\"inv--note\"><div class=\"row mt-4\"><div class=\"col-sm-12 col-12 order-sm-0 order-1\"><p>Note: Thank you for doing Business with us.</p></div></div></div>", 2))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-3 col-sm-6"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-primary btn-send"
  }, "Send Invoice")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-secondary btn-print action-print",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.print();
    })
  }, "Print")]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-3 col-sm-6"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-success btn-download"
  }, "Download")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/apps/invoice/edit",
    "class": "btn btn-dark btn-edit"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit")]);
    }),
    _: 1 /* STABLE */
  })])])])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_images_wm_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/wm.png */ "./resources/js/src/assets/images/wm.png");
/* harmony import */ var _assets_images_wm_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_wm_png__WEBPACK_IMPORTED_MODULE_1__);


var _hoisted_1 = {
  "class": "layout-px-spacing"
};
var _hoisted_2 = {
  "class": "row invoice layout-top-spacing layout-spacing apps-invoice"
};
var _hoisted_3 = {
  "class": "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
};
var _hoisted_4 = {
  "class": "doc-container"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-xl-9"
};
var _hoisted_7 = {
  "class": "invoice-container"
};
var _hoisted_8 = {
  "class": "invoice-inbox"
};
var _hoisted_9 = {
  id: "ct",
  "class": ""
};
var _hoisted_10 = {
  "class": "invoice-00001"
};
var _hoisted_11 = {
  "class": "content-section"
};
var _hoisted_12 = {
  "class": "inv--head-section inv--detail-section"
};
var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-sm-7 align-self-center"
};
var _hoisted_15 = {
  "class": "inv-email-address"
};
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = {
  "class": "col-sm-5 align-self-center mt-3 text-sm-end"
};
var _hoisted_18 = {
  "class": "inv-list-number"
};
var _hoisted_19 = {
  "class": "inv-number"
};
var _hoisted_20 = {
  "class": "inv-created-date"
};
var _hoisted_21 = {
  "class": "inv-date"
};
var _hoisted_22 = {
  "class": "inv-created-date"
};
var _hoisted_23 = {
  "class": "inv-date"
};
var _hoisted_24 = {
  key: 0,
  "class": "inv--product-table-section"
};
var _hoisted_25 = {
  "class": "table-responsive"
};
var _hoisted_26 = {
  "class": "table table-hover"
};
var _hoisted_27 = {
  "class": "text-end"
};
var _hoisted_28 = {
  "class": "text-end"
};
var _hoisted_29 = {
  "class": "text-end"
};
var _hoisted_30 = {
  "class": "text-end"
};
var _hoisted_31 = {
  key: 1,
  "class": "inv--product-table-section"
};
var _hoisted_32 = {
  "class": "table-responsive"
};
var _hoisted_33 = {
  "class": "table table-hover"
};
var _hoisted_34 = {
  "class": "inv-email-address"
};
var _hoisted_35 = {
  "class": "text-end"
};
var _hoisted_36 = {
  "class": "text-end"
};
var _hoisted_37 = {
  "class": "text-end"
};
var _hoisted_38 = {
  "class": "inv--total-amounts"
};
var _hoisted_39 = {
  "class": "row mt-4"
};
var _hoisted_40 = {
  "class": "col-sm-5 col-12 order-sm-0 order-1"
};
var _hoisted_41 = ["src"];
var _hoisted_42 = {
  key: 0,
  "class": "col-sm-3 col-12 order-sm-0 order-1"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  "class": "inv-email-address"
};
var _hoisted_45 = {
  "class": "col-sm-4 col-12 order-sm-1 order-0"
};
var _hoisted_46 = {
  "class": "text-sm-end"
};
var _hoisted_47 = {
  "class": "row"
};
var _hoisted_48 = {
  "class": "col-sm-4 col-5"
};
var _hoisted_49 = {
  "class": "text-end"
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = {
  "class": "col-sm-4 col-5"
};
var _hoisted_52 = {
  "class": "text-end"
};
var _hoisted_53 = {
  "class": "col-sm-4 col-5"
};
var _hoisted_54 = {
  "class": "text-end"
};
var _hoisted_55 = {
  "class": "col-xl-3"
};
var _hoisted_56 = {
  "class": "invoice-actions-btn"
};
var _hoisted_57 = {
  "class": "invoice-action-btn"
};
var _hoisted_58 = {
  "class": "row"
};
var _hoisted_59 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
var _hoisted_60 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
var _hoisted_61 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
var _hoisted_62 = {
  "class": "col-xl-12 col-md-3 col-sm-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "navbar-nav flex-row"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "page-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
    "class": "breadcrumb-one",
    "aria-label": "breadcrumb"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
    "class": "breadcrumb"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;"
  }, "Apps")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item active",
    "aria-current": "page"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Invoice Preview")])])])])])], -1 /* HOISTED */))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-6 col-12 me-auto"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "company-logo",
    src: (_assets_images_wm_png__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "company"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3 class=\"in-heading align-self-center\">Cork Inc.</h3> ")])], -1 /* HOISTED */)), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-6 text-sm-end"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-street-addr"
  }, "Jln Raya Kutuh No.8 Tabanan - Bali", -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, "info@winmaxbali.id", -1 /* HOISTED */)), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, "+6285 9361 00511", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Term: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.typeBayar === '0' ? 'Cash' : 'Kredit') + " ", 1 /* TEXT */), $setup.typeBayar === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.termPenjualan) + " Hari", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, "Invoice : ", -1 /* HOISTED */)), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.noNota), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_20, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, "Invoice Date : ", -1 /* HOISTED */)), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date($setup.tglNota).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, " Kpd : ", -1 /* HOISTED */)), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.nmPelanggan), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.alamatPelanggan), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"inv-due-date\"><span class=\"inv-title\">Alamat : </span> <span class=\"inv-date\">Jln Kaswari no 77</span></p> ")])])]), $setup.items.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.columns, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: item.key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item["class"]])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.kdBarang), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.nmBarang), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.hrgJual).toLocaleString()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.disc).toLocaleString()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.totalJual).toLocaleString()), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.items_jasa.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.columns_jasa, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: item.key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item["class"]])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items_jasa, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.kdJasa), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.nmJasa) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.noteJasa), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.biayaJasa).toLocaleString()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.qtyJasa), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.totalJasa).toLocaleString()), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=".concat($setup.noNota),
    alt: "QR Code"
  }, null, 8 /* PROPS */, _hoisted_41), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invoice ini sudah di ttd secara digital oleh Swamerta Supplier"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terima kasih")], -1 /* HOISTED */))]), $setup.ttdPenerima ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Penerima,", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.ttdPenerima,
    alt: "Tanda Tangan Penerima",
    style: {
      "max-width": "100%",
      "max-height": "100px"
    }
  }, null, 8 /* PROPS */, _hoisted_43), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.namaPenerima), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-end"
  }, "Sub Total:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.items.reduce(function (sum, item) {
    return sum + Number(item.totalJual);
  }, 0).toLocaleString()), 1 /* TEXT */)]), $setup.items_jasa.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "discount-rate"
  }, "Sub Total Jasa")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.items_jasa.reduce(function (sum, item) {
    return sum + Number(item.totalJasa);
  }, 0).toLocaleString()), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-end"
  }, "Grand Total :")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((Number($setup.items.reduce(function (sum, item) {
    return sum + Number(item.totalJual);
  }, 0) - Number($setup.discPenjualan)) + $setup.items_jasa.reduce(function (sum, item) {
    return sum + Number(item.totalJasa);
  }, 0)).toLocaleString()), 1 /* TEXT */)])])])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Modal"], {
    visible: $setup.isVisible,
    "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
      return $setup.isVisible = $event;
    }),
    draggable: true,
    title: 'PENERIMA',
    showCancelButton: false,
    cancelButton: {
      text: 'cancel',
      onclick: function onclick() {
        $setup.isVisible = false;
      },
      loading: false
    },
    okButton: {
      text: 'SAVE',
      onclick: function onclick() {
        $setup.simpanPenerima();
      },
      loading: false
    },
    width: "60%"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": "namaPenerima",
        "class": "form-label"
      }, "Nama Penerima", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: "namaPenerima",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.namaPenerima = $event;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Masukkan nama penerima",
        autocomplete: "off"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.namaPenerima]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Vue3Signature"], {
        ref: "signature1",
        sigOption: $setup.state.option,
        w: '1280px',
        h: '400px',
        disabled: $setup.state.disabled,
        "class": "example"
      }, null, 8 /* PROPS */, ["sigOption", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.save('image/jpeg');
        })
      }, "Save"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: $setup.clear
      }, "Clear"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: $setup.undo
      }, "Undo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: $setup.handleDisabled
      }, "disabled")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["visible", "cancelButton", "okButton"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-primary btn-send",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.openModal();
    })
  }, "Penerima")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-secondary btn-print action-print",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.print();
    })
  }, "Print")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/laporan/penjualan-barang",
    "class": "btn btn-warning btn-print"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[23] || (_cache[23] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back")]);
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'editpenjualan',
      params: {
        kd_trans: $setup.invoiceId,
        startDate: $setup.tglNota
      }
    },
    "class": "btn btn-dark btn-edit"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit")]);
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"])])])])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.actions-btn-tooltip.tooltip {\n  opacity: 1;\n  top: -11px !important;\n}\n\n.actions-btn-tooltip .arrow:before {\n  border-top-color: #3b3f5c;\n}\n\n.actions-btn-tooltip .tooltip-inner {\n  background: #3b3f5c;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 30px;\n  box-shadow: 0px 5px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 4px 16px;\n}\n\n.invoice-container {\n  width: 100%;\n  padding: 0 5px;\n  margin: 0 auto;\n}\n\n.invoice-inbox {\n  padding: 0;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n  border-radius: 6px;\n}\n\n.invoice-inbox .inv-number {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  color: #888ea8;\n}\n\n.invoice-inbox .invoice-action svg {\n  cursor: pointer;\n  font-weight: 600;\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.invoice-inbox .invoice-action svg:not(:last-child) {\n  margin-right: 15px;\n}\n\n.invoice-inbox .invoice-action svg:hover {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n/*\n===================\n\n     Invoice\n\n===================\n*/\n/*    Inv head section   */\n.invoice .content-section .inv--head-section {\n  padding: 3px 35px;\n  margin-bottom: 4px;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.inv--customer-detail-section {\n  padding: 36px 35px;\n  padding-top: 0;\n}\n\n.invoice .content-section .inv--head-section h3.in-heading {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0e1726;\n  margin: 0;\n  margin-left: 12px;\n}\n\n.invoice .content-section .inv--head-section .company-logo {\n  height: 60px;\n}\n\n.invoice .content-section .inv--head-section div.company-info {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.invoice .content-section .inv--head-section div.company-info svg {\n  width: 42px;\n  height: 42px;\n  margin-right: 10px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.invoice .content-section .inv--head-section .inv-brand-name {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 0;\n  align-self: center;\n}\n\n.invoice .content-section .inv--detail-section .inv-to {\n  font-weight: 700;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice .content-section .inv--detail-section .inv-customer-name {\n  font-weight: 700;\n  margin-bottom: 2px;\n  font-size: 13px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-detail-title {\n  font-weight: 700;\n  margin-bottom: 0;\n  font-size: 13px;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-details {\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-street-addr, .invoice .content-section .inv--detail-section .inv-email-address {\n  font-weight: 600;\n  margin-bottom: 2px;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-title {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-number {\n  font-weight: 400;\n  font-size: 14px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date, .invoice .content-section .inv--detail-section .inv-due-date {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-title, .invoice .content-section .inv--detail-section .inv-due-date .inv-title {\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-date, .invoice .content-section .inv--detail-section .inv-due-date .inv-date {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--product-table-section {\n  padding: 3px 0;\n}\n\n.invoice .content-section .inv--product-table-section table {\n  margin-bottom: 0;\n}\n\n.invoice .content-section .inv--product-table-section thead tr {\n  border: none;\n}\n\n.invoice .content-section .inv--product-table-section th {\n  padding: 9px 22px;\n  font-size: 11px !important;\n  border: none;\n  border-top: 1px solid #e0e6ed;\n  border-bottom: 1px solid #e0e6ed;\n  color: #515365 !important;\n}\n\n.invoice .content-section .inv--product-table-section th:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section th:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section td {\n  color: #515365;\n  font-weight: 600;\n  border: none;\n  padding: 10px 25px;\n  vertical-align: top !important;\n}\n\n.invoice .content-section .inv--product-table-section tbody tr:nth-of-type(even) td {\n  background-color: #fafafa;\n}\n\n.invoice .content-section .inv--payment-info {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--payment-info .inv-title {\n  color: #4361ee;\n  font-weight: 600;\n  margin-bottom: 15px;\n  width: 65%;\n  margin-left: auto;\n}\n\n.invoice .content-section .inv--payment-info p {\n  margin-bottom: 0;\n  display: flex;\n  width: 65%;\n  margin-left: auto;\n  justify-content: space-between;\n}\n\n.invoice .content-section .inv--payment-info span {\n  font-weight: 500;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.invoice .content-section .inv--payment-info .inv-subtitle {\n  font-weight: 600;\n  font-size: 13px;\n  display: inline-block;\n  white-space: normal;\n  margin-right: 4px;\n}\n\n.invoice .content-section .inv--total-amounts {\n  padding: 0 35px;\n  margin-bottom: 25px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.invoice .content-section .inv--total-amounts .grand-total-title h4, .invoice .content-section .inv--total-amounts .grand-total-amount h4 {\n  position: relative;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 0;\n  padding: 0;\n  color: #0e1726;\n  display: inline-block;\n  letter-spacing: 1px;\n}\n\n/*    Inv detail section    */\n/*inv-list-number*/\n/*inv-created-date*/\n/*inv-due-date*/\n/*    Inv product table section    */\n/*inv--payment-info*/\n/*inv--total-amounts*/\n/*inv--note*/\n.inv--note {\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\n.inv--note p {\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n@media print {\n  body * {\n    visibility: hidden;\n  }\n  #ct {\n    visibility: visible;\n  }\n  #ct * {\n    visibility: visible;\n  }\n  .doc-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n}\n@page {\n  size: auto;\n  margin: 0mm;\n}\n/*\n===============================\n    Invoice Actions Button\n===============================\n*/\n.invoice-actions-btn {\n  padding: 25px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.invoice-actions-btn label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.invoice-actions-btn .invoice-action-btn a {\n  transform: none;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-edit {\n  width: 100%;\n}\n\n/* Invoice Actions -> action-btn */\n@media (max-width: 1199px) {\n  .invoice-actions-btn {\n    margin-top: 25px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 575px) {\n  .invoice .content-section .inv--payment-info .inv-title {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: auto;\n    margin-bottom: 6px;\n    width: auto;\n  }\n  .invoice .content-section .inv--payment-info p {\n    margin-left: 0;\n    margin-right: auto;\n    width: auto;\n    justify-content: flex-start;\n  }\n  .invoice .content-section .inv--payment-info .inv-subtitle {\n    min-width: 140px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 20px;\n  }\n  .invoice .content-section .inv--payment-info span {\n    white-space: normal;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue3-signature/dist/vue3-signature.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue3-signature/dist/vue3-signature.es.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,s=(e,i,o)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,n=(t,n)=>{for(var h in n||(n={}))e.call(n,h)&&s(t,h,n[h]);if(i)for(var h of i(n))o.call(n,h)&&s(t,h,n[h]);return t};
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */class g{constructor(t,e,i){this.x=t,this.y=e,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class _{constructor(t,e,i,o,s,n){this.startPoint=t,this.control2=e,this.control1=i,this.endPoint=o,this.startWidth=s,this.endWidth=n}static fromPoints(t,e){const i=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new _(t[1],i,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,i){const o=t.x-e.x,s=t.y-e.y,n=e.x-i.x,h=e.y-i.y,a=(t.x+e.x)/2,r=(t.y+e.y)/2,l=(e.x+i.x)/2,c=(e.y+i.y)/2,d=Math.sqrt(o*o+s*s),u=Math.sqrt(n*n+h*h),v=u/(d+u),m=l+(a-l)*v,p=c+(r-c)*v,_=e.x-m,y=e.y-p;return{c1:new g(a+_,r+y),c2:new g(l+_,c+y)}}length(){let t,e,i=0;for(let o=0;o<=10;o+=1){const s=o/10,n=this.point(s,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),h=this.point(s,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){const o=n-t,s=h-e;i+=Math.sqrt(o*o+s*s)}t=n,e=h}return i}point(t,e,i,o,s){return e*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*o*(1-t)*t*t+s*t*t*t}}class y{constructor(t,e={}){this.canvas=t,this.options=e,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let i,o,s,n=0,h=null;const a=()=>{n=Date.now(),h=null,i=t.apply(o,s),h||(o=null,s=[])};return function(...r){const l=Date.now(),c=e-(l-n);return o=this,s=r,c<=0||c>e?(h&&(clearTimeout(h),h=null),n=l,i=t.apply(o,s),h||(o=null,s=[])):h||(h=window.setTimeout(a,c)),i}}(y.prototype._strokeUpdate,this.throttle):y.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},i){const o=new Image,s=e.ratio||window.devicePixelRatio||1,n=e.width||this.canvas.width/s,h=e.height||this.canvas.height/s;this._reset(),o.onload=()=>{this._ctx.drawImage(o,0,0,n,h),i&&i()},o.onerror=t=>{i&&i(t)},o.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,i=t.clientY,o=this._createPoint(e,i),s=this._data[this._data.length-1],n=s.points,h=n.length>0&&n[n.length-1],a=!!h&&o.distanceTo(h)<=this.minDistance,r=s.color;if(!h||!h||!a){const t=this._addPoint(o);h?t&&this._drawCurve({color:r,curve:t}):this._drawDot({color:r,point:o}),n.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const i=this.canvas.getBoundingClientRect();return new g(t-i.left,e-i.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),i=_.fromPoints(e,t);return e.shift(),i}return null}_calculateCurveWidths(t,e){const i=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(i),s={end:o,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=o,s}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,i){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,i,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const i=this._ctx,o=e.endWidth-e.startWidth,s=2*Math.floor(e.length());i.beginPath(),i.fillStyle=t;for(let n=0;n<s;n+=1){const t=n/s,i=t*t,h=i*t,a=1-t,r=a*a,l=r*a;let c=l*e.startPoint.x;c+=3*r*t*e.control1.x,c+=3*a*i*e.control2.x,c+=h*e.endPoint.x;let d=l*e.startPoint.y;d+=3*r*t*e.control1.y,d+=3*a*i*e.control2.y,d+=h*e.endPoint.y;const u=Math.min(e.startWidth+h*o,this.maxWidth);this._drawCurveSegment(c,d,u)}i.closePath(),i.fill()}_drawDot({color:t,point:e}){const i=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(e.x,e.y,o),i.closePath(),i.fillStyle=t,i.fill()}_fromData(t,e,i){for(const o of t){const{color:t,points:s}=o;if(s.length>1)for(let i=0;i<s.length;i+=1){const o=s[i],n=new g(o.x,o.y,o.time);this.penColor=t,0===i&&this._reset();const h=this._addPoint(n);h&&e({color:t,curve:h})}else this._reset(),i({color:t,point:s[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/e,o=this.canvas.height/e,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width",this.canvas.width.toString()),s.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const i=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const o=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),i.setAttribute("stroke",t),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),s.appendChild(i)}}),(({color:t,point:e})=>{const i=document.createElement("circle"),o="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.setAttribute("r",o.toString()),i.setAttribute("cx",e.x.toString()),i.setAttribute("cy",e.y.toString()),i.setAttribute("fill",t),s.appendChild(i)}));const n=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${i} ${o}" width="${i}" height="${o}">`;let h=s.innerHTML;if(void 0===h){const t=document.createElement("dummy"),e=s.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));h=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(n+h+"</svg>")}}const x=["id","data-uid","disabled"];var w=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(n(n({},{name:"Vue3Signature"}),{props:{sigOption:{type:Object,default:()=>({backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"})},w:{type:String,default:"100%"},h:{type:String,default:"100%"},clearOnResize:{type:Boolean,default:!1},waterMark:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},defaultUrl:{type:String,default:""}},emits:["begin","end"],setup(t,{expose:e,emit:i}){const o=t,s={width:"100%",height:"100%"};let h=(0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({sig:void 0,option:n({backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"},o.sigOption),uid:"canvas"+Math.random()});(0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((()=>o.disabled),(t=>{t?h.sig.off():h.sig.on()}));const g=()=>{h.sig.clear()},_=t=>t?h.sig.toDataURL(t):h.sig.toDataURL(),w=t=>{h.sig.fromDataURL(t)},f=()=>h.sig.isEmpty(),E=t=>{if("[object Object]"!=Object.prototype.toString.call(t))throw new Error("Expected Object, got "+typeof t+".");{let e=document.getElementById(h.uid),i={text:t.text||"",x:t.x||20,y:t.y||20,sx:t.sx||40,sy:t.sy||40},o=e.getContext("2d");o.font=t.font||"20px sans-serif",o.fillStyle=t.fillStyle||"#333",o.strokeStyle=t.strokeStyle||"#333","all"==t.style?(o.fillText(i.text,i.x,i.y),o.strokeText(i.text,i.sx,i.sy)):"stroke"==t.style?o.strokeText(i.text,i.sx,i.sy):o.fillText(i.text,i.x,i.y),h.sig._isEmpty=!1}};return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)((()=>{(()=>{let t=document.getElementById(h.uid);function e(t){let e;f()||(e=_());let i=Math.max(window.devicePixelRatio||1,1);const s=RegExp(/px/);t.width=s.test(o.w)?Number(o.w.replace(/px/g,""))*i:t.offsetWidth*i,t.height=s.test(o.h)?Number(o.h.replace(/px/g,""))*i:t.offsetHeight*i,t.getContext("2d").scale(i,i),g(),!o.clearOnResize&&void 0!==e&&w(e),Object.keys(o.waterMark).length&&E(o.waterMark)}h.sig=new y(t,h.option),h.sig.onBegin=t=>i("begin"),h.sig.onEnd=t=>i("end"),window.addEventListener("resize",(()=>e(t))),e(t),""!==o.defaultUrl&&w(o.defaultUrl),o.disabled?h.sig.off():h.sig.on()})()})),e({save:_,clear:g,isEmpty:f,undo:()=>{let t=h.sig.toData();t&&(t.pop(),h.sig.fromData(t))},addWaterMark:E,fromDataURL:w}),(e,i)=>((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div",{style:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({width:t.w,height:t.h}),onTouchmove:i[0]||(i[0]=(0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((()=>{}),["prevent"]))},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas",{id:(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(h).uid,"data-uid":(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(h).uid,disabled:(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(h).disabled,style:s},null,8,x)],36))}}));var f,E=((f=w).install=t=>{t.component(f.name,f)},f);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (E);


/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./resources/js/src/assets/images/wm.png":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/wm.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/wm-2daaeddd816c95d74fdaeb0c23ba6806.png";

/***/ }),

/***/ "./resources/js/src/assets/sass/apps/invoice-preview.scss":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/invoice-preview.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./invoice-preview.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/invoice-preview.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_invoice_preview_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preview_vue_vue_type_template_id_529ef0d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=529ef0d3 */ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3");
/* harmony import */ var _preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_preview_vue_vue_type_template_id_529ef0d3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/apps/invoice/preview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./preview.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_template_id_529ef0d3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_template_id_529ef0d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./preview.vue?vue&type=template&id=529ef0d3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/invoice/preview.vue?vue&type=template&id=529ef0d3");


/***/ }),

/***/ "./resources/js/src/views/transaksi/invoicePenjualan.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/transaksi/invoicePenjualan.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invoicePenjualan_vue_vue_type_template_id_3949a1c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoicePenjualan.vue?vue&type=template&id=3949a1c0 */ "./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0");
/* harmony import */ var _invoicePenjualan_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoicePenjualan.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_MAX_Documents_GitHub_appStok_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_invoicePenjualan_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_invoicePenjualan_vue_vue_type_template_id_3949a1c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/transaksi/invoicePenjualan.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_invoicePenjualan_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_invoicePenjualan_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./invoicePenjualan.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_invoicePenjualan_vue_vue_type_template_id_3949a1c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_invoicePenjualan_vue_vue_type_template_id_3949a1c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./invoicePenjualan.vue?vue&type=template&id=3949a1c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/transaksi/invoicePenjualan.vue?vue&type=template&id=3949a1c0");


/***/ })

}]);