import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { E as createVNode, F as onBeforeMount, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, b as createBlock, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, v as computed, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as useStore, s as useRouter } from "../../assets/main-DqXy1ygy.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-BHmUnYgJ.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C16KEE_q.js";
//#region resources/js/src/views/laporan/pembelianPersediaan.vue?vue&type=style&index=0&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
init_jspdf_es_min();
require_jspdf_plugin_autotable();
//#endregion
//#region resources/js/src/views/laporan/pembelianPersediaan.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "row" };
var _hoisted_8 = { class: "col-sm-3" };
var _hoisted_9 = { class: "col-sm-3" };
var _hoisted_10 = { class: "col-sm-3" };
var _hoisted_11 = { class: "input-group sm-4" };
var _hoisted_12 = { class: "col-sm-3" };
var _hoisted_13 = { class: "input-group sm-4" };
var _hoisted_14 = { class: "col-sm-3" };
var _hoisted_15 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_16 = ["onClick"];
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
	key: 0,
	class: "modal d-block",
	tabindex: "-1",
	role: "dialog",
	style: { "background": "rgba(0,0,0,0.5)" }
};
var _hoisted_20 = {
	class: "modal-dialog modal-xl modal-dialog-centered",
	role: "document"
};
var _hoisted_21 = { class: "modal-content" };
var _hoisted_22 = { class: "modal-header" };
var _hoisted_23 = { class: "modal-title" };
var _hoisted_24 = { class: "modal-body" };
var _hoisted_25 = { class: "row mb-3" };
var _hoisted_26 = { class: "col-md-4" };
var _hoisted_27 = { class: "col-md-4" };
var _hoisted_28 = { class: "col-md-4" };
var _hoisted_29 = { class: "row mb-3" };
var _hoisted_30 = { class: "col-md-4" };
var _hoisted_31 = { class: "col-md-4" };
var _hoisted_32 = { class: "col-md-4" };
var _hoisted_33 = { class: "row mb-3" };
var _hoisted_34 = { class: "col-md-12" };
var _hoisted_35 = { class: "table-responsive" };
var _hoisted_36 = { class: "table table-bordered" };
var _hoisted_37 = { class: "text-end" };
var _hoisted_38 = { class: "text-end" };
var _hoisted_39 = { class: "text-end" };
var _hoisted_40 = { class: "text-end" };
var _hoisted_41 = { class: "row mt-3" };
var _hoisted_42 = { class: "col-md-4" };
var _hoisted_43 = { class: "col-md-4" };
var _hoisted_44 = { class: "col-md-4" };
var _hoisted_45 = { class: "row mt-2" };
var _hoisted_46 = { class: "col-md-12 text-end" };
var _hoisted_47 = { class: "modal-footer" };
var _sfc_main = {
	__name: "pembelianPersediaan",
	setup(__props) {
		useMeta({ title: "Data Laporan Pembelian BBM" });
		const store = useStore();
		const router = useRouter();
		const columns = ref([
			"noNota",
			"tglPembelian",
			"nmSupplier",
			"typeBayar",
			"hutangPembelian",
			"total",
			"action"
		]);
		const items = ref([]);
		const table_pembelian = ref({
			perPage: 10,
			perPageValues: [
				5,
				10,
				20,
				50,
				100
			],
			perPageSelect: true,
			filterable: true,
			filterable: [
				"noNota",
				"tglPembelian",
				"nmSupplier",
				"total"
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
				"noNota",
				"tglPembelian",
				"nmSupplier",
				"subTotal",
				"disc",
				"total"
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
		const totalPembelian = ref(0);
		const totalHutang = ref(0);
		const loading = ref();
		const showDetailModal = ref(false);
		const detailHeader = ref({});
		const detailItems = ref([]);
		onMounted(() => {
			bind_data();
		});
		onBeforeMount(() => {});
		const editnotabeli = (data) => {
			store.commit("SetEditNotaBeli", data);
			router.push({ name: "editpembelian" });
		};
		const viewDetail = async (row) => {
			try {
				await store.dispatch("GetDetailPembelian", { noNota: row.noNota });
				const detail = store.getters.SdetailPembelian;
				detailHeader.value = detail[0] && detail[0][0] ? detail[0][0] : row;
				detailItems.value = detail[1] || [];
				showDetailModal.value = true;
			} catch (error) {
				console.error("Failed to load detail pembelian:", error);
				detailHeader.value = row;
				detailItems.value = [];
				showDetailModal.value = true;
			}
		};
		const bind_data = () => {
			loading.value = true;
			store.dispatch("GetLaporanPembelian", sorting.value).then((response) => {
				items.value = store.getters.SlaporanPembelian;
				let sum = 0;
				items.value.forEach((element) => {
					sum += parseInt(element.total);
				});
				totalPembelian.value = sum;
				let sumhutang = 0;
				items.value.forEach((element) => {
					sumhutang += parseInt(element.hutangPembelian);
				});
				totalHutang.value = sumhutang;
				loading.value = false;
			}).catch((error) => {});
		};
		computed(() => {
			items.value = store.getters.SlaporanPembelian;
			let sum = 0;
			items.value.forEach((element) => {
				sum += parseInt(element.total);
			});
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
					rowhtml += "<td>" + item.noNota + "</td>";
					rowhtml += "<td>" + hooks(item.tglPembelian).format("DD-MM-YYYY") + "</td>";
					rowhtml += "<td>" + item.nmSupplier + "</td>";
					rowhtml += "<td>" + Number(item.subTotal).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.disc).toLocaleString() + "</td>";
					rowhtml += "<td>" + Number(item.total).toLocaleString() + "</td>";
					rowhtml += "</tr>";
					rowhtml += "</tr>";
				});
				let sum = 0;
				records.forEach((element) => {
					sum += parseInt(element.total);
				});
				rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
				rowhtml += "</tbody>";
				rowhtml += "<tfoot><tr>";
				rowhtml += "<tr><th></th><th></th><th></th><th>Total Net</th><th></th><th>" + Number(sum).toLocaleString() + "</th>";
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
		const delete_row = (item) => {
			new window.Swal({
				title: "Anda Yakin?",
				text: "Hapus Pembelian !" + item.noNota,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeletePembelian", { id: item.noNota }).then((response) => {
					bind_data();
					new window.Swal("Deleted!", "Your file has been deleted.", "success");
				}).catch((error) => {});
			});
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
				}, [createBaseVNode("span", null, "Pembelian")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
					_cache[14] || (_cache[14] = createBaseVNode("div", { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" }, [createBaseVNode("h5", null, "Daftar Pembelian")], -1)),
					createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [
						createBaseVNode("div", _hoisted_8, [createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.startDate,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
							config: { dateFormat: "d-m-Y" },
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"])]),
						createBaseVNode("div", _hoisted_9, [createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.endDate,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
							config: { dateFormat: "d-m-Y" },
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"])]),
						createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [_cache[7] || (_cache[7] = createBaseVNode("label", null, "Total Pembelian :", -1)), createBaseVNode("label", null, toDisplayString(Number(totalPembelian.value).toLocaleString()), 1)])]),
						createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[8] || (_cache[8] = createBaseVNode("label", null, "Total Hutang :", -1)), createBaseVNode("label", null, toDisplayString(Number(totalHutang.value).toLocaleString()), 1)])]),
						createBaseVNode("div", _hoisted_14, [createBaseVNode("button", {
							variant: "primary",
							class: "btn m-1 btn-primary",
							onClick: _cache[2] || (_cache[2] = ($event) => bind_data())
						}, "CARI"), createBaseVNode("button", {
							variant: "primary",
							class: "btn m-1 btn-primary",
							onClick: _cache[3] || (_cache[3] = ($event) => export_table("print"))
						}, "Print")])
					])]),
					loading.value ? (openBlock(), createElementBlock("div", _hoisted_15, _cache[9] || (_cache[9] = [
						createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1),
						createBaseVNode("div", null, null, -1)
					]))) : createCommentVNode("", true),
					createVNode(_component_v_client_table, {
						data: items.value,
						columns: columns.value,
						options: table_pembelian.value
					}, {
						tglPembelian: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tglPembelian).format("D-M-YYYY")), 1)]),
						hutangPembelian: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.hutangPembelian).toLocaleString()), 1)]),
						total: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.total).toLocaleString()), 1)]),
						typeBayar: withCtx((props) => [createTextVNode(toDisplayString(props.row.typeBayar === 0 ? "Cash" : "Kredit"), 1)]),
						action: withCtx((props) => [
							createBaseVNode("a", {
								href: "javascript:void(0);",
								onClick: ($event) => viewDetail(props.row),
								class: "me-2",
								title: "Detail"
							}, _cache[10] || (_cache[10] = [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-eye"
							}, [createBaseVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), createBaseVNode("circle", {
								cx: "12",
								cy: "12",
								r: "3"
							})], -1)]), 8, _hoisted_16),
							createBaseVNode("a", {
								href: "javascript:void(0);",
								onClick: ($event) => editnotabeli([{
									noNota: props.row.noNota,
									tglNota: props.row.tglPembelian,
									term: props.row.term,
									jthTempo: props.row.jthTempo,
									notes: props.row.notes,
									subTotal: props.row.subTotal,
									tax: props.row.tax,
									disc: props.row.disc,
									total: props.row.total,
									termPembelian: props.row.typeBayar
								}])
							}, _cache[11] || (_cache[11] = [createBaseVNode("svg", {
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
							}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_17),
							createBaseVNode("a", {
								href: "javascript:void(0);",
								onClick: ($event) => delete_row(props.row)
							}, _cache[12] || (_cache[12] = [createBaseVNode("svg", {
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
							], -1)]), 8, _hoisted_18)
						]),
						default: withCtx(() => [_cache[13] || (_cache[13] = createBaseVNode("table", { class: "custom-footer" }, [createBaseVNode("tfoot", null, [createBaseVNode("tr", null, [createBaseVNode("td", null, "Total"), createBaseVNode("td", null, "34235")])])], -1))]),
						_: 1
					}, 8, [
						"data",
						"columns",
						"options"
					])
				])])])]),
				showDetailModal.value ? (openBlock(), createElementBlock("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [
					createBaseVNode("div", _hoisted_22, [createBaseVNode("h5", _hoisted_23, "Detail Pembelian " + toDisplayString(detailHeader.value.noNota), 1), createBaseVNode("button", {
						type: "button",
						class: "btn-close",
						onClick: _cache[4] || (_cache[4] = ($event) => showDetailModal.value = false)
					})]),
					createBaseVNode("div", _hoisted_24, [
						createBaseVNode("div", _hoisted_25, [
							createBaseVNode("div", _hoisted_26, [_cache[15] || (_cache[15] = createBaseVNode("strong", null, "No Nota:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.noNota), 1)]),
							createBaseVNode("div", _hoisted_27, [_cache[16] || (_cache[16] = createBaseVNode("strong", null, "Tanggal:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.tglPembelian ? unref(hooks)(detailHeader.value.tglPembelian).format("DD-MM-YYYY") : ""), 1)]),
							createBaseVNode("div", _hoisted_28, [_cache[17] || (_cache[17] = createBaseVNode("strong", null, "Supplier:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.nmSupplier), 1)])
						]),
						createBaseVNode("div", _hoisted_29, [
							createBaseVNode("div", _hoisted_30, [_cache[18] || (_cache[18] = createBaseVNode("strong", null, "Type Bayar:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.typeBayar === 0 ? "Cash" : "Kredit"), 1)]),
							createBaseVNode("div", _hoisted_31, [_cache[19] || (_cache[19] = createBaseVNode("strong", null, "Term:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.term), 1)]),
							createBaseVNode("div", _hoisted_32, [_cache[20] || (_cache[20] = createBaseVNode("strong", null, "Jth Tempo:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.jthTempo ? unref(hooks)(detailHeader.value.jthTempo).format("DD-MM-YYYY") : ""), 1)])
						]),
						createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [_cache[21] || (_cache[21] = createBaseVNode("strong", null, "Notes:", -1)), createTextVNode(" " + toDisplayString(detailHeader.value.notes), 1)])]),
						createBaseVNode("div", _hoisted_35, [createBaseVNode("table", _hoisted_36, [_cache[22] || (_cache[22] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
							createBaseVNode("th", null, "Code"),
							createBaseVNode("th", null, "Produk"),
							createBaseVNode("th", { class: "text-end" }, "Qty"),
							createBaseVNode("th", { class: "text-end" }, "Satuan"),
							createBaseVNode("th", { class: "text-end" }, "Harga"),
							createBaseVNode("th", { class: "text-end" }, "Total")
						])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(detailItems.value, (item, index) => {
							return openBlock(), createElementBlock("tr", { key: index }, [
								createBaseVNode("td", null, toDisplayString(item.kdBarang), 1),
								createBaseVNode("td", null, toDisplayString(item.nmBarang), 1),
								createBaseVNode("td", _hoisted_37, toDisplayString(item.qty), 1),
								createBaseVNode("td", _hoisted_38, toDisplayString(item.satuanBarang), 1),
								createBaseVNode("td", _hoisted_39, toDisplayString(Number(item.hrgBeli || item.hrgPokok || item.harga).toLocaleString()), 1),
								createBaseVNode("td", _hoisted_40, toDisplayString(Number(item.total).toLocaleString()), 1)
							]);
						}), 128))])])]),
						createBaseVNode("div", _hoisted_41, [
							createBaseVNode("div", _hoisted_42, [_cache[23] || (_cache[23] = createBaseVNode("strong", null, "Sub Total:", -1)), createTextVNode(" " + toDisplayString(Number(detailHeader.value.subTotal).toLocaleString()), 1)]),
							createBaseVNode("div", _hoisted_43, [_cache[24] || (_cache[24] = createBaseVNode("strong", null, "Tax:", -1)), createTextVNode(" " + toDisplayString(Number(detailHeader.value.tax).toLocaleString()), 1)]),
							createBaseVNode("div", _hoisted_44, [_cache[25] || (_cache[25] = createBaseVNode("strong", null, "Disc:", -1)), createTextVNode(" " + toDisplayString(Number(detailHeader.value.disc).toLocaleString()), 1)])
						]),
						createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [_cache[26] || (_cache[26] = createBaseVNode("strong", null, "Grand Total: ", -1)), createTextVNode(toDisplayString(Number(detailHeader.value.total).toLocaleString()), 1)])])
					]),
					createBaseVNode("div", _hoisted_47, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary",
						onClick: _cache[5] || (_cache[5] = ($event) => showDetailModal.value = false)
					}, "Close")])
				])])])) : createCommentVNode("", true)
			]);
		};
	}
};
//#endregion
export { _sfc_main as default };
