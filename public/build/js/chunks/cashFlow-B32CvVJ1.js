import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, S as createElementBlock, T as createTextVNode, Z as withCtx, b as createBlock, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-CZy0kH-3.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-04YMEBEn.js";
//#region resources/js/src/views/laporan/cashFlow.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "row" };
var _hoisted_8 = { class: "col-md-8" };
var _hoisted_9 = { class: "input-group mb-3" };
var _hoisted_10 = ["disabled"];
var _hoisted_11 = { class: "px-3 pb-3" };
var _hoisted_12 = { class: "table-responsive" };
var _hoisted_13 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_14 = { class: "text-end" };
var _hoisted_15 = { class: "text-end text-success" };
var _hoisted_16 = { class: "text-end text-danger" };
var _hoisted_17 = { class: "text-end fw-bold" };
var _hoisted_18 = { class: "table-primary" };
var _hoisted_19 = { class: "text-end fw-bold" };
var _hoisted_20 = { class: "px-3 pb-3" };
var _hoisted_21 = { class: "table-responsive" };
var _hoisted_22 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_23 = { class: "text-end" };
var _hoisted_24 = { class: "text-end" };
var _hoisted_25 = { class: "text-end" };
var _hoisted_26 = { class: "text-end" };
var _hoisted_27 = { class: "text-end" };
var _hoisted_28 = { class: "text-end" };
var _hoisted_29 = { class: "text-end" };
var _hoisted_30 = { class: "text-end" };
var _hoisted_31 = { class: "text-end" };
var _sfc_main = {
	__name: "cashFlow",
	setup(__props) {
		useMeta({ title: "Arus Kas" });
		const store = useStore();
		const isLoading = ref(false);
		const items = ref([]);
		const summary = ref({
			opening_balance: 0,
			cash_in: 0,
			cash_out: 0,
			net_cash_flow: 0,
			closing_balance: 0
		});
		const sections = ref({
			operating: {
				in: 0,
				out: 0,
				net: 0
			},
			investing: {
				in: 0,
				out: 0,
				net: 0
			},
			financing: {
				in: 0,
				out: 0,
				net: 0
			}
		});
		const columns = ref([
			"tgl",
			"notrans",
			"memo",
			"cash_account",
			"counter_account",
			"activity",
			"cash_in",
			"cash_out",
			"net_amount"
		]);
		const tableOption = ref({
			perPage: 100,
			perPageValues: [100, 200],
			skin: "table table-hover",
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
		const formatNumber = (value) => Number(value || 0).toLocaleString();
		const activityLabel = (activity) => {
			if (activity === "investing") return "Investasi";
			if (activity === "financing") return "Pendanaan";
			return "Operasi";
		};
		const formatCounterAccount = (row) => {
			if (row.counter_status === "cash_transfer") return "Transfer antar akun kas";
			if (row.counter_status === "missing_counter") return "Tanpa akun lawan (cek jurnal)";
			return `${row.counter_acc_id || "-"} - ${row.counter_name || "Nama akun tidak ditemukan"}`;
		};
		const bindData = async () => {
			isLoading.value = true;
			try {
				await store.dispatch("GetCashFlow", sorting.value);
				items.value = store.getters.StateCashFlow || [];
				summary.value = store.getters.StateCashFlowMeta || summary.value;
				sections.value = store.getters.StateCashFlowSections || sections.value;
			} finally {
				isLoading.value = false;
			}
		};
		const printTable = () => {
			let html = "<p>Laporan Arus Kas</p>";
			html += `<p>Periode: ${sorting.value.startDate} s/d ${sorting.value.endDate}</p>`;
			html += "<table><thead><tr>";
			html += "<th>Tanggal</th><th>No. Transaksi</th><th>Memo</th><th>Akun Kas</th><th>Akun Lawan</th><th>Aktivitas</th><th>Kas Masuk</th><th>Kas Keluar</th><th>Arus Kas</th>";
			html += "</tr></thead><tbody>";
			items.value.forEach((row) => {
				html += "<tr>";
				html += `<td>${hooks(row.tgl).format("DD-MM-YYYY")}</td>`;
				html += `<td>${row.notrans || ""}</td>`;
				html += `<td>${row.memo || ""}</td>`;
				html += `<td>${row.cash_acc_id || ""} - ${row.cash_acc_name || ""}</td>`;
				html += `<td>${formatCounterAccount(row)}</td>`;
				html += `<td>${activityLabel(row.activity)}</td>`;
				html += `<td class="num">${formatNumber(row.cash_in)}</td>`;
				html += `<td class="num">${formatNumber(row.cash_out)}</td>`;
				html += `<td class="num">${formatNumber(row.net_amount)}</td>`;
				html += "</tr>";
			});
			html += "</tbody></table>";
			html += "<h4>Ringkasan</h4>";
			html += "<table><tbody>";
			html += `<tr><th>Saldo Awal Kas</th><td class="num">${formatNumber(summary.value.opening_balance)}</td></tr>`;
			html += `<tr><th>Total Kas Masuk</th><td class="num">${formatNumber(summary.value.cash_in)}</td></tr>`;
			html += `<tr><th>Total Kas Keluar</th><td class="num">${formatNumber(summary.value.cash_out)}</td></tr>`;
			html += `<tr><th>Arus Kas Bersih</th><td class="num">${formatNumber(summary.value.net_cash_flow)}</td></tr>`;
			html += `<tr><th>Saldo Akhir Kas</th><td class="num">${formatNumber(summary.value.closing_balance)}</td></tr>`;
			html += "</tbody></table>";
			html += "<style>body{font-family:Arial;color:#495057;padding:12px;}p{text-align:center;margin:6px 0;font-weight:bold;}table{width:100%;border-collapse:collapse;margin-bottom:12px;}th,td{font-size:12px;text-align:left;padding:4px;border:1px solid #ddd;}th{background:#eff5ff;} .num{text-align:right;}</style>";
			const winPrint = window.open("", "", "left=0,top=0,width=1200,height=700,toolbar=0,scrollbars=0,status=0");
			winPrint.document.write("<title>Laporan Arus Kas</title>" + html);
			winPrint.document.close();
			winPrint.focus();
			winPrint.print();
		};
		onMounted(() => {
			bindData();
		});
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[2] || (_cache[2] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Arus Kas")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[12] || (_cache[12] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "Laporan Arus Kas")], -1)),
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
						onClick: bindData,
						disabled: isLoading.value
					}, toDisplayString(isLoading.value ? "Memuat..." : "Cari"), 9, _hoisted_10),
					createBaseVNode("button", {
						type: "button",
						class: "btn m-1 btn-primary",
						onClick: printTable
					}, "Print")
				])])])]),
				createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("table", _hoisted_13, [createBaseVNode("tbody", null, [
					createBaseVNode("tr", null, [_cache[3] || (_cache[3] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal Kas", -1)), createBaseVNode("td", _hoisted_14, toDisplayString(formatNumber(summary.value.opening_balance)), 1)]),
					createBaseVNode("tr", null, [_cache[4] || (_cache[4] = createBaseVNode("th", null, "Total Kas Masuk", -1)), createBaseVNode("td", _hoisted_15, toDisplayString(formatNumber(summary.value.cash_in)), 1)]),
					createBaseVNode("tr", null, [_cache[5] || (_cache[5] = createBaseVNode("th", null, "Total Kas Keluar", -1)), createBaseVNode("td", _hoisted_16, toDisplayString(formatNumber(summary.value.cash_out)), 1)]),
					createBaseVNode("tr", null, [_cache[6] || (_cache[6] = createBaseVNode("th", null, "Arus Kas Bersih", -1)), createBaseVNode("td", _hoisted_17, toDisplayString(formatNumber(summary.value.net_cash_flow)), 1)]),
					createBaseVNode("tr", _hoisted_18, [_cache[7] || (_cache[7] = createBaseVNode("th", null, "Saldo Akhir Kas", -1)), createBaseVNode("td", _hoisted_19, toDisplayString(formatNumber(summary.value.closing_balance)), 1)])
				])])])]),
				createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("table", _hoisted_22, [_cache[11] || (_cache[11] = createBaseVNode("thead", { class: "table-light" }, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Aktivitas"),
					createBaseVNode("th", { class: "text-end" }, "Kas Masuk"),
					createBaseVNode("th", { class: "text-end" }, "Kas Keluar"),
					createBaseVNode("th", { class: "text-end" }, "Net")
				])], -1)), createBaseVNode("tbody", null, [
					createBaseVNode("tr", null, [
						_cache[8] || (_cache[8] = createBaseVNode("td", null, "Operasi", -1)),
						createBaseVNode("td", _hoisted_23, toDisplayString(formatNumber(sections.value.operating.in)), 1),
						createBaseVNode("td", _hoisted_24, toDisplayString(formatNumber(sections.value.operating.out)), 1),
						createBaseVNode("td", _hoisted_25, toDisplayString(formatNumber(sections.value.operating.net)), 1)
					]),
					createBaseVNode("tr", null, [
						_cache[9] || (_cache[9] = createBaseVNode("td", null, "Investasi", -1)),
						createBaseVNode("td", _hoisted_26, toDisplayString(formatNumber(sections.value.investing.in)), 1),
						createBaseVNode("td", _hoisted_27, toDisplayString(formatNumber(sections.value.investing.out)), 1),
						createBaseVNode("td", _hoisted_28, toDisplayString(formatNumber(sections.value.investing.net)), 1)
					]),
					createBaseVNode("tr", null, [
						_cache[10] || (_cache[10] = createBaseVNode("td", null, "Pendanaan", -1)),
						createBaseVNode("td", _hoisted_29, toDisplayString(formatNumber(sections.value.financing.in)), 1),
						createBaseVNode("td", _hoisted_30, toDisplayString(formatNumber(sections.value.financing.out)), 1),
						createBaseVNode("td", _hoisted_31, toDisplayString(formatNumber(sections.value.financing.net)), 1)
					])
				])])])]),
				items.value.length ? (openBlock(), createBlock(_component_v_client_table, {
					key: 0,
					data: items.value,
					columns: columns.value,
					options: tableOption.value
				}, {
					tgl: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tgl).format("D-M-YYYY")), 1)]),
					activity: withCtx((props) => [createTextVNode(toDisplayString(activityLabel(props.row.activity)), 1)]),
					cash_account: withCtx((props) => [createTextVNode(toDisplayString(props.row.cash_acc_id) + " - " + toDisplayString(props.row.cash_acc_name), 1)]),
					counter_account: withCtx((props) => [createTextVNode(toDisplayString(formatCounterAccount(props.row)), 1)]),
					cash_in: withCtx((props) => [createTextVNode(toDisplayString(formatNumber(props.row.cash_in)), 1)]),
					cash_out: withCtx((props) => [createTextVNode(toDisplayString(formatNumber(props.row.cash_out)), 1)]),
					net_amount: withCtx((props) => [createTextVNode(toDisplayString(formatNumber(props.row.net_amount)), 1)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])) : createCommentVNode("", true)
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
