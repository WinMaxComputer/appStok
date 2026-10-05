import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-BInbW9ud.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-CA4PXbYF.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-CxUCDc-U.js";
//#region resources/js/src/views/master/bukuBesar.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
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
var _hoisted_10 = ["value"];
var _hoisted_11 = ["disabled"];
var _hoisted_12 = {
	key: 0,
	class: "px-3 pb-2"
};
var _hoisted_13 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_14 = { class: "table-primary" };
var _hoisted_15 = { class: "text-end fw-bold" };
var _hoisted_16 = {
	key: 2,
	class: "px-3 pb-3"
};
var _hoisted_17 = { class: "table-responsive" };
var _hoisted_18 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_19 = { class: "text-end" };
var _hoisted_20 = { class: "text-end" };
var _hoisted_21 = { class: "text-end" };
var _hoisted_22 = { class: "text-end fw-bold" };
var _hoisted_23 = {
	class: "modal fade",
	id: "modalTutupPeriode",
	tabindex: "-1",
	"aria-hidden": "true"
};
var _hoisted_24 = { class: "modal-dialog modal-lg modal-dialog-centered" };
var _hoisted_25 = { class: "modal-content" };
var _hoisted_26 = { class: "modal-body" };
var _hoisted_27 = { class: "row mb-3" };
var _hoisted_28 = { class: "col-md-4" };
var _hoisted_29 = ["value"];
var _hoisted_30 = { class: "col-md-4" };
var _hoisted_31 = { class: "col-md-4 d-flex align-items-end" };
var _hoisted_32 = ["disabled"];
var _hoisted_33 = { class: "table table-sm table-bordered" };
var _hoisted_34 = { key: 0 };
var _hoisted_35 = { class: "text-end" };
var _hoisted_36 = ["onClick"];
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
		const items_coa = ref([]);
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
			endDate: hooks().format("D-M-YYYY"),
			acc_id: "-"
		});
		const bulanList = [
			{
				val: 1,
				label: "Januari"
			},
			{
				val: 2,
				label: "Februari"
			},
			{
				val: 3,
				label: "Maret"
			},
			{
				val: 4,
				label: "April"
			},
			{
				val: 5,
				label: "Mei"
			},
			{
				val: 6,
				label: "Juni"
			},
			{
				val: 7,
				label: "Juli"
			},
			{
				val: 8,
				label: "Agustus"
			},
			{
				val: 9,
				label: "September"
			},
			{
				val: 10,
				label: "Oktober"
			},
			{
				val: 11,
				label: "November"
			},
			{
				val: 12,
				label: "Desember"
			}
		];
		const bulanLabel = (n) => (bulanList.find((b) => b.val === n) || {}).label || n;
		const periodeInput = ref({
			bulan: hooks().subtract(1, "month").month() + 1,
			tahun: hooks().subtract(1, "month").year()
		});
		const periodeList = ref([]);
		const periodeLoading = ref(false);
		const periodeMsg = ref("");
		const periodeSuccess = ref(false);
		const loadPeriodeList = async () => {
			await store.dispatch("GetPeriodeList");
			periodeList.value = store.getters.SPeriodeList || [];
		};
		const tutupPeriode = async () => {
			periodeLoading.value = true;
			periodeMsg.value = "";
			try {
				const res = await store.dispatch("ClosePeriode", periodeInput.value);
				periodeSuccess.value = res.success;
				periodeMsg.value = res.message + (res.success ? ` — Saldo Penutup: ${Number(res.saldo_penutup).toLocaleString()}` : "");
				await loadPeriodeList();
			} catch (e) {
				periodeSuccess.value = false;
				periodeMsg.value = "Gagal menutup periode";
			} finally {
				periodeLoading.value = false;
			}
		};
		const bukaKunci = async (p) => {
			if (!confirm(`Buka kunci periode ${bulanLabel(p.bulan)} ${p.tahun}?`)) return;
			await store.dispatch("UnlockPeriode", {
				tahun: p.tahun,
				bulan: p.bulan
			});
			await loadPeriodeList();
		};
		onMounted(() => {
			bindAcc();
			bind_data();
		});
		const bindAcc = async () => {
			await store.dispatch("GetListCoa");
			items_coa.value = store.getters.StateListCoa || [];
		};
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
			return list.map((row) => {
				const debet = toNumber(row.debet);
				const kredit = toNumber(row.kredit);
				const mutasi = debet - kredit;
				return {
					...row,
					debet,
					kredit,
					mutasi,
					saldo: toNumber(row.saldo)
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
			const closingBalance = toNumber(bukuBesarMeta.value.closing_balance);
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
			return openBlock(), createElementBlock("div", _hoisted_1, [
				(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[6] || (_cache[6] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
					class: "breadcrumb-one",
					"aria-label": "breadcrumb"
				}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
					class: "breadcrumb-item active",
					"aria-current": "page"
				}, [createBaseVNode("span", null, "Buku Kas")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
					createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [
						_cache[7] || (_cache[7] = createBaseVNode("h5", null, "Kas", -1)),
						_cache[8] || (_cache[8] = createTextVNode(" \xA0 ")),
						createBaseVNode("button", {
							class: "btn btn-sm btn-warning ms-3",
							"data-bs-toggle": "modal",
							"data-bs-target": "#modalTutupPeriode",
							onClick: loadPeriodeList
						}, "Tutup Periode")
					]),
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
						withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sorting.value.acc_id = $event),
							class: "form-control form-control-sm"
						}, [_cache[9] || (_cache[9] = createBaseVNode("option", { value: "-" }, "Semua Akun", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(items_coa.value, (coa) => {
							return openBlock(), createElementBlock("option", {
								key: coa.acc_id,
								value: coa.acc_id
							}, toDisplayString(coa.acc_id) + " - " + toDisplayString(coa.name), 9, _hoisted_10);
						}), 128))], 512), [[vModelSelect, sorting.value.acc_id]]),
						createBaseVNode("button", {
							type: "button",
							class: "btn m-1 btn-primary",
							onClick: bind_data,
							disabled: isLoading.value
						}, toDisplayString(isLoading.value ? "Memuat..." : "Cari"), 9, _hoisted_11),
						createBaseVNode("button", {
							type: "button",
							class: "btn m-1 btn-primary",
							onClick: _cache[3] || (_cache[3] = ($event) => export_table("print"))
						}, "Print")
					])])])]),
					showSummary.value ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("table", _hoisted_13, [createBaseVNode("tbody", null, [createBaseVNode("tr", _hoisted_14, [_cache[10] || (_cache[10] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal", -1)), createBaseVNode("td", _hoisted_15, toDisplayString(Number(summary.value.openingBalance).toLocaleString()), 1)])])])])) : createCommentVNode("", true),
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
					showSummary.value ? (openBlock(), createElementBlock("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [createBaseVNode("table", _hoisted_18, [createBaseVNode("tbody", null, [
						createBaseVNode("tr", null, [_cache[11] || (_cache[11] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal", -1)), createBaseVNode("td", _hoisted_19, toDisplayString(Number(summary.value.openingBalance).toLocaleString()), 1)]),
						createBaseVNode("tr", null, [_cache[12] || (_cache[12] = createBaseVNode("th", null, "Total Debet", -1)), createBaseVNode("td", _hoisted_20, toDisplayString(Number(summary.value.totalDebet).toLocaleString()), 1)]),
						createBaseVNode("tr", null, [_cache[13] || (_cache[13] = createBaseVNode("th", null, "Total Kredit", -1)), createBaseVNode("td", _hoisted_21, toDisplayString(Number(summary.value.totalKredit).toLocaleString()), 1)]),
						createBaseVNode("tr", null, [_cache[14] || (_cache[14] = createBaseVNode("th", null, "Saldo Akhir Periode", -1)), createBaseVNode("td", _hoisted_22, toDisplayString(Number(summary.value.closingBalance).toLocaleString()), 1)])
					])])])])) : createCommentVNode("", true)
				])])])]),
				createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [
					_cache[20] || (_cache[20] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", { class: "modal-title" }, "Tutup Periode (Kunci Saldo Bulanan)"), createBaseVNode("button", {
						type: "button",
						class: "btn-close",
						"data-bs-dismiss": "modal"
					})], -1)),
					createBaseVNode("div", _hoisted_26, [
						createBaseVNode("div", _hoisted_27, [
							createBaseVNode("div", _hoisted_28, [_cache[15] || (_cache[15] = createBaseVNode("label", { class: "form-label" }, "Bulan", -1)), withDirectives(createBaseVNode("select", {
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => periodeInput.value.bulan = $event),
								class: "form-select form-select-sm"
							}, [(openBlock(), createElementBlock(Fragment, null, renderList(bulanList, (b) => {
								return createBaseVNode("option", {
									key: b.val,
									value: b.val
								}, toDisplayString(b.label), 9, _hoisted_29);
							}), 64))], 512), [[vModelSelect, periodeInput.value.bulan]])]),
							createBaseVNode("div", _hoisted_30, [_cache[16] || (_cache[16] = createBaseVNode("label", { class: "form-label" }, "Tahun", -1)), withDirectives(createBaseVNode("input", {
								type: "number",
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => periodeInput.value.tahun = $event),
								class: "form-control form-control-sm"
							}, null, 512), [[vModelText, periodeInput.value.tahun]])]),
							createBaseVNode("div", _hoisted_31, [createBaseVNode("button", {
								class: "btn btn-warning btn-sm w-100",
								onClick: tutupPeriode,
								disabled: periodeLoading.value
							}, toDisplayString(periodeLoading.value ? "Memproses..." : "Kunci Periode Ini"), 9, _hoisted_32)])
						]),
						periodeMsg.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(["alert", periodeSuccess.value ? "alert-success" : "alert-danger"]),
							role: "alert"
						}, toDisplayString(periodeMsg.value), 3)) : createCommentVNode("", true),
						_cache[19] || (_cache[19] = createBaseVNode("h6", { class: "mt-3" }, "Daftar Periode Terkunci", -1)),
						createBaseVNode("table", _hoisted_33, [_cache[18] || (_cache[18] = createBaseVNode("thead", { class: "table-light" }, [createBaseVNode("tr", null, [
							createBaseVNode("th", null, "Bulan"),
							createBaseVNode("th", null, "Tahun"),
							createBaseVNode("th", null, "Saldo Penutup"),
							createBaseVNode("th", null, "Status"),
							createBaseVNode("th", null, "Dikunci Pada"),
							createBaseVNode("th", null, "Aksi")
						])], -1)), createBaseVNode("tbody", null, [!periodeList.value.length ? (openBlock(), createElementBlock("tr", _hoisted_34, _cache[17] || (_cache[17] = [createBaseVNode("td", {
							colspan: "6",
							class: "text-center text-muted"
						}, "Belum ada periode dikunci", -1)]))) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(periodeList.value, (p) => {
							return openBlock(), createElementBlock("tr", { key: p.id }, [
								createBaseVNode("td", null, toDisplayString(bulanLabel(p.bulan)), 1),
								createBaseVNode("td", null, toDisplayString(p.tahun), 1),
								createBaseVNode("td", _hoisted_35, toDisplayString(Number(p.saldo_penutup).toLocaleString()), 1),
								createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(p.is_locked ? "badge bg-success" : "badge bg-secondary") }, toDisplayString(p.is_locked ? "Terkunci" : "Terbuka"), 3)]),
								createBaseVNode("td", null, toDisplayString(p.locked_at ? p.locked_at.substring(0, 16) : "-"), 1),
								createBaseVNode("td", null, [p.is_locked ? (openBlock(), createElementBlock("button", {
									key: 0,
									class: "btn btn-xs btn-outline-danger btn-sm",
									onClick: ($event) => bukaKunci(p)
								}, "Buka Kunci", 8, _hoisted_36)) : createCommentVNode("", true)])
							]);
						}), 128))])])
					]),
					_cache[21] || (_cache[21] = createBaseVNode("div", { class: "modal-footer" }, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary",
						"data-bs-dismiss": "modal"
					}, "Tutup")], -1))
				])])])
			]);
		};
	}
};
//#endregion
export { _sfc_main as default };
