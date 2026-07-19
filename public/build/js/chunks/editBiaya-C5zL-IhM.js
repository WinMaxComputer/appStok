import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, v as computed, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { c as _plugin_vue_export_helper_default, o as useRouter, s as useStore } from "../../assets/main-CLz8aXVs.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-B6o3q_pU.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/editBiaya.vue?vue&type=style&index=0&scoped=38bf0744&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/transaksi/editBiaya.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add biaya-page" };
var _hoisted_2 = { class: "row" };
var _hoisted_3 = { class: "col-xl-12" };
var _hoisted_4 = { class: "invoice-content" };
var _hoisted_5 = { class: "invoice-detail-body" };
var _hoisted_6 = { class: "invoice-detail-header biaya-card" };
var _hoisted_7 = { class: "row justify-content-between" };
var _hoisted_8 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_9 = { class: "invoice-address-company-fields" };
var _hoisted_10 = { class: "form-group row" };
var _hoisted_11 = { class: "col-sm-9" };
var _hoisted_12 = { class: "form-group row" };
var _hoisted_13 = { class: "col-sm-9" };
var _hoisted_14 = { class: "col-xl-5 invoice-address-client" };
var _hoisted_15 = { class: "biaya-summary-box" };
var _hoisted_16 = { class: "biaya-summary-value" };
var _hoisted_17 = { class: "invoice-detail-items biaya-card" };
var _hoisted_18 = { class: "table-responsive biaya-table-wrap" };
var _hoisted_19 = { class: "table table-hover align-middle mb-0 biaya-entry-table" };
var _hoisted_20 = ["onClick", "disabled"];
var _hoisted_21 = ["onUpdate:modelValue"];
var _hoisted_22 = [
	"onUpdate:modelValue",
	"id",
	"onInput"
];
var _hoisted_23 = ["onUpdate:modelValue", "id"];
var _hoisted_24 = ["onUpdate:modelValue"];
var _hoisted_25 = ["value"];
var _hoisted_26 = { class: "invoice-detail-total biaya-card" };
var _hoisted_27 = { class: "row align-items-center" };
var _hoisted_28 = { class: "col-md-6" };
var _hoisted_29 = { class: "invoice-actions-btn" };
var _hoisted_30 = { class: "invoice-action-btn" };
var _hoisted_31 = { class: "row g-2" };
var _hoisted_32 = { class: "col-sm-4" };
var _hoisted_33 = ["disabled"];
var _hoisted_34 = { class: "col-sm-4" };
var _hoisted_35 = { class: "col-md-6" };
var _hoisted_36 = { class: "totals-row" };
var _hoisted_37 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_38 = { class: "invoice-summary-value" };
var _hoisted_39 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_40 = { class: "invoice-summary-value" };
var editBiaya_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "editBiaya",
	props: {
		kd_trans: String,
		startDate: String
	},
	setup(__props) {
		useMeta({ title: "Edit Biaya" });
		const props = __props;
		const store = useStore();
		const router = useRouter();
		const items = ref([]);
		const isSaving = ref(false);
		const params = ref({
			noNota: props.kd_trans,
			tglNota: hooks(props.startDate).format("YYYY-MM-DD")
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
		const loadAccs = async () => {
			await store.dispatch("GetCoaList", { acc: "6" });
		};
		const loadDetail = async () => {
			await store.dispatch("GetBiayaDetail", {
				kd_trans: props.kd_trans,
				startDate: hooks(props.startDate).format("YYYY-MM-DD")
			});
			const details = store.getters.StateBiayaDetail || [];
			items.value = details.length ? details.map((item, index) => ({
				id: index + 1,
				name: item.keterangan_biaya,
				biaya: String(item.jumlah || ""),
				satuan: item.satuan || "-",
				acc: item.accid || ""
			})) : [createEmptyItem(1)];
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
				await store.dispatch("DeleteBiaya", { id: params.value.noNota });
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
				router.push({ name: "biaya" });
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
			if (!items.value.length) items.value = [createEmptyItem(1)];
		};
		function onlyNumber($event) {
			const keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		onMounted(async () => {
			await loadAccs();
			await loadDetail();
		});
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[2] || (_cache[2] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Transaksi")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Edit Biaya")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[11] || (_cache[11] = createBaseVNode("div", { class: "invoice-detail-title biaya-head" }, [createBaseVNode("div", { class: "invoice-title" }, "Edit Transaksi Biaya"), createBaseVNode("div", { class: "biaya-subtitle" }, "Perbarui item biaya lalu simpan ulang transaksi.")], -1)),
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [_cache[3] || (_cache[3] = createBaseVNode("label", {
					for: "company-name",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "No Nota", -1)), createBaseVNode("div", _hoisted_11, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
					id: "number",
					class: "form-control form-control-sm",
					disabled: ""
				}, null, 512), [[vModelText, params.value.noNota]])])]), createBaseVNode("div", _hoisted_12, [_cache[4] || (_cache[4] = createBaseVNode("label", {
					for: "company-email",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "Tgl", -1)), createBaseVNode("div", _hoisted_13, [createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: params.value.tglNota,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
					class: "form-control form-control-sm flatpickr active",
					placeholder: "Tanggal Biaya"
				}, null, 8, ["modelValue"])])])])]), createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "biaya-summary-label" }, "Jumlah Item", -1)), createBaseVNode("div", _hoisted_16, toDisplayString(items.value.length), 1)])])])]),
				createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("table", _hoisted_19, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
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
						}, " Hapus ", 8, _hoisted_20)]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.name = $event,
							class: "form-control form-control-sm",
							placeholder: "Keterangan biaya"
						}, null, 8, _hoisted_21), [[vModelText, item.name]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.biaya = $event,
							id: "biaya" + index,
							class: "form-control form-control-sm text-end",
							placeholder: "Nominal",
							onInput: ($event) => syncBiayaValue(item),
							onKeypress: onlyNumber
						}, null, 40, _hoisted_22), [[vModelText, item.biaya]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.satuan = $event,
							id: "satuan" + index,
							class: "form-control form-control-sm",
							placeholder: "Satuan"
						}, null, 8, _hoisted_23), [[vModelText, item.satuan]])]),
						createBaseVNode("td", null, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": ($event) => item.acc = $event,
							class: "form-select form-select-sm"
						}, [_cache[6] || (_cache[6] = createBaseVNode("option", { value: "" }, "Pilih akun biaya", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(accOptions.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								key: ac.acc_id,
								value: ac.acc_id
							}, toDisplayString(ac.acc_id) + " - " + toDisplayString(ac.name), 9, _hoisted_25);
						}), 128))], 8, _hoisted_24), [[vModelSelect, item.acc]])])
					]);
				}), 128))])])]), createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary btn-sm mt-3",
					onClick: add_item
				}, "Tambah Item")]),
				createBaseVNode("div", _hoisted_26, [createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [createBaseVNode("button", {
					type: "button",
					onClick: simpanBiaya,
					class: "btn btn-success btn-download w-100",
					disabled: isSaving.value || !canSave.value
				}, toDisplayString(isSaving.value ? "Menyimpan..." : "Update"), 9, _hoisted_33)]), createBaseVNode("div", _hoisted_34, [createVNode(_component_router_link, {
					to: { name: "biaya" },
					class: "btn btn-outline-secondary w-100"
				}, {
					default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("Kembali")])),
					_: 1
				})])])])])]), createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [_cache[9] || (_cache[9] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)), createBaseVNode("div", _hoisted_38, [createBaseVNode("span", null, toDisplayString(formatNumber(total.value)), 1)])]), createBaseVNode("div", _hoisted_39, [_cache[10] || (_cache[10] = createBaseVNode("div", { class: "invoice-summary-label" }, "Status", -1)), createBaseVNode("div", _hoisted_40, [createBaseVNode("span", { class: normalizeClass(canSave.value ? "text-success fw-bold" : "text-danger fw-bold") }, toDisplayString(canSave.value ? "Siap Disimpan" : "Lengkapi item biaya"), 3)])])])])])])
			])])])])]);
		};
	}
}, [["__scopeId", "data-v-38bf0744"]]);
//#endregion
export { editBiaya_default as default };
