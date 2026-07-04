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

                            <div class="invoice-container" id="element-to-print">
                                <div class="invoice-inbox" ref="isi">

                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                        
                                            <div class="content-section">


                                                <div class="inv--product-table-section">
                                                    <div class="row">

                                                        <div class="col-sm-41 me-auto">
                                                            <div class="d-flex">
                                                                <img class="company-logo" src="@/assets/images/wmax.png" alt="company" />
                                                                <!-- <h3 class="in-heading align-self-center">Cork Inc.</h3> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-41 text-sm-end"></div>
                                                        <div class="col-sm-41 text-sm-end">
                                                             <QRCodeVue3
                                                                :width="50"
                                                                :height="50"
                                                                value="{{ noNota }}"
                                                                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                                                                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                                                                :dotsOptions="{
                                                                    type: 'square',
                                                                    color: '#000',
                                                                    
                                                                }"
                                                                :backgroundOptions="{ color: '#ffffff' }"
                                                                />
                                                        </div>

                                                        <div class="col-sm-41 align-self-left">
                                                            <div class="inv-street-addr">Jln Jepun Bali No.10X Lukluk, Mengwi - Bali</div>
                                                            <div class="inv-email-address">info@winmaxbali</div>
                                                            <div class="inv-email-address">+6281 8688 114</div>
                                                            <div class="inv-email-address">Term: {{ typeBayar === '0' ? 'Cash' : 'Kredit' }} <span v-if="typeBayar === '1'">Tempo {{ new Date(jthTempo).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                        </div>
                                                        <div class="col-sm-41 text-sm-end"></div>
                                                        <div class="col-sm-41 text-sm-end">
                                                            <div class="inv-created-date"><span class="inv-title">Invoice : </span> <span class="inv-date">{{ noNota }}</span></div>
                                                            <div class="inv-created-date"><span class="inv-title">Invoice Date : </span> <span class="inv-date">{{ new Date(tglNota).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                            <div class="inv-created-date"><span class="inv-title">
                                                                Kpd : </span> <span class="inv-date">{{ nmPelanggan }}</span>
                                                            </div>
                                                            <div class="inv-created-date"><span class="inv-title">
                                                                Alamat : </span> <span class="inv-date">{{ alamatPelanggan }}</span>
                                                                
                                                            </div>
                                                            <!-- <p class="inv-due-date"><span class="inv-title">Alamat : </span> <span class="inv-date">Jln Kaswari no 77</span></p> -->
                                                        </div>
                                                    </div>


                                                </div>

                                                

                                                <div class="inv--product-table-section" v-if="items.length > 0">
                                                    <div class="table-responsive">
                                                        <table style="font-size: 11px;width: 100%;">
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns" :key="item.key" :class="[item.class]" style="padding: 9px 22px;font-size: 11px !important;border: none;border-top: 1px solid #000;border-bottom: 1px solid #000;">
                                                                        {{ item.label }}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody style="color: #000;font-size: 11px !important;font-weight: 300;border: none;padding: 10px 25px;vertical-align: top !important;">
                                                                <tr v-for="item in items" :key="item.id">
                                                                    <td>{{ item.kdBarang }}</td>
                                                                    <td>{{ item.nmBarang }}</td>
                                                                    <td class="text-end">{{ Number(item.hrgJual).toLocaleString() }}</td>
                                                                    <td class="text-end">{{ item.qty }}</td>
                                                                    <td class="text-end">{{ item.satuanBarang }}</td>
                                                                    <td class="text-end">{{ Number(item.totalJual).toLocaleString() }}</td>
                                                                </tr>
                                                            </tbody>
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns" :key="item.key" :class="[item.class]" style="padding: 9px 2px;font-size: 11px !important;border: none;border-top: 1px solid #000;">
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="inv--product-table-section" v-if="items_jasa.length > 0">
                                                    <div class="table-responsive">
                                                        <table style="font-size: 11px;width: 100%;">
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns_jasa" :key="item.key" :class="[item.class]" style="padding: 9px 22px;font-size: 11px !important;border: none;border-top: 1px solid #000;border-bottom: 1px solid #000;">
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
                                                            <thead>
                                                                <tr>
                                                                    <th v-for="item in columns_jasa" :key="item.key" :class="[item.class]" style="padding: 9px 22px;font-size: 11px !important;border: none;border-top: 1px solid #000;">
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>

                                                

                                                <div class="inv--total-amounts">
                                                    <div class="row">
                                                        <div class="col-sm-51">
                                                            <div class="inv-email-address">Rek BCA : 2360315331<br> An : I Nyoman Rihan Adi</div>
                                                            <div class="inv-email-address">Invoice ini sudah di ttd secara digital oleh WinMax Bali<br>Terima kasih</div>
                                                        </div>
                                                        <div class="col-sm-21" > 
                                                            <div v-if="ttdPenerima">Penerima,</div>
                                                            <img :src="ttdPenerima" alt="Tanda Tangan Penerima" style="max-width: 100%; max-height: 100px;" v-if="ttdPenerima" />
                                                            <div class="inv-email-address" v-if="ttdPenerima">{{ namaPenerima }}</div>
                                                        </div>
                                                        <div class="col-sm-41">
                                                           
                                                            <div class="text-sm-end">
                                                                <div class="row">
                                                                    <div class="col-sm-7 col-7">
                                                                        <div class="text-end">Sub Total:</div>
                                                                    </div>
                                                                    <div class="col-sm-5 col-6">
                                                                        <div class="text-end">{{ items.reduce((sum, item) => sum + Number(item.totalJual), 0).toLocaleString() }}</div>
                                                                    </div>

                                                                    <div class="col-sm-7 col-7" v-if="items_jasa.length > 0">
                                                                        <div class="text-end">Jasa:</div>
                                                                    </div>
                                                                    <div class="col-sm-5 col-6" v-if="items_jasa.length > 0">
                                                                        <div class="text-end">{{ items_jasa.reduce((sum, item) => sum + Number(item.totalJasa), 0).toLocaleString() }}</div>
                                                                    </div>
                                                                    <div class="col-sm-7 col-6">
                                                                        <div class="text-end">Total:</div>
                                                                    </div>
                                                                    <div class="col-sm-5 col-6">
                                                                        <div class="text-end">
                                                                            {{
                                                                                (
                                                                                    Number(
                                                                                        items.reduce((sum, item) => sum + Number(item.totalJual), 0) - Number(discPenjualan)
                                                                                    ) +
                                                                                    items_jasa.reduce((sum, item) => sum + Number(item.totalJasa), 0)
                                                                                ).toLocaleString()
                                                                            }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-7 col-6" v-if="typeBayar !== '0'">
                                                                        <div class="text-end">Payment :</div>
                                                                    </div>
                                                                    <div class="col-sm-5 col-6" v-if="typeBayar !== '0'">
                                                                        <div class="text-end">{{ sudahbayar.reduce((sum, item) => sum + Number(item.jmlBayar), 0).toLocaleString() }}</div>
                                                                    </div>

                                                                    <div class="col-sm-7 col-6" v-if="typeBayar !== '0'">
                                                                        <div class="text-end">Sisa :</div>
                                                                    </div>
                                                                    <div class="col-sm-5 col-6" v-if="typeBayar !== '0'">
                                                                        <div class="text-end">
                                                                            {{
                                                                                (
                                                                                    Number(
                                                                                        items.reduce((sum, item) => sum + Number(item.totalJual), 0) - Number(discPenjualan)
                                                                                    ) +
                                                                                    items_jasa.reduce((sum, item) => sum + Number(item.totalJasa), 0) -
                                                                                    sudahbayar.reduce((sum, item) => sum + Number(item.jmlBayar), 0)
                                                                                ).toLocaleString()
                                                                            }}
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
    import { onMounted, ref, reactive, onBeforeMount, h } from 'vue';
    import '@/assets/sass/apps/invoice-preview.scss';

    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import html2canvas from "html2canvas"
    import html2pdf from 'html2pdf.js';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Invoice' });

    import { Modal } from 'usemodal-vue3';
    import Vue3Signature from "vue3-signature"
    import QRCodeVue3 from "qrcode-vue3";



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
    const sudahbayar = ref([]);



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
            { key: 'satuanBarang', label: 'SATUAN', class: 'text-end' },
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
        html2pdf().set(getPdfOptions()).from(element).outputPdf('bloburl').then((blobUrl) => {
            const printWindow = window.open('', '_blank', 'noopener,noreferrer,width=1100,height=900');

            if (!printWindow) {
                return;
            }

            printWindow.document.write(`
                <html>
                    <head><title>Print Invoice</title></head>
                    <body style="margin:0;">
                        <iframe id="print-frame" src="${blobUrl}" style="border:0;width:100%;height:100vh;"></iframe>
                    </body>
                </html>
            `);
            printWindow.document.close();

            const triggerPrint = () => {
                printWindow.focus();
                printWindow.print();
            };

            setTimeout(triggerPrint, 1200);
        });
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
                sudahbayar.value = store.getters.SdetailPenjualan[3];
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
@media (min-width: 350px) {
  .col-sm-41 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .col-sm-51 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-21 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
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
    .invoice-container,
    .invoice-inbox,
    .content-section {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .invoice-container,
    .invoice-inbox,
    .content-section {
        box-shadow: none !important;
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

    .col-sm-41,
    .col-sm-51,
    .col-sm-21 {
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
