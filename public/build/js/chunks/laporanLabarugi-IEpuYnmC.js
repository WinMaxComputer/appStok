import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { At as normalizeStyle, B as openBlock, E as createVNode, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, S as createElementBlock, T as createTextVNode, W as renderList, b as createBlock, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { c as _plugin_vue_export_helper_default, s as useStore } from "../../assets/main-CDz2Rhtt.js";
/* empty css                      */
/* empty css                         */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C6SOtT-k.js";
/* empty css                     */
//#region resources/js/src/views/laporan/laporanLabarugi.vue?vue&type=style&index=0&scoped=f96912bf&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/laporan/laporanLabarugi.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "print-only-lr" };
var _hoisted_3 = { class: "print-lr-header" };
var _hoisted_4 = { class: "print-lr-period" };
var _hoisted_5 = { class: "print-lr-body" };
var _hoisted_6 = { class: "print-lr-section" };
var _hoisted_7 = { class: "print-lr-columns" };
var _hoisted_8 = { class: "print-lr-name" };
var _hoisted_9 = {
	key: 0,
	class: "print-lr-code"
};
var _hoisted_10 = { class: "print-lr-amount" };
var _hoisted_11 = { class: "print-lr-section print-lr-summary" };
var _hoisted_12 = { class: "print-lr-summary-row" };
var _hoisted_13 = { class: "print-lr-summary-row" };
var _hoisted_14 = { class: "print-lr-summary-row" };
var _hoisted_15 = { class: "print-lr-summary-row print-lr-summary-final" };
var _hoisted_16 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_17 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_18 = { class: "doc-container" };
var _hoisted_19 = { class: "row" };
var _hoisted_20 = { class: "col-xl-9" };
var _hoisted_21 = { class: "invoice-container screen-lr-report" };
var _hoisted_22 = { class: "invoice-inbox" };
var _hoisted_23 = {
	id: "ct",
	class: ""
};
var _hoisted_24 = { class: "invoice-00001" };
var _hoisted_25 = { class: "content-section" };
var _hoisted_26 = { class: "inv--detail-section inv--customer-detail-section" };
var _hoisted_27 = { class: "laba-report-shell" };
var _hoisted_28 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_29 = { class: "laba-period-banner" };
var _hoisted_30 = { class: "laba-period-range" };
var _hoisted_31 = { class: "laba-breakdown-box laba-detail-box" };
var _hoisted_32 = { class: "laba-list-wrap" };
var _hoisted_33 = { class: "laba-accounts-wrap" };
var _hoisted_34 = { key: 0 };
var _hoisted_35 = { key: 1 };
var _hoisted_36 = { class: "laba-breakdown-row total laba-final-row mt-2" };
var _hoisted_37 = { class: "laba-summary-name" };
var _hoisted_38 = { class: "laba-summary-amount" };
var _hoisted_39 = { class: "col-xl-3" };
var _hoisted_40 = { class: "invoice-actions-btn" };
var _hoisted_41 = { class: "invoice-action-btn" };
var _hoisted_42 = { class: "row" };
var _hoisted_43 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_44 = { class: "row mb-4" };
var _hoisted_45 = { class: "col-sm" };
var _hoisted_46 = { class: "col-sm" };
var _hoisted_47 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_48 = ["disabled"];
var _hoisted_49 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_50 = { class: "col-xl-12 col-md-6 col-sm-12" };
var _hoisted_51 = { class: "laba-breakdown-box mt-2" };
var _hoisted_52 = { class: "laba-breakdown-row" };
var _hoisted_53 = { class: "laba-breakdown-row" };
var _hoisted_54 = { class: "laba-breakdown-row" };
var _hoisted_55 = { class: "laba-breakdown-row total" };
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
		const summaryBreakdown = computed(() => {
			const detailRows = (Array.isArray(biayalist.value) ? biayalist.value : []).filter((row) => row?.jenis === "Detail");
			const sumByPrefix = (prefix) => {
				return detailRows.filter((row) => String(row?.acc_id || "").startsWith(prefix)).reduce((total, row) => total + Number(row?.amount || 0), 0);
			};
			const pendapatan = -1 * sumByPrefix("4");
			const hpp = sumByPrefix("5");
			const bebanOperasional = sumByPrefix("6");
			const pendapatanLain = -1 * sumByPrefix("7");
			const bebanLain = sumByPrefix("8");
			return {
				pendapatan,
				hpp,
				bebanOperasional,
				labaBersih: pendapatan - hpp - bebanOperasional + pendapatanLain - bebanLain
			};
		});
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
		const visibleRows = computed(() => {
			return (Array.isArray(biayalist.value) ? biayalist.value : []).filter((row) => shouldRenderRow(row));
		});
		const rowUnderlineStyle = () => ({});
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
			const prefix = String(accId || "").substring(0, 1);
			if (prefix === "4" || prefix === "7") return Number(-1 * numericAmount).toLocaleString();
			return Number(numericAmount).toLocaleString();
		};
		const amountCellStyle = (row) => {
			return {
				minWidth: "160px",
				paddingLeft: "24px",
				textAlign: "right",
				...rowUnderlineStyle(row)
			};
		};
		const loadReport = async () => {
			load.value = true;
			try {
				const payload = {
					...sorting.value,
					group: "2,4,5,6",
					mode: "period"
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
				const nameClass = isHeadTotalRow(row) ? "name total" : "name";
				return `
                <div class="${isHeadTotalRow(row) ? "row total-row" : "row"}">
                    <div class="name-wrap" style="padding-left:${indent}px;">${code}<span class="${nameClass}">${escapeHtml(row.name)}</span></div>
                    <div class="amount">${amount}</div>
                </div>
            `;
			}).join("");
			const summaryRows = [
				["Pendapatan", Number(summaryBreakdown.value.pendapatan).toLocaleString()],
				["HPP", Number(summaryBreakdown.value.hpp).toLocaleString()],
				["Beban Operasional", Number(summaryBreakdown.value.bebanOperasional).toLocaleString()],
				[
					labarugi.value.name,
					Number(labarugi.value.amount).toLocaleString(),
					true
				]
			].map(([label, amount, isFinal]) => `
            <div class="summary-row${isFinal ? " final" : ""}">
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(amount)}</strong>
            </div>
        `).join("");
			const printMarkup = `
            <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Laporan Laba Rugi</title>
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
                        .page {
                            width: 100%;
                            padding: 0;
                        }
                        .header {
                            margin-bottom: 6px;
                        }
                        .title {
                            font-size: 14px;
                            font-weight: 700;
                            margin-bottom: 2px;
                        }
                        .period {
                            font-size: 10px;
                        }
                        .content {
                            display: grid;
                            gap: 8px;
                            align-items: start;
                        }
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
                        .detail-columns {
                            display: grid;
                            gap: 2px;
                        }
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
                        .name {
                            min-width: 0;
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
                        .summary-row {
                            display: flex;
                            justify-content: space-between;
                            gap: 8px;
                            padding: 2px 0;
                        }
                        .summary-row.final {
                            margin-top: 4px;
                            padding-top: 4px;
                            font-weight: 700;
                            background: rgba(238,245,255,0.8);
                        }
                    </style>
                </head>
                <body>
                    <div class="page">
                        <div class="header">
                            <div class="title">Laporan Laba Rugi</div>
                            <div class="period">Periode ${escapeHtml(sorting.value.startDate)} s/d ${escapeHtml(sorting.value.endDate)}</div>
                        </div>
                        <div class="content">
                            <div class="panel">
                                <div class="panel-title">Detail Akun</div>
                                <div class="detail-columns">${rows}</div>
                            </div>
                            <div class="panel">
                                <div class="panel-title">Ringkasan Periode</div>
                                ${summaryRows}
                            </div>
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
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "print-lr-title" }, "Laporan Laba Rugi", -1)), createBaseVNode("div", _hoisted_4, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1)]), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "print-lr-section-title" }, "Detail Akun", -1)), createBaseVNode("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (hrt) => {
					return openBlock(), createElementBlock("div", {
						key: "print-" + hrt.acc_id,
						class: normalizeClass([
							"print-lr-row",
							levelClass(hrt.level),
							{ "print-total-row": isHeadTotalRow(hrt) }
						])
					}, [createBaseVNode("div", _hoisted_8, [hrt.jenis !== "Total" ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(hrt.acc_id), 1)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(hrt.name), 1)]), createBaseVNode("div", _hoisted_10, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)], 2);
				}), 128))])]), createBaseVNode("div", _hoisted_11, [
					_cache[7] || (_cache[7] = createBaseVNode("div", { class: "print-lr-section-title" }, "Ringkasan Periode", -1)),
					createBaseVNode("div", _hoisted_12, [_cache[4] || (_cache[4] = createBaseVNode("span", null, "Pendapatan", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.pendapatan).toLocaleString()), 1)]),
					createBaseVNode("div", _hoisted_13, [_cache[5] || (_cache[5] = createBaseVNode("span", null, "HPP", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.hpp).toLocaleString()), 1)]),
					createBaseVNode("div", _hoisted_14, [_cache[6] || (_cache[6] = createBaseVNode("span", null, "Beban Operasional", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.bebanOperasional).toLocaleString()), 1)]),
					createBaseVNode("div", _hoisted_15, [createBaseVNode("span", null, toDisplayString(labarugi.value["name"]), 1), createBaseVNode("strong", null, toDisplayString(Number(labarugi.value["amount"]).toLocaleString()), 1)])
				])])]),
				(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[8] || (_cache[8] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
					class: "breadcrumb-one",
					"aria-label": "breadcrumb"
				}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
					class: "breadcrumb-item active",
					"aria-current": "page"
				}, [createBaseVNode("span", null, "Laba Rugi")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [createBaseVNode("div", _hoisted_27, [
					load.value ? (openBlock(), createElementBlock("div", _hoisted_28, _cache[9] || (_cache[9] = [
						createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1)
					]))) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_29, [_cache[10] || (_cache[10] = createBaseVNode("div", { class: "laba-period-label" }, "Laporan Laba Rugi", -1)), createBaseVNode("div", _hoisted_30, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1)]),
					createBaseVNode("div", _hoisted_31, [_cache[11] || (_cache[11] = createBaseVNode("div", { class: "laba-breakdown-title" }, "Detail Akun", -1)), createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (hrt) => {
						return openBlock(), createElementBlock("div", {
							key: hrt.acc_id,
							class: normalizeClass([
								"laba-list-row",
								levelClass(hrt.level),
								{
									"head-total-row": isHeadTotalRow(hrt),
									"detail-soft-row": !isHeadTotalRow(hrt)
								}
							])
						}, [createBaseVNode("div", {
							class: "laba-list-main",
							style: normalizeStyle(nameCellStyle(hrt))
						}, [hrt.jenis !== "Total" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: "laba-list-code",
							style: normalizeStyle(codeCellStyle(hrt))
						}, toDisplayString(hrt.acc_id), 5)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(["laba-list-name", [{
							"fw-bold": isHeadingRow(hrt),
							"is-total-row": hrt.jenis === "Total"
						}]]) }, toDisplayString(hrt.name), 3)], 4), createBaseVNode("div", {
							class: "laba-list-amount text-end",
							style: normalizeStyle(amountCellStyle(hrt))
						}, [hrt.jenis === "Total" ? (openBlock(), createElementBlock("strong", _hoisted_34, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)) : hrt.jenis === "Detail" ? (openBlock(), createElementBlock("span", _hoisted_35, toDisplayString(formatAmount(hrt.amount, hrt.acc_id)), 1)) : createCommentVNode("", true)], 4)], 2);
					}), 128))]), createBaseVNode("div", _hoisted_36, [createBaseVNode("span", _hoisted_37, toDisplayString(labarugi.value["name"]), 1), createBaseVNode("strong", _hoisted_38, toDisplayString(Number(labarugi.value["amount"]).toLocaleString()), 1)])])])
				])])])])])])])]), createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("div", _hoisted_42, [
					createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary btn-print action-print w-100",
						onClick: printPage
					}, "Cetak")]),
					createBaseVNode("div", _hoisted_43, [createBaseVNode("div", _hoisted_44, [createBaseVNode("div", _hoisted_45, [_cache[12] || (_cache[12] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.startDate,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_46, [_cache[13] || (_cache[13] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.endDate,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])])])]),
					createBaseVNode("div", _hoisted_47, [createBaseVNode("button", {
						type: "button",
						onClick: cari,
						class: "btn btn-success btn-download w-100",
						disabled: load.value
					}, [load.value ? (openBlock(), createElementBlock("span", _hoisted_49)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(load.value ? "Memuat..." : "Cari"), 1)], 8, _hoisted_48)]),
					createBaseVNode("div", _hoisted_50, [createBaseVNode("div", _hoisted_51, [
						_cache[18] || (_cache[18] = createBaseVNode("div", { class: "laba-breakdown-title" }, "Ringkasan Periode", -1)),
						createBaseVNode("div", _hoisted_52, [_cache[14] || (_cache[14] = createBaseVNode("span", null, "Pendapatan", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.pendapatan).toLocaleString()), 1)]),
						createBaseVNode("div", _hoisted_53, [_cache[15] || (_cache[15] = createBaseVNode("span", null, "HPP", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.hpp).toLocaleString()), 1)]),
						createBaseVNode("div", _hoisted_54, [_cache[16] || (_cache[16] = createBaseVNode("span", null, "Beban Operasional", -1)), createBaseVNode("strong", null, toDisplayString(Number(summaryBreakdown.value.bebanOperasional).toLocaleString()), 1)]),
						createBaseVNode("div", _hoisted_55, [_cache[17] || (_cache[17] = createBaseVNode("span", null, "Laba Bersih", -1)), createBaseVNode("strong", { class: normalizeClass({ "is-loss": Number(summaryBreakdown.value.labaBersih) < 0 }) }, toDisplayString(Number(summaryBreakdown.value.labaBersih).toLocaleString()), 3)])
					])])
				])])])])])])])])
			]);
		};
	}
}, [["__scopeId", "data-v-f96912bf"]]);
//#endregion
export { laporanLabarugi_default as default };
