import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { E as createVNode, F as onBeforeMount, L as onMounted, Mt as toDisplayString, S as createElementBlock, U as renderList, b as createBlock, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, v as computed, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { a as _plugin_vue_export_helper_default, c as useStore } from "../../assets/main-DqXy1ygy.js";
import { r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-BHmUnYgJ.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C16KEE_q.js";
/* empty css                     */
//#region resources/js/src/views/master/kartuStok.vue?vue&type=style&index=0&scoped=fe2219ef&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
init_jspdf_es_min();
require_jspdf_plugin_autotable();
//#endregion
//#region resources/js/src/views/master/kartuStok.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_3 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_4 = { class: "doc-container" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-9" };
var _hoisted_7 = { class: "invoice-container" };
var _hoisted_8 = { class: "invoice-inbox" };
var _hoisted_9 = {
	id: "ct",
	class: ""
};
var _hoisted_10 = { class: "invoice-00001" };
var _hoisted_11 = { class: "content-section" };
var _hoisted_12 = { class: "inv--detail-section inv--customer-detail-section" };
var _hoisted_13 = { class: "table-responsive" };
var _hoisted_14 = { class: "table" };
var _hoisted_15 = { colspan: "2" };
var _hoisted_16 = { colspan: "2" };
var _hoisted_17 = { colspan: "2" };
var _hoisted_18 = { class: "col-xl-3" };
var _hoisted_19 = { class: "invoice-actions-btn" };
var _hoisted_20 = { class: "invoice-action-btn" };
var _hoisted_21 = { class: "row" };
var _hoisted_22 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_23 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_24 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_25 = { class: "row mb-4" };
var _hoisted_26 = { class: "col-sm" };
var _hoisted_27 = { class: "col-sm" };
var kartuStok_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "kartuStok",
	setup(__props) {
		useMeta({ title: "Kartu Stok" });
		const store = useStore();
		const unit_beli_s = ref();
		const total_beli_s = ref();
		const unit_jual_s = ref();
		const total_jual_s = ref();
		const hpp_brg = ref();
		const kdb = ref();
		const items = ref([]);
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		onMounted(() => {
			bind_data();
		});
		onBeforeMount(() => {
			kdb.value = store.getters.SetViewStok[0].kdBarang;
			sorting.value.kdBarang = store.getters.SetViewStok[0].kdBarang;
			sorting.value.nmBarang = store.getters.SetViewStok[0].nmBarang;
			sorting.value.startDate = store.getters.SetViewStok[0].startDate || hooks().subtract(30, "d").format("D-M-YYYY");
			sorting.value.endDate = store.getters.SetViewStok[0].endDate || hooks().format("D-M-YYYY");
		});
		const bind_data = async () => {
			await store.dispatch("GetKartuStok", {
				startDate: sorting.value.startDate,
				endDate: sorting.value.endDate,
				kdBarang: kdb.value
			});
			setTimeout(function() {
				items.value = store.getters.StateListKartuStok;
			}, 2e3);
		};
		computed(() => {
			items.value = store.getters.Saplusan;
		});
		const cari = async () => {
			await store.dispatch("GetKartuStok", {
				startDate: sorting.value.startDate,
				endDate: sorting.value.endDate,
				kdBarang: kdb.value
			}).then(() => {
				items.value = store.getters.StateListKartuStok;
				let arr = store.getters.StateListKartuStok;
				let sum_beli = 0;
				let sum_unit_beli = 0;
				let sum_jual = 0;
				let sum_unit_jual = 0;
				arr.forEach((element) => {
					sum_beli += parseInt(element.total_beli);
					sum_unit_beli += parseInt(element.unit_beli);
					sum_jual += parseInt(element.total_jual);
					sum_unit_jual += parseInt(element.unit_jual);
				});
				unit_beli_s.value = sum_unit_beli;
				total_beli_s.value = sum_beli;
				unit_jual_s.value = sum_unit_jual;
				total_jual_s.value = sum_jual;
				hpp_brg.value = sum_beli / sum_unit_beli;
			});
		};
		const print = () => {
			window.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[4] || (_cache[4] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "DataTables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "HTML5 Export")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("table", _hoisted_14, [
				createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", _hoisted_15, "LAPORAN BARANG " + toDisplayString(sorting.value.nmBarang), 1),
					createBaseVNode("th", _hoisted_16, "Periode Tgl " + toDisplayString(sorting.value.startDate) + " sd " + toDisplayString(sorting.value.endDate), 1),
					createBaseVNode("th", _hoisted_17, "Kode barang : " + toDisplayString(sorting.value.kdBarang), 1)
				]), _cache[5] || (_cache[5] = createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Tanggal"),
					createBaseVNode("th", null, "Qty Beli"),
					createBaseVNode("th", null, "Nilai Beli"),
					createBaseVNode("th", null, "Qty Jual"),
					createBaseVNode("th", null, "Nilai Jual")
				], -1))]),
				createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
					return openBlock(), createElementBlock("tr", { key: item.id }, [
						createBaseVNode("td", null, toDisplayString(unref(hooks)(item.tgl).format("D-M-YYYY")), 1),
						createBaseVNode("td", null, toDisplayString(Number(item.unit_beli).toLocaleString()), 1),
						createBaseVNode("td", null, toDisplayString(Number(item.total_beli).toLocaleString()), 1),
						createBaseVNode("td", null, toDisplayString(Number(item.unit_jual).toLocaleString()), 1),
						createBaseVNode("td", null, toDisplayString(Number(item.total_jual).toLocaleString()), 1)
					]);
				}), 128))]),
				createBaseVNode("thead", null, [
					createBaseVNode("tr", null, [
						_cache[6] || (_cache[6] = createBaseVNode("th", null, "Total", -1)),
						createBaseVNode("th", null, toDisplayString(Number(unit_beli_s.value).toLocaleString()), 1),
						createBaseVNode("th", null, toDisplayString(Number(total_beli_s.value).toLocaleString()), 1),
						createBaseVNode("th", null, toDisplayString(Number(unit_jual_s.value).toLocaleString()), 1),
						createBaseVNode("th", null, toDisplayString(Number(total_jual_s.value).toLocaleString()), 1)
					]),
					createBaseVNode("tr", null, [
						_cache[7] || (_cache[7] = createBaseVNode("th", null, "HPP", -1)),
						createBaseVNode("th", null, toDisplayString(Number(unit_jual_s.value).toLocaleString()), 1),
						createBaseVNode("th", null, toDisplayString(Number(unit_jual_s.value * hpp_brg.value).toLocaleString()), 1),
						_cache[8] || (_cache[8] = createBaseVNode("th", null, null, -1)),
						createBaseVNode("th", null, toDisplayString(Number(total_jual_s.value - unit_jual_s.value * hpp_brg.value).toLocaleString()), 1)
					]),
					createBaseVNode("tr", null, [
						_cache[9] || (_cache[9] = createBaseVNode("th", null, "Laba", -1)),
						_cache[10] || (_cache[10] = createBaseVNode("th", null, null, -1)),
						_cache[11] || (_cache[11] = createBaseVNode("th", null, null, -1)),
						_cache[12] || (_cache[12] = createBaseVNode("th", null, null, -1)),
						createBaseVNode("th", null, toDisplayString(Number(total_jual_s.value - unit_jual_s.value * hpp_brg.value).toLocaleString()), 1)
					]),
					_cache[13] || (_cache[13] = createBaseVNode("tr", null, [
						createBaseVNode("th", {
							colspan: "2",
							class: "align-top mx-auto"
						}),
						createBaseVNode("th", {
							colspan: "2",
							class: "align-top mx-auto"
						}, [createBaseVNode("div", { class: "table-responsive" })]),
						createBaseVNode("th", {
							colspan: "2",
							class: "align-top mx-auto"
						}, [createBaseVNode("div", { class: "table-responsive" })])
					], -1))
				])
			])])])])])])])])]), createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [
				createBaseVNode("div", _hoisted_22, [createBaseVNode("a", {
					href: "javascript:;",
					class: "btn btn-secondary btn-print action-print",
					onClick: _cache[0] || (_cache[0] = ($event) => print())
				}, "Print")]),
				createBaseVNode("div", _hoisted_23, [createBaseVNode("a", {
					href: "javascript:",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.go(-1)),
					class: "btn btn-secondary btn-print action-print"
				}, "Kembali")]),
				createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [_cache[14] || (_cache[14] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_27, [_cache[15] || (_cache[15] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])])])]),
				createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: cari,
					class: "btn btn-success btn-download"
				}, "Cari")])
			])])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-fe2219ef"]]);
//#endregion
export { kartuStok_default as default };
