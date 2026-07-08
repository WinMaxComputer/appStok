import { o as __toESM } from "./rolldown-runtime-D1cXj70v.js";
import { B as openBlock, E as createVNode, F as onBeforeMount, K as resolveComponent, L as onMounted, Nt as toDisplayString, Ot as normalizeClass, Q as withDirectives, S as createElementBlock, T as createTextVNode, W as renderList, Z as withCtx, a as init_runtime_dom_esm_bundler, b as createBlock, d as vModelText, g as Teleport, h as Fragment, ht as init_shared_esm_bundler, it as ref, j as init_runtime_core_esm_bundler, rt as reactive, st as unref, t as useMeta, tt as init_reactivity_esm_bundler, v as computed, x as createCommentVNode, y as createBaseVNode } from "./use-meta-CmUwIrPP.js";
import { a as useRoute, c as _plugin_vue_export_helper_default, o as useRouter, s as useStore } from "../../assets/main-Bnx5Knk7.js";
import { r as init_jspdf_es_min, t as require_jspdf_plugin_autotable } from "./jspdf.plugin.autotable-B636JtOS.js";
import { t as require_html2canvas } from "./html2canvas-5NJjBftB.js";
/* empty css                         */
import { t as D } from "./usemodal-vue3-BWxz8jOH.js";
import { n as E, r as require_html2pdf, t as QrcodeVue } from "./qrcode.vue.esm-C103rW8w.js";
require_html2canvas();
init_jspdf_es_min();
require_jspdf_plugin_autotable();
var import_html2pdf = /* @__PURE__ */ __toESM(require_html2pdf());
//#endregion
//#region resources/js/src/views/transaksi/invoicePenjualanMax.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { class: "layout-px-spacing" };
var _hoisted_2 = { class: "row invoice layout-top-spacing layout-spacing apps-invoice" };
var _hoisted_3 = { class: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" };
var _hoisted_4 = { class: "doc-container" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "col-xl-9" };
var _hoisted_7 = {
	class: "invoice-container",
	id: "element-to-print"
};
var _hoisted_8 = {
	id: "ct",
	class: ""
};
var _hoisted_9 = { class: "invoice-00001" };
var _hoisted_10 = { class: "content-section" };
var _hoisted_11 = { class: "inv--product-table-section invoice-hero-block" };
var _hoisted_12 = { class: "row invoice-hero-grid" };
var _hoisted_13 = { class: "col-sm-41 text-sm-end" };
var _hoisted_14 = { class: "col-sm-41 align-self-left" };
var _hoisted_15 = { class: "invoice-company-meta" };
var _hoisted_16 = { class: "inv-email-address" };
var _hoisted_17 = { key: 0 };
var _hoisted_18 = { class: "col-sm-41 text-sm-end" };
var _hoisted_19 = { class: "invoice-customer-card" };
var _hoisted_20 = { class: "inv-created-date" };
var _hoisted_21 = { class: "inv-date" };
var _hoisted_22 = { class: "inv-created-date" };
var _hoisted_23 = { class: "inv-date" };
var _hoisted_24 = { class: "inv-created-date" };
var _hoisted_25 = { class: "inv-date" };
var _hoisted_26 = { class: "inv-created-date" };
var _hoisted_27 = { class: "inv-date" };
var _hoisted_28 = {
	key: 0,
	class: "inv--product-table-section invoice-block"
};
var _hoisted_29 = { class: "table-responsive" };
var _hoisted_30 = { class: "invoice-items-table" };
var _hoisted_31 = { class: "text-end" };
var _hoisted_32 = { class: "text-end" };
var _hoisted_33 = { class: "text-end" };
var _hoisted_34 = { class: "text-end" };
var _hoisted_35 = {
	key: 1,
	class: "inv--product-table-section invoice-block"
};
var _hoisted_36 = { class: "table-responsive" };
var _hoisted_37 = { class: "invoice-items-table invoice-items-table--service" };
var _hoisted_38 = { class: "inv-email-address" };
var _hoisted_39 = { class: "text-end" };
var _hoisted_40 = { class: "text-end" };
var _hoisted_41 = { class: "text-end" };
var _hoisted_42 = { class: "inv--total-amounts invoice-summary-block" };
var _hoisted_43 = { class: "invoice-summary-row" };
var _hoisted_44 = { class: "invoice-summary-col invoice-summary-col--notes" };
var _hoisted_45 = {
	key: 0,
	class: "invoice-signature-box"
};
var _hoisted_46 = ["src"];
var _hoisted_47 = { class: "inv-email-address" };
var _hoisted_48 = { class: "invoice-summary-col invoice-summary-col--totals" };
var _hoisted_49 = { class: "invoice-total-box" };
var _hoisted_50 = { class: "invoice-total-line" };
var _hoisted_51 = {
	key: 0,
	class: "invoice-total-line"
};
var _hoisted_52 = { class: "invoice-total-line invoice-total-line--grand" };
var _hoisted_53 = { class: "invoice-total-line" };
var _hoisted_54 = { class: "invoice-total-line invoice-total-line--due" };
var _hoisted_55 = { class: "col-xl-3" };
var _hoisted_56 = { class: "invoice-actions-btn" };
var _hoisted_57 = { class: "invoice-action-btn" };
var _hoisted_58 = { class: "row" };
var _hoisted_59 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_60 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_61 = { class: "col-xl-12 col-md-3 col-sm-6" };
var _hoisted_62 = {
	key: 0,
	class: "col-xl-12 col-md-3 col-sm-6"
};
var _hoisted_63 = { class: "col-xl-12 col-md-3 col-sm-6" };
var invoicePenjualanMax_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "invoicePenjualanMax",
	setup(__props) {
		useMeta({ title: "Invoice" });
		const route = useRoute();
		const store = useStore();
		const router = useRouter();
		const items = ref([]);
		const items_jasa = ref([]);
		const columns = ref([]);
		const columns_jasa = ref([]);
		const nmPelanggan = ref("");
		const alamatPelanggan = ref("");
		const noNota = ref("");
		const tglNota = ref("");
		const discPenjualan = ref(0);
		const typeBayar = ref("");
		const termPenjualan = ref("");
		const namaPenerima = ref("");
		const isVisible = ref(false);
		const invoiceId = ref("");
		const ttdPenerima = ref();
		const jthTempo = ref();
		const isi = ref(null);
		const sudahbayar = ref([]);
		const subtotalBarang = computed(() => items.value.reduce((sum, item) => sum + Number(item.totalJual || 0), 0));
		const subtotalJasa = computed(() => items_jasa.value.reduce((sum, item) => sum + Number(item.totalJasa || 0), 0));
		const grandTotal = computed(() => Number(subtotalBarang.value - Number(discPenjualan.value || 0)) + subtotalJasa.value);
		const totalBayar = computed(() => sudahbayar.value.reduce((sum, item) => sum + Number(item.jmlBayar || 0), 0));
		const sisaBayar = computed(() => grandTotal.value - totalBayar.value);
		const formatNumber = (value) => Number(value || 0).toLocaleString();
		onMounted(() => {
			bind_data();
			getInvoiceDetails();
		});
		const getPdfOptions = () => ({
			margin: .35,
			filename: `invoice-${noNota.value || invoiceId.value || "penjualan"}.pdf`,
			image: {
				type: "jpeg",
				quality: .98
			},
			html2canvas: {
				scale: 2,
				useCORS: true,
				backgroundColor: "#ffffff"
			},
			jsPDF: {
				unit: "mm",
				format: "a4",
				orientation: "portrait"
			},
			pagebreak: { mode: ["css", "legacy"] }
		});
		const downloadWithCSS = () => {
			const element = document.getElementById("element-to-print");
			(0, import_html2pdf.default)().set(getPdfOptions()).from(element).save();
		};
		onBeforeMount(() => {
			invoiceId.value = store.getters.SetidNota;
		});
		const bind_data = () => {
			columns.value = [
				{
					key: "kdBarang",
					label: "CODE"
				},
				{
					key: "nmBarang",
					label: "ITEMS"
				},
				{
					key: "hrgJual",
					label: "HARGA"
				},
				{
					key: "qty",
					label: "QTY",
					class: "text-end"
				},
				{
					key: "satuanBarang",
					label: "SATUAN",
					class: "text-end"
				},
				{
					key: "totalJual",
					label: "AMOUNT",
					class: "text-end"
				}
			];
			columns_jasa.value = [
				{
					key: "kdJasa",
					label: "CODE"
				},
				{
					key: "nmJasa",
					label: "ITEMS"
				},
				{
					key: "biayaJasa",
					label: "HARGA"
				},
				{
					key: "qtyjasa",
					label: "QTY",
					class: "text-end"
				},
				{
					key: "totalJasa",
					label: "AMOUNT",
					class: "text-end"
				}
			];
		};
		const printInvoice = () => {
			const element = document.getElementById("element-to-print");
			if (!element) return;
			const printWindow = window.open("", "_blank", "noopener,noreferrer,width=1100,height=900");
			if (!printWindow) return;
			const printStyles = `
            <style>
                * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                body { margin: 0; font-family: Arial, sans-serif; color: #111827; background: #fff; }
                .print-shell { padding: 8mm; }
                .invoice-container, .invoice-inbox, .content-section { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; border-radius: 0 !important; }
                .company-logo { max-height: 54px; width: auto; }
                .inv-email-address, .inv-street-addr, .inv-created-date { font-size: 11px; line-height: 1.35; }
                .table-responsive { overflow: visible !important; }
                table { width: 100% !important; border-collapse: collapse; }
                th { padding: 8px 10px; border-top: 1.5px solid #0f172a; border-bottom: 1.5px solid #0f172a; text-align: left; font-size: 11px; }
                td { padding: 6px 10px; font-size: 11px; vertical-align: top; }
                tbody tr:not(:last-child) td { border-bottom: 1px solid #e5e7eb; }
                .text-end { text-align: right !important; }
                .invoice-summary-block { margin-top: 14px; }
                .invoice-summary-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }
                .invoice-summary-col--notes { flex: 1 1 55%; }
                .invoice-summary-col--totals { flex: 0 0 260px; }
                .invoice-total-box { border-top: 1.5px solid #0f172a; padding-top: 6px; }
                .invoice-total-line { display: flex; justify-content: space-between; padding: 2px 0; }
                .invoice-total-line--grand, .invoice-total-line--due { border-top: 1px solid #0f172a; margin-top: 3px; padding-top: 4px; font-weight: 700; }
                .invoice-signature-box { margin-top: 12px; }
                .invoice-signature-image { max-height: 90px; }
                .btn, .modal, .modal-backdrop { display: none !important; }
                tr, img, svg { page-break-inside: avoid; }
                @page { size: A4 portrait; margin: 8mm; }
            </style>
        `;
			printWindow.document.open();
			printWindow.document.write(`<!doctype html><html><head><title>Print Invoice</title>${printStyles}</head><body><div class="print-shell">${element.outerHTML}</div></body></html>`);
			printWindow.document.close();
			printWindow.focus();
			setTimeout(() => printWindow.print(), 250);
		};
		const openModal = () => {
			isVisible.value = true;
		};
		const state = reactive({
			count: 0,
			option: {
				penColor: "rgb(0, 0, 0)",
				backgroundColor: "rgb(255,255,255)"
			},
			disabled: false
		});
		const signature1 = ref(null);
		const clear = () => {
			signature1.value.clear();
		};
		const undo = () => {
			signature1.value.undo();
		};
		const handleDisabled = () => {
			state.disabled = !state.disabled;
		};
		const simpanPenerima = () => {
			store.dispatch("penerimaNota", {
				noNota: invoiceId.value,
				namaPenerima: namaPenerima.value,
				signature: signature1.value.save("image/jpeg")
			}).then((response) => {
				isVisible.value = false;
				getInvoiceDetails();
			}).catch((error) => {
				console.error("Error saving recipient name:", error);
			});
		};
		const getInvoiceDetails = async () => {
			try {
				console.log(invoiceId.value);
				await store.dispatch("GetDetailPenjualan", { noNota: invoiceId.value }).then((response) => {
					items.value = store.getters.SdetailPenjualan[1];
					items_jasa.value = store.getters.SdetailPenjualan[2];
					nmPelanggan.value = store.getters.SdetailPenjualan[0][0].nmPelanggan;
					alamatPelanggan.value = store.getters.SdetailPenjualan[0][0].almtPelanggan;
					noNota.value = invoiceId.value;
					tglNota.value = store.getters.SdetailPenjualan[0][0].tglPenjualan;
					discPenjualan.value = store.getters.SdetailPenjualan[0][0].discPenjualan;
					typeBayar.value = store.getters.SdetailPenjualan[0][0].typeBayar;
					termPenjualan.value = store.getters.SdetailPenjualan[0][0].termPenjualan;
					namaPenerima.value = store.getters.SdetailPenjualan[0][0].penerimaNota;
					ttdPenerima.value = store.getters.SdetailPenjualan[0][0].ttdPenerima;
					jthTempo.value = store.getters.SdetailPenjualan[0][0].jthTempo;
					sudahbayar.value = store.getters.SdetailPenjualan[3];
					console.log(response);
				}).catch((error) => {
					console.log(error);
					router.push({ name: "penjualan-barang" });
				});
			} catch (error) {
				console.error("Error fetching invoice details:", error);
			}
		};
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: "#breadcrumb" }, [_cache[6] || (_cache[6] = createBaseVNode("ul", { class: "navbar-nav flex-row" }, [createBaseVNode("li", null, [createBaseVNode("div", { class: "page-header" }, [createBaseVNode("nav", {
				class: "breadcrumb-one",
				"aria-label": "breadcrumb"
			}, [createBaseVNode("ol", { class: "breadcrumb" }, [createBaseVNode("li", { class: "breadcrumb-item" }, [createBaseVNode("a", { href: "javascript:;" }, "Apps")]), createBaseVNode("li", {
				class: "breadcrumb-item active",
				"aria-current": "page"
			}, [createBaseVNode("span", null, "Invoice Preview")])])])])])], -1))])), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", {
					class: "invoice-inbox",
					ref_key: "isi",
					ref: isi
				}, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [
					createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [
						_cache[18] || (_cache[18] = createBaseVNode("div", { class: "col-sm-41 me-auto" }, [createBaseVNode("div", { class: "d-flex align-items-start" }, [createBaseVNode("img", {
							class: "company-logo",
							src: "/build/assets/wmax-BHLeedYF.png",
							alt: "company"
						})])], -1)),
						_cache[19] || (_cache[19] = createBaseVNode("div", { class: "col-sm-41 text-sm-end" }, null, -1)),
						createBaseVNode("div", _hoisted_13, [noNota.value ? (openBlock(), createBlock(QrcodeVue, {
							key: 0,
							value: String(noNota.value),
							size: 50,
							margin: 0,
							level: "H",
							"render-as": "svg",
							foreground: "#000000",
							background: "#ffffff"
						}, null, 8, ["value"])) : createCommentVNode("", true)]),
						createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [
							_cache[7] || (_cache[7] = createBaseVNode("div", { class: "inv-street-addr" }, "Jln Jepun Bali No.10X Lukluk, Mengwi - Bali", -1)),
							_cache[8] || (_cache[8] = createBaseVNode("div", { class: "inv-email-address" }, "info@winmaxbali", -1)),
							_cache[9] || (_cache[9] = createBaseVNode("div", { class: "inv-email-address" }, "+6281 8688 114", -1)),
							createBaseVNode("div", _hoisted_16, [createTextVNode("Term: " + toDisplayString(typeBayar.value === "0" ? "Cash" : "Kredit") + " ", 1), typeBayar.value === "1" ? (openBlock(), createElementBlock("span", _hoisted_17, "Tempo " + toDisplayString(new Date(jthTempo.value).toLocaleDateString("id-ID", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric"
							})), 1)) : createCommentVNode("", true)])
						])]),
						_cache[20] || (_cache[20] = createBaseVNode("div", { class: "col-sm-41 text-sm-end" }, null, -1)),
						createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [
							createBaseVNode("div", _hoisted_20, [
								_cache[10] || (_cache[10] = createBaseVNode("span", { class: "inv-title" }, "Invoice : ", -1)),
								_cache[11] || (_cache[11] = createTextVNode()),
								createBaseVNode("span", _hoisted_21, toDisplayString(noNota.value), 1)
							]),
							createBaseVNode("div", _hoisted_22, [
								_cache[12] || (_cache[12] = createBaseVNode("span", { class: "inv-title" }, "Invoice Date : ", -1)),
								_cache[13] || (_cache[13] = createTextVNode()),
								createBaseVNode("span", _hoisted_23, toDisplayString(new Date(tglNota.value).toLocaleDateString("id-ID", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric"
								})), 1)
							]),
							createBaseVNode("div", _hoisted_24, [
								_cache[14] || (_cache[14] = createBaseVNode("span", { class: "inv-title" }, "Kpd : ", -1)),
								_cache[15] || (_cache[15] = createTextVNode()),
								createBaseVNode("span", _hoisted_25, toDisplayString(nmPelanggan.value), 1)
							]),
							createBaseVNode("div", _hoisted_26, [
								_cache[16] || (_cache[16] = createBaseVNode("span", { class: "inv-title" }, "Alamat : ", -1)),
								_cache[17] || (_cache[17] = createTextVNode()),
								createBaseVNode("span", _hoisted_27, toDisplayString(alamatPelanggan.value), 1)
							])
						])])
					])]),
					items.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [createBaseVNode("table", _hoisted_30, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (item) => {
						return openBlock(), createElementBlock("th", {
							key: item.key,
							class: normalizeClass([item.class])
						}, toDisplayString(item.label), 3);
					}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
						return openBlock(), createElementBlock("tr", { key: item.id }, [
							createBaseVNode("td", null, toDisplayString(item.kdBarang), 1),
							createBaseVNode("td", null, toDisplayString(item.nmBarang), 1),
							createBaseVNode("td", _hoisted_31, toDisplayString(Number(item.hrgJual).toLocaleString()), 1),
							createBaseVNode("td", _hoisted_32, toDisplayString(item.qty), 1),
							createBaseVNode("td", _hoisted_33, toDisplayString(item.satuanBarang), 1),
							createBaseVNode("td", _hoisted_34, toDisplayString(Number(item.totalJual).toLocaleString()), 1)
						]);
					}), 128))])])])])) : createCommentVNode("", true),
					items_jasa.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createBaseVNode("table", _hoisted_37, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(columns_jasa.value, (item) => {
						return openBlock(), createElementBlock("th", {
							key: item.key,
							class: normalizeClass([item.class])
						}, toDisplayString(item.label), 3);
					}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(items_jasa.value, (item) => {
						return openBlock(), createElementBlock("tr", { key: item.id }, [
							createBaseVNode("td", null, toDisplayString(item.kdJasa), 1),
							createBaseVNode("td", null, [createTextVNode(toDisplayString(item.nmJasa) + " ", 1), createBaseVNode("p", _hoisted_38, toDisplayString(item.noteJasa), 1)]),
							createBaseVNode("td", _hoisted_39, toDisplayString(Number(item.biayaJasa).toLocaleString()), 1),
							createBaseVNode("td", _hoisted_40, toDisplayString(item.qtyJasa), 1),
							createBaseVNode("td", _hoisted_41, toDisplayString(Number(item.totalJasa).toLocaleString()), 1)
						]);
					}), 128))])])])])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_42, [createBaseVNode("div", _hoisted_43, [createBaseVNode("div", _hoisted_44, [_cache[22] || (_cache[22] = createBaseVNode("div", { class: "invoice-bank-box" }, [createBaseVNode("div", { class: "inv-email-address" }, [
						createTextVNode("Rek BCA : 2360315331"),
						createBaseVNode("br"),
						createTextVNode(" An : I Nyoman Rihan Adi")
					]), createBaseVNode("div", { class: "inv-email-address" }, [
						createTextVNode("Invoice ini sudah di ttd secara digital oleh WinMax Bali"),
						createBaseVNode("br"),
						createTextVNode("Terima kasih")
					])], -1)), ttdPenerima.value ? (openBlock(), createElementBlock("div", _hoisted_45, [
						_cache[21] || (_cache[21] = createBaseVNode("div", null, "Penerima,", -1)),
						createBaseVNode("img", {
							src: ttdPenerima.value,
							alt: "Tanda Tangan Penerima",
							class: "invoice-signature-image"
						}, null, 8, _hoisted_46),
						createBaseVNode("div", _hoisted_47, toDisplayString(namaPenerima.value), 1)
					])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_48, [createBaseVNode("div", _hoisted_49, [
						createBaseVNode("div", _hoisted_50, [_cache[23] || (_cache[23] = createBaseVNode("span", null, "Sub Total", -1)), createBaseVNode("span", null, toDisplayString(formatNumber(subtotalBarang.value)), 1)]),
						items_jasa.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_51, [_cache[24] || (_cache[24] = createBaseVNode("span", null, "Jasa", -1)), createBaseVNode("span", null, toDisplayString(formatNumber(subtotalJasa.value)), 1)])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_52, [_cache[25] || (_cache[25] = createBaseVNode("span", null, "Total", -1)), createBaseVNode("span", null, toDisplayString(formatNumber(grandTotal.value)), 1)]),
						typeBayar.value !== "0" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", _hoisted_53, [_cache[26] || (_cache[26] = createBaseVNode("span", null, "Payment", -1)), createBaseVNode("span", null, toDisplayString(formatNumber(totalBayar.value)), 1)]), createBaseVNode("div", _hoisted_54, [_cache[27] || (_cache[27] = createBaseVNode("span", null, "Sisa", -1)), createBaseVNode("span", null, toDisplayString(formatNumber(sisaBayar.value)), 1)])], 64)) : createCommentVNode("", true)
					])])])])
				])])])], 512)])]),
				createVNode(unref(D), {
					visible: isVisible.value,
					"onUpdate:visible": _cache[1] || (_cache[1] = ($event) => isVisible.value = $event),
					draggable: true,
					title: "PENERIMA",
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
							simpanPenerima();
						},
						loading: false
					},
					width: "60%"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", null, [_cache[28] || (_cache[28] = createBaseVNode("label", {
							for: "namaPenerima",
							class: "form-label"
						}, "Nama Penerima", -1)), withDirectives(createBaseVNode("input", {
							id: "namaPenerima",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => namaPenerima.value = $event),
							type: "text",
							class: "form-control",
							placeholder: "Masukkan nama penerima",
							autocomplete: "off"
						}, null, 512), [[vModelText, namaPenerima.value]])]),
						createVNode(unref(E), {
							ref_key: "signature1",
							ref: signature1,
							sigOption: state.option,
							w: "600px",
							h: "380px",
							disabled: state.disabled,
							class: "example"
						}, null, 8, ["sigOption", "disabled"]),
						createBaseVNode("button", { onClick: clear }, "Clear"),
						createBaseVNode("button", { onClick: undo }, "Undo"),
						createBaseVNode("button", { onClick: handleDisabled }, "disabled")
					]),
					_: 1
				}, 8, [
					"visible",
					"cancelButton",
					"okButton"
				]),
				createBaseVNode("div", _hoisted_55, [createBaseVNode("div", _hoisted_56, [createBaseVNode("div", _hoisted_57, [createBaseVNode("div", _hoisted_58, [
					createBaseVNode("div", _hoisted_59, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-primary btn-send",
						onClick: _cache[2] || (_cache[2] = ($event) => openModal())
					}, "Penerima")]),
					createBaseVNode("div", _hoisted_60, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-secondary btn-print action-print",
						onClick: _cache[3] || (_cache[3] = ($event) => printInvoice())
					}, "Print")]),
					createBaseVNode("div", _hoisted_61, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-success btn-download",
						onClick: _cache[4] || (_cache[4] = ($event) => downloadWithCSS())
					}, "Download")]),
					_ctx.$store.state.auth.user && _ctx.$store.state.auth.user === "root" ? (openBlock(), createElementBlock("div", _hoisted_62, [createBaseVNode("a", {
						href: "javascript:;",
						class: "btn btn-success btn-download",
						onClick: _cache[5] || (_cache[5] = ($event) => downloadWithCSS())
					}, "Download Winmax")])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_63, [createVNode(_component_router_link, {
						to: {
							name: "penjualan-barang",
							query: unref(route).query
						},
						class: "btn btn-warning btn-print"
					}, {
						default: withCtx(() => _cache[29] || (_cache[29] = [createTextVNode("Back")])),
						_: 1
					}, 8, ["to"])]),
					_cache[30] || (_cache[30] = createBaseVNode("div", { class: "col-xl-12 col-md-3 col-sm-6" }, null, -1))
				])])])])
			])])])])]);
		};
	}
}, [["__scopeId", "data-v-440934de"]]);
//#endregion
export { invoicePenjualanMax_default as default };
