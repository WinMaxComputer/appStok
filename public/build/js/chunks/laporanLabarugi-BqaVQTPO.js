import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, Et as normalizeClass, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as _plugin_vue_export_helper_default, c as useStore } from "../../assets/main-DeA6wrtx.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-CDpU7b3T.js";
/* empty css                     */
//#region resources/js/src/views/laporan/laporanLabarugi.vue?vue&type=style&index=0&scoped=437cc3ae&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/laporan/laporanLabarugi.vue
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
var _hoisted_13 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_14 = { class: "table table-sm laba-table mb-0" };
var _hoisted_15 = { style: { "vertical-align": "top" } };
var _hoisted_16 = {
	border: "1",
	cellspacing: "3",
	width: "75%",
	class: "laba-detail-table"
};
var _hoisted_17 = { key: 0 };
var _hoisted_18 = { key: 1 };
var _hoisted_19 = {
	border: "1",
	cellspacing: "3",
	width: "100%",
	class: "laba-summary-table"
};
var _hoisted_20 = { class: "summary-total-row" };
var _hoisted_21 = { style: {
	"padding-left": "8px",
	"border-bottom": "1px solid #000"
} };
var _hoisted_22 = {
	class: "text-end",
	style: {
		"min-width": "160px",
		"border-bottom": "1px solid #000"
	}
};
var _hoisted_23 = { class: "col-xl-3" };
var _hoisted_24 = { class: "invoice-actions-btn" };
var _hoisted_25 = { class: "invoice-action-btn" };
var _hoisted_26 = { class: "row" };
var _hoisted_27 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_28 = { class: "row mb-4" };
var _hoisted_29 = { class: "col-sm" };
var _hoisted_30 = { class: "col-sm" };
var _hoisted_31 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_32 = ["disabled"];
var _hoisted_33 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var laporanLabarugi_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "laporanLabarugi",
	setup(__props) {
		useMeta({ title: "Laba Rugi" });
		const store = useStore();
		const load = ref(false);
		const sorting = ref({
			startDate: hooks().startOf("month").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const labarugi = ref({
			amount: 0,
			name: "Laba Rugi"
		});
		const biayalist = ref([]);
		const isHeadingRow = (row) => row?.jenis === "Total" || String(row?.jenis || "").startsWith("H");
		const isHeadTotalRow = (row) => isHeadingRow(row) || row?.jenis === "Total";
		const isSupportedLevel = (level) => [
			"1",
			"2",
			"3",
			"4"
		].includes(String(level));
		const shouldRenderRow = (row) => {
			if (!isSupportedLevel(row?.level)) return false;
			if (String(row.level) === "1") return true;
			return Number(row.amount || 0) !== 0;
		};
		const rowUnderlineStyle = (row) => isHeadTotalRow(row) ? { borderBottom: "1px solid #000" } : {};
		const codeCellStyle = (row) => ({
			minWidth: "80px",
			...rowUnderlineStyle(row)
		});
		const levelClass = (level) => `level-${String(level || "1")}`;
		const nameCellStyle = (row) => {
			return {
				minWidth: "260px",
				paddingRight: "24px",
				...rowUnderlineStyle(row)
			};
		};
		const formatAmount = (amount, accId) => {
			const numericAmount = Number(amount || 0);
			const finalAmount = String(accId || "").substring(0, 1) === "6" ? -1 * numericAmount : numericAmount;
			return Number(finalAmount).toLocaleString();
		};
		const amountCellStyle = (row) => {
			const isExpense = String(row?.acc_id || "").substring(0, 1) === "6";
			const style = {
				minWidth: "160px",
				paddingLeft: "24px",
				textAlign: "right",
				...rowUnderlineStyle(row)
			};
			if (isExpense && String(row?.level) === "2") style.borderTop = "1px solid black";
			if (isExpense && (String(row?.level) === "1" || String(row?.level) === "3") && row?.jenis === "Total") style.borderBottom = "1px solid black";
			return style;
		};
		const loadReport = async () => {
			load.value = true;
			try {
				const payload = {
					...sorting.value,
					group: "2,4,5,6"
				};
				await store.dispatch("GetHarta", payload);
				let alldata = store.getters.StateHarta;
				biayalist.value = alldata.filter((p) => p.acc_id >= "40000");
				let lb = store.getters.StateHarta;
				labarugi.value = lb.find((n) => n.acc_id === "69999") || {
					amount: 0,
					name: "Laba Rugi"
				};
			} finally {
				load.value = false;
			}
		};
		onMounted(async () => {
			await loadReport();
		});
		const cari = async () => {
			await loadReport();
		};
		const printPage = () => {
			window.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[2] || (_cache[2] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Laba Rugi")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_cache[4] || (_cache[4] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title" }, " Laporan Laba Rugi ")], -1)), createBaseVNode("div", null, [load.value ? (openBlock(), createElementBlock("div", _hoisted_13, _cache[3] || (_cache[3] = [
				createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1)
			]))) : createCommentVNode("", true), createBaseVNode("table", _hoisted_14, [
				createBaseVNode("tr", null, [createBaseVNode("td", null, [createBaseVNode("h6", null, "LAPORAN LABA RUGI PERIODE TGL " + toDisplayString(sorting.value.startDate) + " S/D " + toDisplayString(sorting.value.endDate), 1)])]),
				createBaseVNode("tr", _hoisted_15, [createBaseVNode("td", null, [createBaseVNode("table", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(biayalist.value, (hrt) => {
					return openBlock(), createElementBlock("tbody", {
						key: hrt.acc_id,
						style: { "border": "1px" }
					}, [shouldRenderRow(hrt) ? (openBlock(), createElementBlock("tr", {
						key: 0,
						class: normalizeClass({ "head-total-row": isHeadTotalRow(hrt) })
					}, [
						createBaseVNode("td", { style: normalizeStyle(codeCellStyle(hrt)) }, toDisplayString(hrt.jenis !== "Total" ? hrt.acc_id : ""), 5),
						createBaseVNode("td", {
							class: normalizeClass([levelClass(hrt.level), {
								"fw-bold": isHeadingRow(hrt),
								"is-total-row": hrt.jenis === "Total"
							}]),
							style: normalizeStyle(nameCellStyle(hrt))
						}, toDisplayString(hrt.name), 7),
						createBaseVNode("td", {
							class: "text-end",
							style: normalizeStyle(amountCellStyle(hrt))
						}, [hrt.jenis === "Total" ? (openBlock(), createElementBlock("strong", _hoisted_17, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)) : hrt.jenis === "Detail" ? (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)) : createCommentVNode("", true)], 4)
					], 2)) : createCommentVNode("", true)]);
				}), 128))])])]),
				createBaseVNode("tr", null, [createBaseVNode("td", null, [createBaseVNode("table", _hoisted_19, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_20, [createBaseVNode("td", _hoisted_21, [createBaseVNode("b", null, toDisplayString(labarugi.value["name"]), 1)]), createBaseVNode("td", _hoisted_22, [createBaseVNode("strong", null, toDisplayString(Number(labarugi.value["amount"]).toLocaleString()), 1)])])])])])])
			])])])])])])])])]), createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [
				createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary btn-print action-print w-100",
					onClick: printPage
				}, "Cetak")]),
				createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [_cache[5] || (_cache[5] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_30, [_cache[6] || (_cache[6] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])])])]),
				createBaseVNode("div", _hoisted_31, [createBaseVNode("button", {
					type: "button",
					onClick: cari,
					class: "btn btn-success btn-download w-100",
					disabled: load.value
				}, [load.value ? (openBlock(), createElementBlock("span", _hoisted_33)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(load.value ? "Memuat..." : "Cari"), 1)], 8, _hoisted_32)])
			])])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-437cc3ae"]]);
//#endregion
export { laporanLabarugi_default as default };
