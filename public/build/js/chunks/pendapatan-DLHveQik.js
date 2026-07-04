import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, R as openBlock, T as createVNode, X as withDirectives, Y as withCtx, _ as computed, a as init_runtime_dom_esm_bundler, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as _plugin_vue_export_helper_default, c as useStore } from "../../assets/main-DeA6wrtx.js";
/* empty css                         */
import { t as D } from "./usemodal-vue3-Bm5MdBX0.js";
//#region resources/js/src/views/coa/pendapatan.vue
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
var _hoisted_9 = { class: "panel-body" };
var _hoisted_10 = { class: "table-responsive coa-table-wrap" };
var _hoisted_11 = { class: "table table-sm coa-table mb-0" };
var _hoisted_12 = ["set"];
var _hoisted_13 = { key: 0 };
var _hoisted_14 = {
	key: 0,
	style: { "min-width": "70px" }
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = { key: 1 };
var _hoisted_17 = {
	key: 2,
	style: { "min-width": "400px" }
};
var _hoisted_18 = {
	key: 3,
	style: { "min-width": "400px" }
};
var _hoisted_19 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_20 = { key: 5 };
var _hoisted_21 = { key: 6 };
var _hoisted_22 = { key: 0 };
var _hoisted_23 = { key: 7 };
var _hoisted_24 = { key: 8 };
var _hoisted_25 = { key: 1 };
var _hoisted_26 = { key: 0 };
var _hoisted_27 = ["onClick"];
var _hoisted_28 = { key: 1 };
var _hoisted_29 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_30 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_31 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_32 = { key: 5 };
var _hoisted_33 = { key: 6 };
var _hoisted_34 = { key: 7 };
var _hoisted_35 = { key: 8 };
var _hoisted_36 = { key: 2 };
var _hoisted_37 = { key: 0 };
var _hoisted_38 = ["onClick"];
var _hoisted_39 = { key: 1 };
var _hoisted_40 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_41 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_42 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_43 = { key: 5 };
var _hoisted_44 = { key: 6 };
var _hoisted_45 = { key: 7 };
var _hoisted_46 = { key: 3 };
var _hoisted_47 = ["onClick"];
var _hoisted_48 = { style: { "min-width": "300px" } };
var _hoisted_49 = { class: "input-group input-group-sm mb-4" };
var _hoisted_50 = ["value"];
var _hoisted_51 = { class: "input-group input-group-sm mb-4" };
var _hoisted_52 = ["value"];
var _hoisted_53 = { class: "input-group mb-4" };
var _hoisted_54 = ["value"];
var _hoisted_55 = { class: "input-group input-group-sm mb-4" };
var _hoisted_56 = ["value"];
var _hoisted_57 = { class: "input-group input-group-sm mb-4" };
var _hoisted_58 = { class: "input-group input-group-sm mb-4" };
var _hoisted_59 = ["disabled"];
var _hoisted_60 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_61 = { class: "col-xl-3" };
var _hoisted_62 = { class: "invoice-actions-btn" };
var _hoisted_63 = { class: "invoice-action-btn" };
var _hoisted_64 = { class: "row" };
var _hoisted_65 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_66 = ["disabled"];
var _hoisted_67 = {
	key: 0,
	class: "spinner-border spinner-border-sm me-1",
	role: "status",
	"aria-hidden": "true"
};
var _hoisted_68 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_69 = ["disabled"];
var pendapatan_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "pendapatan",
	setup(__props) {
		useMeta({ title: "COA Pendapatan" });
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
		const modalTitle = computed(() => selected.value.oldid ? "Ubah Akun Pendapatan" : "Tambah Akun Pendapatan");
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
		const loadData = async () => {
			isLoadingList.value = true;
			try {
				await store.dispatch("GetHarta", { group: "4" });
				hartalist.value = store.getters.StateHarta || [];
			} finally {
				isLoadingList.value = false;
			}
		};
		onMounted(async () => {
			await loadData();
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
		const simpan_acc = async () => {
			isSaving.value = true;
			try {
				if ((await store.dispatch("CreateAcc", selected.value))?.data?.success === true) {
					await loadData();
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
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[8] || (_cache[8] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "COA Pendapatan")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [_cache[19] || (_cache[19] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Pendapatan")])])], -1)), createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("table", _hoisted_11, [_cache[18] || (_cache[18] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", { style: { "width": "140px" } }, "Kode"),
					createBaseVNode("th", null, "Nama Akun"),
					createBaseVNode("th", {
						class: "text-end",
						style: { "width": "220px" }
					}, "Jumlah")
				])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt, index) => {
					return openBlock(), createElementBlock("tbody", {
						key: hrt.acc_id,
						set: _ctx.amount = hrt.amount
					}, [
						hrt.level === "1" ? (openBlock(), createElementBlock("tr", _hoisted_13, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_14, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Ubah",
								class: "edit-link",
								onClick: ($event) => edit_acc(hrt)
							}, "Ubah", 8, _hoisted_15)])) : (openBlock(), createElementBlock("td", _hoisted_16)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_17, [createBaseVNode("b", null, "\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_18, "\xA0\xA0" + toDisplayString(hrt.name), 1)),
							_cache[9] || (_cache[9] = createBaseVNode("td", null, null, -1)),
							_cache[10] || (_cache[10] = createBaseVNode("td", null, null, -1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_19)) : (openBlock(), createElementBlock("td", _hoisted_20)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_21, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "2" ? (openBlock(), createElementBlock("div", _hoisted_22, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : createCommentVNode("", true), createBaseVNode("div", null, toDisplayString(Number(_ctx.amount += hrt.amount[index]).toLocaleString()), 1)])) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_23, [createBaseVNode("b", null, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)])) : (openBlock(), createElementBlock("td", _hoisted_24))
						])) : createCommentVNode("", true),
						hrt.level === "2" ? (openBlock(), createElementBlock("tr", _hoisted_25, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_26, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Ubah",
								class: "edit-link",
								onClick: ($event) => edit_acc(hrt)
							}, "Ubah", 8, _hoisted_27)])) : (openBlock(), createElementBlock("td", _hoisted_28)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_29, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_30, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
							_cache[11] || (_cache[11] = createBaseVNode("td", null, null, -1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_31)) : (openBlock(), createElementBlock("td", _hoisted_32)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_33, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_34, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("td", _hoisted_35)),
							_cache[12] || (_cache[12] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true),
						hrt.level === "3" ? (openBlock(), createElementBlock("tr", _hoisted_36, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_37, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Ubah",
								class: "edit-link",
								onClick: ($event) => edit_acc(hrt)
							}, "Ubah", 8, _hoisted_38)])) : (openBlock(), createElementBlock("td", _hoisted_39)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_40, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_41, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_42)) : (openBlock(), createElementBlock("td", _hoisted_43)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_44, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_45, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : createCommentVNode("", true),
							_cache[13] || (_cache[13] = createBaseVNode("td", null, null, -1)),
							_cache[14] || (_cache[14] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true),
						hrt.level === "4" ? (openBlock(), createElementBlock("tr", _hoisted_46, [
							createBaseVNode("td", null, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Ubah",
								class: "edit-link",
								onClick: ($event) => edit_acc(hrt)
							}, "Ubah", 8, _hoisted_47)]),
							createBaseVNode("td", _hoisted_48, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1),
							createBaseVNode("td", null, toDisplayString(Number(_ctx.amount).toLocaleString()), 1),
							_cache[15] || (_cache[15] = createBaseVNode("td", null, null, -1)),
							_cache[16] || (_cache[16] = createBaseVNode("td", null, null, -1)),
							_cache[17] || (_cache[17] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true)
					], 8, _hoisted_12);
				}), 128))])])])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[7] || (_cache[7] = ($event) => isVisible.value = $event),
					draggable: true,
					title: modalTitle.value
				}, {
					default: withCtx(() => [
						withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value.oldid = $event)
						}, null, 512), [[vModelText, selected.value.oldid]]),
						createBaseVNode("div", _hoisted_49, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selected.value.parent = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.parent
							}, "Akun Induk " + toDisplayString(hrt.parent), 9, _hoisted_50);
						}), 128))], 512), [[vModelSelect, selected.value.parent]])]),
						createBaseVNode("div", _hoisted_51, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selected.value.level = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.level
							}, "Level " + toDisplayString(hrt.level), 9, _hoisted_52);
						}), 128))], 512), [[vModelSelect, selected.value.level]])]),
						createBaseVNode("div", _hoisted_53, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selected.value.jenis = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.jenis
							}, toDisplayString(hrt.jenis), 9, _hoisted_54);
						}), 128))], 512), [[vModelSelect, selected.value.jenis]])]),
						createBaseVNode("div", _hoisted_55, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selected.value.accid = $event),
							class: "form-control",
							disabled: ""
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.acc_id
							}, toDisplayString(hrt.name), 9, _hoisted_56);
						}), 128))], 512), [[vModelSelect, selected.value.accid]])]),
						createBaseVNode("div", _hoisted_57, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selected.value.name = $event)
						}, null, 512), [[vModelText, selected.value.name]])]),
						createBaseVNode("div", _hoisted_58, [createBaseVNode("button", {
							type: "button",
							onClick: _cache[6] || (_cache[6] = ($event) => simpan_acc()),
							class: "btn btn-success btn-download",
							disabled: isSaving.value
						}, [isSaving.value ? (openBlock(), createElementBlock("span", _hoisted_60)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(isSaving.value ? "Menyimpan..." : "Simpan"), 1)], 8, _hoisted_59)])
					]),
					_: 1
				}, 8, ["visible", "title"]),
				createBaseVNode("div", _hoisted_61, [createBaseVNode("div", _hoisted_62, [createBaseVNode("div", _hoisted_63, [createBaseVNode("div", _hoisted_64, [
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
					createBaseVNode("div", _hoisted_65, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-success btn-download w-100",
						onClick: loadData,
						disabled: isLoadingList.value
					}, [isLoadingList.value ? (openBlock(), createElementBlock("span", _hoisted_67)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(isLoadingList.value ? "Memuat..." : "Muat Data"), 1)], 8, _hoisted_66)]),
					createBaseVNode("div", _hoisted_68, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-dark btn-edit w-100",
						onClick: loadData,
						disabled: isLoadingList.value
					}, "Muat Ulang", 8, _hoisted_69)])
				])])])])
			])])])])]);
		};
	}
}, [["__scopeId", "data-v-9aed89a9"]]);
//#endregion
export { pendapatan_default as default };
