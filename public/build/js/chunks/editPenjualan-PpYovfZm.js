import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { E as createVNode, F as onBeforeMount, L as onMounted, Mt as toDisplayString, R as onUnmounted, S as createElementBlock, T as createTextVNode, U as renderList, X as withCtx, Z as withDirectives, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, et as init_reactivity_esm_bundler, f as vShow, g as Teleport, h as Fragment, j as init_runtime_core_esm_bundler, mt as init_shared_esm_bundler, ot as unref, p as withKeys, rt as ref, t as useMeta, u as vModelSelect, v as computed, w as createStaticVNode, x as createCommentVNode, y as createBaseVNode, z as openBlock } from "./use-meta-Cs_oC8eH.js";
import { a as useRoute, c as _plugin_vue_export_helper_default, o as useRouter, s as useStore } from "../../assets/main-C-Jy3aFl.js";
import { t as D } from "./usemodal-vue3-CTQprEhe.js";
import "./moment-DHGdmE-4.js";
import { t as require_vue_flatpickr_min } from "./custom-flatpickr-5wp3Xs9y.js";
/* empty css                     */
import { t as require_vue3_multiselect_umd_min } from "./vue3-multiselect-BaVcFZ_-.js";
//#region resources/js/src/views/transaksi/editPenjualan.vue?vue&type=style&index=0&scoped=7f3a9328&lang.css
var import_vue_flatpickr_min = /* @__PURE__ */ __toESM(require_vue_flatpickr_min());
var import_vue3_multiselect_umd_min = /* @__PURE__ */ __toESM(require_vue3_multiselect_umd_min());
//#endregion
//#region resources/js/src/views/transaksi/editPenjualan.vue
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing apps-invoice-add" };
var _hoisted_2 = { class: "row invoice layout-top-spacing layout-spacing" };
var _hoisted_3 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_4 = { class: "doc-container" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-12" };
var _hoisted_7 = { class: "invoice-content" };
var _hoisted_8 = { class: "invoice-detail-body" };
var _hoisted_9 = { class: "invoice-detail-header txn-block" };
var _hoisted_10 = { class: "row justify-content-between" };
var _hoisted_11 = { class: "col-xl-5 invoice-address-company" };
var _hoisted_12 = { class: "invoice-address-company-fields" };
var _hoisted_13 = { class: "form-group row" };
var _hoisted_14 = { class: "col-sm-9" };
var _hoisted_15 = { class: "form-group row" };
var _hoisted_16 = { class: "col-sm-9" };
var _hoisted_17 = { class: "form-group row" };
var _hoisted_18 = { class: "col-sm-9" };
var _hoisted_19 = ["value"];
var _hoisted_20 = { class: "form-group row" };
var _hoisted_21 = { class: "col-sm-9" };
var _hoisted_22 = { class: "col-xl-5 invoice-address-client" };
var _hoisted_23 = { class: "invoice-address-client-fields" };
var _hoisted_24 = { class: "form-group row" };
var _hoisted_25 = { class: "col-sm-9" };
var _hoisted_26 = { class: "form-group row" };
var _hoisted_27 = { class: "col-sm-9" };
var _hoisted_28 = { class: "form-group row" };
var _hoisted_29 = { class: "col-sm-9" };
var _hoisted_30 = { class: "invoice-detail-items txn-block" };
var _hoisted_31 = {
	class: "nav nav-tabs mb-3 mt-3",
	id: "simpletab",
	role: "tablist"
};
var _hoisted_32 = {
	key: 0,
	class: "nav-item"
};
var _hoisted_33 = {
	class: "tab-content",
	id: "simpletabContent"
};
var _hoisted_34 = {
	class: "tab-pane fade show active",
	id: "home",
	role: "tabpanel",
	"aria-labelledby": "home-tab"
};
var _hoisted_35 = { class: "invoice-detail-items txn-entry-area" };
var _hoisted_36 = { class: "row g-2 align-items-end txn-entry-row txn-mobile-stack" };
var _hoisted_37 = { class: "form-group col-xs-2" };
var _hoisted_38 = { class: "form-group col-md-3" };
var _hoisted_39 = { class: "form-group col-md-2" };
var _hoisted_40 = { class: "form-group col-md-1" };
var _hoisted_41 = { class: "form-group col-md-1" };
var _hoisted_42 = { class: "form-group col-md-2" };
var _hoisted_43 = { class: "form-group col-md-2" };
var _hoisted_44 = { class: "form-group col-sm-1 d-grid" };
var _hoisted_45 = {
	class: "tab-pane fade",
	id: "profile",
	role: "tabpanel",
	"aria-labelledby": "profile-tab"
};
var _hoisted_46 = { class: "invoice-detail-items txn-entry-area" };
var _hoisted_47 = { class: "row g-2 align-items-end txn-entry-row txn-mobile-stack" };
var _hoisted_48 = { class: "form-group col-md-4" };
var _hoisted_49 = { class: "form-group col-md-2" };
var _hoisted_50 = { class: "form-group col-md-1" };
var _hoisted_51 = { class: "form-group col-md-2" };
var _hoisted_52 = { class: "form-group col-md-1 d-grid" };
var _hoisted_53 = { class: "row mt-1" };
var _hoisted_54 = { class: "form-group col-md-6" };
var _hoisted_55 = { class: "invoice-detail-items txn-block" };
var _hoisted_56 = { class: "inv--product-table-section" };
var _hoisted_57 = { class: "table-responsive txn-table-wrap" };
var _hoisted_58 = { class: "table table-hover table-bordered item-table" };
var _hoisted_59 = { class: "description" };
var _hoisted_60 = { class: "rate" };
var _hoisted_61 = { class: "description" };
var _hoisted_62 = ["onUpdate:modelValue", "onKeyup"];
var _hoisted_63 = { class: "qty" };
var _hoisted_64 = { class: "qty" };
var _hoisted_65 = { class: "amount" };
var _hoisted_66 = { class: "tax" };
var _hoisted_67 = ["onClick"];
var _hoisted_68 = {
	key: 0,
	class: "invoice-detail-items txn-block"
};
var _hoisted_69 = { class: "inv--product-table-section" };
var _hoisted_70 = { class: "table-responsive txn-table-wrap" };
var _hoisted_71 = { class: "table table-hover table-bordered item-table" };
var _hoisted_72 = { class: "description" };
var _hoisted_73 = { class: "description" };
var _hoisted_74 = { class: "inv-email-address" };
var _hoisted_75 = { class: "rate" };
var _hoisted_76 = { class: "qty" };
var _hoisted_77 = { class: "amount" };
var _hoisted_78 = { class: "tax" };
var _hoisted_79 = ["onClick"];
var _hoisted_80 = { class: "invoice-detail-total txn-block txn-summary-panel" };
var _hoisted_81 = { class: "row" };
var _hoisted_82 = { class: "col-md-6" };
var _hoisted_83 = { class: "invoice-actions-btn" };
var _hoisted_84 = { class: "invoice-action-btn" };
var _hoisted_85 = { class: "row" };
var _hoisted_86 = { class: "col-sm-4" };
var _hoisted_87 = { class: "col-md-6" };
var _hoisted_88 = { class: "totals-row" };
var _hoisted_89 = { class: "invoice-totals-row invoice-summary-subtotal" };
var _hoisted_90 = { class: "invoice-summary-value" };
var _hoisted_91 = { class: "subtotal-amount" };
var _hoisted_92 = { class: "amount" };
var _hoisted_93 = {
	key: 0,
	class: "invoice-totals-row invoice-summary-subtotal"
};
var _hoisted_94 = { class: "invoice-summary-value" };
var _hoisted_95 = { class: "subtotal-amount" };
var _hoisted_96 = { class: "amount" };
var _hoisted_97 = { class: "invoice-totals-row invoice-summary-tax" };
var _hoisted_98 = { class: "invoice-summary-value" };
var _hoisted_99 = { class: "tax-amount" };
var _hoisted_100 = { class: "invoice-totals-row invoice-summary-balance-due" };
var _hoisted_101 = { class: "invoice-summary-value" };
var _hoisted_102 = { class: "balance-due-amount" };
var _hoisted_103 = { class: "col-md-12 mb-3" };
var _hoisted_104 = { class: "table table-bordered table-sm" };
var _hoisted_105 = { key: 0 };
var _hoisted_106 = { class: "col-md-12" };
var _hoisted_107 = { class: "totals-row" };
var _hoisted_108 = { class: "invoice-totals-row" };
var _hoisted_109 = { style: { "font-size": "20px" } };
var _hoisted_110 = { key: 0 };
var _hoisted_111 = { key: 1 };
var _hoisted_112 = { class: "invoice-summary-value" };
var _hoisted_113 = { class: "balance-due-amount" };
var _hoisted_114 = { style: { "font-size": "30px" } };
var _hoisted_115 = {
	key: 0,
	class: "col-md-12"
};
var _hoisted_116 = { class: "totals-row" };
var _hoisted_117 = { class: "invoice-totals-row" };
var _hoisted_118 = { class: "invoice-summary-value" };
var _hoisted_119 = { class: "balance-due-amount" };
var _hoisted_120 = { class: "invoice-detail-note" };
var _hoisted_121 = { class: "row" };
var _hoisted_122 = { class: "col-md-12 align-self-center" };
var _hoisted_123 = { class: "form-group row invoice-note" };
var _hoisted_124 = { class: "col-sm-12" };
var editPenjualan_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "editPenjualan",
	setup(__props) {
		useMeta({ title: "Edit Penjualan" });
		const store = useStore();
		const router = useRouter();
		useRoute();
		const isVisible = ref(false);
		const barcode = ref("");
		const Inputqty = ref(null);
		const InputHarga = ref(null);
		const cartItemsPen = ref([]);
		const cartItemsPenJasa = ref([]);
		const subtotal = ref();
		const subtotaljasa = ref();
		const total = ref();
		const disc = ref(0);
		const tax = ref(0);
		const brg = ref({});
		const jsa = ref({});
		const qty = ref(1);
		const qtyjasa = ref(1);
		const tot = ref();
		const totjasa = ref();
		const divpajak = ref(false);
		const listPembayaran = ref([]);
		const params = ref({});
		const paramsbayar = ref({
			noBayar: null,
			tglBayar: params.value.jthTempo,
			jmlBayar: total,
			metodeBayar: "cash"
		});
		const paramspelanggan = ref({});
		const penjualan = computed(() => {
			const barangs = store.getters.StateBarang;
			const pelanggans = store.getters.StatePelanggan;
			const jasas = store.getters.StateJasa;
			const accs = store.getters.StateAcc;
			tot.value = brg.value.hrgJual * qty.value - brg.value.hrgJual * qty.value * disc.value / 100;
			totjasa.value = jsa.value.biayaJasa * qtyjasa.value;
			return {
				barangs,
				jasas,
				pelanggans,
				accs,
				tot,
				totjasa
			};
		});
		const moveToQty = () => {
			Inputqty.value?.focus();
		};
		const focusInput = () => {
			setTimeout(() => {
				InputHarga.value?.focus();
			}, 0);
		};
		const toast = window.Swal.mixin({
			toast: true,
			position: "top-center",
			showConfirmButton: false,
			timer: 3e3,
			padding: "2em"
		});
		const showToast = (icon, title) => {
			toast.fire({
				icon,
				title,
				padding: "2em"
			});
		};
		const showConfirm = async (text) => {
			return (await window.Swal.fire({
				title: "Konfirmasi",
				text,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Lanjut",
				cancelButtonText: "Batal",
				padding: "2em"
			})).isConfirmed;
		};
		const handleShortcut = (event) => {
			if (event.key === "F2") {
				event.preventDefault();
				openModal();
			}
		};
		onMounted(async () => {
			await store.dispatch("GetDetailPenjualan", params.value);
			const arr = store.getters.SdetailPenjualan;
			const brgArr = arr[1];
			for (let i = 0; i < brgArr.length; i++) {
				let totalasli = brgArr[i].qty * brgArr[i].hrgJual;
				let jmldiscp = brgArr[i].disc / totalasli * 100;
				cartItemsPen.value.push({
					kdBarang: brgArr[i].r_kdBarang,
					nmBarang: brgArr[i].r_nmBarang,
					hrgJual: brgArr[i].hrgJual,
					qty: brgArr[i].qty,
					satuan: brgArr[i].satuanJual,
					disc: jmldiscp,
					total: brgArr[i].totalJual,
					accid: brgArr[i].accid,
					accid_persediaan: brgArr[i].accid_persediaan,
					accid_hpp: brgArr[i].accid_hpp,
					totalhpp: brgArr[i].qty * brgArr[i].hrgPokok,
					kategori: brgArr[i].ktgBarang
				});
			}
			localStorage.setItem("cartItemsPen", JSON.stringify(cartItemsPen.value));
			const jsaArr = arr[2];
			for (let i = 0; i < jsaArr.length; i++) cartItemsPenJasa.value.push({
				kdJasa: jsaArr[i].r_kdJasa,
				nmJasa: jsaArr[i].r_nmJasa,
				biayaJasa: jsaArr[i].biayaJasa,
				qtyjasa: jsaArr[i].qtyJasa,
				total: jsaArr[i].totalJasa,
				note: jsaArr[i].noteJasa,
				accid: jsaArr[i].accid,
				accid_jasa: jsaArr[i].accid_jasa
			});
			localStorage.setItem("cartItemsPenJasa", JSON.stringify(cartItemsPenJasa.value));
			store.dispatch("GetBarang");
			store.dispatch("GetJasa");
			paramspelanggan.value.kdPelanggan = arr[0][0].kdPelanggan;
			paramspelanggan.value.nmPelanggan = arr[0][0].nmPelanggan;
			paramspelanggan.value.noHpPelanggan = arr[0][0].noHpPelanggan;
			paramspelanggan.value.almtPelanggan = arr[0][0].almtPelanggan;
			getPelanggan();
			getAcc();
			getSubtotal();
			getTotal();
			getBarang();
			document.addEventListener("keydown", handleShortcut);
			window.history.pushState(null, "", window.location.href);
			window.addEventListener("popstate", function(event) {
				window.history.pushState(null, "", window.location.href);
			});
		});
		onBeforeMount(() => {
			if (store.getters.SetEditNota[0] === void 0) router.push({ name: "penjualan-barang" });
			else params.value = {
				noNota: store.getters.SetEditNota[0].kd_trans,
				tglNota: store.getters.SetEditNota[0].startDate,
				term: store.getters.SetEditNota[0].term,
				jthTempo: store.getters.SetEditNota[0].jthTempo,
				notes: "",
				subtotal,
				subtotaljasa,
				tax,
				disc,
				total,
				termPenjualan: store.getters.SetEditNota[0].termPenjualan
			};
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", handleShortcut);
			localStorage.setItem("cartItemsPen", "[]");
			localStorage.setItem("cartItemsPenJasa", "[]");
		});
		const openModal = () => {
			getPembayaran();
			getNoPembayaran();
			console.log("Modal opened");
			isVisible.value = true;
		};
		const getNoPembayaran = async () => {
			await store.dispatch("GetNoBayarPenjualan").then(() => {
				paramsbayar.value.noBayar = store.getters.NoBayarPenjualan;
			});
		};
		const getPembayaran = async () => {
			await store.dispatch("GetListBayarPenjualan", { noJual: params.value.noNota });
			listPembayaran.value = store.getters.SlistBayarPenjualan;
		};
		const getPelanggan = () => {
			store.dispatch("GetPelanggan");
		};
		const getAcc = () => {
			store.dispatch("GetAcc");
		};
		const getTotal = () => {
			const pajak = store.state.pajak;
			subtotal.value;
			total.value = parseFloat(subtotal.value) + parseFloat(subtotaljasa.value);
			tax.value = subtotal.value * pajak / 100;
			console.log("total tanpa pajak :" + tax.value);
		};
		const getBarang = () => {
			store.dispatch("GetBarang");
			store.dispatch("GetJasa");
		};
		const simpanPenjualan = async () => {
			try {
				if (!cartItemsPen.value.length && !cartItemsPenJasa.value.length) {
					showToast("warning", "Detail transaksi kosong");
					return;
				}
				const header = { ...params.value };
				const headers = { ...paramspelanggan.value };
				const bayar = { ...paramsbayar.value };
				const detailjasa = cartItemsPenJasa.value;
				const detail = cartItemsPen.value;
				const edit = { editid: 1 };
				const headerfull = Object.assign(header, headers);
				await store.dispatch("CreatePenjualan", [
					headerfull,
					detail,
					detailjasa,
					bayar,
					edit
				]);
				total.value = 0;
				subtotal.value = 0;
				tax.value = 0;
				isVisible.value = false;
				showToast("success", "Penjualan berhasil diperbarui");
				router.push({ name: "penjualan-barang" });
				divpajak.value = false;
			} catch (error) {
				console.log("error: ", error);
				showToast("error", "Gagal memperbarui penjualan");
			}
		};
		function addToCart(brg) {
			store.dispatch("CheckBarangExist", { kdBarang: brg.kdBarang }).then(async (response) => {
				const brgasli = response.data.data;
				if (brgasli.stokPersediaan < qty.value) {
					if (!await showConfirm("Stok barang kurang")) return;
				} else {
					if (localStorage.getItem("cartItemsPen") === null) cartItemsPen.value = [];
					else cartItemsPen.value = JSON.parse(localStorage.getItem("cartItemsPen"));
					if ((JSON.parse(localStorage.getItem("cartItemsPen")) || []).find(({ kdBarang }) => kdBarang === brg.kdBarang)) {
						const objIndex = cartItemsPen.value.findIndex(((e) => e.kdBarang === brg.kdBarang));
						const oldName = cartItemsPen.value[objIndex].nmBarang;
						const oldQty = cartItemsPen.value[objIndex].qty;
						const oldTotal = cartItemsPen.value[objIndex].total;
						const oldTotalHpp = cartItemsPen.value[objIndex].totalhpp;
						const newQty = parseInt(oldQty) + parseInt(qty.value);
						if (newQty > brgasli.stokPersediaan) {
							window.Swal.mixin({
								toast: true,
								position: "top-center",
								showConfirmButton: false,
								timer: 3e3,
								padding: "2em"
							}).fire({
								icon: "error",
								title: "Quantity dijual melebihi stok persediaan",
								padding: "2em"
							});
							return;
						}
						const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.hrgJual);
						const newTotalHpp = parseInt(oldTotalHpp) + parseInt(qty.value * brg.hrgPokok);
						cartItemsPen.value[objIndex].qty = parseInt(newQty);
						cartItemsPen.value[objIndex].total = parseInt(newTotal);
						cartItemsPen.value[objIndex].totalhpp = parseInt(newTotalHpp);
						localStorage.setItem("cartItemsPen", JSON.stringify(cartItemsPen.value));
						window.Swal.mixin({
							toast: true,
							position: "top-center",
							showConfirmButton: false,
							timer: 3e3,
							padding: "2em"
						}).fire({
							icon: "success",
							title: oldName + " Quantity Update",
							padding: "2em"
						});
						getCart();
						getTotal();
						reset_form();
					} else {
						cartItemsPen.value.push({
							kdBarang: brg.kdBarang,
							nmBarang: brg.nmBarang,
							accid: brg.accid,
							accid_persediaan: brg.accid_persediaan,
							accid_hpp: brg.accid_hpp,
							hrgJual: brg.hrgJual,
							accid: brg.accid,
							accid_persediaan: brg.accid_persediaan,
							qty: qty.value,
							satuan: brg.satuanBarang,
							total: qty.value * brg.hrgJual - qty.value * brg.hrgJual * disc.value / 100,
							disc: disc.value,
							totalhpp: qty.value * brg.hrgPokok,
							kategori: brg.ktgBarang
						});
						localStorage.setItem("cartItemsPen", JSON.stringify(cartItemsPen.value));
						getCart();
						getTotal();
						reset_form();
						showToast("success", brg.nmBarang + " berhasil disimpan");
					}
				}
			});
		}
		function addToCartB(barcode) {
			store.dispatch("CheckBarangExist", { kdBarang: barcode }).then(async (response) => {
				const brg = response.data.data;
				if (brg.stokPersediaan < 1) {
					if (!await showConfirm("Stok barang kurang dari 1. Jika dilanjutkan akan mempengaruhi perhitungan laba rugi.")) return;
				} else window.Swal.mixin({
					toast: true,
					position: "top-center",
					showConfirmButton: false,
					timer: 3e3,
					padding: "2em"
				}).fire({
					icon: "success",
					title: " Stok barang mencukupi",
					padding: "2em"
				});
				if (localStorage.getItem("cartItemsPen") === null) cartItemsPen.value = [];
				else cartItemsPen.value = JSON.parse(localStorage.getItem("cartItemsPen"));
				if ((JSON.parse(localStorage.getItem("cartItemsPen")) || []).find(({ kdBarang }) => kdBarang === brg.kdBarang)) {
					const objIndex = cartItemsPen.value.findIndex(((e) => e.kdBarang === brg.kdBarang));
					const oldName = cartItemsPen.value[objIndex].nmBarang;
					const oldQty = cartItemsPen.value[objIndex].qty;
					const oldTotal = cartItemsPen.value[objIndex].total;
					const oldTotalHpp = cartItemsPen.value[objIndex].totalhpp;
					const newQty = parseInt(oldQty) + parseInt(qty.value);
					if (newQty > brg.stokPersediaan) {
						window.Swal.mixin({
							toast: true,
							position: "top-center",
							showConfirmButton: false,
							timer: 3e3,
							padding: "2em"
						}).fire({
							icon: "error",
							title: "Quantity dijual melebihi stok persediaan",
							padding: "2em"
						});
						return;
					}
					const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.hrgJual);
					const newTotalHpp = parseInt(oldTotalHpp) + parseInt(qty.value * brg.hrgPokok);
					cartItemsPen.value[objIndex].qty = parseInt(newQty);
					cartItemsPen.value[objIndex].total = parseInt(newTotal);
					cartItemsPen.value[objIndex].totalhpp = parseInt(newTotalHpp);
					localStorage.setItem("cartItemsPen", JSON.stringify(cartItemsPen.value));
					window.Swal.mixin({
						toast: true,
						position: "top-center",
						showConfirmButton: false,
						timer: 3e3,
						padding: "2em"
					}).fire({
						icon: "success",
						title: oldName + " Quantity Update",
						padding: "2em"
					});
					getCart();
					getTotal();
					reset_form();
				} else {
					cartItemsPen.value.push({
						kdBarang: brg.kdBarang,
						nmBarang: brg.nmBarang,
						accid: brg.accid,
						accid_persediaan: brg.accid_persediaan,
						accid_hpp: brg.accid_hpp,
						hrgJual: brg.hrgJual,
						accid: brg.accid,
						accid_persediaan: brg.accid_persediaan,
						qty: qty.value,
						satuan: brg.satuanBarang,
						total: qty.value * brg.hrgJual - qty.value * brg.hrgJual * disc.value / 100,
						disc: disc.value,
						totalhpp: qty.value * brg.hrgPokok,
						kategori: brg.ktgBarang
					});
					localStorage.setItem("cartItemsPen", JSON.stringify(cartItemsPen.value));
					getCart();
					getTotal();
					reset_form();
					window.Swal.mixin({
						toast: true,
						position: "top-center",
						showConfirmButton: false,
						timer: 3e3,
						padding: "2em"
					}).fire({
						icon: "success",
						title: brg.nmBarang + " berhasil disimpan",
						padding: "2em"
					});
				}
			}).catch(() => {
				window.Swal.mixin({
					toast: true,
					position: "top-center",
					showConfirmButton: false,
					timer: 3e3,
					padding: "2em"
				}).fire({
					icon: "error",
					title: "Barang tidak ditemukan di database",
					padding: "2em"
				});
			});
		}
		function addToCartJasa(jsa) {
			if (localStorage.getItem("cartItemsPenJasa") === null) cartItemsPenJasa.value = [];
			else cartItemsPenJasa.value = JSON.parse(localStorage.getItem("cartItemsPenJasa"));
			if ((JSON.parse(localStorage.getItem("cartItemsPenJasa")) || []).find(({ kdJasa }) => kdJasa === jsa.kdJasa)) {
				const objIndex = cartItemsPenJasa.value.findIndex(((e) => e.kdJasa === jsa.kdJasa));
				const oldName = cartItemsPenJasa.value[objIndex].nmJasa;
				const oldQty = cartItemsPenJasa.value[objIndex].qtyjasa;
				const oldTotal = cartItemsPenJasa.value[objIndex].total;
				const newQty = parseInt(oldQty) + parseInt(qtyjasa.value);
				const newTotal = parseInt(oldTotal) + parseInt(qtyjasa.value * jsa.biayaJasa);
				cartItemsPenJasa.value[objIndex].qtyjasa = parseInt(newQty);
				cartItemsPenJasa.value[objIndex].total = parseInt(newTotal);
				localStorage.setItem("cartItemsPenJasa", JSON.stringify(cartItemsPenJasa.value));
				showToast("success", oldName + " Quantity Update");
				getCartJasa();
				getTotal();
			} else {
				cartItemsPenJasa.value.push({
					kdJasa: jsa.kdJasa,
					nmJasa: jsa.nmJasa,
					accid: jsa.accid,
					accid_jasa: jsa.accid_jasa,
					biayaJasa: jsa.biayaJasa,
					qtyjasa: qtyjasa.value,
					total: qtyjasa.value * jsa.biayaJasa,
					note: jsa.note
				});
				localStorage.setItem("cartItemsPenJasa", JSON.stringify(cartItemsPenJasa.value));
				getCartJasa();
				getTotal();
				showToast("success", jsa.nmJasa + " berhasil disimpan");
			}
		}
		function updateItemQty(barcode, qty) {
			const barangData = penjualan.value.barangs.find((item) => item.kdBarang === barcode);
			const cartItems = JSON.parse(localStorage.getItem("cartItemsPen"));
			const objIndex = cartItems.findIndex(((e) => e.kdBarang === barcode));
			const newQty = parseInt(qty);
			if (barangData && newQty > barangData.stokPersediaan) {
				showToast("error", "Quantity dijual melebihi stok persediaan");
				return;
			}
			const hpp1 = cartItems[objIndex].totalhpp / cartItems[objIndex].qty;
			cartItems[objIndex].qty = parseInt(newQty);
			cartItems[objIndex].total = parseInt(newQty * cartItems[objIndex].hrgJual);
			cartItems[objIndex].totalhpp = parseInt(newQty * hpp1);
			localStorage.setItem("cartItemsPen", JSON.stringify(cartItems));
			getCart();
			getTotal();
		}
		function removeItem(id) {
			const filtered = JSON.parse(localStorage.getItem("cartItemsPen")).filter((arrayFromStroage) => arrayFromStroage.kdBarang !== id);
			localStorage.setItem("cartItemsPen", JSON.stringify(filtered));
			getCart();
			getTotal();
		}
		function removeItemJasa(id) {
			const filtered = JSON.parse(localStorage.getItem("cartItemsPenJasa")).filter((arrayFromStroage) => arrayFromStroage.kdJasa !== id);
			localStorage.setItem("cartItemsPenJasa", JSON.stringify(filtered));
			getCartJasa();
			getTotal();
		}
		function getCart() {
			if (localStorage.getItem("cartItemsPen") === null) cartItemsPen.value = localStorage.setItem("cartItemsPen", "[]");
			else if (localStorage.getItem("cartItemsPen") === "[]") {
				cartItemsPen.value = localStorage.setItem("cartItemsPen", "[]");
				getTotal();
				subtotal.value = 0;
				total.value = 0;
				tax.value = 0;
			} else {
				cartItemsPen.value = JSON.parse(localStorage.getItem("cartItemsPen"));
				getSubtotal();
				getTotal();
			}
		}
		function getCartJasa() {
			if (localStorage.getItem("cartItemsPenJasa") === null) cartItemsPenJasa.value = localStorage.setItem("cartItemsPenJasa", "[]");
			else if (localStorage.getItem("cartItemsPenJasa") === "[]") {
				cartItemsPenJasa.value = localStorage.setItem("cartItemsPenJasa", "[]");
				getTotal();
				subtotaljasa.value = 0;
				total.value = 0;
				tax.value = 0;
			} else {
				cartItemsPenJasa.value = JSON.parse(localStorage.getItem("cartItemsPenJasa"));
				getSubtotal();
				getTotal();
			}
		}
		const reset_form = () => {
			qty.value = 1;
			barcode.value = "";
		};
		function getSubtotal() {
			const allItems = JSON.parse(localStorage.getItem("cartItemsPen")) || [];
			const allItemsJasa = JSON.parse(localStorage.getItem("cartItemsPenJasa")) || [];
			let sum = 0;
			let sumjasa = 0;
			subtotal.value = 0;
			for (let i = 0; i < allItems.length; i++) sum += parseFloat(allItems[i].total);
			subtotal.value = sum;
			subtotaljasa.value = 0;
			for (let i = 0; i < allItemsJasa.length; i++) sumjasa += parseFloat(allItemsJasa[i].total);
			subtotaljasa.value = sumjasa;
		}
		function onlyNumber($event) {
			let keyCode = $event.keyCode ? $event.keyCode : $event.which;
			if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) $event.preventDefault();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[29] || (_cache[29] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Apps")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Penjualan")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
				_cache[74] || (_cache[74] = createBaseVNode("div", { class: "invoice-detail-title" }, [createBaseVNode("div", { class: "invoice-title d-flex align-items-center gap-2 flex-wrap" }, [createBaseVNode("span", null, "Invoice Penjualan"), createBaseVNode("span", { class: "badge badge-outline-primary" }, "Edit")])], -1)),
				createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [
					createBaseVNode("div", _hoisted_13, [_cache[30] || (_cache[30] = createBaseVNode("label", {
						for: "company-name",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "No Nota", -1)), createBaseVNode("div", _hoisted_14, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => params.value.noNota = $event),
						id: "number",
						class: "form-control form-control-sm",
						disabled: ""
					}, null, 512), [[vModelText, params.value.noNota]])])]),
					createBaseVNode("div", _hoisted_15, [_cache[31] || (_cache[31] = createBaseVNode("label", {
						for: "company-email",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Tgl", -1)), createBaseVNode("div", _hoisted_16, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.tglNota,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => params.value.tglNota = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Invoice Date"
					}, null, 8, ["modelValue"])])]),
					createBaseVNode("div", _hoisted_17, [_cache[32] || (_cache[32] = createBaseVNode("label", {
						for: "company-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Term", -1)), createBaseVNode("div", _hoisted_18, [withDirectives(createBaseVNode("select", {
						id: "inputState",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => params.value.term = $event),
						class: "form-select"
					}, [(openBlock(), createElementBlock(Fragment, null, renderList([{
						value: "0",
						label: "Cash"
					}, {
						value: "1",
						label: "Kredit"
					}], (option) => {
						return createBaseVNode("option", {
							key: option.value,
							value: option.value
						}, toDisplayString(option.label), 9, _hoisted_19);
					}), 64))], 512), [[vModelSelect, params.value.term]])])]),
					createBaseVNode("div", _hoisted_20, [_cache[33] || (_cache[33] = createBaseVNode("label", {
						for: "company-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Jatuh Tempo", -1)), createBaseVNode("div", _hoisted_21, [createVNode(unref(import_vue_flatpickr_min.default), {
						modelValue: params.value.jthTempo,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => params.value.jthTempo = $event),
						class: "form-control form-control-sm flatpickr active",
						placeholder: "Due Date"
					}, null, 8, ["modelValue"])])])
				])]), createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [
					createBaseVNode("div", _hoisted_24, [_cache[34] || (_cache[34] = createBaseVNode("label", {
						for: "client-name",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Pelanggan", -1)), createBaseVNode("div", _hoisted_25, [createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: paramspelanggan.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => paramspelanggan.value = $event),
						options: penjualan.value.pelanggans,
						searchable: true,
						"allow-empty": false,
						"track-by": "nmPelanggan",
						label: "nmPelanggan",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": "",
						"deselect-label": ""
					}, null, 8, ["modelValue", "options"])])]),
					createBaseVNode("div", _hoisted_26, [_cache[35] || (_cache[35] = createBaseVNode("label", {
						for: "client-address",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Address", -1)), createBaseVNode("div", _hoisted_27, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paramspelanggan.value.almtPelanggan = $event),
						class: "form-control form-control-sm",
						placeholder: "XYZ Street"
					}, null, 512), [[vModelText, paramspelanggan.value.almtPelanggan]])])]),
					createBaseVNode("div", _hoisted_28, [_cache[36] || (_cache[36] = createBaseVNode("label", {
						for: "client-phone",
						class: "col-sm-3 col-form-label col-form-label-sm"
					}, "Phone", -1)), createBaseVNode("div", _hoisted_29, [withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paramspelanggan.value.noHpPelanggan = $event),
						class: "form-control form-control-sm",
						placeholder: "(123) 456 789"
					}, null, 512), [[vModelText, paramspelanggan.value.noHpPelanggan]])])])
				])])])]),
				createBaseVNode("div", _hoisted_30, [createBaseVNode("ul", _hoisted_31, [_cache[38] || (_cache[38] = createBaseVNode("li", { class: "nav-item" }, [createBaseVNode("a", {
					class: "nav-link active",
					id: "home-tab",
					"data-bs-toggle": "tab",
					href: "#home",
					role: "tab",
					"aria-controls": "home",
					"aria-selected": "true"
				}, "BARANG")], -1)), unref(store).state.auth.user === "root" ? (openBlock(), createElementBlock("li", _hoisted_32, _cache[37] || (_cache[37] = [createBaseVNode("a", {
					class: "nav-link",
					id: "profile-tab",
					"data-bs-toggle": "tab",
					href: "#profile",
					role: "tab",
					"aria-controls": "profile",
					"aria-selected": "false"
				}, "JASA", -1)]))) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [
					createBaseVNode("div", _hoisted_37, [_cache[39] || (_cache[39] = createBaseVNode("label", { for: "Inputqty" }, "Barcode", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						ref: "InputBarcode",
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => barcode.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Barcode",
						onKeydown: _cache[8] || (_cache[8] = withKeys(($event) => addToCartB(barcode.value), ["enter"]))
					}, null, 544), [[vModelText, barcode.value]])]),
					createBaseVNode("div", _hoisted_38, [_cache[40] || (_cache[40] = createBaseVNode("label", { for: "inputCity" }, "NAMA BARANG", -1)), createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: brg.value,
						"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => brg.value = $event),
						options: penjualan.value.barangs,
						searchable: true,
						onSelect: _cache[10] || (_cache[10] = ($event) => focusInput()),
						"track-by": "nmBarang",
						label: "nmBarang",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": ""
					}, null, 8, ["modelValue", "options"])]),
					createBaseVNode("div", _hoisted_39, [_cache[41] || (_cache[41] = createBaseVNode("label", { for: "inputState" }, "HARGA", -1)), withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => brg.value.hrgJual = $event),
						ref_key: "InputHarga",
						ref: InputHarga,
						class: "form-control form-control-sm",
						placeholder: "Price",
						onKeydown: _cache[12] || (_cache[12] = withKeys(($event) => moveToQty(), ["enter"])),
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, brg.value.hrgJual]])]),
					createBaseVNode("div", _hoisted_40, [_cache[42] || (_cache[42] = createBaseVNode("label", { for: "inputZip" }, "QTY", -1)), withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => qty.value = $event),
						ref_key: "Inputqty",
						ref: Inputqty,
						class: "form-control form-control-sm",
						placeholder: "Quantity",
						onKeydown: _cache[14] || (_cache[14] = withKeys(($event) => addToCart(brg.value), ["enter"])),
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, qty.value]])]),
					createBaseVNode("div", _hoisted_41, [_cache[43] || (_cache[43] = createBaseVNode("label", { for: "inputZip" }, "Disc", -1)), withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => disc.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Diskon",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, disc.value]])]),
					createBaseVNode("div", _hoisted_42, [_cache[44] || (_cache[44] = createBaseVNode("label", { for: "satuan" }, "SATUAN", -1)), withDirectives(createBaseVNode("input", {
						type: "text",
						"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => brg.value.satuanBarang = $event),
						class: "form-control form-control-sm",
						id: "satuan"
					}, null, 512), [[vModelText, brg.value.satuanBarang]])]),
					createBaseVNode("div", _hoisted_43, [
						_cache[45] || (_cache[45] = createBaseVNode("label", { for: "inputZip" }, "TOTAL", -1)),
						_cache[46] || (_cache[46] = createBaseVNode("br", null, null, -1)),
						withDirectives(createBaseVNode("input", {
							type: "text",
							"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => tot.value = $event),
							class: "form-control form-control-sm",
							placeholder: "Quantity",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, tot.value]])
					]),
					createBaseVNode("div", _hoisted_44, [_cache[47] || (_cache[47] = createBaseVNode("label", { for: "aksi" }, "Aksi", -1)), createBaseVNode("button", {
						onClick: _cache[18] || (_cache[18] = ($event) => addToCart(brg.value)),
						class: "btn btn-primary btn-sm"
					}, " + ")])
				])])]), createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, [createBaseVNode("div", _hoisted_47, [
					createBaseVNode("div", _hoisted_48, [_cache[48] || (_cache[48] = createBaseVNode("label", { for: "inputCity" }, "NAMA JASA", -1)), createVNode(unref(import_vue3_multiselect_umd_min.default), {
						modelValue: jsa.value,
						"onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => jsa.value = $event),
						options: penjualan.value.jasas,
						searchable: true,
						"track-by": "nmJasa",
						label: "nmJasa",
						"open-direction": "top",
						placeholder: "Choose...",
						"selected-label": "",
						"select-label": ""
					}, null, 8, ["modelValue", "options"])]),
					createBaseVNode("div", _hoisted_49, [_cache[49] || (_cache[49] = createBaseVNode("label", { for: "inputState" }, "HARGA", -1)), withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => jsa.value.biayaJasa = $event),
						class: "form-control form-control-sm",
						placeholder: "Price",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, jsa.value.biayaJasa]])]),
					createBaseVNode("div", _hoisted_50, [_cache[50] || (_cache[50] = createBaseVNode("label", { for: "inputZip" }, "QTY", -1)), withDirectives(createBaseVNode("input", {
						type: "number",
						"onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => qtyjasa.value = $event),
						class: "form-control form-control-sm",
						placeholder: "Quantity",
						onKeypress: onlyNumber
					}, null, 544), [[vModelText, qtyjasa.value]])]),
					createBaseVNode("div", _hoisted_51, [
						_cache[51] || (_cache[51] = createBaseVNode("label", { for: "inputZip" }, "TOTAL", -1)),
						_cache[52] || (_cache[52] = createBaseVNode("br", null, null, -1)),
						withDirectives(createBaseVNode("input", {
							type: "number",
							"onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => totjasa.value = $event),
							class: "form-control form-control-sm",
							placeholder: "Quantity",
							onKeypress: onlyNumber
						}, null, 544), [[vModelText, totjasa.value]])
					]),
					createBaseVNode("div", _hoisted_52, [_cache[53] || (_cache[53] = createBaseVNode("label", { for: "aksi" }, "Aksi", -1)), createBaseVNode("button", {
						onClick: _cache[23] || (_cache[23] = ($event) => addToCartJasa(jsa.value)),
						class: "btn btn-primary btn-sm"
					}, " + ")])
				]), createBaseVNode("div", _hoisted_53, [createBaseVNode("div", _hoisted_54, [_cache[54] || (_cache[54] = createBaseVNode("label", { for: "inputState" }, "Note", -1)), withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => jsa.value.note = $event),
					class: "form-control form-control-sm",
					placeholder: "Price"
				}, null, 512), [[vModelText, jsa.value.note]])])])])])])]),
				createBaseVNode("div", _hoisted_55, [createBaseVNode("div", _hoisted_56, [createBaseVNode("div", _hoisted_57, [createBaseVNode("table", _hoisted_58, [_cache[56] || (_cache[56] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Detail Barang"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th")
				]), createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Nama Barang"),
					createBaseVNode("th", null, "Harga"),
					createBaseVNode("th", null, "Qty"),
					createBaseVNode("th", null, "Satuan"),
					createBaseVNode("th", null, "Diskon"),
					createBaseVNode("th", null, "Total"),
					createBaseVNode("th", null, "Aksi")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(cartItemsPen.value, (item) => {
					return openBlock(), createElementBlock("tr", { key: item.kdBarang }, [
						createBaseVNode("td", _hoisted_59, toDisplayString(item.nmBarang), 1),
						createBaseVNode("td", _hoisted_60, toDisplayString(new Intl.NumberFormat().format(item.hrgJual)), 1),
						createBaseVNode("td", _hoisted_61, [withDirectives(createBaseVNode("input", {
							type: "number",
							"onUpdate:modelValue": ($event) => item.qty = $event,
							style: { "min-width": "50px" },
							onKeypress: onlyNumber,
							onKeyup: ($event) => updateItemQty(item.kdBarang, item.qty)
						}, null, 40, _hoisted_62), [[vModelText, item.qty]])]),
						createBaseVNode("td", _hoisted_63, toDisplayString(item.satuan), 1),
						createBaseVNode("td", _hoisted_64, toDisplayString(item.disc) + " %", 1),
						createBaseVNode("td", _hoisted_65, toDisplayString(new Intl.NumberFormat().format(item.total)), 1),
						createBaseVNode("td", _hoisted_66, [createBaseVNode("a", {
							href: "javascript:;",
							onClick: ($event) => removeItem(_ctx.id = item.kdBarang)
						}, _cache[55] || (_cache[55] = [createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\" data-v-7f3a9328><polyline points=\"3 6 5 6 21 6\" data-v-7f3a9328></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" data-v-7f3a9328></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\" data-v-7f3a9328></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\" data-v-7f3a9328></line></svg>", 1)]), 8, _hoisted_67)])
					]);
				}), 128))])])])])]),
				cartItemsPenJasa.value ? (openBlock(), createElementBlock("div", _hoisted_68, [createBaseVNode("div", _hoisted_69, [createBaseVNode("div", _hoisted_70, [createBaseVNode("table", _hoisted_71, [_cache[57] || (_cache[57] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Detail Jasa"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th"),
					createBaseVNode("th")
				]), createBaseVNode("tr", null, [
					createBaseVNode("th", null, "Code"),
					createBaseVNode("th", null, "Nama Jasa"),
					createBaseVNode("th", null, "Biaya"),
					createBaseVNode("th", null, "Qty"),
					createBaseVNode("th", null, "Total"),
					createBaseVNode("th", null, "Aksi")
				])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(cartItemsPenJasa.value, (itemjasa) => {
					return openBlock(), createElementBlock("tr", { key: itemjasa.kdJasa }, [
						createBaseVNode("td", _hoisted_72, toDisplayString(itemjasa.kdJasa), 1),
						createBaseVNode("td", _hoisted_73, [createTextVNode(toDisplayString(itemjasa.nmJasa) + " ", 1), createBaseVNode("p", _hoisted_74, toDisplayString(itemjasa.note), 1)]),
						createBaseVNode("td", _hoisted_75, toDisplayString(new Intl.NumberFormat().format(itemjasa.biayaJasa)), 1),
						createBaseVNode("td", _hoisted_76, toDisplayString(itemjasa.qtyjasa), 1),
						createBaseVNode("td", _hoisted_77, toDisplayString(new Intl.NumberFormat().format(itemjasa.total)), 1),
						createBaseVNode("td", _hoisted_78, [createBaseVNode("button", {
							type: "button",
							class: "btn btn-secondary additem btn-sm",
							onClick: ($event) => removeItemJasa(_ctx.id = itemjasa.kdJasa)
						}, "Hapus", 8, _hoisted_79)])
					]);
				}), 128))])])])])])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_80, [createBaseVNode("div", _hoisted_81, [createBaseVNode("div", _hoisted_82, [createBaseVNode("div", _hoisted_83, [createBaseVNode("div", _hoisted_84, [createBaseVNode("div", _hoisted_85, [createBaseVNode("div", _hoisted_86, [createBaseVNode("button", {
					onClick: _cache[25] || (_cache[25] = ($event) => openModal()),
					class: "btn btn-success btn-download txn-payment-btn"
				}, "PAYMENT")])])])])]), createBaseVNode("div", _hoisted_87, [createBaseVNode("div", _hoisted_88, [
					createBaseVNode("div", _hoisted_89, [
						_cache[59] || (_cache[59] = createBaseVNode("div", { class: "invoice-summary-label" }, "Sub Total", -1)),
						_cache[60] || (_cache[60] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_90, [createBaseVNode("div", _hoisted_91, [_cache[58] || (_cache[58] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", _hoisted_92, toDisplayString(new Intl.NumberFormat().format(subtotal.value)), 1)])])
					]),
					cartItemsPenJasa.value ? (openBlock(), createElementBlock("div", _hoisted_93, [
						_cache[62] || (_cache[62] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total Jasa", -1)),
						_cache[63] || (_cache[63] = createBaseVNode("div", { class: "invoice-summary-label" }, null, -1)),
						createBaseVNode("div", _hoisted_94, [createBaseVNode("div", _hoisted_95, [_cache[61] || (_cache[61] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", _hoisted_96, toDisplayString(new Intl.NumberFormat().format(subtotaljasa.value)), 1)])])
					])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", null, [createBaseVNode("div", _hoisted_97, [_cache[65] || (_cache[65] = createBaseVNode("div", { class: "invoice-summary-label" }, "Pajak", -1)), createBaseVNode("div", _hoisted_98, [createBaseVNode("div", _hoisted_99, [_cache[64] || (_cache[64] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(tax.value))), 1)])])])], 512), [[vShow, divpajak.value]]),
					createBaseVNode("div", _hoisted_100, [_cache[67] || (_cache[67] = createBaseVNode("div", { class: "invoice-summary-label" }, "Total", -1)), createBaseVNode("div", _hoisted_101, [createBaseVNode("div", _hoisted_102, [_cache[66] || (_cache[66] = createBaseVNode("span", { class: "currency" }, null, -1)), createBaseVNode("span", null, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])])])
				])])])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[27] || (_cache[27] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "PEMBAYARAN NOTA",
					showCancelButton: false,
					cancelButton: {
						text: "cancel",
						onclick: () => {
							isVisible.value = false;
						},
						loading: false
					},
					okButton: {
						text: "SAVE",
						onclick: () => {
							simpanPenjualan();
						},
						loading: false
					},
					width: "60%"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_103, [_cache[70] || (_cache[70] = createBaseVNode("label", { class: "form-label" }, "Riwayat Pembayaran", -1)), createBaseVNode("table", _hoisted_104, [_cache[69] || (_cache[69] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
							createBaseVNode("th", null, "No Bayar"),
							createBaseVNode("th", null, "Tanggal"),
							createBaseVNode("th", null, "Jumlah"),
							createBaseVNode("th", null, "Metode")
						])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(listPembayaran.value, (bayar) => {
							return openBlock(), createElementBlock("tr", { key: bayar.noBayar }, [
								createBaseVNode("td", null, toDisplayString(bayar.noBayar), 1),
								createBaseVNode("td", null, toDisplayString(bayar.tglBayar), 1),
								createBaseVNode("td", null, toDisplayString(new Intl.NumberFormat().format(bayar.jmlBayar)), 1),
								createBaseVNode("td", null, toDisplayString(bayar.metodeBayar), 1)
							]);
						}), 128)), !listPembayaran.value || listPembayaran.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_105, _cache[68] || (_cache[68] = [createBaseVNode("td", {
							colspan: "4",
							class: "text-center"
						}, "Belum ada pembayaran", -1)]))) : createCommentVNode("", true)])])]),
						createBaseVNode("div", _hoisted_106, [createBaseVNode("div", _hoisted_107, [createBaseVNode("div", _hoisted_108, [createBaseVNode("div", _hoisted_109, [params.value.term === "0" ? (openBlock(), createElementBlock("div", _hoisted_110, "Cash")) : params.value.term === "1" ? (openBlock(), createElementBlock("div", _hoisted_111, "Kredit")) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_112, [createBaseVNode("div", _hoisted_113, [createBaseVNode("span", _hoisted_114, toDisplayString(new Intl.NumberFormat().format(Math.floor(total.value))), 1)])])])])]),
						params.value.term === "0" ? (openBlock(), createElementBlock("div", _hoisted_115, [createBaseVNode("div", _hoisted_116, [createBaseVNode("div", _hoisted_117, [_cache[72] || (_cache[72] = createBaseVNode("div", { style: { "font-size": "20px" } }, "Method", -1)), createBaseVNode("div", _hoisted_118, [createBaseVNode("div", _hoisted_119, [withDirectives(createBaseVNode("select", {
							"onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => paramsbayar.value.metodeBayar = $event),
							class: "form-select form-select-sm"
						}, _cache[71] || (_cache[71] = [
							createBaseVNode("option", {
								value: "cash",
								selected: ""
							}, "Cash", -1),
							createBaseVNode("option", { value: "credit_card" }, "Credit Card", -1),
							createBaseVNode("option", { value: "bank_transfer" }, "Bank Transfer", -1),
							createBaseVNode("option", { value: "ewallet" }, "E-Wallet", -1)
						]), 512), [[vModelSelect, paramsbayar.value.metodeBayar]])])])])])])) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_120, [createBaseVNode("div", _hoisted_121, [createBaseVNode("div", _hoisted_122, [createBaseVNode("div", _hoisted_123, [_cache[73] || (_cache[73] = createBaseVNode("label", {
					for: "invoice-detail-notes",
					class: "col-sm-12 col-form-label col-form-label-sm"
				}, "Notes:", -1)), createBaseVNode("div", _hoisted_124, [withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => params.value.notes = $event),
					rows: "3",
					id: "invoice-detail-notes",
					class: "form-control",
					placeholder: "Notes - For example, \"Thank you for doing business with us\""
				}, null, 512), [[vModelText, params.value.notes]])])])])])])
			])])])])])])])]);
		};
	}
}, [["__scopeId", "data-v-7f3a9328"]]);
//#endregion
export { editPenjualan_default as default };
