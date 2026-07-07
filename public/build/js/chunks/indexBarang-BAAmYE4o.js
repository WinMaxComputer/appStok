import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { E as createVNode, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, u as vModelSelect, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as _plugin_vue_export_helper_default, o as useRouter, s as useStore } from "../../assets/main-C-Jy3aFl.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-CP6BUbJD.js";
import { t as D } from "./usemodal-vue3-CTQprEhe.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-5wp3Xs9y.js";
//#region resources/js/src/views/master/indexBarang.vue?vue&type=style&index=0&scoped=eb410a42&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
init_jspdf_es_min();
require_jspdf_plugin_autotable();
//#endregion
//#region resources/js/src/views/master/indexBarang.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_7 = ["onClick"];
var _hoisted_8 = ["onClick"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
	key: 0,
	class: "modal d-block",
	tabindex: "-1",
	role: "dialog",
	style: { "background": "rgba(0,0,0,0.5)" }
};
var _hoisted_11 = {
	class: "modal-dialog modal-xl modal-dialog-centered",
	role: "document"
};
var _hoisted_12 = { class: "modal-content" };
var _hoisted_13 = { class: "modal-header" };
var _hoisted_14 = { class: "modal-body" };
var _hoisted_15 = { class: "row mb-3" };
var _hoisted_16 = { class: "col-md-4" };
var _hoisted_17 = { class: "col-md-4" };
var _hoisted_18 = { class: "col-md-4" };
var _hoisted_19 = { class: "row mb-3 align-items-end" };
var _hoisted_20 = { class: "col-md-3" };
var _hoisted_21 = { class: "col-md-3" };
var _hoisted_22 = { class: "col-md-6 d-flex gap-2 justify-content-md-end" };
var _hoisted_23 = ["disabled"];
var _hoisted_24 = {
	key: 0,
	class: "text-center py-4"
};
var _hoisted_25 = {
	key: 1,
	class: "table-responsive"
};
var _hoisted_26 = { class: "table table-bordered" };
var _hoisted_27 = { class: "text-end" };
var _hoisted_28 = { class: "text-end" };
var _hoisted_29 = { class: "text-end" };
var _hoisted_30 = { class: "text-end" };
var _hoisted_31 = { class: "text-end" };
var _hoisted_32 = { class: "text-end" };
var _hoisted_33 = { class: "text-end" };
var _hoisted_34 = { class: "text-end" };
var _hoisted_35 = { class: "modal-footer" };
var _hoisted_36 = { class: "row" };
var _hoisted_37 = { class: "col-md" };
var _hoisted_38 = { class: "col-md" };
var _hoisted_39 = { class: "col-md" };
var _hoisted_40 = { class: "row" };
var _hoisted_41 = { class: "col-md" };
var _hoisted_42 = ["value"];
var _hoisted_43 = { class: "col-md" };
var _hoisted_44 = { class: "col-md" };
var _hoisted_45 = { class: "row" };
var _hoisted_46 = { class: "col-md" };
var _hoisted_47 = { class: "col-md" };
var _hoisted_48 = {
	key: 0,
	class: "row"
};
var _hoisted_49 = { class: "col-md" };
var _hoisted_50 = { class: "col-md" };
var _hoisted_51 = { class: "row" };
var _hoisted_52 = { class: "col-md" };
var _hoisted_53 = ["value"];
var _hoisted_54 = { class: "col-md" };
var _hoisted_55 = ["value"];
var _hoisted_56 = { class: "col-md" };
var _hoisted_57 = ["value"];
var _hoisted_58 = { class: "col-md" };
var _hoisted_59 = ["value"];
var _hoisted_60 = {
	key: 2,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_61 = { class: "modal-body" };
var _hoisted_62 = { class: "row" };
var _hoisted_63 = { class: "col-md" };
var _hoisted_64 = { class: "col-md" };
var _hoisted_65 = { class: "col-md" };
var _hoisted_66 = { class: "row" };
var _hoisted_67 = { class: "col-md" };
var _hoisted_68 = ["value"];
var _hoisted_69 = { class: "col-md" };
var _hoisted_70 = { class: "col-md" };
var _hoisted_71 = { class: "row" };
var _hoisted_72 = { class: "col-md" };
var _hoisted_73 = { class: "col-md" };
var _hoisted_74 = {
	key: 0,
	class: "row"
};
var _hoisted_75 = { class: "col-md" };
var _hoisted_76 = { class: "col-md" };
var _hoisted_77 = { class: "row" };
var _hoisted_78 = { class: "col-md" };
var _hoisted_79 = ["value"];
var _hoisted_80 = { class: "col-md" };
var _hoisted_81 = ["value"];
var _hoisted_82 = { class: "col-md" };
var _hoisted_83 = ["value"];
var _hoisted_84 = { class: "col-md" };
var _hoisted_85 = ["value"];
var indexBarang_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "indexBarang",
	setup(__props) {
		useMeta({ title: "Data Barang" });
		const store = useStore();
		useRouter();
		const loading = ref(false);
		const columns = ref([
			"kdBarang",
			"barCode",
			"nmBarang",
			"hrgPokok",
			"hrgJual",
			"namaKtg",
			"stokPersediaan",
			"kartuStok",
			"action"
		]);
		const modalinput = ref(false);
		const items = ref([]);
		const table_option = ref({
			perPage: 20,
			perPageValues: [
				20,
				100,
				150,
				200
			],
			perPageSelect: true,
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
				"namaKtg"
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
		const isVisible = ref(false);
		const isVisibleTambah = ref(false);
		const edit = ref({});
		const isKartuStokVisible = ref(false);
		const kartuStokLoading = ref(false);
		const kartuStokItems = ref([]);
		const kartuStokHeader = ref({
			kdBarang: "",
			nmBarang: "",
			startDate: "",
			endDate: ""
		});
		const kartuStokSummary = ref({
			unitBeli: 0,
			totalBeli: 0,
			unitJual: 0,
			totalJual: 0,
			hpp: 0
		});
		const kartuStokPickerConfig = ref({
			dateFormat: "d-m-Y",
			static: true
		});
		const resetInputForm = () => {
			input.value = {
				kdB: kdbrg.value,
				kdktg: "",
				nmB: "",
				satuanB: "",
				hrgBeli: "",
				hrgJual: "",
				merek: "",
				barcode: "",
				qtyMin: "1",
				qtyMax: "999",
				acc_id: "",
				acchpp: "",
				accpersediaan: "",
				accbiaya: ""
			};
		};
		const openModal = async () => {
			await getkd();
			resetInputForm();
			isVisibleTambah.value = true;
		};
		const kdbrg = ref([]);
		const ktgs = ref([]);
		const input = ref({
			kdB: "",
			kdktg: "",
			nmB: "",
			satuanB: "",
			hrgBeli: "",
			hrgJual: "",
			merek: "",
			qtyMin: "1",
			qtyMax: "999",
			acc_id: "",
			acchpp: "",
			accpersediaan: "",
			accbiaya: ""
		});
		onMounted(() => {
			kartuStokPickerConfig.value = {
				dateFormat: "d-m-Y",
				static: true
			};
			bind_data();
			GetCoaHpp();
			getKtg();
			getkd();
			window.history.pushState(null, "", window.location.href);
			window.addEventListener("popstate", function(event) {
				window.history.pushState(null, "", window.location.href);
			});
		});
		const bind_data = () => {
			loading.value = true;
			store.dispatch("GetBarang").then((response) => {
				items.value = store.getters.StateBarang;
				loading.value = false;
			}).catch((error) => {
				loading.value = false;
			});
		};
		const accs = ref([]);
		const GetCoaHpp = async () => {
			await store.dispatch("GetCoaList").then((response) => {
				accs.value = store.getters.StateCoaList;
			}).catch((error) => {});
		};
		const getKtg = async () => {
			await store.dispatch("GetKategori").then((response) => {
				ktgs.value = store.getters.StateKategori;
			}).catch((error) => {});
		};
		const getkd = async () => {
			await store.dispatch("GetNoBarang").then((response) => {
				kdbrg.value = store.getters.NoBarang;
				input.value.kdB = kdbrg.value;
			}).catch((error) => {});
		};
		const simpan_barang = () => {
			if (input.value.kdB == "" || input.value.nmB == "" || input.value.satuanB == "" || input.value.kdktg == "" || input.value.hrgBeli == "" || input.value.hrgJual == "" || input.value.merek == "" || input.value.acc_id == "" || input.value.acchpp == "" || input.value.accpersediaan == "" || input.value.accbiaya == "") {
				new window.Swal({
					title: "Perhatian",
					text: "Mohon lengkapi data yang diperlukan.",
					type: "warning",
					padding: "2em"
				});
				return;
			} else {
				loading.value = true;
				const isi = input.value;
				store.dispatch("CreateBarang", isi).then(async (response) => {
					loading.value = false;
					bind_data();
					await getkd();
					resetInputForm();
				}).catch((error) => {
					console.log("error: ", error);
				});
			}
		};
		const edit_barang = () => {
			loading.value = true;
			const isi = edit.value;
			store.dispatch("CreateBarang", isi).then((response) => {
				bind_data();
				getkd();
				isVisible.value = false;
				loading.value = false;
			}).catch((error) => {
				loading.value = false;
			});
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
		const viewstok = async (item) => {
			kartuStokHeader.value = {
				kdBarang: item.kdBarang,
				nmBarang: item.nmBarang,
				startDate: sorting.value.startDate,
				endDate: sorting.value.endDate
			};
			await loadKartuStok(item.kdBarang, kartuStokHeader.value.startDate, kartuStokHeader.value.endDate);
			isKartuStokVisible.value = true;
		};
		const cariKartuStok = async () => {
			if (!kartuStokHeader.value.kdBarang) return;
			await loadKartuStok(kartuStokHeader.value.kdBarang, kartuStokHeader.value.startDate, kartuStokHeader.value.endDate);
		};
		const loadKartuStok = async (kdBarang, startDate, endDate) => {
			kartuStokLoading.value = true;
			try {
				await store.dispatch("GetKartuStok", {
					startDate,
					endDate,
					kdBarang
				});
				const data = store.getters.StateListKartuStok || [];
				kartuStokItems.value = data;
				const summary = data.reduce((accumulator, current) => {
					accumulator.unitBeli += parseInt(current.unit_beli || 0);
					accumulator.totalBeli += parseInt(current.total_beli || 0);
					accumulator.unitJual += parseInt(current.unit_jual || 0);
					accumulator.totalJual += parseInt(current.total_jual || 0);
					return accumulator;
				}, {
					unitBeli: 0,
					totalBeli: 0,
					unitJual: 0,
					totalJual: 0
				});
				kartuStokSummary.value = {
					...summary,
					hpp: summary.unitBeli > 0 ? summary.totalBeli / summary.unitBeli : 0
				};
			} catch (error) {
				console.log("error: ", error);
			} finally {
				kartuStokLoading.value = false;
			}
		};
		const view_row = (item) => {
			modalinput.value = true;
			isVisible.value = true;
			edit.value = {
				kdB: item.kdBarang,
				kdktg: item.ktgBarang,
				barcode: item.barCode,
				nmB: item.nmBarang,
				satuanB: item.satuanBarang,
				hrgBeli: item.hrgPokok,
				hrgJual: item.hrgJual,
				merek: item.merek,
				qtyMin: item.qtyMin,
				qtyMax: item.qtyMax,
				acc_id: item.accid,
				acchpp: item.accid_hpp,
				accpersediaan: item.accid_persediaan,
				accbiaya: item.accid_biaya
			};
		};
		const delete_row = (item) => {
			modalinput.value = true;
			store.dispatch("CheckBarangPernahJual", { kdBarang: item.kdBarang }).then((response) => {
				if (response.data.exist == true) new window.Swal({
					title: "Anda Yahin?",
					text: "Nama Barang !" + item.nmBarang + " sudah pernah tertransaksikan. harap hapus dulu transaksi yang ada.",
					type: "warning",
					showCancelButton: true,
					padding: "2em"
				}).then((result) => {
					if (result.isConfirmed) {} else if (result.dismiss === window.Swal.DismissReason.cancel) {} else if (result.isDenied) {}
				});
				else new window.Swal({
					title: "Anda Yakin?",
					text: "Hapus Nama Barang !" + item.nmBarang,
					type: "warning",
					showCancelButton: true,
					confirmButtonText: "Delete",
					padding: "2em"
				}).then((result) => {
					if (result.isConfirmed) store.dispatch("DeleteBarang", item.id).then((response) => {
						bind_data();
						new window.Swal("Deleted!", "Your file has been deleted.", "success");
					}).catch((error) => {});
				});
			}).catch((error) => {});
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[36] || (_cache[36] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Daftar")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Barang")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [
					createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						onClick: openModal
					}, "Tambah"),
					createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						onClick: _cache[0] || (_cache[0] = ($event) => export_table("print"))
					}, "Print"),
					createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						onClick: _cache[1] || (_cache[1] = ($event) => export_table("pdf"))
					}, "PDF")
				]), createVNode(_component_v_client_table, {
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					hrgJual: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.hrgJual).toLocaleString()), 1)]),
					hrgPokok: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.hrgPokok).toLocaleString()), 1)]),
					kartuStok: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => viewstok(props.row),
						title: "Lihat Kartu Stok"
					}, _cache[37] || (_cache[37] = [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-eye text-primary"
					}, [createBaseVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), createBaseVNode("circle", {
						cx: "12",
						cy: "12",
						r: "3"
					})], -1)]), 8, _hoisted_7)]),
					action: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => view_row(props.row)
					}, _cache[38] || (_cache[38] = [createBaseVNode("svg", {
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
					}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_8), createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => delete_row(props.row)
					}, _cache[39] || (_cache[39] = [createBaseVNode("svg", {
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
					], -1)]), 8, _hoisted_9)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])])])]),
				isKartuStokVisible.value ? (openBlock(), createElementBlock("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [
					createBaseVNode("div", _hoisted_13, [_cache[40] || (_cache[40] = createBaseVNode("h5", { class: "modal-title" }, "Detail Kartu Stok", -1)), createBaseVNode("button", {
						type: "button",
						class: "btn-close",
						onClick: _cache[2] || (_cache[2] = ($event) => isKartuStokVisible.value = false)
					})]),
					createBaseVNode("div", _hoisted_14, [
						createBaseVNode("div", _hoisted_15, [
							createBaseVNode("div", _hoisted_16, [_cache[41] || (_cache[41] = createBaseVNode("strong", null, "Kode Barang:", -1)), createTextVNode(" " + toDisplayString(kartuStokHeader.value.kdBarang), 1)]),
							createBaseVNode("div", _hoisted_17, [_cache[42] || (_cache[42] = createBaseVNode("strong", null, "Nama Barang:", -1)), createTextVNode(" " + toDisplayString(kartuStokHeader.value.nmBarang), 1)]),
							createBaseVNode("div", _hoisted_18, [_cache[43] || (_cache[43] = createBaseVNode("strong", null, "Periode:", -1)), createTextVNode(" " + toDisplayString(kartuStokHeader.value.startDate) + " sd " + toDisplayString(kartuStokHeader.value.endDate), 1)])
						]),
						createBaseVNode("div", _hoisted_19, [
							createBaseVNode("div", _hoisted_20, [_cache[44] || (_cache[44] = createBaseVNode("label", { class: "form-label" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
								modelValue: kartuStokHeader.value.startDate,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => kartuStokHeader.value.startDate = $event),
								config: kartuStokPickerConfig.value,
								class: "form-control form-control-sm"
							}, null, 8, ["modelValue", "config"])]),
							createBaseVNode("div", _hoisted_21, [_cache[45] || (_cache[45] = createBaseVNode("label", { class: "form-label" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
								modelValue: kartuStokHeader.value.endDate,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => kartuStokHeader.value.endDate = $event),
								config: kartuStokPickerConfig.value,
								class: "form-control form-control-sm"
							}, null, 8, ["modelValue", "config"])]),
							createBaseVNode("div", _hoisted_22, [createBaseVNode("button", {
								class: "btn btn-primary",
								onClick: cariKartuStok,
								disabled: kartuStokLoading.value
							}, "Cari", 8, _hoisted_23)])
						]),
						kartuStokLoading.value ? (openBlock(), createElementBlock("div", _hoisted_24, _cache[46] || (_cache[46] = [createBaseVNode("h6", null, "Loading detail kartu stok...", -1)]))) : (openBlock(), createElementBlock("div", _hoisted_25, [createBaseVNode("table", _hoisted_26, [
							_cache[48] || (_cache[48] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
								createBaseVNode("th", null, "Tanggal"),
								createBaseVNode("th", { class: "text-end" }, "Qty Beli"),
								createBaseVNode("th", { class: "text-end" }, "Nilai Beli"),
								createBaseVNode("th", { class: "text-end" }, "Qty Jual"),
								createBaseVNode("th", { class: "text-end" }, "Nilai Jual")
							])], -1)),
							createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(kartuStokItems.value, (item) => {
								return openBlock(), createElementBlock("tr", { key: item.id || `${item.tgl}-${item.unit_beli}-${item.unit_jual}` }, [
									createBaseVNode("td", null, toDisplayString(unref(hooks)(item.tgl).format("D-M-YYYY")), 1),
									createBaseVNode("td", _hoisted_27, toDisplayString(Number(item.unit_beli).toLocaleString()), 1),
									createBaseVNode("td", _hoisted_28, toDisplayString(Number(item.total_beli).toLocaleString()), 1),
									createBaseVNode("td", _hoisted_29, toDisplayString(Number(item.unit_jual).toLocaleString()), 1),
									createBaseVNode("td", _hoisted_30, toDisplayString(Number(item.total_jual).toLocaleString()), 1)
								]);
							}), 128))]),
							createBaseVNode("tfoot", null, [createBaseVNode("tr", null, [
								_cache[47] || (_cache[47] = createBaseVNode("th", null, "Total", -1)),
								createBaseVNode("th", _hoisted_31, toDisplayString(Number(kartuStokSummary.value.unitBeli).toLocaleString()), 1),
								createBaseVNode("th", _hoisted_32, toDisplayString(Number(kartuStokSummary.value.totalBeli).toLocaleString()), 1),
								createBaseVNode("th", _hoisted_33, toDisplayString(Number(kartuStokSummary.value.unitJual).toLocaleString()), 1),
								createBaseVNode("th", _hoisted_34, toDisplayString(Number(kartuStokSummary.value.totalJual).toLocaleString()), 1)
							])])
						])]))
					]),
					createBaseVNode("div", _hoisted_35, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary",
						onClick: _cache[5] || (_cache[5] = ($event) => isKartuStokVisible.value = false)
					}, "Close")])
				])])])) : createCommentVNode("", true),
				loading.value === false ? (openBlock(), createBlock(unref(D), {
					key: 1,
					visible: isVisible.value,
					"onUpdate:visible": _cache[20] || (_cache[20] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "Edit Data Barang",
					showCancelButton: false,
					cancelButton: {
						text: "cancel",
						onclick: () => {
							isVisible.value = false;
						},
						loading: false
					},
					okButton: {
						text: "SAVE",
						onclick: () => {
							edit_barang();
						},
						loading: false
					},
					width: "80%"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_36, [
							createBaseVNode("div", _hoisted_37, [_cache[49] || (_cache[49] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => edit.value.kdB = $event),
								class: "form-control",
								placeholder: "Kode",
								disabled: ""
							}, null, 512), [[vModelText, edit.value.kdB]])]),
							createBaseVNode("div", _hoisted_38, [_cache[50] || (_cache[50] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => edit.value.nmB = $event),
								class: "form-control",
								placeholder: "Nama Barang"
							}, null, 512), [[vModelText, edit.value.nmB]])]),
							createBaseVNode("div", _hoisted_39, [_cache[51] || (_cache[51] = createBaseVNode("label", { for: "inputState" }, "Satuan", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => edit.value.satuanB = $event),
								class: "form-control",
								placeholder: "Satuan"
							}, null, 512), [[vModelText, edit.value.satuanB]])])
						]),
						createBaseVNode("div", _hoisted_40, [
							createBaseVNode("div", _hoisted_41, [_cache[52] || (_cache[52] = createBaseVNode("label", { for: "inputState" }, "Kategori", -1)), withDirectives(createBaseVNode("select", {
								class: "form-select",
								"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => edit.value.kdktg = $event)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(ktgs.value, (ktg) => {
								return openBlock(), createElementBlock("option", {
									value: ktg.kodeKtg,
									key: ktg.id
								}, toDisplayString(ktg.namaKtg), 9, _hoisted_42);
							}), 128))], 512), [[vModelSelect, edit.value.kdktg]])]),
							createBaseVNode("div", _hoisted_43, [_cache[53] || (_cache[53] = createBaseVNode("label", { for: "inputState" }, "Harga Beli", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => edit.value.hrgBeli = $event),
								class: "form-control",
								placeholder: "Harga Beli",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, edit.value.hrgBeli]])]),
							createBaseVNode("div", _hoisted_44, [_cache[54] || (_cache[54] = createBaseVNode("label", { for: "inputState" }, "Harga Jual", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => edit.value.hrgJual = $event),
								class: "form-control",
								placeholder: "Harga Jual",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, edit.value.hrgJual]])])
						]),
						createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [_cache[55] || (_cache[55] = createBaseVNode("label", { for: "inputState" }, "Merek", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => edit.value.merek = $event),
							class: "form-control",
							placeholder: "Merek"
						}, null, 512), [[vModelText, edit.value.merek]])]), createBaseVNode("div", _hoisted_47, [_cache[56] || (_cache[56] = createBaseVNode("label", { for: "inputState" }, "Barcode", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => edit.value.barcode = $event),
							class: "form-control",
							placeholder: "Barcode"
						}, null, 512), [[vModelText, edit.value.barcode]])])]),
						edit.value.qtyMax == null ? (openBlock(), createElementBlock("div", _hoisted_48, [createBaseVNode("div", _hoisted_49, [_cache[57] || (_cache[57] = createBaseVNode("label", { for: "inputState" }, "Qty Min", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => edit.value.qtyMin = $event),
							class: "form-control",
							placeholder: "Qty Min",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, edit.value.qtyMin]])]), createBaseVNode("div", _hoisted_50, [_cache[58] || (_cache[58] = createBaseVNode("label", { for: "inputState" }, "Qty Max", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => edit.value.qtyMax = $event),
							class: "form-control",
							placeholder: "Qty Max",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, edit.value.qtyMax]])])])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_51, [
							createBaseVNode("div", _hoisted_52, [_cache[59] || (_cache[59] = createBaseVNode("label", { for: "inputState" }, "Akun Penjualan", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => edit.value.acc_id = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("41")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id
								}, toDisplayString(ac.name), 9, _hoisted_53);
							}), 128))], 512), [[vModelSelect, edit.value.acc_id]])]),
							createBaseVNode("div", _hoisted_54, [_cache[60] || (_cache[60] = createBaseVNode("label", { for: "inputState" }, "Akun Hpp", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => edit.value.acchpp = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("51")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id
								}, toDisplayString(ac.name), 9, _hoisted_55);
							}), 128))], 512), [[vModelSelect, edit.value.acchpp]])]),
							createBaseVNode("div", _hoisted_56, [_cache[61] || (_cache[61] = createBaseVNode("label", { for: "inputState" }, "Akun Persediaan", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => edit.value.accpersediaan = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("116")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_57);
							}), 128))], 512), [[vModelSelect, edit.value.accpersediaan]])]),
							createBaseVNode("div", _hoisted_58, [_cache[62] || (_cache[62] = createBaseVNode("label", { for: "inputState" }, "Akun Tekor", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => edit.value.accbiaya = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("52")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_59);
							}), 128))], 512), [[vModelSelect, edit.value.accbiaya]])])
						])
					]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				])) : createCommentVNode("", true),
				loading.value === true ? (openBlock(), createElementBlock("div", _hoisted_60, _cache[63] || (_cache[63] = [
					createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1)
				]))) : createCommentVNode("", true),
				loading.value === false ? (openBlock(), createBlock(unref(D), {
					key: 3,
					visible: isVisibleTambah.value,
					"onUpdate:visible": _cache[35] || (_cache[35] = ($event) => isVisibleTambah.value = $event),
					draggable: true,
					title: "Tambah Data Barang",
					showCancelButton: false,
					cancelButton: {
						text: "cancel",
						onclick: () => {
							isVisibleTambah.value = false;
						},
						loading: false
					},
					okButton: {
						text: "SAVE",
						onclick: () => {
							simpan_barang();
						},
						loading: false
					},
					width: "80%"
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_61, [createBaseVNode("form", null, [
						createBaseVNode("div", _hoisted_62, [
							createBaseVNode("div", _hoisted_63, [_cache[64] || (_cache[64] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => input.value.kdB = $event),
								class: "form-control",
								placeholder: "Kode",
								disabled: ""
							}, null, 512), [[vModelText, input.value.kdB]])]),
							createBaseVNode("div", _hoisted_64, [_cache[65] || (_cache[65] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => input.value.nmB = $event),
								class: "form-control",
								placeholder: "Nama Barang"
							}, null, 512), [[vModelText, input.value.nmB]])]),
							createBaseVNode("div", _hoisted_65, [_cache[66] || (_cache[66] = createBaseVNode("label", { for: "inputState" }, "Satuan", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => input.value.satuanB = $event),
								class: "form-control",
								placeholder: "Satuan"
							}, null, 512), [[vModelText, input.value.satuanB]])])
						]),
						createBaseVNode("div", _hoisted_66, [
							createBaseVNode("div", _hoisted_67, [_cache[67] || (_cache[67] = createBaseVNode("label", { for: "inputState" }, "Kategori", -1)), withDirectives(createBaseVNode("select", {
								class: "form-select",
								"onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => input.value.kdktg = $event)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(ktgs.value, (ktg) => {
								return openBlock(), createElementBlock("option", {
									value: ktg.kodeKtg,
									key: ktg.id
								}, toDisplayString(ktg.namaKtg), 9, _hoisted_68);
							}), 128))], 512), [[vModelSelect, input.value.kdktg]])]),
							createBaseVNode("div", _hoisted_69, [_cache[68] || (_cache[68] = createBaseVNode("label", { for: "inputState" }, "Harga Beli", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => input.value.hrgBeli = $event),
								class: "form-control",
								placeholder: "Harga Beli",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, input.value.hrgBeli]])]),
							createBaseVNode("div", _hoisted_70, [_cache[69] || (_cache[69] = createBaseVNode("label", { for: "inputState" }, "Harga Jual", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => input.value.hrgJual = $event),
								class: "form-control",
								placeholder: "Harga Jual",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, input.value.hrgJual]])])
						]),
						createBaseVNode("div", _hoisted_71, [createBaseVNode("div", _hoisted_72, [_cache[70] || (_cache[70] = createBaseVNode("label", { for: "inputState" }, "Merek", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => input.value.merek = $event),
							class: "form-control",
							placeholder: "Merek"
						}, null, 512), [[vModelText, input.value.merek]])]), createBaseVNode("div", _hoisted_73, [_cache[71] || (_cache[71] = createBaseVNode("label", { for: "inputState" }, "Barcode", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => input.value.barcode = $event),
							class: "form-control",
							placeholder: "Barcode"
						}, null, 512), [[vModelText, input.value.barcode]])])]),
						input.value.qtyMax == null ? (openBlock(), createElementBlock("div", _hoisted_74, [createBaseVNode("div", _hoisted_75, [_cache[72] || (_cache[72] = createBaseVNode("label", { for: "inputState" }, "Qty Min", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => input.value.qtyMin = $event),
							class: "form-control",
							placeholder: "Qty Min",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, input.value.qtyMin]])]), createBaseVNode("div", _hoisted_76, [_cache[73] || (_cache[73] = createBaseVNode("label", { for: "inputState" }, "Qty Max", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => input.value.qtyMax = $event),
							class: "form-control",
							placeholder: "Qty Max",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, input.value.qtyMax]])])])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_77, [
							createBaseVNode("div", _hoisted_78, [_cache[74] || (_cache[74] = createBaseVNode("label", { for: "inputState" }, "Akun Penjualan", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => input.value.acc_id = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("41")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_79);
							}), 128))], 512), [[vModelSelect, input.value.acc_id]])]),
							createBaseVNode("div", _hoisted_80, [_cache[75] || (_cache[75] = createBaseVNode("label", { for: "inputState" }, "Akun Hpp", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => input.value.acchpp = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("51")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_81);
							}), 128))], 512), [[vModelSelect, input.value.acchpp]])]),
							createBaseVNode("div", _hoisted_82, [_cache[76] || (_cache[76] = createBaseVNode("label", { for: "inputState" }, "Akun Persediaan", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => input.value.accpersediaan = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("116")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_83);
							}), 128))], 512), [[vModelSelect, input.value.accpersediaan]])]),
							createBaseVNode("div", _hoisted_84, [_cache[77] || (_cache[77] = createBaseVNode("label", { for: "inputState" }, "Akun Tekor", -1)), withDirectives(createBaseVNode("select", {
								id: "inputState",
								"onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => input.value.accbiaya = $event),
								class: "form-select"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value.filter((ac) => ac.acc_id.toString().startsWith("52")), (ac) => {
								return openBlock(), createElementBlock("option", {
									value: ac.acc_id,
									key: ac.acc_id,
									selected: ""
								}, toDisplayString(ac.name), 9, _hoisted_85);
							}), 128))], 512), [[vModelSelect, input.value.accbiaya]])])
						])
					])])]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				])) : createCommentVNode("", true)
			])]);
		};
	}
}, [["__scopeId", "data-v-eb410a42"]]);
//#endregion
export { indexBarang_default as default };
