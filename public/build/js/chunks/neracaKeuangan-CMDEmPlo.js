import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, Et as normalizeClass, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as _plugin_vue_export_helper_default, c as useStore } from "../../assets/main-B6cAUmtZ.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DRdrcT0i.js";
/* empty css                     */
//#region resources/js/src/views/laporan/neracaKeuangan.vue?vue&type=style&index=0&scoped=138b7d92&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/laporan/neracaKeuangan.vue
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
var _hoisted_14 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_15 = { class: "table table-sm neraca-table mb-0" };
var _hoisted_16 = { key: 0 };
var _hoisted_17 = { class: "col-xl-3" };
var _hoisted_18 = { class: "invoice-actions-btn" };
var _hoisted_19 = { class: "invoice-action-btn" };
var _hoisted_20 = { class: "row" };
var _hoisted_21 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_22 = { class: "row mb-4" };
var _hoisted_23 = { class: "col-sm" };
var _hoisted_24 = { class: "col-sm" };
var _hoisted_25 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_26 = ["disabled"];
var _hoisted_27 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var neracaKeuangan_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "neracaKeuangan",
	setup(__props) {
		useMeta({ title: "Neraca Keuangan" });
		const store = useStore();
		const sorting = ref({
			startDate: hooks().startOf("month").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const load = ref(false);
		const hartalist = ref([]);
		const isSupportedLevel = (level) => [
			"1",
			"2",
			"3",
			"4"
		].includes(String(level));
		const isHeadingRow = (row) => row?.jenis === "Total" || String(row?.jenis || "").startsWith("H");
		const rowUnderlineStyle = (row) => isHeadingRow(row) ? { borderBottom: "1px solid #000" } : {};
		const codeCellStyle = (row) => ({
			minWidth: "70px",
			...rowUnderlineStyle(row)
		});
		const nameCellStyle = (level, row) => {
			return {
				minWidth: "300px",
				paddingLeft: {
					"1": "8px",
					"2": "20px",
					"3": "32px",
					"4": "44px"
				}[String(level)] || "8px",
				...rowUnderlineStyle(row)
			};
		};
		const amountCellStyle = (row) => ({ ...rowUnderlineStyle(row) });
		const levelClass = (level) => `print-level-${String(level || "1")}`;
		const isNegativeAccount = (accId) => [
			"2",
			"3",
			"4",
			"7"
		].includes(String(accId || "").substring(0, 1));
		const formatAmount = (amount, accId) => {
			const numericAmount = Number(amount || 0);
			const finalAmount = isNegativeAccount(accId) ? -1 * numericAmount : numericAmount;
			return Number(finalAmount).toLocaleString();
		};
		const loadData = async () => {
			load.value = true;
			try {
				const payload = {
					...sorting.value,
					group: "1,2,3"
				};
				await store.dispatch("GetHarta", payload);
				hartalist.value = store.getters.StateHarta;
			} finally {
				load.value = false;
			}
		};
		onMounted(async () => {
			await loadData();
		});
		const cari = async () => {
			await loadData();
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
			}, [createBaseVNode("span", null, "Neraca Keuangan")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "row invoice layout-top-spacing layout-spacing apps-invoice" }, null, -1)), createBaseVNode("div", _hoisted_13, [load.value ? (openBlock(), createElementBlock("div", _hoisted_14, _cache[3] || (_cache[3] = [
				createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1)
			]))) : createCommentVNode("", true), createBaseVNode("table", _hoisted_15, [_cache[4] || (_cache[4] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
				createBaseVNode("th", { style: { "width": "140px" } }, "Kode"),
				createBaseVNode("th", null, "Nama Akun"),
				createBaseVNode("th", {
					class: "text-end",
					style: { "width": "220px" }
				}, "Jumlah")
			])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
				return openBlock(), createElementBlock("tbody", { key: hrt.acc_id }, [isSupportedLevel(hrt.level) ? (openBlock(), createElementBlock("tr", {
					key: 0,
					class: normalizeClass({ "header-total-row": isHeadingRow(hrt) })
				}, [
					createBaseVNode("td", { style: normalizeStyle(codeCellStyle(hrt)) }, toDisplayString(hrt.jenis !== "Total" ? hrt.acc_id : ""), 5),
					createBaseVNode("td", {
						class: normalizeClass([levelClass(hrt.level), { "fw-bold": isHeadingRow(hrt) }]),
						style: normalizeStyle(nameCellStyle(hrt.level, hrt))
					}, toDisplayString(hrt.name), 7),
					createBaseVNode("td", {
						class: normalizeClass(["text-end", { "fw-bold total-line": hrt.jenis === "Total" }]),
						style: normalizeStyle(amountCellStyle(hrt))
					}, [hrt.jenis === "Detail" || hrt.jenis === "Total" ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)) : createCommentVNode("", true)], 6)
				], 2)) : createCommentVNode("", true)]);
			}), 128))])])])])])])])])]), createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [
				createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary btn-print action-print w-100",
					onClick: printPage
				}, "Cetak")]),
				createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [_cache[6] || (_cache[6] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_24, [_cache[7] || (_cache[7] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])])])]),
				createBaseVNode("div", _hoisted_25, [createBaseVNode("button", {
					type: "button",
					onClick: cari,
					class: "btn btn-success btn-download w-100",
					disabled: load.value
				}, [load.value ? (openBlock(), createElementBlock("span", _hoisted_27)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(load.value ? "Memuat..." : "Cari"), 1)], 8, _hoisted_26)])
			])])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-138b7d92"]]);
//#endregion
export { neracaKeuangan_default as default };
