import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, Q as withDirectives, S as createElementBlock, Z as withCtx, b as createBlock, g as Teleport, it as ref, j as init_runtime_core_esm_bundler, q as resolveDirective, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, w as createStaticVNode, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-Bnx5Knk7.js";
/* empty css                      */
import { t as _sfc_main$1 } from "./highlight-DDe0ci8n.js";
import { t as require_vue3_apexcharts_common } from "./vue3-apexcharts.common-DBShhHkU.js";
//#region resources/js/src/views/charts/apex_chart.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var import_vue3_apexcharts_common = /* @__PURE__ */ __toESM(require_vue3_apexcharts_common());
var _hoisted_1 = { class: "container" };
var _hoisted_2 = { class: "container" };
var _hoisted_3 = { class: "nav sidenav" };
var _hoisted_4 = { class: "sidenav-content" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = {
	id: "chartLine",
	class: "col-xl-12 layout-top-spacing layout-spacing"
};
var _hoisted_7 = { class: "statbox panel box box-shadow" };
var _hoisted_8 = { class: "panel-body" };
var _hoisted_9 = { class: "code-section-container show-code" };
var _hoisted_10 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_11 = {
	id: "chartArea",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_12 = { class: "statbox panel box box-shadow" };
var _hoisted_13 = { class: "panel-body" };
var _hoisted_14 = { class: "code-section-container show-code" };
var _hoisted_15 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_16 = {
	id: "chartColumn",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_17 = { class: "statbox panel box box-shadow" };
var _hoisted_18 = { class: "panel-body" };
var _hoisted_19 = { class: "code-section-container show-code" };
var _hoisted_20 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_21 = {
	id: "chartColumnStacked",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_22 = { class: "statbox panel box box-shadow" };
var _hoisted_23 = { class: "panel-body" };
var _hoisted_24 = { class: "code-section-container show-code" };
var _hoisted_25 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_26 = {
	id: "chartBar",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_27 = { class: "statbox panel box box-shadow" };
var _hoisted_28 = { class: "panel-body" };
var _hoisted_29 = { class: "code-section-container show-code" };
var _hoisted_30 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_31 = {
	id: "chartMixed",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_32 = { class: "statbox panel box box-shadow" };
var _hoisted_33 = { class: "panel-body" };
var _hoisted_34 = { class: "code-section-container show-code" };
var _hoisted_35 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_36 = {
	id: "chartDonut",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_37 = { class: "statbox panel box box-shadow" };
var _hoisted_38 = { class: "panel-body" };
var _hoisted_39 = { class: "code-section-container show-code" };
var _hoisted_40 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_41 = {
	id: "chartRadial",
	class: "col-xl-12 layout-spacing"
};
var _hoisted_42 = { class: "statbox panel box box-shadow" };
var _hoisted_43 = { class: "panel-body" };
var _hoisted_44 = { class: "code-section-container show-code" };
var _hoisted_45 = {
	key: 0,
	class: "code-section text-start"
};
var _sfc_main = {
	__name: "apex_chart",
	setup(__props) {
		useMeta({ title: "Apex Chart" });
		const store = useStore();
		const code_arr = ref([]);
		const series_1 = ref([{
			name: "Desktops",
			data: [
				10,
				41,
				35,
				51,
				49,
				62,
				69,
				91,
				148
			]
		}]);
		const series_2 = ref([{
			name: "series1",
			data: [
				31,
				40,
				28,
				51,
				42,
				109,
				100
			]
		}, {
			name: "series2",
			data: [
				11,
				32,
				45,
				32,
				34,
				52,
				41
			]
		}]);
		const series_3 = ref([{
			name: "Net Profit",
			data: [
				44,
				55,
				57,
				56,
				61,
				58,
				63,
				60,
				66
			]
		}, {
			name: "Revenue",
			data: [
				76,
				85,
				101,
				98,
				87,
				105,
				91,
				114,
				94
			]
		}]);
		const series_4 = [
			{
				name: "PRODUCT A",
				data: [
					44,
					55,
					41,
					67,
					22,
					43
				]
			},
			{
				name: "PRODUCT B",
				data: [
					13,
					23,
					20,
					8,
					13,
					27
				]
			},
			{
				name: "PRODUCT C",
				data: [
					11,
					17,
					15,
					15,
					21,
					14
				]
			},
			{
				name: "PRODUCT D",
				data: [
					21,
					7,
					25,
					13,
					22,
					8
				]
			}
		];
		const series_5 = ref([{ data: [
			400,
			430,
			448,
			470,
			540,
			580,
			690,
			1100,
			1200,
			1380
		] }]);
		const series_6 = ref([{
			name: "Website Blog",
			type: "column",
			data: [
				440,
				505,
				414,
				671,
				227,
				413,
				201,
				352,
				752,
				320,
				257,
				160
			]
		}, {
			name: "Social Media",
			type: "line",
			data: [
				23,
				42,
				35,
				27,
				43,
				22,
				17,
				31,
				22,
				22,
				12,
				16
			]
		}]);
		const series_7 = ref([
			44,
			55,
			41,
			17
		]);
		const series_8 = ref([
			44,
			55,
			67,
			83
		]);
		const options_1 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: {
					toolbar: { show: false },
					zoom: { enabled: false }
				},
				dataLabels: { enabled: false },
				stroke: { curve: "straight" },
				title: {
					text: "Product Trends by Month",
					align: "left",
					style: { fontWeight: "normal" }
				},
				grid: {
					row: {
						colors: [is_dark ? "#3b3f5c" : "#f1f2f3", "transparent"],
						opacity: .5
					},
					borderColor: is_dark ? "#191e3a" : "#e0e6ed"
				},
				xaxis: { categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep"
				] },
				tooltip: { theme: is_dark ? "dark" : "light" }
			};
		});
		const options_2 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: { toolbar: { show: false } },
				dataLabels: { enabled: false },
				stroke: { curve: "smooth" },
				xaxis: {
					type: "datetime",
					categories: [
						"2018-09-19T00:00:00",
						"2018-09-19T01:30:00",
						"2018-09-19T02:30:00",
						"2018-09-19T03:30:00",
						"2018-09-19T04:30:00",
						"2018-09-19T05:30:00",
						"2018-09-19T06:30:00"
					]
				},
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				tooltip: {
					theme: is_dark ? "dark" : "light",
					x: { format: "dd/MM/yy HH:mm" }
				}
			};
		});
		const options_3 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: { toolbar: { show: false } },
				dataLabels: { enabled: false },
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"]
				},
				plotOptions: { bar: {
					horizontal: false,
					columnWidth: "55%",
					borderRadius: 8
				} },
				xaxis: { categories: [
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct"
				] },
				yaxis: { title: {
					text: "$ (thousands)",
					style: { fontWeight: "normal" }
				} },
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				fill: { opacity: 1 },
				tooltip: {
					theme: is_dark ? "dark" : "light",
					y: { formatter: function(val) {
						return "$ " + val + " thousands";
					} }
				}
			};
		});
		const options_4 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: {
					stacked: true,
					toolbar: { show: false }
				},
				responsive: [{
					breakpoint: 480,
					options: { legend: {
						position: "bottom",
						offsetX: -10,
						offsetY: 5
					} }
				}],
				plotOptions: { bar: { horizontal: false } },
				xaxis: {
					type: "datetime",
					categories: [
						"01/01/2011 GMT",
						"01/02/2011 GMT",
						"01/03/2011 GMT",
						"01/04/2011 GMT",
						"01/05/2011 GMT",
						"01/06/2011 GMT"
					]
				},
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				fill: { opacity: 1 },
				legend: {
					position: "right",
					offsetY: 40
				},
				tooltip: { theme: is_dark ? "dark" : "light" }
			};
		});
		const options_5 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: { toolbar: { show: false } },
				dataLabels: { enabled: false },
				plotOptions: { bar: { horizontal: true } },
				xaxis: { categories: [
					"South Korea",
					"Canada",
					"United Kingdom",
					"Netherlands",
					"Italy",
					"France",
					"Japan",
					"United States",
					"China",
					"Germany"
				] },
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				tooltip: { theme: is_dark ? "dark" : "light" }
			};
		});
		const options_6 = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: { toolbar: { show: false } },
				dataLabels: { enabled: false },
				stroke: { width: [0, 4] },
				title: {
					text: "Traffic Sources",
					align: "left",
					style: { fontWeight: "normal" }
				},
				labels: [
					"01 Jan 2001",
					"02 Jan 2001",
					"03 Jan 2001",
					"04 Jan 2001",
					"05 Jan 2001",
					"06 Jan 2001",
					"07 Jan 2001",
					"08 Jan 2001",
					"09 Jan 2001",
					"10 Jan 2001",
					"11 Jan 2001",
					"12 Jan 2001"
				],
				xaxis: { type: "datetime" },
				yaxis: [{
					title: { text: "Website Blog" },
					style: { fontWeight: "normal" }
				}, {
					opposite: true,
					title: { text: "Social Media" }
				}],
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				tooltip: { theme: is_dark ? "dark" : "light" }
			};
		});
		const options_7 = computed(() => {
			return {
				chart: { toolbar: { show: false } },
				stroke: { colors: store.state.is_dark_mode ? "#191e3a" : "transparent" },
				responsive: [{
					breakpoint: 480,
					options: {
						chart: { width: 200 },
						legend: { position: "bottom" }
					}
				}]
			};
		});
		const options_8 = computed(() => {
			return {
				chart: { toolbar: { show: false } },
				plotOptions: { radialBar: { dataLabels: { total: {
					show: true,
					fontSize: "24px",
					fontWeight: "normal",
					label: "Total",
					formatter: function() {
						return 249;
					}
				} } } },
				labels: [
					"Apples",
					"Oranges",
					"Bananas",
					"Berries"
				]
			};
		});
		const toggleCode = (name) => {
			if (code_arr.value.includes(name)) code_arr.value = code_arr.value.filter((d) => d != name);
			else code_arr.value.push(name);
		};
		return (_ctx, _cache) => {
			const _directive_scroll_spy_active = resolveDirective("scroll-spy-active");
			const _directive_scroll_spy_link = resolveDirective("scroll-spy-link");
			const _directive_scroll_spy = resolveDirective("scroll-spy");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[8] || (_cache[8] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Charts")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Apex")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [withDirectives((openBlock(), createElementBlock("div", _hoisted_4, _cache[9] || (_cache[9] = [createStaticVNode("<a href=\"#chartLine\" class=\"nav-link\">Line</a><a href=\"#chartArea\" class=\"nav-link\">Area</a><a href=\"#chartColumn\" class=\"nav-link\">Column</a><a href=\"#chartColumnStacked\" class=\"nav-link\">Column Stacked</a><a href=\"#chartBar\" class=\"nav-link\">Bar</a><a href=\"#chartMixed\" class=\"nav-link\">Mixed</a><a href=\"#chartDonut\" class=\"nav-link\">Donut</a><a href=\"#chartRadial\" class=\"nav-link\">Radial</a>", 8)]))), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]),
				_cache[34] || (_cache[34] = createStaticVNode("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://www.npmjs.com/package/vue3-apexcharts\" class=\"text-info\"> https://www.npmjs.com/package/vue3-apexcharts </a></div></div></div>", 1)),
				withDirectives((openBlock(), createElementBlock("div", _hoisted_5, [
					createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[12] || (_cache[12] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Apex (Simple)")])])], -1)), createBaseVNode("div", _hoisted_8, [options_1.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "line",
						options: options_1.value,
						series: series_1.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_9, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[0] || (_cache[0] = ($event) => toggleCode("code1"))
					}, _cache[10] || (_cache[10] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code1") ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("pre", null, "<!-- Simple -->\n===html===\n<apexchart height=\"350\" type=\"line\" :options=\"options_1\" :series=\"series_1\"></apexchart>\n\n===code===\noptions_1: {\n    chart: { toolbar: { show: false }, zoom: { enabled: false }, }, dataLabels: { enabled: false }, stroke: { curve: 'straight' },\n    title: { text: 'Product Trends by Month', align: 'left', style: { fontWeight: 'normal' } },\n    grid: { row: { colors: ['#f1f2f3', 'transparent'], opacity: 0.5 } },\n    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },\n},\nseries_1: [{ name: 'Desktops', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_cache[15] || (_cache[15] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Area")])])], -1)), createBaseVNode("div", _hoisted_13, [options_2.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "area",
						options: options_2.value,
						series: series_2.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_14, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[1] || (_cache[1] = ($event) => toggleCode("code2"))
					}, _cache[13] || (_cache[13] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code2") ? (openBlock(), createElementBlock("div", _hoisted_15, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[14] || (_cache[14] = [createBaseVNode("pre", null, "<!-- Simple Area -->\n===html===\n<apexchart height=\"350\" type=\"area\" :options=\"options_2\" :series=\"series_2\"></apexchart>\n\n===code===\noptions_2: {\n    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { curve: 'smooth' },\n    xaxis: {\n        type: 'datetime',\n        categories: [\"2018-09-19T00:00:00\", \"2018-09-19T01:30:00\", \"2018-09-19T02:30:00\", \"2018-09-19T03:30:00\", \"2018-09-19T04:30:00\", \"2018-09-19T05:30:00\", \"2018-09-19T06:30:00\"],\n    },\n    tooltip: { x: { format: 'dd/MM/yy HH:mm' }, }\n},\nseries_2: [{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] }, { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [_cache[18] || (_cache[18] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Column")])])], -1)), createBaseVNode("div", _hoisted_18, [options_3.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "bar",
						options: options_3.value,
						series: series_3.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_19, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[2] || (_cache[2] = ($event) => toggleCode("code3"))
					}, _cache[16] || (_cache[16] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code3") ? (openBlock(), createElementBlock("div", _hoisted_20, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[17] || (_cache[17] = [createBaseVNode("pre", null, "<!-- Simple column -->\n===html===\n<apexchart height=\"350\" type=\"bar\" :options=\"options_3\" :series=\"series_3\"></apexchart>\n\n===code===\noptions_3: {\n    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { show: true, width: 2, colors: ['transparent'] },\n    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 8 }, },\n    xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], },\n    yaxis: { title: { text: '$ (thousands)' } },\n    fill: { opacity: 1 },\n    tooltip: { y: { formatter: function (val) { return \"$ \" + val + \" thousands\" } } }\n},\nseries_3: [{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }, { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [_cache[21] || (_cache[21] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Column Stacked")])])], -1)), createBaseVNode("div", _hoisted_23, [options_4.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "bar",
						options: options_4.value,
						series: series_4
					}, null, 8, ["options"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_24, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[3] || (_cache[3] = ($event) => toggleCode("code4"))
					}, _cache[19] || (_cache[19] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code4") ? (openBlock(), createElementBlock("div", _hoisted_25, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[20] || (_cache[20] = [createBaseVNode("pre", null, "<!-- Simple column stacked -->\n===html===\n<apexchart height=\"350\" type=\"bar\" :options=\"options_4\" :series=\"series_4\"></apexchart>\n\n===code===\noptions_4: {\n    chart: { stacked: true, toolbar: { show: false } },\n    responsive: [{ breakpoint: 480, options: { legend: { position: 'bottom', offsetX: -10, offsetY: 5 } } }],\n    plotOptions: { bar: { horizontal: false }, },\n    xaxis: { type: 'datetime', categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'], },\n    fill: { opacity: 1 },\n    legend: { position: 'right', offsetY: 40 },\n},\nseries_4: [\n    { name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43] },\n    { name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27] },\n    { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14] },\n    { name: 'PRODUCT D', data: [21, 7, 25, 13, 22, 8] }\n],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_26, [createBaseVNode("div", _hoisted_27, [_cache[24] || (_cache[24] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Bar")])])], -1)), createBaseVNode("div", _hoisted_28, [options_5.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "bar",
						options: options_5.value,
						series: series_5.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_29, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[4] || (_cache[4] = ($event) => toggleCode("code5"))
					}, _cache[22] || (_cache[22] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code5") ? (openBlock(), createElementBlock("div", _hoisted_30, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[23] || (_cache[23] = [createBaseVNode("pre", null, "<!-- Simple Bar -->\n===html===\n<apexchart height=\"350\" type=\"bar\" :options=\"options_5\" :series=\"series_5\"></apexchart>\n\n===code===\noptions_5: {\n    chart: { toolbar: { show: false } }, dataLabels: { enabled: false },\n    plotOptions: { bar: { horizontal: true }, },\n    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'], },\n},\nseries_5: [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [_cache[27] || (_cache[27] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Mixed")])])], -1)), createBaseVNode("div", _hoisted_33, [options_6.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "line",
						options: options_6.value,
						series: series_6.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_34, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[5] || (_cache[5] = ($event) => toggleCode("code6"))
					}, _cache[25] || (_cache[25] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code6") ? (openBlock(), createElementBlock("div", _hoisted_35, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[26] || (_cache[26] = [createBaseVNode("pre", null, "<!-- Mixed -->\n===html===\n<apexchart height=\"350\" type=\"line\" :options=\"options_6\" :series=\"series_6\"></apexchart>\n\n===code===\noptions_6: {\n    chart: { toolbar: { show: false } }, dataLabels: { enabled: false }, stroke: { width: [0, 4] },\n    title: { text: 'Traffic Sources', align: 'left', style: { fontWeight: 'normal' } },\n    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],\n    xaxis: { type: 'datetime' },\n    yaxis: [{ title: { text: 'Website Blog' } }, { opposite: true, title: { text: 'Social Media' } }]\n},\nseries_6: [\n    { name: 'Website Blog', type: 'column', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] },\n    { name: 'Social Media', type: 'line', data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16] }\n],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_36, [createBaseVNode("div", _hoisted_37, [_cache[30] || (_cache[30] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Donut")])])], -1)), createBaseVNode("div", _hoisted_38, [options_7.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "donut",
						options: options_7.value,
						series: series_7.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_39, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[6] || (_cache[6] = ($event) => toggleCode("code7"))
					}, _cache[28] || (_cache[28] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code7") ? (openBlock(), createElementBlock("div", _hoisted_40, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[29] || (_cache[29] = [createBaseVNode("pre", null, "<!-- Dount -->\n===html===\n<apexchart height=\"350\" type=\"donut\" :options=\"options_7\" :series=\"series_7\"></apexchart>\n\n===code===\noptions_7: {\n    chart: { toolbar: { show: false } },\n    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]\n},\nseries_7: [44, 55, 41, 17],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_41, [createBaseVNode("div", _hoisted_42, [_cache[33] || (_cache[33] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Radial")])])], -1)), createBaseVNode("div", _hoisted_43, [options_8.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
						key: 0,
						height: "350",
						type: "radialBar",
						options: options_8.value,
						series: series_8.value
					}, null, 8, ["options", "series"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_44, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[7] || (_cache[7] = ($event) => toggleCode("code8"))
					}, _cache[31] || (_cache[31] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code8") ? (openBlock(), createElementBlock("div", _hoisted_45, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[32] || (_cache[32] = [createBaseVNode("pre", null, "<!-- Radial -->\n===html===\n<apexchart height=\"350\" type=\"radialBar\" :options=\"options_8\" :series=\"series_8\"></apexchart>\n\n===code===\noptions_8: {\n    chart: { toolbar: { show: false } },\n    plotOptions: {\n        radialBar: {\n            dataLabels: {\n                name: { fontSize: '22px' },\n                value: { fontSize: '16px' },\n                total: { show: true, label: 'Total', formatter: function () { return 249 } }\n            }\n        }\n    },\n    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],\n},\nseries_8: [44, 55, 67, 83],\n", -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])])
				])), [[_directive_scroll_spy]])
			])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
