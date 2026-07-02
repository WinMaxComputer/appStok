import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, R as openBlock, T as createVNode, X as withDirectives, _ as computed, a as init_runtime_dom_esm_bundler, at as unref, d as vShow, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as useRoute, o as useRouter, s as useStore } from "../../assets/main-BY7jYvqS.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DQxrQuo_.js";
import { t as require_vue3_multiselect_umd_min } from "./vue3-multiselect-Cq5sgu2X.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/pembelianInventaris.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var import_vue3_multiselect_umd_min = /* @__PURE__ */ __toESM(require_vue3_multiselect_umd_min());
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add" };
var _hoisted_2 = { class: "row invoice layout-top-spacing layout-spacing" };
var _hoisted_3 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_4 = { class: "doc-container" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-12" };
var _hoisted_7 = { class: "invoice-content" };
var _hoisted_8 = { class: "invoice-detail-body" };
var _hoisted_9 = { class: "invoice-detail-header" };
var _hoisted_10 = { class: "row justify-content-between" };
var _hoisted_11 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_12 = { class: "invoice-address-company-fields" };
var _hoisted_13 = { class: "form-group row" };
var _hoisted_14 = { class: "col-sm-9" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-9" };
var _hoisted_17 = { class: "form-group row" };
var _hoisted_18 = { class: "col-sm-9" };
var _hoisted_19 = { class: "form-group row" };
var _hoisted_20 = { class: "col-sm-9" };
var _hoisted_21 = { class: "col-xl-5 invoice-address-client" };
var _hoisted_22 = { class: "invoice-address-client-fields" };
var _hoisted_23 = { class: "form-group row" };
var _hoisted_24 = { class: "col-sm-9" };
var _hoisted_25 = { class: "form-group row" };
var _hoisted_26 = { class: "col-sm-9" };
var _hoisted_27 = { class: "form-group row" };
var _hoisted_28 = { class: "col-sm-9" };
var _hoisted_29 = { class: "invoice-detail-items" };
var _hoisted_30 = { class: "row" };
var _hoisted_31 = { class: "form-group col-md-3" };
var _hoisted_32 = { class: "form-group col-md-2" };
var _hoisted_33 = { class: "form-group col-sm-2" };
var _hoisted_34 = { class: "form-group col-md-2" };
var _hoisted_35 = { class: "form-group col-md-2" };
var _hoisted_36 = { class: "form-group col-md-1" };
var _hoisted_37 = { class: "invoice-detail-items" };
var _hoisted_38 = { class: "inv--product-table-section" };
var _hoisted_39 = { class: "table-responsive" };
var _hoisted_40 = { class: "table table-hover table-bordered item-table" };
var _hoisted_41 = { class: "description" };
var _hoisted_42 = { class: "rate" };
var _hoisted_43 = { class: "qty" };
var _hoisted_44 = { class: "qty" };
var _hoisted_45 = { class: "amount" };
var _hoisted_46 = { class: "tax" };
var _hoisted_47 = ["onClick"];
var _hoisted_48 = { class: "invoice-detail-total" };
var _hoisted_49 = { class: "row" };
var _hoisted_50 = { class: "col-md-6" };
var _hoisted_51 = { class: "totals-row" };
var _hoisted_52 = { class: "invoice-totals-row invoice-summary-subtotal" };
var _hoisted_53 = { class: "invoice-summary-value" };
var _hoisted_54 = { class: "subtotal-amount" };
var _hoisted_55 = { class: "amount" };
var _hoisted_56 = { class: "invoice-totals-row invoice-summary-total" };
var _hoisted_57 = { class: "invoice-summary-value" };
var _hoisted_58 = { class: "total-amount" };
var _hoisted_59 = { class: "invoice-totals-row invoice-summary-tax" };
var _hoisted_60 = { class: "invoice-summary-value" };
var _hoisted_61 = { class: "tax-amount" };
var _hoisted_62 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_63 = { class: "invoice-summary-value" };
var _hoisted_64 = { class: "invoice-detail-note" };
var _hoisted_65 = { class: "row" };
var _hoisted_66 = { class: "col-md-12 align-self-center" };
var _hoisted_67 = { class: "form-group row invoice-note" };
var _hoisted_68 = { class: "col-sm-12" };
var _sfc_main = {
	__name: "pembelianInventaris",
	setup(__props) {
		useMeta({ title: "Pembelian Inventaris" });
		const store = useStore();
		useRouter();
		useRoute();
		const items = ref([]);
		const brg = ref([]);
		const barangs = ref([]);
		const nopengadaan = ref([]);
		const qty = ref(1);
		const tot = ref();
		const subtotal = ref();
		const total = ref();
		const disc = ref(0);
		const tax = ref();
		ref(null);
		ref([]);
		const params = ref({
			noNota: nopengadaan,
			tglNota: hooks().format("YYYY-MM-DD"),
			term: 0,
			jthTempo: hooks().format("YYYY-MM-DD"),
			notes: "",
			subtotal,
			tax: 11,
			disc,
			total
		});
		const paramssupplier = ref({
			kdSupplier: "",
			nmSupplier: "",
			almtSupplier: "",
			tlpSupplier: ""
		});
		ref({
			noAcc: "",
			nmAcc: "",
			nilai: ""
		});
		const cartItems = ref([]);
		const divpajak = ref(false);
		const pembelian = computed(() => {
			const suppliers = store.getters.StateSupplier;
			nopengadaan.value = store.getters.NoPengadaan;
			const pajak = store.state.pajak;
			tot.value = brg.value.lastPrice * qty.value;
			return {
				pajak,
				suppliers,
				nopengadaan,
				tot
			};
		});
		const getBarang = () => {
			store.dispatch("GetInventaris");
			setTimeout(function() {
				let c = store.getters.StateInventaris;
				barangs.value = c[0];
			}, 2e3);
		};
		const getSupplier = () => {
			store.dispatch("GetSupplier");
		};
		const getNoPengadaan = () => {
			store.dispatch("GetNoPengadaan");
			setTimeout(function() {
				nopengadaan.value = store.getters.NoPengadaan;
			}, 3e3);
		};
		const getTotal = () => {
			const pajak = store.state.pajak;
			const temptotal = subtotal.value - subtotal.value * disc.value / 100;
			total.value = subtotal.value - subtotal.value * disc.value / 100;
			tax.value = temptotal * pajak / 100;
			console.log("total tanpa pajak :" + tax.value);
		};
		const simpanPembelian = () => {
			const header = params.value;
			const headers = paramssupplier.value;
			const headerfull = Object.assign(header, headers);
			const detail = cartItems.value;
			store.dispatch("CreatePembelianInventaris", [headerfull, detail]);
			setTimeout(function() {
				getCart();
			}, 5e3);
			getNoPengadaan();
		};
		onMounted(() => {
			items.value.push({
				id: 1,
				title: "",
				description: "",
				rate: 0,
				quantity: 0,
				amount: 100,
				is_tax: false
			});
			let dt = /* @__PURE__ */ new Date();
			params.value.invoice_date = JSON.parse(JSON.stringify(dt));
			dt.setDate(dt.getDate() + 5);
			params.value.due_date = dt;
			getBarang();
			getSupplier();
			getCart();
			getNoPengadaan();
		});
		function addToCart(brg) {
			if (localStorage.getItem("cartItemsPe") === null) cartItems.value = [];
			else cartItems.value = JSON.parse(localStorage.getItem("cartItemsPe"));
			if ((JSON.parse(localStorage.getItem("cartItemsPe")) || []).find(({ kdBarang }) => kdBarang === brg.kode_inventaris)) {
				const objIndex = cartItems.value.findIndex(((e) => e.kdBarang === brg.kode_inventaris));
				const oldName = cartItems.value[objIndex].nmBarang;
				const oldQty = cartItems.value[objIndex].qty;
				const oldTotal = cartItems.value[objIndex].total;
				const newQty = parseInt(oldQty) + parseInt(qty.value);
				const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.lastPrice);
				cartItems.value[objIndex].qty = parseInt(newQty);
				cartItems.value[objIndex].total = parseInt(newTotal);
				localStorage.setItem("cartItemsPe", JSON.stringify(cartItems.value));
				alert(oldName + " Quantity Update");
				getCart();
			} else {
				cartItems.value.push({
					kdBarang: brg.kode_inventaris,
					nmBarang: brg.nama_inventaris,
					group_inventaris: brg.group_inventaris,
					hrgPokok: brg.lastPrice,
					qty: qty.value,
					satuan: brg.satuanPersediaan,
					total: qty.value * brg.lastPrice
				});
				localStorage.setItem("cartItemsPe", JSON.stringify(cartItems.value));
				getCart();
				alert(brg.nama_inventaris + " berhasil disimpan");
			}
		}
		function removeItem(id) {
			const filtered = JSON.parse(localStorage.getItem("cartItemsPe")).filter((arrayFromStroage) => arrayFromStroage.kdBarang !== id);
			localStorage.setItem("cartItemsPe", JSON.stringify(filtered));
			getCart();
		}
		function getCart() {
			if (localStorage.getItem("cartItemsPe") === null) {
				cartItems.value = localStorage.setItem("cartItemsPe", "[]");
				subtotal.value = 0;
			} else {
				cartItems.value = JSON.parse(localStorage.getItem("cartItemsPe"));
				getSubtotal();
				getTotal();
			}
		}
		function getSubtotal() {
			const allItems = JSON.parse(localStorage.getItem("cartItemsPe")) || [];
			let sum = 0;
			subtotal.value = 0;
			for (let i = 0; i < allItems.length; i++) sum += parseFloat(allItems[i].total);
			subtotal.value = sum;
		}
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[15] || (_cache[15] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Apps")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Pembelian")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[44] || (_cache[44] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title" }, " Invoice Pembelian Inventaris ")], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [
					createBaseVNode("div", _hoisted_13, [_cache[16] || (_cache[16] = createBaseVNode("label", {
						for: "company-name",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "No Nota", -1)), createBaseVNode("div", _hoisted_14, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
						id: "number",
						class: "form-control form-control-sm",
						placeholder: "#0001",
						disabled: ""
					}, null, 512), [[vModelText, params.value.noNota]])])]),
					createBaseVNode("div", _hoisted_15, [_cache[17] || (_cache[17] = createBaseVNode("label", {
						for: "company-email",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Tgl", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.tglNota,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Invoice Date"
					}, null, 8, ["modelValue"])])]),
					createBaseVNode("div", _hoisted_17, [_cache[19] || (_cache[19] = createBaseVNode("label", {
						for: "company-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Term", -1)), createBaseVNode("div", _hoisted_18, [withDirectives(createBaseVNode("select", {
						id: "inputState",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => params.value.term = $event),
						class: "form-select"
					}, _cache[18] || (_cache[18] = [createBaseVNode("option", {
						value: "0",
						selected: ""
					}, "Cash", -1), createBaseVNode("option", { value: "1" }, "Kredit", -1)]), 512), [[vModelSelect, params.value.term]])])]),
					createBaseVNode("div", _hoisted_19, [_cache[20] || (_cache[20] = createBaseVNode("label", {
						for: "company-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Jatuh Tempo", -1)), createBaseVNode("div", _hoisted_20, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.jthTempo,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => params.value.jthTempo = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Due Date"
					}, null, 8, ["modelValue"])])])
				])]), createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [
					createBaseVNode("div", _hoisted_23, [_cache[21] || (_cache[21] = createBaseVNode("label", {
						for: "client-name",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Name", -1)), createBaseVNode("div", _hoisted_24, [createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: paramssupplier.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => paramssupplier.value = $event),
						options: pembelian.value.suppliers,
						searchable: true,
						"allow-empty": false,
						"track-by": "nmSupplier",
						label: "nmSupplier",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": "",
						"deselect-label": ""
					}, null, 8, ["modelValue", "options"])])]),
					createBaseVNode("div", _hoisted_25, [_cache[22] || (_cache[22] = createBaseVNode("label", {
						for: "client-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Address", -1)), createBaseVNode("div", _hoisted_26, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paramssupplier.value.almtSupplier = $event),
						id: "client-address",
						class: "form-control form-control-sm",
						placeholder: "XYZ Street"
					}, null, 512), [[vModelText, paramssupplier.value.almtSupplier]])])]),
					createBaseVNode("div", _hoisted_27, [_cache[23] || (_cache[23] = createBaseVNode("label", {
						for: "client-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Phone", -1)), createBaseVNode("div", _hoisted_28, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paramssupplier.value.tlpSupplier = $event),
						id: "client-phone",
						class: "form-control form-control-sm",
						placeholder: "(123) 456 789"
					}, null, 512), [[vModelText, paramssupplier.value.tlpSupplier]])])])
				])])])]),
				createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [
					createBaseVNode("div", _hoisted_31, [_cache[24] || (_cache[24] = createBaseVNode("label", { for: "inputCity" }, "NAMA BARANG", -1)), createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: brg.value,
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => brg.value = $event),
						options: barangs.value,
						searchable: true,
						"track-by": "nama_inventaris",
						label: "nama_inventaris",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": ""
					}, null, 8, ["modelValue", "options"])]),
					createBaseVNode("div", _hoisted_32, [_cache[25] || (_cache[25] = createBaseVNode("label", { for: "inputState" }, "HARGA", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => brg.value.lastPrice = $event),
						class: "form-control form-control-sm",
						placeholder: "Price",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, brg.value.lastPrice]])]),
					createBaseVNode("div", _hoisted_33, [_cache[26] || (_cache[26] = createBaseVNode("label", { for: "inputZip" }, "QTY", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => qty.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Quantity",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, qty.value]])]),
					createBaseVNode("div", _hoisted_34, [_cache[27] || (_cache[27] = createBaseVNode("label", { for: "satuan" }, "SATUAN", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => brg.value.satuanPersediaan = $event),
						class: "form-control form-control-sm",
						id: "satuan"
					}, null, 512), [[vModelText, brg.value.satuanPersediaan]])]),
					createBaseVNode("div", _hoisted_35, [
						_cache[28] || (_cache[28] = createBaseVNode("label", { for: "inputZip" }, "TOTAL", -1)),
						_cache[29] || (_cache[29] = createBaseVNode("br", null, null, -1)),
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => tot.value = $event),
							class: "form-control form-control-sm",
							placeholder: "Quantity",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, tot.value]])
					]),
					createBaseVNode("div", _hoisted_36, [_cache[30] || (_cache[30] = createBaseVNode("label", { for: "aksi" }, "Aksi", -1)), createBaseVNode("button", {
						onClick: _cache[12] || (_cache[12] = ($event) => addToCart(brg.value)),
						class: "btn btn-xs btn-primary"
					}, " + ")])
				])]),
				createBaseVNode("div", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, [createBaseVNode("table", _hoisted_40, [_cache[31] || (_cache[31] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Nama Barang"),
					createBaseVNode("th", null, "Harga"),
					createBaseVNode("th", null, "Qty"),
					createBaseVNode("th", null, "Satuan"),
					createBaseVNode("th", null, "Total"),
					createBaseVNode("th", null, "Aksi")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(cartItems.value, (item) => {
					return openBlock(), createElementBlock("tr", { key: item.kdBarang }, [
						createBaseVNode("td", _hoisted_41, toDisplayString(item.nmBarang), 1),
						createBaseVNode("td", _hoisted_42, toDisplayString(new Intl.NumberFormat().format(item.hrgPokok)), 1),
						createBaseVNode("td", _hoisted_43, toDisplayString(item.qty), 1),
						createBaseVNode("td", _hoisted_44, toDisplayString(item.satuan), 1),
						createBaseVNode("td", _hoisted_45, toDisplayString(new Intl.NumberFormat().format(item.total)), 1),
						createBaseVNode("td", _hoisted_46, [createBaseVNode("button", {
							type: "button",
							class: "btn btn-secondary additem btn-sm",
							onClick: ($event) => removeItem(_ctx.id = item.kdBarang)
						}, "Hapus", 8, _hoisted_47)])
					]);
				}), 128))])])])])]),
				createBaseVNode("div", _hoisted_48, [createBaseVNode("div", _hoisted_49, [createBaseVNode("div", { class: "col-md-6" }, [createBaseVNode("div", { class: "invoice-actions-btn" }, [createBaseVNode("div", { class: "invoice-action-btn" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-sm-4" }, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: simpanPembelian,
					class: "btn btn-success btn-download"
				}, "Save")])])])])]), createBaseVNode("div", _hoisted_50, [createBaseVNode("div", _hoisted_51, [
					createBaseVNode("div", _hoisted_52, [
						_cache[33] || (_cache[33] = createBaseVNode("div", { class: "invoice-summary-label" }, "Sub Total", -1)),
						_cache[34] || (_cache[34] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_53, [createBaseVNode("div", _hoisted_54, [_cache[32] || (_cache[32] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", _hoisted_55, toDisplayString(new Intl.NumberFormat().format(subtotal.value)), 1)])])
					]),
					createBaseVNode("div", _hoisted_56, [
						_cache[36] || (_cache[36] = createBaseVNode("div", { class: "invoice-summary-label" }, "Disc", -1)),
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => params.value.disc = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, params.value.disc]]),
						_cache[37] || (_cache[37] = createTextVNode("% ")),
						_cache[38] || (_cache[38] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_57, [createBaseVNode("div", _hoisted_58, [_cache[35] || (_cache[35] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(subtotal.value * disc.value / 100))), 1)])])
					]),
					withDirectives(createBaseVNode("div", null, [createBaseVNode("div", _hoisted_59, [_cache[40] || (_cache[40] = createBaseVNode("div", { class: "invoice-summary-label" }, "Pajak", -1)), createBaseVNode("div", _hoisted_60, [createBaseVNode("div", _hoisted_61, [_cache[39] || (_cache[39] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor((subtotal.value - subtotal.value * disc.value / 100) * pembelian.value.pajak / 100))), 1)])])])], 512), [[vShow, divpajak.value]]),
					createBaseVNode("div", _hoisted_62, [
						_cache[41] || (_cache[41] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)),
						_cache[42] || (_cache[42] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_63, [createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])
					])
				])])])]),
				createBaseVNode("div", _hoisted_64, [createBaseVNode("div", _hoisted_65, [createBaseVNode("div", _hoisted_66, [createBaseVNode("div", _hoisted_67, [_cache[43] || (_cache[43] = createBaseVNode("label", {
					for: "invoice-detail-notes",
					class: "col-sm-12 col-form-label col-form-label-sm"
				}, "Notes:", -1)), createBaseVNode("div", _hoisted_68, [withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => params.value.notes = $event),
					rows: "3",
					id: "invoice-detail-notes",
					class: "form-control",
					placeholder: "Notes - For example, \"Thank you for doing business with us\""
				}, null, 512), [[vModelText, params.value.notes]])])])])])])
			])])])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
