import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, Et as normalizeClass, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, X as withDirectives, Y as withCtx, _ as computed, a as init_runtime_dom_esm_bundler, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as _plugin_vue_export_helper_default, c as useStore } from "../../assets/main-B6cAUmtZ.js";
/* empty css                         */
import { t as D } from "./usemodal-vue3-Bm5MdBX0.js";
import { t as require_feather } from "./feather-CyOPEzr3.js";
//#region resources/js/src/views/coa/neraca.vue?vue&type=style&index=0&scoped=de9dfb71&lang.css
var import_feather = /* @__PURE__ */ __toESM(require_feather());
//#endregion
//#region resources/js/src/views/coa/neraca.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_3 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_4 = { class: "doc-container" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-9" };
var _hoisted_7 = {
	id: "tableSimple",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_8 = { class: "statbox panel box box-shadow" };
var _hoisted_9 = { class: "panel-heading" };
var _hoisted_10 = { class: "row" };
var _hoisted_11 = { class: "col-xl-12 col-md-12 col-sm-12 col-12" };
var _hoisted_12 = { class: "panel-body" };
var _hoisted_13 = { class: "table-responsive neraca-table-wrap" };
var _hoisted_14 = { class: "table table-sm neraca-table" };
var _hoisted_15 = { key: 0 };
var _hoisted_16 = { style: { "min-width": "100px" } };
var _hoisted_17 = ["onClick"];
var _hoisted_18 = { key: 0 };
var _hoisted_19 = { class: "input-group input-group-sm mb-4" };
var _hoisted_20 = ["value"];
var _hoisted_21 = { class: "input-group input-group-sm mb-4" };
var _hoisted_22 = ["value"];
var _hoisted_23 = { class: "input-group mb-4" };
var _hoisted_24 = ["value"];
var _hoisted_25 = { class: "input-group input-group-sm mb-4" };
var _hoisted_26 = { class: "input-group input-group-sm mb-4" };
var _hoisted_27 = ["disabled"];
var _hoisted_28 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_29 = { class: "col-xl-3" };
var _hoisted_30 = { class: "invoice-actions-btn" };
var _hoisted_31 = { class: "invoice-action-btn" };
var _hoisted_32 = { class: "row" };
var _hoisted_33 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_34 = ["disabled"];
var _hoisted_35 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_36 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_37 = ["disabled"];
var _hoisted_38 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_39 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_40 = ["disabled"];
var _hoisted_41 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var neraca_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "neraca",
	setup(__props) {
		useMeta({ title: "COA Neraca" });
		const store = useStore();
		const isVisible = ref(false);
		const isLoadingList = ref(false);
		const isSaving = ref(false);
		const selected = ref({
			accid: "",
			name: "",
			level: "",
			parent: "",
			jenis: "",
			oldid: "",
			amount: 0
		});
		const hartalist = ref([]);
		const judulPage = ref("Harta");
		const isSupportedLevel = (level) => [
			"1",
			"2",
			"3",
			"4"
		].includes(String(level));
		const isHeadingRow = (row) => row?.jenis === "Total" || String(row?.jenis || "").startsWith("H");
		const nameCellStyle = (level) => {
			return {
				minWidth: "300px",
				paddingLeft: {
					"1": "8px",
					"2": "20px",
					"3": "32px",
					"4": "44px"
				}[String(level)] || "8px"
			};
		};
		const formatAmount = (amount) => Number(amount || 0).toLocaleString();
		const modalTitle = computed(() => selected.value.oldid ? "Ubah Akun Neraca" : "Tambah Akun Neraca");
		const parentOptions = computed(() => {
			if (!hartalist.value?.length) return [];
			if (!selected.value.parent || selected.value.parent.length < 2) return hartalist.value.filter((h) => h?.acc_id);
			const parentPrefix = selected.value.parent.substring(0, 2);
			return hartalist.value.filter((h) => h?.acc_id && h.acc_id.substring(0, 2) === parentPrefix);
		});
		const resetSelected = () => {
			selected.value = {
				accid: "",
				name: "",
				level: "",
				parent: "",
				jenis: "",
				oldid: "",
				amount: 0
			};
		};
		const loadGroup = async (group, title) => {
			import_feather.default.replace();
			isLoadingList.value = true;
			try {
				await store.dispatch("GetHarta", { group });
				hartalist.value = store.getters.StateHarta || [];
				judulPage.value = title;
			} finally {
				isLoadingList.value = false;
			}
		};
		onMounted(async () => {
			import_feather.default.replace();
			await loadGroup("1", "Harta");
		});
		const show_harta = async () => {
			await loadGroup("1", "Harta");
		};
		const show_hutang = async () => {
			await loadGroup("2", "Hutang");
		};
		const show_modal = async () => {
			await loadGroup("3", "Modal");
		};
		const openCreateModal = () => {
			resetSelected();
			isVisible.value = true;
		};
		const edit_acc = (hrt) => {
			selected.value.accid = hrt.acc_id || "";
			selected.value.oldid = hrt.acc_id || "";
			selected.value.level = hrt.level || "";
			selected.value.parent = hrt.parent || "";
			selected.value.name = hrt.name || "";
			selected.value.jenis = hrt.jenis || "";
			selected.value.amount = hrt.amount || 0;
			isVisible.value = true;
		};
		const showToast = (icon, title) => {
			if (window.Swal) {
				window.Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 2500,
					timerProgressBar: true
				}).fire({
					icon,
					title,
					padding: "10px 20px"
				});
				return;
			}
			window.alert(title);
		};
		const simpan_acc = async () => {
			isSaving.value = true;
			try {
				if ((await store.dispatch("CreateAcc", selected.value))?.data?.success === true) {
					await loadGroup("1", "Harta");
					isVisible.value = false;
					showToast("success", "Data akun berhasil disimpan");
					return;
				}
				showToast("error", "Gagal menyimpan data akun");
			} finally {
				isSaving.value = false;
			}
		};
		const printPage = () => {
			window.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[7] || (_cache[7] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "COA Neraca")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("h4", null, toDisplayString(judulPage.value), 1)])])]), createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("table", _hoisted_14, [_cache[8] || (_cache[8] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", { style: { "width": "140px" } }, "Kode"),
					createBaseVNode("th", null, "Nama Akun"),
					createBaseVNode("th", {
						class: "text-end",
						style: { "width": "220px" }
					}, "Jumlah")
				])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
					return openBlock(), createElementBlock("tbody", { key: hrt.acc_id }, [isSupportedLevel(hrt.level) ? (openBlock(), createElementBlock("tr", _hoisted_15, [
						createBaseVNode("td", _hoisted_16, [hrt.jenis !== "Total" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
							href: "javascript:void(0);",
							title: "Ubah",
							class: "edit-link",
							onClick: ($event) => edit_acc(hrt)
						}, "Ubah", 8, _hoisted_17)], 64)) : createCommentVNode("", true)]),
						createBaseVNode("td", {
							class: normalizeClass({ "fw-bold": isHeadingRow(hrt) }),
							style: normalizeStyle(nameCellStyle(hrt.level))
						}, toDisplayString(hrt.name), 7),
						createBaseVNode("td", { class: normalizeClass(["text-end", { "fw-bold total-line": hrt.jenis === "Total" }]) }, [hrt.jenis === "Detail" || hrt.jenis === "Total" ? (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(formatAmount(hrt.amount)), 1)) : createCommentVNode("", true)], 2)
					])) : createCommentVNode("", true)]);
				}), 128))])])])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isVisible.value = $event),
					draggable: true,
					title: modalTitle.value
				}, {
					default: withCtx(() => [
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value.oldid = $event),
							class: "form-control"
						}, null, 512), [[vModelText, selected.value.oldid]]),
						createBaseVNode("div", _hoisted_19, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selected.value.parent = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(parentOptions.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.acc_id
							}, " Akun Induk " + toDisplayString(hrt.acc_id) + " - " + toDisplayString(hrt.name), 9, _hoisted_20);
						}), 128))], 512), [[vModelSelect, selected.value.parent]])]),
						createBaseVNode("div", _hoisted_21, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selected.value.level = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList([...new Set(hartalist.value.map((h) => h.level))], (level) => {
							return openBlock(), createElementBlock("option", {
								key: level,
								value: level
							}, " Level " + toDisplayString(level), 9, _hoisted_22);
						}), 128))], 512), [[vModelSelect, selected.value.level]])]),
						createBaseVNode("div", _hoisted_23, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selected.value.jenis = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList([...new Set(hartalist.value.map((h) => h.jenis))], (jenis) => {
							return openBlock(), createElementBlock("option", {
								key: jenis,
								value: jenis
							}, " Jenis " + toDisplayString(jenis), 9, _hoisted_24);
						}), 128))], 512), [[vModelSelect, selected.value.jenis]])]),
						createBaseVNode("div", _hoisted_25, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selected.value.name = $event)
						}, null, 512), [[vModelText, selected.value.name]])]),
						createBaseVNode("div", _hoisted_26, [createBaseVNode("button", {
							type: "button",
							onClick: _cache[5] || (_cache[5] = ($event) => simpan_acc()),
							class: "btn btn-success btn-download",
							disabled: isSaving.value
						}, [isSaving.value ? (openBlock(), createElementBlock("span", _hoisted_28)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(isSaving.value ? "Menyimpan..." : "Simpan"), 1)], 8, _hoisted_27)])
					]),
					_: 1
				}, 8, ["visible", "title"]),
				createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [
					createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary btn-print action-print w-100",
						onClick: printPage
					}, "Cetak")]),
					createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary btn-send w-100",
						onClick: openCreateModal
					}, "Baru")]),
					createBaseVNode("div", _hoisted_33, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-success btn-download w-100",
						onClick: show_harta,
						disabled: isLoadingList.value
					}, [isLoadingList.value ? (openBlock(), createElementBlock("span", _hoisted_35)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(isLoadingList.value ? "Memuat..." : "Harta"), 1)], 8, _hoisted_34)]),
					createBaseVNode("div", _hoisted_36, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-success btn-download w-100",
						onClick: show_hutang,
						disabled: isLoadingList.value
					}, [isLoadingList.value ? (openBlock(), createElementBlock("span", _hoisted_38)) : createCommentVNode("", true), _cache[9] || (_cache[9] = createTextVNode(" Hutang "))], 8, _hoisted_37)]),
					createBaseVNode("div", _hoisted_39, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-success btn-download w-100",
						onClick: show_modal,
						disabled: isLoadingList.value
					}, [isLoadingList.value ? (openBlock(), createElementBlock("span", _hoisted_41)) : createCommentVNode("", true), _cache[10] || (_cache[10] = createTextVNode(" Modal "))], 8, _hoisted_40)])
				])])])])
			])])])])]);
		};
	}
}, [["__scopeId", "data-v-de9dfb71"]]);
//#endregion
export { neraca_default as default };
