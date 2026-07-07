import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { Dt as normalizeClass, E as createVNode, G as resolveComponent, L as onMounted, Mt as toDisplayString, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, u as vModelSelect, v as computed, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as _plugin_vue_export_helper_default, o as useRouter, s as useStore } from "../../assets/main-C-Jy3aFl.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-5wp3Xs9y.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/transaksiBiaya.vue?vue&type=style&index=0&scoped=e68bab6b&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/transaksi/transaksiBiaya.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add biaya-page" };
var _hoisted_2 = { class: "underline-content tabs" };
var _hoisted_3 = {
	class: "tab-content",
	id: "lineTabContent-3"
};
var _hoisted_4 = {
	class: "tab-pane fade show active",
	id: "underline-home",
	role: "tabpanel",
	"aria-labelledby": "underline-home-tab"
};
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-12" };
var _hoisted_7 = { class: "invoice-content" };
var _hoisted_8 = { class: "invoice-detail-body" };
var _hoisted_9 = { class: "invoice-detail-header biaya-card" };
var _hoisted_10 = { class: "row justify-content-between" };
var _hoisted_11 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_12 = { class: "invoice-address-company-fields" };
var _hoisted_13 = { class: "form-group row" };
var _hoisted_14 = { class: "col-sm-9" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-9" };
var _hoisted_17 = { class: "col-xl-5 invoice-address-client" };
var _hoisted_18 = { class: "biaya-summary-box" };
var _hoisted_19 = { class: "biaya-summary-value" };
var _hoisted_20 = { class: "invoice-detail-items biaya-card" };
var _hoisted_21 = { class: "table-responsive biaya-table-wrap" };
var _hoisted_22 = { class: "table table-hover align-middle mb-0 biaya-entry-table" };
var _hoisted_23 = ["onClick", "disabled"];
var _hoisted_24 = ["onUpdate:modelValue"];
var _hoisted_25 = [
	"onUpdate:modelValue",
	"id",
	"onInput"
];
var _hoisted_26 = ["onUpdate:modelValue", "id"];
var _hoisted_27 = ["onUpdate:modelValue"];
var _hoisted_28 = ["value"];
var _hoisted_29 = { class: "invoice-detail-total biaya-card" };
var _hoisted_30 = { class: "row align-items-center" };
var _hoisted_31 = { class: "col-md-6" };
var _hoisted_32 = { class: "invoice-actions-btn" };
var _hoisted_33 = { class: "invoice-action-btn" };
var _hoisted_34 = { class: "row g-2" };
var _hoisted_35 = { class: "col-sm-4" };
var _hoisted_36 = ["disabled"];
var _hoisted_37 = { class: "col-sm-4" };
var _hoisted_38 = ["disabled"];
var _hoisted_39 = { class: "col-md-6" };
var _hoisted_40 = { class: "totals-row" };
var _hoisted_41 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_42 = { class: "invoice-summary-value" };
var _hoisted_43 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_44 = { class: "invoice-summary-value" };
var _hoisted_45 = {
	class: "tab-pane fade",
	id: "underline-profile",
	role: "tabpanel",
	"aria-labelledby": "underline-profile-tab"
};
var _hoisted_46 = { class: "col-xl-12" };
var _hoisted_47 = { class: "invoice-content" };
var _hoisted_48 = { class: "invoice-detail-body" };
var _hoisted_49 = { class: "invoice-detail-header biaya-card" };
var _hoisted_50 = { class: "row justify-content-between align-items-end g-3" };
var _hoisted_51 = { class: "col-xl-9" };
var _hoisted_52 = { class: "row g-2" };
var _hoisted_53 = { class: "col-sm-4" };
var _hoisted_54 = { class: "col-sm-4" };
var _hoisted_55 = { class: "col-sm-4 d-flex align-items-end gap-2" };
var _hoisted_56 = ["disabled"];
var _hoisted_57 = ["disabled"];
var _hoisted_58 = { class: "biaya-card" };
var _hoisted_59 = ["onClick"];
var transaksiBiaya_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "transaksiBiaya",
	setup(__props) {
		useMeta({ title: "Input Biaya" });
		const store = useStore();
		useRouter();
		const items = ref([]);
		const listbiaya = ref([]);
		const isSaving = ref(false);
		const isLoadingList = ref(false);
		const params = ref({
			noNota: "",
			tglNota: hooks().format("YYYY-MM-DD")
		});
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const columns = ref([
			"kd_trans",
			"tglBiaya",
			"keterangan_biaya",
			"jumlah",
			"action"
		]);
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
				"kd_trans",
				"tglBiaya",
				"keterangan_biaya",
				"jumlah"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true,
			resizableRows: true
		});
		const accOptions = computed(() => store.getters.StateCoaList || []);
		const total = computed(() => items.value.reduce((sum, item) => sum + Number(item.biaya || 0), 0));
		const canSave = computed(() => {
			return items.value.length > 0 && items.value.every((item) => item.name && item.acc && Number(item.biaya || 0) > 0);
		});
		const formatNumber = (value) => Number(value || 0).toLocaleString();
		const createEmptyItem = (id = 1) => ({
			id,
			name: "",
			biaya: "",
			satuan: "",
			acc: ""
		});
		const syncBiayaValue = (item) => {
			item.biaya = String(item.biaya || "").replace(/[^\d.]/g, "");
		};
		const resetForm = () => {
			items.value = [createEmptyItem(1)];
		};
		const loadAccs = async () => {
			await store.dispatch("GetCoaList", { acc: "6" });
		};
		const loadNoBiaya = async () => {
			await store.dispatch("GetNoBiaya");
			params.value.noNota = store.getters.NoBiaya || "";
		};
		const getListBiaya = async () => {
			isLoadingList.value = true;
			try {
				await store.dispatch("GetListBiaya", sorting.value);
				listbiaya.value = store.getters.StateListBiaya || [];
			} finally {
				isLoadingList.value = false;
			}
		};
		const simpanBiaya = async () => {
			if (!canSave.value) {
				window.Swal.fire({
					icon: "warning",
					title: "Lengkapi data biaya",
					padding: "2em"
				});
				return;
			}
			isSaving.value = true;
			try {
				const header = {
					...params.value,
					total: total.value
				};
				const detail = items.value.map((item) => ({
					name: item.name,
					biaya: Number(item.biaya || 0),
					satuan: item.satuan || "-",
					acc: item.acc
				}));
				await store.dispatch("CreateBiaya", [header, detail]);
				resetForm();
				await loadNoBiaya();
				await getListBiaya();
			} finally {
				isSaving.value = false;
			}
		};
		const add_item = () => {
			const maxId = items.value.length ? Math.max(...items.value.map((item) => item.id)) : 0;
			items.value.push(createEmptyItem(maxId + 1));
		};
		const remove_item = (item) => {
			items.value = items.value.filter((row) => row.id !== item.id);
			if (!items.value.length) resetForm();
		};
		function onlyNumber($event) {
			const keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		const capitalize = (text) => {
			return text.replace("_", " ").replace("-", " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
		};
		const export_table = (type) => {
			const cols = columns.value.filter((d) => d !== "profile" && d !== "action");
			const records = listbiaya.value;
			if (type !== "print") return;
			let rowhtml = "<p>Daftar Biaya | Periode Tgl :" + sorting.value.startDate + " s/d " + sorting.value.endDate + "</p>";
			rowhtml += "<table style=\"width: 95%;\" cellpadding=\"0\" cellcpacing=\"0\" border=\"1\"><thead><tr style=\"color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact;\">";
			cols.forEach((d) => {
				rowhtml += "<th>" + capitalize(d) + "</th>";
			});
			rowhtml += "</tr></thead><tbody>";
			records.forEach((item) => {
				rowhtml += "<tr>";
				rowhtml += "<td>" + item.kd_trans + "</td>";
				rowhtml += "<td>" + hooks(item.tglBiaya).format("DD-MM-YYYY") + "</td>";
				rowhtml += "<td>" + item.keterangan_biaya + "</td>";
				rowhtml += "<td>" + formatNumber(item.jumlah) + "</td>";
				rowhtml += "</tr>";
			});
			const sum = records.reduce((totalValue, element) => totalValue + Number(element.jumlah || 0), 0);
			rowhtml += "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:8px;font-weight:bold;margin:15px;}table{border-collapse:collapse;border-spacing:0;}th,td{font-size:8px;text-align:left;padding:4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7;}</style>";
			rowhtml += "</tbody><tfoot><tr><th></th><th></th><th>Total</th><th>" + formatNumber(sum) + "</th></tr></tfoot></table>";
			const winPrint = window.open("", "", "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0");
			winPrint.document.write("<title>Print</title>" + rowhtml);
			winPrint.document.close();
			winPrint.focus();
			winPrint.print();
		};
		const delete_row = (data) => {
			new window.Swal({
				title: "Anda Yakin?",
				text: "Hapus Biaya " + data.keterangan_biaya,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeleteBiaya", { id: data.kd_trans }).then(async () => {
					await getListBiaya();
					await loadNoBiaya();
					new window.Swal("Deleted!", "Data biaya telah dihapus.", "success");
				}).catch(() => {});
			});
		};
		const cari = async () => {
			await getListBiaya();
		};
		onMounted(async () => {
			resetForm();
			await loadAccs();
			await loadNoBiaya();
			await getListBiaya();
		});
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[5] || (_cache[5] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Transaksi")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Biaya")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[18] || (_cache[18] = createBaseVNode("ul", {
				class: "nav nav-tabs mb-3",
				id: "lineTab",
				role: "tablist"
			}, [createBaseVNode("li", { class: "nav-item" }, [createBaseVNode("a", {
				class: "nav-link active",
				id: "underline-home-tab",
				"data-bs-toggle": "tab",
				href: "#underline-home",
				role: "tab",
				"aria-controls": "underline-home",
				"aria-selected": "true"
			}, [createBaseVNode("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "feather feather-home"
			}, [createBaseVNode("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), createBaseVNode("polyline", { points: "9 22 9 12 15 12 15 22" })]), createTextVNode(" Transaksi ")])]), createBaseVNode("li", { class: "nav-item" }, [createBaseVNode("a", {
				class: "nav-link",
				id: "underline-profile-tab",
				"data-bs-toggle": "tab",
				href: "#underline-profile",
				role: "tab",
				"aria-controls": "underline-profile",
				"aria-selected": "false"
			}, [createBaseVNode("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "feather feather-list"
			}, [
				createBaseVNode("line", {
					x1: "8",
					y1: "6",
					x2: "21",
					y2: "6"
				}),
				createBaseVNode("line", {
					x1: "8",
					y1: "12",
					x2: "21",
					y2: "12"
				}),
				createBaseVNode("line", {
					x1: "8",
					y1: "18",
					x2: "21",
					y2: "18"
				}),
				createBaseVNode("line", {
					x1: "3",
					y1: "6",
					x2: "3.01",
					y2: "6"
				}),
				createBaseVNode("line", {
					x1: "3",
					y1: "12",
					x2: "3.01",
					y2: "12"
				}),
				createBaseVNode("line", {
					x1: "3",
					y1: "18",
					x2: "3.01",
					y2: "18"
				})
			]), createTextVNode(" Daftar ")])])], -1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[13] || (_cache[13] = createBaseVNode("div", { class: "invoice-detail-title biaya-head" }, [createBaseVNode("div", { class: "invoice-title" }, "Transaksi Biaya"), createBaseVNode("div", { class: "biaya-subtitle" }, "Catat biaya operasional dan hubungkan ke akun beban yang sesuai.")], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[6] || (_cache[6] = createBaseVNode("label", {
					for: "company-name",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "No Nota", -1)), createBaseVNode("div", _hoisted_14, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
					id: "number",
					class: "form-control form-control-sm",
					disabled: ""
				}, null, 512), [[vModelText, params.value.noNota]])])]), createBaseVNode("div", _hoisted_15, [_cache[7] || (_cache[7] = createBaseVNode("label", {
					for: "company-email",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "Tgl", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: params.value.tglNota,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
					class: "form-control form-control-sm flatpickr active",
					placeholder: "Tanggal Biaya"
				}, null, 8, ["modelValue"])])])])]), createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [_cache[8] || (_cache[8] = createBaseVNode("div", { class: "biaya-summary-label" }, "Jumlah Item", -1)), createBaseVNode("div", _hoisted_19, toDisplayString(items.value.length), 1)])])])]),
				createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("table", _hoisted_22, [_cache[10] || (_cache[10] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", { style: { "width": "60px" } }, "Aksi"),
					createBaseVNode("th", null, "Keterangan"),
					createBaseVNode("th", { style: { "width": "180px" } }, "Biaya"),
					createBaseVNode("th", { style: { "width": "160px" } }, "Satuan"),
					createBaseVNode("th", { style: { "width": "280px" } }, "Akun")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, index) => {
					return openBlock(), createElementBlock("tr", { key: item.id }, [
						createBaseVNode("td", null, [createBaseVNode("button", {
							type: "button",
							class: "btn btn-outline-danger btn-sm biaya-action-btn",
							onClick: ($event) => remove_item(item),
							disabled: items.value.length === 1
						}, " Hapus ", 8, _hoisted_23)]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.name = $event,
							class: "form-control form-control-sm",
							placeholder: "Keterangan biaya"
						}, null, 8, _hoisted_24), [[vModelText, item.name]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.biaya = $event,
							id: "biaya" + index,
							class: "form-control form-control-sm text-end",
							placeholder: "Nominal",
							onInput: ($event) => syncBiayaValue(item),
							onKeypress: onlyNumber
						}, null, 40, _hoisted_25), [[vModelText, item.biaya]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.satuan = $event,
							id: "satuan" + index,
							class: "form-control form-control-sm",
							placeholder: "Satuan"
						}, null, 8, _hoisted_26), [[vModelText, item.satuan]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": ($event) => item.acc = $event,
							class: "form-select form-select-sm"
						}, [_cache[9] || (_cache[9] = createBaseVNode("option", { value: "" }, "Pilih akun biaya", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(accOptions.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								key: ac.acc_id,
								value: ac.acc_id
							}, toDisplayString(ac.acc_id) + " - " + toDisplayString(ac.name), 9, _hoisted_28);
						}), 128))], 8, _hoisted_27), [[vModelSelect, item.acc]])])
					]);
				}), 128))])])]), createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary btn-sm mt-3",
					onClick: add_item
				}, "Tambah Item")]),
				createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [createBaseVNode("div", _hoisted_35, [createBaseVNode("button", {
					type: "button",
					onClick: simpanBiaya,
					class: "btn btn-success btn-download w-100",
					disabled: isSaving.value || !canSave.value
				}, toDisplayString(isSaving.value ? "Menyimpan..." : "Save"), 9, _hoisted_36)]), createBaseVNode("div", _hoisted_37, [createBaseVNode("button", {
					type: "button",
					onClick: resetForm,
					class: "btn btn-outline-secondary w-100",
					disabled: isSaving.value
				}, "Reset", 8, _hoisted_38)])])])])]), createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [_cache[11] || (_cache[11] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)), createBaseVNode("div", _hoisted_42, [createBaseVNode("span", null, toDisplayString(formatNumber(total.value)), 1)])]), createBaseVNode("div", _hoisted_43, [_cache[12] || (_cache[12] = createBaseVNode("div", { class: "invoice-summary-label" }, "Status", -1)), createBaseVNode("div", _hoisted_44, [createBaseVNode("span", { class: normalizeClass(canSave.value ? "text-success fw-bold" : "text-danger fw-bold") }, toDisplayString(canSave.value ? "Siap Disimpan" : "Lengkapi item biaya"), 3)])])])])])])
			])])])])]), createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [createBaseVNode("div", _hoisted_47, [createBaseVNode("div", _hoisted_48, [createBaseVNode("div", _hoisted_49, [createBaseVNode("div", _hoisted_50, [createBaseVNode("div", _hoisted_51, [createBaseVNode("div", _hoisted_52, [
				createBaseVNode("div", _hoisted_53, [_cache[14] || (_cache[14] = createBaseVNode("label", { class: "form-label form-label-sm" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]),
				createBaseVNode("div", _hoisted_54, [_cache[15] || (_cache[15] = createBaseVNode("label", { class: "form-label form-label-sm" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]),
				createBaseVNode("div", _hoisted_55, [createBaseVNode("button", {
					type: "button",
					onClick: cari,
					class: "btn btn-success btn-download w-100",
					disabled: isLoadingList.value
				}, toDisplayString(isLoadingList.value ? "Memuat..." : "Cari"), 9, _hoisted_56), createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary w-100",
					onClick: _cache[4] || (_cache[4] = ($event) => export_table("print")),
					disabled: isLoadingList.value || !listbiaya.value.length
				}, "Print", 8, _hoisted_57)])
			])])])]), createBaseVNode("div", _hoisted_58, [createVNode(_component_v_client_table, {
				data: listbiaya.value,
				columns: columns.value,
				options: table_option.value
			}, {
				kd_trans: withCtx((props) => [createTextVNode(toDisplayString(props.row.kd_trans), 1)]),
				tglBiaya: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tglBiaya).format("DD-MM-YYYY")), 1)]),
				keterangan_biaya: withCtx((props) => [createTextVNode(toDisplayString(props.row.keterangan_biaya), 1)]),
				jumlah: withCtx((props) => [createTextVNode(toDisplayString(formatNumber(props.row.jumlah)), 1)]),
				action: withCtx((props) => [createVNode(_component_router_link, {
					to: {
						name: "editBiaya",
						params: {
							startDate: props.row.tglBiaya,
							kd_trans: props.row.kd_trans
						}
					},
					class: "me-2"
				}, {
					default: withCtx(() => _cache[16] || (_cache[16] = [createBaseVNode("svg", {
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
					}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)])),
					_: 2
				}, 1032, ["to"]), createBaseVNode("a", {
					href: "javascript:void(0);",
					onClick: ($event) => delete_row(props.row)
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
				], -1)]), 8, _hoisted_59)]),
				_: 1
			}, 8, [
				"data",
				"columns",
				"options"
			])])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-e68bab6b"]]);
//#endregion
export { transaksiBiaya_default as default };
