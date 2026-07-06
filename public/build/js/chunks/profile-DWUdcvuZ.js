import { E as createVNode, G as resolveComponent, S as createElementBlock, X as withCtx, b as createBlock, g as Teleport, j as init_runtime_core_esm_bundler, t as useMeta, w as createStaticVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
/* empty css                      */
//#endregion
//#region resources/js/src/views/users/profile.vue
init_runtime_core_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-spacing" };
var _hoisted_3 = { class: "col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing" };
var _hoisted_4 = { class: "user-profile layout-spacing" };
var _hoisted_5 = { class: "panel" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "d-flex justify-content-between" };
var _sfc_main = {
	__name: "profile",
	setup(__props) {
		useMeta({ title: "User Profile" });
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[0] || (_cache[0] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Users")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Profile")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[2] || (_cache[2] = createBaseVNode("h3", { class: "" }, "Profile", -1)), createVNode(_component_router_link, {
				to: "/users/account-setting",
				class: "mt-2 edit-profile"
			}, {
				default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "feather feather-edit-3"
				}, [createBaseVNode("path", { d: "M12 20h9" }), createBaseVNode("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })], -1)])),
				_: 1
			})]), _cache[3] || (_cache[3] = createStaticVNode("<div class=\"text-center user-info\"><img src=\"/build/assets/profile-3-D32epS87.jpg\" alt=\"avatar\"><p class=\"\">Swamerta</p></div><div class=\"user-info-list\"><div class=\"\"><ul class=\"contacts-block list-unstyled\"><li class=\"contacts-block__item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-coffee\"><path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line></svg> Web Developer </li><li class=\"contacts-block__item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>Jan 20, 1989 </li><li class=\"contacts-block__item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-map-pin\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>New York, USA </li><li class=\"contacts-block__item\"><a href=\"mailto:example@mail.com\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-mail\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline></svg>Jimmy@gmail.com</a></li><li class=\"contacts-block__item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-phone\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path></svg> +1 (530) 555-12121 </li><li class=\"contacts-block__item\"><ul class=\"list-inline\"><li class=\"list-inline-item\"><div class=\"social-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-facebook\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg></div></li><li class=\"list-inline-item\"><div class=\"social-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg></div></li><li class=\"list-inline-item\"><div class=\"social-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-linkedin\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></div></li></ul></li></ul></div></div>", 2))])])]), _cache[4] || (_cache[4] = createStaticVNode("<div class=\"education layout-spacing\"><div class=\"panel\"><div class=\"panel-body\"><h3 class=\"\">Education</h3><div class=\"timeline-alter\"><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">04 Mar 2009</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>Royal Collage of Art</p><p>Designer Illustrator</p></div></div><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">25 Apr 2014</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>Massachusetts Institute of Technology (MIT)</p><p>Designer Illustrator</p></div></div><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">04 Apr 2018</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>School of Art Institute of Chicago (SAIC)</p><p>Designer Illustrator</p></div></div></div></div></div></div><div class=\"work-experience layout-spacing\"><div class=\"panel\"><div class=\"panel-body\"><h3 class=\"\">Work Experience</h3><div class=\"timeline-alter\"><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">04 Mar 2009</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>Netfilx Inc.</p><p>Designer Illustrator</p></div></div><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">25 Apr 2014</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>Google Inc.</p><p>Designer Illustrator</p></div></div><div class=\"item-timeline\"><div class=\"t-meta-date\"><p class=\"\">04 Apr 2018</p></div><div class=\"t-dot\"></div><div class=\"t-text\"><p>Design Reset Inc.</p><p>Designer Illustrator</p></div></div></div></div></div></div>", 2))]), _cache[5] || (_cache[5] = createBaseVNode("div", { class: "col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing" }, [createBaseVNode("div", { class: "skills layout-spacing" }, [createBaseVNode("div", { class: "panel" }, [createBaseVNode("div", { class: "panel-body" }, [
				createBaseVNode("h3", { class: "" }, "Skills"),
				createBaseVNode("div", {
					class: "progress br-30",
					min: "0"
				}, [createBaseVNode("div", {
					role: "progressbar",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": "25",
					class: "progress-bar bg-primary",
					style: { "width": "25%" }
				}, [createBaseVNode("div", { class: "progress-title" }, [createBaseVNode("span", null, "PHP"), createBaseVNode("span", null, "25%")])])]),
				createBaseVNode("div", {
					class: "progress br-30",
					min: "0"
				}, [createBaseVNode("div", {
					role: "progressbar",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": "50",
					class: "progress-bar bg-primary",
					style: { "width": "50%" }
				}, [createBaseVNode("div", { class: "progress-title" }, [createBaseVNode("span", null, "Wordpress"), createBaseVNode("span", null, "50%")])])]),
				createBaseVNode("div", {
					class: "progress br-30",
					min: "0"
				}, [createBaseVNode("div", {
					role: "progressbar",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": "70",
					class: "progress-bar bg-primary",
					style: { "width": "70%" }
				}, [createBaseVNode("div", { class: "progress-title" }, [createBaseVNode("span", null, "Javascript"), createBaseVNode("span", null, "70%")])])]),
				createBaseVNode("div", {
					class: "progress br-30",
					min: "0"
				}, [createBaseVNode("div", {
					role: "progressbar",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": "60",
					class: "progress-bar bg-primary",
					style: { "width": "60%" }
				}, [createBaseVNode("div", { class: "progress-title" }, [createBaseVNode("span", null, "jQuery"), createBaseVNode("span", null, "60%")])])])
			])])]), createBaseVNode("div", { class: "bio layout-spacing" }, [createBaseVNode("div", { class: "panel" }, [createBaseVNode("div", { class: "panel-body" }, [
				createBaseVNode("h3", { class: "" }, "Bio"),
				createBaseVNode("p", null, " I'm Web Developer from California. I code and design websites worldwide. Mauris varius tellus vitae tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus erat ac nulla. "),
				createBaseVNode("p", null, " Sed vulputate, ligula eget mollis auctor, lectus elit feugiat urna, eget euismod turpis lectus sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut velit finibus, scelerisque sapien vitae, pharetra est. Nunc accumsan ligula vehicula scelerisque vulputate. "),
				createBaseVNode("div", { class: "bio-skill-box" }, [createBaseVNode("div", { class: "row" }, [
					createBaseVNode("div", { class: "col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5" }, [createBaseVNode("div", { class: "d-flex b-skills" }, [createBaseVNode("div"), createBaseVNode("div", { class: "" }, [createBaseVNode("h5", null, "Sass Applications"), createBaseVNode("p", null, "Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.")])])]),
					createBaseVNode("div", { class: "col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5" }, [createBaseVNode("div", { class: "d-flex b-skills" }, [createBaseVNode("div"), createBaseVNode("div", { class: "" }, [createBaseVNode("h5", null, "Github Countributer"), createBaseVNode("p", null, "Ut enim ad minim veniam, quis nostrud exercitation aliquip ex ea commodo consequat.")])])]),
					createBaseVNode("div", { class: "col-12 col-xl-6 col-lg-12 mb-xl-0 mb-5" }, [createBaseVNode("div", { class: "d-flex b-skills" }, [createBaseVNode("div"), createBaseVNode("div", { class: "" }, [createBaseVNode("h5", null, "Photograhpy"), createBaseVNode("p", null, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia anim id est laborum.")])])]),
					createBaseVNode("div", { class: "col-12 col-xl-6 col-lg-12 mb-xl-0 mb-0" }, [createBaseVNode("div", { class: "d-flex b-skills" }, [createBaseVNode("div"), createBaseVNode("div", { class: "" }, [createBaseVNode("h5", null, "Mobile Apps"), createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do et dolore magna aliqua.")])])])
				])])
			])])])], -1))])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
