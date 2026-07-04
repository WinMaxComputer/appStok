import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, H as renderList, I as onMounted, R as openBlock, _ as computed, b as createCommentVNode, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { c as useStore, o as useRoute, s as useRouter } from "../../assets/main-B6cAUmtZ.js";
import "./moment-DHGdmE-4.js";
//#region resources/js/src/views/master/coa.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing dash_2" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = {
	id: "tableSimple",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_4 = { class: "statbox panel box box-shadow" };
var _hoisted_5 = { class: "panel-body" };
var _hoisted_6 = { class: "table-responsive" };
var _hoisted_7 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-bordered"
};
var _hoisted_8 = { style: { "width": "100%" } };
var _hoisted_9 = { role: "row" };
var _hoisted_10 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_11 = {
	key: 0,
	role: "row"
};
var _hoisted_12 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_13 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_14 = {
	key: 0,
	role: "row"
};
var _hoisted_15 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_16 = {
	"aria-colindex": "3",
	role: "cell"
};
var _sfc_main = {
	__name: "coa",
	setup(__props) {
		useMeta({ title: "BBM" });
		const store = useStore();
		useRouter();
		useRoute();
		const users = computed(() => {
			const bbm = store.getters.StateBbm;
			const lv1 = coalist.value.level1;
			const lv2 = coalist.value.level2;
			return {
				users,
				bbm,
				lv1,
				lv2
			};
		});
		const coalist = ref({});
		onMounted(() => {
			store.dispatch("GetCoaList");
			setTimeout(function() {
				coalist.value = store.getters.StateCoaList;
			}, 5e3);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[0] || (_cache[0] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Sales")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [_cache[13] || (_cache[13] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Table")])])], -1)), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("table", _hoisted_7, [_cache[12] || (_cache[12] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
				createBaseVNode("th", {
					role: "columnheader",
					scope: "col",
					"aria-colindex": "2"
				}, [createBaseVNode("div", null, "Code")]),
				createBaseVNode("th", {
					role: "columnheader",
					scope: "col",
					"aria-colindex": "3"
				}, [createBaseVNode("div", null, "Name")]),
				createBaseVNode("th", {
					role: "columnheader",
					scope: "col",
					"aria-colindex": "4",
					class: "text-center"
				}, [createBaseVNode("div", null, "status")])
			])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(users.value.lv1, (lv1) => {
				return openBlock(), createElementBlock("tbody", {
					role: "rowgroup",
					key: lv1.id
				}, [
					createBaseVNode("div", _hoisted_8, [createBaseVNode("tr", _hoisted_9, [
						createBaseVNode("td", _hoisted_10, [_cache[1] || (_cache[1] = createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2 icon\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>", 1)), createTextVNode(" " + toDisplayString(lv1.acc_id), 1)]),
						createBaseVNode("td", null, toDisplayString(lv1.name), 1),
						_cache[2] || (_cache[2] = createBaseVNode("td", {
							"aria-colindex": "3",
							role: "cell"
						}, null, -1)),
						_cache[3] || (_cache[3] = createBaseVNode("td", {
							"aria-colindex": "4",
							role: "cell"
						}, "0", -1))
					])]),
					(openBlock(true), createElementBlock(Fragment, null, renderList(users.value.lv2, (lv2) => {
						return openBlock(), createElementBlock("div", { key: lv2.id }, [lv1.acc_id === lv2.parent ? (openBlock(), createElementBlock("tr", _hoisted_11, [
							createBaseVNode("td", _hoisted_12, [_cache[4] || (_cache[4] = createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2 icon\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>", 1)), createTextVNode(" " + toDisplayString(lv2.acc_id), 1)]),
							_cache[5] || (_cache[5] = createBaseVNode("td", null, null, -1)),
							createBaseVNode("td", _hoisted_13, toDisplayString(lv2.acc_id) + toDisplayString(lv2.name), 1),
							_cache[6] || (_cache[6] = createBaseVNode("td", {
								"aria-colindex": "4",
								role: "cell"
							}, "0", -1)),
							_cache[7] || (_cache[7] = createBaseVNode("td", null, "0", -1))
						])) : createCommentVNode("", true)]);
					}), 128)),
					(openBlock(true), createElementBlock(Fragment, null, renderList(users.value.lv3, (lv3) => {
						return openBlock(), createElementBlock("div", { key: lv3.id }, [_ctx.lv2.acc_id === lv3.parent ? (openBlock(), createElementBlock("tr", _hoisted_14, [
							createBaseVNode("td", _hoisted_15, [_cache[8] || (_cache[8] = createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2 icon\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>", 1)), createTextVNode(" " + toDisplayString(lv3.acc_id), 1)]),
							_cache[9] || (_cache[9] = createBaseVNode("td", null, null, -1)),
							createBaseVNode("td", _hoisted_16, toDisplayString(lv3.acc_id) + toDisplayString(lv3.name), 1),
							_cache[10] || (_cache[10] = createBaseVNode("td", {
								"aria-colindex": "4",
								role: "cell"
							}, "0", -1)),
							_cache[11] || (_cache[11] = createBaseVNode("td", null, "0", -1))
						])) : createCommentVNode("", true)]);
					}), 128))
				]);
			}), 128))])])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
