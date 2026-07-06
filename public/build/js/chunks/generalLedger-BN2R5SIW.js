import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { E as createVNode, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, u as vModelSelect, v as computed, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as useStore } from "../../assets/main-DqXy1ygy.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C16KEE_q.js";
//#region resources/js/src/views/laporan/generalLedger.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "row" };
var _hoisted_8 = { class: "col-md-8" };
var _hoisted_9 = { class: "input-group mb-4" };
var _hoisted_10 = ["value"];
var _hoisted_11 = ["disabled"];
var _hoisted_12 = ["disabled"];
var _hoisted_13 = {
	key: 0,
	type: "button",
	class: "btn btn-danger btn-lg mb-3 ms-3 me-3"
};
var _hoisted_14 = {
	key: 1,
	class: "px-3 pb-2"
};
var _hoisted_15 = { class: "table table-sm table-bordered mb-0" };
var _hoisted_16 = { class: "table-primary" };
var _hoisted_17 = { class: "text-end fw-bold" };
var _hoisted_18 = { class: "text-end" };
var _hoisted_19 = { class: "text-end" };
var _hoisted_20 = { class: "text-end fw-bold" };
var _hoisted_21 = {
	key: 2,
	class: "px-3 pb-3"
};
var _hoisted_22 = {
	key: 3,
	class: "px-3 pb-3 text-muted"
};
var _sfc_main = {
	__name: "generalLedger",
	setup(__props) {
		useMeta({ title: "General Ledger" });
		const store = useStore();
		const isLoading = ref(false);
		const columns = ref([
			"NoTransaksi",
			"Memo",
			"Tanggal",
			"Debet",
			"Kredit",
			"Saldo"
		]);
		const items = ref([]);
		const items_coa = ref([]);
		const glMeta = computed(() => store.getters.StateGLMeta || {
			opening_balance: 0,
			closing_balance: 0
		});
		const tableOption = ref({
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
		const toNumber = (value) => Number(value || 0);
		const normalizeRows = (rows) => {
			return (Array.isArray(rows) ? [...rows] : []).map((row) => ({
				...row,
				Debet: toNumber(row.Debet),
				Kredit: toNumber(row.Kredit),
				Saldo: toNumber(row.Saldo)
			}));
		};
		const hasData = computed(() => Array.isArray(items.value) && items.value.length > 0);
		const summary = computed(() => {
			const openingBalance = toNumber(glMeta.value.opening_balance);
			let totalDebet = 0;
			let totalKredit = 0;
			items.value.forEach((row) => {
				totalDebet += toNumber(row.Debet);
				totalKredit += toNumber(row.Kredit);
			});
			const closingBalance = items.value.length ? toNumber(items.value[items.value.length - 1].Saldo) : toNumber(glMeta.value.closing_balance);
			return {
				openingBalance,
				totalDebet,
				totalKredit,
				closingBalance
			};
		});
		const showSummary = computed(() => {
			return hasData.value || toNumber(glMeta.value.opening_balance) !== 0 || toNumber(glMeta.value.closing_balance) !== 0;
		});
		const bindData = async () => {
			isLoading.value = true;
			try {
				await store.dispatch("GetGL", {
					...sorting.value,
					acc_id: sorting.value.acc_id || "-"
				});
				items.value = normalizeRows(store.getters.StateGL || []);
			} finally {
				isLoading.value = false;
			}
		};
		const bindAcc = async () => {
			isLoading.value = true;
			try {
				await store.dispatch("GetListCoa");
				items_coa.value = store.getters.StateListCoa || [];
			} finally {
				isLoading.value = false;
			}
		};
		onMounted(async () => {
			await bindAcc();
			await bindData();
		});
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		const exportTable = (type) => {
			const cols = columns.value.filter((d) => d !== "profile" && d !== "action");
			const records = items.value;
			if (type !== "print") return;
			let rowhtml = "<p>General Ledger</p>";
			rowhtml += "<table style=\"width: 100%;\" cellpadding=\"0\" cellspacing=\"0\"><thead><tr style=\"color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact;\">";
			rowhtml += "<th colspan=\"6\" style=\"text-align:left;\">LAPORAN GENERAL LEDGER</th>";
			rowhtml += "</tr><tr>";
			cols.forEach((d) => {
				rowhtml += "<th>" + capitalize(d) + "</th>";
			});
			rowhtml += "</tr></thead><tbody>";
			rowhtml += "<tr>";
			rowhtml += "<td>-</td>";
			rowhtml += "<td><b>Saldo Awal</b></td>";
			rowhtml += "<td>-</td>";
			rowhtml += "<td class=\"num\">-</td>";
			rowhtml += "<td class=\"num\">-</td>";
			rowhtml += "<td class=\"num\"><b>" + Number(summary.value.openingBalance).toLocaleString() + "</b></td>";
			rowhtml += "</tr>";
			records.forEach((item) => {
				rowhtml += "<tr>";
				rowhtml += "<td>" + (item.NoTransaksi || "") + "</td>";
				rowhtml += "<td>" + (item.Memo || "") + "</td>";
				rowhtml += "<td>" + (item.Tanggal ? hooks(item.Tanggal).format("DD-MM-YYYY") : "") + "</td>";
				rowhtml += "<td class=\"num\">" + Number(item.Debet || 0).toLocaleString() + "</td>";
				rowhtml += "<td class=\"num\">" + Number(item.Kredit || 0).toLocaleString() + "</td>";
				rowhtml += "<td class=\"num\">" + Number(item.Saldo || 0).toLocaleString() + "</td>";
				rowhtml += "</tr>";
			});
			rowhtml += "</tbody><tfoot><tr>";
			rowhtml += "<th colspan=\"3\" style=\"text-align:right;\">Total</th>";
			rowhtml += "<th class=\"num\">" + Number(summary.value.totalDebet).toLocaleString() + "</th>";
			rowhtml += "<th class=\"num\">" + Number(summary.value.totalKredit).toLocaleString() + "</th>";
			rowhtml += "<th class=\"num\">" + Number(summary.value.closingBalance).toLocaleString() + "</th>";
			rowhtml += "</tr></tfoot></table>";
			rowhtml += "<style>body{font-family:Arial;color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{border-collapse:collapse;border-spacing:0;}th,td{font-size:12px;text-align:left;padding:4px;border:1px solid #ddd;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7;}.num{text-align:right;}</style>";
			const winPrint = window.open("", "", "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");
			winPrint.document.write("<title>Print</title>" + rowhtml);
			winPrint.document.close();
			winPrint.focus();
			winPrint.print();
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[4] || (_cache[4] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "General Ledger")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[11] || (_cache[11] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "General Ledger")], -1)),
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
						class: "form-control"
					}, [_cache[5] || (_cache[5] = createBaseVNode("option", { value: "-" }, "Pilih Akun", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(items_coa.value, (coa) => {
						return openBlock(), createElementBlock("option", {
							key: coa.acc_id,
							value: coa.acc_id
						}, toDisplayString(coa.acc_id) + " - " + toDisplayString(coa.name), 9, _hoisted_10);
					}), 128))], 512), [[vModelSelect, sorting.value.acc_id]]),
					createBaseVNode("button", {
						type: "button",
						class: "btn m-1 btn-primary",
						onClick: bindData,
						disabled: isLoading.value
					}, toDisplayString(isLoading.value ? "Memuat..." : "Cari"), 9, _hoisted_11),
					createBaseVNode("button", {
						type: "button",
						class: "btn m-1 btn-primary",
						onClick: _cache[3] || (_cache[3] = ($event) => exportTable("print")),
						disabled: isLoading.value || !hasData.value
					}, " Print ", 8, _hoisted_12)
				])])])]),
				isLoading.value ? (openBlock(), createElementBlock("button", _hoisted_13, _cache[6] || (_cache[6] = [createBaseVNode("span", { class: "spinner-border text-white me-2 align-self-center loader-sm" }, null, -1), createTextVNode(" Loading ")]))) : createCommentVNode("", true),
				showSummary.value ? (openBlock(), createElementBlock("div", _hoisted_14, [createBaseVNode("table", _hoisted_15, [createBaseVNode("tbody", null, [
					createBaseVNode("tr", _hoisted_16, [_cache[7] || (_cache[7] = createBaseVNode("th", { class: "w-25" }, "Saldo Awal", -1)), createBaseVNode("td", _hoisted_17, toDisplayString(Number(summary.value.openingBalance).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[8] || (_cache[8] = createBaseVNode("th", null, "Total Debet", -1)), createBaseVNode("td", _hoisted_18, toDisplayString(Number(summary.value.totalDebet).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[9] || (_cache[9] = createBaseVNode("th", null, "Total Kredit", -1)), createBaseVNode("td", _hoisted_19, toDisplayString(Number(summary.value.totalKredit).toLocaleString()), 1)]),
					createBaseVNode("tr", null, [_cache[10] || (_cache[10] = createBaseVNode("th", null, "Saldo Akhir Periode", -1)), createBaseVNode("td", _hoisted_20, toDisplayString(Number(summary.value.closingBalance).toLocaleString()), 1)])
				])])])) : createCommentVNode("", true),
				hasData.value ? (openBlock(), createElementBlock("div", _hoisted_21, [createVNode(_component_v_client_table, {
					data: items.value,
					columns: columns.value,
					options: tableOption.value
				}, {
					Tanggal: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.Tanggal).format("D-M-YYYY")), 1)]),
					Debet: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Debet || 0).toLocaleString()), 1)]),
					Kredit: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Kredit || 0).toLocaleString()), 1)]),
					Saldo: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Saldo || 0).toLocaleString()), 1)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])])) : !isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_22, " Tidak ada data ledger untuk rentang tanggal dan akun yang dipilih. ")) : createCommentVNode("", true)
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
