import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, F as onBeforeMount, K as resolveComponent, L as onMounted, Nt as toDisplayString, S as createElementBlock, T as createTextVNode, Z as withCtx, b as createBlock, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { o as useRouter, s as useStore } from "../../assets/main-CDz2Rhtt.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-u_FPiHAc.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C6SOtT-k.js";
//#region resources/js/src/views/laporan/pembelianInventaris.vue
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
var _hoisted_10 = ["onClick"];
var _hoisted_11 = ["onClick"];
var _sfc_main = {
	__name: "pembelianInventaris",
	setup(__props) {
		useMeta({ title: "Data Laporan Pembelian Inventaris" });
		const store = useStore();
		useRouter();
		const columns = ref([
			"pengadaan_sysno",
			"tgl_spk",
			"nmSupplier",
			"total",
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
				"pengadaan_sysno",
				"tgl_spk",
				"nmSupplier"
			],
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
			console.log("on mount pagr");
		});
		onBeforeMount(() => {
			console.log(" before onmount");
		});
		const bind_data = () => {
			store.dispatch("GetPembelianInventaris", sorting.value);
			setTimeout(function() {
				items.value = store.getters.StateLaporanPembelianInventaris;
			}, 200);
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
					rowhtml += "<td>" + item.noPenjualan + "</td>";
					rowhtml += "<td>" + hooks(item.tglPenjualan).format("DD-MM-YYYY") + "</td>";
					rowhtml += "<td>" + item.nmPelanggan + "</td>";
					rowhtml += "<td>" + Number(item.subTotalPenjualan).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.discPenjualan).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.taxPenjualan).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.totalPenjualan).toLocaleString() + "</td>";
					rowhtml += "</tr>";
					rowhtml += "</tr>";
				});
				let sum = 0;
				let sumtax = 0;
				records.forEach((element) => {
					sum += parseInt(element.totalPenjualan);
					sumtax += parseInt(element.taxPenjualan);
				});
				rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
				rowhtml += "</tbody>";
				rowhtml += "<tfoot><tr>";
				rowhtml += "<th></th><th></th><th></th><th></th><th>Total</th><th>" + Number(sumtax).toLocaleString() + "</th><th>" + Number(sum).toLocaleString() + "</th></tr>";
				rowhtml += "<tr><th></th><th></th><th></th><th></th><th>Total Net</th><th></th><th>" + Number(sum - sumtax).toLocaleString() + "</th>";
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
				doc.save("table.pdf");
			}
		};
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		const delete_row = (data) => {
			new window.Swal({
				title: "Anda Yakin?",
				text: "Hapus Pengadaan !" + data.pengadaan_sysno,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeletePengadaanInv", { id: data.pengadaan_sysno }).then((response) => {
					bind_data();
					new window.Swal("Deleted!", "Your file has been deleted.", "success");
				}).catch((error) => {});
			});
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[4] || (_cache[4] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Pembelian")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[7] || (_cache[7] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "Daftar Pembelian Inventaris")], -1)),
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
						variant: "primary",
						class: "btn m-1 btn-primary",
						onClick: _cache[2] || (_cache[2] = ($event) => bind_data())
					}, "CARI"),
					createBaseVNode("button", {
						variant: "primary",
						class: "btn m-1 btn-primary",
						onClick: _cache[3] || (_cache[3] = ($event) => export_table("print"))
					}, "Print")
				])])])]),
				createVNode(_component_v_client_table, {
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					tgl_spk: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tgl_spk).format("D-M-YYYY")), 1)]),
					total: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.total).toLocaleString()), 1)]),
					action: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => (props.row, void 0)
					}, _cache[5] || (_cache[5] = [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-edit-2"
					}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_10), createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => delete_row(props.row)
					}, _cache[6] || (_cache[6] = [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-trash-2"
					}, [
						createBaseVNode("polyline", { points: "3 6 5 6 21 6" }),
						createBaseVNode("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
						createBaseVNode("line", {
							x1: "10",
							y1: "11",
							x2: "10",
							y2: "17"
						}),
						createBaseVNode("line", {
							x1: "14",
							y1: "11",
							x2: "14",
							y2: "17"
						})
					], -1)]), 8, _hoisted_11)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
