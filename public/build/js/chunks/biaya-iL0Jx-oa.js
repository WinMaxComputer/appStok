import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { At as normalizeStyle, B as openBlock, E as createVNode, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, X as watch, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { c as _plugin_vue_export_helper_default, s as useStore } from "../../assets/main-Bnx5Knk7.js";
/* empty css                         */
import { t as D } from "./usemodal-vue3-BWxz8jOH.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-nXBP1uh4.js";
//#region resources/js/src/views/coa/biaya.vue?vue&type=style&index=0&scoped=98c90b4a&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/coa/biaya.vue
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
var _hoisted_13 = { class: "table-responsive coa-table-wrap" };
var _hoisted_14 = { class: "table table-sm coa-table" };
var _hoisted_15 = { key: 0 };
var _hoisted_16 = { key: 0 };
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
	key: 0,
	class: "modal-info mb-3"
};
var _hoisted_20 = { class: "info-pill" };
var _hoisted_21 = { class: "info-pill" };
var _hoisted_22 = {
	key: 0,
	class: "info-pill"
};
var _hoisted_23 = { class: "info-pill" };
var _hoisted_24 = { class: "input-group input-group-sm mb-1" };
var _hoisted_25 = ["disabled"];
var _hoisted_26 = {
	key: 0,
	class: "text-muted d-block mb-3"
};
var _hoisted_27 = {
	key: 1,
	class: "mb-3"
};
var _hoisted_28 = { class: "input-group input-group-sm mb-3" };
var _hoisted_29 = ["value"];
var _hoisted_30 = { class: "input-group input-group-sm mb-3" };
var _hoisted_31 = ["disabled"];
var _hoisted_32 = {
	key: 0,
	value: ""
};
var _hoisted_33 = ["value"];
var _hoisted_34 = { class: "input-group mb-3" };
var _hoisted_35 = { class: "input-group input-group-sm mb-4" };
var _hoisted_36 = { class: "col-xl-3" };
var _hoisted_37 = { class: "invoice-actions-btn" };
var _hoisted_38 = { class: "invoice-action-btn" };
var _hoisted_39 = { class: "row" };
var _hoisted_40 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_41 = { class: "row mb-2" };
var _hoisted_42 = { class: "col-sm" };
var _hoisted_43 = { class: "col-sm" };
var _hoisted_44 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_45 = ["disabled"];
var _hoisted_46 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_47 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_48 = ["disabled"];
var biaya_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "biaya",
	setup(__props) {
		useMeta({ title: "COA Biaya" });
		const store = useStore();
		const isVisible = ref(false);
		const isLoadingList = ref(false);
		const isSaving = ref(false);
		const isAccidManual = ref(false);
		const selected = ref({
			accid: "",
			name: "",
			level: "",
			parent: "",
			jenis: "",
			oldid: "",
			amount: 0
		});
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY"),
			group: "6"
		});
		const hartalist = ref([]);
		const judulPage = ref("Biaya");
		const currentGroup = ref("6");
		const currentTitle = ref("Biaya");
		const modalTitle = computed(() => selected.value.oldid ? "Ubah Akun Biaya" : "Tambah Akun Biaya");
		const isEditMode = computed(() => !!selected.value.oldid);
		const levelOptions = [
			"1",
			"2",
			"3",
			"4"
		];
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
		const formatAmount = (row) => {
			const prefix = String(row?.acc_id || "").substring(0, 1);
			const shouldInvert = [
				"3",
				"4",
				"5",
				"6"
			].includes(prefix);
			const amount = Number(row?.amount || 0);
			return (shouldInvert ? -1 * amount : amount).toLocaleString();
		};
		const parseAccNumber = (accid) => {
			const value = Number(String(accid || "").replace(/\D/g, ""));
			return Number.isFinite(value) ? value : 0;
		};
		const suggestedAccid = computed(() => {
			if (isEditMode.value || !selected.value.level) return "";
			const level = String(selected.value.level);
			const parent = String(selected.value.parent || "");
			const maxSiblingAcc = hartalist.value.filter((row) => {
				if (String(row.level) !== level || row.jenis === "Total") return false;
				if (level === "1") return String(row.acc_id || "").startsWith(String(currentGroup.value));
				return String(row.parent || "") === parent;
			}).reduce((max, row) => {
				const current = parseAccNumber(row.acc_id);
				return current > max ? current : max;
			}, 0);
			if (maxSiblingAcc > 0) return String(maxSiblingAcc + 1);
			if (level === "1") return `${currentGroup.value}0000`;
			const parentNum = parseAccNumber(parent);
			if (parentNum > 0) return String(parentNum + 1);
			return "";
		});
		const parentOptions = computed(() => {
			const level = Number(selected.value.level || 0);
			if (!hartalist.value?.length || level <= 1) return [];
			const parentLevel = String(level - 1);
			return hartalist.value.filter((row) => row?.acc_id && row.jenis !== "Total" && String(row.level) === parentLevel);
		});
		watch(() => [
			selected.value.level,
			isEditMode.value,
			parentOptions.value.length
		], () => {
			if (isEditMode.value) return;
			if (String(selected.value.level) === "1") {
				selected.value.parent = "";
				return;
			}
			if (!parentOptions.value.some((row) => row.acc_id === selected.value.parent)) selected.value.parent = parentOptions.value[0]?.acc_id || "";
		});
		watch(() => [
			selected.value.level,
			selected.value.parent,
			isEditMode.value
		], () => {
			if (isEditMode.value || isAccidManual.value) return;
			selected.value.accid = suggestedAccid.value;
		});
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
		const applySuggestedAccid = () => {
			if (isEditMode.value || !suggestedAccid.value) return;
			selected.value.accid = suggestedAccid.value;
			isAccidManual.value = false;
		};
		const onAccidInput = () => {
			if (!isEditMode.value) isAccidManual.value = true;
		};
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
			isAccidManual.value = false;
		};
		const loadData = async (payload = { group: currentGroup.value }) => {
			isLoadingList.value = true;
			try {
				await store.dispatch("GetHarta", payload);
				hartalist.value = store.getters.StateHarta || [];
			} finally {
				isLoadingList.value = false;
			}
		};
		const loadGroup = async (group, title) => {
			currentGroup.value = group;
			currentTitle.value = title;
			judulPage.value = title;
			await loadData({ group });
		};
		onMounted(async () => {
			await loadGroup("6", "Biaya");
		});
		const show_biaya = async () => {
			await loadGroup("6", "Biaya");
		};
		const cari = async () => {
			await loadData({
				group: currentGroup.value,
				startDate: sorting.value.startDate,
				endDate: sorting.value.endDate
			});
		};
		const openCreateModal = () => {
			resetSelected();
			selected.value.level = "4";
			selected.value.jenis = "Detail";
			const defaultParent = hartalist.value.find((row) => String(row.level) === "3" && row.jenis !== "Total");
			selected.value.parent = defaultParent?.acc_id || "";
			selected.value.accid = suggestedAccid.value;
			isVisible.value = true;
		};
		const edit_acc = (row) => {
			selected.value.accid = row.acc_id || "";
			selected.value.oldid = row.acc_id || "";
			selected.value.level = row.level || "";
			selected.value.parent = row.parent || "";
			selected.value.name = row.name || "";
			selected.value.jenis = row.jenis || "";
			selected.value.amount = row.amount || 0;
			isAccidManual.value = false;
			isVisible.value = true;
		};
		const hapus_acc = async (row) => {
			if (!window.confirm(`Hapus akun ${row.acc_id} - ${row.name}?`)) return;
			isSaving.value = true;
			try {
				const res = await store.dispatch("DeleteAcc", {
					accid: row.acc_id,
					level: row.level
				});
				if (res?.data?.success === true) {
					await loadData({ group: currentGroup.value });
					showToast("success", "Akun berhasil dihapus");
					return;
				}
				showToast("error", res?.data?.message || "Gagal menghapus akun");
			} finally {
				isSaving.value = false;
			}
		};
		const simpan_acc = async () => {
			if (!selected.value.accid || !selected.value.name || !selected.value.level) {
				showToast("warning", "Kode akun, level, dan nama akun wajib diisi");
				return;
			}
			isSaving.value = true;
			try {
				const res = await store.dispatch("CreateAcc", selected.value);
				if (res?.data?.success === true) {
					await loadData({ group: currentGroup.value });
					isVisible.value = false;
					showToast("success", "Data akun berhasil disimpan");
					return;
				}
				showToast("error", res?.data?.message || "Gagal menyimpan data akun");
			} finally {
				isSaving.value = false;
			}
		};
		const close_modal = () => {
			isVisible.value = false;
		};
		const printPage = () => {
			window.print();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[9] || (_cache[9] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "COA Biaya")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("h4", null, toDisplayString(judulPage.value), 1)])])]), createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("table", _hoisted_14, [_cache[10] || (_cache[10] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", { style: { "width": "140px" } }, "Kode"),
					createBaseVNode("th", null, "Nama Akun"),
					createBaseVNode("th", {
						class: "text-end",
						style: { "width": "220px" }
					}, "Jumlah"),
					createBaseVNode("th", { style: { "width": "170px" } }, "Aksi")
				])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (row) => {
					return openBlock(), createElementBlock("tbody", { key: row.acc_id }, [isSupportedLevel(row.level) ? (openBlock(), createElementBlock("tr", _hoisted_15, [
						createBaseVNode("td", null, [row.jenis !== "Total" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(row.acc_id), 1)], 64)) : createCommentVNode("", true)]),
						createBaseVNode("td", {
							class: normalizeClass({ "fw-bold": isHeadingRow(row) }),
							style: normalizeStyle(nameCellStyle(row.level))
						}, toDisplayString(row.name), 7),
						createBaseVNode("td", { class: normalizeClass(["text-end", { "fw-bold total-line": row.jenis === "Total" }]) }, [row.jenis === "Detail" || row.jenis === "Total" ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(formatAmount(row)), 1)) : createCommentVNode("", true)], 2),
						createBaseVNode("td", null, [row.jenis !== "Total" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", {
							type: "button",
							class: "btn btn-sm btn-outline-primary action-btn",
							onClick: ($event) => edit_acc(row)
						}, "Ubah", 8, _hoisted_17), createBaseVNode("button", {
							type: "button",
							class: "btn btn-sm btn-outline-danger action-btn",
							onClick: ($event) => hapus_acc(row)
						}, "Hapus", 8, _hoisted_18)], 64)) : createCommentVNode("", true)])
					])) : createCommentVNode("", true)]);
				}), 128))])])])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isVisible.value = $event),
					draggable: true,
					title: modalTitle.value,
					showCancelButton: true,
					cancelButton: {
						text: "Batal",
						onclick: () => {
							close_modal();
						},
						loading: false
					},
					okButton: {
						text: isSaving.value ? "Menyimpan..." : "Simpan",
						onclick: () => {
							simpan_acc();
						},
						loading: isSaving.value
					}
				}, {
					default: withCtx(() => [
						withDirectives(createBaseVNode("input", {
							type: "hidden",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value.oldid = $event),
							class: "form-control"
						}, null, 512), [[vModelText, selected.value.oldid]]),
						isEditMode.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
							createBaseVNode("div", _hoisted_20, "Kode: " + toDisplayString(selected.value.accid), 1),
							createBaseVNode("div", _hoisted_21, "Level: " + toDisplayString(selected.value.level), 1),
							selected.value.parent ? (openBlock(), createElementBlock("div", _hoisted_22, "Induk: " + toDisplayString(selected.value.parent), 1)) : createCommentVNode("", true),
							createBaseVNode("div", _hoisted_23, "Jenis: " + toDisplayString(selected.value.jenis), 1)
						])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							_cache[12] || (_cache[12] = createBaseVNode("label", { class: "form-label mb-1" }, "Kode akun", -1)),
							createBaseVNode("div", _hoisted_24, [withDirectives(createBaseVNode("input", {
								type: "text",
								class: "form-control",
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selected.value.accid = $event),
								placeholder: "Kode akun",
								onInput: onAccidInput
							}, null, 544), [[vModelText, selected.value.accid]]), createBaseVNode("button", {
								type: "button",
								class: "btn btn-outline-primary",
								onClick: applySuggestedAccid,
								disabled: !suggestedAccid.value
							}, "Auto", 8, _hoisted_25)]),
							suggestedAccid.value ? (openBlock(), createElementBlock("small", _hoisted_26, "Saran kode: " + toDisplayString(suggestedAccid.value), 1)) : (openBlock(), createElementBlock("div", _hoisted_27)),
							_cache[13] || (_cache[13] = createBaseVNode("label", { class: "form-label mb-1" }, "Level akun", -1)),
							createBaseVNode("div", _hoisted_28, [withDirectives(createBaseVNode("select", {
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selected.value.level = $event),
								class: "form-control"
							}, [(openBlock(), createElementBlock(Fragment, null, renderList(levelOptions, (level) => {
								return createBaseVNode("option", {
									key: level,
									value: level
								}, "Level " + toDisplayString(level), 9, _hoisted_29);
							}), 64))], 512), [[vModelSelect, selected.value.level]])]),
							_cache[14] || (_cache[14] = createBaseVNode("label", { class: "form-label mb-1" }, "Akun induk", -1)),
							createBaseVNode("div", _hoisted_30, [withDirectives(createBaseVNode("select", {
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selected.value.parent = $event),
								class: "form-control",
								disabled: String(selected.value.level) === "1"
							}, [String(selected.value.level) !== "1" ? (openBlock(), createElementBlock("option", _hoisted_32, "Pilih akun induk")) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(parentOptions.value, (parent) => {
								return openBlock(), createElementBlock("option", {
									key: parent.acc_id,
									value: parent.acc_id
								}, "Akun Induk " + toDisplayString(parent.acc_id) + " - " + toDisplayString(parent.name), 9, _hoisted_33);
							}), 128))], 8, _hoisted_31), [[vModelSelect, selected.value.parent]])]),
							_cache[15] || (_cache[15] = createBaseVNode("label", { class: "form-label mb-1" }, "Jenis akun", -1)),
							createBaseVNode("div", _hoisted_34, [withDirectives(createBaseVNode("select", {
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selected.value.jenis = $event),
								class: "form-control"
							}, _cache[11] || (_cache[11] = [createBaseVNode("option", { value: "Detail" }, "Detail", -1), createBaseVNode("option", { value: "Header" }, "Header", -1)]), 512), [[vModelSelect, selected.value.jenis]])])
						], 64)),
						_cache[16] || (_cache[16] = createBaseVNode("label", { class: "form-label mb-1" }, "Nama akun", -1)),
						createBaseVNode("div", _hoisted_35, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selected.value.name = $event),
							placeholder: "Nama akun"
						}, null, 512), [[vModelText, selected.value.name]])])
					]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, [
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
					createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("div", _hoisted_42, [_cache[17] || (_cache[17] = createBaseVNode("label", null, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.startDate,
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sorting.value.startDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_43, [_cache[18] || (_cache[18] = createBaseVNode("label", null, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: sorting.value.endDate,
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => sorting.value.endDate = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"])])])]),
					createBaseVNode("div", _hoisted_44, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-success btn-download w-100",
						onClick: cari,
						disabled: isLoadingList.value
					}, [isLoadingList.value ? (openBlock(), createElementBlock("span", _hoisted_46)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(isLoadingList.value ? "Memuat..." : "Cari"), 1)], 8, _hoisted_45)]),
					createBaseVNode("div", _hoisted_47, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-dark btn-edit w-100",
						onClick: show_biaya,
						disabled: isLoadingList.value
					}, "Muat Ulang", 8, _hoisted_48)])
				])])])])
			])])])])]);
		};
	}
}, [["__scopeId", "data-v-98c90b4a"]]);
//#endregion
export { biaya_default as default };
