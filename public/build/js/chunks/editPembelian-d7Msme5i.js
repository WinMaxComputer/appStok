import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, H as renderList, I as onMounted, L as onUnmounted, P as onBeforeMount, R as openBlock, T as createVNode, X as withDirectives, Y as withCtx, _ as computed, a as init_runtime_dom_esm_bundler, at as unref, b as createCommentVNode, d as vShow, f as withKeys, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as useRoute, o as useRouter, s as useStore } from "../../assets/main-BY7jYvqS.js";
import { t as D } from "./usemodal-vue3-Bm5MdBX0.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DQxrQuo_.js";
import { t as require_vue3_multiselect_umd_min } from "./vue3-multiselect-Cq5sgu2X.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/editPembelian.vue
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
var _hoisted_19 = ["value"];
var _hoisted_20 = { class: "form-group row" };
var _hoisted_21 = { class: "col-sm-9" };
var _hoisted_22 = { class: "col-xl-5 invoice-address-client" };
var _hoisted_23 = { class: "invoice-address-client-fields" };
var _hoisted_24 = { class: "form-group row" };
var _hoisted_25 = { class: "col-sm-9" };
var _hoisted_26 = { class: "form-group row" };
var _hoisted_27 = { class: "col-sm-9" };
var _hoisted_28 = { class: "form-group row" };
var _hoisted_29 = { class: "col-sm-9" };
var _hoisted_30 = { class: "invoice-detail-items" };
var _hoisted_31 = { class: "row" };
var _hoisted_32 = { class: "form-group col-xs-2" };
var _hoisted_33 = { class: "form-group col-md-3" };
var _hoisted_34 = { class: "form-group col-md-2" };
var _hoisted_35 = { class: "form-group col-sm-2" };
var _hoisted_36 = { class: "form-group col-md-2" };
var _hoisted_37 = { class: "form-group col-md-2" };
var _hoisted_38 = { class: "form-group col-md-1" };
var _hoisted_39 = { class: "invoice-detail-items" };
var _hoisted_40 = { class: "inv--product-table-section" };
var _hoisted_41 = { class: "table-responsive" };
var _hoisted_42 = { class: "table table-hover table-bordered item-table" };
var _hoisted_43 = { class: "description" };
var _hoisted_44 = { class: "rate" };
var _hoisted_45 = { class: "description" };
var _hoisted_46 = ["onUpdate:modelValue", "onKeyup"];
var _hoisted_47 = { class: "rate" };
var _hoisted_48 = { class: "amount" };
var _hoisted_49 = { class: "tax" };
var _hoisted_50 = ["onClick"];
var _hoisted_51 = { class: "invoice-detail-total" };
var _hoisted_52 = { class: "row" };
var _hoisted_53 = { class: "col-md-6" };
var _hoisted_54 = { class: "invoice-actions-btn" };
var _hoisted_55 = { class: "invoice-action-btn" };
var _hoisted_56 = { class: "row" };
var _hoisted_57 = { class: "col-sm-4" };
var _hoisted_58 = {
	class: "modal fade",
	id: "modalPayment",
	tabindex: "-1",
	role: "dialog",
	"aria-labelledby": "modalPayment",
	"aria-hidden": "true"
};
var _hoisted_59 = {
	class: "modal-dialog modal-dialog-centered",
	role: "document"
};
var _hoisted_60 = { class: "modal-content" };
var _hoisted_61 = { class: "modal-body" };
var _hoisted_62 = { class: "col-md-6" };
var _hoisted_63 = { class: "totals-row" };
var _hoisted_64 = { class: "invoice-totals-row invoice-summary-subtotal" };
var _hoisted_65 = { class: "invoice-summary-value" };
var _hoisted_66 = { class: "subtotal-amount" };
var _hoisted_67 = { class: "amount" };
var _hoisted_68 = { class: "invoice-totals-row invoice-summary-tax" };
var _hoisted_69 = { class: "invoice-summary-value" };
var _hoisted_70 = { class: "tax-amount" };
var _hoisted_71 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_72 = { class: "invoice-summary-value" };
var _hoisted_73 = { class: "col-md-12" };
var _hoisted_74 = { class: "totals-row" };
var _hoisted_75 = { class: "invoice-totals-row" };
var _hoisted_76 = { style: { "font-size": "20px" } };
var _hoisted_77 = { key: 0 };
var _hoisted_78 = { key: 1 };
var _hoisted_79 = { class: "invoice-summary-value" };
var _hoisted_80 = { class: "balance-due-amount" };
var _hoisted_81 = { style: { "font-size": "30px" } };
var _hoisted_82 = {
	key: 0,
	class: "col-md-12"
};
var _hoisted_83 = { class: "totals-row" };
var _hoisted_84 = { class: "invoice-totals-row" };
var _hoisted_85 = { class: "invoice-summary-value" };
var _hoisted_86 = { class: "balance-due-amount" };
var _hoisted_87 = { class: "invoice-detail-note" };
var _hoisted_88 = { class: "row" };
var _hoisted_89 = { class: "col-md-12 align-self-center" };
var _hoisted_90 = { class: "form-group row invoice-note" };
var _hoisted_91 = { class: "col-sm-12" };
var _sfc_main = {
	__name: "editPembelian",
	setup(__props) {
		useMeta({ title: "Pembelian" });
		const store = useStore();
		const router = useRouter();
		useRoute();
		ref([]);
		const cartItemsP = ref([]);
		const brg = ref([]);
		const nopembelian = ref([]);
		const qty = ref(1);
		const tot = ref();
		const subtotal = ref();
		const total = ref();
		const disc = ref(0);
		const tax = ref();
		ref(null);
		ref([]);
		const isVisible = ref(false);
		const barcode = ref("");
		const params = ref({});
		const paramssupplier = ref({});
		const paramsacc = ref({
			noAcc: "",
			nmAcc: "",
			nilai: ""
		});
		const paramsbayar = ref({
			noBayar: null,
			tglBayar: hooks().format("YYYY-MM-DD"),
			jmlBayar: total,
			metodeBayar: "cash"
		});
		const cartItems = ref([]);
		const divpajak = ref(false);
		const pembelian = computed(() => {
			const barangs = store.getters.StatePersediaan;
			const suppliers = store.getters.StateSupplier;
			const accs = store.getters.StateAcc;
			nopembelian.value = store.getters.NoPembelian;
			const pajak = store.state.pajak;
			tot.value = brg.value.lastPrice * qty.value;
			return {
				barangs,
				pajak,
				suppliers,
				nopembelian,
				accs,
				tot
			};
		});
		const getBarang = () => {
			store.dispatch("GetPersediaan");
		};
		const getSupplier = () => {
			store.dispatch("GetSupplier");
		};
		const getNoPembelian = () => {
			store.dispatch("GetNoPembelian");
		};
		const openModal = () => {
			getNoPembayaran();
			console.log("Modal opened");
			isVisible.value = true;
		};
		const getNoPembayaran = async () => {
			await store.dispatch("GetNoBayarPembelian").then(() => {
				paramsbayar.value.noBayar = store.getters.NoBayarPembelian;
			});
		};
		const getTotal = () => {
			const pajak = store.state.pajak;
			const temptotal = subtotal.value - subtotal.value * disc.value / 100;
			total.value = subtotal.value - subtotal.value * disc.value / 100;
			tax.value = temptotal * pajak / 100;
			params.value.total = total.value;
			console.log("total :" + total.value);
		};
		const simpanPembelian = () => {
			const header = params.value;
			const headers = paramssupplier.value;
			const headerfull = Object.assign(header, headers);
			const detail = cartItems.value;
			const bayar = paramsbayar.value;
			store.dispatch("CreatePembelian", [
				headerfull,
				detail,
				bayar
			]).then((response) => {
				getCart();
				getNoPembelian();
				router.push({ name: "pembelian-persediaan" });
			}).catch((error) => {});
		};
		onMounted(async () => {
			await store.dispatch("GetDetailPembelian", params.value).then((response) => {
				const brgArr = store.getters.SdetailPembelian[1];
				for (let i = 0; i < brgArr.length; i++) cartItemsP.value.push({
					kdBarang: brgArr[i].kdBarang,
					nmBarang: brgArr[i].nmBarang,
					accid_persediaan: brgArr[i].accid_persediaan,
					hrgPokok: brgArr[i].hrgBeli,
					qty: brgArr[i].qty,
					satuan: brgArr[i].satuanBarang,
					total: brgArr[i].total,
					is_tax: false
				});
				localStorage.setItem("cartItemsP", JSON.stringify(cartItemsP.value));
				paramssupplier.value.kdSupplier = store.getters.SdetailPembelian[0][0].kdSupplier;
				paramssupplier.value.nmSupplier = store.getters.SdetailPembelian[0][0].nmSupplier;
				paramssupplier.value.almtSupplier = store.getters.SdetailPembelian[0][0].almtSupplier;
				paramssupplier.value.tlpSupplier = store.getters.SdetailPembelian[0][0].tlpSupplier;
				getBarang();
				getSupplier();
				getCart();
			}).catch((error) => {});
		});
		onBeforeMount(() => {
			if (store.getters.SetEditNotaBeli[0] === void 0) router.push({ name: "pembelian-persediaan" });
			else params.value = {
				noNota: store.getters.SetEditNotaBeli[0].noNota,
				tglNota: store.getters.SetEditNotaBeli[0].tglNota,
				term: store.getters.SetEditNotaBeli[0].termPembelian,
				jthTempo: store.getters.SetEditNotaBeli[0].jthTempo,
				notes: store.getters.SetEditNotaBeli[0].note,
				subtotal: store.getters.SetEditNotaBeli[0].subTotal,
				tax: store.getters.SetEditNotaBeli[0].tax,
				disc: store.getters.SetEditNotaBeli[0].disc,
				total: store.getters.SetEditNotaBeli[0].total,
				termPembelian: store.getters.SetEditNotaBeli[0].termPembelian
			};
		});
		onUnmounted(() => {
			localStorage.setItem("cartItemsP", "[]");
		});
		const reset_form = () => {
			qty.value = 1;
			barcode.value = "";
		};
		function addToCart(brg) {
			if (localStorage.getItem("cartItemsP") === null) cartItems.value = [];
			else cartItems.value = JSON.parse(localStorage.getItem("cartItemsP"));
			if ((JSON.parse(localStorage.getItem("cartItemsP")) || []).find(({ kdBarang }) => kdBarang === brg.kdPersediaan)) {
				const objIndex = cartItems.value.findIndex(((e) => e.kdBarang === brg.kdPersediaan));
				const oldName = cartItems.value[objIndex].nmBarang;
				const oldQty = cartItems.value[objIndex].qty;
				const oldTotal = cartItems.value[objIndex].total;
				const newQty = parseInt(oldQty) + parseInt(qty.value);
				const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.lastPrice);
				cartItems.value[objIndex].qty = parseInt(newQty);
				cartItems.value[objIndex].total = parseInt(newTotal);
				localStorage.setItem("cartItemsP", JSON.stringify(cartItems.value));
				getCart();
				getTotal();
				reset_form();
				window.Swal.mixin({
					toast: true,
					position: "top-center",
					showConfirmButton: false,
					timer: 3e3,
					padding: "2em"
				}).fire({
					icon: "success",
					title: oldName + " Quantity Update",
					padding: "2em"
				});
			} else {
				cartItems.value.push({
					kdBarang: brg.kdPersediaan,
					nmBarang: brg.nmPersediaan,
					accid_persediaan: brg.accid_persediaan,
					hrgPokok: brg.lastPrice,
					qty: qty.value,
					satuan: brg.satuanPersediaan,
					total: qty.value * brg.lastPrice
				});
				localStorage.setItem("cartItemsP", JSON.stringify(cartItems.value));
				getCart();
				getTotal();
				reset_form();
				window.Swal.mixin({
					toast: true,
					position: "top-center",
					showConfirmButton: false,
					timer: 3e3,
					padding: "2em"
				}).fire({
					icon: "success",
					title: brg.nmPersediaan + " berhasil disimpan",
					padding: "2em"
				});
			}
		}
		function updateItemQty(barcode, qty) {
			const cartItems = JSON.parse(localStorage.getItem("cartItemsP"));
			const objIndex = cartItems.findIndex(((e) => e.kdBarang === barcode));
			const newQty = parseInt(qty);
			cartItems[objIndex].qty = parseInt(newQty);
			cartItems[objIndex].total = parseInt(newQty * cartItems[objIndex].hrgPokok);
			localStorage.setItem("cartItemsP", JSON.stringify(cartItems));
			getCart();
			getTotal();
		}
		function removeItem(id) {
			const filtered = JSON.parse(localStorage.getItem("cartItemsP")).filter((arrayFromStroage) => arrayFromStroage.kdBarang !== id);
			localStorage.setItem("cartItemsP", JSON.stringify(filtered));
			getCart();
		}
		function getCart() {
			if (localStorage.getItem("cartItemsP") === null) {
				cartItems.value = localStorage.setItem("cartItemsP", "[]");
				subtotal.value = 0;
			} else {
				cartItems.value = JSON.parse(localStorage.getItem("cartItemsP"));
				getSubtotal();
				getTotal();
			}
		}
		function getSubtotal() {
			const allItems = JSON.parse(localStorage.getItem("cartItemsP")) || [];
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
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[23] || (_cache[23] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Apps")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Invoice Add")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[54] || (_cache[54] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title" }, " Edit Pembelian ")], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [
					createBaseVNode("div", _hoisted_13, [_cache[24] || (_cache[24] = createBaseVNode("label", {
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
					createBaseVNode("div", _hoisted_15, [_cache[25] || (_cache[25] = createBaseVNode("label", {
						for: "company-email",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Tgl", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.tglNota,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Invoice Date"
					}, null, 8, ["modelValue"])])]),
					createBaseVNode("div", _hoisted_17, [_cache[26] || (_cache[26] = createBaseVNode("label", {
						for: "company-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Term", -1)), createBaseVNode("div", _hoisted_18, [withDirectives(createBaseVNode("select", {
						id: "inputState",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => params.value.term = $event),
						class: "form-select"
					}, [(openBlock(), createElementBlock(Fragment, null, renderList([{
						value: "0",
						label: "Cash"
					}, {
						value: "1",
						label: "Kredit"
					}], (option) => {
						return createBaseVNode("option", {
							key: option.value,
							value: option.value
						}, toDisplayString(option.label), 9, _hoisted_19);
					}), 64))], 512), [[vModelSelect, params.value.term]])])]),
					createBaseVNode("div", _hoisted_20, [_cache[27] || (_cache[27] = createBaseVNode("label", {
						for: "company-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Jatuh Tempo", -1)), createBaseVNode("div", _hoisted_21, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.jthTempo,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => params.value.jthTempo = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Due Date"
					}, null, 8, ["modelValue"])])])
				])]), createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [
					createBaseVNode("div", _hoisted_24, [_cache[28] || (_cache[28] = createBaseVNode("label", {
						for: "client-name",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Name", -1)), createBaseVNode("div", _hoisted_25, [createVNode(unref(import_vue3_multiselect_umd_min.default), {
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
					createBaseVNode("div", _hoisted_26, [_cache[29] || (_cache[29] = createBaseVNode("label", {
						for: "client-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Address", -1)), createBaseVNode("div", _hoisted_27, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paramssupplier.value.almtSupplier = $event),
						id: "client-address",
						class: "form-control form-control-sm",
						placeholder: "XYZ Street"
					}, null, 512), [[vModelText, paramssupplier.value.almtSupplier]])])]),
					createBaseVNode("div", _hoisted_28, [_cache[30] || (_cache[30] = createBaseVNode("label", {
						for: "client-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Phone", -1)), createBaseVNode("div", _hoisted_29, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paramssupplier.value.tlpSupplier = $event),
						id: "client-phone",
						class: "form-control form-control-sm",
						placeholder: "(123) 456 789"
					}, null, 512), [[vModelText, paramssupplier.value.tlpSupplier]])])])
				])])])]),
				createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [
					createBaseVNode("div", _hoisted_32, [_cache[31] || (_cache[31] = createBaseVNode("label", { for: "Inputqty" }, "Barcode", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						ref: "InputBarcode",
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => barcode.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Barcode",
						onKeyup: _cache[8] || (_cache[8] = withKeys(($event) => _ctx.addToCartB(barcode.value), ["enter"]))
					}, null, 544), [[vModelText, barcode.value]])]),
					createBaseVNode("div", _hoisted_33, [_cache[32] || (_cache[32] = createBaseVNode("label", { for: "inputCity" }, "NAMA BARANG", -1)), createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: brg.value,
						"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => brg.value = $event),
						options: pembelian.value.barangs,
						searchable: true,
						"track-by": "nmPersediaan",
						label: "nmPersediaan",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": ""
					}, null, 8, ["modelValue", "options"])]),
					createBaseVNode("div", _hoisted_34, [_cache[33] || (_cache[33] = createBaseVNode("label", { for: "inputState" }, "HARGA", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => brg.value.lastPrice = $event),
						class: "form-control form-control-sm",
						placeholder: "Price",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, brg.value.lastPrice]])]),
					createBaseVNode("div", _hoisted_35, [_cache[34] || (_cache[34] = createBaseVNode("label", { for: "inputZip" }, "QTY", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => qty.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Quantity",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, qty.value]])]),
					createBaseVNode("div", _hoisted_36, [_cache[35] || (_cache[35] = createBaseVNode("label", { for: "satuan" }, "SATUAN", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => brg.value.satuanPersediaan = $event),
						class: "form-control form-control-sm",
						id: "satuan"
					}, null, 512), [[vModelText, brg.value.satuanPersediaan]])]),
					createBaseVNode("div", _hoisted_37, [
						_cache[36] || (_cache[36] = createBaseVNode("label", { for: "inputZip" }, "TOTAL", -1)),
						_cache[37] || (_cache[37] = createBaseVNode("br", null, null, -1)),
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => tot.value = $event),
							class: "form-control form-control-sm",
							placeholder: "Quantity",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, tot.value]])
					]),
					createBaseVNode("div", _hoisted_38, [_cache[38] || (_cache[38] = createBaseVNode("label", { for: "aksi" }, "Aksi", -1)), createBaseVNode("button", {
						onClick: _cache[14] || (_cache[14] = ($event) => addToCart(brg.value)),
						class: "btn btn-xs btn-primary"
					}, " + ")])
				])]),
				createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("table", _hoisted_42, [_cache[40] || (_cache[40] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Nama Barang"),
					createBaseVNode("th", null, "Harga"),
					createBaseVNode("th", null, "Qty"),
					createBaseVNode("th", null, "Satuan"),
					createBaseVNode("th", null, "Total"),
					createBaseVNode("th", null, "Aksi")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(cartItems.value, (item) => {
					return openBlock(), createElementBlock("tr", { key: item.kdBarang }, [
						createBaseVNode("td", _hoisted_43, toDisplayString(item.nmBarang), 1),
						createBaseVNode("td", _hoisted_44, toDisplayString(new Intl.NumberFormat().format(item.hrgPokok)), 1),
						createBaseVNode("td", _hoisted_45, [withDirectives(createBaseVNode("input", {
							type: "number",
							"onUpdate:modelValue": ($event) => item.qty = $event,
							style: { "min-width": "50px" },
							onKeypress: onlyNumber,
							onKeyup: ($event) => updateItemQty(item.kdBarang, item.qty)
						}, null, 40, _hoisted_46), [[vModelText, item.qty]])]),
						createBaseVNode("td", _hoisted_47, toDisplayString(item.satuan), 1),
						createBaseVNode("td", _hoisted_48, toDisplayString(new Intl.NumberFormat().format(item.total)), 1),
						createBaseVNode("td", _hoisted_49, [createBaseVNode("a", {
							href: "javascript:;",
							onClick: ($event) => removeItem(_ctx.id = item.kdBarang)
						}, _cache[39] || (_cache[39] = [createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>", 1)]), 8, _hoisted_50)])
					]);
				}), 128))])])])])]),
				createBaseVNode("div", _hoisted_51, [createBaseVNode("div", _hoisted_52, [
					createBaseVNode("div", _hoisted_53, [createBaseVNode("div", _hoisted_54, [createBaseVNode("div", _hoisted_55, [createBaseVNode("div", _hoisted_56, [createBaseVNode("div", _hoisted_57, [createBaseVNode("a", {
						href: "javascript:;",
						onClick: _cache[15] || (_cache[15] = ($event) => openModal()),
						class: "btn btn-success btn-download"
					}, "PAYMENT")])])])])]),
					createBaseVNode("div", _hoisted_58, [createBaseVNode("div", _hoisted_59, [createBaseVNode("div", _hoisted_60, [
						_cache[42] || (_cache[42] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", {
							class: "modal-title",
							id: "modalPayment"
						}, "Vertically Aligned"), createBaseVNode("button", {
							type: "button",
							"data-dismiss": "modal",
							"data-bs-dismiss": "modal",
							"aria-label": "Close",
							class: "btn-close"
						})], -1)),
						createBaseVNode("div", _hoisted_61, [_cache[41] || (_cache[41] = createBaseVNode("h4", { class: "modal-heading mb-4 mt-2" }, "Aligned Center", -1)), createVNode(unref(import_vue3_multiselect_umd_min.default), {
							modelValue: paramsacc.value,
							"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => paramsacc.value = $event),
							options: pembelian.value.accs,
							searchable: true,
							"track-by": "name",
							label: "name",
							"open-direction": "top",
							placeholder: "Choose...",
							"selected-label": "",
							"select-label": ""
						}, null, 8, ["modelValue", "options"])]),
						_cache[43] || (_cache[43] = createBaseVNode("div", { class: "modal-footer" }, [createBaseVNode("button", {
							type: "button",
							class: "btn",
							"data-dismiss": "modal",
							"data-bs-dismiss": "modal"
						}, [createBaseVNode("i", { class: "flaticon-cancel-12" }), createTextVNode(" Discard")]), createBaseVNode("button", {
							type: "button",
							class: "btn btn-primary"
						}, "Save")], -1))
					])])]),
					createBaseVNode("div", _hoisted_62, [createBaseVNode("div", _hoisted_63, [
						createBaseVNode("div", _hoisted_64, [
							_cache[45] || (_cache[45] = createBaseVNode("div", { class: "invoice-summary-label" }, "Sub Total", -1)),
							_cache[46] || (_cache[46] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
							createBaseVNode("div", _hoisted_65, [createBaseVNode("div", _hoisted_66, [_cache[44] || (_cache[44] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", _hoisted_67, toDisplayString(new Intl.NumberFormat().format(subtotal.value)), 1)])])
						]),
						withDirectives(createBaseVNode("div", null, [createBaseVNode("div", _hoisted_68, [_cache[48] || (_cache[48] = createBaseVNode("div", { class: "invoice-summary-label" }, "Pajak", -1)), createBaseVNode("div", _hoisted_69, [createBaseVNode("div", _hoisted_70, [_cache[47] || (_cache[47] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor((subtotal.value - subtotal.value * disc.value / 100) * pembelian.value.pajak / 100))), 1)])])])], 512), [[vShow, divpajak.value]]),
						createBaseVNode("div", _hoisted_71, [
							_cache[49] || (_cache[49] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)),
							_cache[50] || (_cache[50] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
							withDirectives(createBaseVNode("input", {
								type: "hidden",
								"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => params.value.subtotal = $event)
							}, null, 512), [[vModelText, params.value.subtotal]]),
							withDirectives(createBaseVNode("input", {
								type: "hidden",
								"onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => params.value.tax = $event)
							}, null, 512), [[vModelText, params.value.tax]]),
							withDirectives(createBaseVNode("input", {
								type: "hidden",
								"onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => params.value.disc = $event)
							}, null, 512), [[vModelText, params.value.disc]]),
							createBaseVNode("div", _hoisted_72, [createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])
						])
					])])
				])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[21] || (_cache[21] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "PEMBAYARAN NOTA",
					showCancelButton: false,
					cancelButton: {
						text: "cancel",
						onclick: () => {
							isVisible.value = false;
						},
						loading: false
					},
					okButton: {
						text: "SAVE",
						onclick: () => {
							simpanPembelian();
						},
						loading: false
					},
					width: "60%"
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_73, [createBaseVNode("div", _hoisted_74, [createBaseVNode("div", _hoisted_75, [createBaseVNode("div", _hoisted_76, [params.value.term === 0 ? (openBlock(), createElementBlock("div", _hoisted_77, "Cash")) : params.value.term === 1 ? (openBlock(), createElementBlock("div", _hoisted_78, "Kredit")) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_79, [createBaseVNode("div", _hoisted_80, [createBaseVNode("span", _hoisted_81, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])])])])]), params.value.term === "0" ? (openBlock(), createElementBlock("div", _hoisted_82, [createBaseVNode("div", _hoisted_83, [createBaseVNode("div", _hoisted_84, [_cache[52] || (_cache[52] = createBaseVNode("div", { style: { "font-size": "20px" } }, "Method", -1)), createBaseVNode("div", _hoisted_85, [createBaseVNode("div", _hoisted_86, [withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => paramsbayar.value.metodeBayar = $event) }, _cache[51] || (_cache[51] = [
						createBaseVNode("option", {
							value: "cash",
							selected: ""
						}, "Cash", -1),
						createBaseVNode("option", { value: "credit_card" }, "Credit Card", -1),
						createBaseVNode("option", { value: "bank_transfer" }, "Bank Transfer", -1),
						createBaseVNode("option", { value: "ewallet" }, "E-Wallet", -1)
					]), 512), [[vModelSelect, paramsbayar.value.metodeBayar]])])])])])])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_87, [createBaseVNode("div", _hoisted_88, [createBaseVNode("div", _hoisted_89, [createBaseVNode("div", _hoisted_90, [_cache[53] || (_cache[53] = createBaseVNode("label", {
					for: "invoice-detail-notes",
					class: "col-sm-12 col-form-label col-form-label-sm"
				}, "Notes:", -1)), createBaseVNode("div", _hoisted_91, [withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => params.value.notes = $event),
					rows: "3",
					class: "form-control",
					placeholder: "Notes - For example, \"Thank you for doing business with us\""
				}, null, 512), [[vModelText, params.value.notes]])])])])])])
			])])])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
