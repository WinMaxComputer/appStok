(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-invoice-preview"],{

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
/* harmony import */ var qrcode_vue3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qrcode-vue3 */ "./node_modules/qrcode-vue3/dist/index.es.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'html2pdf.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__.useRoute)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_8__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
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
    var jthTempo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_data();
      getInvoiceDetails();
    });
    var generatePDF = function generatePDF() {
      var element = document.querySelector('.invoice-container');
      if (!element) return;
      var opt = {
        margin: 0.5,
        filename: "invoice-".concat(noNota.value, ".pdf"),
        image: {
          type: 'jpeg',
          quality: 0.98
        },
        html2canvas: {
          scale: 2,
          useCORS: true
        },
        jsPDF: {
          unit: 'in',
          format: 'a4',
          orientation: 'portrait'
        }
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'html2pdf.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().set(opt).from(element).save();
    };
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
        key: 'satuanBarang',
        label: 'Satuan',
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
        getInvoiceDetails();
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
                  jthTempo.value = store.getters.SdetailPenjualan[0][0].jthTempo;
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
      jthTempo: jthTempo,
      generatePDF: generatePDF,
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
      get QRCodeVue3() {
        return qrcode_vue3__WEBPACK_IMPORTED_MODULE_5__["default"];
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_7__.useRouter;
      },
      get useRoute() {
        return vue_router__WEBPACK_IMPORTED_MODULE_7__.useRoute;
      },
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_8__.useStore;
      },
      get html2pdf() {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'html2pdf.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  "class": "col-sm-6 text-sm-end"
};
var _hoisted_15 = {
  "class": "col-sm-7 align-self-center"
};
var _hoisted_16 = {
  "class": "inv-email-address"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  "class": "col-sm-5 align-self-center mt-3 text-sm-end"
};
var _hoisted_19 = {
  "class": "inv-list-number"
};
var _hoisted_20 = {
  "class": "inv-number"
};
var _hoisted_21 = {
  "class": "inv-created-date"
};
var _hoisted_22 = {
  "class": "inv-date"
};
var _hoisted_23 = {
  "class": "inv-created-date"
};
var _hoisted_24 = {
  "class": "inv-date"
};
var _hoisted_25 = {
  key: 0,
  "class": "inv--product-table-section"
};
var _hoisted_26 = {
  "class": "table-responsive"
};
var _hoisted_27 = {
  "class": "table table-hover"
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
  "class": "text-end"
};
var _hoisted_32 = {
  key: 1,
  "class": "inv--product-table-section"
};
var _hoisted_33 = {
  "class": "table-responsive"
};
var _hoisted_34 = {
  "class": "table table-hover"
};
var _hoisted_35 = {
  "class": "inv-email-address"
};
var _hoisted_36 = {
  "class": "text-end"
};
var _hoisted_37 = {
  "class": "text-end"
};
var _hoisted_38 = {
  "class": "text-end"
};
var _hoisted_39 = {
  "class": "inv--total-amounts"
};
var _hoisted_40 = {
  "class": "row mt-4"
};
var _hoisted_41 = {
  "class": "col-sm-3 col-12 order-sm-0 order-1"
};
var _hoisted_42 = {
  key: 0
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  key: 2,
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
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3 class=\"in-heading align-self-center\">Cork Inc.</h3> ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["QRCodeVue3"], {
    width: 50,
    height: 50,
    value: "{{ noNota }}",
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'H'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0
    },
    dotsOptions: {
      type: 'square',
      color: '#000'
    },
    backgroundOptions: {
      color: '#ffffff'
    }
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-street-addr"
  }, "Jln Raya Kutuh No.8 Tabanan - Bali", -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, "info@the-swand.com", -1 /* HOISTED */)), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, "+6285 9361 00511", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Term: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.typeBayar === '0' ? 'Cash' : 'Kredit') + " ", 1 /* TEXT */), $setup.typeBayar === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, "Tempo " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date($setup.jthTempo).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, "Invoice : ", -1 /* HOISTED */)), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.noNota), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_21, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, "Invoice Date : ", -1 /* HOISTED */)), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date($setup.tglNota).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "inv-title"
  }, " Kpd : ", -1 /* HOISTED */)), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.nmPelanggan), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.alamatPelanggan), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"inv-due-date\"><span class=\"inv-title\">Alamat : </span> <span class=\"inv-date\">Jln Kaswari no 77</span></p> ")])])]), $setup.items.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.columns, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: item.key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item["class"]])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.kdBarang), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.nmBarang), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.hrgJual).toLocaleString()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.satuanBarang), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.totalJual).toLocaleString()), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.items_jasa.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.columns_jasa, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: item.key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([item["class"]])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.items_jasa, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.kdJasa), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.nmJasa) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.noteJasa), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.biayaJasa).toLocaleString()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.qtyJasa), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(item.totalJasa).toLocaleString()), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-5 col-12 order-sm-0 order-1"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Rek BCA : 7724022244"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" An : Ni Putu Ita Liantika Oktia Dewi")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "inv-email-address"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invoice ini sudah di ttd secara digital oleh Swamerta Supplier"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terima kasih")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [$setup.ttdPenerima ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_42, "Penerima,")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.ttdPenerima ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    src: $setup.ttdPenerima,
    alt: "Tanda Tangan Penerima",
    style: {
      "max-width": "100%",
      "max-height": "100px"
    }
  }, null, 8 /* PROPS */, _hoisted_43)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.ttdPenerima ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.namaPenerima), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-end"
  }, "Sub Total:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.items.reduce(function (sum, item) {
    return sum + Number(item.totalJual);
  }, 0).toLocaleString()), 1 /* TEXT */)]), $setup.items_jasa.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "discount-rate"
  }, "Sub Total Jasa")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.items_jasa.reduce(function (sum, item) {
    return sum + Number(item.totalJasa);
  }, 0).toLocaleString()), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm-8 col-7"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-end"
  }, "Grand Total :")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((Number($setup.items.reduce(function (sum, item) {
    return sum + Number(item.totalJual);
  }, 0) - Number($setup.discPenjualan)) + $setup.items_jasa.reduce(function (sum, item) {
    return sum + Number(item.totalJasa);
  }, 0)).toLocaleString()), 1 /* TEXT */)])])])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Modal"], {
    visible: $setup.isVisible,
    "onUpdate:visible": _cache[1] || (_cache[1] = function ($event) {
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
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
        w: '600px',
        h: '380px',
        disabled: $setup.state.disabled,
        "class": "example"
      }, null, 8 /* PROPS */, ["sigOption", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.openModal();
    })
  }, "Penerima")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-secondary btn-print action-print",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.print();
    })
  }, "Print")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "btn btn-success btn-download",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.generatePDF();
    })
  }, "Download")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/laporan/penjualan-barang",
    "class": "btn btn-warning btn-print"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back")]);
    }),
    _: 1 /* STABLE */
  })]), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-3 col-sm-6"
  }, null, -1 /* HOISTED */))])])])])])])])])]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.actions-btn-tooltip.tooltip {\n  opacity: 1;\n  top: -11px !important;\n}\n\n.actions-btn-tooltip .arrow:before {\n  border-top-color: #3b3f5c;\n}\n\n.actions-btn-tooltip .tooltip-inner {\n  background: #3b3f5c;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 30px;\n  box-shadow: 0px 5px 15px 1px rgba(113, 106, 202, 0.2);\n  padding: 4px 16px;\n}\n\n.invoice-container {\n  width: 100%;\n  padding: 0 5px;\n  margin: 0 auto;\n}\n\n.invoice-inbox {\n  padding: 0;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n  border-radius: 6px;\n}\n\n.invoice-inbox .inv-number {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  color: #888ea8;\n}\n\n.invoice-inbox .invoice-action svg {\n  cursor: pointer;\n  font-weight: 600;\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.invoice-inbox .invoice-action svg:not(:last-child) {\n  margin-right: 15px;\n}\n\n.invoice-inbox .invoice-action svg:hover {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n/*\n===================\n\n     Invoice\n\n===================\n*/\n/*    Inv head section   */\n.invoice .content-section .inv--head-section {\n  padding: 3px 35px;\n  margin-bottom: 4px;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.inv--customer-detail-section {\n  padding: 36px 35px;\n  padding-top: 0;\n}\n\n.invoice .content-section .inv--head-section h3.in-heading {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0e1726;\n  margin: 0;\n  margin-left: 12px;\n}\n\n.invoice .content-section .inv--head-section .company-logo {\n  height: 60px;\n}\n\n.invoice .content-section .inv--head-section div.company-info {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.invoice .content-section .inv--head-section div.company-info svg {\n  width: 42px;\n  height: 42px;\n  margin-right: 10px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.invoice .content-section .inv--head-section .inv-brand-name {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 0;\n  align-self: center;\n}\n\n.invoice .content-section .inv--detail-section .inv-to {\n  font-weight: 700;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice .content-section .inv--detail-section .inv-customer-name {\n  font-weight: 700;\n  margin-bottom: 2px;\n  font-size: 13px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-detail-title {\n  font-weight: 700;\n  margin-bottom: 0;\n  font-size: 13px;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-details {\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.invoice .content-section .inv--detail-section .inv-street-addr, .invoice .content-section .inv--detail-section .inv-email-address {\n  font-weight: 600;\n  margin-bottom: 2px;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-title {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.invoice .content-section .inv--detail-section .inv-list-number .inv-number {\n  font-weight: 400;\n  font-size: 14px;\n  color: #4361ee;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date, .invoice .content-section .inv--detail-section .inv-due-date {\n  margin-bottom: 2px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-title, .invoice .content-section .inv--detail-section .inv-due-date .inv-title {\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.invoice .content-section .inv--detail-section .inv-created-date .inv-date, .invoice .content-section .inv--detail-section .inv-due-date .inv-date {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--product-table-section {\n  padding: 3px 0;\n}\n\n.invoice .content-section .inv--product-table-section table {\n  margin-bottom: 0;\n}\n\n.invoice .content-section .inv--product-table-section thead tr {\n  border: none;\n}\n\n.invoice .content-section .inv--product-table-section th {\n  padding: 9px 22px;\n  font-size: 11px !important;\n  border: none;\n  border-top: 1px solid #e0e6ed;\n  border-bottom: 1px solid #e0e6ed;\n  color: #515365 !important;\n}\n\n.invoice .content-section .inv--product-table-section th:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section th:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:first-child {\n  padding-left: 35px;\n}\n\n.invoice .content-section .inv--product-table-section tr td:last-child {\n  padding-right: 35px;\n}\n\n.invoice .content-section .inv--product-table-section td {\n  color: #515365;\n  font-weight: 600;\n  border: none;\n  padding: 10px 25px;\n  vertical-align: top !important;\n}\n\n.invoice .content-section .inv--product-table-section tbody tr:nth-of-type(even) td {\n  background-color: #fafafa;\n}\n\n.invoice .content-section .inv--payment-info {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.invoice .content-section .inv--payment-info .inv-title {\n  color: #4361ee;\n  font-weight: 600;\n  margin-bottom: 15px;\n  width: 65%;\n  margin-left: auto;\n}\n\n.invoice .content-section .inv--payment-info p {\n  margin-bottom: 0;\n  display: flex;\n  width: 65%;\n  margin-left: auto;\n  justify-content: space-between;\n}\n\n.invoice .content-section .inv--payment-info span {\n  font-weight: 500;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.invoice .content-section .inv--payment-info .inv-subtitle {\n  font-weight: 600;\n  font-size: 13px;\n  display: inline-block;\n  white-space: normal;\n  margin-right: 4px;\n}\n\n.invoice .content-section .inv--total-amounts {\n  padding: 0 35px;\n  margin-bottom: 25px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #ebedf2;\n}\n\n.invoice .content-section .inv--total-amounts .grand-total-title h4, .invoice .content-section .inv--total-amounts .grand-total-amount h4 {\n  position: relative;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 0;\n  padding: 0;\n  color: #0e1726;\n  display: inline-block;\n  letter-spacing: 1px;\n}\n\n/*    Inv detail section    */\n/*inv-list-number*/\n/*inv-created-date*/\n/*inv-due-date*/\n/*    Inv product table section    */\n/*inv--payment-info*/\n/*inv--total-amounts*/\n/*inv--note*/\n.inv--note {\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\n.inv--note p {\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n@media print {\n  body * {\n    visibility: hidden;\n    margin-top: 1mm !important;\n  }\n  #ct {\n    visibility: visible;\n  }\n  #ct * {\n    visibility: visible;\n  }\n  .doc-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n}\n@page {\n  size: auto;\n  margin: 0mm;\n}\n/*\n===============================\n    Invoice Actions Button\n===============================\n*/\n.invoice-actions-btn {\n  padding: 25px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  border-radius: 6px;\n}\n\n.invoice-actions-btn label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.invoice-actions-btn .invoice-action-btn a {\n  transform: none;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.invoice-actions-btn .invoice-action-btn a.btn-edit {\n  width: 100%;\n}\n\n/* Invoice Actions -> action-btn */\n@media (max-width: 1199px) {\n  .invoice-actions-btn {\n    margin-top: 25px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print, .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 767px) {\n  .invoice-actions-btn .invoice-action-btn a.btn-send, .invoice-actions-btn .invoice-action-btn a.btn-print {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 575px) {\n  .invoice .content-section .inv--payment-info .inv-title {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: auto;\n    margin-bottom: 6px;\n    width: auto;\n  }\n  .invoice .content-section .inv--payment-info p {\n    margin-left: 0;\n    margin-right: auto;\n    width: auto;\n    justify-content: flex-start;\n  }\n  .invoice .content-section .inv--payment-info .inv-subtitle {\n    min-width: 140px;\n  }\n  .invoice-actions-btn .invoice-action-btn a.btn-download {\n    margin-bottom: 20px;\n  }\n  .invoice .content-section .inv--payment-info span {\n    white-space: normal;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/qrcode-vue3/dist/index.es.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode-vue3/dist/index.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ js)
/* harmony export */ });
var mo = Object.defineProperty;
var wo = (e, t, n) => t in e ? mo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ne = (e, t, n) => (wo(e, typeof t != "symbol" ? t + "" : t, n), n);
/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const ve =  true ? Object.freeze({}) : 0, yo =  true ? Object.freeze([]) : 0, ie = () => {
}, Eo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ae = Object.assign, Oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, No = Object.prototype.hasOwnProperty, X = (e, t) => No.call(e, t), H = Array.isArray, Ve = (e) => Lt(e) === "[object Map]", cr = (e) => Lt(e) === "[object Set]", F = (e) => typeof e == "function", ue = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", vn = (e) => (J(e) || F(e)) && F(e.then) && F(e.catch), ur = Object.prototype.toString, Lt = (e) => ur.call(e), lr = (e) => Lt(e).slice(8, -1), fr = (e) => Lt(e) === "[object Object]", _n = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pr = dr((e) => e.charAt(0).toUpperCase() + e.slice(1)), xo = dr(
  (e) => e ? `on${pr(e)}` : ""
), Le = (e, t) => !Object.is(e, t), Do = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Co = (e) => {
  const t = ue(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let qn;
const hr = () => qn || (qn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mn(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ue(r) ? To(r) : mn(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ue(e) || J(e))
    return e;
}
const So = /;(?![^(]*\))/g, Mo = /:([^]+)/, Io = /\/\*[^]*?\*\//g;
function To(e) {
  const t = {};
  return e.replace(Io, "").split(So).forEach((n) => {
    if (n) {
      const r = n.split(Mo);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function We(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const r = We(e[n]);
      r && (t += r + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gr = (e) => !!(e && e.__v_isRef === !0), vr = (e) => ue(e) ? e : e == null ? "" : H(e) || J(e) && (e.toString === ur || !F(e.toString)) ? gr(e) ? vr(e.value) : JSON.stringify(e, _r, 2) : String(e), _r = (e, t) => gr(t) ? _r(e, t.value) : Ve(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], i) => (n[Qt(r, i) + " =>"] = o, n),
    {}
  )
} : cr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qt(n))
} : Fe(t) ? Qt(t) : J(t) && !H(t) && !fr(t) ? String(t) : t, Qt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Oe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let j;
const Jt = /* @__PURE__ */ new WeakSet();
class Po {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jt.has(this) && (Jt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = it, it = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hn(this), wr(this);
    const t = j, n = we;
    j = this, we = !0;
    try {
      return this.fn();
    } finally {
       true && j !== this && Oe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), br(this), j = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yn(t);
      this.deps = this.depsTail = void 0, Hn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    an(this) && this.run();
  }
  get dirty() {
    return an(this);
  }
}
let mr = 0, it;
function wn() {
  mr++;
}
function bn() {
  if (--mr > 0)
    return;
  let e;
  for (; it; ) {
    let t = it;
    for (it = void 0; t; ) {
      const n = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function wr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function br(e) {
  let t, n = e.depsTail;
  for (let r = n; r; r = r.prevDep)
    r.version === -1 ? (r === n && (n = r.prevDep), yn(r), Ro(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function an(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && yr(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function yr(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === at))
    return;
  e.globalVersion = at;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !an(e)) {
    e.flags &= -3;
    return;
  }
  const n = j, r = we;
  j = e, we = !0;
  try {
    wr(e);
    const o = e.fn(e._value);
    (t.version === 0 || Le(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    j = n, we = r, br(e), e.flags &= -3;
  }
}
function yn(e) {
  const { dep: t, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let o = t.computed.deps; o; o = o.nextDep)
      yn(o);
  }
}
function Ro(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const Er = [];
function ze() {
  Er.push(we), we = !1;
}
function et() {
  const e = Er.pop();
  we = e === void 0 ? !0 : e;
}
function Hn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = j;
    j = void 0;
    try {
      t();
    } finally {
      j = n;
    }
  }
}
let at = 0;
class Or {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0,  true && (this.subsHead = void 0);
  }
  track(t) {
    if (!j || !we || j === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== j)
      n = this.activeLink = {
        dep: this,
        sub: j,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, j.deps ? (n.prevDep = j.depsTail, j.depsTail.nextDep = n, j.depsTail = n) : j.deps = j.depsTail = n, j.flags & 4 && Nr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = j.depsTail, n.nextDep = void 0, j.depsTail.nextDep = n, j.depsTail = n, j.deps === n && (j.deps = r);
    }
    return  true && j.onTrack && j.onTrack(
      ae(
        {
          effect: j
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, at++, this.notify(t);
  }
  notify(t) {
    wn();
    try {
      if (true)
        for (let n = this.subsHead; n; n = n.nextSub)
           true && n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ae(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      bn();
    }
  }
}
function Nr(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let r = t.deps; r; r = r.nextDep)
      Nr(r);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)),  true && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
}
const cn = /* @__PURE__ */ new WeakMap(), $e = Symbol(
   true ? "Object iterate" : 0
), un = Symbol(
   true ? "Map keys iterate" : 0
), ct = Symbol(
   true ? "Array iterate" : 0
);
function z(e, t, n) {
  if (we && j) {
    let r = cn.get(e);
    r || cn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = new Or()),  true ? o.track({
      target: e,
      type: t,
      key: n
    }) : 0;
  }
}
function Ie(e, t, n, r, o, i) {
  const s = cn.get(e);
  if (!s) {
    at++;
    return;
  }
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else {
    const l = H(e), N = l && _n(n);
    if (l && n === "length") {
      const C = Number(r);
      s.forEach((c, h) => {
        (h === "length" || h === ct || !Fe(h) && h >= C) && a.push(c);
      });
    } else {
      const C = (c) => c && a.push(c);
      switch (n !== void 0 && C(s.get(n)), N && C(s.get(ct)), t) {
        case "add":
          l ? N && C(s.get("length")) : (C(s.get($e)), Ve(e) && C(s.get(un)));
          break;
        case "delete":
          l || (C(s.get($e)), Ve(e) && C(s.get(un)));
          break;
        case "set":
          Ve(e) && C(s.get($e));
          break;
      }
    }
  }
  wn();
  for (const l of a)
     true ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: i
    }) : 0;
  bn();
}
function je(e) {
  const t = q(e);
  return t === e ? t : (z(t, "iterate", ct), pe(e) ? t : t.map(fe));
}
function En(e) {
  return z(e = q(e), "iterate", ct), e;
}
const Ao = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yt(this, Symbol.iterator, fe);
  },
  concat(...e) {
    return je(this).concat(
      ...e.map((t) => H(t) ? je(t) : t)
    );
  },
  entries() {
    return Yt(this, "entries", (e) => (e[1] = fe(e[1]), e));
  },
  every(e, t) {
    return ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ye(this, "filter", e, t, (n) => n.map(fe), arguments);
  },
  find(e, t) {
    return ye(this, "find", e, t, fe, arguments);
  },
  findIndex(e, t) {
    return ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ye(this, "findLast", e, t, fe, arguments);
  },
  findLastIndex(e, t) {
    return ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Gt(this, "includes", e);
  },
  indexOf(...e) {
    return Gt(this, "indexOf", e);
  },
  join(e) {
    return je(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Gt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return tt(this, "pop");
  },
  push(...e) {
    return tt(this, "push", e);
  },
  reduce(e, ...t) {
    return jn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jn(this, "reduceRight", e, t);
  },
  shift() {
    return tt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return tt(this, "splice", e);
  },
  toReversed() {
    return je(this).toReversed();
  },
  toSorted(e) {
    return je(this).toSorted(e);
  },
  toSpliced(...e) {
    return je(this).toSpliced(...e);
  },
  unshift(...e) {
    return tt(this, "unshift", e);
  },
  values() {
    return Yt(this, "values", fe);
  }
};
function Yt(e, t, n) {
  const r = En(e), o = r[t]();
  return r !== e && !pe(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const Bo = Array.prototype;
function ye(e, t, n, r, o, i) {
  const s = En(e), a = s !== e && !pe(e), l = s[t];
  if (l !== Bo[t]) {
    const c = l.apply(e, i);
    return a ? fe(c) : c;
  }
  let N = n;
  s !== e && (a ? N = function(c, h) {
    return n.call(this, fe(c), h, e);
  } : n.length > 2 && (N = function(c, h) {
    return n.call(this, c, h, e);
  }));
  const C = l.call(s, N, r);
  return a && o ? o(C) : C;
}
function jn(e, t, n, r) {
  const o = En(e);
  let i = n;
  return o !== e && (pe(e) ? n.length > 3 && (i = function(s, a, l) {
    return n.call(this, s, a, l, e);
  }) : i = function(s, a, l) {
    return n.call(this, s, fe(a), l, e);
  }), o[t](i, ...r);
}
function Gt(e, t, n) {
  const r = q(e);
  z(r, "iterate", ct);
  const o = r[t](...n);
  return (o === -1 || o === !1) && St(n[0]) ? (n[0] = q(n[0]), r[t](...n)) : o;
}
function tt(e, t, n = []) {
  ze(), wn();
  const r = q(e)[t].apply(e, n);
  return bn(), et(), r;
}
const Vo = /* @__PURE__ */ bo("__proto__,__v_isRef,__isVue"), xr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function $o(e) {
  Fe(e) || (e = String(e));
  const t = q(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Dr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (o ? i ? Tr : Ir : i ? Go : Mr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = H(t);
    if (!o) {
      let l;
      if (s && (l = Ao[n]))
        return l;
      if (n === "hasOwnProperty")
        return $o;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      se(t) ? t : r
    );
    return (Fe(n) ? xr.has(n) : Vo(n)) || (o || z(t, "get", n), i) ? a : se(a) ? s && _n(n) ? a : a.value : J(a) ? o ? Pr(a) : xn(a) : a;
  }
}
class ko extends Dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Pe(i);
      if (!pe(r) && !Pe(r) && (i = q(i), r = q(r)), !H(t) && se(i) && !se(r))
        return l ? !1 : (i.value = r, !0);
    }
    const s = H(t) && _n(n) ? Number(n) < t.length : X(t, n), a = Reflect.set(
      t,
      n,
      r,
      se(t) ? t : o
    );
    return t === q(o) && (s ? Le(r, i) && Ie(t, "set", n, r, i) : Ie(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = X(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && r && Ie(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Fe(n) || !xr.has(n)) && z(t, "has", n), r;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      H(t) ? "length" : $e
    ), Reflect.ownKeys(t);
  }
}
class Cr extends Dr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return  true && Oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return  true && Oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Lo = /* @__PURE__ */ new ko(), Fo = /* @__PURE__ */ new Cr(), qo = /* @__PURE__ */ new Cr(!0), On = (e) => e, Ft = (e) => Reflect.getPrototypeOf(e);
function ht(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = q(e), i = q(t);
  n || (Le(t, i) && z(o, "get", t), z(o, "get", i));
  const { has: s } = Ft(o), a = r ? On : n ? Cn : fe;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, i))
    return a(e.get(i));
  e !== o && e.get(t);
}
function gt(e, t = !1) {
  const n = this.__v_raw, r = q(n), o = q(e);
  return t || (Le(e, o) && z(r, "has", e), z(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function vt(e, t = !1) {
  return e = e.__v_raw, !t && z(q(e), "iterate", $e), Reflect.get(e, "size", e);
}
function Un(e, t = !1) {
  !t && !pe(e) && !Pe(e) && (e = q(e));
  const n = q(this);
  return Ft(n).has.call(n, e) || (n.add(e), Ie(n, "add", e, e)), this;
}
function Kn(e, t, n = !1) {
  !n && !pe(t) && !Pe(t) && (t = q(t));
  const r = q(this), { has: o, get: i } = Ft(r);
  let s = o.call(r, e);
  s ?  true && Sr(r, o, e) : (e = q(e), s = o.call(r, e));
  const a = i.call(r, e);
  return r.set(e, t), s ? Le(t, a) && Ie(r, "set", e, t, a) : Ie(r, "add", e, t), this;
}
function Wn(e) {
  const t = q(this), { has: n, get: r } = Ft(t);
  let o = n.call(t, e);
  o ?  true && Sr(t, n, e) : (e = q(e), o = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && Ie(t, "delete", e, void 0, i), s;
}
function Qn() {
  const e = q(this), t = e.size !== 0, n =  true ? Ve(e) ? new Map(e) : new Set(e) : 0, r = e.clear();
  return t && Ie(e, "clear", void 0, void 0, n), r;
}
function _t(e, t) {
  return function(r, o) {
    const i = this, s = i.__v_raw, a = q(s), l = t ? On : e ? Cn : fe;
    return !e && z(a, "iterate", $e), s.forEach((N, C) => r.call(o, l(N), l(C), i));
  };
}
function mt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = q(o), s = Ve(i), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, N = o[e](...r), C = n ? On : t ? Cn : fe;
    return !t && z(
      i,
      "iterate",
      l ? un : $e
    ), {
      // iterator protocol
      next() {
        const { value: c, done: h } = N.next();
        return h ? { value: c, done: h } : {
          value: a ? [C(c[0]), C(c[1])] : C(c),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function xe(e) {
  return function(...t) {
    if (true) {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Oe(
        `${pr(e)} operation ${n}failed: target is readonly.`,
        q(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ho() {
  const e = {
    get(i) {
      return ht(this, i);
    },
    get size() {
      return vt(this);
    },
    has: gt,
    add: Un,
    set: Kn,
    delete: Wn,
    clear: Qn,
    forEach: _t(!1, !1)
  }, t = {
    get(i) {
      return ht(this, i, !1, !0);
    },
    get size() {
      return vt(this);
    },
    has: gt,
    add(i) {
      return Un.call(this, i, !0);
    },
    set(i, s) {
      return Kn.call(this, i, s, !0);
    },
    delete: Wn,
    clear: Qn,
    forEach: _t(!1, !0)
  }, n = {
    get(i) {
      return ht(this, i, !0);
    },
    get size() {
      return vt(this, !0);
    },
    has(i) {
      return gt.call(this, i, !0);
    },
    add: xe("add"),
    set: xe("set"),
    delete: xe("delete"),
    clear: xe("clear"),
    forEach: _t(!0, !1)
  }, r = {
    get(i) {
      return ht(this, i, !0, !0);
    },
    get size() {
      return vt(this, !0);
    },
    has(i) {
      return gt.call(this, i, !0);
    },
    add: xe("add"),
    set: xe("set"),
    delete: xe("delete"),
    clear: xe("clear"),
    forEach: _t(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = mt(i, !1, !1), n[i] = mt(i, !0, !1), t[i] = mt(i, !1, !0), r[i] = mt(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  jo,
  Uo,
  Ko,
  Wo
] = /* @__PURE__ */ Ho();
function Nn(e, t) {
  const n = t ? e ? Wo : Ko : e ? Uo : jo;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    X(n, o) && o in r ? n : r,
    o,
    i
  );
}
const Qo = {
  get: /* @__PURE__ */ Nn(!1, !1)
}, Jo = {
  get: /* @__PURE__ */ Nn(!0, !1)
}, Yo = {
  get: /* @__PURE__ */ Nn(!0, !0)
};
function Sr(e, t, n) {
  const r = q(n);
  if (r !== n && t.call(e, r)) {
    const o = lr(e);
    Oe(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Mr = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap();
function Xo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xo(lr(e));
}
function xn(e) {
  return Pe(e) ? e : Dn(
    e,
    !1,
    Lo,
    Qo,
    Mr
  );
}
function Pr(e) {
  return Dn(
    e,
    !0,
    Fo,
    Jo,
    Ir
  );
}
function wt(e) {
  return Dn(
    e,
    !0,
    qo,
    Yo,
    Tr
  );
}
function Dn(e, t, n, r, o) {
  if (!J(e))
    return  true && Oe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = Zo(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Qe(e) {
  return Pe(e) ? Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Pe(e) {
  return !!(e && e.__v_isReadonly);
}
function pe(e) {
  return !!(e && e.__v_isShallow);
}
function St(e) {
  return e ? !!e.__v_raw : !1;
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function zo(e) {
  return Object.isExtensible(e) && Do(e, "__v_skip", !0), e;
}
const fe = (e) => J(e) ? xn(e) : e, Cn = (e) => J(e) ? Pr(e) : e;
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ot(e) {
  return se(e) ? e.value : e;
}
const ei = {
  get: (e, t, n) => t === "__v_raw" ? e : Ot(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return se(o) && !se(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Rr(e) {
  return Qe(e) ? e : new Proxy(e, ei);
}
class ti {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Or(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = at - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    j !== this ? (this.flags |= 16, this.dep.notify()) : "development";
  }
  get value() {
    const t =  true ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : 0;
    return yr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) :  true && Oe("Write operation failed: computed value is readonly");
  }
}
function ni(e, t, n = !1) {
  let r, o;
  F(e) ? r = e : (r = e.get, o = e.set);
  const i = new ti(r, o, n);
  return  true && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const bt = {}, Mt = /* @__PURE__ */ new WeakMap();
let Be;
function ri(e, t = !1, n = Be) {
  if (n) {
    let r = Mt.get(n);
    r || Mt.set(n, r = []), r.push(e);
  } else
     true && !t && Oe(
      "onWatcherCleanup() was called when there was no active watcher to associate with."
    );
}
function oi(e, t, n = ve) {
  const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: l } = n, N = (L) => {
    (n.onWarn || Oe)(
      "Invalid watch source: ",
      L,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, C = (L) => o ? L : pe(L) || o === !1 || o === 0 ? Ce(L, 1) : Ce(L);
  let c, h, T, k, U = !1, ee = !1;
  if (se(e) ? (h = () => e.value, U = pe(e)) : Qe(e) ? (h = () => C(e), U = !0) : H(e) ? (ee = !0, U = e.some((L) => Qe(L) || pe(L)), h = () => e.map((L) => {
    if (se(L))
      return L.value;
    if (Qe(L))
      return C(L);
    if (F(L))
      return l ? l(L, 2) : L();
     true && N(L);
  })) : F(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (T) {
      ze();
      try {
        T();
      } finally {
        et();
      }
    }
    const L = Be;
    Be = c;
    try {
      return l ? l(e, 3, [k]) : e(k);
    } finally {
      Be = L;
    }
  } : (h = ie,  true && N(e)), t && o) {
    const L = h, v = o === !0 ? 1 / 0 : o;
    h = () => Ce(L(), v);
  }
  const Y = () => {
    c.stop();
  };
  if (i)
    if (t) {
      const L = t;
      t = (...v) => {
        L(...v), Y();
      };
    } else {
      const L = h;
      h = () => {
        L(), Y();
      };
    }
  let Q = ee ? new Array(e.length).fill(bt) : bt;
  const te = (L) => {
    if (!(!(c.flags & 1) || !c.dirty && !L))
      if (t) {
        const v = c.run();
        if (o || U || (ee ? v.some((D, m) => Le(D, Q[m])) : Le(v, Q))) {
          T && T();
          const D = Be;
          Be = c;
          try {
            const m = [
              v,
              // pass undefined as the old value when it's changed for the first time
              Q === bt ? void 0 : ee && Q[0] === bt ? [] : Q,
              k
            ];
            l ? l(t, 3, m) : (
              // @ts-expect-error
              t(...m)
            ), Q = v;
          } finally {
            Be = D;
          }
        }
      } else
        c.run();
  };
  return a && a(te), c = new Po(h), c.scheduler = s ? () => s(te, !1) : te, k = (L) => ri(L, !1, c), T = c.onStop = () => {
    const L = Mt.get(c);
    if (L) {
      if (l)
        l(L, 4);
      else
        for (const v of L)
          v();
      Mt.delete(c);
    }
  },  true && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? r ? te(!0) : Q = c.run() : s ? s(te.bind(null, !0), !0) : c.run(), Y.pause = c.pause.bind(c), Y.resume = c.resume.bind(c), Y.stop = Y, Y;
}
function Ce(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, se(e))
    Ce(e.value, t, n);
  else if (H(e))
    for (let r = 0; r < e.length; r++)
      Ce(e[r], t, n);
  else if (cr(e) || Ve(e))
    e.forEach((r) => {
      Ce(r, t, n);
    });
  else if (fr(e)) {
    for (const r in e)
      Ce(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ce(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ke = [];
function Ar(e) {
  ke.push(e);
}
function Br() {
  ke.pop();
}
let Xt = !1;
function $(e, ...t) {
  if (Xt)
    return;
  Xt = !0, ze();
  const n = ke.length ? ke[ke.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = ii();
  if (r)
    qt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Vn(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...si(o)), console.warn(...i);
  }
  et(), Xt = !1;
}
function ii() {
  let e = ke[ke.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function si(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...ai(n));
  }), t;
}
function ai({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Vn(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...ci(e.props), i] : [o + i];
}
function ci(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Vr(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Vr(e, t, n) {
  return ue(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : se(t) ? (t = Vr(e, q(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = q(t), n ? t : [`${e}=`, t]);
}
function ui(e, t) {
   true && e !== void 0 && (typeof e != "number" ? $(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && $(`${t} is NaN - the duration expression might be incorrect.`));
}
const Sn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function qt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    jt(o, t, n);
  }
}
function Ht(e, t, n, r) {
  if (F(e)) {
    const o = qt(e, t, n, r);
    return o && vn(o) && o.catch((i) => {
      jt(i, t, n);
    }), o;
  }
  if (H(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ht(e[i], t, n, r));
    return o;
  } else
     true && $(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function jt(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ve;
  if (t) {
    let a = t.parent;
    const l = t.proxy, N =  true ? Sn[n] : 0;
    for (; a; ) {
      const C = a.ec;
      if (C) {
        for (let c = 0; c < C.length; c++)
          if (C[c](e, l, N) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      ze(), qt(i, null, 10, [
        e,
        l,
        N
      ]), et();
      return;
    }
  }
  li(e, n, o, r, s);
}
function li(e, t, n, r = !0, o = !1) {
  if (true) {
    const i = Sn[t];
    if (n && Ar(n), $(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Br(), r)
      throw e;
    console.error(e);
  } else {}
}
let It = !1, ln = !1;
const _e = [];
let Ee = 0;
const Je = [];
let De = null, Ke = 0;
const $r = /* @__PURE__ */ Promise.resolve();
let Mn = null;
const fi = 100;
function di(e) {
  const t = Mn || $r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pi(e) {
  let t = It ? Ee + 1 : 0, n = _e.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = _e[r], i = ut(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function In(e) {
  if (!(e.flags & 1)) {
    const t = ut(e), n = _e[_e.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ut(n) ? _e.push(e) : _e.splice(pi(t), 0, e), e.flags |= 1, kr();
  }
}
function kr() {
  !It && !ln && (ln = !0, Mn = $r.then(Lr));
}
function Tt(e) {
  H(e) ? Je.push(...e) : De && e.id === -1 ? De.splice(Ke + 1, 0, e) : e.flags & 1 || (Je.push(e), e.flags |= 1), kr();
}
function hi(e) {
  if (Je.length) {
    const t = [...new Set(Je)].sort(
      (n, r) => ut(n) - ut(r)
    );
    if (Je.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t,  true && (e = e || /* @__PURE__ */ new Map()), Ke = 0; Ke < De.length; Ke++) {
      const n = De[Ke];
       true && Fr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    De = null, Ke = 0;
  }
}
const ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lr(e) {
  ln = !1, It = !0,  true && (e = e || /* @__PURE__ */ new Map());
  const t =  true ? (n) => Fr(e, n) : 0;
  try {
    for (Ee = 0; Ee < _e.length; Ee++) {
      const n = _e[Ee];
      if (n && !(n.flags & 8)) {
        if ( true && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), qt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags &= -2;
      }
    }
  } finally {
    for (; Ee < _e.length; Ee++) {
      const n = _e[Ee];
      n && (n.flags &= -2);
    }
    Ee = 0, _e.length = 0, hi(e), It = !1, Mn = null, (_e.length || Je.length) && Lr(e);
  }
}
function Fr(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fi) {
      const r = t.i, o = r && fo(r.type);
      return jt(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Nt = /* @__PURE__ */ new Map();
 true && (hr().__VUE_HMR_RUNTIME__ = {
  createRecord: Zt(gi),
  rerender: Zt(vi),
  reload: Zt(_i)
});
const Pt = /* @__PURE__ */ new Map();
function gi(e, t) {
  return Pt.has(e) ? !1 : (Pt.set(e, {
    initialDef: Rt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rt(e) {
  return po(e) ? e.__vccOpts : e;
}
function vi(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Rt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function _i(e, t) {
  const n = Pt.get(e);
  if (!n)
    return;
  t = Rt(t), Jn(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = Rt(i.type);
    let a = Nt.get(s);
    a || (s !== n.initialDef && Jn(s, t), Nt.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? In(() => {
      i.parent.update(), a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Tt(() => {
    Nt.clear();
  });
}
function Jn(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Zt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Se, rt = [], fn = !1;
function qr(e, ...t) {
  Se ? Se.emit(e, ...t) : fn || rt.push({ event: e, args: t });
}
function Hr(e, t) {
  var n, r;
  Se = e, Se ? (Se.enabled = !0, rt.forEach(({ event: o, args: i }) => Se.emit(o, ...i)), rt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Hr(i, t);
  }), setTimeout(() => {
    Se || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fn = !0, rt = []);
  }, 3e3)) : (fn = !0, rt = []);
}
const mi = /* @__PURE__ */ wi(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return (t) => {
    qr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const bi = /* @__PURE__ */ jr(
  "perf:start"
  /* PERFORMANCE_START */
), yi = /* @__PURE__ */ jr(
  "perf:end"
  /* PERFORMANCE_END */
);
function jr(e) {
  return (t, n, r) => {
    qr(e, t.appContext.app, t.uid, t, n, r);
  };
}
let de = null, Ur = null;
function Yn(e) {
  const t = de;
  return de = e, Ur = e && e.type.__scopeId || null, t;
}
function Ei(e, t = de, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && nr(-1);
    const i = Yn(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Yn(i), r._d && nr(1);
    }
    return  true && mi(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
const Oi = (e) => e.__isTeleport;
function Kr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Kr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wr(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ae({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Ni(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xi = (e) => e.type.__isKeepAlive;
function Di(e, t) {
  Qr(e, "a", t);
}
function Ci(e, t) {
  Qr(e, "da", t);
}
function Qr(e, t, n = re) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ut(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      xi(o.parent.vnode) && Si(r, t, n, o), o = o.parent;
  }
}
function Si(e, t, n, r) {
  const o = Ut(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Jr(() => {
    Oo(r[t], o);
  }, n);
}
function Ut(e, t, n = re, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      ze();
      const a = dt(n), l = Ht(t, n, e, s);
      return a(), et(), l;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (true) {
    const o = xo(Sn[e].replace(/ hook$/, ""));
    $(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ne = (e) => (t, n = re) => {
  (!Kt || e === "sp") && Ut(e, (...r) => t(...r), n);
}, Mi = Ne("bm"), Ii = Ne("m"), Ti = Ne(
  "bu"
), Pi = Ne("u"), Ri = Ne(
  "bum"
), Jr = Ne("um"), Ai = Ne(
  "sp"
), Bi = Ne("rtg"), Vi = Ne("rtc");
function $i(e, t = re) {
  Ut("ec", e, t);
}
const Yr = Symbol.for("v-ndc"), dn = (e) => e ? ms(e) ? ys(e) : dn(e.parent) : null, st = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) =>  true ? wt(e.props) : 0,
    $attrs: (e) =>  true ? wt(e.attrs) : 0,
    $slots: (e) =>  true ? wt(e.slots) : 0,
    $refs: (e) =>  true ? wt(e.refs) : 0,
    $parent: (e) => dn(e.parent),
    $root: (e) => dn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      In(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = di.bind(e.proxy)),
    $watch: (e) => ts.bind(e)
  })
), Tn = (e) => e === "_" || e === "$", zt = (e, t) => e !== ve && !e.__isScriptSetup && X(e, t), ki = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: l } = e;
    if ( true && t === "__isVue")
      return !0;
    let N;
    if (t[0] !== "$") {
      const T = s[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (zt(r, t))
          return s[t] = 1, r[t];
        if (o !== ve && X(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (N = e.propsOptions[0]) && X(N, t)
        )
          return s[t] = 3, i[t];
        if (n !== ve && X(n, t))
          return s[t] = 4, n[t];
        pn && (s[t] = 0);
      }
    }
    const C = st[t];
    let c, h;
    if (C)
      return t === "$attrs" ? (z(e.attrs, "get", ""),  true && void 0) :  true && t === "$slots" && z(e, "get", t), C(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ve && X(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, X(h, t)
    )
      return h[t];
     true && de && (!ue(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== ve && Tn(t[0]) && X(o, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === de && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: i } = e;
    return zt(o, t) ? (o[t] = n, !0) :  true && o.__isScriptSetup && X(o, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== ve && X(r, t) ? (r[t] = n, !0) : X(e.props, t) ? ( true && $(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ( true && $(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : ( true && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i }
  }, s) {
    let a;
    return !!n[s] || e !== ve && X(e, s) || zt(t, s) || (a = i[0]) && X(a, s) || X(r, s) || X(st, s) || X(o.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
 true && (ki.ownKeys = (e) => ($(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Li(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(q(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Tn(r[0])) {
        $(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ie
      });
    }
  });
}
function Gn(e) {
  return H(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Fi(e) {
  const t = lo();
   true && !t && $(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return _s(), vn(n) && (n = n.catch((r) => {
    throw dt(t), r;
  })), [n, () => dt(t)];
}
function qi() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? $(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let pn = !0;
function Hi(e) {
  const t = Pn(e), n = e.proxy, r = e.ctx;
  pn = !1, t.beforeCreate && Xn(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: l,
    inject: N,
    // lifecycle
    created: C,
    beforeMount: c,
    mounted: h,
    beforeUpdate: T,
    updated: k,
    activated: U,
    deactivated: ee,
    beforeDestroy: Y,
    beforeUnmount: Q,
    destroyed: te,
    unmounted: L,
    render: v,
    renderTracked: D,
    renderTriggered: m,
    errorCaptured: S,
    serverPrefetch: d,
    // public API
    expose: g,
    inheritAttrs: f,
    // assets
    components: u,
    directives: O,
    filters: y
  } = t, b =  true ? qi() : 0;
  if (true) {
    const [M] = e.propsOptions;
    if (M)
      for (const P in M)
        b("Props", P);
  }
  if (N && ji(N, r, b), s)
    for (const M in s) {
      const P = s[M];
      F(P) ? ( true ? Object.defineProperty(r, M, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : 0,  true && b("Methods", M)) :  true && $(
        `Method "${M}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
     true && !F(o) && $(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const M = o.call(n, n);
    if ( true && vn(M) && $(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !J(M))
       true && $("data() should return an object.");
    else if (e.data = xn(M), "development" !== "production")
      for (const P in M)
        b("Data", P), Tn(P[0]) || Object.defineProperty(r, P, {
          configurable: !0,
          enumerable: !0,
          get: () => M[P],
          set: ie
        });
  }
  if (pn = !0, i)
    for (const M in i) {
      const P = i[M], K = F(P) ? P.bind(n, n) : F(P.get) ? P.get.bind(n, n) : ie;
       true && K === ie && $(`Computed property "${M}" has no getter.`);
      const Z = !F(P) && F(P.set) ? P.set.bind(n) :  true ? () => {
        $(
          `Write operation failed: computed property "${M}" is readonly.`
        );
      } : 0, le = Ns({
        get: K,
        set: Z
      });
      Object.defineProperty(r, M, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (me) => le.value = me
      }),  true && b("Computed", M);
    }
  if (a)
    for (const M in a)
      Gr(a[M], r, n, M);
  if (l) {
    const M = F(l) ? l.call(n) : l;
    Reflect.ownKeys(M).forEach((P) => {
      Ji(P, M[P]);
    });
  }
  C && Xn(C, e, "c");
  function R(M, P) {
    H(P) ? P.forEach((K) => M(K.bind(n))) : P && M(P.bind(n));
  }
  if (R(Mi, c), R(Ii, h), R(Ti, T), R(Pi, k), R(Di, U), R(Ci, ee), R($i, S), R(Vi, D), R(Bi, m), R(Ri, Q), R(Jr, L), R(Ai, d), H(g))
    if (g.length) {
      const M = e.exposed || (e.exposed = {});
      g.forEach((P) => {
        Object.defineProperty(M, P, {
          get: () => n[P],
          set: (K) => n[P] = K
        });
      });
    } else
      e.exposed || (e.exposed = {});
  v && e.render === ie && (e.render = v), f != null && (e.inheritAttrs = f), u && (e.components = u), O && (e.directives = O), d && Ni(e);
}
function ji(e, t, n = ie) {
  H(e) && (e = hn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    J(o) ? "default" in o ? i = xt(
      o.from || r,
      o.default,
      !0
    ) : i = xt(o.from || r) : i = xt(o), se(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i,  true && n("Inject", r);
  }
}
function Xn(e, t, n) {
  Ht(
    H(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Gr(e, t, n, r) {
  let o = r.includes(".") ? zr(n, r) : () => n[r];
  if (ue(e)) {
    const i = t[e];
    F(i) ? en(o, i) :  true && $(`Invalid watch handler specified by key "${e}"`, i);
  } else if (F(e))
    en(o, e.bind(n));
  else if (J(e))
    if (H(e))
      e.forEach((i) => Gr(i, t, n, r));
    else {
      const i = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(i) ? en(o, i, e) :  true && $(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
     true && $(`Invalid watch option: "${r}"`, e);
}
function Pn(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (N) => At(l, N, s, !0)
  ), At(l, t, s)), J(t) && i.set(t, l), l;
}
function At(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && At(e, i, n, !0), o && o.forEach(
    (s) => At(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
       true && $(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ui[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ui = {
  data: Zn,
  props: zn,
  emits: zn,
  // objects
  methods: ot,
  computed: ot,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: ot,
  directives: ot,
  // watch
  watch: Wi,
  // provide / inject
  provide: Zn,
  inject: Ki
};
function Zn(e, t) {
  return t ? e ? function() {
    return ae(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ki(e, t) {
  return ot(hn(e), hn(t));
}
function hn(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zn(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Gn(e),
    Gn(t ?? {})
  ) : t;
}
function Wi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = oe(e[r], t[r]);
  return n;
}
let Qi = null;
function Ji(e, t) {
  if (!re)
     true && $("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const r = re.parent && re.parent.provides;
    r === n && (n = re.provides = Object.create(r)), n[e] = t;
  }
}
function xt(e, t, n = !1) {
  const r = re || de;
  if (r || Qi) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(r && r.proxy) : t;
     true && $(`injection "${String(e)}" not found.`);
  } else
     true && $("inject() can only be used inside setup() or functional components.");
}
const Yi = {}, Xr = (e) => Object.getPrototypeOf(e) === Yi;
let nt, Me;
function Gi(e, t) {
  e.appContext.config.performance && Bt() && Me.mark(`vue-${t}-${e.uid}`),  true && bi(e, t, Bt() ? Me.now() : Date.now());
}
function Xi(e, t) {
  if (e.appContext.config.performance && Bt()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Me.mark(r), Me.measure(
      `<${Vn(e, e.type)}> ${t}`,
      n,
      r
    ), Me.clearMarks(n), Me.clearMarks(r);
  }
   true && yi(e, t, Bt() ? Me.now() : Date.now());
}
function Bt() {
  return nt !== void 0 || (typeof window < "u" && window.performance ? (nt = !0, Me = window.performance) : nt = !1), nt;
}
const Zi = us, zi = Symbol.for("v-scx"), es = () => {
  {
    const e = xt(zi);
    return e ||  true && $(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function en(e, t, n) {
  return  true && !F(t) && $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Zr(e, t, n);
}
function Zr(e, t, n = ve) {
  const { immediate: r, deep: o, flush: i, once: s } = n;
   true && !t && (r !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && $(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = ae({}, n);
   true && (a.onWarn = $);
  let l;
  if (Kt)
    if (i === "sync") {
      const h = es();
      l = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!t || r)
      a.once = !0;
    else
      return {
        stop: ie,
        resume: ie,
        pause: ie
      };
  const N = re;
  a.call = (h, T, k) => Ht(h, N, T, k);
  let C = !1;
  i === "post" ? a.scheduler = (h) => {
    Zi(h, N && N.suspense);
  } : i !== "sync" && (C = !0, a.scheduler = (h, T) => {
    T ? h() : In(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), C && (h.flags |= 2, N && (h.id = N.uid, h.i = N));
  };
  const c = oi(e, t, a);
  return l && l.push(c), c;
}
function ts(e, t, n) {
  const r = this.proxy, o = ue(e) ? e.includes(".") ? zr(r, e) : () => r[e] : e.bind(r, r);
  let i;
  F(t) ? i = t : (i = t.handler, n = t);
  const s = dt(this), a = Zr(o, i.bind(r), n);
  return s(), a;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function eo(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (An(o)) {
      if (o.type !== Xe || o.children === "v-if") {
        if (n)
          return;
        if (n = o,  true && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return eo(n.children);
      }
    } else
      return;
  }
  return n;
}
function to({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ns = (e) => e.__isSuspense;
let gn = 0;
const rs = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, i, s, a, l, N) {
    if (e == null)
      is(
        t,
        n,
        r,
        o,
        i,
        s,
        a,
        l,
        N
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      ss(
        e,
        t,
        n,
        r,
        o,
        s,
        a,
        l,
        N
      );
    }
  },
  hydrate: as,
  normalize: cs
}, os = rs;
function lt(e, t) {
  const n = e.props && e.props[t];
  F(n) && n();
}
function is(e, t, n, r, o, i, s, a, l) {
  const {
    p: N,
    o: { createElement: C }
  } = l, c = C("div"), h = e.suspense = no(
    e,
    o,
    r,
    t,
    c,
    n,
    i,
    s,
    a,
    l
  );
  N(
    null,
    h.pendingBranch = e.ssContent,
    c,
    null,
    r,
    h,
    i,
    s
  ), h.deps > 0 ? (lt(e, "onPending"), lt(e, "onFallback"), N(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), Ye(h, e.ssFallback)) : h.resolve(!1, !0);
}
function ss(e, t, n, r, o, i, s, a, { p: l, um: N, o: { createElement: C } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const h = t.ssContent, T = t.ssFallback, { activeBranch: k, pendingBranch: U, isInFallback: ee, isHydrating: Y } = c;
  if (U)
    c.pendingBranch = h, nn(h, U) ? (l(
      U,
      h,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : ee && (Y || (l(
      k,
      T,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), Ye(c, T)))) : (c.pendingId = gn++, Y ? (c.isHydrating = !1, c.activeBranch = U) : N(U, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = C("div"), ee ? (l(
      null,
      h,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : (l(
      k,
      T,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), Ye(c, T))) : k && nn(h, k) ? (l(
      k,
      h,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (l(
      null,
      h,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (k && nn(h, k))
    l(
      k,
      h,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), Ye(c, h);
  else if (lt(t, "onPending"), c.pendingBranch = h, h.shapeFlag & 512 ? c.pendingId = h.component.suspenseId : c.pendingId = gn++, l(
    null,
    h,
    c.hiddenContainer,
    null,
    o,
    c,
    i,
    s,
    a
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: Q, pendingId: te } = c;
    Q > 0 ? setTimeout(() => {
      c.pendingId === te && c.fallback(T);
    }, Q) : Q === 0 && c.fallback(T);
  }
}
let er = !1;
function no(e, t, n, r, o, i, s, a, l, N, C = !1) {
   true && !er && (er = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: h,
    um: T,
    n: k,
    o: { parentNode: U, remove: ee }
  } = N;
  let Y;
  const Q = ls(e);
  Q && t && t.pendingBranch && (Y = t.pendingId, t.deps++);
  const te = e.props ? Co(e.props.timeout) : void 0;
   true && ui(te, "Suspense timeout");
  const L = i, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: s,
    container: r,
    hiddenContainer: o,
    deps: 0,
    pendingId: gn++,
    timeout: typeof te == "number" ? te : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !C,
    isHydrating: C,
    isUnmounted: !1,
    effects: [],
    resolve(D = !1, m = !1) {
      if (true) {
        if (!D && !v.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (v.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: S,
        activeBranch: d,
        pendingBranch: g,
        pendingId: f,
        effects: u,
        parentComponent: O,
        container: y
      } = v;
      let b = !1;
      v.isHydrating ? v.isHydrating = !1 : D || (b = d && g.transition && g.transition.mode === "out-in", b && (d.transition.afterLeave = () => {
        f === v.pendingId && (h(
          g,
          y,
          i === L ? k(d) : i,
          0
        ), Tt(u));
      }), d && (U(d.el) === y && (i = k(d)), T(d, O, v, !0)), b || h(g, y, i, 0)), Ye(v, g), v.pendingBranch = null, v.isInFallback = !1;
      let R = v.parent, M = !1;
      for (; R; ) {
        if (R.pendingBranch) {
          R.effects.push(...u), M = !0;
          break;
        }
        R = R.parent;
      }
      !M && !b && Tt(u), v.effects = [], Q && t && t.pendingBranch && Y === t.pendingId && (t.deps--, t.deps === 0 && !m && t.resolve()), lt(S, "onResolve");
    },
    fallback(D) {
      if (!v.pendingBranch)
        return;
      const { vnode: m, activeBranch: S, parentComponent: d, container: g, namespace: f } = v;
      lt(m, "onFallback");
      const u = k(S), O = () => {
        v.isInFallback && (c(
          null,
          D,
          g,
          u,
          d,
          null,
          // fallback tree will not have suspense context
          f,
          a,
          l
        ), Ye(v, D));
      }, y = D.transition && D.transition.mode === "out-in";
      y && (S.transition.afterLeave = O), v.isInFallback = !0, T(
        S,
        d,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), y || O();
    },
    move(D, m, S) {
      v.activeBranch && h(v.activeBranch, D, m, S), v.container = D;
    },
    next() {
      return v.activeBranch && k(v.activeBranch);
    },
    registerDep(D, m, S) {
      const d = !!v.pendingBranch;
      d && v.deps++;
      const g = D.vnode.el;
      D.asyncDep.catch((f) => {
        jt(f, D, 0);
      }).then((f) => {
        if (D.isUnmounted || v.isUnmounted || v.pendingId !== D.suspenseId)
          return;
        D.asyncResolved = !0;
        const { vnode: u } = D;
         true && Ar(u), ws(D, f, !1), g && (u.el = g);
        const O = !g && D.subTree.el;
        m(
          D,
          u,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          U(g || D.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          g ? null : k(D.subTree),
          v,
          s,
          S
        ), O && ee(O), to(D, u.el),  true && Br(), d && --v.deps === 0 && v.resolve();
      });
    },
    unmount(D, m) {
      v.isUnmounted = !0, v.activeBranch && T(
        v.activeBranch,
        n,
        D,
        m
      ), v.pendingBranch && T(
        v.pendingBranch,
        n,
        D,
        m
      );
    }
  };
  return v;
}
function as(e, t, n, r, o, i, s, a, l) {
  const N = t.suspense = no(
    t,
    r,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    i,
    s,
    a,
    !0
  ), C = l(
    e,
    N.pendingBranch = t.ssContent,
    n,
    N,
    i,
    s
  );
  return N.deps === 0 && N.resolve(!1, !0), C;
}
function cs(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = tr(
    r ? n.default : n
  ), e.ssFallback = r ? tr(n.fallback) : Te(Xe);
}
function tr(e) {
  let t;
  if (F(e)) {
    const n = Ze && e._c;
    n && (e._d = !1, Ge()), e = e(), n && (e._d = !0, t = ce, oo());
  }
  if (H(e)) {
    const n = eo(e);
     true && !n && e.filter((r) => r !== Yr).length > 0 && $("<Suspense> slots expect a single root node."), e = n;
  }
  return e = hs(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function us(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Tt(e);
}
function Ye(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, r && r.subTree === n && (r.vnode.el = o, to(r, o));
}
function ls(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Rn = Symbol.for("v-fgt"), ro = Symbol.for("v-txt"), Xe = Symbol.for("v-cmt"), Dt = [];
let ce = null;
function Ge(e = !1) {
  Dt.push(ce = e ? null : []);
}
function oo() {
  Dt.pop(), ce = Dt[Dt.length - 1] || null;
}
let Ze = 1;
function nr(e) {
  Ze += e, e < 0 && ce && (ce.hasOnce = !0);
}
function io(e) {
  return e.dynamicChildren = Ze > 0 ? ce || yo : null, oo(), Ze > 0 && ce && ce.push(e), e;
}
function tn(e, t, n, r, o, i) {
  return io(
    Vt(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
    )
  );
}
function so(e, t, n, r, o) {
  return io(
    Te(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function An(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nn(e, t) {
  if ( true && t.shapeFlag & 6 && e.component) {
    const n = Nt.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const fs = (...e) => co(
  ...e
), ao = ({ key: e }) => e ?? null, Ct = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || se(e) || F(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function Vt(e, t = null, n = null, r = 0, o = null, i = e === Rn ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ao(t),
    ref: t && Ct(t),
    scopeId: Ur,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return a ? (Bn(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ue(n) ? 8 : 16),  true && l.key !== l.key && $("VNode created with invalid key (NaN). VNode type:", l.type), Ze > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ce.push(l), l;
}
const Te =  true ? fs : 0;
function co(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === Yr) && ( true && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = Xe), An(e)) {
    const a = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bn(a, n), Ze > 0 && !i && ce && (a.shapeFlag & 6 ? ce[ce.indexOf(e)] = a : ce.push(a)), a.patchFlag = -2, a;
  }
  if (po(e) && (e = e.__vccOpts), t) {
    t = ds(t);
    let { class: a, style: l } = t;
    a && !ue(a) && (t.class = We(a)), J(l) && (St(l) && !H(l) && (l = ae({}, l)), t.style = mn(l));
  }
  const s = ue(e) ? 1 : ns(e) ? 128 : Oi(e) ? 64 : J(e) ? 4 : F(e) ? 2 : 0;
  return  true && s & 4 && St(e) && (e = q(e), $(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Vt(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function ds(e) {
  return e ? St(e) || Xr(e) ? ae({}, e) : e : null;
}
function ft(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: l } = e, N = t ? vs(o || {}, t) : o, C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: N,
    key: N && ao(N),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? H(i) ? i.concat(Ct(t)) : [i, Ct(t)] : Ct(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children:  true && s === -1 && H(a) ? a.map(uo) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Rn ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Kr(
    C,
    l.clone(C)
  ), C;
}
function uo(e) {
  const t = ft(e);
  return H(e.children) && (t.children = e.children.map(uo)), t;
}
function ps(e = " ", t = 0) {
  return Te(ro, null, e, t);
}
function rr(e = "", t = !1) {
  return t ? (Ge(), so(Xe, null, e)) : Te(Xe, null, e);
}
function hs(e) {
  return e == null || typeof e == "boolean" ? Te(Xe) : H(e) ? Te(
    Rn,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? gs(e) : Te(ro, null, String(e));
}
function gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function Bn(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Bn(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Xr(t) ? t._ctx = de : o === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ps(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = We([t.class, r.class]));
      else if (o === "style")
        t.style = mn([t.style, r.style]);
      else if (Eo(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(H(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let re = null;
const lo = () => re || de;
let $t;
{
  const e = hr(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  $t = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => re = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Kt = n
  );
}
const dt = (e) => {
  const t = re;
  return $t(e), e.scope.on(), () => {
    e.scope.off(), $t(t);
  };
}, _s = () => {
  re && re.scope.off(), $t(null);
};
function ms(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function ws(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) ? ( true && An(t) && $(
    "setup() should not return VNodes directly - return a render function instead."
  ),  true && (e.devtoolsRawSetupState = t), e.setupState = Rr(t),  true && Li(e)) :  true && t !== void 0 && $(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bs(e, n);
}
let or;
function bs(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && or && !r.render) {
      const o = r.template || Pn(e).template;
      if (o) {
         true && Gi(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: l } = r, N = ae(
          ae(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          l
        );
        r.render = or(o, N),  true && Xi(e, "compile");
      }
    }
    e.render = r.render || ie;
  }
  {
    const o = dt(e);
    ze();
    try {
      Hi(e);
    } finally {
      et(), o();
    }
  }
   true && !r.render && e.render === ie && !t && (r.template ? $(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : $("Component is missing template or render function: ", r));
}
"development";
function ys(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rr(zo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in st)
        return st[n](e);
    },
    has(t, n) {
      return n in t || n in st;
    }
  })) : e.proxy;
}
const Es = /(?:^|[-_])(\w)/g, Os = (e) => e.replace(Es, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function fo(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vn(e, t, n = !1) {
  let r = fo(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Os(r) : n ? "App" : "Anonymous";
}
function po(e) {
  return F(e) && "__vccOpts" in e;
}
const Ns = (e, t) => {
  const n = ni(e, t, Kt);
  if (true) {
    const r = lo();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function xs() {
  if ( false || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      return J(c) ? c.__isVue ? ["div", e, "VueInstance"] : se(c) ? [
        "div",
        {},
        ["span", e, C(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in c ? c._value : c),
        ">"
      ] : Qe(c) ? [
        "div",
        {},
        ["span", e, pe(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Pe(c) ? " (readonly)" : ""}`
      ] : Pe(c) ? [
        "div",
        {},
        ["span", e, pe(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const h = [];
    c.type.props && c.props && h.push(s("props", q(c.props))), c.setupState !== ve && h.push(s("setup", c.setupState)), c.data !== ve && h.push(s("data", q(c.data)));
    const T = l(c, "computed");
    T && h.push(s("computed", T));
    const k = l(c, "inject");
    return k && h.push(s("injected", k)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), h;
  }
  function s(c, h) {
    return h = ae({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((T) => [
          "div",
          {},
          ["span", r, T + ": "],
          a(h[T], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, h = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : J(c) ? ["object", { object: h ? q(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const T = c.type;
    if (F(T))
      return;
    const k = {};
    for (const U in c.ctx)
      N(T, U, h) && (k[U] = c.ctx[U]);
    return k;
  }
  function N(c, h, T) {
    const k = c[T];
    if (H(k) && k.includes(h) || J(k) && h in k || c.extends && N(c.extends, h, T) || c.mixins && c.mixins.some((U) => N(U, h, T)))
      return !0;
  }
  function C(c) {
    return pe(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
"development";
"development";
"development";
/**
* vue v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ds() {
  xs();
}
 true && Ds();
const rn = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function Cs(e) {
  switch (!0) {
    case /^[0-9]*$/.test(e):
      return rn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return rn.alphanumeric;
    default:
      return rn.byte;
  }
}
const yt = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function kt(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !yt(e) || !yt(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? e[r] = i : yt(o) && yt(i) ? e[r] = kt(Object.assign({}, o), i) : e[r] = i;
  }), kt(e, ...t));
}
function Ss(e, t) {
  const n = document.createElement("a");
  n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function Ms({
  originalHeight: e,
  originalWidth: t,
  maxHiddenDots: n,
  maxHiddenAxisDots: r,
  dotSize: o
}) {
  const i = { x: 0, y: 0 }, s = { x: 0, y: 0 };
  if (e <= 0 || t <= 0 || n <= 0 || o <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const a = e / t;
  return i.x = Math.floor(Math.sqrt(n / a)), i.x <= 0 && (i.x = 1), r && r < i.x && (i.x = r), i.x % 2 === 0 && i.x--, s.x = i.x * o, i.y = 1 + 2 * Math.ceil((i.x * a - 1) / 2), s.y = Math.round(s.x * a), (i.y * i.x > n || r && r < i.y) && (r && r < i.y ? (i.y = r, i.y % 2 === 0 && i.x--) : i.y -= 2, s.y = i.y * o, i.x = 1 + 2 * Math.ceil((i.y / a - 1) / 2), s.x = Math.round(s.y / a)), {
    height: s.y,
    width: s.x,
    hideYDots: i.y,
    hideXDots: i.x
  };
}
const Is = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, Ue = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class on {
  constructor({ context: t, type: n }) {
    ne(this, "_context");
    ne(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case Ue.dots:
        a = this._drawDot;
        break;
      case Ue.classy:
        a = this._drawClassy;
        break;
      case Ue.classyRounded:
        a = this._drawClassyRounded;
        break;
      case Ue.rounded:
        a = this._drawRounded;
        break;
      case Ue.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Ue.square:
      default:
        a = this._drawSquare;
    }
    a.call(this, { x: t, y: n, size: r, context: i, getNeighbor: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _basicDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
  // if rotation === 0 - right side is rounded
  _basicSideRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2);
      }
    });
  }
  _basicCornersRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(0, n / 2), r.arc(0, 0, n / 2, Math.PI / 2, Math.PI), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  _basicCornersExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawSquare({ x: t, y: n, size: r, context: o }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), N = +i(0, 1), C = s + a + l + N;
    if (C === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (C > 2 || s && a || l && N) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (C === 2) {
      let c = 0;
      s && l ? c = Math.PI / 2 : l && a ? c = Math.PI : a && N && (c = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (C === 1) {
      let c = 0;
      l ? c = Math.PI / 2 : a ? c = Math.PI : N && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), N = +i(0, 1), C = s + a + l + N;
    if (C === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (C > 2 || s && a || l && N) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (C === 2) {
      let c = 0;
      s && l ? c = Math.PI / 2 : l && a ? c = Math.PI : a && N && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (C === 1) {
      let c = 0;
      l ? c = Math.PI / 2 : a ? c = Math.PI : N && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), N = +i(0, 1);
    if (s + a + l + N === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !N) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), N = +i(0, 1);
    if (s + a + l + N === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !N) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
}
const sn = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class Ts {
  constructor({ context: t, type: n }) {
    ne(this, "_context");
    ne(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case sn.square:
        a = this._drawSquare;
        break;
      case sn.extraRounded:
        a = this._drawExtraRounded;
        break;
      case sn.dot:
      default:
        a = this._drawDot;
    }
    a.call(this, { x: t, y: n, size: r, context: i, rotation: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _basicDot(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(0, 0, n / 2, 0, Math.PI * 2), r.arc(0, 0, n / 2 - o, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.rect(-n / 2, -n / 2, n, n), r.rect(-n / 2 + o, -n / 2 + o, n - 2 * o, n - 2 * o);
      }
    });
  }
  _basicExtraRounded(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(-o, -o, 2.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -3.5 * o), r.arc(o, -o, 2.5 * o, -Math.PI / 2, 0), r.lineTo(3.5 * o, -o), r.arc(o, o, 2.5 * o, 0, Math.PI / 2), r.lineTo(-o, 3.5 * o), r.arc(-o, o, 2.5 * o, Math.PI / 2, Math.PI), r.lineTo(-3.5 * o, -o), r.arc(-o, -o, 1.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -2.5 * o), r.arc(o, -o, 1.5 * o, -Math.PI / 2, 0), r.lineTo(2.5 * o, -o), r.arc(o, o, 1.5 * o, 0, Math.PI / 2), r.lineTo(-o, 2.5 * o), r.arc(-o, o, 1.5 * o, Math.PI / 2, Math.PI), r.lineTo(-2.5 * o, -o);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawSquare({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicExtraRounded({ x: t, y: n, size: r, context: o, rotation: i });
  }
}
const ir = {
  dot: "dot",
  square: "square"
};
class Ps {
  constructor({ context: t, type: n }) {
    ne(this, "_context");
    ne(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case ir.square:
        this._drawSquare({ x: t, y: n, size: r, context: i, rotation: o });
        break;
      case ir.dot:
      default:
        this._drawDot({ x: t, y: n, size: r, context: i, rotation: o });
    }
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.moveTo(0, 0), o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _drawDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _drawSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
}
const Rs = {
  radial: "radial",
  linear: "linear"
}, Re = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], Ae = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
class As {
  // TODO don't pass all options to this class
  constructor(t) {
    ne(this, "_canvas");
    ne(this, "_options");
    ne(this, "_qr");
    ne(this, "_image");
    this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
  }
  get context() {
    return this._canvas.getContext("2d");
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  getCanvas() {
    return this._canvas;
  }
  clear() {
    const t = this.context;
    t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(t) {
    const n = t.getModuleCount(), r = Math.min(this._options.width, this._options.height) - this._options.margin * 2, o = Math.floor(r / n);
    let i = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: s, qrOptions: a } = this._options, l = s.imageSize * Is[a.errorCorrectionLevel], N = Math.floor(l * n * n);
      i = Ms({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: N,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var l, N, C, c, h, T;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (l = Re[s]) != null && l[a] || (N = Re[s - n + 7]) != null && N[a] || (C = Re[s]) != null && C[a - n + 7] || (c = Ae[s]) != null && c[a] || (h = Ae[s - n + 7]) != null && h[a] || (T = Ae[s]) != null && T[a - n + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: i.width, height: i.height, count: n, dotSize: o });
  }
  drawBackground() {
    const t = this.context, n = this._options;
    if (t) {
      if (n.backgroundOptions.gradient) {
        const r = n.backgroundOptions.gradient, o = this._createGradient({
          context: t,
          options: r,
          additionalRotation: 0,
          x: 0,
          y: 0,
          size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
        });
        r.colorStops.forEach(({ offset: i, color: s }) => {
          o.addColorStop(i, s);
        }), t.fillStyle = o;
      } else
        n.backgroundOptions.color && (t.fillStyle = n.backgroundOptions.color);
      t.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount();
    if (o > r.width || o > r.height)
      throw "The canvas is too small.";
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), l = Math.floor((r.height - o * s) / 2), N = new on({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let C = 0; C < o; C++)
      for (let c = 0; c < o; c++)
        t && !t(C, c) || this._qr.isDark(C, c) && N.draw(
          a + C * s,
          l + c * s,
          s,
          (h, T) => C + h < 0 || c + T < 0 || C + h >= o || c + T >= o || t && !t(C + h, c + T) ? !1 : !!this._qr && this._qr.isDark(C + h, c + T)
        );
    if (r.dotsOptions.gradient) {
      const C = r.dotsOptions.gradient, c = this._createGradient({
        context: n,
        options: C,
        additionalRotation: 0,
        x: a,
        y: l,
        size: o * s
      });
      C.colorStops.forEach(({ offset: h, color: T }) => {
        c.addColorStop(h, T);
      }), n.fillStyle = n.strokeStyle = c;
    } else
      r.dotsOptions.color && (n.fillStyle = n.strokeStyle = r.dotsOptions.color);
    n.fill("evenodd");
  }
  drawCorners(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, l = s * 3, N = Math.floor((r.width - o * s) / 2), C = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, h, T]) => {
      var ee, Y, Q, te, L, v, D, m, S, d;
      if (t && !t(c, h))
        return;
      const k = N + c * s * (o - 7), U = C + h * s * (o - 7);
      if ((ee = r.cornersSquareOptions) != null && ee.type) {
        const g = new Ts({ context: n, type: (Y = r.cornersSquareOptions) == null ? void 0 : Y.type });
        n.beginPath(), g.draw(k, U, a, T);
      } else {
        const g = new on({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Re.length; f++)
          for (let u = 0; u < Re[f].length; u++)
            (Q = Re[f]) != null && Q[u] && g.draw(
              k + f * s,
              U + u * s,
              s,
              (O, y) => {
                var b;
                return !!((b = Re[f + O]) != null && b[u + y]);
              }
            );
      }
      if ((te = r.cornersSquareOptions) != null && te.gradient) {
        const g = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: g,
          additionalRotation: T,
          x: k,
          y: U,
          size: a
        });
        g.colorStops.forEach(({ offset: u, color: O }) => {
          f.addColorStop(u, O);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (L = r.cornersSquareOptions) != null && L.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (v = r.cornersDotOptions) != null && v.type) {
        const g = new Ps({ context: n, type: (D = r.cornersDotOptions) == null ? void 0 : D.type });
        n.beginPath(), g.draw(k + s * 2, U + s * 2, l, T);
      } else {
        const g = new on({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Ae.length; f++)
          for (let u = 0; u < Ae[f].length; u++)
            (m = Ae[f]) != null && m[u] && g.draw(
              k + f * s,
              U + u * s,
              s,
              (O, y) => {
                var b;
                return !!((b = Ae[f + O]) != null && b[u + y]);
              }
            );
      }
      if ((S = r.cornersDotOptions) != null && S.gradient) {
        const g = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: g,
          additionalRotation: T,
          x: k + s * 2,
          y: U + s * 2,
          size: l
        });
        g.colorStops.forEach(({ offset: u, color: O }) => {
          f.addColorStop(u, O);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (d = r.cornersDotOptions) != null && d.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
      n.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((t, n) => {
      const r = this._options, o = new Image();
      if (!r.image)
        return n("Image is not defined");
      typeof r.imageOptions.crossOrigin == "string" && (o.crossOrigin = r.imageOptions.crossOrigin), this._image = o, o.onload = () => {
        t();
      }, o.src = r.image;
    });
  }
  drawImage({
    width: t,
    height: n,
    count: r,
    dotSize: o
  }) {
    const i = this.context;
    if (!i)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const s = this._options, a = Math.floor((s.width - r * o) / 2), l = Math.floor((s.height - r * o) / 2), N = a + s.imageOptions.margin + (r * o - t) / 2, C = l + s.imageOptions.margin + (r * o - n) / 2, c = t - s.imageOptions.margin * 2, h = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, N, C, c < 0 ? 0 : c, h < 0 ? 0 : h);
  }
  _createGradient({
    context: t,
    options: n,
    additionalRotation: r,
    x: o,
    y: i,
    size: s
  }) {
    let a;
    if (n.type === Rs.radial)
      a = t.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const l = ((n.rotation || 0) + r) % (2 * Math.PI), N = (l + 2 * Math.PI) % (2 * Math.PI);
      let C = o + s / 2, c = i + s / 2, h = o + s / 2, T = i + s / 2;
      N >= 0 && N <= 0.25 * Math.PI || N > 1.75 * Math.PI && N <= 2 * Math.PI ? (C = C - s / 2, c = c - s / 2 * Math.tan(l), h = h + s / 2, T = T + s / 2 * Math.tan(l)) : N > 0.25 * Math.PI && N <= 0.75 * Math.PI ? (c = c - s / 2, C = C - s / 2 / Math.tan(l), T = T + s / 2, h = h + s / 2 / Math.tan(l)) : N > 0.75 * Math.PI && N <= 1.25 * Math.PI ? (C = C + s / 2, c = c + s / 2 * Math.tan(l), h = h - s / 2, T = T - s / 2 * Math.tan(l)) : N > 1.25 * Math.PI && N <= 1.75 * Math.PI && (c = c + s / 2, C = C + s / 2 / Math.tan(l), T = T - s / 2, h = h - s / 2 / Math.tan(l)), a = t.createLinearGradient(Math.round(C), Math.round(c), Math.round(h), Math.round(T));
    }
    return a;
  }
}
const ho = {};
for (let e = 0; e <= 40; e++)
  ho[e] = e;
const Bs = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, sr = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: ho[0],
    mode: void 0,
    errorCorrectionLevel: Bs.Q
  },
  imageOptions: {
    hideBackgroundDots: !0,
    imageSize: 0.4,
    crossOrigin: void 0,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    color: "#fff"
  }
};
function Et(e) {
  const t = { ...e };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), t;
}
function ar(e) {
  const t = { ...e };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = Et(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = Et(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = Et(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = Et(t.backgroundOptions.gradient))), t;
}
function Vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(v, D) {
      var m = 236, S = 17, d = v, g = i[D], f = null, u = 0, O = null, y = [], b = {}, R = function(_, w) {
        u = d * 4 + 17, f = function(p) {
          for (var E = new Array(p), x = 0; x < p; x += 1) {
            E[x] = new Array(p);
            for (var I = 0; I < p; I += 1)
              E[x][I] = null;
          }
          return E;
        }(u), M(0, 0), M(u - 7, 0), M(0, u - 7), Z(), K(), me(_, w), d >= 7 && le(_), O == null && (O = vo(d, g, y)), be(O, w);
      }, M = function(_, w) {
        for (var p = -1; p <= 7; p += 1)
          if (!(_ + p <= -1 || u <= _ + p))
            for (var E = -1; E <= 7; E += 1)
              w + E <= -1 || u <= w + E || (0 <= p && p <= 6 && (E == 0 || E == 6) || 0 <= E && E <= 6 && (p == 0 || p == 6) || 2 <= p && p <= 4 && 2 <= E && E <= 4 ? f[_ + p][w + E] = !0 : f[_ + p][w + E] = !1);
      }, P = function() {
        for (var _ = 0, w = 0, p = 0; p < 8; p += 1) {
          R(!0, p);
          var E = a.getLostPoint(b);
          (p == 0 || _ > E) && (_ = E, w = p);
        }
        return w;
      }, K = function() {
        for (var _ = 8; _ < u - 8; _ += 1)
          f[_][6] == null && (f[_][6] = _ % 2 == 0);
        for (var w = 8; w < u - 8; w += 1)
          f[6][w] == null && (f[6][w] = w % 2 == 0);
      }, Z = function() {
        for (var _ = a.getPatternPosition(d), w = 0; w < _.length; w += 1)
          for (var p = 0; p < _.length; p += 1) {
            var E = _[w], x = _[p];
            if (f[E][x] == null)
              for (var I = -2; I <= 2; I += 1)
                for (var B = -2; B <= 2; B += 1)
                  I == -2 || I == 2 || B == -2 || B == 2 || I == 0 && B == 0 ? f[E + I][x + B] = !0 : f[E + I][x + B] = !1;
          }
      }, le = function(_) {
        for (var w = a.getBCHTypeNumber(d), p = 0; p < 18; p += 1) {
          var E = !_ && (w >> p & 1) == 1;
          f[Math.floor(p / 3)][p % 3 + u - 8 - 3] = E;
        }
        for (var p = 0; p < 18; p += 1) {
          var E = !_ && (w >> p & 1) == 1;
          f[p % 3 + u - 8 - 3][Math.floor(p / 3)] = E;
        }
      }, me = function(_, w) {
        for (var p = g << 3 | w, E = a.getBCHTypeInfo(p), x = 0; x < 15; x += 1) {
          var I = !_ && (E >> x & 1) == 1;
          x < 6 ? f[x][8] = I : x < 8 ? f[x + 1][8] = I : f[u - 15 + x][8] = I;
        }
        for (var x = 0; x < 15; x += 1) {
          var I = !_ && (E >> x & 1) == 1;
          x < 8 ? f[8][u - x - 1] = I : x < 9 ? f[8][15 - x - 1 + 1] = I : f[8][15 - x - 1] = I;
        }
        f[u - 8][8] = !_;
      }, be = function(_, w) {
        for (var p = -1, E = u - 1, x = 7, I = 0, B = a.getMaskFunction(w), A = u - 1; A > 0; A -= 2)
          for (A == 6 && (A -= 1); ; ) {
            for (var W = 0; W < 2; W += 1)
              if (f[E][A - W] == null) {
                var G = !1;
                I < _.length && (G = (_[I] >>> x & 1) == 1);
                var V = B(E, A - W);
                V && (G = !G), f[E][A - W] = G, x -= 1, x == -1 && (I += 1, x = 7);
              }
            if (E += p, E < 0 || u <= E) {
              E -= p, p = -p;
              break;
            }
          }
      }, qe = function(_, w) {
        for (var p = 0, E = 0, x = 0, I = new Array(w.length), B = new Array(w.length), A = 0; A < w.length; A += 1) {
          var W = w[A].dataCount, G = w[A].totalCount - W;
          E = Math.max(E, W), x = Math.max(x, G), I[A] = new Array(W);
          for (var V = 0; V < I[A].length; V += 1)
            I[A][V] = 255 & _.getBuffer()[V + p];
          p += W;
          var he = a.getErrorCorrectPolynomial(G), ge = N(I[A], he.getLength() - 1), kn = ge.mod(he);
          B[A] = new Array(he.getLength() - 1);
          for (var V = 0; V < B[A].length; V += 1) {
            var Ln = V + kn.getLength() - B[A].length;
            B[A][V] = Ln >= 0 ? kn.getAt(Ln) : 0;
          }
        }
        for (var Fn = 0, V = 0; V < w.length; V += 1)
          Fn += w[V].totalCount;
        for (var Wt = new Array(Fn), pt = 0, V = 0; V < E; V += 1)
          for (var A = 0; A < w.length; A += 1)
            V < I[A].length && (Wt[pt] = I[A][V], pt += 1);
        for (var V = 0; V < x; V += 1)
          for (var A = 0; A < w.length; A += 1)
            V < B[A].length && (Wt[pt] = B[A][V], pt += 1);
        return Wt;
      }, vo = function(_, w, p) {
        for (var E = C.getRSBlocks(_, w), x = c(), I = 0; I < p.length; I += 1) {
          var B = p[I];
          x.put(B.getMode(), 4), x.put(B.getLength(), a.getLengthInBits(B.getMode(), _)), B.write(x);
        }
        for (var A = 0, I = 0; I < E.length; I += 1)
          A += E[I].dataCount;
        if (x.getLengthInBits() > A * 8)
          throw "code length overflow. (" + x.getLengthInBits() + ">" + A * 8 + ")";
        for (x.getLengthInBits() + 4 <= A * 8 && x.put(0, 4); x.getLengthInBits() % 8 != 0; )
          x.putBit(!1);
        for (; !(x.getLengthInBits() >= A * 8 || (x.put(m, 8), x.getLengthInBits() >= A * 8)); )
          x.put(S, 8);
        return qe(x, E);
      };
      b.addData = function(_, w) {
        w = w || "Byte";
        var p = null;
        switch (w) {
          case "Numeric":
            p = h(_);
            break;
          case "Alphanumeric":
            p = T(_);
            break;
          case "Byte":
            p = k(_);
            break;
          case "Kanji":
            p = U(_);
            break;
          default:
            throw "mode:" + w;
        }
        y.push(p), O = null;
      }, b.isDark = function(_, w) {
        if (_ < 0 || u <= _ || w < 0 || u <= w)
          throw _ + "," + w;
        return f[_][w];
      }, b.getModuleCount = function() {
        return u;
      }, b.make = function() {
        if (d < 1) {
          for (var _ = 1; _ < 40; _++) {
            for (var w = C.getRSBlocks(_, g), p = c(), E = 0; E < y.length; E++) {
              var x = y[E];
              p.put(x.getMode(), 4), p.put(x.getLength(), a.getLengthInBits(x.getMode(), _)), x.write(p);
            }
            for (var I = 0, E = 0; E < w.length; E++)
              I += w[E].dataCount;
            if (p.getLengthInBits() <= I * 8)
              break;
          }
          d = _;
        }
        R(!1, P());
      }, b.createTableTag = function(_, w) {
        _ = _ || 2, w = typeof w > "u" ? _ * 4 : w;
        var p = "";
        p += '<table style="', p += " border-width: 0px; border-style: none;", p += " border-collapse: collapse;", p += " padding: 0px; margin: " + w + "px;", p += '">', p += "<tbody>";
        for (var E = 0; E < b.getModuleCount(); E += 1) {
          p += "<tr>";
          for (var x = 0; x < b.getModuleCount(); x += 1)
            p += '<td style="', p += " border-width: 0px; border-style: none;", p += " border-collapse: collapse;", p += " padding: 0px; margin: 0px;", p += " width: " + _ + "px;", p += " height: " + _ + "px;", p += " background-color: ", p += b.isDark(E, x) ? "#000000" : "#ffffff", p += ";", p += '"/>';
          p += "</tr>";
        }
        return p += "</tbody>", p += "</table>", p;
      }, b.createSvgTag = function(_, w, p, E) {
        var x = {};
        typeof arguments[0] == "object" && (x = arguments[0], _ = x.cellSize, w = x.margin, p = x.alt, E = x.title), _ = _ || 2, w = typeof w > "u" ? _ * 4 : w, p = typeof p == "string" ? { text: p } : p || {}, p.text = p.text || null, p.id = p.text ? p.id || "qrcode-description" : null, E = typeof E == "string" ? { text: E } : E || {}, E.text = E.text || null, E.id = E.text ? E.id || "qrcode-title" : null;
        var I = b.getModuleCount() * _ + w * 2, B, A, W, G, V = "", he;
        for (he = "l" + _ + ",0 0," + _ + " -" + _ + ",0 0,-" + _ + "z ", V += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', V += x.scalable ? "" : ' width="' + I + 'px" height="' + I + 'px"', V += ' viewBox="0 0 ' + I + " " + I + '" ', V += ' preserveAspectRatio="xMinYMin meet"', V += E.text || p.text ? ' role="img" aria-labelledby="' + He([E.id, p.id].join(" ").trim()) + '"' : "", V += ">", V += E.text ? '<title id="' + He(E.id) + '">' + He(E.text) + "</title>" : "", V += p.text ? '<description id="' + He(p.id) + '">' + He(p.text) + "</description>" : "", V += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', V += '<path d="', W = 0; W < b.getModuleCount(); W += 1)
          for (G = W * _ + w, B = 0; B < b.getModuleCount(); B += 1)
            b.isDark(W, B) && (A = B * _ + w, V += "M" + A + "," + G + he);
        return V += '" stroke="transparent" fill="black"/>', V += "</svg>", V;
      }, b.createDataURL = function(_, w) {
        _ = _ || 2, w = typeof w > "u" ? _ * 4 : w;
        var p = b.getModuleCount() * _ + w * 2, E = w, x = p - w;
        return L(p, p, function(I, B) {
          if (E <= I && I < x && E <= B && B < x) {
            var A = Math.floor((I - E) / _), W = Math.floor((B - E) / _);
            return b.isDark(W, A) ? 0 : 1;
          } else
            return 1;
        });
      }, b.createImgTag = function(_, w, p) {
        _ = _ || 2, w = typeof w > "u" ? _ * 4 : w;
        var E = b.getModuleCount() * _ + w * 2, x = "";
        return x += "<img", x += ' src="', x += b.createDataURL(_, w), x += '"', x += ' width="', x += E, x += '"', x += ' height="', x += E, x += '"', p && (x += ' alt="', x += He(p), x += '"'), x += "/>", x;
      };
      var He = function(_) {
        for (var w = "", p = 0; p < _.length; p += 1) {
          var E = _.charAt(p);
          switch (E) {
            case "<":
              w += "&lt;";
              break;
            case ">":
              w += "&gt;";
              break;
            case "&":
              w += "&amp;";
              break;
            case '"':
              w += "&quot;";
              break;
            default:
              w += E;
              break;
          }
        }
        return w;
      }, _o = function(_) {
        var w = 1;
        _ = typeof _ > "u" ? w * 2 : _;
        var p = b.getModuleCount() * w + _ * 2, E = _, x = p - _, I, B, A, W, G, V = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, he = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, ge = "";
        for (I = 0; I < p; I += 2) {
          for (A = Math.floor((I - E) / w), W = Math.floor((I + 1 - E) / w), B = 0; B < p; B += 1)
            G = "█", E <= B && B < x && E <= I && I < x && b.isDark(A, Math.floor((B - E) / w)) && (G = " "), E <= B && B < x && E <= I + 1 && I + 1 < x && b.isDark(W, Math.floor((B - E) / w)) ? G += " " : G += "█", ge += _ < 1 && I + 1 >= x ? he[G] : V[G];
          ge += `
`;
        }
        return p % 2 && _ > 0 ? ge.substring(0, ge.length - p - 1) + Array(p + 1).join("▀") : ge.substring(0, ge.length - 1);
      };
      return b.createASCII = function(_, w) {
        if (_ = _ || 1, _ < 2)
          return _o(w);
        _ -= 1, w = typeof w > "u" ? _ * 2 : w;
        var p = b.getModuleCount() * _ + w * 2, E = w, x = p - w, I, B, A, W, G = Array(_ + 1).join("██"), V = Array(_ + 1).join("  "), he = "", ge = "";
        for (I = 0; I < p; I += 1) {
          for (A = Math.floor((I - E) / _), ge = "", B = 0; B < p; B += 1)
            W = 1, E <= B && B < x && E <= I && I < x && b.isDark(A, Math.floor((B - E) / _)) && (W = 0), ge += W ? G : V;
          for (A = 0; A < _; A += 1)
            he += ge + `
`;
        }
        return he.substring(0, he.length - 1);
      }, b.renderTo2dContext = function(_, w) {
        w = w || 2;
        for (var p = b.getModuleCount(), E = 0; E < p; E++)
          for (var x = 0; x < p; x++)
            _.fillStyle = b.isDark(E, x) ? "black" : "white", _.fillRect(E * w, x * w, w, w);
      }, b;
    };
    r.stringToBytesFuncs = {
      default: function(v) {
        for (var D = [], m = 0; m < v.length; m += 1) {
          var S = v.charCodeAt(m);
          D.push(S & 255);
        }
        return D;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(v, D) {
      var m = function() {
        for (var d = Q(v), g = function() {
          var K = d.read();
          if (K == -1)
            throw "eof";
          return K;
        }, f = 0, u = {}; ; ) {
          var O = d.read();
          if (O == -1)
            break;
          var y = g(), b = g(), R = g(), M = String.fromCharCode(O << 8 | y), P = b << 8 | R;
          u[M] = P, f += 1;
        }
        if (f != D)
          throw f + " != " + D;
        return u;
      }(), S = "?".charCodeAt(0);
      return function(d) {
        for (var g = [], f = 0; f < d.length; f += 1) {
          var u = d.charCodeAt(f);
          if (u < 128)
            g.push(u);
          else {
            var O = m[d.charAt(f)];
            typeof O == "number" ? (O & 255) == O ? g.push(O) : (g.push(O >>> 8), g.push(O & 255)) : g.push(S);
          }
        }
        return g;
      };
    };
    var o = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, i = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, s = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, a = function() {
      var v = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ], D = 1335, m = 7973, S = 21522, d = {}, g = function(f) {
        for (var u = 0; f != 0; )
          u += 1, f >>>= 1;
        return u;
      };
      return d.getBCHTypeInfo = function(f) {
        for (var u = f << 10; g(u) - g(D) >= 0; )
          u ^= D << g(u) - g(D);
        return (f << 10 | u) ^ S;
      }, d.getBCHTypeNumber = function(f) {
        for (var u = f << 12; g(u) - g(m) >= 0; )
          u ^= m << g(u) - g(m);
        return f << 12 | u;
      }, d.getPatternPosition = function(f) {
        return v[f - 1];
      }, d.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(u, O) {
              return (u + O) % 2 == 0;
            };
          case s.PATTERN001:
            return function(u, O) {
              return u % 2 == 0;
            };
          case s.PATTERN010:
            return function(u, O) {
              return O % 3 == 0;
            };
          case s.PATTERN011:
            return function(u, O) {
              return (u + O) % 3 == 0;
            };
          case s.PATTERN100:
            return function(u, O) {
              return (Math.floor(u / 2) + Math.floor(O / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(u, O) {
              return u * O % 2 + u * O % 3 == 0;
            };
          case s.PATTERN110:
            return function(u, O) {
              return (u * O % 2 + u * O % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(u, O) {
              return (u * O % 3 + (u + O) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, d.getErrorCorrectPolynomial = function(f) {
        for (var u = N([1], 0), O = 0; O < f; O += 1)
          u = u.multiply(N([1, l.gexp(O)], 0));
        return u;
      }, d.getLengthInBits = function(f, u) {
        if (1 <= u && u < 10)
          switch (f) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + f;
          }
        else if (u < 27)
          switch (f) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + f;
          }
        else if (u < 41)
          switch (f) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + f;
          }
        else
          throw "type:" + u;
      }, d.getLostPoint = function(f) {
        for (var u = f.getModuleCount(), O = 0, y = 0; y < u; y += 1)
          for (var b = 0; b < u; b += 1) {
            for (var R = 0, M = f.isDark(y, b), P = -1; P <= 1; P += 1)
              if (!(y + P < 0 || u <= y + P))
                for (var K = -1; K <= 1; K += 1)
                  b + K < 0 || u <= b + K || P == 0 && K == 0 || M == f.isDark(y + P, b + K) && (R += 1);
            R > 5 && (O += 3 + R - 5);
          }
        for (var y = 0; y < u - 1; y += 1)
          for (var b = 0; b < u - 1; b += 1) {
            var Z = 0;
            f.isDark(y, b) && (Z += 1), f.isDark(y + 1, b) && (Z += 1), f.isDark(y, b + 1) && (Z += 1), f.isDark(y + 1, b + 1) && (Z += 1), (Z == 0 || Z == 4) && (O += 3);
          }
        for (var y = 0; y < u; y += 1)
          for (var b = 0; b < u - 6; b += 1)
            f.isDark(y, b) && !f.isDark(y, b + 1) && f.isDark(y, b + 2) && f.isDark(y, b + 3) && f.isDark(y, b + 4) && !f.isDark(y, b + 5) && f.isDark(y, b + 6) && (O += 40);
        for (var b = 0; b < u; b += 1)
          for (var y = 0; y < u - 6; y += 1)
            f.isDark(y, b) && !f.isDark(y + 1, b) && f.isDark(y + 2, b) && f.isDark(y + 3, b) && f.isDark(y + 4, b) && !f.isDark(y + 5, b) && f.isDark(y + 6, b) && (O += 40);
        for (var le = 0, b = 0; b < u; b += 1)
          for (var y = 0; y < u; y += 1)
            f.isDark(y, b) && (le += 1);
        var me = Math.abs(100 * le / u / u - 50) / 5;
        return O += me * 10, O;
      }, d;
    }(), l = function() {
      for (var v = new Array(256), D = new Array(256), m = 0; m < 8; m += 1)
        v[m] = 1 << m;
      for (var m = 8; m < 256; m += 1)
        v[m] = v[m - 4] ^ v[m - 5] ^ v[m - 6] ^ v[m - 8];
      for (var m = 0; m < 255; m += 1)
        D[v[m]] = m;
      var S = {};
      return S.glog = function(d) {
        if (d < 1)
          throw "glog(" + d + ")";
        return D[d];
      }, S.gexp = function(d) {
        for (; d < 0; )
          d += 255;
        for (; d >= 256; )
          d -= 255;
        return v[d];
      }, S;
    }();
    function N(v, D) {
      if (typeof v.length > "u")
        throw v.length + "/" + D;
      var m = function() {
        for (var d = 0; d < v.length && v[d] == 0; )
          d += 1;
        for (var g = new Array(v.length - d + D), f = 0; f < v.length - d; f += 1)
          g[f] = v[f + d];
        return g;
      }(), S = {};
      return S.getAt = function(d) {
        return m[d];
      }, S.getLength = function() {
        return m.length;
      }, S.multiply = function(d) {
        for (var g = new Array(S.getLength() + d.getLength() - 1), f = 0; f < S.getLength(); f += 1)
          for (var u = 0; u < d.getLength(); u += 1)
            g[f + u] ^= l.gexp(l.glog(S.getAt(f)) + l.glog(d.getAt(u)));
        return N(g, 0);
      }, S.mod = function(d) {
        if (S.getLength() - d.getLength() < 0)
          return S;
        for (var g = l.glog(S.getAt(0)) - l.glog(d.getAt(0)), f = new Array(S.getLength()), u = 0; u < S.getLength(); u += 1)
          f[u] = S.getAt(u);
        for (var u = 0; u < d.getLength(); u += 1)
          f[u] ^= l.gexp(l.glog(d.getAt(u)) + g);
        return N(f, 0).mod(d);
      }, S;
    }
    var C = function() {
      var v = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], D = function(d, g) {
        var f = {};
        return f.totalCount = d, f.dataCount = g, f;
      }, m = {}, S = function(d, g) {
        switch (g) {
          case i.L:
            return v[(d - 1) * 4 + 0];
          case i.M:
            return v[(d - 1) * 4 + 1];
          case i.Q:
            return v[(d - 1) * 4 + 2];
          case i.H:
            return v[(d - 1) * 4 + 3];
          default:
            return;
        }
      };
      return m.getRSBlocks = function(d, g) {
        var f = S(d, g);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + d + "/errorCorrectionLevel:" + g;
        for (var u = f.length / 3, O = [], y = 0; y < u; y += 1)
          for (var b = f[y * 3 + 0], R = f[y * 3 + 1], M = f[y * 3 + 2], P = 0; P < b; P += 1)
            O.push(D(R, M));
        return O;
      }, m;
    }(), c = function() {
      var v = [], D = 0, m = {};
      return m.getBuffer = function() {
        return v;
      }, m.getAt = function(S) {
        var d = Math.floor(S / 8);
        return (v[d] >>> 7 - S % 8 & 1) == 1;
      }, m.put = function(S, d) {
        for (var g = 0; g < d; g += 1)
          m.putBit((S >>> d - g - 1 & 1) == 1);
      }, m.getLengthInBits = function() {
        return D;
      }, m.putBit = function(S) {
        var d = Math.floor(D / 8);
        v.length <= d && v.push(0), S && (v[d] |= 128 >>> D % 8), D += 1;
      }, m;
    }, h = function(v) {
      var D = o.MODE_NUMBER, m = v, S = {};
      S.getMode = function() {
        return D;
      }, S.getLength = function(f) {
        return m.length;
      }, S.write = function(f) {
        for (var u = m, O = 0; O + 2 < u.length; )
          f.put(d(u.substring(O, O + 3)), 10), O += 3;
        O < u.length && (u.length - O == 1 ? f.put(d(u.substring(O, O + 1)), 4) : u.length - O == 2 && f.put(d(u.substring(O, O + 2)), 7));
      };
      var d = function(f) {
        for (var u = 0, O = 0; O < f.length; O += 1)
          u = u * 10 + g(f.charAt(O));
        return u;
      }, g = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return S;
    }, T = function(v) {
      var D = o.MODE_ALPHA_NUM, m = v, S = {};
      S.getMode = function() {
        return D;
      }, S.getLength = function(g) {
        return m.length;
      }, S.write = function(g) {
        for (var f = m, u = 0; u + 1 < f.length; )
          g.put(
            d(f.charAt(u)) * 45 + d(f.charAt(u + 1)),
            11
          ), u += 2;
        u < f.length && g.put(d(f.charAt(u)), 6);
      };
      var d = function(g) {
        if ("0" <= g && g <= "9")
          return g.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= g && g <= "Z")
          return g.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (g) {
          case " ":
            return 36;
          case "$":
            return 37;
          case "%":
            return 38;
          case "*":
            return 39;
          case "+":
            return 40;
          case "-":
            return 41;
          case ".":
            return 42;
          case "/":
            return 43;
          case ":":
            return 44;
          default:
            throw "illegal char :" + g;
        }
      };
      return S;
    }, k = function(v) {
      var D = o.MODE_8BIT_BYTE, m = r.stringToBytes(v), S = {};
      return S.getMode = function() {
        return D;
      }, S.getLength = function(d) {
        return m.length;
      }, S.write = function(d) {
        for (var g = 0; g < m.length; g += 1)
          d.put(m[g], 8);
      }, S;
    }, U = function(v) {
      var D = o.MODE_KANJI, m = r.stringToBytesFuncs.SJIS;
      if (!m)
        throw "sjis not supported.";
      (function(g, f) {
        var u = m(g);
        if (u.length != 2 || (u[0] << 8 | u[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var S = m(v), d = {};
      return d.getMode = function() {
        return D;
      }, d.getLength = function(g) {
        return ~~(S.length / 2);
      }, d.write = function(g) {
        for (var f = S, u = 0; u + 1 < f.length; ) {
          var O = (255 & f[u]) << 8 | 255 & f[u + 1];
          if (33088 <= O && O <= 40956)
            O -= 33088;
          else if (57408 <= O && O <= 60351)
            O -= 49472;
          else
            throw "illegal char at " + (u + 1) + "/" + O;
          O = (O >>> 8 & 255) * 192 + (O & 255), g.put(O, 13), u += 2;
        }
        if (u < f.length)
          throw "illegal char at " + (u + 1);
      }, d;
    }, ee = function() {
      var v = [], D = {};
      return D.writeByte = function(m) {
        v.push(m & 255);
      }, D.writeShort = function(m) {
        D.writeByte(m), D.writeByte(m >>> 8);
      }, D.writeBytes = function(m, S, d) {
        S = S || 0, d = d || m.length;
        for (var g = 0; g < d; g += 1)
          D.writeByte(m[g + S]);
      }, D.writeString = function(m) {
        for (var S = 0; S < m.length; S += 1)
          D.writeByte(m.charCodeAt(S));
      }, D.toByteArray = function() {
        return v;
      }, D.toString = function() {
        var m = "";
        m += "[";
        for (var S = 0; S < v.length; S += 1)
          S > 0 && (m += ","), m += v[S];
        return m += "]", m;
      }, D;
    }, Y = function() {
      var v = 0, D = 0, m = 0, S = "", d = {}, g = function(u) {
        S += String.fromCharCode(f(u & 63));
      }, f = function(u) {
        if (!(u < 0)) {
          if (u < 26)
            return 65 + u;
          if (u < 52)
            return 97 + (u - 26);
          if (u < 62)
            return 48 + (u - 52);
          if (u == 62)
            return 43;
          if (u == 63)
            return 47;
        }
        throw "n:" + u;
      };
      return d.writeByte = function(u) {
        for (v = v << 8 | u & 255, D += 8, m += 1; D >= 6; )
          g(v >>> D - 6), D -= 6;
      }, d.flush = function() {
        if (D > 0 && (g(v << 6 - D), v = 0, D = 0), m % 3 != 0)
          for (var u = 3 - m % 3, O = 0; O < u; O += 1)
            S += "=";
      }, d.toString = function() {
        return S;
      }, d;
    }, Q = function(v) {
      var D = v, m = 0, S = 0, d = 0, g = {};
      g.read = function() {
        for (; d < 8; ) {
          if (m >= D.length) {
            if (d == 0)
              return -1;
            throw "unexpected end of file./" + d;
          }
          var u = D.charAt(m);
          if (m += 1, u == "=")
            return d = 0, -1;
          if (u.match(/^\s$/))
            continue;
          S = S << 6 | f(u.charCodeAt(0)), d += 6;
        }
        var O = S >>> d - 8 & 255;
        return d -= 8, O;
      };
      var f = function(u) {
        if (65 <= u && u <= 90)
          return u - 65;
        if (97 <= u && u <= 122)
          return u - 97 + 26;
        if (48 <= u && u <= 57)
          return u - 48 + 52;
        if (u == 43)
          return 62;
        if (u == 47)
          return 63;
        throw "c:" + u;
      };
      return g;
    }, te = function(v, D) {
      var m = v, S = D, d = new Array(v * D), g = {};
      g.setPixel = function(y, b, R) {
        d[b * m + y] = R;
      }, g.write = function(y) {
        y.writeString("GIF87a"), y.writeShort(m), y.writeShort(S), y.writeByte(128), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(255), y.writeByte(255), y.writeByte(255), y.writeString(","), y.writeShort(0), y.writeShort(0), y.writeShort(m), y.writeShort(S), y.writeByte(0);
        var b = 2, R = u(b);
        y.writeByte(b);
        for (var M = 0; R.length - M > 255; )
          y.writeByte(255), y.writeBytes(R, M, 255), M += 255;
        y.writeByte(R.length - M), y.writeBytes(R, M, R.length - M), y.writeByte(0), y.writeString(";");
      };
      var f = function(y) {
        var b = y, R = 0, M = 0, P = {};
        return P.write = function(K, Z) {
          if (K >>> Z)
            throw "length over";
          for (; R + Z >= 8; )
            b.writeByte(255 & (K << R | M)), Z -= 8 - R, K >>>= 8 - R, M = 0, R = 0;
          M = K << R | M, R = R + Z;
        }, P.flush = function() {
          R > 0 && b.writeByte(M);
        }, P;
      }, u = function(y) {
        for (var b = 1 << y, R = (1 << y) + 1, M = y + 1, P = O(), K = 0; K < b; K += 1)
          P.add(String.fromCharCode(K));
        P.add(String.fromCharCode(b)), P.add(String.fromCharCode(R));
        var Z = ee(), le = f(Z);
        le.write(b, M);
        var me = 0, be = String.fromCharCode(d[me]);
        for (me += 1; me < d.length; ) {
          var qe = String.fromCharCode(d[me]);
          me += 1, P.contains(be + qe) ? be = be + qe : (le.write(P.indexOf(be), M), P.size() < 4095 && (P.size() == 1 << M && (M += 1), P.add(be + qe)), be = qe);
        }
        return le.write(P.indexOf(be), M), le.write(R, M), le.flush(), Z.toByteArray();
      }, O = function() {
        var y = {}, b = 0, R = {};
        return R.add = function(M) {
          if (R.contains(M))
            throw "dup key:" + M;
          y[M] = b, b += 1;
        }, R.size = function() {
          return b;
        }, R.indexOf = function(M) {
          return y[M];
        }, R.contains = function(M) {
          return typeof y[M] < "u";
        }, R;
      };
      return g;
    }, L = function(v, D, m) {
      for (var S = te(v, D), d = 0; d < D; d += 1)
        for (var g = 0; g < v; g += 1)
          S.setPixel(g, d, m(g, d));
      var f = ee();
      S.write(f);
      for (var u = Y(), O = f.toByteArray(), y = 0; y < O.length; y += 1)
        u.writeByte(O[y]);
      return u.flush(), "data:image/gif;base64," + u;
    };
    return r;
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(i) {
        for (var s = [], a = 0; a < i.length; a++) {
          var l = i.charCodeAt(a);
          l < 128 ? s.push(l) : l < 2048 ? s.push(
            192 | l >> 6,
            128 | l & 63
          ) : l < 55296 || l >= 57344 ? s.push(
            224 | l >> 12,
            128 | l >> 6 & 63,
            128 | l & 63
          ) : (a++, l = 65536 + ((l & 1023) << 10 | i.charCodeAt(a) & 1023), s.push(
            240 | l >> 18,
            128 | l >> 12 & 63,
            128 | l >> 6 & 63,
            128 | l & 63
          ));
        }
        return s;
      }
      return o(r);
    };
  })(), function(r) {
    e.exports = r();
  }(function() {
    return n;
  });
})(go);
var $s = go.exports;
const ks = /* @__PURE__ */ Vs($s);
class $n {
  constructor(t) {
    ne(this, "_options");
    ne(this, "_container");
    ne(this, "_canvas");
    ne(this, "_qr");
    ne(this, "_drawingPromise");
    this._options = t ? ar(kt(sr, t)) : sr, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    $n._clearContainer(this._container), this._options = t ? ar(kt(this._options, t)) : this._options, this._options.data && (this._qr = ks(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || Cs(this._options.data)), this._qr.make(), this._canvas = new As(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
  }
  append(t) {
    if (t) {
      if (typeof t.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && t.appendChild(this._canvas.getCanvas()), this._container = t;
    }
  }
  async getImageUrl(t) {
    return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${t}`) : "";
  }
  download(t) {
    this._drawingPromise && this._drawingPromise.then(() => {
      if (!this._canvas)
        return;
      const n = t, r = n.extension || "png", o = n.name || "qr", i = this._canvas.getCanvas().toDataURL(`image/${r}`);
      Ss(i, `${o}.${r}`);
    });
  }
}
const Ls = ["src"], Fs = { key: 1 }, qs = /* @__PURE__ */ Wr({
  __name: "QRCodeVue3Async",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    buttonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  async setup(e) {
    let t, n;
    const r = e, o = new $n({
      data: r.value,
      width: r.width,
      height: r.height,
      margin: r.margin,
      qrOptions: r.qrOptions,
      imageOptions: r.imageOptions,
      dotsOptions: r.dotsOptions,
      backgroundOptions: r.backgroundOptions,
      image: r.image,
      cornersSquareOptions: r.cornersSquareOptions,
      cornersDotOptions: r.cornersDotOptions
    });
    let i = ([t, n] = Fi(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, l) => (Ge(), tn("div", null, [
      Ot(i) ? (Ge(), tn("div", {
        key: 0,
        class: We(a.myclass)
      }, [
        Vt("img", {
          src: Ot(i),
          class: We(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Ls)
      ], 2)) : rr("", !0),
      Ot(i) && a.download ? (Ge(), tn("div", Fs, [
        Vt("button", {
          onClick: s,
          class: We(a.downloadButton)
        }, vr(a.buttonName), 3)
      ])) : rr("", !0)
    ]));
  }
}), js = /* @__PURE__ */ Wr({
  __name: "QRCodeVue3",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    buttonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Ge(), so(os, null, {
      default: Ei(() => [
        Te(qs, {
          "background-options": t.backgroundOptions,
          "button-name": t.buttonName,
          "corners-dot-options": t.cornersDotOptions,
          "corners-square-options": t.cornersSquareOptions,
          "dots-options": t.dotsOptions,
          download: t.download,
          "download-button": t.downloadButton,
          "download-options": t.downloadOptions,
          "file-ext": t.fileExt,
          height: t.height,
          image: t.image,
          "image-options": t.imageOptions,
          imgclass: t.imgclass,
          margin: t.margin,
          value: t.value,
          myclass: t.myclass,
          "qr-options": t.qrOptions,
          width: t.width
        }, null, 8, ["background-options", "button-name", "corners-dot-options", "corners-square-options", "dots-options", "download", "download-button", "download-options", "file-ext", "height", "image", "image-options", "imgclass", "margin", "value", "myclass", "qr-options", "width"])
      ]),
      _: 1
    }));
  }
});



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