<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Transaksi</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Pendapatan Sewa Inventaris</span></li>
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
                                        <div class="invoice-title">Pendapatan Sewa Inventaris</div>
                                    </div>

                                    <div class="invoice-detail-header">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">
                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label class="col-sm-4 col-form-label col-form-label-sm">No Dokumen</label>
                                                        <div class="col-sm-8">
                                                            <input type="text" v-model="params.noSewa" class="form-control form-control-sm" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-sm-4 col-form-label col-form-label-sm">Tanggal</label>
                                                        <div class="col-sm-8">
                                                            <flat-pickr v-model="params.tglSewa" class="form-control form-control-sm flatpickr active" placeholder="Tanggal Sewa"></flat-pickr>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-5">
                                                <div class="form-group row">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Inventaris</label>
                                                    <div class="col-sm-8">
                                                        <multiselect
                                                            v-model="selectedInv"
                                                            :options="inventarisList"
                                                            :searchable="true"
                                                            :allow-empty="false"
                                                            track-by="kode_inventaris"
                                                            label="nama_inventaris"
                                                            placeholder="Pilih Inventaris..."
                                                            selected-label=""
                                                            select-label=""
                                                            deselect-label="">
                                                        </multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-group row" v-if="selectedInv">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Harga Sewa</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" v-model="params.jumlah_sewa" class="form-control form-control-sm" placeholder="Jumlah pendapatan sewa" />
                                                    </div>
                                                </div>
                                                <div class="form-group row" v-if="selectedInv">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Periode Sewa (Bulan)</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" min="1" v-model="params.periode_sewa" class="form-control form-control-sm" />
                                                    </div>
                                                </div>
                                                <div class="form-group row" v-if="selectedInv">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Akun Pendapatan</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" v-model="params.acc_pendapatan_sewa" class="form-control form-control-sm" placeholder="Kode akun pendapatan sewa" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Akun Kas</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" v-model="params.acc_kas" class="form-control form-control-sm" placeholder="Kode akun kas (default 11110)" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 col-form-label col-form-label-sm">Keterangan</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" v-model="params.keterangan" class="form-control form-control-sm" placeholder="Keterangan" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-total mt-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="invoice-actions-btn">
                                                    <a href="javascript:;" @click="simpanSewa" class="btn btn-success btn-download">Simpan</a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-total">
                                                        <div class="invoice-summary-label">Total Pendapatan Sewa</div>
                                                        <div class="invoice-summary-value">
                                                            <strong>{{ Number(params.jumlah_sewa || 0).toLocaleString() }}</strong>
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
    </div>
</template>

<script setup>
    import '@/assets/sass/apps/invoice-add.scss';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

    import moment from 'moment';
    import { ref, watch, onMounted } from 'vue';
    import { useStore } from 'vuex';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Sewa Inventaris' });

    const store = useStore();

    const noSewa = ref('');
    const inventarisList = ref([]);
    const selectedInv = ref(null);

    const params = ref({
        noSewa,
        tglSewa: moment().format('YYYY-MM-DD'),
        kode_inventaris: '',
        jumlah_sewa: 0,
        periode_sewa: 1,
        acc_pendapatan_sewa: '',
        acc_kas: '11110',
        keterangan: 'Pendapatan Sewa Inventaris',
    });

    watch(selectedInv, (inv) => {
        if (inv) {
            params.value.kode_inventaris = inv.kode_inventaris;
            params.value.jumlah_sewa = inv.harga_sewa || 0;
            params.value.acc_pendapatan_sewa = inv.acc_pendapatan_sewa || '';
        }
    });

    const loadInventaris = () => {
        store.dispatch('GetInventaris');
        setTimeout(() => {
            const c = store.getters.StateInventaris;
            // only show inventaris yang disewakan
            inventarisList.value = (c[0] || []).filter(i => i.is_disewakan);
        }, 1500);
    };

    const loadNoSewa = () => {
        store.dispatch('GetNoSewa');
        setTimeout(() => { noSewa.value = store.getters.NoSewa; }, 1500);
    };

    const simpanSewa = () => {
        if (!selectedInv.value) {
            window.Swal.fire({ icon: 'warning', title: 'Pilih inventaris terlebih dahulu', padding: '2em' });
            return;
        }
        store.dispatch('CreateSewaInventaris', params.value)
        .then(() => {
            loadNoSewa();
            selectedInv.value = null;
            params.value.jumlah_sewa = 0;
            params.value.periode_sewa = 1;
            params.value.keterangan = 'Pendapatan Sewa Inventaris';
        }).catch(() => {});
    };

    onMounted(() => {
        loadInventaris();
        loadNoSewa();
    });
</script>
