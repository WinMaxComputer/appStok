import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, L as onMounted, Nt as toDisplayString, Q as withDirectives, S as createElementBlock, X as watch, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-DOPM_Qis.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-D-SUjCa4.js";
/* empty css                     */
import { t as require_vue3_multiselect_umd_min } from "./vue3-multiselect-Bz1S_S00.js";
//#region resources/js/src/views/transaksi/transaksiSewa.vue
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
var _hoisted_14 = { class: "col-sm-8" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-8" };
var _hoisted_17 = { class: "col-xl-5" };
var _hoisted_18 = { class: "form-group row" };
var _hoisted_19 = { class: "col-sm-8" };
var _hoisted_20 = {
	key: 0,
	class: "form-group row"
};
var _hoisted_21 = { class: "col-sm-8" };
var _hoisted_22 = {
	key: 1,
	class: "form-group row"
};
var _hoisted_23 = { class: "col-sm-8" };
var _hoisted_24 = {
	key: 2,
	class: "form-group row"
};
var _hoisted_25 = { class: "col-sm-8" };
var _hoisted_26 = { class: "form-group row" };
var _hoisted_27 = { class: "col-sm-8" };
var _hoisted_28 = { class: "form-group row" };
var _hoisted_29 = { class: "col-sm-8" };
var _hoisted_30 = { class: "invoice-detail-total mt-3" };
var _hoisted_31 = { class: "row" };
var _hoisted_32 = { class: "col-md-6" };
var _hoisted_33 = { class: "totals-row" };
var _hoisted_34 = { class: "invoice-totals-row invoice-summary-total" };
var _hoisted_35 = { class: "invoice-summary-value" };
var _sfc_main = {
	__name: "transaksiSewa",
	setup(__props) {
		useMeta({ title: "Sewa Inventaris" });
		const store = useStore();
		const noSewa = ref("");
		const inventarisList = ref([]);
		const selectedInv = ref(null);
		const params = ref({
			noSewa,
			tglSewa: hooks().format("YYYY-MM-DD"),
			kode_inventaris: "",
			jumlah_sewa: 0,
			periode_sewa: 1,
			acc_pendapatan_sewa: "",
			acc_kas: "11110",
			keterangan: "Pendapatan Sewa Inventaris"
		});
		watch(selectedInv, (inv) => {
			if (inv) {
				params.value.kode_inventaris = inv.kode_inventaris;
				params.value.jumlah_sewa = inv.harga_sewa || 0;
				params.value.acc_pendapatan_sewa = inv.acc_pendapatan_sewa || "";
			}
		});
		const loadInventaris = () => {
			store.dispatch("GetInventaris");
			setTimeout(() => {
				const c = store.getters.StateInventaris;
				inventarisList.value = (c[0] || []).filter((i) => i.is_disewakan);
			}, 1500);
		};
		const loadNoSewa = () => {
			store.dispatch("GetNoSewa");
			setTimeout(() => {
				noSewa.value = store.getters.NoSewa;
			}, 1500);
		};
		const simpanSewa = () => {
			if (!selectedInv.value) {
				window.Swal.fire({
					icon: "warning",
					title: "Pilih inventaris terlebih dahulu",
					padding: "2em"
				});
				return;
			}
			store.dispatch("CreateSewaInventaris", params.value).then(() => {
				loadNoSewa();
				selectedInv.value = null;
				params.value.jumlah_sewa = 0;
				params.value.periode_sewa = 1;
				params.value.keterangan = "Pendapatan Sewa Inventaris";
			}).catch(() => {});
		};
		onMounted(() => {
			loadInventaris();
			loadNoSewa();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[8] || (_cache[8] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Transaksi")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Pendapatan Sewa Inventaris")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[18] || (_cache[18] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title" }, "Pendapatan Sewa Inventaris")], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[9] || (_cache[9] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "No Dokumen", -1)), createBaseVNode("div", _hoisted_14, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noSewa = $event),
					class: "form-control form-control-sm",
					disabled: ""
				}, null, 512), [[vModelText, params.value.noSewa]])])]), createBaseVNode("div", _hoisted_15, [_cache[10] || (_cache[10] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Tanggal", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: params.value.tglSewa,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglSewa = $event),
					class: "form-control form-control-sm flatpickr active",
					placeholder: "Tanggal Sewa"
				}, null, 8, ["modelValue"])])])])]), createBaseVNode("div", _hoisted_17, [
					createBaseVNode("div", _hoisted_18, [_cache[11] || (_cache[11] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Inventaris", -1)), createBaseVNode("div", _hoisted_19, [createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: selectedInv.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedInv.value = $event),
						options: inventarisList.value,
						searchable: true,
						"allow-empty": false,
						"track-by": "kode_inventaris",
						label: "nama_inventaris",
						placeholder: "Pilih Inventaris...",
						"selected-label": "",
						"select-label": "",
						"deselect-label": ""
					}, null, 8, ["modelValue", "options"])])]),
					selectedInv.value ? (openBlock(), createElementBlock("div", _hoisted_20, [_cache[12] || (_cache[12] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Harga Sewa", -1)), createBaseVNode("div", _hoisted_21, [withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => params.value.jumlah_sewa = $event),
						class: "form-control form-control-sm",
						placeholder: "Jumlah pendapatan sewa"
					}, null, 512), [[vModelText, params.value.jumlah_sewa]])])])) : createCommentVNode("", true),
					selectedInv.value ? (openBlock(), createElementBlock("div", _hoisted_22, [_cache[13] || (_cache[13] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Periode Sewa (Bulan)", -1)), createBaseVNode("div", _hoisted_23, [withDirectives(createBaseVNode("input", {
						type: "number",
						min: "1",
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => params.value.periode_sewa = $event),
						class: "form-control form-control-sm"
					}, null, 512), [[vModelText, params.value.periode_sewa]])])])) : createCommentVNode("", true),
					selectedInv.value ? (openBlock(), createElementBlock("div", _hoisted_24, [_cache[14] || (_cache[14] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Akun Pendapatan", -1)), createBaseVNode("div", _hoisted_25, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => params.value.acc_pendapatan_sewa = $event),
						class: "form-control form-control-sm",
						placeholder: "Kode akun pendapatan sewa"
					}, null, 512), [[vModelText, params.value.acc_pendapatan_sewa]])])])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_26, [_cache[15] || (_cache[15] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Akun Kas", -1)), createBaseVNode("div", _hoisted_27, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => params.value.acc_kas = $event),
						class: "form-control form-control-sm",
						placeholder: "Kode akun kas (default 11110)"
					}, null, 512), [[vModelText, params.value.acc_kas]])])]),
					createBaseVNode("div", _hoisted_28, [_cache[16] || (_cache[16] = createBaseVNode("label", { class: "col-sm-4 col-form-label col-form-label-sm" }, "Keterangan", -1)), createBaseVNode("div", _hoisted_29, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => params.value.keterangan = $event),
						class: "form-control form-control-sm",
						placeholder: "Keterangan"
					}, null, 512), [[vModelText, params.value.keterangan]])])])
				])])]),
				createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", { class: "col-md-6" }, [createBaseVNode("div", { class: "invoice-actions-btn" }, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: simpanSewa,
					class: "btn btn-success btn-download"
				}, "Simpan")])]), createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [_cache[17] || (_cache[17] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total Pendapatan Sewa", -1)), createBaseVNode("div", _hoisted_35, [createBaseVNode("strong", null, toDisplayString(Number(params.value.jumlah_sewa || 0).toLocaleString()), 1)])])])])])])
			])])])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
