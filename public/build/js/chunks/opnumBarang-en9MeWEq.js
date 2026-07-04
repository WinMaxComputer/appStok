import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, X as withDirectives, a as init_runtime_dom_esm_bundler, at as unref, h as Teleport, jt as toDisplayString, l as vModelSelect, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, u as vModelText, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { c as useStore } from "../../assets/main-B6cAUmtZ.js";
/* empty css                      */
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-DRdrcT0i.js";
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
var _hoisted_10 = { class: "table-responsive" };
var _hoisted_11 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-hover table-bordered"
};
var _hoisted_12 = { role: "rowgroup" };
var _hoisted_13 = {
	"aria-colindex": "1",
	role: "cell"
};
var _hoisted_14 = ["onUpdate:modelValue"];
var _hoisted_15 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_16 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_17 = {
	"aria-colindex": "4",
	role: "cell"
};
var _hoisted_18 = {
	"aria-colindex": "5",
	role: "cell"
};
var _hoisted_19 = ["onUpdate:modelValue"];
var _hoisted_20 = {
	"aria-colindex": "5",
	role: "cell"
};
var _hoisted_21 = ["onUpdate:modelValue"];
var _hoisted_22 = {
	"aria-colindex": "5",
	role: "cell"
};
var _sfc_main = {
	__name: "opnumBarang",
	setup(__props) {
		useMeta({ title: "Opnum Barang" });
		const store = useStore();
		const table_1 = ref([]);
		const item_now = ref({});
		const posting = ref({});
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
			bind_data();
			getNoOpnum();
		});
		const getNoOpnum = async () => {
			await store.dispatch("GetNoOpnum");
			noopnum.value = store.getters.NoOpnum;
		};
		const bind_data = async () => {
			await store.dispatch("GetBarang").then(() => {
				table_1.value = store.getters.StateBarang;
				table_1.value.forEach((item, idx) => {
					posting.value[idx] = "0";
				});
			});
		};
		const simpanOpnum = () => {
			var dataArr = table_1.value;
			const arr = [];
			let tota = 0;
			for (let i = 0; i < dataArr.length; i++) {
				let subto = dataArr[i].hrgPokok * (dataArr[i].stokPersediaan - item_now.value[i]);
				let ket = keterangan.value[i];
				if (!isNaN(subto)) {
					if (!ket) ket = "-";
					arr.push({
						"kdBarang": dataArr[i].kdBarang,
						"nmBarang": dataArr[i].nmBarang,
						"accid_persediaan": dataArr[i].accid_persediaan,
						"accid_biaya": dataArr[i].accid_biaya,
						"keterangan": ket,
						"posting": posting.value[i],
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
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[3] || (_cache[3] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Tables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Basic")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [_cache[8] || (_cache[8] = createStaticVNode("<div class=\"row layout-top-spacing\"><div class=\"col-lg-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Stok Opnum </div></div></div>", 1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				_cache[7] || (_cache[7] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" })])], -1)),
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
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("table", _hoisted_11, [_cache[6] || (_cache[6] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
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
				])], -1)), createBaseVNode("tbody", _hoisted_12, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, index) => {
					return openBlock(), createElementBlock("tr", {
						key: item.index,
						role: "row"
					}, [
						createBaseVNode("td", _hoisted_13, [
							_cache[5] || (_cache[5] = createTextVNode(" Post - ")),
							withDirectives(createBaseVNode("select", { "onUpdate:modelValue": ($event) => posting.value[index] = $event }, _cache[4] || (_cache[4] = [createBaseVNode("option", { value: "0" }, "Tidak", -1), createBaseVNode("option", { value: "1" }, "Ya", -1)]), 8, _hoisted_14), [[vModelSelect, posting.value[index]]]),
							createTextVNode(" " + toDisplayString(item.kdBarang), 1)
						]),
						createBaseVNode("td", _hoisted_15, toDisplayString(item.nmBarang), 1),
						createBaseVNode("td", _hoisted_16, toDisplayString(item.stokPersediaan), 1),
						createBaseVNode("td", _hoisted_17, toDisplayString(item.namaKtg), 1),
						createBaseVNode("td", _hoisted_18, [createBaseVNode("div", { style: normalizeStyle({ "width": inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control form-control-sm col-sm-2",
							"onUpdate:modelValue": ($event) => item_now.value[index] = $event,
							onKeypress: onlyNumber
						}, null, 40, _hoisted_19), [[vModelText, item_now.value[index]]])], 4)]),
						createBaseVNode("td", _hoisted_20, [createBaseVNode("div", { style: normalizeStyle({ "width": inp.value + "px" }) }, [withDirectives(createBaseVNode("input", {
							type: "text",
							class: "form-control form-control-sm col-sm-2",
							"onUpdate:modelValue": ($event) => keterangan.value[index] = $event
						}, null, 8, _hoisted_21), [[vModelText, keterangan.value[index]]])], 4)]),
						createBaseVNode("td", _hoisted_22, toDisplayString(item.stokPersediaan - item_now.value[index]), 1)
					]);
				}), 128))])])])])
			])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
