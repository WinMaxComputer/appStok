import { E as createVNode, G as resolveComponent, S as createElementBlock, T as createTextVNode, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, c as vModelDynamic, d as vModelText, et as init_reactivity_esm_bundler, j as init_runtime_core_esm_bundler, p as withKeys, rt as ref, t as useMeta, w as createStaticVNode, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { c as useStore, o as useRoute, s as useRouter } from "../../assets/main-DqXy1ygy.js";
//#endregion
//#region resources/js/src/views/auth/login_boxed.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = { class: "form auth-boxed" };
var _hoisted_2 = { class: "form-container outer" };
var _hoisted_3 = { class: "form-form" };
var _hoisted_4 = { class: "form-form-wrap" };
var _hoisted_5 = { class: "form-container" };
var _hoisted_6 = { class: "form-content" };
var _hoisted_7 = {
	key: 0,
	class: "la-ball-circus",
	id: "loading-indicator"
};
var _hoisted_8 = {
	key: 1,
	class: "text-start"
};
var _hoisted_9 = { class: "form" };
var _hoisted_10 = {
	id: "username-field",
	class: "field-wrapper input"
};
var _hoisted_11 = {
	id: "password-field",
	class: "field-wrapper input mb-2"
};
var _hoisted_12 = { class: "d-flex justify-content-between" };
var _hoisted_13 = ["type"];
var _hoisted_14 = { class: "d-sm-flex justify-content-between" };
var _hoisted_15 = { class: "field-wrapper" };
var _sfc_main = {
	__name: "login_boxed",
	setup(__props) {
		useMeta({ title: "Login Boxed" });
		const pwd_type = ref("password");
		const store = useStore();
		const loading = ref(false);
		const set_pwd_type = () => {
			if (pwd_type.value === "password") pwd_type.value = "text";
			else pwd_type.value = "password";
		};
		const form = ref({
			email: "",
			password: ""
		});
		const router = useRouter();
		useRoute();
		if (localStorage.getItem("tokenLogin")) router.push({ path: "/barang" });
		const login = async () => {
			loading.value = true;
			store.dispatch("LogIn", form.value).then((response) => {
				router.push({ path: "/barang" });
				loading.value = false;
			}).catch((error) => {
				loading.value = false;
			});
		};
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [
				_cache[11] || (_cache[11] = createStaticVNode("<div class=\"media\"><div class=\"w-img\"><img src=\"/build/assets/wm-DFHoJv8u.png\" class=\"img-fluid\" alt=\"img-fluid\"></div></div><h1 class=\"\">Sign In</h1><p class=\"\">Log in to your account to continue.</p>", 3)),
				loading.value === true ? (openBlock(), createElementBlock("div", _hoisted_7, _cache[4] || (_cache[4] = [
					createBaseVNode("h2", { class: "text-center mt-3" }, "Loading", -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1),
					createBaseVNode("div", null, null, -1)
				]))) : createCommentVNode("", true),
				loading.value === false ? (openBlock(), createElementBlock("form", _hoisted_8, [createBaseVNode("div", _hoisted_9, [
					createBaseVNode("div", _hoisted_10, [
						_cache[5] || (_cache[5] = createBaseVNode("label", { for: "username" }, "USERNAME", -1)),
						_cache[6] || (_cache[6] = createBaseVNode("svg", {
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
						})], -1)),
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.email = $event),
							class: "form-control",
							placeholder: "e.g John_Doe"
						}, null, 512), [[vModelText, form.value.email]])
					]),
					createBaseVNode("div", _hoisted_11, [
						createBaseVNode("div", _hoisted_12, [_cache[8] || (_cache[8] = createBaseVNode("label", { for: "password" }, "PASSWORD", -1)), createVNode(_component_router_link, {
							to: "/auth/pass-recovery-boxed",
							class: "forgot-pass-link"
						}, {
							default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode("Forgot Password?")])),
							_: 1
						})]),
						_cache[10] || (_cache[10] = createBaseVNode("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "feather feather-lock"
						}, [createBaseVNode("rect", {
							x: "3",
							y: "11",
							width: "18",
							height: "11",
							rx: "2",
							ry: "2"
						}), createBaseVNode("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })], -1)),
						withDirectives(createBaseVNode("input", {
							type: pwd_type.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.password = $event),
							class: "form-control",
							placeholder: "Password",
							onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => login(), ["enter"]))
						}, null, 40, _hoisted_13), [[vModelDynamic, form.value.password]]),
						(openBlock(), createElementBlock("svg", {
							onClick: set_pwd_type,
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							id: "toggle-password",
							class: "feather feather-eye"
						}, _cache[9] || (_cache[9] = [createBaseVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }, null, -1), createBaseVNode("circle", {
							cx: "12",
							cy: "12",
							r: "3"
						}, null, -1)])))
					]),
					createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-primary w-100 mb-4 me-2",
						onClick: _cache[3] || (_cache[3] = ($event) => login())
					}, "Log In")])])
				])])) : createCommentVNode("", true)
			])])])])])]);
		};
	}
};
//#endregion
export { _sfc_main as default };
