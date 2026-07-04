<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Penjualan</span></li>
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
                                       
                                        <div class="invoice-title">
                                            Invoice Penjualan
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
                                                                <option value="0" selected>Cash</option>
                                                                <option value="1">Kredit</option>
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
                                                        <label for="client-name" class="col-sm-3 col-form-label col-form-label-sm">Pelanggan</label>
                                                        <div class="col-sm-9">
                                                            <multiselect 
                                                                v-model="paramspelanggan" 
                                                                :options="penjualan.pelanggans" 
                                                                :searchable="true"
                                                                :allow-empty="false"
                                                                track-by="nmPelanggan"
                                                                label="nmPelanggan"
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
                                                            <input type="text" v-model="paramspelanggan.almtPelanggan" id="client-address" class="form-control form-control-sm" placeholder="XYZ Street" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="paramspelanggan.noHpPelanggan" id="client-phone" class="form-control form-control-sm" placeholder="(123) 456 789" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items txn-block">
                                        <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">BARANG</a>
                                            </li>
                                            <li class="nav-item" v-if="$store.state.auth.user === 'root'">
                                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">JASA</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="simpletabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="invoice-detail-items txn-entry-area">
                                                    <div class="row g-2 align-items-end txn-entry-row txn-mobile-stack">
                                                        <div class="form-group col-xs-2">
                                                            <label for="Inputqty">Barcode</label>
                                                            <input type="text" ref="InputBarcode" v-model="barcode" class="form-control form-control-sm" placeholder="Barcode" @keydown.enter="addToCartB(barcode)" />
                                                        </div>
                                                        
                                                        <div class="form-group col-md-3">
                                                            <label for="inputCity">NAMA BARANG</label>
                                                            <multiselect 
                                                                v-model="brg" 
                                                                :options="penjualan.barangs" 
                                                                :searchable="true"
                                                                @select="focusInput()"
                                                                track-by="nmBarang"
                                                                label="nmBarang"
                                                                open-direction="top"
                                                                placeholder="Choose..." 
                                                                selected-label="" 
                                                                select-label="" >
                                                            </multiselect>
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label for="inputState">HARGA</label>
                                                            <input type="number" v-model="brg.hrgJual" ref="InputHarga" class="form-control form-control-sm" placeholder="Price" @keydown.enter="moveToQty()" @keypress="onlyNumber" />
                                                        </div>
                                                        <div class="form-group col-md-1">
                                                            <label for="inputZip">QTY</label>
                                                            <input type="number" v-model="qty" ref="Inputqty" class="form-control form-control-sm" placeholder="Quantity" @keydown.enter="addToCart(brg)" @keypress="onlyNumber" />
                                                        </div>
                                                        <div class="form-group col-md-1">
                                                            <label for="inputZip">Disc</label>
                                                            <input type="number" v-model="disc" class="form-control form-control-sm" placeholder="Diskon" @keypress="onlyNumber" />
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label for="satuan">SATUAN</label>
                                                            <input type="text" v-model="brg.satuanBarang" class="form-control form-control-sm" id="satuan" />
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label for="inputZip">TOTAL</label><br>
                                                            <!-- {{ new Intl.NumberFormat().format(brg.hrgJual * qty) }} -->
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
                                            </div>
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div class="invoice-detail-items txn-entry-area">
                                                    <div class="row g-2 align-items-end txn-entry-row txn-mobile-stack">
                                                        <div class="form-group col-md-4">
                                                            <label for="inputCity">NAMA JASA</label>
                                                            <multiselect 
                                                                v-model="jsa" 
                                                                :options="penjualan.jasas" 
                                                                :searchable="true"
                                                                track-by="nmJasa"
                                                                label="nmJasa"
                                                                open-direction="top"
                                                                placeholder="Choose..." 
                                                                selected-label="" 
                                                                select-label="" >
                                                            </multiselect>
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label for="inputState">HARGA</label>
                                                            <input type="number" v-model="jsa.biayaJasa" class="form-control form-control-sm" placeholder="Price"  @keypress="onlyNumber" />
                                                        </div>
                                                        <div class="form-group col-sm-1">
                                                            <label for="inputZip">QTY</label>
                                                            <input type="number" v-model="qtyjasa" class="form-control form-control-sm" placeholder="Quantity" @keypress="onlyNumber" />
                                                        </div>
                                                        
                                                        <div class="form-group col-md-2">
                                                            <label for="inputZip">TOTAL</label><br>
                                                            <!-- {{ new Intl.NumberFormat().format(brg.hrgJual * qty) }} -->
                                                            <input type="number" v-model="totjasa" class="form-control form-control-sm" placeholder="Quantity" @keypress="onlyNumber" />
                                                        </div>
                                                        <div class="form-group col-md-1 d-grid">
                                                            <label for="aksi">Aksi</label>
                                                            <button @click="addToCartJasa(jsa)" class="btn btn-primary btn-sm">
                                                                + 
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-1">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputState">Note</label>
                                                            <textarea v-model="jsa.note" class="form-control form-control-sm" placeholder="Price" ></textarea>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div class="invoice-detail-items txn-block" >
                                        <div class="inv--product-table-section">
                                            <div class="table-responsive txn-table-wrap">
                                                <table class="table table-hover table-bordered item-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Detail Barang</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                        <tr>
                                                            <th>Nama Barang</th>
                                                            <th>Harga</th>
                                                            <th>Qty</th>
                                                            <th>Satuan</th>
                                                            <th>Diskon</th>
                                                            <th>Total</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="item in cartItemsPen" :key="item.kdBarang">
                                                            <td class="description">{{ item.nmBarang }}</td>
                                                            <td class="rate">{{ new Intl.NumberFormat().format(item.hrgJual) }}</td>
                                                            <td class="description">
                                                                <input type="number" v-model="item.qty" style="min-width: 50px;" @keypress="onlyNumber" @keyup="updateItemQty(item.kdBarang, item.qty)" />
                                                            </td>
                                                            <td class="qty">{{ item.satuan }}</td>
                                                            <td class="qty">{{ item.disc }} %</td>
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
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <!-- <button type="button" class="btn btn-secondary additem btn-sm" @click="add_item()">Add Item</button> -->
                                    </div>

                                    <div v-if="cartItemsPenJasa" class="invoice-detail-items txn-block" >
                                        <div class="inv--product-table-section">
                                            <div class="table-responsive txn-table-wrap">
                                                <table class="table table-hover table-bordered item-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Detail Jasa</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                        <tr>
                                                            <th>Code</th>
                                                            <th>Nama Jasa</th>
                                                            <th>Biaya</th>
                                                            <th>Qty</th>
                                                            <th>Total</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="itemjasa in cartItemsPenJasa" :key="itemjasa.kdJasa">
                                                            <td class="description">{{ itemjasa.kdJasa }}</td>
                                                            <td class="description">
                                                                {{ itemjasa.nmJasa }}
                                                                <p class="inv-email-address">{{ itemjasa.note }}</p>
                                                            </td>
                                                            <td class="rate">{{ new Intl.NumberFormat().format(itemjasa.biayaJasa) }}</td>
                                                            <td class="qty">{{ itemjasa.qtyjasa }}</td>
                                                            <td class="amount">{{ new Intl.NumberFormat().format(itemjasa.total) }}</td>
                                                            <td class="tax">
                                                                <button type="button" class="btn btn-secondary additem btn-sm" @click="removeItemJasa(id=itemjasa.kdJasa)">Hapus</button>
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
                                                                <button @click="openModal()" class="btn btn-success btn-download txn-payment-btn">PAYMENT</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-subtotal" >
                                                        <div class="invoice-summary-label">Sub Total</div>
                                                         <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <div class="subtotal-amount"><span class="currency"></span><span class="amount">{{new Intl.NumberFormat().format(subtotal)}}</span></div>
                                                        </div>
                                                    </div>
                                                    <div v-if="cartItemsPenJasa" class="invoice-totals-row invoice-summary-subtotal"  >
                                                        <div class="invoice-summary-label">Total Jasa</div>
                                                         <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <div class="subtotal-amount"><span class="currency"></span><span class="amount">{{new Intl.NumberFormat().format(subtotaljasa)}}</span></div>
                                                        </div>
                                                    </div>
                                                    <div v-show="divpajak">
                                                        <div class="invoice-totals-row invoice-summary-tax" >
                                                            <div class="invoice-summary-label">Pajak</div>
                                                            <div class="invoice-summary-value">
                                                                <div class="tax-amount"><span class="currency"></span>
                                                                    <span>{{ new Intl.NumberFormat().format(Math.floor( tax )) }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div >Total</div>
                                                         <!-- <div class="invoice-summary-label"></div> -->
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount"><span class="currency"></span>
                                                                <span>{{ new Intl.NumberFormat().format(Math.floor(total)) }}</span>
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
                                        :title="'PEMBAYARAN NOTA'"
                                        :showCancelButton="false" 
                                        :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                                        :okButton="{text: 'SAVE', onclick: () => {simpanPenjualan()}, loading: false}"
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
                                                                <select v-model="paramsbayar.metodeBayar" >
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
                                            <!-- <div class="col-md-12">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row ">
                                                        <div style="font-size: 17px;">Payment</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount">
                                                                <input type="number" v-model="paramsacc.nilai" placeholder="Payment Amount" @keypress="onlyNumber" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
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
                                                            id="invoice-detail-notes"
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
    import { computed, onMounted, ref, onBeforeMount } from 'vue';
    import '@/assets/sass/apps/invoice-add.scss';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { Modal } from 'usemodal-vue3';

    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

    import moment from "moment";

    import { useStore } from 'vuex';
    import { useRouter, useRoute } from 'vue-router'

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Penjualan' });

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const items = ref([]);
    const Inputqty = ref(null);
    const InputHarga = ref(null);
    const barcode = ref('');
    const brg = ref([]);
    const jsa = ref([]);
    const nopenjualan = ref([]);
    const qty = ref(1);
    const qtyjasa = ref(1);
    const subtotal = ref();
    const subtotaljasa = ref();
    const total = ref();
    const disc = ref(0);
    const tax = ref(0);
    const tot = ref();
    const totjasa = ref();
    const payment = ref([]);
    const params = ref({
        noNota: nopenjualan,
        tglNota: moment().format("YYYY-MM-DD"),
        term: '0',
        jthTempo: moment().format("YYYY-MM-DD"),
        notes: '',
        subtotal: subtotal,
        subtotaljasa: subtotaljasa,
        tax: tax,
        // disc: disc,
        total: total,
        paymentMethod: 'cash',
    });
    const paramspelanggan = ref({
        kdPelanggan: '',
        nmPelanggan: '',
        almtPelanggan: '',
        noHpPelanggan: '',

    });
    const paramsbayar = ref({
        noBayar: null,
        tglBayar: params.value.jthTempo,
        jmlBayar: total,
        metodeBayar: 'cash',
    });
    const paramsacc = ref({
        noAcc: '',
        nmAcc: '',
        nilai: '',
        // tlpSupplier: '',

    });

    const isVisible = ref(false);

    const cartItemsPen = ref([])
    const cartItemsPenJasa = ref([])
    const divpajak = ref(false)
    const unit = ref();
    // const newValue = ref()
    // const currency_list = ref([]);

    const penjualan = computed(() => {
        const barangs = store.getters.StateBarang;
        const jasas = store.getters.StateJasa;
        const pelanggans = store.getters.StatePelanggan;
        const accs = store.getters.StateAcc;
        nopenjualan.value = store.getters.NoPenjualan;
        tot.value = (brg.value.hrgJual * qty.value) - (brg.value.hrgJual * qty.value * disc.value / 100);
        totjasa.value = jsa.value.biayaJasa * qtyjasa.value;
        // const pajak = ref(store.state.pajak);
        // console.log(suppliers)
        return { barangs, jasas, pelanggans, nopenjualan, accs, tot, totjasa }
    });

    const moveToQty = () => {
        Inputqty.value?.focus();
    };
    const focusInput = () => {
        setTimeout(() => {
            console.log('Input focused after timeout');
            InputHarga.value?.focus();
        }, 0);
        
    };

    const getBarang=() => {
        store.dispatch('GetBarang')
        store.dispatch('GetJasa')
    }
    const getPelanggan=() => {
        store.dispatch('GetPelanggan')
    }
    const getNoPenjualan=() => {
        store.dispatch('GetNoPenjualan').then(() => {
            nopenjualan.value = store.getters.NoPenjualan;
        });
    }
    const getNoPembayaran = async () => {
        await store.dispatch('GetNoBayarPenjualan').then(() => {
            paramsbayar.value.noBayar = store.getters.NoBayarPenjualan;
        });
    };
    const getAcc=() => {
        store.dispatch('GetAcc')
    }


    const getTotal=() =>{
        const pajak = store.state.pajak;
        const temptotal = subtotal.value 
        total.value = parseFloat(subtotal.value) + parseFloat(subtotaljasa.value)
        tax.value = subtotal.value * pajak /100
        console.log('total tanpa pajak :'+tax.value)
        // return { tot }
    }
    const getTotalWtax=() =>{
        const pajak = store.state.pajak;
        const temptotal = subtotal.value ;
        tax.value = temptotal * pajak /100
        total.value = subtotal.value  + tax.value
        
        
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

    const simpanPenjualan=() => {
        const header =params.value
        const headers =paramspelanggan.value
        const bayar = paramsbayar.value
        const headerfull = Object.assign(header, headers)
        const detail =cartItemsPen.value;
        const detailjasa =cartItemsPenJasa.value;
        const edit = { editid: 0};
        store.dispatch('CreatePenjualan', [headerfull,detail,detailjasa,bayar,edit])
        .then(response => {
            if(response.status == 200){
                total.value = 0
                subtotal.value = 0
                tax.value = 0
                getCart(); 
                getCartJasa();
                getNoPenjualan();
                total.value = 0
                divpajak.value = false
                
                store.commit('setIdnota', response.data.data )
                router.push({ name: 'invoice-penjualan' });
            }
            console.log(response.data)
        }).catch(error => {
            console.log('error: ', error)
            return
        })
    }

    onMounted(() => {
        divpajak.value = false
        // console.log('on mount page penjualan')
        document.addEventListener('keydown', (event) => {
            if (event.key === 'F2') {
                event.preventDefault();
                openModal();
            }
        });
        getBarang();
        // getAcc();
        getPelanggan();
        getCart();
        getCartJasa();
        getNoPenjualan();
        getTotal();  
        // getNoPembayaran();
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, '', window.location.href);
        });
    });

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

    const showConfirm = async (text) => {
        const result = await window.Swal.fire({
            title: 'Konfirmasi',
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Lanjut',
            cancelButtonText: 'Batal',
            padding: '2em',
        });

        return result.isConfirmed;
    };

    // const change_file = (event) => {
    //     selected_file.value = URL.createObjectURL(event.target.files[0]);
    // };

    // const add_item = () => {
    //     let max_id = 0;
    //     if (items.value && items.value.length) {
    //         max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
    //     }
    //     items.value.push({ id: max_id + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0, is_tax: false });
    // };

    // const remove_item = (item) => {
    //     items.value = items.value.filter((d) => d.id != item.id);
    // };

    function addToCart(brg) {
        store.dispatch('CheckBarangExist', {kdBarang: brg.kdBarang})
            .then(async (response) => {
                // console.log(response.data);
                const brgasli = response.data.data;
                
                if (brgasli.stokPersediaan < qty.value) {
                    const isConfirmed = await showConfirm('Stok barang kurang');
                    if (!isConfirmed) {
                        return;
                    }
                    // alert('Barang kurang dari 1')
                }else{
                    if (localStorage.getItem('cartItemsPen')===null){
                        cartItemsPen.value = [];
                        // console.log(cartItems.value)
                    }else{
                        cartItemsPen.value = JSON.parse(localStorage.getItem('cartItemsPen'));
                    }
                    const oldItems = JSON.parse(localStorage.getItem('cartItemsPen')) || [];
                    // console.log(oldItems)
                    const existingItem = oldItems.find(({ kdBarang }) => kdBarang === brg.kdBarang);
                    if (existingItem) {
                        
                        const objIndex = cartItemsPen.value.findIndex((e => e.kdBarang === brg.kdBarang));
                        const oldName = cartItemsPen.value[objIndex].nmBarang;
                        const oldQty = cartItemsPen.value[objIndex].qty;
                        const oldTotal = cartItemsPen.value[objIndex].total;
                        const oldTotalHpp = cartItemsPen.value[objIndex].totalhpp;
                        const newQty = parseInt(oldQty) + parseInt(qty.value) ;
                        if (newQty > brgasli.stokPersediaan) {
                            const toast = window.Swal.mixin({
                                toast: true,
                                position: 'top-center',
                                showConfirmButton: false,
                                timer: 3000,
                                padding: '2em',
                            });
                            toast.fire({
                                icon: 'error',
                                title: 'Quantity dijual melebihi stok persediaan',
                                padding: '2em',
                            });
                            return;
                        }
                        const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.hrgJual) ;
                        const newTotalHpp = parseInt(oldTotalHpp) + parseInt(qty.value * brg.hrgPokok) ;
                        cartItemsPen.value[objIndex].qty = parseInt(newQty);
                        cartItemsPen.value[objIndex].total = parseInt(newTotal);
                        cartItemsPen.value[objIndex].totalhpp = parseInt(newTotalHpp);
                        localStorage.setItem('cartItemsPen',JSON.stringify(cartItemsPen.value));
                        const toast = window.Swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 3000,
                            padding: '2em',
                        });
                        toast.fire({
                            icon: 'success',
                            title: oldName + ' Quantity Update',
                            padding: '2em',
                        });
                        getCart();
                        getTotal()
                        // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
                    }else{
                        cartItemsPen.value.push({
                            kdBarang:brg.kdBarang, 
                            nmBarang:brg.nmBarang,
                            accid:brg.accid,
                            accid_persediaan:brg.accid_persediaan,
                            accid_hpp:brg.accid_hpp,
                            hrgJual:brg.hrgJual,
                            accid:brg.accid,
                            accid_persediaan:brg.accid_persediaan,
                            qty:qty.value,
                            satuan:brg.satuanBarang,
                            total:(qty.value * brg.hrgJual) - (qty.value * brg.hrgJual * disc.value / 100),
                            disc:disc.value,
                            totalhpp:qty.value * brg.hrgPokok, 
                            kategori:brg.ktgBarang
                        });	
                        localStorage.setItem('cartItemsPen',JSON.stringify(cartItemsPen.value));
                        getCart();
                        getTotal()
                        // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
                        const toast = window.Swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 3000,
                            padding: '2em',
                        });
                        toast.fire({
                            icon: 'success',
                            title: brg.nmBarang + " berhasil disimpan",
                            padding: '2em',
                        });
                    }
                }

            }
        )
            
    }

    function addToCartB(barcode) {
        store.dispatch('CheckBarangExist', {kdBarang: barcode})
            .then(async (response) => {
                // console.log(response.data);
                const brg = response.data.data;
                if (brg.stokPersediaan < 1) {
                    const isConfirmed = await showConfirm('Stok barang kurang dari 1. Jika dilanjutkan akan mempengaruhi perhitungan laba rugi.');
                    if (!isConfirmed) {
                        return;
                    }
                    // alert('Barang kurang dari 1')
                    
                    
                }else{
                    // alert('Barang ada')
                    const toast = window.Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 3000,
                        padding: '2em',
                    });
                    toast.fire({
                        icon: 'success',
                        title: ' Stok barang mencukupi',
                        padding: '2em',
                    });
                }
                // console.log(brg)
                if (localStorage.getItem('cartItemsPen')===null){
                    cartItemsPen.value = [];
                    // console.log(cartItems.value)
                }else{
                    cartItemsPen.value = JSON.parse(localStorage.getItem('cartItemsPen'));
                }
                    const oldItems = JSON.parse(localStorage.getItem('cartItemsPen')) || [];
                    // console.log(oldItems)
                    const existingItem = oldItems.find(({ kdBarang }) => kdBarang === brg.kdBarang);
                    if (existingItem) {
                        const objIndex = cartItemsPen.value.findIndex((e => e.kdBarang === brg.kdBarang));
                        const oldName = cartItemsPen.value[objIndex].nmBarang;
                        const oldQty = cartItemsPen.value[objIndex].qty;
                        const oldTotal = cartItemsPen.value[objIndex].total;
                        const oldTotalHpp = cartItemsPen.value[objIndex].totalhpp;
                        const newQty = parseInt(oldQty) + parseInt(qty.value) ;
                        if (newQty > brg.stokPersediaan) {
                            const toast = window.Swal.mixin({
                                toast: true,
                                position: 'top-center',
                                showConfirmButton: false,
                                timer: 3000,
                                padding: '2em',
                            });
                            toast.fire({
                                icon: 'error',
                                title: 'Quantity dijual melebihi stok persediaan',
                                padding: '2em',
                            });
                            return;
                        }
                        const newTotal = parseInt(oldTotal) + parseInt(qty.value * brg.hrgJual) ;
                        const newTotalHpp = parseInt(oldTotalHpp) + parseInt(qty.value * brg.hrgPokok) ;
                        cartItemsPen.value[objIndex].qty = parseInt(newQty);
                        cartItemsPen.value[objIndex].total = parseInt(newTotal);
                        cartItemsPen.value[objIndex].totalhpp = parseInt(newTotalHpp);
                        localStorage.setItem('cartItemsPen',JSON.stringify(cartItemsPen.value));
                        const toast = window.Swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 3000,
                            padding: '2em',
                        });
                        toast.fire({
                            icon: 'success',
                            title: oldName + ' Quantity Update',
                            padding: '2em',
                        });
                        getCart();
                        getTotal()
                        reset_form();
                        // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
                    }else{
                    cartItemsPen.value.push({
                        kdBarang:brg.kdBarang, 
                        nmBarang:brg.nmBarang,
                        accid:brg.accid,
                        accid_persediaan:brg.accid_persediaan,
                        accid_hpp:brg.accid_hpp,
                        hrgJual:brg.hrgJual,
                        accid:brg.accid,
                        accid_persediaan:brg.accid_persediaan,
                        qty:qty.value,
                        satuan:brg.satuanBarang,
                        total:(qty.value * brg.hrgJual) - (qty.value * brg.hrgJual * disc.value / 100),
                        disc:disc.value,
                        totalhpp:qty.value * brg.hrgPokok, 
                        kategori:brg.ktgBarang
                    });	
                    localStorage.setItem('cartItemsPen',JSON.stringify(cartItemsPen.value));
                    getCart();
                    getTotal();
                    reset_form();
                    // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
                    const toast = window.Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 3000,
                        padding: '2em',
                    });
                    toast.fire({
                        icon: 'success',
                        title: brg.nmBarang + " berhasil disimpan",
                        padding: '2em',
                    });
                }
            })
            .catch(() => {
                const toast = window.Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 3000,
                    padding: '2em',
                });
                toast.fire({
                    icon: 'error',
                    title: 'Barang tidak ditemukan di database',
                    padding: '2em',
                });
            });
    }

    function addToCartJasa(jsa) {
        // console.log(brg)
        if (localStorage.getItem('cartItemsPenJasa')===null){
            cartItemsPenJasa.value = [];
            // console.log(cartItems.value)
        }else{
            cartItemsPenJasa.value = JSON.parse(localStorage.getItem('cartItemsPenJasa'));
        }
            const oldItems = JSON.parse(localStorage.getItem('cartItemsPenJasa')) || [];
            // console.log(oldItems)
            const existingItem = oldItems.find(({ kdJasa }) => kdJasa === jsa.kdJasa);
            if (existingItem) {
                const objIndex = cartItemsPenJasa.value.findIndex((e => e.kdJasa === jsa.kdJasa));
                const oldName = cartItemsPenJasa.value[objIndex].nmJasa;
                const oldQty = cartItemsPenJasa.value[objIndex].qtyjasa;
                const oldTotal = cartItemsPenJasa.value[objIndex].total;
                const newQty = parseInt(oldQty) + parseInt(qtyjasa.value) ;
                const newTotal = parseInt(oldTotal) + parseInt(qtyjasa.value * jsa.biayaJasa) ;
                cartItemsPenJasa.value[objIndex].qtyjasa = parseInt(newQty);
                cartItemsPenJasa.value[objIndex].total = parseInt(newTotal);
                localStorage.setItem('cartItemsPenJasa',JSON.stringify(cartItemsPenJasa.value));
                showToast('success', oldName + ' Quantity Update')
                getCartJasa();
                getTotal()
                // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
            }else{
                cartItemsPenJasa.value.push({
                    kdJasa:jsa.kdJasa, 
                    nmJasa:jsa.nmJasa,
                    accid:jsa.accid,
                    accid_jasa:jsa.accid_jasa,
                    biayaJasa:jsa.biayaJasa,
                    qtyjasa:qtyjasa.value,
                    total:qtyjasa.value * jsa.biayaJasa,
                    note:jsa.note
                });	
                localStorage.setItem('cartItemsPenJasa',JSON.stringify(cartItemsPenJasa.value));
                getCartJasa();
                getTotal();
                // isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
                showToast('success', jsa.nmJasa + ' berhasil disimpan')
            }
    }

    function updateItemQty (barcode, qty) {
        // console.log(barcode, qty)
        const barangData = penjualan.value.barangs.find(item => item.kdBarang === barcode);
        const cartItems = JSON.parse(localStorage.getItem('cartItemsPen'));
        const objIndex = cartItems.findIndex((e => e.kdBarang === barcode));
        const newQty = parseInt(qty) ;
        if (newQty > barangData.stokPersediaan) {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top-center',
                showConfirmButton: false,
                timer: 3000,
                padding: '2em',
            });
            toast.fire({
                icon: 'error',
                title: 'Quantity dijual melebihi stok persediaan',
                padding: '2em',
            });
            return;
        }
        const hpp1 = cartItems[objIndex].totalhpp / cartItems[objIndex].qty ;
        cartItems[objIndex].qty = parseInt(newQty);
        cartItems[objIndex].total = parseInt(newQty * cartItems[objIndex].hrgJual);
        cartItems[objIndex].totalhpp = parseInt(newQty * hpp1);
        localStorage.setItem('cartItemsPen',JSON.stringify(cartItems));
        //alert('Quantity Update')
        getCart();
        getTotal();
        // this.isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
    }

    function removeItem(id) {
        // alert(id)
        const arrayFromStroage = JSON.parse(localStorage.getItem('cartItemsPen'));
        const filtered = arrayFromStroage.filter(arrayFromStroage => arrayFromStroage.kdBarang !== id);
        localStorage.setItem('cartItemsPen', JSON.stringify(filtered));
        // cartItems.value.splice(index, 1)
        // this.isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
        getCart();
        getTotal();
        // subtotal.value = 0
        // total.value = 0
        // console.log(filtered)
    }
    function removeItemJasa(id) {
        // alert(id)
        const arrayFromStroage = JSON.parse(localStorage.getItem('cartItemsPenJasa'));
        const filtered = arrayFromStroage.filter(arrayFromStroage => arrayFromStroage.kdJasa !== id);
        localStorage.setItem('cartItemsPenJasa', JSON.stringify(filtered));
        // cartItems.value.splice(index, 1)
        // this.isicart = Object.keys(JSON.parse(localStorage.getItem('cartItemsP'))).length;
        getCartJasa();
        getTotal();
        // subtotal.value = 0
        // total.value = 0
    }
    function getCart() {
        // subtotal.value = []
        if (localStorage.getItem('cartItemsPen')===null){
            cartItemsPen.value = localStorage.setItem('cartItemsPen', '[]');
            // subtotal.value = 0
            // total.value = 0
        }else if(localStorage.getItem('cartItemsPen')==='[]'){
            // alert('masi kosong')
            cartItemsPen.value = localStorage.setItem('cartItemsPen', '[]');
            getTotal();
            subtotal.value = 0
            total.value = 0
            tax.value = 0
        }else{
            cartItemsPen.value = JSON.parse(localStorage.getItem('cartItemsPen'));
            getSubtotal();
            getTotal();
            
    // this.isicart = JSON.parse(localStorage.getItem('cartItemsP')).length;
        }

    }
    function getCartJasa() {
        // subtotal.value = []
        if (localStorage.getItem('cartItemsPenJasa')===null){
            cartItemsPenJasa.value = localStorage.setItem('cartItemsPenJasa', '[]');
            // subtotal.value = 0
            // total.value = 0
        }else if(localStorage.getItem('cartItemsPenJasa')==='[]'){
            // alert('masi kosong')
            cartItemsPenJasa.value = localStorage.setItem('cartItemsPenJasa', '[]');
            getTotal();
            subtotaljasa.value = 0
            total.value = 0
            tax.value = 0
        }else{
            cartItemsPenJasa.value = JSON.parse(localStorage.getItem('cartItemsPenJasa'));
            getSubtotal();
            getTotal();
            
    // this.isicart = JSON.parse(localStorage.getItem('cartItemsP')).length;
        }

    }

    const addPayment = () => {
        payment.value = localStorage.setItem('payment', '[]');
        // alert('add payment')
    };
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

    function getSubtotal(){
        const allItems = JSON.parse(localStorage.getItem('cartItemsPen')) || [];
        const allItemsJasa = JSON.parse(localStorage.getItem('cartItemsPenJasa')) || [];
        let sum = 0;
        let sumjasa = 0;
        subtotal.value = 0
        for(let i = 0; i < allItems.length; i++){
            sum += (parseFloat(allItems[i].total));
        }
        subtotal.value = sum;

        subtotaljasa.value = 0
        for(let i = 0; i < allItemsJasa.length; i++){
            sumjasa += (parseFloat(allItemsJasa[i].total));
        };
        subtotaljasa.value = sumjasa;
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


