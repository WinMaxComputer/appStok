<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Preview</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="invoice-paper-shell">
                            <div class="invoice-container" id="element-to-print">
                                <div class="invoice-inbox" ref="isi">
                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                <div class="inv--product-table-section invoice-hero-block">
                                                    <div class="row invoice-hero-grid">

                                                        <div class="col-sm-41 me-auto">
                                                            <div class="d-flex align-items-start">
                                                                <img class="company-logo" src="@/assets/images/wm.png" alt="company" />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-41 text-sm-end"></div>
                                                        <div class="col-sm-41 text-sm-end">
                                                            <QrcodeVue
                                                                v-if="noNota"
                                                                :value="String(noNota)"
                                                                :size="50"
                                                                :margin="0"
                                                                level="H"
                                                                render-as="svg"
                                                                foreground="#000000"
                                                                background="#ffffff"
                                                            />
                                                        </div>

                                                        <div class="col-sm-41 align-self-left">
                                                            <div class="invoice-company-meta">
                                                                <div class="inv-street-addr">Jln Raya Kutuh No.8 Tabanan - Bali</div>
                                                                <div class="inv-email-address">theswamerta@gmail.com</div>
                                                                <div class="inv-email-address">+6285 9361 00511</div>
                                                                <div class="inv-email-address">Term: {{ typeBayar === '0' ? 'Cash' : 'Kredit' }} <span v-if="typeBayar === '1'">Tempo {{ new Date(jthTempo).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-41 text-sm-end"></div>
                                                        <div class="col-sm-41 text-sm-end">
                                                            <div class="invoice-customer-card">
                                                                <div class="inv-created-date"><span class="inv-title">Invoice : </span> <span class="inv-date">{{ noNota }}</span></div>
                                                                <div class="inv-created-date"><span class="inv-title">Invoice Date : </span> <span class="inv-date">{{ new Date(tglNota).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                                <div class="inv-created-date"><span class="inv-title">Kpd : </span> <span class="inv-date">{{ nmPelanggan }}</span></div>
                                                                <div class="inv-created-date"><span class="inv-title">Alamat : </span> <span class="inv-date">{{ alamatPelanggan }}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div class="inv--product-table-section invoice-block" v-if="items.length > 0">
                                                    <div class="table-responsive">
                                                        <table class="invoice-items-table">
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns" :key="item.key" :class="[item.class]">
                                                                        {{ item.label }}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="item in items" :key="item.id">
                                                                    <td>{{ item.kdBarang }}</td>
                                                                    <td>{{ item.nmBarang }}</td>
                                                                    <td class="text-end">{{ Number(item.hrgJual).toLocaleString() }}</td>
                                                                    <td class="text-end">{{ item.qty }}</td>
                                                                    <td class="text-end">{{ item.satuanJual }}</td>
                                                                    <td class="text-end">{{ Number(item.totalJual).toLocaleString() }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="inv--product-table-section invoice-block" v-if="items_jasa.length > 0">
                                                    <div class="table-responsive">
                                                        <table class="invoice-items-table invoice-items-table--service">
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns_jasa" :key="item.key" :class="[item.class]">
                                                                        {{ item.label }}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="item in items_jasa" :key="item.id">
                                                                    <td>{{ item.kdJasa }}</td>
                                                                    <td>
                                                                        {{ item.nmJasa }}
                                                                        <p class="inv-email-address">{{ item.noteJasa }}</p>
                                                                    </td>
                                                                    <td class="text-end">{{ Number(item.biayaJasa).toLocaleString() }}</td>
                                                                    <td class="text-end">{{ item.qtyJasa }}</td>
                                                                    <td class="text-end">{{ Number(item.totalJasa).toLocaleString() }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                

                                                <div class="inv--total-amounts invoice-summary-block">
                                                    <div class="invoice-summary-row">
                                                        <div class="invoice-summary-col invoice-summary-col--notes">
                                                            <div class="invoice-bank-box">
                                                                <div class="inv-email-address">Rek BCA : 7724022244<br> An : Ni Putu Ita Liantika Oktia Dewi</div>
                                                                <div class="inv-email-address">Invoice ini sudah di ttd secara digital oleh Swamerta Supplier<br>Terima kasih</div>
                                                            </div>
                                                        </div>
                                                        <div class="invoice-summary-col invoice-summary-col--signature">
                                                            <div class="invoice-signature-box" v-if="ttdPenerima">
                                                                <div>Penerima,</div>
                                                                <img :src="ttdPenerima" alt="Tanda Tangan Penerima" class="invoice-signature-image" />
                                                                <div class="inv-email-address">{{ namaPenerima }}</div>
                                                            </div>
                                                        </div>
                                                        <div class="invoice-summary-col invoice-summary-col--totals">
                                                            <div class="invoice-total-box">
                                                                <div class="invoice-total-line">
                                                                    <span>Sub Total</span>
                                                                    <span>{{ formatNumber(subtotalBarang) }}</span>
                                                                </div>
                                                                <div class="invoice-total-line" v-if="items_jasa.length > 0">
                                                                    <span>Sub Total Jasa</span>
                                                                    <span>{{ formatNumber(subtotalJasa) }}</span>
                                                                </div>
                                                                <div class="invoice-total-line invoice-total-line--grand">
                                                                    <span>Grand Total</span>
                                                                    <span>{{ formatNumber(grandTotal) }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <Modal
                            v-model:visible="isVisible" 
                            :draggable="true" 
                            :title="'PENERIMA'"
                            :showCancelButton="false" 
                            :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                            :okButton="{text: 'SAVE', onclick: () => {simpanPenerima()}, loading: false}"
                            width="60%">

                                <div>
                                    <label for="namaPenerima" class="form-label">Nama Penerima</label>
                                    <input
                                        id="namaPenerima"
                                        v-model="namaPenerima"
                                        type="text"
                                        class="form-control"
                                        placeholder="Masukkan nama penerima"
                                        autocomplete="off"
                                    />
                                </div>
                                <Vue3Signature  ref="signature1" :sigOption="state.option" :w="'600px'" :h="'380px'"
                                                :disabled="state.disabled" class="example"></Vue3Signature>
                                <button @click="clear">Clear</button>
                                <button @click="undo">Undo</button>
                                <button @click="handleDisabled">disabled</button>
                            </Modal>

                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">

                                        
                        
                                        
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-primary btn-send" @click="openModal()">Penerima</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-secondary btn-print action-print" @click="printInvoice()">Print</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-success btn-download" @click="downloadWithCSS()">Download</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6" v-if="$store.state.auth.user && $store.state.auth.user === 'root'">
                                            <a href="javascript:;" class="btn btn-success btn-download" @click="downloadWithCSS()">Download Winmax</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <router-link :to="{ name: 'penjualan-barang', query: route.query }" class="btn btn-warning btn-print">Back</router-link>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, onMounted, ref, reactive, onBeforeMount, h } from 'vue';
    import '@/assets/sass/apps/invoice-preview.scss';

    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import html2canvas from "html2canvas"
    import html2pdf from 'html2pdf.js';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Invoice' });

    import { Modal } from 'usemodal-vue3';
    import Vue3Signature from "vue3-signature"
    import QrcodeVue from "qrcode.vue";



    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex';
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const items = ref([]);
    const items_jasa = ref([]);
    const columns = ref([]);
    const columns_jasa = ref([]);
    const nmPelanggan = ref('');
    const alamatPelanggan = ref('');
    const noNota = ref('');
    const tglNota = ref('');
    const discPenjualan = ref(0);
    const typeBayar = ref('');
    const termPenjualan = ref('');
    const namaPenerima = ref('');
    const isVisible = ref(false);
    const invoiceId = ref('');
    const ttdPenerima = ref();
    const jthTempo = ref();
    const isi = ref(null);

    const subtotalBarang = computed(() => items.value.reduce((sum, item) => sum + Number(item.totalJual || 0), 0));
    const subtotalJasa = computed(() => items_jasa.value.reduce((sum, item) => sum + Number(item.totalJasa || 0), 0));
    const grandTotal = computed(() => Number(subtotalBarang.value - Number(discPenjualan.value || 0)) + subtotalJasa.value);

    const formatNumber = (value) => Number(value || 0).toLocaleString();



    onMounted(() => {
        bind_data();
        getInvoiceDetails();
        // console.log(isi.value);
    });

    const getPdfOptions = () => ({
        margin: 0.35,
        filename: `invoice-${noNota.value || invoiceId.value || 'penjualan'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] },
    });

    const downloadWithCSS = () => {
        const element = document.getElementById('element-to-print');
        if (!element) {
            return;
        }
        html2pdf().set(getPdfOptions()).from(element).save();
    }
    
    onBeforeMount(() => {
        // You can add logic here if needed before the component is mounted
        invoiceId.value = store.getters.SetidNota
    });
    const bind_data = () => {
        columns.value = [
            { key: 'kdBarang', label: 'CODE' },
            { key: 'nmBarang', label: 'ITEMS' },
            { key: 'hrgJual', label: 'HARGA' },
            { key: 'qty', label: 'QTY', class: 'text-end' },
            { key: 'satuanJual', label: 'SATUAN', class: 'text-end' },
            { key: 'totalJual', label: 'AMOUNT', class: 'text-end' },
        ];
        columns_jasa.value = [
            { key: 'kdJasa', label: 'CODE' },
            { key: 'nmJasa', label: 'ITEMS' },
            { key: 'biayaJasa', label: 'HARGA' },
            { key: 'qtyjasa', label: 'QTY', class: 'text-end' },
            { key: 'totalJasa', label: 'AMOUNT', class: 'text-end' },
        ];
        // items.value = [
        //     { id: 1, title: 'Calendar App Customization', quantity: 1, price: '120', amount: '120' },
        //     { id: 2, title: 'Chat App Customization', quantity: 1, price: '230', amount: '230' },
        //     { id: 3, title: 'Laravel Integration', quantity: 1, price: '405', amount: '405' },
        //     { id: 4, title: 'Backend UI Design', quantity: 1, price: '2500', amount: '2500' },
        // ];
    };

    const printInvoice = () => {
        const element = document.getElementById('element-to-print');
        if (!element) {
            return;
        }

        const printWindow = window.open('', '_blank', 'noopener,noreferrer,width=1100,height=900');
        if (!printWindow) {
            return;
        }

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
                .invoice-summary-row { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: nowrap; gap: 16px; }
                .invoice-summary-col--notes { flex: 1 1 auto; min-width: 0; }
                .invoice-summary-col--signature { flex: 0 0 160px; }
                .invoice-summary-col--totals { flex: 0 0 260px; }
                .invoice-total-box { border-top: 1.5px solid #0f172a; padding-top: 6px; }
                .invoice-total-line { display: flex; justify-content: space-between; padding: 2px 0; }
                .invoice-total-line--grand { border-top: 1px solid #0f172a; margin-top: 3px; padding-top: 4px; font-weight: 700; }
                .invoice-signature-box { margin-top: 0; }
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
        
        // Logic to open the modal
        // console.log('Modal opened' + invoiceId.value);
        isVisible.value = true;
        
    };
    const state = reactive({
        count: 0,
        option: {
            penColor: "rgb(0, 0, 0)",
            backgroundColor: "rgb(255,255,255)"
        },
        disabled: false
    })
    const signature1 = ref(null)

    const save = (t) => {
    console.log(signature1.value.save(t))
    }

    const clear = () => {
    signature1.value.clear()
    }

    const undo = () => {
    signature1.value.undo();
    }

    const addWaterMark = () => {
    signature1.value.addWaterMark({
        text: "mark text",          // watermark text, > default ''
        font: "20px Arial",         // mark font, > default '20px sans-serif'
        style: 'all',               // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
        fillStyle: "red",           // fillcolor, > default '#333'
        strokeStyle: "blue",	       // strokecolor, > default '#333'
        x: 100,                     // fill positionX, > default 20
        y: 200,                     // fill positionY, > default 20
        sx: 100,                    // stroke positionX, > default 40
        sy: 200                     // stroke positionY, > default 40
    });
    }

    const handleDisabled = () => {
    state.disabled = !state.disabled
    }

    const simpanPenerima = () => {
        // Logic to save the recipient name
        store.dispatch('penerimaNota', {
            noNota: invoiceId.value,
            namaPenerima: namaPenerima.value,
            signature: signature1.value.save('image/jpeg')
        }).then((response) => {
            
            isVisible.value = false;
            getInvoiceDetails()
            
        }).catch((error) => {
            console.error('Error saving recipient name:', error);
        });
        // console.log('Recipient name saved:', namaPenerima.value + ' ' + invoiceId.value);
        
    };
    
    const getInvoiceDetails = async () => {
        try {
            // const response = await axios.get(`/api/invoices/${invoiceId.value}`);
            // const invoiceDetails = response.data;
            // items.value = invoiceDetails.items;
            console.log(invoiceId.value);
            await store.dispatch('GetDetailPenjualan', {noNota: invoiceId.value})
            .then((response) => {
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
            // console.log(nmPelanggan.value);
                console.log(response);
            }).catch((error) => {
                console.log(error);
                router.push({ name: 'penjualan-barang'});
            });

        } catch (error) {
            console.error('Error fetching invoice details:', error);
        }
    };

</script>
<style scoped>
.col-xl-9 {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
}

.invoice-paper-shell {
    background-color: #eef1f5;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    overflow-x: auto;
}

.invoice-container {
    background-color: #fff;
    width: 760px;
    flex: 0 0 auto;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08), 0 10px 30px rgba(15, 23, 42, 0.06);
    border-radius: 8px;
}

.invoice-inbox {
    padding: 32px 36px;
}

.invoice-hero-block {
    margin-bottom: 1.25rem;
}

.invoice-hero-grid {
    align-items: flex-start;
}

.invoice-company-meta,
.invoice-customer-card,
.invoice-bank-box,
.invoice-total-box,
.invoice-signature-box {
    font-size: 11px;
    overflow-wrap: break-word;
    word-break: break-word;
}

.invoice-customer-card {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
}

.invoice-block {
    margin-top: 1.5rem;
}

.invoice-items-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 9px;
    background: #fff;
}

.invoice-items-table thead th {
    padding: 7px 10px;
    font-size: 8.5px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-top: 1.5px solid #0f172a;
    border-bottom: 1.5px solid #0f172a;
    color: #0f172a;
    overflow-wrap: break-word;
}

.invoice-items-table tbody td {
    color: #1f2937;
    font-size: 9px;
    overflow-wrap: break-word;
    font-weight: 400;
    padding: 6px 10px;
    vertical-align: top;
}

.invoice-items-table tbody tr:not(:last-child) td {
    border-bottom: 1px solid #e5e7eb;
}

.invoice-items-table:not(.invoice-items-table--service) th:nth-child(1) { width: 16%; }
.invoice-items-table:not(.invoice-items-table--service) th:nth-child(2) { width: 26%; }
.invoice-items-table:not(.invoice-items-table--service) th:nth-child(3) { width: 16%; }
.invoice-items-table:not(.invoice-items-table--service) th:nth-child(4) { width: 10%; }
.invoice-items-table:not(.invoice-items-table--service) th:nth-child(5) { width: 14%; }
.invoice-items-table:not(.invoice-items-table--service) th:nth-child(6) { width: 18%; }

.invoice-items-table--service th:nth-child(1) { width: 16%; }
.invoice-items-table--service th:nth-child(2) { width: 36%; }
.invoice-items-table--service th:nth-child(3) { width: 18%; }
.invoice-items-table--service th:nth-child(4) { width: 10%; }
.invoice-items-table--service th:nth-child(5) { width: 20%; }

.invoice-summary-block {
    margin-top: 1.75rem;
}

.invoice-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 16px;
}

.invoice-summary-col--notes {
    flex: 1 1 auto;
    min-width: 0;
}

.invoice-summary-col--signature {
    flex: 0 0 160px;
    max-width: 100%;
}

.invoice-summary-col--totals {
    flex: 0 0 260px;
    max-width: 100%;
}

.invoice-bank-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.invoice-signature-box {
    margin-top: 0;
}

.invoice-signature-image {
    max-width: 100%;
    max-height: 100px;
}

.invoice-total-box {
    border-top: 1.5px solid #0f172a;
    padding-top: 8px;
}

.invoice-total-line {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 3px 0;
}

.invoice-total-line--grand {
    border-top: 1px solid #0f172a;
    margin-top: 4px;
    padding-top: 6px;
    font-weight: 700;
    font-size: 13px;
}

.invoice-actions-btn .btn,
.invoice-actions-btn a.btn {
    width: 100%;
}

.col-sm-41 {
    flex: 0 0 auto;
    width: 33.33333333%;
}

.text-sm-end {
    text-align: right !important;
}

@media print {
    :global(body) {
        background: #fff !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }

    :global(body *) {
        visibility: hidden !important;
    }

    :global(#element-to-print),
    :global(#element-to-print *) {
        visibility: visible !important;
    }

    :global(#element-to-print) {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
    }

    .layout-px-spacing,
    .row.invoice,
    .doc-container,
    .invoice-paper-shell,
    .invoice-container,
    .invoice-inbox,
    .content-section {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        background: #fff !important;
    }

    .content-section {
        padding: 0 4mm 0 4mm !important;
    }

    .inv--total-amounts {
        position: static !important;
        width: 100% !important;
        margin-top: 3mm !important;
        padding-top: 2mm !important;
        background: #fff !important;
    }

    .inv--product-table-section,
    .row {
        margin-bottom: 0 !important;
    }

    .inv-street-addr,
    .inv-email-address,
    .inv-created-date,
    .text-end {
        line-height: 1.2 !important;
    }

    .inv--product-table-section table,
    .inv--product-table-section th,
    .inv--product-table-section td {
        font-size: 10px !important;
    }

    .inv--product-table-section th,
    .inv--product-table-section td {
        padding-top: 3px !important;
        padding-bottom: 3px !important;
    }

    .invoice-items-table thead th,
    .invoice-items-table tbody td {
        padding-left: 8px !important;
        padding-right: 8px !important;
    }

    .col-sm-41 {
        padding-left: 2mm !important;
        padding-right: 2mm !important;
    }

    .invoice-00001 {
        width: 100% !important;
        page-break-inside: auto;
    }

    .table-responsive {
        overflow: visible !important;
    }

    table {
        width: 100% !important;
        page-break-inside: auto;
    }

    thead {
        display: table-header-group;
    }

    tr,
    img,
    svg {
        page-break-inside: avoid;
        page-break-after: auto;
    }

    .invoice-actions-btn,
    .btn,
    .modal,
    .modal-backdrop {
        display: none !important;
    }

    @page {
        size: A4 portrait;
        margin: 8mm;
    }
}

</style>
