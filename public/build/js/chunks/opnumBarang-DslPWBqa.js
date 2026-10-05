import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { At as normalizeStyle, B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, Q as withDirectives, S as createElementBlock, T as createTextVNode, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, w as createStaticVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-BInbW9ud.js";
/* empty css                      */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-CxUCDc-U.js";
/* empty css                     */
//#region resources/js/src/views/transaksi/opnumBarang.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "row layout-top-spacing" };
var _hoisted_4 = {
	id: "tableHover",
	class: "col-lg-12 layout-spacing"
};
var _hoisted_5 = { class: "statbox panel box box-shadow" };
var _hoisted_6 = { class: "d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0" };
var _hoisted_7 = { class: "col-md-4" };
var _hoisted_8 = { class: "input-group mb-4" };
var _hoisted_9 = { class: "panel-body" };
var _hoisted_10 = { class: "d-flex align-items-center gap-2" };
var _hoisted_11 = ["onUpdate:modelValue"];
var _hoisted_12 = ["onUpdate:modelValue"];
var _hoisted_13 = ["onUpdate:modelValue"];
var _sfc_main = {
	__name: "opnumBarang",
	setup(__props) {
		useMeta({ title: "Opnum Barang" });
		const store = useStore();
		const table_1 = ref([]);
		const item_now = ref({});
		const posting = ref({});
		const keterangan = ref({});
		const noopnum = ref("");
		const total = ref(0);
		const inp = ref(80);
		const columns = ref([
			"kdBarang",
			"nmBarang",
			"stokPersediaan",
			"namaKtg",
			"qty",
			"keterangan",
			"selisih"
		]);
		const table_option = ref({
			perPage: 10,
			perPageValues: [
				5,
				10,
				20,
				50
			],
			perPageSelect: true,
			skin: "table table-hover table-bordered",
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
				"kdBarang",
				"nmBarang",
				"stokPersediaan",
				"namaKtg"
			],
			sortIcon: {
				base: "sort-icon-none",
				up: "sort-icon-asc",
				down: "sort-icon-desc"
			},
			resizableColumns: true
		});
		const headopnum = ref({
			kdOpnum: "",
			tglOpnum: hooks().format("D-M-YYYY"),
			userOpnum: "1",
			totalOpnum: 0
		});
		onMounted(() => {
			bind_data();
			getNoOpnum();
		});
		const getNoOpnum = async () => {
			await store.dispatch("GetNoOpnum");
			noopnum.value = store.getters.NoOpnum;
			headopnum.value.kdOpnum = noopnum.value;
		};
		const bind_data = async () => {
			await store.dispatch("GetBarang");
			table_1.value = store.getters.StateBarang || [];
			item_now.value = {};
			keterangan.value = {};
			posting.value = {};
			table_1.value.forEach((item) => {
				item_now.value[item.kdBarang] = item.qty ?? "";
				keterangan.value[item.kdBarang] = item.keterangan ?? "";
				posting.value[item.kdBarang] = item.posting ?? "0";
			});
		};
		const simpanOpnum = async () => {
			const dataArr = table_1.value || [];
			const arr = [];
			let tota = 0;
			for (let i = 0; i < dataArr.length; i++) {
				const rowId = dataArr[i].kdBarang;
				const inputValue = item_now.value[rowId];
				const qty = Number(inputValue ?? 0);
				const selisih = Number(dataArr[i].stokPersediaan || 0) - qty;
				const subtotal = Number(dataArr[i].hrgPokok || 0) * selisih;
				const ket = keterangan.value[rowId] || "-";
				const isFilled = inputValue !== "" && inputValue !== null && inputValue !== void 0;
				if (!Number.isNaN(subtotal) && isFilled) {
					arr.push({
						kdBarang: dataArr[i].kdBarang,
						nmBarang: dataArr[i].nmBarang,
						accid_persediaan: dataArr[i].accid_persediaan,
						accid_biaya: dataArr[i].accid_biaya,
						keterangan: ket,
						posting: posting.value[rowId] ?? "0",
						qty,
						selisih,
						total: subtotal
					});
					tota += subtotal;
				}
				item_now.value[rowId] = "";
				keterangan.value[rowId] = "";
				posting.value[rowId] = "0";
			}
			if (!arr.length) return;
			total.value = tota;
			headopnum.value.totalOpnum = tota;
			await store.dispatch("CreateOpnum", [headopnum.value, arr]);
			await getNoOpnum();
			await bind_data();
		};
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[3] || (_cache[3] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Tables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Basic")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[6] || (_cache[6] = createStaticVNode("<div class=\"row layout-top-spacing\"><div class=\"col-lg-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Stok Opnum </div></div></div>", 1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[5] || (_cache[5] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" })])], -1)),
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
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
				createBaseVNode("div", _hoisted_9, [createVNode(_component_v_client_table, {
					data: table_1.value,
					columns: columns.value,
					options: table_option.value
				}, {
					kdBarang: withCtx((props) => [createBaseVNode("div", _hoisted_10, [withDirectives(createBaseVNode("select", {
						"onUpdate:modelValue": ($event) => posting.value[props.row.kdBarang] = $event,
						class: "form-select form-select-sm w-auto"
					}, _cache[4] || (_cache[4] = [createBaseVNode("option", { value: "0" }, "Tidak", -1), createBaseVNode("option", { value: "1" }, "Ya", -1)]), 8, _hoisted_11), [[vModelSelect, posting.value[props.row.kdBarang]]]), createBaseVNode("span", null, toDisplayString(props.row.kdBarang), 1)])]),
					nmBarang: withCtx((props) => [createTextVNode(toDisplayString(props.row.nmBarang), 1)]),
					stokPersediaan: withCtx((props) => [createTextVNode(toDisplayString(props.row.stokPersediaan), 1)]),
					namaKtg: withCtx((props) => [createTextVNode(toDisplayString(props.row.namaKtg), 1)]),
					qty: withCtx((props) => [createBaseVNode("div", { style: normalizeStyle({ width: inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
						type: "text",
						class: "form-control form-control-sm",
						"onUpdate:modelValue": ($event) => item_now.value[props.row.kdBarang] = $event,
						onKeypress: onlyNumber
					}, null, 40, _hoisted_12), [[vModelText, item_now.value[props.row.kdBarang]]])], 4)]),
					keterangan: withCtx((props) => [createBaseVNode("div", { style: normalizeStyle({ width: inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
						type: "text",
						class: "form-control form-control-sm",
						"onUpdate:modelValue": ($event) => keterangan.value[props.row.kdBarang] = $event
					}, null, 8, _hoisted_13), [[vModelText, keterangan.value[props.row.kdBarang]]])], 4)]),
					selisih: withCtx((props) => [createTextVNode(toDisplayString(Number(props.row.stokPersediaan || 0) - Number(item_now.value[props.row.kdBarang] || 0)), 1)]),
					_: 1
				}, 8, [
					"data",
					"columns",
					"options"
				])])
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
