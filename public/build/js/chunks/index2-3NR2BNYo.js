import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { Dt as normalizeClass, E as createVNode, L as onMounted, Mt as toDisplayString, S as createElementBlock, U as renderList, b as createBlock, et as init_reactivity_esm_bundler, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, rt as ref, t as useMeta, v as computed, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { a as _plugin_vue_export_helper_default, c as useStore, i as axios, s as useRouter } from "../../assets/main-DqXy1ygy.js";
import { t as require_vue3_apexcharts_common } from "./vue3-apexcharts.common-_QhKbJHv.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-C16KEE_q.js";
//#region resources/js/src/views/index2.vue?vue&type=style&index=0&scoped=ae684388&lang.css
var import_vue3_apexcharts_common = /* @__PURE__ */ __toESM(require_vue3_apexcharts_common());
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
//#endregion
//#region resources/js/src/views/index2.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing dashboard-home" };
var _hoisted_2 = { class: "row layout-top-spacing g-3" };
var _hoisted_3 = { class: "col-12" };
var _hoisted_4 = { class: "panel br-6 p-3" };
var _hoisted_5 = { class: "row g-2 align-items-end" };
var _hoisted_6 = { class: "col-12" };
var _hoisted_7 = { class: "preset-group" };
var _hoisted_8 = { class: "col-sm-4 col-md-3" };
var _hoisted_9 = { class: "col-sm-4 col-md-3" };
var _hoisted_10 = { class: "col-sm-4 col-md-2" };
var _hoisted_11 = ["disabled"];
var _hoisted_12 = { class: "col-md-6 col-xl-3" };
var _hoisted_13 = { class: "dash-card" };
var _hoisted_14 = { class: "col-md-6 col-xl-3" };
var _hoisted_15 = { class: "dash-card" };
var _hoisted_16 = { class: "col-md-6 col-xl-3" };
var _hoisted_17 = { class: "dash-card" };
var _hoisted_18 = { class: "col-md-6 col-xl-3" };
var _hoisted_19 = { class: "dash-card" };
var _hoisted_20 = { class: "row layout-top-spacing g-3" };
var _hoisted_21 = { class: "col-xl-8" };
var _hoisted_22 = { class: "panel br-6 p-3" };
var _hoisted_23 = { class: "col-xl-4" };
var _hoisted_24 = { class: "panel br-6 p-3 mb-3" };
var _hoisted_25 = { class: "list-group list-group-flush" };
var _hoisted_26 = {
	key: 0,
	class: "list-group-item px-0 text-muted"
};
var _hoisted_27 = { class: "row layout-top-spacing g-3" };
var _hoisted_28 = { class: "col-12" };
var _hoisted_29 = { class: "sale-horizontal-grid" };
var _hoisted_30 = { class: "panel br-6 p-3" };
var _hoisted_31 = { class: "list-group list-group-flush" };
var _hoisted_32 = { class: "rank-label-wrap" };
var _hoisted_33 = {
	key: 0,
	class: "list-group-item px-0 text-muted"
};
var _hoisted_34 = { class: "panel br-6 p-3" };
var _hoisted_35 = { class: "list-group list-group-flush" };
var _hoisted_36 = { class: "rank-label-wrap" };
var _hoisted_37 = {
	key: 0,
	class: "list-group-item px-0 text-muted"
};
var _hoisted_38 = { class: "row layout-top-spacing" };
var _hoisted_39 = { class: "col-12" };
var _hoisted_40 = { class: "panel br-6 p-3" };
var _hoisted_41 = { class: "table-responsive" };
var _hoisted_42 = { class: "table table-hover table-bordered" };
var _hoisted_43 = ["onClick"];
var _hoisted_44 = { class: "text-end" };
var _hoisted_45 = { key: 0 };
var index2_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "index2",
	setup(__props) {
		useMeta({ title: "Dashboard Home" });
		const store = useStore();
		const router = useRouter();
		const sorting = ref({
			startDate: hooks().subtract(30, "d").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const activePreset = ref("30days");
		const dateConfig = { dateFormat: "d-m-Y" };
		const loading = ref(false);
		const salesRows = ref([]);
		const purchaseRows = ref([]);
		const mostSaleBarang = ref([]);
		const mostSaleJasa = ref([]);
		const totalPenjualan = computed(() => salesRows.value.reduce((sum, item) => sum + Number(item.totalPenjualan || 0), 0));
		const totalPembelian = computed(() => purchaseRows.value.reduce((sum, item) => sum + Number(item.total || 0), 0));
		const latestPenjualan = computed(() => {
			return [...salesRows.value].sort((a, b) => new Date(b.tglPenjualan) - new Date(a.tglPenjualan)).slice(0, 10);
		});
		const mostPelanggan = computed(() => {
			const map = /* @__PURE__ */ new Map();
			salesRows.value.forEach((row) => {
				const key = row.nmPelanggan || "Unknown";
				map.set(key, (map.get(key) || 0) + Number(row.totalPenjualan || 0));
			});
			return [...map.entries()].map(([name, total]) => ({
				name,
				total
			})).sort((a, b) => b.total - a.total).slice(0, 5);
		});
		const aggregateByDate = (rows, dateKey, valueKey) => {
			const map = /* @__PURE__ */ new Map();
			rows.forEach((row) => {
				const date = row?.[dateKey];
				const key = date ? hooks(date).format("YYYY-MM-DD") : null;
				if (!key || key === "Invalid date") return;
				map.set(key, (map.get(key) || 0) + Number(row?.[valueKey] || 0));
			});
			return map;
		};
		const salesByDate = computed(() => aggregateByDate(salesRows.value, "tglPenjualan", "totalPenjualan"));
		const purchaseByDate = computed(() => aggregateByDate(purchaseRows.value, "tglPembelian", "total"));
		const chartDateKeys = computed(() => {
			return [.../* @__PURE__ */ new Set([...salesByDate.value.keys(), ...purchaseByDate.value.keys()])].sort((a, b) => new Date(a) - new Date(b));
		});
		const salesChartSeries = computed(() => [
			{
				name: "Pembelian",
				type: "column",
				data: chartDateKeys.value.map((key) => Number(purchaseByDate.value.get(key) || 0))
			},
			{
				name: "Penjualan",
				type: "area",
				data: chartDateKeys.value.map((key) => Number(salesByDate.value.get(key) || 0))
			},
			{
				name: "Profit Estimasi",
				type: "line",
				data: chartDateKeys.value.map((key) => Number(salesByDate.value.get(key) || 0) - Number(purchaseByDate.value.get(key) || 0))
			}
		]);
		const salesChartOptions = computed(() => ({
			chart: {
				toolbar: { show: false },
				zoom: { enabled: false },
				fontFamily: "Nunito, sans-serif"
			},
			plotOptions: { bar: {
				borderRadius: 6,
				columnWidth: "45%"
			} },
			stroke: {
				curve: "smooth",
				width: [
					0,
					4,
					3
				]
			},
			fill: {
				type: [
					"solid",
					"gradient",
					"solid"
				],
				gradient: {
					shadeIntensity: 1,
					opacityFrom: .65,
					opacityTo: .15,
					stops: [
						0,
						90,
						100
					]
				}
			},
			markers: {
				size: [
					0,
					4,
					4
				],
				strokeWidth: 0,
				hover: { size: 6 }
			},
			dataLabels: { enabled: false },
			xaxis: {
				categories: chartDateKeys.value.map((key) => hooks(key).format("DD MMM")),
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			yaxis: { labels: { formatter: (v) => formatNumber(v) } },
			colors: [
				"#f59e0b",
				"#0ea5e9",
				"#22c55e"
			],
			legend: {
				position: "top",
				horizontalAlign: "left",
				fontSize: "13px",
				labels: { colors: "#334155" }
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: { formatter: (value) => formatNumber(value) }
			},
			grid: {
				borderColor: "#e2e8f0",
				strokeDashArray: 4
			}
		}));
		const formatNumber = (value) => Number(value || 0).toLocaleString();
		const formatDate = (value) => value ? hooks(value).format("DD-MM-YYYY") : "-";
		const applyPreset = async (preset) => {
			activePreset.value = preset;
			if (preset === "today") {
				sorting.value.startDate = hooks().format("D-M-YYYY");
				sorting.value.endDate = hooks().format("D-M-YYYY");
			} else if (preset === "7days") {
				sorting.value.startDate = hooks().subtract(7, "d").format("D-M-YYYY");
				sorting.value.endDate = hooks().format("D-M-YYYY");
			} else {
				sorting.value.startDate = hooks().subtract(30, "d").format("D-M-YYYY");
				sorting.value.endDate = hooks().format("D-M-YYYY");
			}
			await loadDashboard();
		};
		const loadMostSaleBarang = async () => {
			try {
				const rows = (await axios.post("/api/most-sale-barang", {
					startDate: sorting.value.startDate,
					endDate: sorting.value.endDate,
					limit: 5
				}))?.data?.data || [];
				mostSaleBarang.value = rows.map((row) => ({
					name: row.nmBarang || row.kdBarang || "Unknown",
					qty: Number(row.totalQty || 0)
				}));
			} catch (error) {
				mostSaleBarang.value = [];
				console.log("load most sale barang error", error);
			}
		};
		const loadMostSaleJasa = async () => {
			try {
				const rows = (await axios.post("/api/most-sale-jasa", {
					startDate: sorting.value.startDate,
					endDate: sorting.value.endDate,
					limit: 5
				}))?.data?.data || [];
				mostSaleJasa.value = rows.map((row) => ({
					name: row.nmJasa || row.kdJasa || "Unknown",
					qty: Number(row.totalQty || 0)
				}));
			} catch (error) {
				mostSaleJasa.value = [];
				console.log("load most sale jasa error", error);
			}
		};
		const loadDashboard = async () => {
			loading.value = true;
			try {
				await Promise.all([store.dispatch("GetLaporanBarang", sorting.value), store.dispatch("GetLaporanPembelian", sorting.value)]);
				salesRows.value = store.getters.SlaporanBarang || [];
				purchaseRows.value = store.getters.SlaporanPembelian || [];
				await Promise.all([loadMostSaleBarang(), loadMostSaleJasa()]);
			} finally {
				loading.value = false;
			}
		};
		const viewNota = (id) => {
			store.commit("setIdnota", id);
			const user = store.state.auth.user;
			const query = {
				startDate: sorting.value.startDate,
				endDate: sorting.value.endDate
			};
			if (user === "root") router.push({
				name: "invoice-penjualan-max",
				query
			});
			else router.push({
				name: "invoice-penjualan",
				query
			});
		};
		onMounted(async () => {
			await loadDashboard();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[5] || (_cache[5] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
					class: "breadcrumb-one",
					"aria-label": "breadcrumb"
				}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Dashboard")]), createBaseVNode("li", {
					class: "breadcrumb-item active",
					"aria-current": "page"
				}, [createBaseVNode("span", null, "Home")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
						createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [
							createBaseVNode("button", {
								class: normalizeClass(["btn btn-outline-secondary btn-sm", { active: activePreset.value === "today" }]),
								type: "button",
								onClick: _cache[0] || (_cache[0] = ($event) => applyPreset("today"))
							}, " Today ", 2),
							createBaseVNode("button", {
								class: normalizeClass(["btn btn-outline-secondary btn-sm", { active: activePreset.value === "7days" }]),
								type: "button",
								onClick: _cache[1] || (_cache[1] = ($event) => applyPreset("7days"))
							}, " 7 Hari ", 2),
							createBaseVNode("button", {
								class: normalizeClass(["btn btn-outline-secondary btn-sm", { active: activePreset.value === "30days" }]),
								type: "button",
								onClick: _cache[2] || (_cache[2] = ($event) => applyPreset("30days"))
							}, " 30 Hari ", 2)
						])]),
						createBaseVNode("div", _hoisted_8, [_cache[6] || (_cache[6] = createBaseVNode("label", { class: "form-label form-label-sm" }, "Start Date", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.startDate,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sorting.value.startDate = $event),
							config: dateConfig,
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"])]),
						createBaseVNode("div", _hoisted_9, [_cache[7] || (_cache[7] = createBaseVNode("label", { class: "form-label form-label-sm" }, "End Date", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.endDate,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sorting.value.endDate = $event),
							config: dateConfig,
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"])]),
						createBaseVNode("div", _hoisted_10, [createBaseVNode("button", {
							class: "btn btn-primary btn-sm w-100",
							disabled: loading.value,
							onClick: loadDashboard
						}, toDisplayString(loading.value ? "Loading..." : "Refresh"), 9, _hoisted_11)])
					])])]),
					createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [
						_cache[8] || (_cache[8] = createBaseVNode("p", { class: "dash-label" }, "Total Penjualan", -1)),
						createBaseVNode("h4", null, toDisplayString(formatNumber(totalPenjualan.value)), 1),
						createBaseVNode("small", null, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1)
					])]),
					createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [
						_cache[9] || (_cache[9] = createBaseVNode("p", { class: "dash-label" }, "Total Pembelian", -1)),
						createBaseVNode("h4", null, toDisplayString(formatNumber(totalPembelian.value)), 1),
						createBaseVNode("small", null, "Periode " + toDisplayString(sorting.value.startDate) + " s/d " + toDisplayString(sorting.value.endDate), 1)
					])]),
					createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [
						_cache[10] || (_cache[10] = createBaseVNode("p", { class: "dash-label" }, "Jumlah Transaksi Jual", -1)),
						createBaseVNode("h4", null, toDisplayString(salesRows.value.length), 1),
						_cache[11] || (_cache[11] = createBaseVNode("small", null, "Invoice penjualan dalam periode", -1))
					])]),
					createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [
						_cache[12] || (_cache[12] = createBaseVNode("p", { class: "dash-label" }, "Jumlah Transaksi Beli", -1)),
						createBaseVNode("h4", null, toDisplayString(purchaseRows.value.length), 1),
						_cache[13] || (_cache[13] = createBaseVNode("small", null, "Invoice pembelian dalam periode", -1))
					])])
				]),
				createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "d-flex justify-content-between align-items-center mb-2" }, [createBaseVNode("h5", { class: "mb-0" }, "Grafik Penjualan vs Pembelian")], -1)), salesChartOptions.value ? (openBlock(), createBlock(unref(import_vue3_apexcharts_common.default), {
					key: 0,
					height: "320",
					type: "line",
					options: salesChartOptions.value,
					series: salesChartSeries.value
				}, null, 8, ["options", "series"])) : createCommentVNode("", true)])]), createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [_cache[15] || (_cache[15] = createBaseVNode("h5", { class: "mb-2" }, "Most Pelanggan", -1)), createBaseVNode("ul", _hoisted_25, [(openBlock(true), createElementBlock(Fragment, null, renderList(mostPelanggan.value, (item, idx) => {
					return openBlock(), createElementBlock("li", {
						key: `${item.name}-${idx}`,
						class: "list-group-item px-0 d-flex justify-content-between"
					}, [createBaseVNode("span", null, toDisplayString(item.name), 1), createBaseVNode("strong", null, toDisplayString(formatNumber(item.total)), 1)]);
				}), 128)), mostPelanggan.value.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_26, "Belum ada data.")) : createCommentVNode("", true)])])])]),
				createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [_cache[16] || (_cache[16] = createBaseVNode("h5", { class: "mb-2" }, "Most Sale Barang", -1)), createBaseVNode("ul", _hoisted_31, [(openBlock(true), createElementBlock(Fragment, null, renderList(mostSaleBarang.value, (item, idx) => {
					return openBlock(), createElementBlock("li", {
						key: `${item.name}-${idx}`,
						class: "list-group-item px-0 d-flex justify-content-between"
					}, [createBaseVNode("span", _hoisted_32, [createBaseVNode("span", { class: normalizeClass(["rank-badge", `rank-${idx + 1}`]) }, "#" + toDisplayString(idx + 1), 3), createBaseVNode("span", null, toDisplayString(item.name), 1)]), createBaseVNode("strong", null, toDisplayString(formatNumber(item.qty)), 1)]);
				}), 128)), mostSaleBarang.value.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_33, "Belum ada detail barang.")) : createCommentVNode("", true)])]), createBaseVNode("div", _hoisted_34, [_cache[17] || (_cache[17] = createBaseVNode("h5", { class: "mb-2" }, "Most Sale Jasa", -1)), createBaseVNode("ul", _hoisted_35, [(openBlock(true), createElementBlock(Fragment, null, renderList(mostSaleJasa.value, (item, idx) => {
					return openBlock(), createElementBlock("li", {
						key: `${item.name}-${idx}`,
						class: "list-group-item px-0 d-flex justify-content-between"
					}, [createBaseVNode("span", _hoisted_36, [createBaseVNode("span", { class: normalizeClass(["rank-badge", `rank-${idx + 1}`]) }, "#" + toDisplayString(idx + 1), 3), createBaseVNode("span", null, toDisplayString(item.name), 1)]), createBaseVNode("strong", null, toDisplayString(formatNumber(item.qty)), 1)]);
				}), 128)), mostSaleJasa.value.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_37, "Belum ada detail jasa.")) : createCommentVNode("", true)])])])])]),
				createBaseVNode("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, [createBaseVNode("div", _hoisted_40, [_cache[20] || (_cache[20] = createBaseVNode("h5", { class: "mb-3" }, "Latest Penjualan", -1)), createBaseVNode("div", _hoisted_41, [createBaseVNode("table", _hoisted_42, [_cache[19] || (_cache[19] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "No Penjualan"),
					createBaseVNode("th", null, "Tanggal"),
					createBaseVNode("th", null, "Pelanggan"),
					createBaseVNode("th", { class: "text-end" }, "Total")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(latestPenjualan.value, (row) => {
					return openBlock(), createElementBlock("tr", { key: row.noPenjualan }, [
						createBaseVNode("td", null, [createBaseVNode("a", {
							href: "javascript:void(0);",
							onClick: ($event) => viewNota(row.noPenjualan)
						}, toDisplayString(row.noPenjualan), 9, _hoisted_43)]),
						createBaseVNode("td", null, toDisplayString(formatDate(row.tglPenjualan)), 1),
						createBaseVNode("td", null, toDisplayString(row.nmPelanggan), 1),
						createBaseVNode("td", _hoisted_44, toDisplayString(formatNumber(row.totalPenjualan)), 1)
					]);
				}), 128)), latestPenjualan.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_45, _cache[18] || (_cache[18] = [createBaseVNode("td", {
					colspan: "4",
					class: "text-center text-muted"
				}, "Belum ada data penjualan.", -1)]))) : createCommentVNode("", true)])])])])])])
			]);
		};
	}
}, [["__scopeId", "data-v-ae684388"]]);
//#endregion
export { index2_default as default };
