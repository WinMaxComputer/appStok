import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, H as renderList, I as onMounted, R as openBlock, T as createVNode, X as withDirectives, a as init_runtime_dom_esm_bundler, at as unref, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { a as useRoute, o as useRouter, s as useStore } from "../../assets/main-BY7jYvqS.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DQxrQuo_.js";
import { t as require_vue3_multiselect_umd_min } from "./vue3-multiselect-Cq5sgu2X.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/editBiaya.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
require_vue3_multiselect_umd_min();
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add" };
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
var _hoisted_9 = { class: "invoice-detail-header" };
var _hoisted_10 = { class: "row justify-content-between" };
var _hoisted_11 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_12 = { class: "invoice-address-company-fields" };
var _hoisted_13 = { class: "form-group row" };
var _hoisted_14 = { class: "col-sm-9" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-9" };
var _hoisted_17 = { class: "invoice-detail-items" };
var _hoisted_18 = { class: "table-responsive" };
var _hoisted_19 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_20 = ["onClick"];
var _hoisted_21 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_22 = ["onUpdate:modelValue"];
var _hoisted_23 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_24 = ["onUpdate:modelValue", "id"];
var _hoisted_25 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_26 = ["onUpdate:modelValue", "id"];
var _hoisted_27 = { style: {
	"padding": "0",
	"margin": "0"
} };
var _hoisted_28 = ["onUpdate:modelValue"];
var _hoisted_29 = ["value"];
var _hoisted_30 = { class: "invoice-detail-total" };
var _hoisted_31 = { class: "row" };
var _hoisted_32 = { class: "col-md-6" };
var _hoisted_33 = { class: "totals-row" };
var _hoisted_34 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_35 = { class: "invoice-summary-value" };
var _sfc_main = {
	__name: "editBiaya",
	props: {
		id: String,
		kd_trans: String,
		startDate: String
	},
	setup(__props) {
		useMeta({ title: "Edit Biaya" });
		const store = useStore();
		useRouter();
		useRoute();
		const items = ref([]);
		ref([]);
		const accs = ref();
		ref([]);
		const total = ref();
		const params = ref({
			noNota: props.kd_trans,
			tglNota: hooks(props.startDate).format("YYYY-MM-DD")
		});
		const props = __props;
		ref([
			"kd_trans",
			"tglBiaya",
			"keterangan_biaya",
			"jumlah",
			"action"
		]);
		ref({
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
		const sorting = ref({
			kd_trans: props.kd_trans,
			startDate: hooks(props.startDate).format("YYYY-MM-DD")
		});
		const GetCoaList = () => {
			store.dispatch("GetCoaList", { acc: "6" });
		};
		const getTotal = () => {
			total.value = 0;
			let il = items.value.length;
			for (var i = 0; i < il; i++) total.value += parseInt(items.value[i].biaya);
		};
		const simpanBiaya = () => {
			store.dispatch("DeleteBiaya", { id: params.value.noNota }).then((response) => {
				const header = params.value;
				const detail = items.value;
				store.dispatch("CreateBiaya", [header, detail]);
			}).catch((error) => {
				console.log("error: ", error);
			});
		};
		onMounted(async () => {
			await store.dispatch("GetBiayaDetail", sorting.value);
			total.value = 0;
			const byArr = store.getters.StateBiayaDetail;
			for (let a = 0; a < byArr.length; a++) {
				items.value.push({
					id: a + 1,
					name: byArr[a].keterangan_biaya,
					biaya: byArr[a].jumlah,
					satuan: byArr[a].satuan,
					acc: byArr[a].accid
				});
				total.value += parseInt(byArr[a].jumlah);
			}
			console.log(total.value);
			GetCoaList();
			setTimeout(function() {
				accs.value = store.getters.StateCoaList;
			}, 4e3);
		});
		const add_item = () => {
			let max_id = 0;
			if (items.value && items.value.length) max_id = items.value.reduce((max, character) => character.id > max ? character.id : max, items.value[0].id);
			items.value.push({
				id: max_id + 1,
				name: "",
				biaya: "",
				satuan: "",
				acc: ""
			});
		};
		const remove_item = (item) => {
			items.value = items.value.filter((d) => d.id != item.id);
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[4] || (_cache[4] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Apps")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Invoice Add")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[14] || (_cache[14] = createBaseVNode("ul", {
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
			}, [createBaseVNode("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), createBaseVNode("polyline", { points: "9 22 9 12 15 12 15 22" })]), createTextVNode(" Edit Transaksi Biaya ")])])], -1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[12] || (_cache[12] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title" }, " Form Biaya ")], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[5] || (_cache[5] = createBaseVNode("label", {
					for: "company-name",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "No Nota", -1)), createBaseVNode("div", _hoisted_14, [withDirectives(createBaseVNode("input", {
					type: "text",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
					id: "number",
					class: "form-control form-control-sm",
					placeholder: "#0001",
					disabled: ""
				}, null, 512), [[vModelText, params.value.noNota]])])]), createBaseVNode("div", _hoisted_15, [_cache[6] || (_cache[6] = createBaseVNode("label", {
					for: "company-email",
					class: "col-sm-3 col-form-label col-form-label-sm"
				}, "Tgl", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: params.value.tglNota,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
					class: "form-control form-control-sm flatpickr active",
					placeholder: "Invoice Date"
				}, null, 8, ["modelValue"])])])])]), _cache[7] || (_cache[7] = createBaseVNode("div", { class: "col-xl-5 invoice-address-client" }, null, -1))])]),
				createBaseVNode("div", _hoisted_17, [createBaseVNode("div", _hoisted_18, [createBaseVNode("table", null, [_cache[9] || (_cache[9] = createBaseVNode("thead", null, [createBaseVNode("tr", { style: {
					"padding": "0",
					"margin": "0"
				} }, [
					createBaseVNode("th", { class: "" }),
					createBaseVNode("th", null, "Description"),
					createBaseVNode("th", { class: "" }, "Biaya"),
					createBaseVNode("th", { class: "" }, "Satuan"),
					createBaseVNode("th", { class: "text-end" }, "Akun")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, index) => {
					return openBlock(), createElementBlock("tr", { key: index }, [
						createBaseVNode("td", _hoisted_19, [createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("a", {
							href: "javascript:void(0);",
							class: "delete-item",
							onClick: ($event) => remove_item(item)
						}, _cache[8] || (_cache[8] = [createBaseVNode("svg", {
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
						], -1)]), 8, _hoisted_20)])])]),
						createBaseVNode("td", _hoisted_21, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.name = $event
						}, null, 8, _hoisted_22), [[vModelText, item.name]])]),
						createBaseVNode("td", _hoisted_23, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.biaya = $event,
							id: "biaya" + index,
							width: "100%",
							onKeyup: _cache[2] || (_cache[2] = ($event) => getTotal()),
							placeholder: "Biaya",
							onKeypress: onlyNumber
						}, null, 40, _hoisted_24), [[vModelText, item.biaya]])]),
						createBaseVNode("td", _hoisted_25, [withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": ($event) => item.satuan = $event,
							id: "satuan" + index,
							width: "100%",
							placeholder: "Satuan"
						}, null, 8, _hoisted_26), [[vModelText, item.satuan]])]),
						createBaseVNode("td", _hoisted_27, [withDirectives(createBaseVNode("select", {
							id: "inputState",
							"onUpdate:modelValue": ($event) => item.acc = $event,
							class: "form-select"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(accs.value, (ac) => {
							return openBlock(), createElementBlock("option", {
								value: ac.acc_id,
								key: ac.acc_id,
								selected: ""
							}, toDisplayString(ac.name), 9, _hoisted_29);
						}), 128))], 8, _hoisted_28), [[vModelSelect, item.acc]])])
					]);
				}), 128))])])]), createBaseVNode("button", {
					type: "button",
					class: "btn btn-secondary additem btn-sm",
					onClick: _cache[3] || (_cache[3] = ($event) => add_item())
				}, "Add Item")]),
				createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", { class: "col-md-6" }, [createBaseVNode("div", { class: "invoice-actions-btn" }, [createBaseVNode("div", { class: "invoice-action-btn" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-sm-4" }, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: simpanBiaya,
					class: "btn btn-success btn-download"
				}, "Save")])])])])]), createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [
					_cache[10] || (_cache[10] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)),
					_cache[11] || (_cache[11] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
					createBaseVNode("div", _hoisted_35, [createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])
				])])])])])
			])])])])]), _cache[13] || (_cache[13] = createBaseVNode("div", {
				class: "tab-pane fade",
				id: "underline-profile",
				role: "tabpanel",
				"aria-labelledby": "underline-profile-tab"
			}, [createBaseVNode("div", { class: "col-xl-12" }, [createBaseVNode("div", { class: "invoice-content" }, [createBaseVNode("div", { class: "invoice-detail-body" }, [createBaseVNode("div", { class: "invoice-detail-header" }, [createBaseVNode("div", { class: "row justify-content-between" })])])])])], -1))])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
