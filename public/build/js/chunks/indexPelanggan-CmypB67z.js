import { E as createVNode, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, et as init_reactivity_esm_bundler, g as Teleport, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, v as computed, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as useStore } from "../../assets/main-DqXy1ygy.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-BHmUnYgJ.js";
import { t as D } from "./usemodal-vue3-CTQprEhe.js";
//#region resources/js/src/views/master/indexPelanggan.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_7 = ["onClick"];
var _hoisted_8 = ["onClick"];
var _hoisted_9 = { class: "row mb-4" };
var _hoisted_10 = { class: "col-sm-4" };
var _hoisted_11 = { class: "col-sm" };
var _hoisted_12 = { class: "col-sm" };
var _hoisted_13 = { class: "row mb-4" };
var _hoisted_14 = { class: "col-sm" };
var _hoisted_15 = {
	class: "modal fade",
	id: "exampleModalCenter",
	tabindex: "-1",
	role: "dialog",
	"aria-labelledby": "exampleModalLabel",
	"aria-hidden": "true"
};
var _hoisted_16 = {
	class: "modal-dialog modal-dialog-centered modal-lg",
	role: "document"
};
var _hoisted_17 = { class: "modal-content" };
var _hoisted_18 = { class: "modal-body" };
var _hoisted_19 = { class: "row mb-4" };
var _hoisted_20 = { class: "col-sm-4" };
var _hoisted_21 = { class: "col-sm" };
var _hoisted_22 = { class: "col-sm" };
var _hoisted_23 = { class: "row mb-8" };
var _hoisted_24 = { class: "col-sm" };
var _hoisted_25 = { class: "modal-footer" };
var _sfc_main = {
	__name: "indexPelanggan",
	setup(__props) {
		useMeta({ title: "Daftar Pelanggan" });
		const store = useStore();
		const columns = ref([
			"kdPelanggan",
			"nmPelanggan",
			"almtPelanggan",
			"noHpPelanggan",
			"deposit",
			"action"
		]);
		const modalinput = ref(false);
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
			sortable: ["kdPelanggan", "nmPelanggan"],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const isVisible = ref(false);
		const edit = ref({});
		const kdPelanggan = ref([]);
		const input = ref({
			kdPelanggan,
			nmPelanggan: "",
			almtPelanggan: "",
			noHpPelanggan: ""
		});
		onMounted(() => {
			bind_data();
			getkd();
		});
		const bind_data = () => {
			store.dispatch("GetPelanggan").then((response) => {
				items.value = store.getters.StatePelanggan;
			}).catch((error) => {});
		};
		computed(() => {
			kdbrg.value = store.getters.NoBarang;
		});
		const getkd = async () => {
			await store.dispatch("GetNoPelanggan").then((response) => {
				kdPelanggan.value = store.getters.NoPelanggan;
			}).catch((error) => {});
		};
		const simpan_pelanggan = () => {
			const isi = input.value;
			store.dispatch("CreatePelanggan", isi).then((response) => {
				bind_data();
				getkd();
				modalinput.value = false;
				new window.Swal("Success!", "Your file has been saved.", "success");
			}).catch((error) => {});
		};
		const edit_pelanggan = () => {
			const isi = edit.value;
			store.dispatch("CreatePelanggan", isi).then((response) => {
				bind_data();
				getkd();
				isVisible.value = false;
				new window.Swal("Success!", "Your file has been saved.", "success");
			}).catch((error) => {});
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
		const view_row = (item) => {
			modalinput.value = true;
			isVisible.value = true;
			edit.value = {
				kdPelanggan: item.kdPelanggan,
				nmPelanggan: item.nmPelanggan,
				almtPelanggan: item.almtPelanggan,
				noHpPelanggan: item.noHpPelanggan
			};
		};
		const delete_row = (item) => {
			modalinput.value = true;
			new window.Swal({
				title: "Anda Yahin?",
				text: "Hapus Nama Pelanggan !" + item.nmPelanggan,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeletePelanggan", item.id).then((response) => {
					bind_data();
					new window.Swal("Deleted!", "Your file has been deleted.", "success");
				}).catch((error) => {});
			});
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[12] || (_cache[12] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Daftar")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Pelanggan")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [
					_cache[13] || (_cache[13] = createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						"data-bs-toggle": "modal",
						"data-bs-target": "#exampleModalCenter"
					}, "Tambah", -1)),
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
					deposit: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.deposit).toLocaleString()), 1)]),
					action: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => view_row(props.row)
					}, _cache[14] || (_cache[14] = [createBaseVNode("svg", {
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
					}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_7), createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => delete_row(props.row)
					}, _cache[15] || (_cache[15] = [createBaseVNode("svg", {
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
					], -1)]), 8, _hoisted_8)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "Edit Data Pelanggan",
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
							edit_pelanggan();
						},
						loading: false
					},
					width: "60%"
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_9, [
						createBaseVNode("div", _hoisted_10, [_cache[16] || (_cache[16] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => edit.value.kdPelanggan = $event),
							class: "form-control",
							placeholder: "Kode",
							disabled: ""
						}, null, 512), [[vModelText, edit.value.kdPelanggan]])]),
						createBaseVNode("div", _hoisted_11, [_cache[17] || (_cache[17] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => edit.value.nmPelanggan = $event),
							class: "form-control",
							placeholder: "Nama Pelanggan"
						}, null, 512), [[vModelText, edit.value.nmPelanggan]])]),
						createBaseVNode("div", _hoisted_12, [_cache[18] || (_cache[18] = createBaseVNode("label", { for: "inputState" }, "No Tlp", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => edit.value.noHpPelanggan = $event),
							class: "form-control",
							placeholder: "Satuan",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, edit.value.noHpPelanggan]])])
					]), createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [_cache[19] || (_cache[19] = createBaseVNode("label", { for: "inputState" }, "Alamat", -1)), withDirectives(createBaseVNode("input", {
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => edit.value.almtPelanggan = $event),
						class: "form-control",
						placeholder: "Alamat"
					}, null, 512), [[vModelText, edit.value.almtPelanggan]])])])]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [
					_cache[25] || (_cache[25] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", {
						class: "modal-title",
						id: "exampleModalLabel"
					}, "Tambah Data Pelanggan"), createBaseVNode("button", {
						type: "button",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal",
						"aria-label": "Close",
						class: "btn-close"
					})], -1)),
					createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [
						createBaseVNode("div", _hoisted_20, [_cache[20] || (_cache[20] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => input.value.kdPelanggan = $event),
							class: "form-control",
							placeholder: "Kode",
							disabled: ""
						}, null, 512), [[vModelText, input.value.kdPelanggan]])]),
						createBaseVNode("div", _hoisted_21, [_cache[21] || (_cache[21] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => input.value.nmPelanggan = $event),
							class: "form-control",
							placeholder: "Nama Pelanggan"
						}, null, 512), [[vModelText, input.value.nmPelanggan]])]),
						createBaseVNode("div", _hoisted_22, [_cache[22] || (_cache[22] = createBaseVNode("label", { for: "inputState" }, "No HP", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => input.value.noHpPelanggan = $event),
							class: "form-control",
							placeholder: "No HP",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, input.value.noHpPelanggan]])])
					]), createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [_cache[23] || (_cache[23] = createBaseVNode("label", { for: "inputState" }, "Alamat", -1)), withDirectives(createBaseVNode("input", {
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => input.value.almtPelanggan = $event),
						class: "form-control",
						placeholder: "Alamat"
					}, null, 512), [[vModelText, input.value.almtPelanggan]])])])]),
					createBaseVNode("div", _hoisted_25, [_cache[24] || (_cache[24] = createBaseVNode("button", {
						type: "button",
						class: "btn",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal"
					}, [createBaseVNode("i", { class: "flaticon-cancel-12" }), createTextVNode(" Discard")], -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary",
						onClick: _cache[11] || (_cache[11] = ($event) => simpan_pelanggan())
					}, "Save")])
				])])])
			])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
