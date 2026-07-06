import { E as createVNode, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, u as vModelSelect, v as computed, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as useStore } from "../../assets/main-DqXy1ygy.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-BHmUnYgJ.js";
import { t as D } from "./usemodal-vue3-CTQprEhe.js";
import "./moment-DHGdmE-4.js";
//#region resources/js/src/views/master/indexJasa.vue
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
var _hoisted_13 = { class: "row mb-8" };
var _hoisted_14 = { class: "col-sm" };
var _hoisted_15 = { class: "row mb-4" };
var _hoisted_16 = { class: "col-sm" };
var _hoisted_17 = ["value"];
var _hoisted_18 = { class: "col-sm" };
var _hoisted_19 = ["value"];
var _hoisted_20 = {
	class: "modal fade",
	id: "exampleModalCenter",
	tabindex: "-1",
	role: "dialog",
	"aria-labelledby": "exampleModalLabel",
	"aria-hidden": "true"
};
var _hoisted_21 = {
	class: "modal-dialog modal-dialog-centered modal-lg",
	role: "document"
};
var _hoisted_22 = { class: "modal-content" };
var _hoisted_23 = { class: "modal-body" };
var _hoisted_24 = { class: "row mb-4" };
var _hoisted_25 = { class: "col-sm" };
var _hoisted_26 = { class: "col-sm" };
var _hoisted_27 = { class: "col-sm" };
var _hoisted_28 = { class: "row mb-4" };
var _hoisted_29 = { class: "col-sm" };
var _hoisted_30 = { class: "row mb-4" };
var _hoisted_31 = { class: "col-sm" };
var _hoisted_32 = ["value"];
var _hoisted_33 = { class: "col-sm" };
var _hoisted_34 = ["value"];
var _sfc_main = {
	__name: "indexJasa",
	setup(__props) {
		useMeta({ title: "Data Jasa" });
		const store = useStore();
		const columns = ref([
			"kdJasa",
			"nmJasa",
			"biayaJasa",
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
			sortable: ["kdJasa", "nmJasa"],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const isVisible = ref(false);
		const edit = ref({});
		const kdJasa = ref([]);
		const input = ref({
			kdJasa,
			nmJasa: "",
			biayaJasa: "",
			deskripsi: "",
			accid: accs,
			accid_biaya: accs
		});
		onMounted(() => {
			bind_data();
			GetCoaHpp();
			getkd();
		});
		const bind_data = () => {
			store.dispatch("GetJasa");
			items.value = store.getters.StateJasa;
		};
		const jasas = computed(() => {
			items.value = store.getters.StateJasa;
			kdJasa.value = store.getters.NoJasa;
		});
		const accs = ref([]);
		const GetCoaHpp = async () => {
			await store.dispatch("GetCoaList");
			accs.value = store.getters.StateCoaList;
		};
		const getkd = async () => {
			await store.dispatch("GetNoJasa");
			kdJasa.value = store.getters.NoJasa;
			console.log(kdJasa.value);
		};
		const simpan_jasa = () => {
			const isi = input.value;
			store.dispatch("CreateJasa", isi);
			bind_data();
			getkd();
		};
		const edit_jasa = () => {
			const isi = edit.value;
			store.dispatch("CreateJasa", isi);
			bind_data();
			getkd();
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
				kdJasa: item.kdJasa,
				nmJasa: item.nmJasa,
				biayaJasa: item.biayaJasa,
				deskripsi: item.deskripsi,
				accid: item.accid,
				accid_jasa: item.accid_jasa
			};
			console.log(item);
		};
		const delete_row = (item) => {
			modalinput.value = true;
			new window.Swal({
				title: "Anda Yahin?",
				text: "Hapus Nama Barang !" + item.nmJasa,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeleteJasa", item.id).then((response) => {
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
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[15] || (_cache[15] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Daftar")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Jasa")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [
					_cache[16] || (_cache[16] = createBaseVNode("button", {
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
					}, "PDF"),
					createBaseVNode("span", null, toDisplayString(jasas.value), 1)
				]), createVNode(_component_v_client_table, {
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					biayaJasa: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.biayaJasa).toLocaleString()), 1)]),
					action: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => view_row(props.row)
					}, _cache[17] || (_cache[17] = [createBaseVNode("svg", {
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
					}, _cache[18] || (_cache[18] = [createBaseVNode("svg", {
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
					"onUpdate:visible": _cache[8] || (_cache[8] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "Edit Data Jasa",
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
							edit_jasa();
						},
						loading: false
					},
					width: "60%"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_9, [
							createBaseVNode("div", _hoisted_10, [_cache[19] || (_cache[19] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => edit.value.kdJasa = $event),
								class: "form-control",
								placeholder: "Kode",
								disabled: ""
							}, null, 512), [[vModelText, edit.value.kdJasa]])]),
							createBaseVNode("div", _hoisted_11, [_cache[20] || (_cache[20] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => edit.value.nmJasa = $event),
								class: "form-control",
								placeholder: "Nama Barang"
							}, null, 512), [[vModelText, edit.value.nmJasa]])]),
							createBaseVNode("div", _hoisted_12, [_cache[21] || (_cache[21] = createBaseVNode("label", { for: "inputState" }, "Biaya", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => edit.value.biayaJasa = $event),
								class: "form-control",
								placeholder: "Satuan",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, edit.value.biayaJasa]])])
						]),
						createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [_cache[22] || (_cache[22] = createBaseVNode("label", { for: "inputState" }, "Des", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => edit.value.deskripsi = $event),
							class: "form-control",
							placeholder: "Des"
						}, null, 512), [[vModelText, edit.value.deskripsi]])])]),
						createBaseVNode("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [_cache[23] || (_cache[23] = createBaseVNode("label", { for: "inputState" }, "Akun Kas", -1)), withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => edit.value.accid = $event),
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id
							}, toDisplayString(ac.name), 9, _hoisted_17);
						}), 128))], 512), [[vModelSelect, edit.value.accid]])]), createBaseVNode("div", _hoisted_18, [_cache[24] || (_cache[24] = createBaseVNode("label", { for: "inputState" }, "Akun Jasa", -1)), withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => edit.value.accid_jasa = $event),
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id
							}, toDisplayString(ac.name), 9, _hoisted_19);
						}), 128))], 512), [[vModelSelect, edit.value.accid_jasa]])])])
					]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [
					_cache[32] || (_cache[32] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", {
						class: "modal-title",
						id: "exampleModalLabel"
					}, "Tambah Data Jasa"), createBaseVNode("button", {
						type: "button",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal",
						"aria-label": "Close",
						class: "btn-close"
					})], -1)),
					createBaseVNode("div", _hoisted_23, [createBaseVNode("form", null, [
						createBaseVNode("div", _hoisted_24, [
							createBaseVNode("div", _hoisted_25, [_cache[25] || (_cache[25] = createBaseVNode("label", { for: "inputState" }, "Kode", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => input.value.kdJasa = $event),
								class: "form-control",
								placeholder: "Kode",
								disabled: ""
							}, null, 512), [[vModelText, input.value.kdJasa]])]),
							createBaseVNode("div", _hoisted_26, [_cache[26] || (_cache[26] = createBaseVNode("label", { for: "inputState" }, "Nama", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => input.value.nmJasa = $event),
								class: "form-control",
								placeholder: "Nama Barang"
							}, null, 512), [[vModelText, input.value.nmJasa]])]),
							createBaseVNode("div", _hoisted_27, [_cache[27] || (_cache[27] = createBaseVNode("label", { for: "inputState" }, "Biaya", -1)), withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => input.value.biayaJasa = $event),
								class: "form-control",
								placeholder: "Biaya",
								onKeypress: onlyNumber
							}, null, 544), [[vModelText, input.value.biayaJasa]])])
						]),
						createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [_cache[28] || (_cache[28] = createBaseVNode("label", { for: "inputState" }, "Deskripsi", -1)), withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => input.value.deskripsi = $event),
							class: "form-control",
							placeholder: "Des"
						}, null, 512), [[vModelText, input.value.deskripsi]])])]),
						createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [_cache[29] || (_cache[29] = createBaseVNode("label", { for: "inputState" }, "Akun Kas", -1)), withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => input.value.accid = $event),
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id,
								selected: ""
							}, toDisplayString(ac.name), 9, _hoisted_32);
						}), 128))], 512), [[vModelSelect, input.value.accid]])]), createBaseVNode("div", _hoisted_33, [_cache[30] || (_cache[30] = createBaseVNode("label", { for: "inputState" }, "Akun Jasa", -1)), withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => input.value.accid_jasa = $event),
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id,
								selected: ""
							}, toDisplayString(ac.name), 9, _hoisted_34);
						}), 128))], 512), [[vModelSelect, input.value.accid_jasa]])])])
					])]),
					createBaseVNode("div", { class: "modal-footer" }, [_cache[31] || (_cache[31] = createBaseVNode("button", {
						type: "button",
						class: "btn",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal"
					}, [createBaseVNode("i", { class: "flaticon-cancel-12" }), createTextVNode(" Discard")], -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary",
						onClick: simpan_jasa
					}, "Save")])
				])])])
			])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
