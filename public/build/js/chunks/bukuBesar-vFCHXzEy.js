import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, S as createElementBlock, T as createTextVNode, Z as withCtx, b as createBlock, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-CLz8aXVs.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-9rjZsozA.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-B6o3q_pU.js";
//#region resources/js/src/views/master/bukuBesar.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "row" };
var _hoisted_8 = { class: "col-md-7" };
var _hoisted_9 = { class: "input-group mb-4" };
var _hoisted_10 = ["disabled"];
var _hoisted_11 = {
	key: 0,
	class: "px-3 pb-2"
};
var _hoisted_12 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_13 = { class: "table-primary" };
var _hoisted_14 = { class: "text-end fw-bold" };
var _hoisted_15 = {
	key: 2,
	class: "px-3 pb-3"
};
var _hoisted_16 = { class: "table-responsive" };
var _hoisted_17 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_18 = { class: "text-end" };
var _hoisted_19 = { class: "text-end" };
var _hoisted_20 = { class: "text-end" };
var _hoisted_21 = { class: "text-end fw-bold" };
var _sfc_main = {
	__name: "bukuBesar",
	setup(__props) {
		useMeta({ title: "Buku Kas" });
		const store = useStore();
		const isLoading = ref(false);
		const bukuBesarMeta = computed(() => store.getters.SBukuBesarMeta || {
			opening_balance: 0,
			closing_balance: 0
		});
		const columns = ref([
			"notrans",
			"acc_id",
			"name",
			"memo",
			"tgl",
			"debet",
			"kredit",
			"mutasi",
			"saldo"
		]);
		const items = ref([]);
		const table_option = ref({
			perPage: 100,
			perPageValues: [100, 200],
			skin: "table table-hover",
			columnsClasses: { action: "actions text-center" },
			pagination: {
				nav: "scroll",
				chunk: 5
			},
			texts: {
				count: "Showing {from} to {to} of {count}",
				filter: "",
				filterPlaceholder: "Search...",
				limit: "Results:"
			},
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		onMounted(() => {
			bind_data();
		});
		const toNumber = (value) => Number(value || 0);
		const normalizeRows = (rows) => {
			const list = Array.isArray(rows) ? [...rows] : [];
			if (!list.length) return [];
			list.sort((a, b) => {
				const t1 = new Date(a.tgl).getTime();
				const t2 = new Date(b.tgl).getTime();
				if (t1 === t2) return String(a.notrans || "").localeCompare(String(b.notrans || ""));
				return t1 - t2;
			});
			const first = list[0];
			const firstMovement = toNumber(first.debet) - toNumber(first.kredit);
			let running = toNumber(first.saldo) ? toNumber(first.saldo) - firstMovement : 0;
			return list.map((row) => {
				const debet = toNumber(row.debet);
				const kredit = toNumber(row.kredit);
				const mutasi = debet - kredit;
				running += mutasi;
				return {
					...row,
					debet,
					kredit,
					mutasi,
					saldo: running
				};
			});
		};
		const bind_data = async () => {
			isLoading.value = true;
			try {
				await store.dispatch("GetBukuBesar", sorting.value);
				const rows = store.getters.SBukuBesar || [];
				items.value = normalizeRows(rows);
			} finally {
				isLoading.value = false;
			}
		};
		const showSummary = computed(() => {
			return items.value.length || toNumber(bukuBesarMeta.value.opening_balance) !== 0 || toNumber(bukuBesarMeta.value.closing_balance) !== 0;
		});
		const summary = computed(() => {
			let totalDebet = 0;
			let totalKredit = 0;
			items.value.forEach((row) => {
				totalDebet += toNumber(row.debet);
				totalKredit += toNumber(row.kredit);
			});
			const closingBalance = items.value.length ? toNumber(items.value[items.value.length - 1].saldo) : toNumber(bukuBesarMeta.value.closing_balance);
			return {
				openingBalance: toNumber(bukuBesarMeta.value.opening_balance),
				totalDebet,
				totalKredit,
				closingBalance
			};
		});
		const export_table = (type) => {
			let cols = columns.value.filter((d) => d != "profile" && d != "action");
			let records = items.value;
			if (type == "csv") {
				let coldelimiter = ",";
				let linedelimiter = "\n";
				let result = cols.map((d) => {
					return capitalize(d);
				}).join(coldelimiter);
				result += linedelimiter;
				records.map((item) => {
					cols.map((d, index) => {
						if (index > 0) result += coldelimiter;
						let val = item[d] ? item[d] : "";
						result += val;
					});
					result += linedelimiter;
				});
				if (result == null) return;
				if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
					var data = "data:application/csv;charset=utf-8," + encodeURIComponent(result);
					var link = document.createElement("a");
					link.setAttribute("href", data);
					link.setAttribute("download", "Buku Kas.csv");
					link.click();
				} else {
					var blob = new Blob([result]);
					if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(blob, "Buku Kas.csv");
				}
			} else if (type == "print") {
				var rowhtml = "<p>Buku Kas</p>";
				rowhtml += "<table style=\"width: 100%; \" cellpadding=\"0\" cellcpacing=\"0\"><thead><tr style=\"color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; \"> ";
				cols.map((d) => {
					rowhtml += "<th>" + capitalize(d) + "</th>";
				});
				rowhtml += "</tr></thead>";
				rowhtml += "<tbody>";
				rowhtml += "<tr>";
				rowhtml += "<td>-</td>";
				rowhtml += "<td>-</td>";
				rowhtml += "<td>-</td>";
				rowhtml += "<td><b>Saldo Awal</b></td>";
				rowhtml += "<td>-</td>";
				rowhtml += "<td class=\"num\">-</td>";
				rowhtml += "<td class=\"num\">-</td>";
				rowhtml += "<td class=\"num\">-</td>";
				rowhtml += "<td class=\"num\"><b>" + Number(summary.value.openingBalance).toLocaleString() + "</b></td>";
				rowhtml += "</tr>";
				records.map((item) => {
					rowhtml += "<tr>";
					rowhtml += "<td>" + (item.notrans || "") + "</td>";
					rowhtml += "<td>" + (item.acc_id || "") + "</td>";
					rowhtml += "<td>" + (item.name || "") + "</td>";
					rowhtml += "<td>" + (item.memo || "") + "</td>";
					rowhtml += "<td>" + hooks(item.tgl).format("DD-MM-YYYY") + "</td>";
					rowhtml += "<td class=\"num\">" + Number(item.debet || 0).toLocaleString() + "</td>";
					rowhtml += "<td class=\"num\">" + Number(item.kredit || 0).toLocaleString() + "</td>";
					rowhtml += "<td class=\"num\">" + Number(item.mutasi || 0).toLocaleString() + "</td>";
					rowhtml += "<td class=\"num\">" + Number(item.saldo || 0).toLocaleString() + "</td>";
					rowhtml += "</tr>";
				});
				let totalDebet = 0;
				let totalKredit = 0;
				let totalMutasi = 0;
				records.forEach((element) => {
					totalDebet += toNumber(element.debet);
					totalKredit += toNumber(element.kredit);
					totalMutasi += toNumber(element.mutasi);
				});
				const saldoAkhir = records.length ? toNumber(records[records.length - 1].saldo) : 0;
				rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;border:1px solid #ddd;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }.num{text-align:right;}</style>";
				rowhtml += "</tbody>";
				rowhtml += "<tfoot><tr>";
				rowhtml += "<th colspan=\"5\" style=\"text-align:right;\">Total</th><th class=\"num\">" + Number(totalDebet).toLocaleString() + "</th><th class=\"num\">" + Number(totalKredit).toLocaleString() + "</th><th class=\"num\">" + Number(totalMutasi).toLocaleString() + "</th><th class=\"num\">" + Number(saldoAkhir).toLocaleString() + "</th></tr>";
				rowhtml += "</tfoot></table>";
				var winPrint = window.open("", "", "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");
				winPrint.document.write("<title>Print</title>" + rowhtml);
				winPrint.document.close();
				winPrint.focus();
				winPrint.print();
			} else if (type == "pdf") {
				cols = cols.map((d) => {
					return {
						header: capitalize(d),
						dataKey: d
					};
				});
				const doc = new E("l", "pt", cols.length > 10 ? "a3" : "a4");
				doc.autoTable({
					headStyles: {
						fillColor: "#eff5ff",
						textColor: "#515365"
					},
					columns: cols,
					body: records,
					styles: { overflow: "linebreak" },
					pageBreak: "auto",
					margin: { top: 45 },
					didDrawPage: () => {
						doc.text("Export Table", cols.length > 10 ? 535 : 365, 30);
					}
				});
				doc.save("Buku Kas.pdf");
			}
		};
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[3] || (_cache[3] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Buku Kas")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[9] || (_cache[9] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "Kas")], -1)),
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [
					createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.startDate,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"]),
					createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.endDate,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"]),
					createBaseVNode("button", {
						type: "button",
						class: "btn m-1 btn-primary",
						onClick: bind_data,
						disabled: isLoading.value
					}, toDisplayString(isLoading.value ? "Memuat..." : "Cari"), 9, _hoisted_10),
					createBaseVNode("button", {
						type: "button",
						class: "btn m-1 btn-primary",
						onClick: _cache[2] || (_cache[2] = ($event) => export_table("print"))
					}, "Print")
				])])])]),
				showSummary.value ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("table", _hoisted_12, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_13, [_cache[4] || (_cache[4] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal", -1)), createBaseVNode("td", _hoisted_14, toDisplayString(Number(summary.value.openingBalance).toLocaleString()), 1)])])])])) : createCommentVNode("", true),
				items.value.length ? (openBlock(), createBlock(_component_v_client_table, {
					key: 1,
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					tgl: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tgl).format("D-M-YYYY")), 1)]),
					debet: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.debet || 0).toLocaleString()), 1)]),
					kredit: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.kredit || 0).toLocaleString()), 1)]),
					mutasi: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.mutasi || 0).toLocaleString()), 1)]),
					saldo: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.saldo || 0).toLocaleString()), 1)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])) : createCommentVNode("", true),
				showSummary.value ? (openBlock(), createElementBlock("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [createBaseVNode("table", _hoisted_17, [createBaseVNode("tbody", null, [
					createBaseVNode("tr", null, [_cache[5] || (_cache[5] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal", -1)), createBaseVNode("td", _hoisted_18, toDisplayString(Number(summary.value.openingBalance).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[6] || (_cache[6] = createBaseVNode("th", null, "Total Debet", -1)), createBaseVNode("td", _hoisted_19, toDisplayString(Number(summary.value.totalDebet).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[7] || (_cache[7] = createBaseVNode("th", null, "Total Kredit", -1)), createBaseVNode("td", _hoisted_20, toDisplayString(Number(summary.value.totalKredit).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[8] || (_cache[8] = createBaseVNode("th", null, "Saldo Akhir Periode", -1)), createBaseVNode("td", _hoisted_21, toDisplayString(Number(summary.value.closingBalance).toLocaleString()), 1)])
				])])])])) : createCommentVNode("", true)
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
