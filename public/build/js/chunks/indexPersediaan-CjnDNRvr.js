import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, S as createElementBlock, T as createTextVNode, Z as withCtx, b as createBlock, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-CDz2Rhtt.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-u_FPiHAc.js";
//#region resources/js/src/views/master/indexPersediaan.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
init_reactivity_esm_bundler();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_7 = { class: "custom-dropdown dropdown btn-group" };
var _hoisted_8 = { class: "dropdown-menu dropdown-menu-end" };
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["onClick"];
var _sfc_main = {
	__name: "indexPersediaan",
	setup(__props) {
		useMeta({ title: "Data Barang" });
		const store = useStore();
		const columns = ref([
			"kdPersediaan",
			"nmPersediaan",
			"stokPersediaan",
			"satuanPersediaan",
			"namaKtg",
			"lastPrice",
			"salePrice",
			"action"
		]);
		const items = ref([]);
		const table_option = ref({
			perPage: 10,
			perPageValues: [
				5,
				10,
				20,
				50
			],
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
			sortable: [
				"kdBarang",
				"nmBarang",
				"hrgPokok",
				"hrgJual",
				"namaKtg",
				"stkBarang"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		onMounted(() => {
			bind_data();
		});
		const bind_data = () => {
			store.dispatch("GetPersediaan");
			items.value = store.getters.StatePersediaan;
		};
		const barangs = computed(() => {
			items.value = store.getters.StatePersediaan;
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
					link.setAttribute("download", "table.csv");
					link.click();
				} else {
					var blob = new Blob([result]);
					if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(blob, "table.csv");
				}
			} else if (type == "print") {
				var rowhtml = "<p>table</p>";
				rowhtml += "<table style=\"width: 100%; \" cellpadding=\"0\" cellcpacing=\"0\"><thead><tr style=\"color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; \"> ";
				cols.map((d) => {
					rowhtml += "<th>" + capitalize(d) + "</th>";
				});
				rowhtml += "</tr></thead>";
				rowhtml += "<tbody>";
				records.map((item) => {
					rowhtml += "<tr>";
					cols.map((d) => {
						let val = item[d] ? item[d] : "";
						rowhtml += "<td>" + val + "</td>";
					});
					rowhtml += "</tr>";
				});
				rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
				rowhtml += "</tbody></table>";
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
				doc.save("table.pdf");
			}
		};
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		const view_row = (item) => {
			alert("ID: " + item.kdBarang + ", Name: " + item.nmBarang);
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[2] || (_cache[2] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "DataTables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "HTML5 Export")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [
				createBaseVNode("button", {
					variant: "primary",
					class: "btn m-1 btn-primary",
					onClick: _cache[0] || (_cache[0] = ($event) => export_table("print"))
				}, "Print"),
				createBaseVNode("button", {
					variant: "primary",
					class: "btn m-1 btn-primary",
					onClick: _cache[1] || (_cache[1] = ($event) => export_table("pdf"))
				}, "PDF"),
				createBaseVNode("span", null, toDisplayString(barangs.value), 1)
			]), createVNode(_component_v_client_table, {
				data: items.value,
				columns: columns.value,
				options: table_option.value
			}, {
				lastPrice: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.lastPrice).toLocaleString()), 1)]),
				salePrice: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.salePrice).toLocaleString()), 1)]),
				action: withCtx((props) => [createBaseVNode("div", _hoisted_7, [_cache[3] || (_cache[3] = createBaseVNode("div", {
					class: "btn-group",
					href: "#",
					role: "button",
					id: "pendingTask",
					"data-bs-toggle": "dropdown",
					"aria-haspopup": "true",
					"aria-expanded": "false"
				}, [createBaseVNode("div", {
					role: "group",
					class: "btn-group"
				}, [createBaseVNode("div", { class: "dropdown b-dropdown custom-dropdown show btn-group" }, [createBaseVNode("a", { class: "btn dropdown-toggle btn-dark" }, [createBaseVNode("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "feather feather-chevron-down"
				}, [createBaseVNode("polyline", { points: "6 9 12 15 18 9" })])])])])], -1)), createBaseVNode("ul", _hoisted_8, [createBaseVNode("li", null, [createBaseVNode("a", {
					href: "javascript:void(0);",
					class: "dropdown-item",
					onClick: ($event) => view_row(props.row)
				}, " Edit ", 8, _hoisted_9)]), createBaseVNode("li", null, [createBaseVNode("a", {
					href: "javascript:void(0);",
					class: "dropdown-item",
					onClick: ($event) => view_row(props.row)
				}, " Delete ", 8, _hoisted_10)])])])]),
				_: 1
			}, 8, [
				"data",
				"columns",
				"options"
			])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
