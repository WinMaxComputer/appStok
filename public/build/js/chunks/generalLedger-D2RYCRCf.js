import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, P as onBeforeMount, R as openBlock, T as createVNode, W as resolveComponent, X as withDirectives, Y as withCtx, a as init_runtime_dom_esm_bundler, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { o as useRouter, s as useStore } from "../../assets/main-BslATf6g.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-CRYa0Dx7.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DMEX67jY.js";
//#region resources/js/src/views/laporan/generalLedger.vue
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
var _hoisted_11 = {
	key: 0,
	type: "button",
	class: "btn btn-danger btn-lg mb-3 me-3"
};
var _sfc_main = {
	__name: "generalLedger",
	setup(__props) {
		useMeta({ title: "Buku Besar" });
		const store = useStore();
		useRouter();
		const load = ref();
		const columns = ref([
			"NoTransaksi",
			"Memo",
			"Tanggal",
			"Debet",
			"Kredit",
			"Saldo"
		]);
		const items = ref([]);
		const acc_id = ref("-");
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
			acc_id
		});
		onMounted(() => {
			bind_data();
			bind_acc();
		});
		onBeforeMount(() => {});
		const bind_data = () => {
			load.value = true;
			store.dispatch("GetGL", sorting.value);
			setTimeout(function() {
				items.value = store.getters.StateGL;
				load.value = false;
			}, 1e3);
		};
		const bind_acc = () => {
			load.value = true;
			store.dispatch("GetListCoa");
			setTimeout(function() {
				items_coa.value = store.getters.StateListCoa;
				load.value = false;
			}, 1e3);
		};
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
					link.setAttribute("download", "Laporan PT. TAMAN KUSUMA.csv");
					link.click();
				} else {
					var blob = new Blob([result]);
					if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(blob, "Laporan PT. TAMAN KUSUMA.csv");
				}
			} else if (type == "print") {
				var rowhtml = "<p>Laporan PT. TAMAN KUSUMA</p>";
				rowhtml += "<table style=\"width: 100%; \" cellpadding=\"0\" cellcpacing=\"0\"><thead><tr style=\"color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; \"> ";
				rowhtml += "<td colspan=3>LAPORAN BUKU BESAR</td>";
				rowhtml += "<td>" + hooks(cols[0].Tanggal).format("DD-MM-YYYY") + "</td>";
				rowhtml += "<td></td>";
				rowhtml += "<td></td>";
				rowhtml += "</tr>";
				rowhtml += "<tr>";
				cols.map((d) => {
					rowhtml += "<th>" + capitalize(d) + "</th>";
				});
				rowhtml += "</tr></thead>";
				rowhtml += "<tbody>";
				records.map((item) => {
					rowhtml += "<tr>";
					rowhtml += "<td>" + item.NoTransaksi + "</td>";
					rowhtml += "<td>" + item.Memo + "</td>";
					rowhtml += "<td>" + hooks(item.Tanggal).format("DD-MM-YYYY") + "</td>";
					rowhtml += "<td>" + Number(item.Debet).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.Kredit).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.Saldo).toLocaleString() + "</td>";
					rowhtml += "</tr>";
					rowhtml += "</tr>";
				});
				rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
				rowhtml += "</tbody>";
				rowhtml += "<tfoot><tr>";
				rowhtml += "<th></th><th></th><th></th><th></th><th></th><th></th></tr>";
				rowhtml += "<tr><th></th><th></th><th></th><th> Net</th><th></th><th></th>";
				rowhtml += "</tr></tfoot></table>";
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
				doc.save("Laporan PT. TAMAN KUSUMA.pdf");
			}
		};
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[5] || (_cache[5] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Pembelian")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[8] || (_cache[8] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "General Ledger")], -1)),
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
					}, [_cache[6] || (_cache[6] = createBaseVNode("option", { value: "-" }, "Pilih Akun", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(items_coa.value, (hrt) => {
						return openBlock(), createElementBlock("option", {
							key: hrt.acc_id,
							value: hrt.acc_id
						}, toDisplayString(hrt.name), 9, _hoisted_10);
					}), 128))], 512), [[vModelSelect, sorting.value.acc_id]]),
					createBaseVNode("button", {
						variant: "primary",
						class: "btn m-1 btn-primary",
						onClick: _cache[3] || (_cache[3] = ($event) => bind_data())
					}, "CARI"),
					createBaseVNode("button", {
						variant: "primary",
						class: "btn m-1 btn-primary",
						onClick: _cache[4] || (_cache[4] = ($event) => export_table("print"))
					}, "Print")
				])])])]),
				load.value ? (openBlock(), createElementBlock("button", _hoisted_11, _cache[7] || (_cache[7] = [createBaseVNode("span", { class: "spinner-border text-white me-2 align-self-center loader-sm" }, "Loading...", -1), createTextVNode(" Loading ")]))) : createCommentVNode("", true),
				items.value.debet != 0 && items.value.kredit != 0 ? (openBlock(), createBlock(_component_v_client_table, {
					key: 1,
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					Tanggal: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.Tanggal).format("D-M-YYYY")), 1)]),
					Debet: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Debet).toLocaleString()), 1)]),
					Kredit: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Kredit).toLocaleString()), 1)]),
					Saldo: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.Saldo).toLocaleString()), 1)]),
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
