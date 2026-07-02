import { i as __require } from "./rolldown-runtime-D1cXj70v.js";
import { $ as init_reactivity_esm_bundler, A as init_runtime_core_esm_bundler, C as createStaticVNode, Et as normalizeClass, G as resolveDirective, H as renderList, I as onMounted, Ot as normalizeStyle, R as openBlock, T as createVNode, X as withDirectives, Y as withCtx, b as createCommentVNode, h as Teleport, jt as toDisplayString, m as Fragment, nt as ref, pt as init_shared_esm_bundler, t as useMeta, v as createBaseVNode, x as createElementBlock, y as createBlock } from "./use-meta-DQmrIGQU.js";
/* empty css                      */
import { t as _sfc_main$1 } from "./highlight-DBZj_XlM.js";
/* empty css                     */
//#region resources/js/src/views/tables.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = { class: "container" };
var _hoisted_2 = { class: "container" };
var _hoisted_3 = { class: "nav sidenav" };
var _hoisted_4 = { class: "sidenav-content" };
var _hoisted_5 = { class: "row layout-top-spacing" };
var _hoisted_6 = {
	id: "tableSimple",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_7 = { class: "statbox panel box box-shadow" };
var _hoisted_8 = { class: "panel-body" };
var _hoisted_9 = { class: "table-responsive" };
var _hoisted_10 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-bordered",
	id: "__BVID__415"
};
var _hoisted_11 = { role: "rowgroup" };
var _hoisted_12 = {
	"aria-colindex": "1",
	role: "cell"
};
var _hoisted_13 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_14 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_15 = {
	"aria-colindex": "4",
	role: "cell",
	class: "text-center"
};
var _hoisted_16 = { class: "code-section-container show-code" };
var _hoisted_17 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_18 = {
	id: "tableHover",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_19 = { class: "statbox panel box box-shadow" };
var _hoisted_20 = { class: "panel-body" };
var _hoisted_21 = { class: "table-responsive" };
var _hoisted_22 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-hover table-bordered",
	id: "__BVID__415"
};
var _hoisted_23 = { role: "rowgroup" };
var _hoisted_24 = {
	"aria-colindex": "1",
	role: "cell"
};
var _hoisted_25 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_26 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_27 = {
	"aria-colindex": "4",
	role: "cell",
	class: "text-center"
};
var _hoisted_28 = { class: "code-section-container show-code" };
var _hoisted_29 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_30 = {
	id: "tableStriped",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_31 = { class: "statbox panel box box-shadow" };
var _hoisted_32 = { class: "panel-body" };
var _hoisted_33 = { class: "table-responsive" };
var _hoisted_34 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table table-striped table-bordered",
	id: "__BVID__415"
};
var _hoisted_35 = { role: "rowgroup" };
var _hoisted_36 = {
	"aria-colindex": "1",
	role: "cell"
};
var _hoisted_37 = { class: "d-flex" };
var _hoisted_38 = { class: "usr-img-frame me-2 rounded-circle" };
var _hoisted_39 = ["src"];
var _hoisted_40 = { class: "align-self-center mb-0" };
var _hoisted_41 = {
	"aria-colindex": "2",
	role: "cell"
};
var _hoisted_42 = {
	"aria-colindex": "3",
	role: "cell"
};
var _hoisted_43 = { class: "code-section-container show-code" };
var _hoisted_44 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_45 = {
	id: "tableLight",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_46 = { class: "statbox panel box box-shadow" };
var _hoisted_47 = { class: "panel-body" };
var _hoisted_48 = { class: "table-light table-responsive" };
var _hoisted_49 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table b-table table-hover",
	id: "__BVID__310"
};
var _hoisted_50 = {
	role: "row",
	class: ""
};
var _hoisted_51 = {
	"aria-colindex": "1",
	role: "cell",
	class: ""
};
var _hoisted_52 = {
	"aria-colindex": "2",
	role: "cell",
	class: ""
};
var _hoisted_53 = {
	"aria-colindex": "3",
	role: "cell",
	class: ""
};
var _hoisted_54 = {
	"aria-colindex": "4",
	role: "cell",
	class: ""
};
var _hoisted_55 = { class: "code-section-container show-code" };
var _hoisted_56 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_57 = {
	id: "tableCaption",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_58 = { class: "statbox panel box box-shadow" };
var _hoisted_59 = { class: "panel-body" };
var _hoisted_60 = { class: "table-responsive" };
var _hoisted_61 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table b-table",
	id: "__BVID__319"
};
var _hoisted_62 = { role: "rowgroup" };
var _hoisted_63 = {
	"aria-colindex": "1",
	role: "cell",
	class: ""
};
var _hoisted_64 = {
	"aria-colindex": "2",
	role: "cell",
	class: "text-success"
};
var _hoisted_65 = {
	"aria-colindex": "3",
	role: "cell",
	class: ""
};
var _hoisted_66 = {
	"aria-colindex": "4",
	role: "cell",
	class: ""
};
var _hoisted_67 = {
	"aria-colindex": "5",
	role: "cell",
	class: ""
};
var _hoisted_68 = { class: "code-section-container show-code" };
var _hoisted_69 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_70 = {
	id: "tableProgress",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_71 = { class: "statbox panel box box-shadow" };
var _hoisted_72 = { class: "panel-body" };
var _hoisted_73 = { class: "table-responsive" };
var _hoisted_74 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table b-table table-bordered",
	id: "__BVID__328"
};
var _hoisted_75 = { role: "rowgroup" };
var _hoisted_76 = {
	"aria-colindex": "1",
	role: "cell",
	class: ""
};
var _hoisted_77 = {
	"aria-colindex": "2",
	role: "cell",
	class: ""
};
var _hoisted_78 = {
	"aria-colindex": "3",
	role: "cell",
	class: ""
};
var _hoisted_79 = {
	class: "progress br-30",
	min: "0"
};
var _hoisted_80 = {
	"aria-colindex": "4",
	role: "cell",
	class: ""
};
var _hoisted_81 = { class: "code-section-container show-code" };
var _hoisted_82 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_83 = {
	id: "tableContextual",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_84 = { class: "statbox panel box box-shadow" };
var _hoisted_85 = { class: "panel-body" };
var _hoisted_86 = { class: "contextual-table table-responsive" };
var _hoisted_87 = {
	role: "table",
	class: "table b-table",
	id: "__BVID__337"
};
var _hoisted_88 = { role: "rowgroup" };
var _hoisted_89 = {
	role: "cell",
	class: ""
};
var _hoisted_90 = {
	role: "cell",
	class: ""
};
var _hoisted_91 = {
	role: "cell",
	class: ""
};
var _hoisted_92 = {
	role: "cell",
	class: ""
};
var _hoisted_93 = { class: "code-section-container show-code" };
var _hoisted_94 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_95 = {
	id: "tableDropdown",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_96 = { class: "statbox panel box box-shadow" };
var _hoisted_97 = { class: "panel-body" };
var _hoisted_98 = { class: "table-responsive" };
var _hoisted_99 = {
	role: "table",
	class: "table b-table table-bordered",
	id: "__BVID__345"
};
var _hoisted_100 = { role: "rowgroup" };
var _hoisted_101 = {
	role: "cell",
	class: ""
};
var _hoisted_102 = {
	role: "cell",
	class: ""
};
var _hoisted_103 = {
	role: "cell",
	class: ""
};
var _hoisted_104 = {
	role: "cell",
	class: ""
};
var _hoisted_105 = { class: "code-section-container show-code" };
var _hoisted_106 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_107 = {
	id: "tableFooter",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_108 = { class: "statbox panel box box-shadow" };
var _hoisted_109 = { class: "panel-body" };
var _hoisted_110 = { class: "table-condensed table-responsive" };
var _hoisted_111 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "4",
	class: "table b-table table-hover table-bordered",
	id: "__BVID__354"
};
var _hoisted_112 = { role: "rowgroup" };
var _hoisted_113 = {
	"aria-colindex": "1",
	role: "cell",
	class: ""
};
var _hoisted_114 = {
	"aria-colindex": "2",
	role: "cell",
	class: ""
};
var _hoisted_115 = {
	"aria-colindex": "3",
	role: "cell",
	class: ""
};
var _hoisted_116 = { class: "code-section-container show-code" };
var _hoisted_117 = {
	key: 0,
	class: "code-section text-start"
};
var _hoisted_118 = {
	id: "tableCheckbox",
	class: "col-lg-12 col-12 layout-spacing"
};
var _hoisted_119 = { class: "statbox panel box box-shadow" };
var _hoisted_120 = { class: "panel-body" };
var _hoisted_121 = { class: "table-checkable table-highlight-head table-responsive" };
var _hoisted_122 = {
	role: "table",
	"aria-busy": "false",
	"aria-colcount": "5",
	class: "table b-table table-striped table-hover table-bordered",
	id: "__BVID__368"
};
var _hoisted_123 = { role: "rowgroup" };
var _hoisted_124 = {
	"aria-colindex": "1",
	role: "cell",
	class: "text-center"
};
var _hoisted_125 = { class: "checkbox-primary custom-control custom-checkbox" };
var _hoisted_126 = ["id"];
var _hoisted_127 = ["for"];
var _hoisted_128 = {
	"aria-colindex": "2",
	role: "cell",
	class: ""
};
var _hoisted_129 = {
	"aria-colindex": "3",
	role: "cell",
	class: ""
};
var _hoisted_130 = {
	"aria-colindex": "4",
	role: "cell",
	class: ""
};
var _hoisted_131 = { class: "code-section-container show-code" };
var _hoisted_132 = {
	key: 0,
	class: "code-section text-start"
};
var _sfc_main = {
	__name: "tables",
	setup(__props) {
		useMeta({ title: "Tables" });
		const code_arr = ref([]);
		const table_1 = ref([]);
		const table_2 = ref([]);
		onMounted(() => {
			initTooltip();
			init_tables();
		});
		const toggleCode = (name) => {
			if (code_arr.value.includes(name)) code_arr.value = code_arr.value.filter((d) => d != name);
			else code_arr.value.push(name);
		};
		const initTooltip = () => {
			setTimeout(() => {
				[].slice.call(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]")).map((tooltipTriggerEl) => {
					return new window.bootstrap.Tooltip(tooltipTriggerEl);
				});
			});
		};
		const init_tables = () => {
			table_1.value = [
				{
					thumb: "boy.png",
					name: "Shaun Park",
					"first name": "John",
					"last name": "Doe jhgjhg",
					email: "johndoe@yahoo.com",
					date: "10/08/2020",
					sale: "320",
					sales: "29.56",
					status: "Complete",
					status_class: "success",
					register: "5 min ago",
					position: "Developer",
					office: "London"
				},
				{
					thumb: "girl-1.png",
					name: "Alma Clarke",
					"first name": "Andy",
					"last name": "King",
					email: "andyking@gmail.com",
					date: "11/08/2020",
					sale: "420",
					sales: "19.15",
					status: "Pending",
					status_class: "secondary",
					register: "10 min ago",
					position: "Designer",
					office: "New York"
				},
				{
					thumb: "girl-2.png",
					name: "Xavier",
					"first name": "Lisa",
					"last name": "Doe",
					email: "lisadoe@yahoo.com",
					date: "12/08/2020",
					sale: "130",
					sales: "39.00",
					status: "In progress",
					status_class: "info",
					register: "1 hour ago",
					position: "Accountant",
					office: "Amazon"
				},
				{
					thumb: "boy-2.png",
					name: "Vincent Carpenter",
					"first name": "Vincent",
					"last name": "Carpenter",
					email: "vinnyc@yahoo.com",
					date: "13/08/2020",
					sale: "260",
					sales: "88.03",
					status: "Canceled",
					status_class: "danger",
					register: "1 day ago",
					position: "Data Scientist",
					office: "Canada"
				},
				{
					thumb: "boy-2.png",
					name: "Vincent Carpenter",
					"first name": "Vincent XXXXXX",
					"last name": "Carpenter",
					email: "vinnyc@yahoo.com",
					date: "13/08/2020",
					sale: "260",
					sales: "88.03",
					status: "Canceled",
					status_class: "danger",
					register: "1 day ago",
					position: "Data Scientist",
					office: "Canada"
				}
			];
			table_2.value = [
				{
					thumb: "boy.png",
					name: "Amy Diaz",
					"first name": "Amy",
					"last name": "Diaz",
					email: "amydiaz@yahoo.com",
					date: "10/08/2020",
					sale: "320",
					sales: "29.56",
					status: "Complete",
					status_class: "success",
					register: "5 min ago"
				},
				{
					thumb: "girl-1.png",
					name: "Nia Hillyer",
					"first name": "Nia",
					"last name": "Hillyer",
					email: "niahill@gmail.com",
					date: "11/08/2020",
					sale: "420",
					sales: "19.15",
					status: "Pending",
					status_class: "secondary",
					register: "10 min ago"
				},
				{
					thumb: "girl-2.png",
					name: "Marry",
					"first name": "Marry",
					"last name": "McDonald",
					email: "marryMcD@yahoo.com",
					date: "12/08/2020",
					sale: "130",
					sales: "39.00",
					status: "In progress",
					status_class: "info",
					register: "1 hour ago"
				},
				{
					thumb: "boy-2.png",
					name: "Shaun Park",
					"first name": "Shaun",
					"last name": "Park",
					email: "park@yahoo.com",
					date: "13/08/2020",
					sale: "260",
					sales: "88.03",
					status: "Canceled",
					status_class: "danger",
					register: "1 day ago"
				}
			];
			table_2.value = table_1.value.concat(table_2.value);
		};
		const random_class = (index) => {
			if (index == 0) return "default";
			else if (index == 1) return "primary";
			else if (index == 2) return "secondary";
			else if (index == 3) return "success";
			else if (index == 4) return "dark";
			else if (index == 5) return "danger";
			else if (index == 6) return "info";
			else if (index == 7) return "warning";
			return "dark";
		};
		return (_ctx, _cache) => {
			const _directive_scroll_spy_active = resolveDirective("scroll-spy-active");
			const _directive_scroll_spy_link = resolveDirective("scroll-spy-link");
			const _directive_scroll_spy = resolveDirective("scroll-spy");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[10] || (_cache[10] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Tables")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Basic")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [withDirectives((openBlock(), createElementBlock("div", _hoisted_4, _cache[11] || (_cache[11] = [createStaticVNode("<a href=\"#tableSimple\" class=\"nav-link\">Simple</a><a href=\"#tableHover\" class=\"nav-link\">Hover</a><a href=\"#tableStriped\" class=\"nav-link\">Striped</a><a href=\"#tableLight\" class=\"nav-link\">Light</a><a href=\"#tableCaption\" class=\"nav-link\">Caption</a><a href=\"#tableProgress\" class=\"nav-link\">Progress</a><a href=\"#tableContextual\" class=\"nav-link\">Contextual</a><a href=\"#tableDropdown\" class=\"nav-link\">Dropdown</a><a href=\"#tableFooter\" class=\"nav-link\">Footer</a><a href=\"#tableCheckbox\" class=\"nav-link\">Checkbox</a>", 10)]))), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]),
				_cache[61] || (_cache[61] = createStaticVNode("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/content/tables\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/content/tables </a></div></div></div>", 1)),
				withDirectives((openBlock(), createElementBlock("div", _hoisted_5, [
					createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[16] || (_cache[16] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Simple Table")])])], -1)), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("table", _hoisted_10, [_cache[13] || (_cache[13] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1"
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2"
						}, [createBaseVNode("div", null, "Date")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3"
						}, [createBaseVNode("div", null, "Sale")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: "text-center"
						}, [createBaseVNode("div", null, "status")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							"aria-label": "Action",
							class: "text-center"
						}, [createBaseVNode("div")])
					])], -1)), createBaseVNode("tbody", _hoisted_11, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row"
						}, [
							createBaseVNode("td", _hoisted_12, toDisplayString(item.name), 1),
							createBaseVNode("td", _hoisted_13, toDisplayString(item.date), 1),
							createBaseVNode("td", _hoisted_14, toDisplayString(item.sale), 1),
							createBaseVNode("td", _hoisted_15, [createBaseVNode("span", { class: normalizeClass(`text-${item.status_class}`) }, toDisplayString(item.status), 3)]),
							_cache[12] || (_cache[12] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
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
								class: "feather feather-trash-2 icon"
							}, [
								createBaseVNode("polyline", { points: "3 6 5 6 21 6" }),
								createBaseVNode("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
								createBaseVNode("line", {
									x1: "10",
									y1: "11",
									x2: "10",
									y2: "17"
								}),
								createBaseVNode("line", {
									x1: "14",
									y1: "11",
									x2: "14",
									y2: "17"
								})
							])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_16, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[0] || (_cache[0] = ($event) => toggleCode("code1"))
					}, _cache[14] || (_cache[14] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code1") ? (openBlock(), createElementBlock("div", _hoisted_17, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[15] || (_cache[15] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <span :class=\"`text-${item.status_class}`\"> {{ item.status }} </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-trash-2 icon\"\n                    >\n                        <polyline points=\"3 6 5 6 21 6\"></polyline>\n                        <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>\n                        <line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line>\n                        <line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [_cache[21] || (_cache[21] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Hover Table")])])], -1)), createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("table", _hoisted_22, [_cache[18] || (_cache[18] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1"
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2"
						}, [createBaseVNode("div", null, "Date")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3"
						}, [createBaseVNode("div", null, "Sale")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: "text-center"
						}, [createBaseVNode("div", null, "status")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							"aria-label": "Action",
							class: "text-center"
						}, [createBaseVNode("div")])
					])], -1)), createBaseVNode("tbody", _hoisted_23, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row"
						}, [
							createBaseVNode("td", _hoisted_24, toDisplayString(item.name), 1),
							createBaseVNode("td", _hoisted_25, toDisplayString(item.date), 1),
							createBaseVNode("td", _hoisted_26, toDisplayString(item.sale), 1),
							createBaseVNode("td", _hoisted_27, [createBaseVNode("span", { class: normalizeClass(`text-${item.status_class}`) }, toDisplayString(item.status), 3)]),
							_cache[17] || (_cache[17] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
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
								class: "feather feather-trash-2 icon"
							}, [
								createBaseVNode("polyline", { points: "3 6 5 6 21 6" }),
								createBaseVNode("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
								createBaseVNode("line", {
									x1: "10",
									y1: "11",
									x2: "10",
									y2: "17"
								}),
								createBaseVNode("line", {
									x1: "14",
									y1: "11",
									x2: "14",
									y2: "17"
								})
							])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_28, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[1] || (_cache[1] = ($event) => toggleCode("code2"))
					}, _cache[19] || (_cache[19] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code2") ? (openBlock(), createElementBlock("div", _hoisted_29, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[20] || (_cache[20] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-hover table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <span :class=\"`text-${item.status_class}`\"> {{ item.status }} </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-trash-2 icon\"\n                    >\n                        <polyline points=\"3 6 5 6 21 6\"></polyline>\n                        <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>\n                        <line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line>\n                        <line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [_cache[26] || (_cache[26] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Striped Table")])])], -1)), createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("table", _hoisted_34, [_cache[23] || (_cache[23] = createBaseVNode("thead", { role: "rowgroup" }, [createBaseVNode("tr", { role: "row" }, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1"
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2"
						}, [createBaseVNode("div", null, "Date")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3"
						}, [createBaseVNode("div", null, "Sale")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							"aria-label": "Action",
							class: "text-center"
						}, [createBaseVNode("div", null, "action")])
					])], -1)), createBaseVNode("tbody", _hoisted_35, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row"
						}, [
							createBaseVNode("td", _hoisted_36, [createBaseVNode("div", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("img", {
								alt: "avatar",
								class: "img-fluid rounded-circle",
								src: __require("@/assets/images/" + item.thumb)
							}, null, 8, _hoisted_39)]), createBaseVNode("p", _hoisted_40, toDisplayString(item.name), 1)])]),
							createBaseVNode("td", _hoisted_41, toDisplayString(item.date), 1),
							createBaseVNode("td", _hoisted_42, toDisplayString(item.sale), 1),
							_cache[22] || (_cache[22] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
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
								class: "feather feather-x t-icon t-hover-icon"
							}, [createBaseVNode("line", {
								x1: "18",
								y1: "6",
								x2: "6",
								y2: "18"
							}), createBaseVNode("line", {
								x1: "6",
								y1: "6",
								x2: "18",
								y2: "18"
							})])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_43, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[2] || (_cache[2] = ($event) => toggleCode("code3"))
					}, _cache[24] || (_cache[24] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code3") ? (openBlock(), createElementBlock("div", _hoisted_44, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[25] || (_cache[25] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-striped table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div>action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">\n                    <div class=\"d-flex\">\n                        <div class=\"usr-img-frame me-2 rounded-circle\">\n                            <img alt=\"avatar\" class=\"img-fluid rounded-circle\" :src=\"require('@/assets/images/' + item.thumb)\" />\n                        </div>\n                        <p class=\"align-self-center mb-0\">{{ item.name }}</p>\n                    </div>\n                </td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-x t-icon t-hover-icon\"\n                    >\n                        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n                        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [_cache[31] || (_cache[31] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Table Light")])])], -1)), createBaseVNode("div", _hoisted_47, [createBaseVNode("div", _hoisted_48, [createBaseVNode("table", _hoisted_49, [_cache[28] || (_cache[28] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1",
							class: ""
						}, [createBaseVNode("div", null, "#")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2",
							class: ""
						}, [createBaseVNode("div", null, "First Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3",
							class: ""
						}, [createBaseVNode("div", null, "Last Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: ""
						}, [createBaseVNode("div", null, "Email")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							"aria-label": "Action",
							class: "text-center"
						}, [createBaseVNode("div")])
					])], -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, i) => {
						return openBlock(), createElementBlock("tbody", {
							key: item.name,
							role: "rowgroup"
						}, [createBaseVNode("tr", _hoisted_50, [
							createBaseVNode("td", _hoisted_51, toDisplayString(i + 1), 1),
							createBaseVNode("td", _hoisted_52, toDisplayString(item["first name"]), 1),
							createBaseVNode("td", _hoisted_53, toDisplayString(item["last name"]), 1),
							createBaseVNode("td", _hoisted_54, toDisplayString(item.email), 1),
							_cache[27] || (_cache[27] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
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
								class: "feather feather-x t-icon"
							}, [createBaseVNode("line", {
								x1: "18",
								y1: "6",
								x2: "6",
								y2: "18"
							}), createBaseVNode("line", {
								x1: "6",
								y1: "6",
								x2: "18",
								y2: "18"
							})])], -1))
						])]);
					}), 128))])]), createBaseVNode("div", _hoisted_55, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[3] || (_cache[3] = ($event) => toggleCode("code4"))
					}, _cache[29] || (_cache[29] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code4") ? (openBlock(), createElementBlock("div", _hoisted_56, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[30] || (_cache[30] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-light table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-hover\" id=\"__BVID__310\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>First Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Last Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Email</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"rowgroup\">\n            <tr role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item['last name'] }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">{{ item.email }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-x t-icon\"\n                    >\n                        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n                        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_57, [createBaseVNode("div", _hoisted_58, [_cache[35] || (_cache[35] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Captions")])])], -1)), createBaseVNode("div", _hoisted_59, [createBaseVNode("div", _hoisted_60, [createBaseVNode("table", _hoisted_61, [_cache[32] || (_cache[32] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1",
							class: ""
						}, [createBaseVNode("div", null, "#")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2",
							class: ""
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3",
							class: ""
						}, [createBaseVNode("div", null, "Email")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: ""
						}, [createBaseVNode("div", null, "Status")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							class: ""
						}, [createBaseVNode("div", null, "Register")])
					])], -1)), createBaseVNode("tbody", _hoisted_62, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, i) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row",
							class: ""
						}, [
							createBaseVNode("td", _hoisted_63, toDisplayString(i + 1), 1),
							createBaseVNode("td", _hoisted_64, toDisplayString(item.name), 1),
							createBaseVNode("td", _hoisted_65, toDisplayString(item.email), 1),
							createBaseVNode("td", _hoisted_66, [createBaseVNode("span", { class: normalizeClass(["badge", {
								"outline-badge-primary": item.status == "Complete",
								"outline-badge-secondary": item.status == "Pending",
								"outline-badge-info": item.status == "In progress",
								"outline-badge-danger": item.status == "Canceled"
							}]) }, toDisplayString(item.status), 3)]),
							createBaseVNode("td", _hoisted_67, toDisplayString(item.register), 1)
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_68, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[4] || (_cache[4] = ($event) => toggleCode("code5"))
					}, _cache[33] || (_cache[33] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code5") ? (openBlock(), createElementBlock("div", _hoisted_69, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[34] || (_cache[34] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table\" id=\"__BVID__319\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Email</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"\"><div>Register</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"text-success\">{{ item.name }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.email }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">\n                    <span\n                        class=\"badge\"\n                        :class=\"{\n                            'outline-badge-primary': item.status == 'Complete',\n                            'outline-badge-secondary': item.status == 'Pending',\n                            'outline-badge-info': item.status == 'In progress',\n                            'outline-badge-danger': item.status == 'Canceled',\n                        }\"\n                    >\n                        {{ item.status }}\n                    </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"\">{{ item.register }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n    ")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_70, [createBaseVNode("div", _hoisted_71, [_cache[40] || (_cache[40] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Progress Table")])])], -1)), createBaseVNode("div", _hoisted_72, [createBaseVNode("div", _hoisted_73, [createBaseVNode("table", _hoisted_74, [_cache[37] || (_cache[37] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1",
							class: ""
						}, [createBaseVNode("div", null, "#")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2",
							class: ""
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3",
							class: ""
						}, [createBaseVNode("div", null, "Progress")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: ""
						}, [createBaseVNode("div", null, "Sales")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							class: "text-center"
						}, [createBaseVNode("div", null, "Action")])
					])], -1)), createBaseVNode("tbody", _hoisted_75, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, i) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row",
							class: ""
						}, [
							createBaseVNode("td", _hoisted_76, toDisplayString(i + 1), 1),
							createBaseVNode("td", _hoisted_77, toDisplayString(item["first name"] + " " + item["last name"]), 1),
							createBaseVNode("td", _hoisted_78, [createBaseVNode("div", _hoisted_79, [createBaseVNode("div", {
								role: "progressbar",
								"aria-valuemin": "0",
								"aria-valuemax": "100",
								"aria-valuenow": "30",
								class: normalizeClass(["progress-bar", `bg-${item.status_class}`]),
								style: normalizeStyle(`width: ${item.sales}%`)
							}, null, 6)])]),
							createBaseVNode("td", _hoisted_80, [createBaseVNode("p", { class: normalizeClass(i == 3 ? "text-success" : "text-danger") }, toDisplayString(item.sales + "%"), 3)]),
							_cache[36] || (_cache[36] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
							}, [createBaseVNode("ul", { class: "table-controls" }, [createBaseVNode("li", null, [createBaseVNode("a", {
								href: "javascript:void(0);",
								"data-bs-toggle": "tooltip",
								title: "Edit"
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
								class: "feather feather-edit-2"
							}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })])])]), createBaseVNode("li", null, [createBaseVNode("a", {
								href: "javascript:void(0);",
								"data-bs-toggle": "tooltip",
								title: "Delete"
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
								class: "feather feather-trash-2"
							}, [
								createBaseVNode("polyline", { points: "3 6 5 6 21 6" }),
								createBaseVNode("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
								createBaseVNode("line", {
									x1: "10",
									y1: "11",
									x2: "10",
									y2: "17"
								}),
								createBaseVNode("line", {
									x1: "14",
									y1: "11",
									x2: "14",
									y2: "17"
								})
							])])])])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_81, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[5] || (_cache[5] = ($event) => toggleCode("code6"))
					}, _cache[38] || (_cache[38] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code6") ? (openBlock(), createElementBlock("div", _hoisted_82, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[39] || (_cache[39] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-bordered\" id=\"__BVID__328\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Progress</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Sales</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item['first name'] + ' ' + item['last name'] }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">\n                    <div class=\"progress br-30\" min=\"0\">\n                        <div\n                            role=\"progressbar\"\n                            aria-valuemin=\"0\"\n                            aria-valuemax=\"100\"\n                            aria-valuenow=\"30\"\n                            class=\"progress-bar\"\n                            :class=\"`bg-${item.status_class}`\"\n                            :style=\"`width: ${item.sales}%`\"\n                        ></div>\n                    </div>\n                </td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">\n                    <p :class=\"i == 3 ? 'text-success' : 'text-danger'\">{{ item.sales + '%' }}</p>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_83, [createBaseVNode("div", _hoisted_84, [_cache[44] || (_cache[44] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Contextual")])])], -1)), createBaseVNode("div", _hoisted_85, [createBaseVNode("div", _hoisted_86, [createBaseVNode("table", _hoisted_87, [_cache[41] || (_cache[41] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "#"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "first name"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "last name"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "email")
					])], -1)), createBaseVNode("tbody", _hoisted_88, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_2.value, (item, i) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row",
							class: normalizeClass("table-" + random_class(i))
						}, [
							createBaseVNode("td", _hoisted_89, toDisplayString(i + 1), 1),
							createBaseVNode("td", _hoisted_90, toDisplayString(item["first name"]), 1),
							createBaseVNode("td", _hoisted_91, toDisplayString(item["first name"]), 1),
							createBaseVNode("td", _hoisted_92, toDisplayString(item.email), 1)
						], 2);
					}), 128))])])]), createBaseVNode("div", _hoisted_93, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[6] || (_cache[6] = ($event) => toggleCode("code7"))
					}, _cache[42] || (_cache[42] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code7") ? (openBlock(), createElementBlock("div", _hoisted_94, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[43] || (_cache[43] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"contextual-table table-responsive\">\n    <table role=\"table\" class=\"table b-table\" id=\"__BVID__337\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" class=\"\">#</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">first name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">last name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">email</th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_2\" :key=\"item.name\" role=\"row\" :class=\"'table-' + random_class(i)\">\n                <td role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td role=\"cell\" class=\"\">{{ item.email }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_95, [createBaseVNode("div", _hoisted_96, [_cache[49] || (_cache[49] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Dropdown")])])], -1)), createBaseVNode("div", _hoisted_97, [createBaseVNode("div", _hoisted_98, [createBaseVNode("table", _hoisted_99, [_cache[46] || (_cache[46] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "Name"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "Date"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: ""
						}, "Sale"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: "text-center"
						}, "Status"),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							class: "text-center"
						}, "Action")
					])], -1)), createBaseVNode("tbody", _hoisted_100, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_2.value, (item) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row",
							class: ""
						}, [
							createBaseVNode("td", _hoisted_101, toDisplayString(item.name), 1),
							createBaseVNode("td", _hoisted_102, toDisplayString(item.date), 1),
							createBaseVNode("td", _hoisted_103, toDisplayString(item.sale), 1),
							createBaseVNode("td", _hoisted_104, [createBaseVNode("span", { class: normalizeClass(["badge", `badge-${item.status_class}`]) }, toDisplayString(item.status), 3)]),
							_cache[45] || (_cache[45] = createBaseVNode("td", {
								role: "cell",
								class: "text-center"
							}, [createBaseVNode("div", {
								class: "dropdown b-dropdown custom-dropdown btn-group",
								id: "__BVID__464"
							}, [createBaseVNode("a", {
								"aria-haspopup": "true",
								"aria-expanded": "false",
								href: "javascript:;",
								target: "_self",
								class: "btn dropdown-toggle btn-icon-only",
								"data-bs-toggle": "dropdown",
								boundary: "body",
								id: "ddlcustom"
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
								role: "menu",
								tabindex: "-1",
								class: "dropdown-menu dropdown-menu-right",
								"aria-labelledby": "ddlcustom",
								style: {}
							}, [
								createBaseVNode("li", { role: "presentation" }, [createBaseVNode("a", {
									role: "menuitem",
									href: "javascript:",
									target: "_self",
									class: "dropdown-item"
								}, "Download")]),
								createBaseVNode("li", { role: "presentation" }, [createBaseVNode("a", {
									role: "menuitem",
									href: "javascript:",
									target: "_self",
									class: "dropdown-item"
								}, "Share")]),
								createBaseVNode("li", { role: "presentation" }, [createBaseVNode("a", {
									role: "menuitem",
									href: "javascript:",
									target: "_self",
									class: "dropdown-item"
								}, "Edit")]),
								createBaseVNode("li", { role: "presentation" }, [createBaseVNode("a", {
									role: "menuitem",
									href: "javascript:",
									target: "_self",
									class: "dropdown-item"
								}, "Delete")])
							])])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_105, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[7] || (_cache[7] = ($event) => toggleCode("code8"))
					}, _cache[47] || (_cache[47] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code8") ? (openBlock(), createElementBlock("div", _hoisted_106, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[48] || (_cache[48] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" class=\"table b-table table-bordered\" >\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Date</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Sale</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"text-center\">Status</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"text-center\">Action</th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_2\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td role=\"cell\" class=\"\">{{ item.date }}</td>\n                <td role=\"cell\" class=\"\">{{ item.sale }}</td>\n                <td role=\"cell\" class=\"\">\n                    <span class=\"badge\" :class=\"`badge-${item.status_class}`\">{{ item.status }}</span>\n                </td>\n                <td role=\"cell\" class=\"text-center\">\n                    <div class=\"dropdown b-dropdown custom-dropdown btn-group\" id=\"__BVID__464\">\n                        <a\n                            aria-haspopup=\"true\"\n                            aria-expanded=\"false\"\n                            href=\"javascript:;\"\n                            target=\"_self\"\n                            class=\"btn dropdown-toggle btn-icon-only\"\n                            data-bs-toggle=\"dropdown\"\n                            boundary=\"body\"\n                            id=\"ddlcustom\"\n                        >\n                            <svg> ... </svg>\n                        </a>\n                        <ul role=\"menu\" tabindex=\"-1\" class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"ddlcustom\" style=\"\">\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Download</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Share</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Edit</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Delete</a></li>\n                        </ul>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_107, [createBaseVNode("div", _hoisted_108, [_cache[55] || (_cache[55] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Table with Footer")])])], -1)), createBaseVNode("div", _hoisted_109, [createBaseVNode("div", _hoisted_110, [createBaseVNode("table", _hoisted_111, [
						_cache[51] || (_cache[51] = createBaseVNode("thead", {
							role: "rowgroup",
							class: ""
						}, [createBaseVNode("tr", {
							role: "row",
							class: ""
						}, [
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "1",
								class: ""
							}, [createBaseVNode("div", null, "Name")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "2",
								class: ""
							}, [createBaseVNode("div", null, "Position")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "3",
								class: ""
							}, [createBaseVNode("div", null, "Office")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "4",
								class: "text-center"
							}, [createBaseVNode("div", null, "Action")])
						])], -1)),
						createBaseVNode("tbody", _hoisted_112, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item) => {
							return openBlock(), createElementBlock("tr", {
								key: item.name,
								role: "row",
								class: ""
							}, [
								createBaseVNode("td", _hoisted_113, toDisplayString(item.name), 1),
								createBaseVNode("td", _hoisted_114, toDisplayString(item.position), 1),
								createBaseVNode("td", _hoisted_115, toDisplayString(item.office), 1),
								_cache[50] || (_cache[50] = createBaseVNode("td", {
									"aria-colindex": "4",
									role: "cell",
									class: "text-center"
								}, [createBaseVNode("ul", { class: "table-controls" }, [createBaseVNode("li", null, [createBaseVNode("a", {
									href: "javascript:void(0);",
									"data-bs-toggle": "tooltip",
									title: "Edit"
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
									class: "feather feather-check-circle text-primary"
								}, [createBaseVNode("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), createBaseVNode("polyline", { points: "22 4 12 14.01 9 11.01" })])])]), createBaseVNode("li", null, [createBaseVNode("a", {
									href: "javascript:void(0);",
									"data-bs-toggle": "tooltip",
									title: "Delete"
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
									class: "feather feather-x-circle text-danger"
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
								])])])])], -1))
							]);
						}), 128))]),
						_cache[52] || (_cache[52] = createBaseVNode("tfoot", {
							role: "rowgroup",
							class: ""
						}, [createBaseVNode("tr", {
							role: "row",
							class: ""
						}, [
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "1",
								class: ""
							}, [createBaseVNode("div", null, "Name")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "2",
								class: ""
							}, [createBaseVNode("div", null, "Position")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "3",
								class: ""
							}, [createBaseVNode("div", null, "Office")]),
							createBaseVNode("th", {
								role: "columnheader",
								scope: "col",
								"aria-colindex": "4",
								class: "text-center"
							}, [createBaseVNode("div", null, "Action")])
						])], -1))
					])]), createBaseVNode("div", _hoisted_116, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[8] || (_cache[8] = ($event) => toggleCode("code9"))
					}, _cache[53] || (_cache[53] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code9") ? (openBlock(), createElementBlock("div", _hoisted_117, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[54] || (_cache[54] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-condensed table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"4\" class=\"table b-table table-hover table-bordered\" id=\"__BVID__354\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Position</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Office</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item.position }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.office }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>line points=\"22 4 12 14.01 9 11.01\"></polyline>\n                                </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Position</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Office</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </tfoot>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])]),
					createBaseVNode("div", _hoisted_118, [createBaseVNode("div", _hoisted_119, [_cache[60] || (_cache[60] = createBaseVNode("div", { class: "panel-heading" }, [createBaseVNode("div", { class: "row" }, [createBaseVNode("div", { class: "col-xl-12 col-md-12 col-sm-12 col-12" }, [createBaseVNode("h4", null, "Checkboxes")])])], -1)), createBaseVNode("div", _hoisted_120, [createBaseVNode("div", _hoisted_121, [createBaseVNode("table", _hoisted_122, [_cache[57] || (_cache[57] = createBaseVNode("thead", {
						role: "rowgroup",
						class: ""
					}, [createBaseVNode("tr", {
						role: "row",
						class: ""
					}, [
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "1",
							class: "text-center"
						}, [createBaseVNode("div", { class: "checkbox-primary custom-control custom-checkbox" }, [createBaseVNode("input", {
							variant: "primary",
							type: "checkbox",
							class: "custom-control-input",
							value: "true",
							id: "__BVID__372"
						}), createBaseVNode("label", {
							class: "custom-control-label",
							for: "__BVID__372"
						})])]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "2",
							class: ""
						}, [createBaseVNode("div", null, "Name")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "3",
							class: ""
						}, [createBaseVNode("div", null, "Date")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "4",
							class: ""
						}, [createBaseVNode("div", null, "Sale")]),
						createBaseVNode("th", {
							role: "columnheader",
							scope: "col",
							"aria-colindex": "5",
							class: "text-center"
						}, [createBaseVNode("div", null, "icons")])
					])], -1)), createBaseVNode("tbody", _hoisted_123, [(openBlock(true), createElementBlock(Fragment, null, renderList(table_1.value, (item, i) => {
						return openBlock(), createElementBlock("tr", {
							key: item.name,
							role: "row",
							class: ""
						}, [
							createBaseVNode("td", _hoisted_124, [createBaseVNode("div", _hoisted_125, [createBaseVNode("input", {
								variant: "primary",
								type: "checkbox",
								class: "custom-control-input",
								value: "true",
								id: "chk" + i
							}, null, 8, _hoisted_126), createBaseVNode("label", {
								class: "custom-control-label",
								for: "chk" + i
							}, null, 8, _hoisted_127)])]),
							createBaseVNode("td", _hoisted_128, toDisplayString(item.name), 1),
							createBaseVNode("td", _hoisted_129, toDisplayString(item.date), 1),
							createBaseVNode("td", _hoisted_130, toDisplayString(item.sale), 1),
							_cache[56] || (_cache[56] = createBaseVNode("td", {
								"aria-colindex": "5",
								role: "cell",
								class: "text-center"
							}, [createBaseVNode("ul", { class: "table-controls" }, [
								createBaseVNode("li", null, [createBaseVNode("a", {
									href: "javascript:void(0);",
									"data-bs-toggle": "tooltip",
									title: "Settings"
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
									class: "feather feather-settings text-primary"
								}, [createBaseVNode("circle", {
									cx: "12",
									cy: "12",
									r: "3"
								}), createBaseVNode("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })])])]),
								createBaseVNode("li", null, [createBaseVNode("a", {
									href: "javascript:void(0);",
									"data-bs-toggle": "tooltip",
									title: "Edit"
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
									class: "feather feather-edit-2 text-success"
								}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })])])]),
								createBaseVNode("li", null, [createBaseVNode("a", {
									href: "javascript:void(0);",
									"data-bs-toggle": "tooltip",
									title: "Delete"
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
									class: "feather feather-trash-2 text-danger"
								}, [
									createBaseVNode("polyline", { points: "3 6 5 6 21 6" }),
									createBaseVNode("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
									createBaseVNode("line", {
										x1: "10",
										y1: "11",
										x2: "10",
										y2: "17"
									}),
									createBaseVNode("line", {
										x1: "14",
										y1: "11",
										x2: "14",
										y2: "17"
									})
								])])])
							])], -1))
						]);
					}), 128))])])]), createBaseVNode("div", _hoisted_131, [createBaseVNode("button", {
						type: "button",
						class: "btn btn-default toggle-code-snippet",
						onClick: _cache[9] || (_cache[9] = ($event) => toggleCode("code10"))
					}, _cache[58] || (_cache[58] = [createBaseVNode("span", null, "Code", -1)])), code_arr.value.includes("code10") ? (openBlock(), createElementBlock("div", _hoisted_132, [createVNode(_sfc_main$1, null, {
						default: withCtx(() => _cache[59] || (_cache[59] = [createBaseVNode("div", null, [createBaseVNode("pre", null, "<div class=\"table-checkable table-highlight-head table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-striped table-hover table-bordered\" id=\"__BVID__368\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"text-center\">\n                    <div class=\"checkbox-primary custom-control custom-checkbox\">\n                        <input variant=\"primary\" type=\"checkbox\" class=\"custom-control-input\" value=\"true\" /><label\n                            class=\"custom-control-label\"\n                        ></label>\n                    </div>\n                </th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"text-center\"><div>icons</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"text-center\">\n                    <div class=\"checkbox-primary custom-control custom-checkbox\">\n                        <input variant=\"primary\" type=\"checkbox\" class=\"custom-control-input\" value=\"true\" :id=\"'chk' + i\" /><label\n                            class=\"custom-control-label\"\n                            :for=\"'chk' + i\"\n                        ></label>\n                    </div>\n                </td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.date }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">{{ item.sale }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Settings\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1)])),
						_: 1
					})])) : createCommentVNode("", true)])])])])
				])), [[_directive_scroll_spy]])
			])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
