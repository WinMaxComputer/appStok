<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Add</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row invoice layout-top-spacing layout-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title">
                                       
                                        <div class="invoice-title d-flex align-items-center gap-2 flex-wrap">
                                            <span>Invoice Pembelian</span>
                                            <span class="badge badge-outline-primary">Edit</span>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-header txn-block">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">

                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">No Nota</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.noNota" id="number" class="form-control form-control-sm" placeholder="#0001" disabled />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Tgl</label>
                                                        <div class="col-sm-9">
                                                            <flat-pickr v-model="params.tglNota" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-address" class="col-sm-3 col-form-label col-form-label-sm">Term</label>
                                                        <div class="col-sm-9">
                                                            <select id="inputState" v-model="params.term" class="form-select">
                                                                <option v-for="option in [{ value: '0', label: 'Cash' }, { value: '1', label: 'Kredit' }]" 
                                                                    :key="option.value" 
                                                                    :value="option.value">
                                                                    {{ option.label }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-phone" class="col-sm-3 col-form-label col-form-label-sm">Jatuh Tempo</label>
                                                        <div class="col-sm-9">
                                                            <flat-pickr v-model="params.jthTempo" class="form-control form-control-sm flatpickr active" placeholder="Due Date"></flat-pickr>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-5 invoice-address-client">

                                                <div class="invoice-address-client-fields">
                                                    <div class="form-group row">
                                                        <label for="client-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <multiselect 
                                                                v-model="paramssupplier" 
                                                                :options="pembelian.suppliers" 
                                                                :searchable="true"
                                                                :allow-empty="false"
                                                                track-by="nmSupplier"
                                                                label="nmSupplier"
                                                                open-direction="top"
                                                                placeholder="Choose..." 
                                                                selected-label="" 
                                                                select-label="" 
                                                                deselect-label="">
                                                            </multiselect>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="paramssupplier.almtSupplier" id="client-address" class="form-control form-control-sm" placeholder="XYZ Street" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="paramssupplier.tlpSupplier" id="client-phone" class="form-control form-control-sm" placeholder="(123) 456 789" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items txn-block">
                                        <div class="row g-2 align-items-end txn-entry-row txn-mobile-stack txn-entry-area">
                                            <div class="form-group col-xs-2">
                                                <label for="Inputqty">Barcode</label>
                                                <input type="text" ref="InputBarcode" v-model="barcode" class="form-control form-control-sm" placeholder="Barcode" @keyup.enter="addToCartB(barcode)" />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputCity">NAMA BARANG</label>
                                                <multiselect 
                                                    v-model="brg" 
                                                    :options="pembelian.barangs" 
                                                    :searchable="true"
                                                    @select="focusInput()"
                                                    track-by="nmPersediaan"
                                                    label="nmPersediaan"
                                                    open-direction="top"
                                                    placeholder="Choose..." 
                                                    selected-label="" 
                                                    select-label="" >
                                                </multiselect>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="InputHarga">HARGA</label>
                                                <input type="text" ref="InputHarga" v-model="brg.lastPrice" class="form-control form-control-sm" placeholder="Price" @keyup.enter="moveToQty()" @keypress="onlyNumber" />
                                            </div>
                                            <div class="form-group col-md-1">
                                                <label for="Inputqty">QTY</label>
                                                <input type="text" ref="Inputqty" v-model="qty" class="form-control form-control-sm" placeholder="Quantity" @keyup.enter="addToCart(brg)" @keypress="onlyNumber" />
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="satuan">SATUAN</label>
                                                <input type="text" v-model="brg.satuanPersediaan" class="form-control form-control-sm" id="satuan" />
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputZip">TOTAL</label><br>
                                                <!-- {{ new Intl.NumberFormat().format(brg.lastPrice * qty) }} -->
                                                <input type="text" v-model="tot" class="form-control form-control-sm" placeholder="Quantity" @keypress="onlyNumber" />
                                            </div>
                                            <div class="form-group col-sm-1 d-grid">
                                                <label for="aksi">Aksi</label>
                                                <button @click="addToCart(brg)" class="btn btn-primary btn-sm">
                                                    + 
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items txn-block">
                                        <div class="inv--product-table-section">
                                            <div class="table-responsive txn-table-wrap">
                                                <table class="table table-hover table-bordered item-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Nama Barang</th>
                                                            <th>Harga</th>
                                                            <th>Qty</th>
                                                            <th>Satuan</th>
                                                            <th>Total</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="item in cartItems" :key="item.kdBarang">
                                                            <td class="description">{{ item.nmBarang }}</td>
                                                            <td class="rate">{{ new Intl.NumberFormat().format(item.hrgPokok) }}</td>
                                                            <td class="description">
                                                                <input type="number" v-model="item.qty" style="min-width: 50px;" @keypress="onlyNumber" @keyup="updateItemQty(item.kdBarang, item.qty)" />
                                                            </td>
                                                            <td class="qty">{{ item.satuan }}</td>
                                                            <td class="amount">{{ new Intl.NumberFormat().format(item.total) }}</td>
                                                            <td class="tax">
                                                                <a href="javascript:;" @click="removeItem(id=item.kdBarang)">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-trash-2"
                                                                    >
                                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                                    </svg>
                                                                </a>
                                                                <!-- <div class="icon-container">
                                                                    <i data-feather="trash"></i><span class="icon-name"> trash</span>
                                                                </div> -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <!-- <button type="button" class="btn btn-secondary additem btn-sm" @click="add_item()">Add Item</button> -->
                                    </div>

                                    

                                    <div class="invoice-detail-total txn-block txn-summary-panel">
                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="invoice-actions-btn">
                                                    <div class="invoice-action-btn">
                                                        <div class="row">
                                                            <!-- <div class="col-sm-4">
                                                                <div v-if="divpajak">
                                                                    <a href="javascript:;" class="btn btn-primary btn-send" @click="taxRemove" >- pajak</a>
                                                                </div>
                                                                <div v-if="!divpajak">
                                                                    <a href="javascript:;" class="btn btn-primary btn-send" @click="taxSelected" >+ pajak</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <a href="javascript:;" @click="addPayment" class="btn btn-dark btn-preview" data-bs-toggle="modal" data-bs-target="#modalPayment">Pembayaran</a>
                                                            </div> -->
                                                            <div class="col-sm-4">
                                                                <!-- <a href="javascript:;" @click="simpanPembelian" class="btn btn-success btn-download">Save</a> -->
                                                                <a href="javascript:;" @click="openModal()" class="btn btn-success btn-download txn-payment-btn">PAYMENT</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="modal fade" id="modalPayment" tabindex="-1" role="dialog" aria-labelledby="modalPayment" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="modalPayment">Vertically Aligned</h5>
                                                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h4 class="modal-heading mb-4 mt-2">Aligned Center</h4>
                                                            <multiselect 
                                                                v-model="paramsacc" 
                                                                :options="pembelian.accs" 
                                                                :searchable="true"
                                                                track-by="name"
                                                                label="name"
                                                                open-direction="top"
                                                                placeholder="Choose..." 
                                                                selected-label="" 
                                                                select-label="" >
                                                            </multiselect>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                                            <button type="button" class="btn btn-primary">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-subtotal">
                                                        <div class="invoice-summary-label">Sub Total</div>
                                                         <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <div class="subtotal-amount"><span class="currency"></span><span class="amount">{{new Intl.NumberFormat().format(subtotal)}}</span></div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="invoice-totals-row invoice-summary-total">
                                                         <div class="invoice-summary-label">Disc</div>
                                                        <input type="text" v-model="params.disc" class="form-control form-control-sm" >%
                                                        <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <div class="total-amount"><span class="currency"></span><span>{{ new Intl.NumberFormat().format(Math.floor(subtotal * disc / 100)) }}</span></div>
                                                        </div>
                                                    </div> -->
                                                    <div v-show="divpajak">
                                                        <div class="invoice-totals-row invoice-summary-tax">
                                                            <div class="invoice-summary-label">Pajak</div>
                                                            <div class="invoice-summary-value">
                                                                <div class="tax-amount"><span class="currency"></span>
                                                                    <span>{{ new Intl.NumberFormat().format(Math.floor((subtotal - (subtotal * disc / 100)) * pembelian.pajak/100)) }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total</div>
                                                         <div class="invoice-summary-label"></div>
                                                         <input type="hidden" v-model="params.subtotal" />
                                                         <input type="hidden" v-model="params.tax" />
                                                        <input type="hidden" v-model="params.disc" />
                                                        <div class="invoice-summary-value">
                                                            <!-- <div class="balance-due-amount"> -->
                                                                <span>{{ new Intl.NumberFormat().format(Math.floor(total)) }}</span>
                                                            <!-- </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Modal 
                                        v-model:visible="isVisible" 
                                        :draggable="true" 
                                        :title="'PEMBAYARAN NOTA'"
                                        :showCancelButton="false" 
                                        :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                                        :okButton="{text: 'SAVE', onclick: () => {simpanPembelian()}, loading: false}"
                                        width="60%">
                                        
                                            <div class="col-md-12">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row ">
                                                        <div style="font-size: 20px;">
                                                            <div v-if="params.term === '0'">Cash</div>
                                                            <div v-else-if="params.term === '1'">Kredit</div>
                                                        </div>
                                                        <!-- <div class="invoice-summary-label"></div> -->
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount">
                                                                <span style="font-size: 30px;">{{ new Intl.NumberFormat().format(Math.floor(total)) }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" v-if="params.term === '0'">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row ">
                                                        <div style="font-size: 20px;">Method</div>
                                                        <!-- <div class="invoice-summary-label"></div> -->
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount">
                                                                <select v-model="paramsbayar.metodeBayar" class="form-select form-select-sm" >
                                                                    <option value="cash" selected>Cash</option>
                                                                    <option value="credit_card">Credit Card</option>
                                                                    <option value="bank_transfer">Bank Transfer</option>
                                                                    <option value="ewallet">E-Wallet</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </Modal>

                                    <div class="invoice-detail-note">
                                        <div class="row">
                                            <div class="col-md-12 align-self-center">
                                                <div class="form-group row invoice-note">
                                                    <label for="invoice-detail-notes" class="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                    <div class="col-sm-12">
                                                        <textarea
                                                            v-model="params.notes"
                                                            rows="3"
                                                            class="form-control"
                                                            placeholder='Notes - For example, "Thank you for doing business with us"'
                                                        ></textarea>
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
</template>

<style scoped>
.txn-block {
    background: #ffffff;
    border: 1px solid #e8edf5;
    border-radius: 12px;
    padding: 14px 14px 10px;
    margin-bottom: 14px;
}

.txn-entry-area {
    background: #f9fbff;
    border: 1px solid #edf2fa;
    border-radius: 10px;
    padding: 10px;
}

.txn-entry-row .form-group {
    margin-bottom: 0;
}

.txn-entry-row label {
    font-size: 12px;
    font-weight: 600;
    color: #495057;
    margin-bottom: 4px;
}

.txn-table-wrap {
    border: 1px solid #edf1f7;
    border-radius: 10px;
    overflow-x: auto;
}

.txn-table-wrap :deep(table) {
    margin-bottom: 0;
}

.txn-table-wrap :deep(thead th) {
    background: #f6f9ff;
}

.txn-summary-panel {
    background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
}

@media (max-width: 992px) {
    .txn-entry-area {
        padding: 10px 8px;
    }

    .txn-block {
        padding: 12px 10px 8px;
    }
}

@media (max-width: 767px) {
    .txn-mobile-stack .col-sm-1,
    .txn-mobile-stack .col-sm-2,
    .txn-mobile-stack .col-sm-3,
    .txn-mobile-stack .col-sm-4,
    .txn-mobile-stack .col-sm-6,
    .txn-mobile-stack .col-md-1,
    .txn-mobile-stack .col-md-2,
    .txn-mobile-stack .col-md-3,
    .txn-mobile-stack .col-md-4 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .txn-mobile-stack .form-control,
    .txn-mobile-stack :deep(.multiselect),
    .txn-mobile-stack .btn {
        min-height: 38px;
    }

    .txn-payment-btn {
        width: 100%;
    }
}
</style>

<script setup>
    // import { onMounted, ref } from 'vue';
    import '@/assets/sass/apps/invoice-add.scss';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

    import moment from "moment";
    import { Modal } from 'usemodal-vue3';

    import { computed, ref, onMounted, onBeforeMount, onUnmounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter, useRoute } from 'vue-router'

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Pembelian' });

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const items = ref([]);
    const cartItemsP = ref([])
    const brg = ref([]);
    const nopembelian = ref([]);
    const qty = ref(1);
    const Inputqty = ref(null);
    const InputHarga = ref(null);
    const tot = ref();
    const subtotal = ref();
    const total = ref();
    const disc = ref(0);
    const tax = ref();
    const selected_file = ref(null);
    const payment = ref([]);
    const isVisible = ref(false);
    const barcode = ref('');

    const params = ref({});
    const paramssupplier = ref({
    });
    const paramsacc = ref({
        noAcc: '',
        nmAcc: '',
        nilai: '',
        // tlpSupplier: '',

    });
    const paramsbayar = ref({
        noBayar: null,
        tglBayar: moment().format("YYYY-MM-DD"),
        jmlBayar: total,
        metodeBayar: 'cash',
    });
    const cartItems = ref([])
    const divpajak = ref(false)
    // const currency_list = ref([]);

    const pembelian = computed(() => {
        const barangs = store.getters.StatePersediaan;
        const suppliers = store.getters.StateSupplier;
        const accs = store.getters.StateAcc;
        nopembelian.value = store.getters.NoPembelian;
        const pajak = store.state.pajak;
        tot.value = brg.value.lastPrice * qty.value;
        // console.log(suppliers)
        return { barangs, pajak, suppliers, nopembelian, accs, tot }
    });

    const getBarang=() => {
        store.dispatch('GetPersediaan')
    }
    const getSupplier=() => {
        store.dispatch('GetSupplier')
    }
    const getNoPembelian=() => {
        store.dispatch('GetNoPembelian')
    }
    // const getAcc=() => {
    //     store.dispatch('GetAcc')
    // }
    const moveToQty = () => {
        Inputqty.value?.focus();
    };

    const focusInput = () => {
        setTimeout(() => {
            InputHarga.value?.focus();
        }, 0);
    };

    const openModal = () => {
        getNoPembayaran()
        // Logic to open the modal
        console.log('Modal opened');
        isVisible.value = true;
        
    };

    const toast = window.Swal.mixin({
        toast: true,
        position: 'top-center',
        showConfirmButton: false,
        timer: 3000,
        padding: '2em',
    });

    const showToast = (icon, title) => {
        toast.fire({
            icon,
            title,
            padding: '2em',
        });
    };

    const getNoPembayaran = async () => {
        await store.dispatch('GetNoBayarPembelian').then(() => {
            paramsbayar.value.noBayar = store.getters.NoBayarPembelian;
        });
    };

    const getCurrentCartItems = () => {
        return JSON.parse(localStorage.getItem('cartItemsP')) || [];
    };

    const setCurrentCartItems = (items) => {
        cartItems.value = Array.isArray(items) ? items : [];
        localStorage.setItem('cartItemsP', JSON.stringify(cartItems.value));
        return cartItems.value;
    };

    const normalizeDetailForSave = (rows) => {
        return (rows || [])
            .map((row) => {
                const qtyNum = Math.max(0, Number(row.qty || 0));
                const priceNum = Math.max(0, Number(row.hrgPokok || 0));
                return {
                    ...row,
                    qty: qtyNum,
                    hrgPokok: priceNum,
                    total: qtyNum * priceNum,
                };
            })
            .filter((row) => row.kdBarang && row.qty > 0 && row.hrgPokok >= 0);
    };


    const getTotal=() =>{
        const pajak = store.state.pajak;
        const temptotal = subtotal.value - (subtotal.value * disc.value / 100)
        total.value = (subtotal.value - (subtotal.value * disc.value / 100))
        tax.value = temptotal * pajak /100

        params.value.subtotal = subtotal.value
        params.value.tax = tax.value
        params.value.disc = disc.value
        params.value.total = total.value
        console.log('total :'+total.value)
        // return { total, tax}
    }
    const getTotalWtax=() =>{
        const pajak = store.state.pajak;
        const temptotal = subtotal.value - (subtotal.value * disc.value / 100)
        tax.value = temptotal * pajak /100
        total.value = (subtotal.value - (subtotal.value * disc.value / 100)) + tax.value
        params.value.subtotal = subtotal.value
        params.value.tax = tax.value
        params.value.disc = disc.value
        params.value.total = total.value
        
        console.log('total dengan pajak:'+tax.value)
        // return { tot }
    }

    function taxSelected() {
        const pajak = store.state.pajak;
        const temptotal = subtotal.value - (subtotal.value * disc.value / 100)
        // const temppajak = temptotal * pajak /100
        
        tax.value = temptotal * pajak /100
        total.value = total.value + tax.value
        // total.value = (subtotal.value - (subtotal.value * disc.value / 100)) + tax.value
        divpajak.value = true
        // console.log(tax.value)
        getTotalWtax()
        // console.log('total : '+ temptotal + 'pajak :'+temppajak)
    }

    function taxRemove() {
        const pajak = store.state.pajak;
        const temptotal = subtotal.value - (subtotal.value * disc.value / 100)
        // const temppajak = total.value * pajak /100
        
        tax.value = temptotal * pajak /100
        total.value = total.value - tax.value
        // total.value = (subtotal.value - (subtotal.value * disc.value / 100)) + tax.value
        divpajak.value = false
        // console.log(tax.value)
        getTotal()
        // console.log('total : '+ temptotal + 'pajak :'+temppajak)
    }

    const simpanPembelian=() => {
        const detail = normalizeDetailForSave(getCurrentCartItems())
        if (!detail.length) {
            showToast('warning', 'Detail pembelian kosong atau tidak valid');
            return
        }

        setCurrentCartItems(detail)
        getSubtotal()
        getTotal()

        const header = {
            ...params.value,
            subtotal: subtotal.value,
            tax: tax.value,
            disc: disc.value,
            total: total.value,
        }
        const headers = { ...paramssupplier.value }
        const headerfull = Object.assign(header, headers)
        const bayar = { ...paramsbayar.value, jmlBayar: total.value }
        store.dispatch('CreatePembelian', [headerfull, detail, bayar] )
        .then(response => {
            // console.log('result: ', response)
            getCart()
            getNoPembelian();
            isVisible.value = false;
            showToast('success', 'Pembelian berhasil diperbarui');
            router.push({ name: 'pembelian-persediaan' });
        })
        .catch(error => {
            // console.log('error: ', error)
            showToast('error', 'Gagal memperbarui pembelian');
            return
        })
    }

    onMounted( async () => {
        //set default data
        await store.dispatch('GetDetailPembelian', params.value)
        .then(response => {
            const arr = store.getters.SdetailPembelian;
            const brgArr = arr[1];
            for(let i = 0; i < brgArr.length; i++){
                cartItemsP.value.push({ 
                    // id: 1, 
                    kdBarang:brgArr[i].kdBarang, 
                    nmBarang:brgArr[i].nmBarang,
                    accid_persediaan:brgArr[i].accid_persediaan,
                    hrgPokok:brgArr[i].hrgBeli,
                    qty:brgArr[i].qty,
                    satuan:brgArr[i].satuanBarang,
                    total:brgArr[i].total,
                    is_tax: false 
                });
            };
            localStorage.setItem('cartItemsP', JSON.stringify(cartItemsP.value));
            
            paramssupplier.value.kdSupplier = store.getters.SdetailPembelian[0][0].kdSupplier;
            paramssupplier.value.nmSupplier = store.getters.SdetailPembelian[0][0].nmSupplier;
            paramssupplier.value.almtSupplier = store.getters.SdetailPembelian[0][0].almtSupplier;
            paramssupplier.value.tlpSupplier = store.getters.SdetailPembelian[0][0].tlpSupplier;        
        
            getBarang();
            // getAcc();
            getSupplier();
            getCart();
            // getNoPembelian();
            window.history.pushState(null, '', window.location.href);
            window.addEventListener('popstate', function (event) {
                window.history.pushState(null, '', window.location.href);
            });
        })
        .catch(error => {
            // console.log('error: ', error)
            
            // return
        })

        
    });

    onBeforeMount(() => {
        if (store.getters.SetEditNotaBeli[0] === undefined) {
            router.push({ name: 'pembelian-persediaan' });
        } else {
            params.value = {
                noNota: store.getters.SetEditNotaBeli[0].noNota,
                tglNota: store.getters.SetEditNotaBeli[0].tglNota, // moment().format("YYYY-MM-DD"),
                term: store.getters.SetEditNotaBeli[0].termPembelian,
                jthTempo: store.getters.SetEditNotaBeli[0].jthTempo,
                notes: store.getters.SetEditNotaBeli[0].note,
                subtotal: store.getters.SetEditNotaBeli[0].subTotal,
                tax: store.getters.SetEditNotaBeli[0].tax,
                disc: store.getters.SetEditNotaBeli[0].disc,
                total: store.getters.SetEditNotaBeli[0].total,
                termPembelian: store.getters.SetEditNotaBeli[0].termPembelian,
            }
        }
        
    })

    onUnmounted(() => {
        // window.onbeforeunload = null
        // alert('kal tutup')
        localStorage.setItem('cartItemsP', '[]');
    })

    const reset_form = () => {
        qty.value = 1;
        barcode.value = '';
        // brg.value = [];
        // items.value.push({ id: 1, title: '', description: '', rate: 0, quantity: 0, amount: 100, is_tax: false });

        // let dt = new Date();
        // params.value.invoice_date = JSON.parse(JSON.stringify(dt));
        // dt.setDate(dt.getDate() + 5);
        // params.value.due_date = dt;
    }

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    // const add_item = () => {
    //     let max_id = 0;
    //     if (items.value && items.value.length) {
    //         max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
    //     }
    //     items.value.push({ id: max_id + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0, is_tax: false });
    // };

    const remove_item = (item) => {
        items.value = items.value.filter((d) => d.id != item.id);
    };

    function addToCart(brg) {
        // console.log(brg)
        cartItems.value = getCurrentCartItems();
            const oldItems = cartItems.value;
            // console.log(oldItems)
            const existingItem = oldItems.find(({ kdBarang }) => kdBarang === brg.kdPersediaan);
            if (existingItem) {
                const objIndex = cartItems.value.findIndex((e => e.kdBarang === brg.kdPersediaan));
                if (objIndex < 0) {
                    return;
                }
                const oldName = cartItems.value[objIndex].nmBarang;
                const oldQty = Number(cartItems.value[objIndex].qty || 0);
                const oldTotal = Number(cartItems.value[objIndex].total || 0);
                const newQty = oldQty + Number(qty.value || 0);
                const newTotal = oldTotal + Number(qty.value || 0) * Number(brg.lastPrice || 0);
                cartItems.value[objIndex].qty = newQty;
                cartItems.value[objIndex].total = newTotal;
                setCurrentCartItems(cartItems.value);
                // alert(oldName+' Quantity Update')
                getCart();
                getTotal();
                reset_form();
                showToast('success', oldName + ' Quantity Update');
            }else{
                cartItems.value.push({
                    kdBarang:brg.kdPersediaan, 
                    nmBarang:brg.nmPersediaan,
                    accid_persediaan:brg.accid_persediaan,
                    hrgPokok:brg.lastPrice,
                    qty:Number(qty.value || 0),
                    satuan:brg.satuanPersediaan,
                    total:Number(qty.value || 0) * Number(brg.lastPrice || 0)
                });	
                setCurrentCartItems(cartItems.value);
                getCart();
                getTotal();
                reset_form();
                showToast('success', brg.nmPersediaan + ' berhasil disimpan');
            }
    }

    function addToCartB(barcode) {
        store.dispatch('CheckBarangExist', {kdBarang: barcode})
            .then((response) => {
                const brga = response.data.data;
                const found = pembelian.value.barangs.find(item => item.kdPersediaan === brga.kdBarang);
                if (found) {
                    brg.value = found;
                    focusInput();
                }

                if (!response.data.exist === true) {
                    showToast('error', 'Barang tidak ditemukan di database');
                }
            })
            .catch(() => {
                showToast('error', 'Terjadi kesalahan saat memeriksa barang');
            });
    }

    function updateItemQty (barcode, qty) {
        const cartItems = getCurrentCartItems();
        const objIndex = cartItems.findIndex((e => e.kdBarang === barcode));
        if (objIndex < 0) {
            return;
        }
        const newQty = Math.max(0, Number(qty || 0));
        cartItems[objIndex].qty = parseInt(newQty);
        cartItems[objIndex].total = Number(newQty) * Number(cartItems[objIndex].hrgPokok || 0);
        setCurrentCartItems(cartItems);
        //alert('Quantity Update')
        getCart();
        getTotal();
        // this.isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
    }

    function removeItem(id) {
        // alert(id)
        const filtered = getCurrentCartItems().filter((row) => row.kdBarang !== id);
        setCurrentCartItems(filtered);
        // cartItems.value.splice(index, 1)
        // this.isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
        getCart();
        // console.log(filtered)
        // alert(filtered.nmBarang)
    }

    function getCart() {
        // subtotal.value = []
        if (localStorage.getItem('cartItemsP')===null){
            cartItems.value = [];
            localStorage.setItem('cartItemsP', '[]');
            subtotal.value = 0
        }else{
            cartItems.value = getCurrentCartItems();
            getSubtotal();
            getTotal();
            
    // this.isicart = JSON.parse(localStorage.getItem('cartItemsP')).length;
        }

    }

    const addPayment = () => {
        payment.value = localStorage.setItem('payment', '[]');
        // alert('add payment')
    };

    function getSubtotal(){
        const allItems = getCurrentCartItems();
        let sum = 0;
        subtotal.value = 0
        for(let i = 0; i < allItems.length; i++){
        sum += Number(allItems[i].total || 0);
        }
        subtotal.value = sum
        // console.log(subtotal.value)
        // return sum;
    }
    function onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }   
    }
</script>
