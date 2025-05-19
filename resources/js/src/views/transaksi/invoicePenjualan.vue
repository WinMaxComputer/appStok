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


                                                <div class="inv--head-section">
                                                    <div class="row">

                                                        <div class="col-sm-4 col-12 me-auto">
                                                            <div class="d-flex">
                                                                <img class="company-logo" src="@/assets/images/wm.png" alt="company" />
                                                                <!-- <h3 class="in-heading align-self-center">Cork Inc.</h3> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4 text-sm-end"></div>
                                                        <div class="col-sm-4 text-sm-end">
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

                                                        <div class="col-sm-4 align-self-center">
                                                            <div class="inv-street-addr">Jln Raya Kutuh No.8 Tabanan - Bali</div>
                                                            <div class="inv-email-address">info@the-swand.com</div>
                                                            <div class="inv-email-address">+6285 9361 00511</div>
                                                            <div class="inv-email-address">Term: {{ typeBayar === '0' ? 'Cash' : 'Kredit' }} <span v-if="typeBayar === '1'">Tempo {{ new Date(jthTempo).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                        </div>
                                                        <div class="col-sm-4 text-sm-end"></div>
                                                        <div class="col-sm-4 align-self-center text-sm-end">
                                                            <div class="inv-created-date"><span class="inv-title">Invoice : </span> <span class="inv-date">{{ noNota }}</span></div>
                                                            <div class="inv-created-date"><span class="inv-title">Invoice Date : </span> <span class="inv-date">{{ new Date(tglNota).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span></div>
                                                            <div class="inv-created-date"><span class="inv-title">
                                                                Kpd : </span> <span class="inv-date">{{ nmPelanggan }}</span>
                                                                {{ alamatPelanggan }}
                                                            </div>
                                                            <!-- <p class="inv-due-date"><span class="inv-title">Alamat : </span> <span class="inv-date">Jln Kaswari no 77</span></p> -->
                                                        </div>
                                                    </div>


                                                </div>

                                                

                                                <div class="inv--product-table-section" v-if="items.length > 0">
                                                    <div class="table-responsive">
                                                        <table class="table">
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
                                                                    <td class="text-end">{{ item.satuanBarang }}</td>
                                                                    <td class="text-end">{{ Number(item.totalJual).toLocaleString() }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="inv--product-table-section" v-if="items_jasa.length > 0">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
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

                                                

                                                <div class="inv--total-amounts">
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <div class="inv-email-address">Rek BCA : 7724022244<br> An : Ni Putu Ita Liantika Oktia Dewi</div>
                                                            <div class="inv-email-address">Invoice ini sudah di ttd secara digital oleh Swamerta Supplier<br>Terima kasih</div>
                                                        </div>
                                                        <div class="col-sm-2" > 
                                                            <div v-if="ttdPenerima">Penerima,</div>
                                                            <img :src="ttdPenerima" alt="Tanda Tangan Penerima" style="max-width: 100%; max-height: 100px;" v-if="ttdPenerima" />
                                                            <div class="inv-email-address" v-if="ttdPenerima">{{ namaPenerima }}</div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                           
                                                            <div class="text-sm-end">
                                                                <div class="row">
                                                                    <div class="col-sm-8 col-7">
                                                                        <div class="text-end">Sub Total:</div>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5">
                                                                        <div class="text-end">{{ items.reduce((sum, item) => sum + Number(item.totalJual), 0).toLocaleString() }}</div>
                                                                    </div>

                                                                    <div v-if="items_jasa.length > 0">
                                                                        <div class="col-sm-8 col-7" >
                                                                            <div class="discount-rate">Sub Total Jasa</div>
                                                                        </div>
                                                                        <div class="col-sm-4 col-5">
                                                                            <div class="text-end">{{ items_jasa.reduce((sum, item) => sum + Number(item.totalJasa), 0).toLocaleString() }}</div>
                                                                        </div>
                                                                    </div>
                                                                    

                                                                    <div class="col-sm-8 col-7">
                                                                        <div class="text-end">Grand Total :</div>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5">
                                                                        <div class="text-end">{{ (Number( items.reduce((sum, item) => sum + Number(item.totalJual), 0) - Number(discPenjualan)) +  items_jasa.reduce((sum, item) => sum + Number(item.totalJasa), 0)).toLocaleString() }}</div>
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
                                            <a href="javascript:;" class="btn btn-secondary btn-print action-print" @click="print()">Print</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <a href="javascript:;" class="btn btn-success btn-download" @click="downloadWithCSS()">Download</a>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <router-link to="/laporan/penjualan-barang" class="btn btn-warning btn-print">Back</router-link>
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
    import * as html2pdf from 'html2pdf.js';

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



    onMounted(() => {
        bind_data();
        getInvoiceDetails();
        // console.log(isi.value);
    });

    const downloadWithCSS = () => {
        const doc = new jsPDF();
        /** WITH CSS */
        // var canvasElement = document.createElement('canvas');
        // // console.log(canvasElement)
        // html2canvas(isi.value, { canvas: canvasElement, scale: 1 }).then(function (canvas) {
        //     const img = canvas.toDataURL("image/jpeg", 0.5);
        //     doc.addImage(img,'JPEG', 0, 0, 210, 297);
        //     doc.save("sample.pdf");
        // });

        var element = document.getElementById('element-to-print');
        var opt = {
        margin:       0.5,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
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
            { key: 'satuanBarang', label: 'Satuan', class: 'text-end' },
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

    const print = () => {
        window.print();
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
