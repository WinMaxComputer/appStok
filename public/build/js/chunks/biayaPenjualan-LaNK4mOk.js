import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, R as openBlock, T as createVNode, W as resolveComponent, X as withDirectives, Y as withCtx, a as init_runtime_dom_esm_bundler, at as unref, b as createCommentVNode, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as useRoute, o as useRouter, s as useStore } from "../../assets/main-pB2iG2j0.js";
/* empty css                         */
import { t as D } from "./usemodal-vue3-Bm5MdBX0.js";
import "./moment-DHGdmE-4.js";
//#region resources/js/src/views/coa/biayaPenjualan.vue
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
var _hoisted_10 = ["set"];
var _hoisted_11 = { key: 0 };
var _hoisted_12 = {
	key: 0,
	style: { "min-width": "70px" }
};
var _hoisted_13 = ["onClick"];
var _hoisted_14 = { key: 1 };
var _hoisted_15 = {
	key: 2,
	style: { "min-width": "400px" }
};
var _hoisted_16 = {
	key: 3,
	style: { "min-width": "400px" }
};
var _hoisted_17 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_18 = { key: 5 };
var _hoisted_19 = { key: 6 };
var _hoisted_20 = { key: 0 };
var _hoisted_21 = { key: 7 };
var _hoisted_22 = { key: 8 };
var _hoisted_23 = { key: 1 };
var _hoisted_24 = { key: 0 };
var _hoisted_25 = ["onClick"];
var _hoisted_26 = { key: 1 };
var _hoisted_27 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_28 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_29 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_30 = { key: 5 };
var _hoisted_31 = { key: 6 };
var _hoisted_32 = { key: 7 };
var _hoisted_33 = { key: 8 };
var _hoisted_34 = { key: 2 };
var _hoisted_35 = { key: 0 };
var _hoisted_36 = ["onClick"];
var _hoisted_37 = { key: 1 };
var _hoisted_38 = {
	key: 2,
	style: { "min-width": "300px" }
};
var _hoisted_39 = {
	key: 3,
	style: { "min-width": "300px" }
};
var _hoisted_40 = {
	key: 4,
	style: { "border-top": "1px solid black" }
};
var _hoisted_41 = { key: 5 };
var _hoisted_42 = { key: 6 };
var _hoisted_43 = { key: 7 };
var _hoisted_44 = { key: 3 };
var _hoisted_45 = ["onClick"];
var _hoisted_46 = { style: { "min-width": "300px" } };
var _hoisted_47 = { class: "input-group input-group-sm mb-4" };
var _hoisted_48 = ["value"];
var _hoisted_49 = { class: "input-group input-group-sm mb-4" };
var _hoisted_50 = ["value"];
var _hoisted_51 = { class: "input-group mb-4" };
var _hoisted_52 = ["value"];
var _hoisted_53 = { class: "input-group input-group-sm mb-4" };
var _hoisted_54 = ["value"];
var _hoisted_55 = { class: "input-group input-group-sm mb-4" };
var _hoisted_56 = { class: "input-group input-group-sm mb-4" };
var _hoisted_57 = { class: "col-xl-3" };
var _hoisted_58 = { class: "invoice-actions-btn" };
var _hoisted_59 = { class: "invoice-action-btn" };
var _hoisted_60 = { class: "row" };
var _hoisted_61 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_62 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _sfc_main = {
	__name: "biayaPenjualan",
	setup(__props) {
		useMeta({ title: "BBM" });
		const store = useStore();
		useRouter();
		useRoute();
		const isVisible = ref(false);
		const selected = ref({
			accid: "",
			name: "",
			level: "",
			parent: "",
			jenis: "",
			oldid: "",
			amount: 0
		});
		const hartalist = ref();
		onMounted(() => {
			const harta = ref({ group: "5" });
			store.dispatch("GetHarta", harta.value);
			setTimeout(function() {
				hartalist.value = store.getters.StateHarta;
			}, 3e3);
		});
		const edit_acc = (accid, level, parent, name, jenis) => {
			selected.value.accid = accid;
			selected.value.level = level;
			selected.value.parent = parent;
			selected.value.name = name;
			selected.value.jenis = jenis;
			isVisible.value = true;
		};
		const simpan_acc = () => {
			store.dispatch("CreateAcc", selected.value).then((res) => {
				if (res.data.success === true) {
					store.dispatch("GetHarta", { group: "5" });
					setTimeout(function() {
						hartalist.value = store.getters.StateHarta;
					}, 3e3);
					isVisible.value = false;
				} else console.log("gagal");
			});
		};
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[9] || (_cache[9] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Sales")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [_cache[19] || (_cache[19] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Biaya Penjualan / Hpp")])])], -1)), createBaseVNode("div", _hoisted_9, [createBaseVNode("table", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt, index) => {
					return openBlock(), createElementBlock("tbody", {
						key: hrt.acc_id,
						set: _ctx.amount = hrt.amount
					}, [
						hrt.level === "1" ? (openBlock(), createElementBlock("tr", _hoisted_11, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_12, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Edit",
								onClick: ($event) => edit_acc(_ctx.accid = hrt.acc_id, _ctx.level = hrt.level, _ctx.parent = hrt.parent, _ctx.name = hrt.name, _ctx.jenis = hrt.jenis)
							}, "edit", 8, _hoisted_13)])) : (openBlock(), createElementBlock("td", _hoisted_14)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_15, [createBaseVNode("b", null, "\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_16, "\xA0\xA0" + toDisplayString(hrt.name), 1)),
							_cache[10] || (_cache[10] = createBaseVNode("td", null, null, -1)),
							_cache[11] || (_cache[11] = createBaseVNode("td", null, null, -1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_17)) : (openBlock(), createElementBlock("td", _hoisted_18)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_19, [hrt.acc_id.substring(0, 1) === "2" || hrt.acc_id.substring(0, 1) === "2" ? (openBlock(), createElementBlock("div", _hoisted_20, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : createCommentVNode("", true), createBaseVNode("div", null, toDisplayString(Number(_ctx.amount += hrt.amount[index]).toLocaleString()), 1)])) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_21, [createBaseVNode("b", null, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)])) : (openBlock(), createElementBlock("td", _hoisted_22))
						])) : createCommentVNode("", true),
						hrt.level === "2" ? (openBlock(), createElementBlock("tr", _hoisted_23, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_24, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Edit",
								onClick: ($event) => edit_acc(_ctx.accid = hrt.acc_id, _ctx.level = hrt.level, _ctx.parent = hrt.parent, _ctx.name = hrt.name, _ctx.jenis = hrt.jenis)
							}, "edit", 8, _hoisted_25)])) : (openBlock(), createElementBlock("td", _hoisted_26)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_27, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_28, "\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
							_cache[12] || (_cache[12] = createBaseVNode("td", null, null, -1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_29)) : (openBlock(), createElementBlock("td", _hoisted_30)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_31, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_32, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : (openBlock(), createElementBlock("td", _hoisted_33)),
							_cache[13] || (_cache[13] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true),
						hrt.level === "3" ? (openBlock(), createElementBlock("tr", _hoisted_34, [
							hrt.jenis != "Total" ? (openBlock(), createElementBlock("td", _hoisted_35, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Edit",
								onClick: ($event) => edit_acc(_ctx.accid = hrt.acc_id, _ctx.level = hrt.level, _ctx.parent = hrt.parent, _ctx.name = hrt.name, _ctx.jenis = hrt.jenis)
							}, "edit", 8, _hoisted_36)])) : (openBlock(), createElementBlock("td", _hoisted_37)),
							hrt.jenis === "Total" || hrt.jenis.substring(0, 1) === "H" ? (openBlock(), createElementBlock("td", _hoisted_38, [createBaseVNode("b", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)])) : (openBlock(), createElementBlock("td", _hoisted_39, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1)),
							hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_40)) : (openBlock(), createElementBlock("td", _hoisted_41)),
							hrt.jenis === "Detail" ? (openBlock(), createElementBlock("td", _hoisted_42, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : hrt.jenis === "Total" ? (openBlock(), createElementBlock("td", _hoisted_43, toDisplayString(Number(_ctx.amount).toLocaleString()), 1)) : createCommentVNode("", true),
							_cache[14] || (_cache[14] = createBaseVNode("td", null, null, -1)),
							_cache[15] || (_cache[15] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true),
						hrt.level === "4" ? (openBlock(), createElementBlock("tr", _hoisted_44, [
							createBaseVNode("td", null, [createTextVNode(toDisplayString(hrt.acc_id) + " ", 1), createBaseVNode("a", {
								href: "javascript:void(0);",
								title: "Edit",
								onClick: ($event) => edit_acc(_ctx.accid = hrt.acc_id, _ctx.level = hrt.level, _ctx.parent = hrt.parent, _ctx.name = hrt.name, _ctx.jenis = hrt.jenis)
							}, "edit", 8, _hoisted_45)]),
							createBaseVNode("td", _hoisted_46, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0" + toDisplayString(hrt.name), 1),
							createBaseVNode("td", null, toDisplayString(Number(_ctx.amount).toLocaleString()), 1),
							_cache[16] || (_cache[16] = createBaseVNode("td", null, null, -1)),
							_cache[17] || (_cache[17] = createBaseVNode("td", null, null, -1)),
							_cache[18] || (_cache[18] = createBaseVNode("td", null, null, -1))
						])) : createCommentVNode("", true)
					], 8, _hoisted_10);
				}), 128))])])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[7] || (_cache[7] = ($event) => isVisible.value = $event),
					draggable: true,
					title: _ctx.edit
				}, {
					default: withCtx(() => [
						withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value.oldid = $event)
						}, null, 512), [[vModelText, selected.value.oldid]]),
						createBaseVNode("div", _hoisted_47, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selected.value.parent = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.parent
							}, "Acc Parent " + toDisplayString(hrt.parent), 9, _hoisted_48);
						}), 128))], 512), [[vModelSelect, selected.value.parent]])]),
						createBaseVNode("div", _hoisted_49, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selected.value.level = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.level
							}, "Level " + toDisplayString(hrt.level), 9, _hoisted_50);
						}), 128))], 512), [[vModelSelect, selected.value.level]])]),
						createTextVNode(" " + toDisplayString(selected.value.jenis) + " ", 1),
						createBaseVNode("div", _hoisted_51, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selected.value.jenis = $event),
							class: "form-control"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.jenis
							}, toDisplayString(hrt.jenis), 9, _hoisted_52);
						}), 128))], 512), [[vModelSelect, selected.value.jenis]])]),
						createBaseVNode("div", _hoisted_53, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selected.value.accid = $event),
							class: "form-control",
							disabled: ""
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(hartalist.value, (hrt) => {
							return openBlock(), createElementBlock("option", {
								key: hrt.acc_id,
								value: hrt.acc_id
							}, toDisplayString(hrt.name), 9, _hoisted_54);
						}), 128))], 512), [[vModelSelect, selected.value.accid]])]),
						createBaseVNode("div", _hoisted_55, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selected.value.name = $event)
						}, null, 512), [[vModelText, selected.value.name]])]),
						createBaseVNode("div", _hoisted_56, [createBaseVNode("a", {
							href: "javascript:;",
							onClick: _cache[6] || (_cache[6] = ($event) => simpan_acc()),
							class: "btn btn-success btn-download"
						}, "Simpan")])
					]),
					_: 1
				}, 8, ["visible", "title"]),
				createBaseVNode("div", _hoisted_57, [createBaseVNode("div", _hoisted_58, [createBaseVNode("div", _hoisted_59, [createBaseVNode("div", _hoisted_60, [
					createBaseVNode("div", _hoisted_61, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-secondary btn-print action-print",
						onClick: _cache[8] || (_cache[8] = ($event) => _ctx.print())
					}, "Print")]),
					_cache[21] || (_cache[21] = createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-primary btn-send"
					}, "Send Invoice")], -1)),
					_cache[22] || (_cache[22] = createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-success btn-download"
					}, "Download")], -1)),
					createBaseVNode("div", _hoisted_62, [createVNode(_component_router_link, {
						to: "/apps/invoice/edit",
						class: "btn btn-dark btn-edit"
					}, {
						default: withCtx(() => _cache[20] || (_cache[20] = [createTextVNode("Edit")])),
						_: 1
					})])
				])])])])
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
