import "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, I as onMounted, R as openBlock, T as createVNode, W as resolveComponent, X as withDirectives, Y as withCtx, a as init_runtime_dom_esm_bundler, h as Teleport, jt as toDisplayString, l as vModelSelect, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { s as useStore } from "../../assets/main-pB2iG2j0.js";
import { n as E, r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-keenqKf5.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-BcjfB4fA.js";
//#region resources/js/src/views/master/indexInventaris.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
init_reactivity_esm_bundler();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
require_vue_flatpickr_min();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_7 = { key: 0 };
var _hoisted_8 = ["onClick"];
var _hoisted_9 = { key: 1 };
var _hoisted_10 = { key: 2 };
var _hoisted_11 = ["set"];
var _hoisted_12 = { key: 0 };
var _hoisted_13 = { key: 1 };
var _hoisted_14 = ["onClick"];
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
	class: "modal fade",
	id: "exampleModalCenter",
	tabindex: "-1",
	role: "dialog",
	"aria-labelledby": "exampleModalLabel",
	"aria-hidden": "true"
};
var _hoisted_17 = {
	class: "modal-dialog modal-dialog-centered modal-lg",
	role: "document"
};
var _hoisted_18 = { class: "modal-content" };
var _hoisted_19 = { class: "modal-body" };
var _hoisted_20 = { class: "invoice-address-company-fields" };
var _hoisted_21 = { class: "form-group row" };
var _hoisted_22 = { class: "col-sm-9" };
var _hoisted_23 = { class: "form-group row" };
var _hoisted_24 = { class: "col-sm-9" };
var _hoisted_25 = { class: "form-group row" };
var _hoisted_26 = { class: "col-sm-9" };
var _hoisted_27 = { class: "form-group row" };
var _hoisted_28 = { class: "col-sm-9" };
var _hoisted_29 = { class: "form-group row" };
var _hoisted_30 = { class: "col-sm-9" };
var _hoisted_31 = { class: "form-group row" };
var _hoisted_32 = { class: "col-sm-9" };
var _hoisted_33 = { class: "form-group row" };
var _hoisted_34 = { class: "col-sm-9" };
var _hoisted_35 = { class: "form-group row" };
var _hoisted_36 = { class: "col-sm-9" };
var _hoisted_37 = { class: "form-group row" };
var _hoisted_38 = { class: "col-sm-9" };
var _hoisted_39 = {
	class: "modal fade",
	id: "modalPenyusutan",
	tabindex: "-1",
	role: "dialog",
	"aria-labelledby": "exampleModalLabel",
	"aria-hidden": "true"
};
var _hoisted_40 = {
	class: "modal-dialog modal-dialog-centered modal-lg",
	role: "document"
};
var _hoisted_41 = { class: "modal-content" };
var _hoisted_42 = { class: "modal-body" };
var _hoisted_43 = { class: "invoice-address-company-fields" };
var _hoisted_44 = { class: "form-group row" };
var _hoisted_45 = { class: "col-sm-9" };
var _hoisted_46 = { class: "form-group row" };
var _hoisted_47 = { class: "col-sm-3" };
var _hoisted_48 = { class: "col-sm-3" };
var _hoisted_49 = { class: "modal-footer" };
var _sfc_main = {
	__name: "indexInventaris",
	setup(__props) {
		useMeta({ title: "Data Inventaris" });
		const store = useStore();
		const columns = ref([
			"kode_inventaris",
			"action_jurnal",
			"nama_inventaris",
			"tahun_pembuatan",
			"tahun_perakitan",
			"merek",
			"umur_ekonomis",
			"nilai_inventaris",
			"qty_inventaris",
			"action"
		]);
		const items = ref([]);
		const itemsjurnal = ref([]);
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
				"kode_inventaris",
				"nama_inventaris",
				"tahun_pembuatan"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const option1 = ref();
		const option2 = ref();
		const tgl_susut = ref();
		ref({
			wrap: true,
			altFormat: "M j, Y",
			altInput: true,
			dateFormat: "Y-m-d"
		});
		const kd = ref([]);
		const kdpenyusutan = ref([]);
		const input = ref({
			kode_inventaris: kd,
			tahun_pembuatan: hooks().format("YYYY-MM-DD"),
			tahun_perakitan: hooks().format("YYYY-MM-DD")
		});
		onMounted(() => {
			bind_data();
			getKdInventaris();
			getKdPenyusutan();
		});
		const bind_data = () => {
			store.dispatch("GetInventaris");
			setTimeout(function() {
				let c = store.getters.StateInventaris;
				items.value = c[0];
				itemsjurnal.value = c[1];
			}, 2e3);
		};
		const simpan_inventaris = () => {
			store.dispatch("CreateInventaris", input.value).then((response) => {
				bind_data();
				getKdInventaris();
			}).catch((error) => {});
		};
		const getKdInventaris = () => {
			store.dispatch("GetNoInventaris");
			setTimeout(function() {
				kd.value = store.getters.NoInventaris;
			}, 2e3);
		};
		const getKdPenyusutan = () => {
			store.dispatch("GetNoPenyusutan");
			setTimeout(function() {
				kdpenyusutan.value = store.getters.NoPenyusutan;
			}, 1e3);
		};
		const jurnal_row = (row) => {
			let kode = row.kode_inventaris;
			let bulan = row.umur_ekonomis * 12 || 0;
			let qty_aset = row.qty_inventaris;
			let acc_id = row.group_inventaris;
			let nilai1 = row.nilai_inventaris / qty_aset || 0;
			let penyusutan1bln = Math.floor(nilai1 / bulan || 0);
			hooks().format("YYYY-M-D");
			const arrp = [];
			arrp.push({
				"kode_penyusutan": kdpenyusutan.value,
				"kode_inventaris": kode,
				"jumlah_penyusutan": penyusutan1bln,
				"acc_id": acc_id,
				"accid_akum": row.accid_akum
			});
			new window.Swal({
				title: "Anda Yahin?",
				text: "Anda akan menyusutkan " + row.nama_inventaris,
				html: `
            <label for="bulan-susut">Bulan</label>
            <select id="bulan-susut" >
                <option value="1">Januari</option>
                <option value="2">Februari</option>
                <option value="3">Maret</option>
                <option value="4">April</option>
                <option value="5">Mei</option>
                <option value="6">Juni</option>
                <option value="7">Juli</option>
                <option value="8">Agustus</option>
                <option value="9">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
            </select>
            <br/><br/>
            <label for="tahun-susut">Tahun</label>
            <select id="tahun-susut" >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
            `,
				focusConfirm: false,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Ya",
				padding: "2em",
				preConfirm: () => {
					const selectedOption1 = document.getElementById("bulan-susut").value;
					const selectedOption2 = document.getElementById("tahun-susut").value;
					option1.value = selectedOption1;
					option2.value = selectedOption2;
					tgl_susut.value = option2.value + "-" + option1.value + "-28";
					return {
						option1,
						option2,
						tgl_susut
					};
				}
			}).then((result) => {
				if (result.value) {
					const tgls = [];
					tgls.push({ "tgl_penyusutan": tgl_susut.value });
					store.dispatch("CreatePenyusutanInventaris", [arrp, tgls]).then((response) => {
						bind_data();
						getKdInventaris();
						getKdPenyusutan();
					}).catch((error) => {});
				}
			});
		};
		const jurnal_kat = () => {
			let group = input.value.group_inventaris;
			let bula = input.value.bulan;
			let tahun = input.value.tahun;
			store.dispatch("getInvKat", { group }).then((response) => {
				let brg_inv = response;
				const arr_kat = [];
				for (let i = 0; i < brg_inv.length; i++) {
					let bulan = brg_inv[i].umur_ekonomis * 12 || 0;
					let qty_aset = brg_inv[i].qty_inventaris;
					let nilai1 = brg_inv[i].nilai_inventaris / qty_aset || 0;
					let penyusutan1bln = Math.floor(nilai1 / bulan || 0);
					let tgl = tahun + bula;
					arr_kat.push({
						"kode_penyusutan": kdpenyusutan.value,
						"kode_inventaris": brg_inv[i].kode_inventaris,
						"tgl_penyusutan": tgl,
						"jumlah_penyusutan": penyusutan1bln,
						"acc_id": brg_inv[i].group_inventaris,
						"accid_akum": brg_inv[i].accid_akum
					});
				}
				console.log(arr_kat);
				store.dispatch("CreatePenyusutanInvByKat", { data: arr_kat }).then((response) => {
					bind_data();
					getKdInventaris();
					getKdPenyusutan();
				}).catch((error) => {});
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
		const delete_row = (item) => {
			new window.Swal({
				title: "Anda Yahin?",
				text: "Hapus Inventaris !" + item.nama_inventaris,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeleteInventaris", { id: item.kode_inventaris }).then((response) => {
					bind_data();
					getKdInventaris();
					new window.Swal("Deleted!", "Your file has been deleted.", "success");
				}).catch((error) => {});
			});
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[15] || (_cache[15] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Master")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Inventaris")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [
					_cache[16] || (_cache[16] = createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						"data-bs-toggle": "modal",
						"data-bs-target": "#exampleModalCenter"
					}, "Tambah", -1)),
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
					_cache[17] || (_cache[17] = createBaseVNode("button", {
						class: "btn btn-primary mb-2 me-2",
						"data-bs-toggle": "modal",
						"data-bs-target": "#modalPenyusutan"
					}, "SUSUTKAN BERDASARKAN KATEGORI", -1))
				]),
				createVNode(_component_v_client_table, {
					data: items.value,
					columns: columns.value,
					options: table_option.value
				}, {
					nilai_inventaris: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.nilai_inventaris).toLocaleString()), 1)]),
					qty_inventaris: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.qty_inventaris).toLocaleString()), 1)]),
					action_jurnal: withCtx((props) => [itemsjurnal.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [_cache[19] || (_cache[19] = createTextVNode(" Belum Disusutkan ")), createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => jurnal_row(props.row)
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
						class: "feather feather-settings text-primary"
					}, [createBaseVNode("circle", {
						cx: "12",
						cy: "12",
						r: "3"
					}), createBaseVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })], -1)]), 8, _hoisted_8)])) : items.value.nilai_inventaris === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, " Belum Di beli ")) : (openBlock(), createElementBlock("div", _hoisted_10, [createBaseVNode("div", { set: _ctx.data = itemsjurnal.value.filter((n) => n.rkode_inventaris === props.row.kode_inventaris) }, [_ctx.data.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_12, "sudah ")) : (openBlock(), createElementBlock("p", _hoisted_13, [_cache[21] || (_cache[21] = createTextVNode("belum ")), createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => jurnal_row(props.row)
					}, _cache[20] || (_cache[20] = [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-settings text-primary"
					}, [createBaseVNode("circle", {
						cx: "12",
						cy: "12",
						r: "3"
					}), createBaseVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })], -1)]), 8, _hoisted_14)]))], 8, _hoisted_11)]))]),
					action: withCtx((props) => [createBaseVNode("a", {
						href: "javascript:void(0);",
						onClick: ($event) => delete_row(props.row)
					}, _cache[22] || (_cache[22] = [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-trash-2 text-danger"
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
					], -1)]), 8, _hoisted_15)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				]),
				createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [
					_cache[35] || (_cache[35] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", {
						class: "modal-title",
						id: "exampleModalLabel"
					}, "Tambah Data Inventaris"), createBaseVNode("button", {
						type: "button",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal",
						"aria-label": "Close",
						class: "btn-close"
					})], -1)),
					createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [
						createBaseVNode("div", _hoisted_21, [_cache[23] || (_cache[23] = createBaseVNode("label", {
							for: "company-name",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Kode Inventaris", -1)), createBaseVNode("div", _hoisted_22, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value.kode_inventaris = $event),
							id: "number",
							class: "form-control form-control-sm",
							disabled: ""
						}, null, 512), [[vModelText, input.value.kode_inventaris]])])]),
						createBaseVNode("div", _hoisted_23, [_cache[24] || (_cache[24] = createBaseVNode("label", {
							for: "nama",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Nama Inventaris", -1)), createBaseVNode("div", _hoisted_24, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => input.value.nama_inventaris = $event),
							id: "nama",
							class: "form-control form-control-sm",
							placeholder: "Nama Inventaris"
						}, null, 512), [[vModelText, input.value.nama_inventaris]])])]),
						createBaseVNode("div", _hoisted_25, [_cache[26] || (_cache[26] = createBaseVNode("label", {
							for: "nama",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Kategori", -1)), createBaseVNode("div", _hoisted_26, [withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => input.value.group_inventaris = $event),
							class: "form-select"
						}, _cache[25] || (_cache[25] = [
							createBaseVNode("option", {
								value: "12200",
								selected: ""
							}, "GEDUNG DAN BANGUNAN", -1),
							createBaseVNode("option", {
								value: "12300",
								selected: ""
							}, "PERALATAN DAN MESIN", -1),
							createBaseVNode("option", { value: "12400" }, "PERLENGKAPAN", -1)
						]), 512), [[vModelSelect, input.value.group_inventaris]])])]),
						createBaseVNode("div", _hoisted_27, [_cache[28] || (_cache[28] = createBaseVNode("label", {
							for: "nama",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Akun Akumulasi", -1)), createBaseVNode("div", _hoisted_28, [withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => input.value.accid_akum = $event),
							class: "form-select"
						}, _cache[27] || (_cache[27] = [
							createBaseVNode("option", { value: "12502" }, "AKP. BANGUNAN DAN GEDUNG", -1),
							createBaseVNode("option", {
								value: "12501",
								selected: ""
							}, "AKP. PERALATAN DAN MESIN", -1),
							createBaseVNode("option", { value: "12503" }, "AKP. PERLENGKAPAN", -1)
						]), 512), [[vModelSelect, input.value.accid_akum]])])]),
						createBaseVNode("div", _hoisted_29, [_cache[29] || (_cache[29] = createBaseVNode("label", {
							for: "tahun",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Tahun Pembuatan", -1)), createBaseVNode("div", _hoisted_30, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => input.value.tahun_pembuatan = $event),
							id: "tahun",
							class: "form-control form-control-sm",
							placeholder: "Tahun Pembuatan"
						}, null, 512), [[vModelText, input.value.tahun_pembuatan]])])]),
						createBaseVNode("div", _hoisted_31, [_cache[30] || (_cache[30] = createBaseVNode("label", {
							for: "company-name",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Tahun Perakitan", -1)), createBaseVNode("div", _hoisted_32, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => input.value.tahun_perakitan = $event),
							id: "number",
							class: "form-control form-control-sm",
							placeholder: "Tahun Perakitan"
						}, null, 512), [[vModelText, input.value.tahun_perakitan]])])]),
						createBaseVNode("div", _hoisted_33, [_cache[31] || (_cache[31] = createBaseVNode("label", {
							for: "company-name",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Warna", -1)), createBaseVNode("div", _hoisted_34, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => input.value.warna = $event),
							id: "number",
							class: "form-control form-control-sm",
							placeholder: "Warna"
						}, null, 512), [[vModelText, input.value.warna]])])]),
						createBaseVNode("div", _hoisted_35, [_cache[32] || (_cache[32] = createBaseVNode("label", {
							for: "company-name",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Merek", -1)), createBaseVNode("div", _hoisted_36, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => input.value.merek = $event),
							id: "number",
							class: "form-control form-control-sm",
							placeholder: "Merek"
						}, null, 512), [[vModelText, input.value.merek]])])]),
						createBaseVNode("div", _hoisted_37, [_cache[33] || (_cache[33] = createBaseVNode("label", {
							for: "company-name",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Umur Ekonomis", -1)), createBaseVNode("div", _hoisted_38, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => input.value.umur_ekonomis = $event),
							id: "number",
							class: "form-control form-control-sm",
							placeholder: "Umur Ekonomis"
						}, null, 512), [[vModelText, input.value.umur_ekonomis]])])])
					])]),
					createBaseVNode("div", { class: "modal-footer" }, [_cache[34] || (_cache[34] = createBaseVNode("button", {
						type: "button",
						class: "btn",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal"
					}, [createBaseVNode("i", { class: "flaticon-cancel-12" }), createTextVNode(" Discard")], -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary",
						onClick: simpan_inventaris
					}, "Save")])
				])])]),
				createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [
					_cache[42] || (_cache[42] = createBaseVNode("div", { class: "modal-header" }, [createBaseVNode("h5", {
						class: "modal-title",
						id: "exampleModalLabel"
					}, "Penyusutan Inventaris"), createBaseVNode("button", {
						type: "button",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal",
						"aria-label": "Close",
						class: "btn-close"
					})], -1)),
					createBaseVNode("div", _hoisted_42, [createBaseVNode("div", _hoisted_43, [createBaseVNode("div", _hoisted_44, [_cache[37] || (_cache[37] = createBaseVNode("label", {
						for: "nama",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Kategori", -1)), createBaseVNode("div", _hoisted_45, [withDirectives(createBaseVNode("select", {
						id: "inputState",
						"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => input.value.group_inventaris = $event),
						class: "form-select"
					}, _cache[36] || (_cache[36] = [
						createBaseVNode("option", {
							value: "12200",
							selected: ""
						}, "GEDUNG DAN BANGUNAN", -1),
						createBaseVNode("option", {
							value: "12300",
							selected: ""
						}, "PERALATAN DAN MESIN", -1),
						createBaseVNode("option", { value: "12400" }, "PERLENGKAPAN", -1)
					]), 512), [[vModelSelect, input.value.group_inventaris]])])]), createBaseVNode("div", _hoisted_46, [
						_cache[40] || (_cache[40] = createBaseVNode("label", {
							for: "nama",
							class: "col-sm-3 col-form-label col-form-label-sm"
						}, "Bulan Penyusutan", -1)),
						createBaseVNode("div", _hoisted_47, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => input.value.bulan = $event),
							class: "form-select"
						}, _cache[38] || (_cache[38] = [
							createBaseVNode("option", {
								value: "-01-20",
								selected: ""
							}, "JANUARI", -1),
							createBaseVNode("option", {
								value: "-02-20",
								selected: ""
							}, "FEBRUARI", -1),
							createBaseVNode("option", {
								value: "-03-20",
								selected: ""
							}, "MARET", -1)
						]), 512), [[vModelSelect, input.value.bulan]])]),
						createBaseVNode("div", _hoisted_48, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => input.value.tahun = $event),
							class: "form-select"
						}, _cache[39] || (_cache[39] = [
							createBaseVNode("option", {
								value: "2021",
								selected: ""
							}, "2021", -1),
							createBaseVNode("option", {
								value: "2022",
								selected: ""
							}, "2022", -1),
							createBaseVNode("option", {
								value: "2023",
								selected: ""
							}, "2023", -1)
						]), 512), [[vModelSelect, input.value.tahun]])])
					])])]),
					createBaseVNode("div", _hoisted_49, [_cache[41] || (_cache[41] = createBaseVNode("button", {
						type: "button",
						class: "btn",
						"data-dismiss": "modal",
						"data-bs-dismiss": "modal"
					}, [createBaseVNode("i", { class: "flaticon-cancel-12" }), createTextVNode(" Discard")], -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary",
						onClick: _cache[14] || (_cache[14] = ($event) => jurnal_kat())
					}, "Save")])
				])])])
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
