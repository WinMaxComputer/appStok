import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, X as watch, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { c as _plugin_vue_export_helper_default, s as useStore } from "../../assets/main-CDz2Rhtt.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C6SOtT-k.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/jurnalUmum.vue?vue&type=style&index=0&scoped=2bfd79b0&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/transaksi/jurnalUmum.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add jurnal-umum-page" };
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
var _hoisted_9 = { class: "invoice-detail-title ju-head" };
var _hoisted_10 = {
	key: 0,
	class: "ju-edit-badge"
};
var _hoisted_11 = { class: "invoice-detail-header" };
var _hoisted_12 = { class: "row justify-content-between" };
var _hoisted_13 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_14 = { class: "invoice-address-company-fields" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-9" };
var _hoisted_17 = { class: "form-group row" };
var _hoisted_18 = { class: "col-sm-9" };
var _hoisted_19 = { class: "invoice-detail-items ju-section-card" };
var _hoisted_20 = { class: "table-responsive ju-table-wrap" };
var _hoisted_21 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_22 = ["onClick"];
var _hoisted_23 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_24 = ["onUpdate:modelValue"];
var _hoisted_25 = ["value"];
var _hoisted_26 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_27 = ["onUpdate:modelValue"];
var _hoisted_28 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_29 = ["onUpdate:modelValue", "id"];
var _hoisted_30 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_31 = ["onUpdate:modelValue", "id"];
var _hoisted_32 = { class: "invoice-detail-total ju-section-card" };
var _hoisted_33 = { class: "row" };
var _hoisted_34 = { class: "col-md-6" };
var _hoisted_35 = { class: "invoice-actions-btn" };
var _hoisted_36 = { class: "invoice-action-btn" };
var _hoisted_37 = { class: "row" };
var _hoisted_38 = { class: "col-sm-4" };
var _hoisted_39 = {
	key: 0,
	class: "col-sm-4"
};
var _hoisted_40 = { class: "col-md-6" };
var _hoisted_41 = { class: "totals-row" };
var _hoisted_42 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_43 = { class: "invoice-summary-value" };
var _hoisted_44 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_45 = { class: "invoice-summary-value" };
var _hoisted_46 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_47 = { class: "invoice-summary-value" };
var _hoisted_48 = { class: "invoice-detail-note" };
var _hoisted_49 = { class: "row" };
var _hoisted_50 = { class: "col-md-12 align-self-center" };
var _hoisted_51 = { class: "form-group row invoice-note" };
var _hoisted_52 = { class: "col-sm-12" };
var _hoisted_53 = {
	class: "tab-pane fade",
	id: "underline-profile",
	role: "tabpanel",
	"aria-labelledby": "underline-profile-tab"
};
var _hoisted_54 = { class: "col-xl-12" };
var _hoisted_55 = { class: "invoice-content" };
var _hoisted_56 = { class: "invoice-detail-body" };
var _hoisted_57 = { class: "invoice-detail-header ju-list-card" };
var _hoisted_58 = { class: "row justify-content-between" };
var _hoisted_59 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_60 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_61 = { class: "doc-container" };
var _hoisted_62 = { class: "row" };
var _hoisted_63 = { class: "col-xl-9" };
var _hoisted_64 = { class: "invoice-container" };
var _hoisted_65 = { class: "custom-table panel-body p-0 ju-list-table-wrap" };
var _hoisted_66 = ["onClick"];
var _hoisted_67 = ["onClick"];
var _hoisted_68 = { class: "col-xl-3" };
var _hoisted_69 = { class: "ju-filter-panel" };
var _hoisted_70 = { class: "row g-2" };
var _hoisted_71 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_72 = { class: "col-xl-12 col-md-6 col-sm-12" };
var _hoisted_73 = { class: "col-xl-12 col-md-6 col-sm-12" };
var _hoisted_74 = { class: "ju-list-summary mt-3" };
var _hoisted_75 = { class: "ju-summary-row" };
var _hoisted_76 = { class: "ju-summary-row" };
var _hoisted_77 = { class: "ju-summary-row" };
var jurnalUmum_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "jurnalUmum",
	setup(__props) {
		useMeta({ title: "Jurnal Umum" });
		const store = useStore();
		const items = ref([]);
		const list = ref([]);
		const accs = ref([]);
		const nobiaya = ref("");
		const isEditMode = ref(false);
		const editSourceNoTrans = ref("");
		const params = ref({
			noNota: "",
			tglNota: hooks().format("YYYY-MM-DD"),
			total: 0,
			notes: ""
		});
		const columns = ref([
			"notrans",
			"tgl",
			"name",
			"memo",
			"debet",
			"kredit",
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
				"notrans",
				"tgl",
				"name",
				"memo",
				"debet",
				"kredit"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true,
			resizableRows: true
		});
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const totalDebet = computed(() => items.value.reduce((sum, row) => sum + Number(row.debet || 0), 0));
		const totalKredit = computed(() => items.value.reduce((sum, row) => sum + Number(row.kredit || 0), 0));
		const isBalanced = computed(() => totalDebet.value === totalKredit.value && totalDebet.value > 0);
		const daftarDebet = computed(() => list.value.reduce((sum, row) => sum + Number(row.debet || 0), 0));
		const daftarKredit = computed(() => list.value.reduce((sum, row) => sum + Number(row.kredit || 0), 0));
		const formatNumber = (num) => new Intl.NumberFormat().format(Number(num || 0));
		const notify = (icon, title, text = "") => {
			if (window.Swal && typeof window.Swal.fire === "function") {
				window.Swal.fire({
					icon,
					title,
					text,
					padding: "2em"
				});
				return;
			}
			new window.Swal({
				title,
				text,
				type: icon,
				padding: "2em"
			});
		};
		const GetCoaList = async () => {
			await store.dispatch("GetCoaList", { acc: "" });
			accs.value = store.getters.StateCoaList || [];
		};
		const GetNoJurnalUmum = async () => {
			await store.dispatch("GetNoJurnalUmum");
			nobiaya.value = store.getters.NoJurnalUmum || "";
		};
		const GetJurnalUmum = async () => {
			await store.dispatch("GetJurnalUmum", sorting.value);
			list.value = normalizeJurnalRows(store.getters.StateGjList || []);
		};
		const normalizeJurnalRows = (rows) => {
			const seen = /* @__PURE__ */ new Set();
			const result = [];
			for (const row of rows) {
				const key = [
					row.notrans || "",
					row.tgl || "",
					row.acc_id || "",
					Number(row.debet || 0),
					Number(row.kredit || 0),
					row.memo || "",
					row.name || ""
				].join("|");
				if (seen.has(key)) continue;
				seen.add(key);
				result.push(row);
			}
			return result;
		};
		const getTotal = () => {
			params.value.total = totalDebet.value;
		};
		const simpanBiaya = async () => {
			const detail = items.value.filter((row) => row.acc && (Number(row.debet || 0) > 0 || Number(row.kredit || 0) > 0));
			if (!detail.length) {
				notify("warning", "Detail jurnal kosong", "Isi akun dan nominal minimal satu baris.");
				return;
			}
			if (!isBalanced.value) {
				notify("warning", "Jurnal belum seimbang", "Total debet dan kredit harus sama.");
				return;
			}
			const header = {
				...params.value,
				total: totalDebet.value
			};
			try {
				if (isEditMode.value && editSourceNoTrans.value) await store.dispatch("UpdateJurnalUmum", {
					targetNoTrans: editSourceNoTrans.value,
					header,
					detail
				});
				else await store.dispatch("insertJuurnalUmum", [header, detail]);
				notify("success", "Berhasil", "Jurnal umum berhasil disimpan.");
				await Promise.all([GetNoJurnalUmum(), GetJurnalUmum()]);
				resetItems();
				isEditMode.value = false;
				editSourceNoTrans.value = "";
			} catch (error) {
				notify("error", "Gagal menyimpan", "Terjadi kendala saat menyimpan jurnal umum.");
			}
		};
		const resetItems = () => {
			items.value = [{
				id: 1,
				name: "",
				satuan: "",
				acc: "",
				debet: 0,
				kredit: 0
			}, {
				id: 2,
				name: "",
				satuan: "",
				acc: "",
				debet: 0,
				kredit: 0
			}];
			getTotal();
		};
		onMounted(async () => {
			resetItems();
			let dt = /* @__PURE__ */ new Date();
			params.value.invoice_date = JSON.parse(JSON.stringify(dt));
			dt.setDate(dt.getDate() + 5);
			params.value.due_date = dt;
			await Promise.all([
				GetCoaList(),
				GetNoJurnalUmum(),
				GetJurnalUmum()
			]);
		});
		watch(() => nobiaya.value, (val) => {
			params.value.noNota = val || "";
		}, { immediate: true });
		const add_item = () => {
			let max_id = 0;
			if (items.value && items.value.length) max_id = items.value.reduce((max, character) => character.id > max ? character.id : max, items.value[0].id);
			items.value.push({
				id: max_id + 1,
				name: "",
				biaya: "",
				satuan: "",
				acc: "",
				debet: 0,
				kredit: 0
			});
		};
		const remove_item = (item) => {
			items.value = items.value.filter((d) => d.id != item.id);
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		const cari = async () => {
			await GetJurnalUmum();
		};
		const export_table = (type) => {
			if (type === "print") window.print();
		};
		const edit_row = (row) => {
			const notrans = row.notrans || "";
			if (!notrans) {
				notify("warning", "Data tidak valid", "Nomor transaksi tidak ditemukan.");
				return;
			}
			const detailRows = list.value.filter((d) => d.notrans === notrans);
			if (!detailRows.length) {
				notify("warning", "Detail tidak ditemukan", "Baris detail jurnal tidak tersedia.");
				return;
			}
			const first = detailRows[0];
			isEditMode.value = true;
			editSourceNoTrans.value = notrans;
			params.value.noNota = notrans;
			params.value.tglNota = first.tgl ? hooks(first.tgl).format("YYYY-MM-DD") : hooks().format("YYYY-MM-DD");
			params.value.notes = first.memo || "";
			items.value = detailRows.map((d, idx) => ({
				id: idx + 1,
				name: d.memo || "",
				satuan: "",
				acc: d.acc_id || "",
				debet: Number(d.debet || 0),
				kredit: Number(d.kredit || 0)
			}));
			getTotal();
			document.getElementById("underline-home-tab")?.click();
		};
		const cancelEditMode = async () => {
			isEditMode.value = false;
			editSourceNoTrans.value = "";
			resetItems();
			params.value.notes = "";
			await GetNoJurnalUmum();
		};
		const delete_row = (data) => {
			new window.Swal({
				title: "Anda Yakin?",
				text: "Hapus Jurnal !" + data.notrans,
				type: "warning",
				showCancelButton: true,
				confirmButtonText: "Delete",
				padding: "2em"
			}).then((result) => {
				if (result.value) store.dispatch("DeleteJurnalUmum", { id: data.notrans }).then((response) => {
					GetNoJurnalUmum();
					GetJurnalUmum();
					new window.Swal("Deleted!", "Your file has been deleted.", "success");
				}).catch((error) => {});
			});
		};
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[11] || (_cache[11] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Transaksi")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Jurnal Umum")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[33] || (_cache[33] = createBaseVNode("ul", {
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
				class: "feather feather-user"
			}, [createBaseVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), createBaseVNode("circle", {
				cx: "12",
				cy: "7",
				r: "4"
			})]), createTextVNode(" Daftar ")])])], -1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				createBaseVNode("div", _hoisted_9, [
					_cache[12] || (_cache[12] = createBaseVNode("div", { class: "invoice-title" }, "Jurnal Umum", -1)),
					_cache[13] || (_cache[13] = createBaseVNode("div", { class: "ju-subtitle" }, "Pastikan total debet dan kredit seimbang sebelum disimpan.", -1)),
					isEditMode.value ? (openBlock(), createElementBlock("div", _hoisted_10, " Mode Edit: " + toDisplayString(editSourceNoTrans.value), 1)) : createCommentVNode("", true)
				]),
				createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [_cache[14] || (_cache[14] = createBaseVNode("label", {
					for: "company-name",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "No Nota", -1)), createBaseVNode("div", _hoisted_16, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
					id: "number",
					class: "form-control form-control-sm",
					placeholder: "#0001",
					disabled: ""
				}, null, 512), [[vModelText, params.value.noNota]])])]), createBaseVNode("div", _hoisted_17, [_cache[15] || (_cache[15] = createBaseVNode("label", {
					for: "company-email",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "Tgl", -1)), createBaseVNode("div", _hoisted_18, [createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: params.value.tglNota,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
					class: "form-control form-control-sm flatpickr active",
					placeholder: "Invoice Date"
				}, null, 8, ["modelValue"])])])])]), _cache[16] || (_cache[16] = createBaseVNode("div", { class: "col-xl-5 invoice-address-client" }, null, -1))])]),
				createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("table", null, [_cache[18] || (_cache[18] = createBaseVNode("thead", null, [createBaseVNode("tr", { style: {
					"padding": "0",
					"margin": "0"
				} }, [
					createBaseVNode("th", { class: "" }),
					createBaseVNode("th", { class: "text-end" }, "Akun"),
					createBaseVNode("th", null, "Keterangan"),
					createBaseVNode("th", { class: "" }, "Debet"),
					createBaseVNode("th", { class: "" }, "Kredit")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, index) => {
					return openBlock(), createElementBlock("tr", { key: index }, [
						createBaseVNode("td", _hoisted_21, [createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("a", {
							href: "javascript:void(0);",
							class: "delete-item",
							onClick: ($event) => remove_item(item)
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
							class: "feather feather-x-circle"
						}, [
							createBaseVNode("circle", {
								cx: "12",
								cy: "12",
								r: "10"
							}),
							createBaseVNode("line", {
								x1: "15",
								y1: "9",
								x2: "9",
								y2: "15"
							}),
							createBaseVNode("line", {
								x1: "9",
								y1: "9",
								x2: "15",
								y2: "15"
							})
						], -1)]), 8, _hoisted_22)])])]),
						createBaseVNode("td", _hoisted_23, [withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": ($event) => item.acc = $event,
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id,
								selected: ""
							}, toDisplayString(ac.name), 9, _hoisted_25);
						}), 128))], 8, _hoisted_24), [[vModelSelect, item.acc]])]),
						createBaseVNode("td", _hoisted_26, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.name = $event,
							class: "form-control form-control-sm",
							placeholder: "Deskripsi jurnal"
						}, null, 8, _hoisted_27), [[vModelText, item.name]])]),
						createBaseVNode("td", _hoisted_28, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.debet = $event,
							id: "debet" + index,
							width: "100%",
							onInput: _cache[2] || (_cache[2] = ($event) => getTotal()),
							placeholder: "Debet",
							class: "form-control form-control-sm",
							onKeypress: _cache[3] || (_cache[3] = ($event) => onlyNumber($event))
						}, null, 40, _hoisted_29), [[vModelText, item.debet]])]),
						createBaseVNode("td", _hoisted_30, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.kredit = $event,
							id: "kredit" + index,
							width: "100%",
							onInput: _cache[4] || (_cache[4] = ($event) => getTotal()),
							placeholder: "Kredit",
							class: "form-control form-control-sm",
							onKeypress: _cache[5] || (_cache[5] = ($event) => onlyNumber($event))
						}, null, 40, _hoisted_31), [[vModelText, item.kredit]])])
					]);
				}), 128))])])]), createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary additem btn-sm",
					onClick: _cache[6] || (_cache[6] = ($event) => add_item())
				}, "Add Item")]),
				createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: simpanBiaya,
					class: "btn btn-success btn-download"
				}, toDisplayString(isEditMode.value ? "Update" : "Save"), 1)]), isEditMode.value ? (openBlock(), createElementBlock("div", _hoisted_39, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: cancelEditMode,
					class: "btn btn-outline-secondary btn-download"
				}, "Batal Edit")])) : createCommentVNode("", true)])])])]), createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [
					createBaseVNode("div", _hoisted_42, [
						_cache[19] || (_cache[19] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total Debet", -1)),
						_cache[20] || (_cache[20] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_43, [createBaseVNode("span", null, toDisplayString(formatNumber(totalDebet.value)), 1)])
					]),
					createBaseVNode("div", _hoisted_44, [
						_cache[21] || (_cache[21] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total Kredit", -1)),
						_cache[22] || (_cache[22] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_45, [createBaseVNode("span", null, toDisplayString(formatNumber(totalKredit.value)), 1)])
					]),
					createBaseVNode("div", _hoisted_46, [
						_cache[23] || (_cache[23] = createBaseVNode("div", { class: "invoice-summary-label" }, "Status", -1)),
						_cache[24] || (_cache[24] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_47, [createBaseVNode("span", { class: normalizeClass(isBalanced.value ? "text-success fw-bold" : "text-danger fw-bold") }, toDisplayString(isBalanced.value ? "Seimbang" : "Belum Seimbang"), 3)])
					])
				])])])]),
				createBaseVNode("div", _hoisted_48, [createBaseVNode("div", _hoisted_49, [createBaseVNode("div", _hoisted_50, [createBaseVNode("div", _hoisted_51, [_cache[25] || (_cache[25] = createBaseVNode("label", {
					for: "invoice-detail-notes",
					class: "col-sm-12 col-form-label col-form-label-sm"
				}, "Notes:", -1)), createBaseVNode("div", _hoisted_52, [withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => params.value.notes = $event),
					rows: "3",
					id: "invoice-detail-notes",
					class: "form-control",
					placeholder: "Notes - For example, \"Thank you for doing business with us\""
				}, null, 512), [[vModelText, params.value.notes]])])])])])])
			])])])])]), createBaseVNode("div", _hoisted_53, [createBaseVNode("div", _hoisted_54, [createBaseVNode("div", _hoisted_55, [createBaseVNode("div", _hoisted_56, [createBaseVNode("div", _hoisted_57, [createBaseVNode("div", _hoisted_58, [createBaseVNode("div", _hoisted_59, [createBaseVNode("div", _hoisted_60, [createBaseVNode("div", _hoisted_61, [createBaseVNode("div", _hoisted_62, [createBaseVNode("div", _hoisted_63, [createBaseVNode("div", _hoisted_64, [createBaseVNode("div", _hoisted_65, [createVNode(_component_v_client_table, {
				data: list.value,
				columns: columns.value,
				options: table_option.value
			}, {
				notrans: withCtx((props) => [createTextVNode(toDisplayString(props.row.notrans), 1)]),
				tgl: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tgl).format("DD-MM-YYYY")), 1)]),
				name: withCtx((props) => [createTextVNode(toDisplayString(props.row.name || "-"), 1)]),
				memo: withCtx((props) => [createTextVNode(toDisplayString(props.row.memo || "-"), 1)]),
				debet: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.debet).toLocaleString()), 1)]),
				kredit: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.kredit).toLocaleString()), 1)]),
				action: withCtx((props) => [createBaseVNode("a", {
					href: "javascript:void(0);",
					onClick: ($event) => edit_row(props.row)
				}, _cache[26] || (_cache[26] = [createBaseVNode("svg", {
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
				}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_66), createBaseVNode("a", {
					href: "javascript:void(0);",
					onClick: ($event) => delete_row(props.row)
				}, _cache[27] || (_cache[27] = [createBaseVNode("svg", {
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
				], -1)]), 8, _hoisted_67)]),
				_: 1
			}, 8, [
				"data",
				"columns",
				"options"
			])])])]), createBaseVNode("div", _hoisted_68, [createBaseVNode("div", _hoisted_69, [createBaseVNode("div", _hoisted_70, [
				createBaseVNode("div", _hoisted_71, [createBaseVNode("a", {
					href: "javascript:;",
					class: "btn btn-secondary btn-print w-100",
					onClick: _cache[8] || (_cache[8] = ($event) => export_table("print"))
				}, "Print")]),
				createBaseVNode("div", _hoisted_72, [_cache[28] || (_cache[28] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]),
				createBaseVNode("div", _hoisted_73, [_cache[29] || (_cache[29] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]),
				createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: cari,
					class: "btn btn-success btn-download w-100"
				}, "Cari")])
			]), createBaseVNode("div", _hoisted_74, [
				createBaseVNode("div", _hoisted_75, [_cache[30] || (_cache[30] = createBaseVNode("span", null, "Total Baris", -1)), createBaseVNode("strong", null, toDisplayString(list.value.length), 1)]),
				createBaseVNode("div", _hoisted_76, [_cache[31] || (_cache[31] = createBaseVNode("span", null, "Total Debet", -1)), createBaseVNode("strong", null, toDisplayString(formatNumber(daftarDebet.value)), 1)]),
				createBaseVNode("div", _hoisted_77, [_cache[32] || (_cache[32] = createBaseVNode("span", null, "Total Kredit", -1)), createBaseVNode("strong", null, toDisplayString(formatNumber(daftarKredit.value)), 1)])
			])])])])])])])])])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-2bfd79b0"]]);
//#endregion
export { jurnalUmum_default as default };
