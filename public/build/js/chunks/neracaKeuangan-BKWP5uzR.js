import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, a as init_runtime_dom_esm_bundler, b as createBlock, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, s as vModelCheckbox, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { c as _plugin_vue_export_helper_default, s as useStore } from "../../assets/main-Bnx5Knk7.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-nXBP1uh4.js";
/* empty css                     */
//#region resources/js/src/views/laporan/neracaKeuangan.vue?vue&type=style&index=0&scoped=e0930ade&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/laporan/neracaKeuangan.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "print-only-neraca" };
var _hoisted_3 = { class: "print-neraca-header" };
var _hoisted_4 = { class: "print-neraca-period" };
var _hoisted_5 = {
	key: 0,
	class: "print-neraca-mode"
};
var _hoisted_6 = { class: "print-neraca-body" };
var _hoisted_7 = { class: "print-neraca-section" };
var _hoisted_8 = { class: "print-neraca-columns" };
var _hoisted_9 = { class: "print-neraca-name" };
var _hoisted_10 = {
	key: 0,
	class: "print-neraca-code"
};
var _hoisted_11 = { class: "print-neraca-amount" };
var _hoisted_12 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_13 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_14 = { class: "doc-container" };
var _hoisted_15 = { class: "row" };
var _hoisted_16 = { class: "col-xl-9" };
var _hoisted_17 = { class: "invoice-container screen-neraca-report" };
var _hoisted_18 = { class: "invoice-inbox" };
var _hoisted_19 = { id: "ct" };
var _hoisted_20 = { class: "invoice-00001" };
var _hoisted_21 = { class: "content-section" };
var _hoisted_22 = { class: "inv--detail-section inv--customer-detail-section" };
var _hoisted_23 = { class: "neraca-report-shell" };
var _hoisted_24 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_25 = { class: "neraca-period-banner" };
var _hoisted_26 = { class: "neraca-period-range" };
var _hoisted_27 = { class: "neraca-breakdown-box neraca-detail-box" };
var _hoisted_28 = { class: "neraca-list-wrap" };
var _hoisted_29 = { class: "neraca-accounts-wrap" };
var _hoisted_30 = { class: "neraca-list-main" };
var _hoisted_31 = {
	key: 0,
	class: "neraca-list-code"
};
var _hoisted_32 = { class: "neraca-list-amount text-end" };
var _hoisted_33 = { key: 0 };
var _hoisted_34 = { class: "col-xl-3" };
var _hoisted_35 = { class: "invoice-actions-btn" };
var _hoisted_36 = { class: "invoice-action-btn" };
var _hoisted_37 = { class: "row" };
var _hoisted_38 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_39 = { class: "form-check form-switch text-start mb-2 mt-1" };
var _hoisted_40 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_41 = { class: "row mb-4" };
var _hoisted_42 = { class: "col-sm" };
var _hoisted_43 = { class: "col-sm" };
var _hoisted_44 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_45 = ["disabled"];
var _hoisted_46 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_47 = { class: "col-xl-12 col-md-6 col-sm-12" };
var _hoisted_48 = { class: "neraca-breakdown-box mt-2" };
var _hoisted_49 = { class: "neraca-breakdown-row" };
var _hoisted_50 = { class: "neraca-breakdown-row" };
var _hoisted_51 = { class: "neraca-breakdown-row total" };
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
		const showRawSign = ref(false);
		const hartalist = ref([]);
		const isSupportedLevel = (level) => [
			"1",
			"2",
			"3",
			"4"
		].includes(String(level));
		const isHeadingRow = (row) => row?.jenis === "Total" || String(row?.jenis || "").startsWith("H");
		const levelClass = (level) => `print-level-${String(level || "1")}`;
		const visibleRows = computed(() => {
			return (Array.isArray(hartalist.value) ? hartalist.value : []).filter((row) => isSupportedLevel(row?.level));
		});
		const isNegativeAccount = (accId) => [
			"2",
			"3",
			"4",
			"7"
		].includes(String(accId || "").substring(0, 1));
		const formatAmount = (amount, accId) => {
			const numericAmount = Number(amount || 0);
			if (showRawSign.value) return Number(numericAmount).toLocaleString();
			const finalAmount = isNegativeAccount(accId) ? -1 * numericAmount : numericAmount;
			return Number(finalAmount).toLocaleString();
		};
		const loadData = async () => {
			load.value = true;
			try {
				const payload = {
					...sorting.value,
					group: "1,2,3",
					mode: "position"
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
		const escapeHtml = (value) => {
			return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
		};
		const printPage = () => {
			const rows = visibleRows.value.map((row) => {
				const indent = {
					"1": 0,
					"2": 12,
					"3": 24,
					"4": 36
				}[String(row?.level || "1")] || 0;
				const amount = escapeHtml(formatAmount(row.amount, row.acc_id));
				const code = row.jenis !== "Total" ? `<span class="code">${escapeHtml(row.acc_id)}</span>` : "";
				return `
            <div class="${isHeadingRow(row) ? "row total-row" : "row"}">
                <div class="name-wrap" style="padding-left:${indent}px;">${code}<span class="name">${escapeHtml(row.name)}</span></div>
                <div class="amount">${amount}</div>
            </div>
        `;
			}).join("");
			const printMarkup = `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Neraca Keuangan</title>
                <style>
                    @page { size: A4 portrait; margin: 6mm; }
                    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        color: #1d2738;
                        font-size: 10px;
                        line-height: 1.2;
                        background: #fff;
                    }
                    .page { width: 100%; }
                    .header { margin-bottom: 6px; }
                    .title { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
                    .period { font-size: 10px; }
                    .mode { font-size: 9px; margin-top: 2px; }
                    .panel {
                        background: #f8fbff;
                        padding: 6px 8px;
                    }
                    .panel-title {
                        font-size: 10px;
                        font-weight: 700;
                        margin-bottom: 4px;
                        color: #32425e;
                    }
                    .rows { display: grid; gap: 2px; }
                    .row {
                        break-inside: avoid;
                        page-break-inside: avoid;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 6px;
                        padding: 1px 0;
                    }
                    .name-wrap {
                        display: flex;
                        gap: 5px;
                        min-width: 0;
                        flex: 1 1 auto;
                    }
                    .code {
                        white-space: nowrap;
                        font-weight: 700;
                        color: #5a6980;
                    }
                    .amount {
                        white-space: nowrap;
                        font-weight: 700;
                        min-width: 72px;
                        text-align: right;
                    }
                    .total-row {
                        font-weight: 700;
                        background: rgba(238,245,255,0.8);
                    }
                </style>
            </head>
            <body>
                <div class="page">
                    <div class="header">
                        <div class="title">Neraca Keuangan</div>
                        <div class="period">Periode ${escapeHtml(sorting.value.startDate)} s/d ${escapeHtml(sorting.value.endDate)}</div>
                        <div class="mode">${showRawSign.value ? "Mode Audit: Nilai Asli GL" : "Mode Tampilan: Normal"}</div>
                    </div>
                    <div class="panel">
                        <div class="panel-title">Detail Akun</div>
                        <div class="rows">${rows}</div>
                    </div>
                </div>
            </body>
        </html>
    `;
			const printWindow = window.open("", "_blank", "width=900,height=1200");
			if (!printWindow) return;
			printWindow.document.open();
			printWindow.document.write(printMarkup);
			printWindow.document.close();
			printWindow.focus();
			printWindow.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [
					_cache[3] || (_cache[3] = createBaseVNode("div", { class: "print-neraca-title" }, "Neraca Keuangan", -1)),
					createBaseVNode("div", _hoisted_4, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1),
					showRawSign.value ? (openBlock(), createElementBlock("div", _hoisted_5, "Mode Audit: Nilai Asli GL")) : createCommentVNode("", true)
				]), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[4] || (_cache[4] = createBaseVNode("div", { class: "print-neraca-section-title" }, "Detail Akun", -1)), createBaseVNode("div", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (row) => {
					return openBlock(), createElementBlock("div", {
						key: "print-" + row.acc_id,
						class: normalizeClass([
							"print-neraca-row",
							levelClass(row.level),
							{ "print-total-row": isHeadingRow(row) }
						])
					}, [createBaseVNode("div", _hoisted_9, [row.jenis !== "Total" ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(row.acc_id), 1)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(row.name), 1)]), createBaseVNode("div", _hoisted_11, toDisplayString(formatAmount(row.amount, row.acc_id)), 1)], 2);
				}), 128))])])])]),
				(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[5] || (_cache[5] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
					class: "breadcrumb-one",
					"aria-label": "breadcrumb"
				}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
					class: "breadcrumb-item active",
					"aria-current": "page"
				}, [createBaseVNode("span", null, "Neraca Keuangan")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [
					load.value ? (openBlock(), createElementBlock("div", _hoisted_24, _cache[6] || (_cache[6] = [
						createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1)
					]))) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_25, [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "neraca-period-label" }, "Neraca Keuangan", -1)), createBaseVNode("div", _hoisted_26, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1)]),
					createBaseVNode("div", _hoisted_27, [_cache[8] || (_cache[8] = createBaseVNode("div", { class: "neraca-breakdown-title" }, "Detail Akun", -1)), createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (row) => {
						return openBlock(), createElementBlock("div", {
							key: row.acc_id,
							class: normalizeClass([
								"neraca-list-row",
								levelClass(row.level),
								{
									"head-total-row": isHeadingRow(row),
									"detail-soft-row": !isHeadingRow(row)
								}
							])
						}, [createBaseVNode("div", _hoisted_30, [row.jenis !== "Total" ? (openBlock(), createElementBlock("div", _hoisted_31, toDisplayString(row.acc_id), 1)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(["neraca-list-name", { "fw-bold": isHeadingRow(row) }]) }, toDisplayString(row.name), 3)]), createBaseVNode("div", _hoisted_32, [row.jenis === "Detail" || row.jenis === "Total" ? (openBlock(), createElementBlock("span", _hoisted_33, toDisplayString(formatAmount(row.amount, row.acc_id)), 1)) : createCommentVNode("", true)])], 2);
					}), 128))])])])
				])])])])])])])]), createBaseVNode("div", _hoisted_34, [createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [
					createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary btn-print action-print w-100",
						onClick: printPage
					}, "Cetak")]),
					createBaseVNode("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, [withDirectives(createBaseVNode("input", {
						class: "form-check-input",
						type: "checkbox",
						id: "rawSignToggle",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showRawSign.value = $event)
					}, null, 512), [[vModelCheckbox, showRawSign.value]]), _cache[9] || (_cache[9] = createBaseVNode("label", {
						class: "form-check-label",
						for: "rawSignToggle"
					}, "Mode Audit (Nilai Asli GL)", -1))])]),
					createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("div", _hoisted_42, [_cache[10] || (_cache[10] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.startDate,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.startDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_43, [_cache[11] || (_cache[11] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.endDate,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sorting.value.endDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])])])]),
					createBaseVNode("div", _hoisted_44, [createBaseVNode("button", {
						type: "button",
						onClick: cari,
						class: "btn btn-success btn-download w-100",
						disabled: load.value
					}, [load.value ? (openBlock(), createElementBlock("span", _hoisted_46)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(load.value ? "Memuat..." : "Cari"), 1)], 8, _hoisted_45)]),
					createBaseVNode("div", _hoisted_47, [createBaseVNode("div", _hoisted_48, [
						_cache[15] || (_cache[15] = createBaseVNode("div", { class: "neraca-breakdown-title" }, "Ringkasan Tampilan", -1)),
						createBaseVNode("div", _hoisted_49, [_cache[12] || (_cache[12] = createBaseVNode("span", null, "Jumlah Baris", -1)), createBaseVNode("strong", null, toDisplayString(visibleRows.value.length), 1)]),
						createBaseVNode("div", _hoisted_50, [_cache[13] || (_cache[13] = createBaseVNode("span", null, "Mode", -1)), createBaseVNode("strong", null, toDisplayString(showRawSign.value ? "Audit" : "Normal"), 1)]),
						createBaseVNode("div", _hoisted_51, [_cache[14] || (_cache[14] = createBaseVNode("span", null, "Rentang", -1)), createBaseVNode("strong", null, toDisplayString(sorting.value.startDate) + " - " + toDisplayString(sorting.value.endDate), 1)])
					])])
				])])])])])])])])
			]);
		};
	}
}, [["__scopeId", "data-v-e0930ade"]]);
//#endregion
export { neracaKeuangan_default as default };
