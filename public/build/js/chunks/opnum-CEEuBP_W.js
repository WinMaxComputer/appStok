import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, W as resolveComponent, X as withDirectives, Y as withCtx, _ as computed, a as init_runtime_dom_esm_bundler, at as unref, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { s as useStore } from "../../assets/main-pB2iG2j0.js";
/* empty css                      */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-BcjfB4fA.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/opnum.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "row layout-top-spacing" };
var _hoisted_4 = { class: "underline-content tabs" };
var _hoisted_5 = {
	class: "tab-content",
	id: "lineTabContent-3"
};
var _hoisted_6 = {
	class: "tab-pane fade show active",
	id: "underline-home",
	role: "tabpanel",
	"aria-labelledby": "underline-home-tab"
};
var _hoisted_7 = {
	id: "tableHover",
	class: "col-lg-12 layout-spacing"
};
var _hoisted_8 = { class: "statbox panel box box-shadow" };
var _hoisted_9 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_10 = { class: "col-md-4" };
var _hoisted_11 = { class: "input-group mb-4" };
var _hoisted_12 = { class: "panel-body" };
var _hoisted_13 = { class: "table-responsive" };
var _hoisted_14 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-hover table-bordered",
	id: "__BVID__415"
};
var _hoisted_15 = { role: "rowgroup" };
var _hoisted_16 = {
	"aria-colindex": "1",
	role: "cell"
};
var _hoisted_17 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_18 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_19 = {
	"aria-colindex": "4",
	role: "cell"
};
var _hoisted_20 = {
	"aria-colindex": "5",
	role: "cell"
};
var _hoisted_21 = ["onUpdate:modelValue"];
var _hoisted_22 = {
	"aria-colindex": "5",
	role: "cell"
};
var _hoisted_23 = ["onUpdate:modelValue"];
var _hoisted_24 = {
	"aria-colindex": "5",
	role: "cell"
};
var _hoisted_25 = {
	class: "tab-pane fade",
	id: "underline-profile",
	role: "tabpanel",
	"aria-labelledby": "underline-profile-tab"
};
var _hoisted_26 = { class: "col-xl-12" };
var _hoisted_27 = { class: "invoice-content" };
var _hoisted_28 = { class: "invoice-detail-body" };
var _hoisted_29 = { class: "invoice-detail-header" };
var _hoisted_30 = { class: "row justify-content-between" };
var _hoisted_31 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_32 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_33 = { class: "doc-container" };
var _hoisted_34 = { class: "row" };
var _hoisted_35 = { class: "col-xl-9" };
var _hoisted_36 = { class: "invoice-container" };
var _hoisted_37 = { class: "table-responsive" };
var _hoisted_38 = { class: "custom-dropdown dropdown btn-group" };
var _hoisted_39 = { class: "dropdown-menu dropdown-menu-end" };
var _hoisted_40 = { class: "col-xl-3" };
var _hoisted_41 = { class: "invoice-actions-btn" };
var _hoisted_42 = { class: "invoice-action-btn" };
var _hoisted_43 = { class: "row" };
var _hoisted_44 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_45 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_46 = { class: "row mb-4" };
var _hoisted_47 = { class: "col-sm" };
var _hoisted_48 = { class: "col-sm" };
var _hoisted_49 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _sfc_main = {
	__name: "opnum",
	setup(__props) {
		useMeta({ title: "Opnum BBM" });
		const store = useStore();
		const table_1 = ref([]);
		const item_now = ref({});
		const keterangan = ref({});
		const noopnum = ref([]);
		const total = ref([]);
		const inp = ref(80);
		const headopnum = ref({
			kdOpnum: noopnum,
			tglOpnum: hooks().format("D-M-YYYY"),
			userOpnum: "1",
			totalOpnum: total
		});
		onMounted(() => {
			bind_list_opnum();
			bind_data();
			getNoOpnum();
		});
		const columns = ref([
			"kdOpnum",
			"tglOpnum",
			"totalOpnum",
			"action"
		]);
		const items = ref([]);
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
				"kdOpnum",
				"tglOpnum",
				"totalOpnum"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const bind_list_opnum = () => {
			store.dispatch("GetLaporanOpnum", sorting.value);
		};
		computed(() => {
			items.value = store.getters.SlaporanOpnum;
			let sum = 0;
			items.value.forEach((element) => {
				sum += parseInt(element.total);
			});
		});
		const getNoOpnum = async () => {
			await store.dispatch("GetNoOpnum");
			noopnum.value = store.getters.NoOpnum;
		};
		const bind_data = async () => {
			await store.dispatch("GetPersediaan");
			table_1.value = store.getters.StatePersediaan;
		};
		const simpanOpnum = () => {
			var dataArr = table_1.value;
			const arr = [];
			let tota = 0;
			for (let i = 0; i < dataArr.length; i++) {
				let subto = dataArr[i].lastPrice * (dataArr[i].stokPersediaan - item_now.value[i]);
				let ket = keterangan.value[i];
				if (!isNaN(subto)) {
					if (!ket) ket = "-";
					arr.push({
						"kdBarang": dataArr[i].kdPersediaan,
						"nmBarang": dataArr[i].nmPersediaan,
						"keterangan": ket,
						"qty": item_now.value[i],
						"selisih": dataArr[i].stokPersediaan - item_now.value[i],
						"total": subto
					});
					tota += parseInt(subto);
					total.value = tota;
				}
				item_now.value[i] = NaN;
				keterangan.value[i] = NaN;
			}
			store.dispatch("CreateOpnum", [headopnum.value, arr]);
			getNoOpnum();
			bind_data();
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[7] || (_cache[7] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Tables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Basic")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[16] || (_cache[16] = createStaticVNode("<div class=\"row layout-top-spacing\"><div class=\"col-lg-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Stok Opnum </div></div></div>", 1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [_cache[15] || (_cache[15] = createBaseVNode("ul", {
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
			})]), createTextVNode(" Daftar ")])])], -1)), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[9] || (_cache[9] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" })])], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [
					withDirectives(createBaseVNode("input", {
						type: "text",
						class: "form-control form-control-sm",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => headopnum.value.kdOpnum = $event),
						disabled: ""
					}, null, 512), [[vModelText, headopnum.value.kdOpnum]]),
					createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: headopnum.value.tglOpnum,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => headopnum.value.tglOpnum = $event),
						config: { dateFormat: "d-m-Y" },
						class: "form-control form-control-sm"
					}, null, 8, ["modelValue"]),
					createBaseVNode("button", {
						variant: "primary",
						class: "btn m-1 btn-primary",
						onClick: _cache[2] || (_cache[2] = ($event) => simpanOpnum())
					}, "Simpan")
				])])]),
				createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("table", _hoisted_14, [_cache[8] || (_cache[8] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "1"
					}, [createBaseVNode("div", null, "Kode")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "2"
					}, [createBaseVNode("div", null, "nama")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "3"
					}, [createBaseVNode("div", null, "stok")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "4"
					}, [createBaseVNode("div", null, "satuan")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "5"
					}, [createBaseVNode("div", null, "Qty")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "5"
					}, [createBaseVNode("div", null, "Keterangan")]),
					createBaseVNode("th", {
						role: "columnheader",
						scope: "col",
						"aria-colindex": "5"
					}, [createBaseVNode("div", null, "Selisih")])
				])], -1)), createBaseVNode("tbody", _hoisted_15, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, index) => {
					return openBlock(), createElementBlock("tr", {
						key: item.index,
						role: "row"
					}, [
						createBaseVNode("td", _hoisted_16, toDisplayString(item.kdPersediaan), 1),
						createBaseVNode("td", _hoisted_17, toDisplayString(item.nmPersediaan), 1),
						createBaseVNode("td", _hoisted_18, toDisplayString(item.stokPersediaan), 1),
						createBaseVNode("td", _hoisted_19, toDisplayString(item.satuanPersediaan), 1),
						createBaseVNode("td", _hoisted_20, [createBaseVNode("div", { style: normalizeStyle({ "width": inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control form-control-sm col-sm-2",
							"onUpdate:modelValue": ($event) => item_now.value[index] = $event,
							onKeypress: onlyNumber
						}, null, 40, _hoisted_21), [[vModelText, item_now.value[index]]])], 4)]),
						createBaseVNode("td", _hoisted_22, [createBaseVNode("div", { style: normalizeStyle({ "width": inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control form-control-sm col-sm-2",
							"onUpdate:modelValue": ($event) => keterangan.value[index] = $event
						}, null, 8, _hoisted_23), [[vModelText, keterangan.value[index]]])], 4)]),
						createBaseVNode("td", _hoisted_24, toDisplayString(item.stokPersediaan - item_now.value[index]), 1)
					]);
				}), 128))])])])])
			])])]), createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [createVNode(_component_v_client_table, {
				data: items.value,
				columns: columns.value,
				options: table_option.value
			}, {
				tglOpnum: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tglOpnum).format("DD-MM-YYYY")), 1)]),
				totalOpnum: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.totalOpnum).toLocaleString()), 1)]),
				action: withCtx((props) => [createBaseVNode("div", _hoisted_38, [_cache[12] || (_cache[12] = createBaseVNode("div", {
					class: "btn-group",
					href: "#",
					role: "button",
					id: "pendingTask",
					"data-bs-toggle": "dropdown",
					"aria-haspopup": "true",
					"aria-expanded": "false"
				}, [createBaseVNode("div", {
					role: "group",
					class: "btn-group"
				}, [createBaseVNode("div", { class: "dropdown b-dropdown custom-dropdown show btn-group" }, [createBaseVNode("a", { class: "btn dropdown-toggle btn-dark" }, [createBaseVNode("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "feather feather-chevron-down"
				}, [createBaseVNode("polyline", { points: "6 9 12 15 18 9" })])])])])], -1)), createBaseVNode("ul", _hoisted_39, [createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: "/editpenjualan",
					class: "dropdown-item",
					onClick: ($event) => _ctx.edit_row(props.row)
				}, {
					default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode("Edit")])),
					_: 2
				}, 1032, ["onClick"])]), createBaseVNode("li", null, [createVNode(_component_router_link, {
					to: {
						name: "nosel",
						params: { id: props.row }
					},
					class: "dropdown-item"
				}, {
					default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode("coba")])),
					_: 2
				}, 1032, ["to"])])])])]),
				_: 1
			}, 8, [
				"data",
				"columns",
				"options"
			])])])]), createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("div", _hoisted_42, [createBaseVNode("div", _hoisted_43, [
				createBaseVNode("div", _hoisted_44, [createBaseVNode("a", {
					href: "javascript:;",
					class: "btn btn-secondary btn-print action-print",
					onClick: _cache[3] || (_cache[3] = ($event) => _ctx.print())
				}, "Print")]),
				createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [createBaseVNode("div", _hoisted_47, [_cache[13] || (_cache[13] = createBaseVNode("label", { for: "inputState" }, "Awal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.startDate,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sorting.value.startDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])]), createBaseVNode("div", _hoisted_48, [_cache[14] || (_cache[14] = createBaseVNode("label", { for: "inputState" }, "Akhir", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
					modelValue: sorting.value.endDate,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sorting.value.endDate = $event),
					config: { dateFormat: "d-m-Y" },
					class: "form-control form-control-sm"
				}, null, 8, ["modelValue"])])])]),
				createBaseVNode("div", _hoisted_49, [createBaseVNode("a", {
					href: "javascript:;",
					onClick: _cache[6] || (_cache[6] = (...args) => _ctx.cari && _ctx.cari(...args)),
					class: "btn btn-success btn-download"
				}, "Cari")])
			])])])])])])])])])])])])])])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
