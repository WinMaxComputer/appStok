import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, R as openBlock, T as createVNode, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { s as useStore } from "../../assets/main-BslATf6g.js";
import { r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-CRYa0Dx7.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DMEX67jY.js";
/* empty css                     */
//#region resources/js/src/views/laporan/neracaKeuangan.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
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
var _hoisted_14 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_15 = { style: { "font-size": "8px" } };
var _hoisted_16 = ["set"];
var _hoisted_17 = { key: 0 };
var _hoisted_18 = {
	key: 0,
	style: { "min-width": "70px" }
};
var _hoisted_19 = { key: 1 };
var _hoisted_20 = {
	key: 2,
	style: { "min-width": "400px" }
};
var _hoisted_21 = {
	key: 3,
	style: { "min-width": "400px" }
};
var _hoisted_22 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_23 = { key: 5 };
var _hoisted_24 = { key: 6 };
var _hoisted_25 = { key: 0 };
var _hoisted_26 = { key: 1 };
var _hoisted_27 = { key: 7 };
var _hoisted_28 = { key: 0 };
var _hoisted_29 = { key: 1 };
var _hoisted_30 = { key: 8 };
var _hoisted_31 = { key: 1 };
var _hoisted_32 = { key: 0 };
var _hoisted_33 = { key: 1 };
var _hoisted_34 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_35 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_36 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_37 = { key: 5 };
var _hoisted_38 = { key: 6 };
var _hoisted_39 = { key: 0 };
var _hoisted_40 = { key: 1 };
var _hoisted_41 = { key: 7 };
var _hoisted_42 = { key: 0 };
var _hoisted_43 = { key: 1 };
var _hoisted_44 = { key: 8 };
var _hoisted_45 = { key: 2 };
var _hoisted_46 = { key: 0 };
var _hoisted_47 = { key: 1 };
var _hoisted_48 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_49 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_50 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_51 = { key: 5 };
var _hoisted_52 = { key: 6 };
var _hoisted_53 = { key: 0 };
var _hoisted_54 = { key: 1 };
var _hoisted_55 = { key: 7 };
var _hoisted_56 = { key: 0 };
var _hoisted_57 = { key: 1 };
var _hoisted_58 = { key: 3 };
var _hoisted_59 = { style: { "min-width": "300px" } };
var _hoisted_60 = { key: 0 };
var _hoisted_61 = { key: 1 };
var _hoisted_62 = { class: "col-xl-3" };
var _hoisted_63 = { class: "invoice-actions-btn" };
var _hoisted_64 = { class: "invoice-action-btn" };
var _hoisted_65 = { class: "row" };
var _hoisted_66 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_67 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_68 = { class: "row mb-4" };
var _hoisted_69 = { class: "col-sm" };
var _hoisted_70 = { class: "col-sm" };
var _sfc_main = {
	__name: "neracaKeuangan",
	setup(__props) {
		useMeta({ title: "Neraca Keuangan" });
		const store = useStore();
		const sorting = ref({
			startDate: hooks().startOf("month").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const load = ref();
		const hartalist = ref();
		onMounted(() => {
			load.value = true;
			const harta = ref({ group: "1,2,3" });
			var c = Object.assign(sorting.value, harta.value);
			store.dispatch("GetHarta", c);
			setTimeout(function() {
				hartalist.value = store.getters.StateHarta;
				load.value = false;
			}, 1e4);
		});
		const cari = () => {
			load.value = true;
			const pendapatan = ref({ group: "1,2,3" });
			var c = Object.assign(sorting.value, pendapatan.value);
			store.dispatch("GetPendapatan", c);
			setTimeout(function() {
				hartalist.value = store.getters.StateCoaPendapatan;
				load.value = false;
			}, 1e4);
		};
		const print = () => {
			window.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[3] || (_cache[3] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "DataTables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "HTML5 Export")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "row invoice layout-top-spacing layout-spacing apps-invoice" }, null, -1)), createBaseVNode("div", _hoisted_13, [load.value ? (openBlock(), createElementBlock("div", _hoisted_14, _cache[4] || (_cache[4] = [
				createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1)
			]))) : createCommentVNode("", true), createBaseVNode("table", _hoisted_15, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
				return openBlock(), createElementBlock("tbody", {
					key: hrt.acc_id,
					set: _ctx.amount = hrt.amount
				}, [
					hrt.level === "1" ? (openBlock(), createElementBlock("tr", _hoisted_17, [
						hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_18, toDisplayString(hrt.acc_id), 1)) : (openBlock(), createElementBlock("td", _hoisted_19)),
						hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_20, [createBaseVNode("b", null, "\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_21, "\xA0\xA0" + toDisplayString(hrt.name), 1)),
						_cache[5] || (_cache[5] = createBaseVNode("td", null, null, -1)),
						_cache[6] || (_cache[6] = createBaseVNode("td", null, null, -1)),
						hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_22)) : (openBlock(), createElementBlock("td", _hoisted_23)),
						hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_24, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_25, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_26, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_27, [createBaseVNode("b", null, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_28, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])])) : (openBlock(), createElementBlock("td", _hoisted_30))
					])) : createCommentVNode("", true),
					hrt.level === "2" ? (openBlock(), createElementBlock("tr", _hoisted_31, [
						hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_32, toDisplayString(hrt.acc_id), 1)) : (openBlock(), createElementBlock("td", _hoisted_33)),
						hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_34, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_35, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
						_cache[7] || (_cache[7] = createBaseVNode("td", null, null, -1)),
						hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_36)) : (openBlock(), createElementBlock("td", _hoisted_37)),
						hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_38, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_39, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_40, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_41, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_42, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_43, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])) : (openBlock(), createElementBlock("td", _hoisted_44)),
						_cache[8] || (_cache[8] = createBaseVNode("td", null, null, -1))
					])) : createCommentVNode("", true),
					hrt.level === "3" ? (openBlock(), createElementBlock("tr", _hoisted_45, [
						hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_46, toDisplayString(hrt.acc_id), 1)) : (openBlock(), createElementBlock("td", _hoisted_47)),
						hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_48, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_49, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
						hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_50)) : (openBlock(), createElementBlock("td", _hoisted_51)),
						hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_52, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_53, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_54, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_55, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_56, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_57, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))])) : createCommentVNode("", true),
						_cache[9] || (_cache[9] = createBaseVNode("td", null, null, -1)),
						_cache[10] || (_cache[10] = createBaseVNode("td", null, null, -1))
					])) : createCommentVNode("", true),
					hrt.level === "4" ? (openBlock(), createElementBlock("tr", _hoisted_58, [
						createBaseVNode("td", null, toDisplayString(hrt.acc_id), 1),
						createBaseVNode("td", _hoisted_59, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1),
						createBaseVNode("td", null, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "3" || hrt.acc_id.substring(0, 1) === "4" || hrt.acc_id.substring(0, 1) === "7" ? (openBlock(), createElementBlock("div", _hoisted_60, toDisplayString(Number(-1 * _ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("div", _hoisted_61, toDisplayString(Number(_ctx.amount).toLocaleString()), 1))]),
						_cache[11] || (_cache[11] = createBaseVNode("td", null, null, -1)),
						_cache[12] || (_cache[12] = createBaseVNode("td", null, null, -1)),
						_cache[13] || (_cache[13] = createBaseVNode("td", null, null, -1))
					])) : createCommentVNode("", true)
				], 8, _hoisted_16);
			}), 128))])])])])])])])])]), createBaseVNode("div", _hoisted_62, [createBaseVNode("div", _hoisted_63, [createBaseVNode("div", _hoisted_64, [createBaseVNode("div", _hoisted_65, [
				createBaseVNode("div", _hoisted_66, [createBaseVNode("a", {
					href: "javascript:;",
					class: "btn btn-secondary btn-print action-print",
					onClick: _cache[0] || (_cache[0] = ($event) => print())
				}, "Print")]),
				createBaseVNode("div", _hoisted_67, [createBaseVNode("div", _hoisted_68, [createBaseVNode("div", _hoisted_69, [_cache[15] || (_cache[15] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_70, [_cache[16] || (_cache[16] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sorting.value.endDate = $event),
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
};
//#endregion
export { _sfc_main as default };
