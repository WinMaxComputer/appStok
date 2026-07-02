import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, R as openBlock, T as createVNode, W as resolveComponent, Y as withCtx, _ as computed, at as unref, b as createCommentVNode, h as Teleport, nt as ref, t as useMeta, v as createBaseVNode, w as createTextVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
import { s as useStore } from "../../assets/main-BY7jYvqS.js";
import { t as require_vue3_apexcharts_common } from "./vue3-apexcharts.common-nbE9jezx.js";
/* empty css                 */
//#region resources/js/src/views/index2.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var import_vue3_apexcharts_common = /* @__PURE__ */ __toESM(require_vue3_apexcharts_common());
var _hoisted_1 = { class: "layout-px-spacing dash_2" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" };
var _hoisted_4 = { class: "widget widget-statistics" };
var _hoisted_5 = { class: "widget-content" };
var _hoisted_6 = { class: "row" };
var _hoisted_7 = { class: "col-6" };
var _hoisted_8 = { class: "col-6" };
var _hoisted_9 = { class: "col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" };
var _hoisted_10 = { class: "widget widget-unique-visitors" };
var _hoisted_11 = { class: "widget-content" };
var _hoisted_12 = { class: "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" };
var _hoisted_13 = { class: "widget widget-active-log" };
var _hoisted_14 = { class: "widget-content" };
var _sfc_main = {
	__name: "index2",
	setup(__props) {
		useMeta({ title: "Widgets" });
		const store = useStore();
		const total_visit_series = ref([{ data: [
			21,
			9,
			36,
			12,
			44,
			25,
			59,
			41,
			66,
			25
		] }]);
		const total_visit_options = computed(() => {
			return {
				chart: {
					sparkline: { enabled: true },
					dropShadow: {
						enabled: true,
						top: 3,
						left: 1,
						blur: 3,
						color: "#009688",
						opacity: .7
					}
				},
				stroke: {
					curve: "smooth",
					width: 2
				},
				markers: { size: 0 },
				colors: ["#009688"],
				grid: { padding: {
					top: 0,
					bottom: 0,
					left: 0
				} },
				tooltip: {
					theme: store.state.is_dark_mode ? "dark" : "light",
					x: { show: false },
					y: { title: { formatter: function formatter() {
						return "";
					} } }
				},
				responsive: [{
					breakPoint: 576,
					options: {
						chart: { height: 95 },
						grid: { padding: {
							top: 45,
							bottom: 0,
							left: 0
						} }
					}
				}]
			};
		});
		const paid_visit_series = ref([{ data: [
			22,
			19,
			30,
			47,
			32,
			44,
			34,
			55,
			41,
			69
		] }]);
		const paid_visit_options = computed(() => {
			return {
				chart: {
					sparkline: { enabled: true },
					dropShadow: {
						enabled: true,
						top: 1,
						left: 1,
						blur: 2,
						color: "#e2a03f",
						opacity: .7
					}
				},
				stroke: {
					curve: "smooth",
					width: 2
				},
				markers: { size: 0 },
				colors: ["#e2a03f"],
				grid: { padding: {
					top: 0,
					bottom: 0,
					left: 0
				} },
				tooltip: {
					theme: store.state.is_dark_mode ? "dark" : "light",
					x: { show: false },
					y: { title: { formatter: function formatter() {
						return "";
					} } }
				},
				responsive: [{
					breakPoint: 576,
					options: {
						chart: { height: 95 },
						grid: { padding: {
							top: 35,
							bottom: 0,
							left: 0
						} }
					}
				}]
			};
		});
		const unique_visitor_series = ref([{
			name: "Direct",
			data: [
				58,
				44,
				55,
				57,
				56,
				61,
				58,
				63,
				60,
				66,
				56,
				63
			]
		}, {
			name: "Organic",
			data: [
				91,
				76,
				85,
				101,
				98,
				87,
				105,
				91,
				114,
				94,
				66,
				70
			]
		}]);
		const unique_visitor_options = computed(() => {
			const is_dark = store.state.is_dark_mode;
			return {
				chart: { toolbar: { show: false } },
				dataLabels: { enabled: false },
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"]
				},
				colors: ["#5c1ac3", "#ffbb44"],
				dropShadow: {
					enabled: true,
					opacity: .3,
					blur: 1,
					left: 1,
					top: 1,
					color: "#515365"
				},
				plotOptions: { bar: {
					horizontal: false,
					columnWidth: "55%",
					borderRadius: 10
				} },
				legend: {
					position: "bottom",
					horizontalAlign: "center",
					fontSize: "14px",
					markers: {
						width: 12,
						height: 12
					},
					itemMargin: {
						horizontal: 0,
						vertical: 8
					}
				},
				grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
				xaxis: {
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					],
					axisBorder: {
						show: true,
						color: is_dark ? "#3b3f5c" : "#e0e6ed"
					}
				},
				yaxis: { tickAmount: 6 },
				fill: {
					type: "gradient",
					gradient: {
						shade: is_dark ? "dark" : "light",
						type: "vertical",
						shadeIntensity: .3,
						inverseColors: false,
						opacityFrom: 1,
						opacityTo: .8,
						stops: [0, 100]
					}
				},
				tooltip: {
					theme: is_dark ? "dark" : "light",
					y: { formatter: function(val) {
						return val;
					} }
				}
			};
		});
		ref([{
			name: "Sales",
			data: [
				38,
				60,
				38,
				52,
				36,
				40,
				28
			]
		}]);
		computed(() => {
			const is_dark = store.state.is_dark_mode;
			let option = {
				chart: { sparkline: { enabled: true } },
				stroke: {
					curve: "smooth",
					width: 2
				},
				colors: ["#4361ee"],
				yaxis: {
					min: 0,
					show: false
				},
				tooltip: {
					theme: is_dark ? "dark" : "light",
					x: { show: false }
				}
			};
			if (is_dark) option["fill"] = {
				type: "gradient",
				gradient: {
					type: "vertical",
					shadeIntensity: 1,
					inverseColors: !1,
					opacityFrom: .3,
					opacityTo: .05,
					stops: [100, 100]
				}
			};
			return option;
		});
		ref([{
			name: "Sales",
			data: [
				60,
				28,
				52,
				38,
				40,
				36,
				38
			]
		}]);
		computed(() => {
			const is_dark = store.state.is_dark_mode;
			let option = {
				chart: { sparkline: { enabled: true } },
				stroke: {
					curve: "smooth",
					width: 2
				},
				colors: ["#e7515a"],
				yaxis: {
					min: 0,
					show: false
				},
				tooltip: {
					theme: is_dark ? "dark" : "light",
					x: { show: false }
				}
			};
			if (is_dark) option["fill"] = {
				type: "gradient",
				gradient: {
					type: "vertical",
					shadeIntensity: 1,
					inverseColors: !1,
					opacityFrom: .3,
					opacityTo: .05,
					stops: [100, 100]
				}
			};
			return option;
		});
		ref([{
			name: "Sales",
			data: [
				28,
				50,
				36,
				60,
				38,
				52,
				38
			]
		}]);
		computed(() => {
			const is_dark = store.state.is_dark_mode;
			let option = {
				chart: { sparkline: { enabled: true } },
				stroke: {
					curve: "smooth",
					width: 2
				},
				colors: ["#1abc9c"],
				yaxis: {
					min: 0,
					show: false
				},
				tooltip: {
					theme: is_dark ? "dark" : "light",
					x: { show: false }
				}
			};
			if (is_dark) option["fill"] = {
				type: "gradient",
				gradient: {
					type: "vertical",
					shadeIntensity: 1,
					inverseColors: !1,
					opacityFrom: .3,
					opacityTo: .05,
					stops: [100, 100]
				}
			};
			return option;
		});
		return (_ctx, _cache) => {
			const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[0] || (_cache[0] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Sales")])])])])])], -1)), _cache[1] || (_cache[1] = createBaseVNode("ul", { class: "navbar-nav flex-row ms-auto" }, [createBaseVNode("li", { class: "nav-item more-dropdown" }, [createBaseVNode("div", { class: "dropdown custom-dropdown-icon" }, [createBaseVNode("a", {
				href: "javascript:;",
				class: "nav-link dropdown-toggle",
				id: "ddlSettings",
				"data-bs-toggle": "dropdown",
				"aria-expanded": "false"
			}, [createBaseVNode("span", null, "Settings"), createBaseVNode("svg", {
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
			}, [createBaseVNode("polyline", { points: "6 9 12 15 18 9" })])]), createBaseVNode("ul", {
				class: "dropdown-menu dropdown-menu-end",
				"aria-labelledby": "ddlSettings"
			}, [
				createBaseVNode("li", null, [createBaseVNode("a", {
					class: "dropdown-item",
					"data-value": "Settings",
					href: "javascript:void(0);"
				}, "Settings")]),
				createBaseVNode("li", null, [createBaseVNode("a", {
					class: "dropdown-item",
					"data-value": "Mail",
					href: "javascript:void(0);"
				}, "Mail")]),
				createBaseVNode("li", null, [createBaseVNode("a", {
					class: "dropdown-item",
					"data-value": "Print",
					href: "javascript:void(0);"
				}, "Print")]),
				createBaseVNode("li", null, [createBaseVNode("a", {
					class: "dropdown-item",
					"data-value": "Download",
					href: "javascript:void(0);"
				}, "Download")]),
				createBaseVNode("li", null, [createBaseVNode("a", {
					class: "dropdown-item",
					"data-value": "Share",
					href: "javascript:void(0);"
				}, "Share")])
			])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [_cache[4] || (_cache[4] = createStaticVNode("<div class=\"widget-heading\"><h5>Pembelian</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlStatistics\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlStatistics\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1)), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-detail" }, [createBaseVNode("p", { class: "w-title" }, "Total Visits"), createBaseVNode("p", { class: "w-stats" }, "423,964")], -1)), total_visit_options.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
					key: 0,
					height: "58",
					type: "line",
					options: total_visit_options.value,
					series: total_visit_series.value
				}, null, 8, ["options", "series"])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "w-detail" }, [createBaseVNode("p", { class: "w-title" }, "Paid Visits"), createBaseVNode("p", { class: "w-stats" }, "7,929")], -1)), paid_visit_options.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
					key: 0,
					height: "58",
					type: "line",
					options: paid_visit_options.value,
					series: paid_visit_series.value
				}, null, 8, ["options", "series"])) : createCommentVNode("", true)])])])])]),
				_cache[10] || (_cache[10] = createBaseVNode("div", { class: "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" }, [createBaseVNode("div", { class: "widget widget-expenses" }, [createBaseVNode("div", { class: "widget-heading" }, [createBaseVNode("h5", null, "Penjualan"), createBaseVNode("div", { class: "task-action" }, [createBaseVNode("div", { class: "dropdown btn-group" }, [createBaseVNode("a", {
					href: "javascript:;",
					id: "ddlExpenses",
					class: "btn dropdown-toggle btn-icon-only",
					"data-bs-toggle": "dropdown",
					"aria-expanded": "false"
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
					class: "feather feather-more-horizontal"
				}, [
					createBaseVNode("circle", {
						cx: "12",
						cy: "12",
						r: "1"
					}),
					createBaseVNode("circle", {
						cx: "19",
						cy: "12",
						r: "1"
					}),
					createBaseVNode("circle", {
						cx: "5",
						cy: "12",
						r: "1"
					})
				])]), createBaseVNode("ul", {
					class: "dropdown-menu dropdown-menu-end",
					"aria-labelledby": "ddlExpenses"
				}, [
					createBaseVNode("li", null, [createBaseVNode("a", {
						href: "javascript:;",
						class: "dropdown-item"
					}, "This Week")]),
					createBaseVNode("li", null, [createBaseVNode("a", {
						href: "javascript:;",
						class: "dropdown-item"
					}, "Last Week")]),
					createBaseVNode("li", null, [createBaseVNode("a", {
						href: "javascript:;",
						class: "dropdown-item"
					}, "Last Month")])
				])])])]), createBaseVNode("div", { class: "widget-content" }, [createBaseVNode("p", { class: "value" }, [
					createTextVNode(" $ 45,141 "),
					createBaseVNode("span", null, "this week "),
					createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "feather feather-trending-up"
					}, [createBaseVNode("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }), createBaseVNode("polyline", { points: "17 6 23 6 23 12" })])
				]), createBaseVNode("div", { class: "w-progress-stats" }, [createBaseVNode("div", { class: "progress" }, [createBaseVNode("div", {
					role: "progressbar",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": "57",
					class: "progress-bar bg-gradient-secondary",
					style: { "width": "57%" }
				})]), createBaseVNode("div", { class: "w-icon" }, "57%")])])])], -1)),
				_cache[11] || (_cache[11] = createStaticVNode("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-total-balance\"><div class=\"widget-content\"><div class=\"account-box\"><div class=\"info\"><div class=\"inv-title\"><h5>Total Balance</h5></div><div class=\"inv-balance-info\"><p class=\"inv-balance\">$ 41,741.42</p><span class=\"inv-stats balance-credited\">+ 2453</span></div></div><div class=\"acc-action\"><div><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></a><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-credit-card\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line></svg></a></div><a href=\"javascript:void(0);\">Upgrade</a></div></div></div></div></div>", 1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [_cache[5] || (_cache[5] = createStaticVNode("<div class=\"widget-heading\"><h5>Unique Visitors</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlVisitors\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlVisitors\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Update</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1)), createBaseVNode("div", _hoisted_11, [unique_visitor_options.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
					key: 0,
					height: "350",
					type: "bar",
					options: unique_visitor_options.value,
					series: unique_visitor_series.value
				}, null, 8, ["options", "series"])) : createCommentVNode("", true)])])]),
				createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[9] || (_cache[9] = createStaticVNode("<div class=\"widget-heading\"><h5>Activity Log</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlActivity\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlActivity\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View All</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Read</a></li></ul></div></div></div>", 1)), createBaseVNode("div", _hoisted_14, [
					_cache[7] || (_cache[7] = createBaseVNode("div", { class: "w-shadow-top" }, null, -1)),
					createVNode(_component_perfect_scrollbar, { class: "mt-container mx-auto" }, {
						default: withCtx(() => _cache[6] || (_cache[6] = [createBaseVNode("div", { class: "timeline-line" }, [
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-secondary" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-plus"
							}, [createBaseVNode("line", {
								x1: "12",
								y1: "5",
								x2: "12",
								y2: "19"
							}), createBaseVNode("line", {
								x1: "5",
								y1: "12",
								x2: "19",
								y2: "12"
							})])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, [createTextVNode(" New project created : "), createBaseVNode("a", { href: "javscript:void(0);" }, [createBaseVNode("span", null, "[Cork Admin Template]")])])]), createBaseVNode("p", null, "27 Feb, 2020")])]),
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-success" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-mail"
							}, [createBaseVNode("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), createBaseVNode("polyline", { points: "22,6 12,13 2,6" })])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, [
								createTextVNode("Mail sent to "),
								createBaseVNode("a", { href: "javascript:void(0);" }, "HR"),
								createTextVNode(" and "),
								createBaseVNode("a", { href: "javascript:void(0);" }, "Admin")
							])]), createBaseVNode("p", null, "28 Feb, 2020")])]),
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-primary" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-check"
							}, [createBaseVNode("polyline", { points: "20 6 9 17 4 12" })])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, "Server Logs Updated")]), createBaseVNode("p", null, "27 Feb, 2020")])]),
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-danger" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-check"
							}, [createBaseVNode("polyline", { points: "20 6 9 17 4 12" })])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, [createTextVNode(" Task Completed : "), createBaseVNode("a", { href: "javscript:void(0);" }, [createBaseVNode("span", null, "[Backup Files EOD]")])])]), createBaseVNode("p", null, "01 Mar, 2020")])]),
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-warning" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-file"
							}, [createBaseVNode("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }), createBaseVNode("polyline", { points: "13 2 13 9 20 9" })])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, [createTextVNode("Documents Submitted from "), createBaseVNode("a", { href: "javascript:void(0);" }, "Sara")]), createBaseVNode("span")]), createBaseVNode("p", null, "10 Mar, 2020")])]),
							createBaseVNode("div", { class: "item-timeline" }, [createBaseVNode("div", { class: "t-dot" }, [createBaseVNode("div", { class: "t-dark" }, [createBaseVNode("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								class: "feather feather-server"
							}, [
								createBaseVNode("rect", {
									x: "2",
									y: "2",
									width: "20",
									height: "8",
									rx: "2",
									ry: "2"
								}),
								createBaseVNode("rect", {
									x: "2",
									y: "14",
									width: "20",
									height: "8",
									rx: "2",
									ry: "2"
								}),
								createBaseVNode("line", {
									x1: "6",
									y1: "6",
									x2: "6",
									y2: "6"
								}),
								createBaseVNode("line", {
									x1: "6",
									y1: "18",
									x2: "6",
									y2: "18"
								})
							])])]), createBaseVNode("div", { class: "t-content" }, [createBaseVNode("div", { class: "t-uppercontent" }, [createBaseVNode("h5", null, "Server rebooted successfully"), createBaseVNode("span")]), createBaseVNode("p", null, "06 Apr, 2020")])])
						], -1)])),
						_: 1
					}),
					_cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-shadow-bottom" }, null, -1))
				])])])
			])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
