import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, K as resolveComponent, L as onMounted, Nt as toDisplayString, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, u as vModelSelect, v as computed, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { s as useStore } from "../../assets/main-Gq4nI006.js";
import { t as hooks } from "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-SaksLtP8.js";
//#region resources/js/src/views/laporan/sewaInventaris.vue
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row layout-top-spacing" };
var _hoisted_3 = { class: "col-12 layout-spacing" };
var _hoisted_4 = { class: "panel br-6" };
var _hoisted_5 = { class: "custom-table panel-body p-0" };
var _hoisted_6 = { class: "panel-body" };
var _hoisted_7 = { class: "row" };
var _hoisted_8 = { class: "col-md-8" };
var _hoisted_9 = { class: "input-group mb-4" };
var _hoisted_10 = ["disabled"];
var _hoisted_11 = { class: "px-3 pb-3 row g-2" };
var _hoisted_12 = { class: "col-md-4" };
var _hoisted_13 = { class: "alert alert-info mb-0" };
var _hoisted_14 = { class: "col-md-4" };
var _hoisted_15 = { class: "alert alert-warning mb-0" };
var _hoisted_16 = { class: "col-md-4" };
var _hoisted_17 = { class: "alert alert-success mb-0" };
var _hoisted_18 = ["onClick"];
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
	class: "modal fade",
	id: "modalSewaLaporan",
	tabindex: "-1",
	"aria-hidden": "true"
};
var _hoisted_21 = { class: "modal-dialog modal-dialog-centered modal-lg" };
var _hoisted_22 = { class: "modal-content" };
var _hoisted_23 = { class: "modal-header" };
var _hoisted_24 = { class: "modal-title" };
var _hoisted_25 = { class: "modal-body" };
var _hoisted_26 = { class: "row g-2" };
var _hoisted_27 = { class: "col-md-6" };
var _hoisted_28 = { class: "col-md-6" };
var _hoisted_29 = ["value"];
var _hoisted_30 = { class: "col-md-6" };
var _hoisted_31 = { class: "col-md-6" };
var _hoisted_32 = { class: "col-md-6" };
var _hoisted_33 = { class: "col-md-6" };
var _hoisted_34 = { class: "col-12" };
var _hoisted_35 = { class: "modal-footer" };
var _hoisted_36 = ["disabled"];
var _sfc_main = {
	__name: "sewaInventaris",
	setup(__props) {
		useMeta({ title: "Laporan Sewa Inventaris" });
		const store = useStore();
		const loading = ref(false);
		const saving = ref(false);
		const items = ref([]);
		const inventarisList = ref([]);
		const form = ref({});
		const columns = ref([
			"sewa_sysno",
			"tgl_sewa",
			"nama_inventaris",
			"jumlah_sewa",
			"periode_sewa",
			"jumlah_penyusutan",
			"keterangan",
			"action"
		]);
		const sorting = ref({
			startDate: hooks().startOf("month").format("D-M-YYYY"),
			endDate: hooks().format("D-M-YYYY")
		});
		const tableOption = ref({
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
				"sewa_sysno",
				"tgl_sewa",
				"nama_inventaris"
			],
			resizableColumns: true
		});
		const format = (value) => Number(value || 0).toLocaleString();
		const totalPendapatan = computed(() => items.value.reduce((sum, row) => sum + Number(row.jumlah_sewa || 0), 0));
		const totalPenyusutan = computed(() => items.value.reduce((sum, row) => sum + Number(row.jumlah_penyusutan || 0), 0));
		const loadData = async () => {
			loading.value = true;
			try {
				await store.dispatch("GetLaporanSewaInventaris", sorting.value);
				items.value = store.getters.StateLaporanSewaInventaris || [];
			} finally {
				loading.value = false;
			}
		};
		const loadInventaris = async () => {
			await store.dispatch("GetInventaris");
			setTimeout(() => {
				const state = store.getters.StateInventaris || [];
				inventarisList.value = (state[0] || []).filter((item) => item.is_disewakan);
			}, 300);
		};
		const blankForm = () => ({
			id_sewa: "",
			tglSewa: hooks().format("YYYY-MM-DD"),
			kode_inventaris: "",
			jumlah_sewa: 0,
			periode_sewa: 1,
			acc_pendapatan_sewa: "",
			acc_kas: "11110",
			keterangan: "Pendapatan Sewa Inventaris"
		});
		const showModal = () => window.bootstrap.Modal.getOrCreateInstance(document.getElementById("modalSewaLaporan")).show();
		const hideModal = () => window.bootstrap.Modal.getInstance(document.getElementById("modalSewaLaporan"))?.hide();
		const openCreate = () => {
			form.value = blankForm();
			showModal();
		};
		const openEdit = (row) => {
			form.value = {
				id_sewa: row.id_sewa,
				tglSewa: hooks(row.tgl_sewa).format("YYYY-MM-DD"),
				kode_inventaris: row.rkode_inventaris,
				jumlah_sewa: row.jumlah_sewa,
				periode_sewa: row.periode_sewa || 1,
				acc_pendapatan_sewa: row.acc_pendapatan_sewa || "",
				acc_kas: row.acc_kas || "11110",
				keterangan: row.keterangan || "Pendapatan Sewa Inventaris"
			};
			showModal();
		};
		const selectAsset = () => {
			const asset = inventarisList.value.find((item) => item.kode_inventaris === form.value.kode_inventaris);
			if (!asset) return;
			form.value.jumlah_sewa = asset.harga_sewa || 0;
			form.value.acc_pendapatan_sewa = asset.acc_pendapatan_sewa || "";
		};
		const saveRow = async () => {
			saving.value = true;
			try {
				if (form.value.id_sewa) await store.dispatch("UpdateTransaksiSewaInventaris", form.value);
				else {
					const noSewa = store.getters.NoSewa || "";
					await store.dispatch("CreateSewaInventaris", {
						...form.value,
						noSewa
					});
				}
				hideModal();
				await loadData();
			} catch (error) {
				window.Swal?.fire({
					icon: "error",
					title: error.response?.data?.message || "Gagal menyimpan transaksi"
				});
			} finally {
				saving.value = false;
			}
		};
		const deleteRow = async (row) => {
			if (!(await window.Swal.fire({
				title: "Hapus transaksi?",
				text: "Nilai buku dan jurnal penyusutan akan dikembalikan.",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Hapus",
				cancelButtonText: "Batal"
			})).isConfirmed) return;
			try {
				await store.dispatch("DeleteTransaksiSewaInventaris", { id_sewa: row.id_sewa });
				await loadData();
			} catch (error) {
				window.Swal?.fire({
					icon: "error",
					title: error.response?.data?.message || "Gagal menghapus transaksi"
				});
			}
		};
		const printReport = () => window.print();
		onMounted(async () => {
			await store.dispatch("GetNoSewa");
			await loadInventaris();
			await loadData();
		});
		return (_ctx, _cache) => {
			const _component_v_client_table = resolveComponent("v-client-table");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[9] || (_cache[9] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
					class: "breadcrumb-one",
					"aria-label": "breadcrumb"
				}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Laporan")]), createBaseVNode("li", {
					class: "breadcrumb-item active",
					"aria-current": "page"
				}, [createBaseVNode("span", null, "Sewa Inventaris")])])])])])], -1))])),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
					createBaseVNode("div", { class: "d-flex flex-wrap align-items-center px-3 pt-3 pb-0" }, [_cache[10] || (_cache[10] = createBaseVNode("h5", { class: "mb-2" }, "Laporan Sewa Inventaris", -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary btn-sm ms-3 mb-2",
						onClick: openCreate
					}, "Tambah")]),
					createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [
						createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.startDate,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sorting.value.startDate = $event),
							config: { dateFormat: "d-m-Y" },
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"]),
						createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: sorting.value.endDate,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sorting.value.endDate = $event),
							config: { dateFormat: "d-m-Y" },
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"]),
						createBaseVNode("button", {
							type: "button",
							class: "btn btn-primary btn-sm",
							onClick: loadData,
							disabled: loading.value
						}, toDisplayString(loading.value ? "Memuat..." : "Cari"), 9, _hoisted_10),
						createBaseVNode("button", {
							type: "button",
							class: "btn btn-outline-secondary btn-sm ms-1",
							onClick: printReport
						}, "Print")
					])])])]),
					createBaseVNode("div", _hoisted_11, [
						createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [_cache[11] || (_cache[11] = createTextVNode("Total Pendapatan: ")), createBaseVNode("strong", null, toDisplayString(format(totalPendapatan.value)), 1)])]),
						createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [_cache[12] || (_cache[12] = createTextVNode("Total Penyusutan: ")), createBaseVNode("strong", null, toDisplayString(format(totalPenyusutan.value)), 1)])]),
						createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, [_cache[13] || (_cache[13] = createTextVNode("Pendapatan Bersih: ")), createBaseVNode("strong", null, toDisplayString(format(totalPendapatan.value - totalPenyusutan.value)), 1)])])
					]),
					createVNode(_component_v_client_table, {
						data: items.value,
						columns: columns.value,
						options: tableOption.value
					}, {
						tgl_sewa: withCtx((props) => [createTextVNode(toDisplayString(unref(hooks)(props.row.tgl_sewa).format("D-M-YYYY")), 1)]),
						jumlah_sewa: withCtx((props) => [createTextVNode(toDisplayString(format(props.row.jumlah_sewa)), 1)]),
						jumlah_penyusutan: withCtx((props) => [createTextVNode(toDisplayString(format(props.row.jumlah_penyusutan)), 1)]),
						action: withCtx((props) => [createBaseVNode("button", {
							type: "button",
							class: "btn btn-link btn-sm text-primary p-1",
							title: "Edit",
							onClick: ($event) => openEdit(props.row)
						}, _cache[14] || (_cache[14] = [createBaseVNode("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"aria-hidden": "true"
						}, [createBaseVNode("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })], -1)]), 8, _hoisted_18), createBaseVNode("button", {
							type: "button",
							class: "btn btn-link btn-sm text-danger p-1",
							title: "Hapus",
							onClick: ($event) => deleteRow(props.row)
						}, _cache[15] || (_cache[15] = [createBaseVNode("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"aria-hidden": "true"
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
						], -1)]), 8, _hoisted_19)]),
						_: 1
					}, 8, [
						"data",
						"columns",
						"options"
					])
				])])])]),
				createBaseVNode("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [
					createBaseVNode("div", _hoisted_23, [createBaseVNode("h5", _hoisted_24, toDisplayString(form.value.id_sewa ? "Edit Transaksi Sewa" : "Tambah Transaksi Sewa"), 1), _cache[16] || (_cache[16] = createBaseVNode("button", {
						type: "button",
						class: "btn-close",
						"data-bs-dismiss": "modal"
					}, null, -1))]),
					createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, [
						createBaseVNode("div", _hoisted_27, [_cache[17] || (_cache[17] = createBaseVNode("label", { class: "form-label" }, "Tanggal", -1)), createVNode(unref(import_vue_flatpickr_min.default), {
							modelValue: form.value.tglSewa,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.tglSewa = $event),
							config: { dateFormat: "Y-m-d" },
							class: "form-control form-control-sm"
						}, null, 8, ["modelValue"])]),
						createBaseVNode("div", _hoisted_28, [_cache[19] || (_cache[19] = createBaseVNode("label", { class: "form-label" }, "Inventaris", -1)), withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.kode_inventaris = $event),
							onChange: selectAsset,
							class: "form-select form-select-sm"
						}, [_cache[18] || (_cache[18] = createBaseVNode("option", { value: "" }, "Pilih inventaris", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(inventarisList.value, (item) => {
							return openBlock(), createElementBlock("option", {
								key: item.kode_inventaris,
								value: item.kode_inventaris
							}, toDisplayString(item.nama_inventaris), 9, _hoisted_29);
						}), 128))], 544), [[vModelSelect, form.value.kode_inventaris]])]),
						createBaseVNode("div", _hoisted_30, [_cache[20] || (_cache[20] = createBaseVNode("label", { class: "form-label" }, "Jumlah Sewa", -1)), withDirectives(createBaseVNode("input", {
							type: "number",
							min: "1",
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.jumlah_sewa = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, form.value.jumlah_sewa]])]),
						createBaseVNode("div", _hoisted_31, [_cache[21] || (_cache[21] = createBaseVNode("label", { class: "form-label" }, "Periode Sewa (Bulan)", -1)), withDirectives(createBaseVNode("input", {
							type: "number",
							min: "1",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.periode_sewa = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, form.value.periode_sewa]])]),
						createBaseVNode("div", _hoisted_32, [_cache[22] || (_cache[22] = createBaseVNode("label", { class: "form-label" }, "Akun Pendapatan", -1)), withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.acc_pendapatan_sewa = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, form.value.acc_pendapatan_sewa]])]),
						createBaseVNode("div", _hoisted_33, [_cache[23] || (_cache[23] = createBaseVNode("label", { class: "form-label" }, "Akun Kas", -1)), withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.acc_kas = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, form.value.acc_kas]])]),
						createBaseVNode("div", _hoisted_34, [_cache[24] || (_cache[24] = createBaseVNode("label", { class: "form-label" }, "Keterangan", -1)), withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.keterangan = $event),
							class: "form-control form-control-sm"
						}, null, 512), [[vModelText, form.value.keterangan]])])
					])]),
					createBaseVNode("div", _hoisted_35, [_cache[25] || (_cache[25] = createBaseVNode("button", {
						type: "button",
						class: "btn btn-secondary",
						"data-bs-dismiss": "modal"
					}, "Batal", -1)), createBaseVNode("button", {
						type: "button",
						class: "btn btn-primary",
						onClick: saveRow,
						disabled: saving.value
					}, toDisplayString(saving.value ? "Menyimpan..." : "Simpan"), 9, _hoisted_36)])
				])])])
			]);
		};
	}
};
//#endregion
export { _sfc_main as default };
