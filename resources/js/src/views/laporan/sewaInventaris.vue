<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sewa Inventaris</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table panel-body p-0">
                        <div class="d-flex flex-wrap align-items-center px-3 pt-3 pb-0">
                            <h5 class="mb-2">Laporan Sewa Inventaris</h5>
                            <button type="button" class="btn btn-primary btn-sm ms-3 mb-2" @click="openCreate">Tambah</button>
                        </div>

                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group mb-4">
                                        <flat-pickr v-model="sorting.startDate" :config="{dateFormat: 'd-m-Y'}" class="form-control form-control-sm"></flat-pickr>
                                        <flat-pickr v-model="sorting.endDate" :config="{dateFormat: 'd-m-Y'}" class="form-control form-control-sm"></flat-pickr>
                                        <button type="button" class="btn btn-primary btn-sm" @click="loadData" :disabled="loading">{{ loading ? 'Memuat...' : 'Cari' }}</button>
                                        <button type="button" class="btn btn-outline-secondary btn-sm ms-1" @click="printReport">Print</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-3 pb-3 row g-2">
                            <div class="col-md-4"><div class="alert alert-info mb-0">Total Pendapatan: <strong>{{ format(totalPendapatan) }}</strong></div></div>
                            <div class="col-md-4"><div class="alert alert-warning mb-0">Total Penyusutan: <strong>{{ format(totalPenyusutan) }}</strong></div></div>
                            <div class="col-md-4"><div class="alert alert-success mb-0">Pendapatan Bersih: <strong>{{ format(totalPendapatan - totalPenyusutan) }}</strong></div></div>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="tableOption">
                            <template #tgl_sewa="props">{{ moment(props.row.tgl_sewa).format('D-M-YYYY') }}</template>
                            <template #jumlah_sewa="props">{{ format(props.row.jumlah_sewa) }}</template>
                            <template #jumlah_penyusutan="props">{{ format(props.row.jumlah_penyusutan) }}</template>
                            <template #action="props">
                                <button type="button" class="btn btn-link btn-sm text-primary p-1" title="Edit" @click="openEdit(props.row)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-link btn-sm text-danger p-1" title="Hapus" @click="deleteRow(props.row)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalSewaLaporan" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ form.id_sewa ? 'Edit Transaksi Sewa' : 'Tambah Transaksi Sewa' }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <label class="form-label">Tanggal</label>
                                <flat-pickr v-model="form.tglSewa" :config="{dateFormat: 'Y-m-d'}" class="form-control form-control-sm"></flat-pickr>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Inventaris</label>
                                <select v-model="form.kode_inventaris" @change="selectAsset" class="form-select form-select-sm">
                                    <option value="">Pilih inventaris</option>
                                    <option v-for="item in inventarisList" :key="item.kode_inventaris" :value="item.kode_inventaris">{{ item.nama_inventaris }}</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Jumlah Sewa</label>
                                <input type="number" min="1" v-model="form.jumlah_sewa" class="form-control form-control-sm">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Periode Sewa (Bulan)</label>
                                <input type="number" min="1" v-model="form.periode_sewa" class="form-control form-control-sm">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Akun Pendapatan</label>
                                <input type="text" v-model="form.acc_pendapatan_sewa" class="form-control form-control-sm">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Akun Kas</label>
                                <input type="text" v-model="form.acc_kas" class="form-control form-control-sm">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Keterangan</label>
                                <input type="text" v-model="form.keterangan" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button type="button" class="btn btn-primary" @click="saveRow" :disabled="saving">{{ saving ? 'Menyimpan...' : 'Simpan' }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import moment from 'moment';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';
    import { useStore } from 'vuex';
    import { useMeta } from '@/composables/use-meta';

    useMeta({ title: 'Laporan Sewa Inventaris' });
    const store = useStore();
    const loading = ref(false);
    const saving = ref(false);
    const items = ref([]);
    const inventarisList = ref([]);
    const form = ref({});
    const columns = ref(['sewa_sysno', 'tgl_sewa', 'nama_inventaris', 'jumlah_sewa', 'periode_sewa', 'jumlah_penyusutan', 'keterangan', 'action']);
    const sorting = ref({
        startDate: moment().startOf('month').format('D-M-YYYY'),
        endDate: moment().format('D-M-YYYY'),
    });
    const tableOption = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: { count: 'Showing {from} to {to} of {count}', filter: '', filterPlaceholder: 'Search...', limit: 'Results:' },
        sortable: ['sewa_sysno', 'tgl_sewa', 'nama_inventaris'],
        resizableColumns: true,
    });

    const format = (value) => Number(value || 0).toLocaleString();
    const totalPendapatan = computed(() => items.value.reduce((sum, row) => sum + Number(row.jumlah_sewa || 0), 0));
    const totalPenyusutan = computed(() => items.value.reduce((sum, row) => sum + Number(row.jumlah_penyusutan || 0), 0));

    const loadData = async () => {
        loading.value = true;
        try {
            await store.dispatch('GetLaporanSewaInventaris', sorting.value);
            items.value = store.getters.StateLaporanSewaInventaris || [];
        } finally {
            loading.value = false;
        }
    };

    const loadInventaris = async () => {
        await store.dispatch('GetInventaris');
        setTimeout(() => {
            const state = store.getters.StateInventaris || [];
            inventarisList.value = (state[0] || []).filter(item => item.is_disewakan);
        }, 300);
    };

    const blankForm = () => ({
        id_sewa: '',
        tglSewa: moment().format('YYYY-MM-DD'),
        kode_inventaris: '',
        jumlah_sewa: 0,
        periode_sewa: 1,
        acc_pendapatan_sewa: '',
        acc_kas: '11110',
        keterangan: 'Pendapatan Sewa Inventaris',
    });

    const showModal = () => window.bootstrap.Modal.getOrCreateInstance(document.getElementById('modalSewaLaporan')).show();
    const hideModal = () => window.bootstrap.Modal.getInstance(document.getElementById('modalSewaLaporan'))?.hide();
    const openCreate = () => { form.value = blankForm(); showModal(); };
    const openEdit = (row) => {
        form.value = {
            id_sewa: row.id_sewa,
            tglSewa: moment(row.tgl_sewa).format('YYYY-MM-DD'),
            kode_inventaris: row.rkode_inventaris,
            jumlah_sewa: row.jumlah_sewa,
            periode_sewa: row.periode_sewa || 1,
            acc_pendapatan_sewa: row.acc_pendapatan_sewa || '',
            acc_kas: row.acc_kas || '11110',
            keterangan: row.keterangan || 'Pendapatan Sewa Inventaris',
        };
        showModal();
    };

    const selectAsset = () => {
        const asset = inventarisList.value.find(item => item.kode_inventaris === form.value.kode_inventaris);
        if (!asset) return;
        form.value.jumlah_sewa = asset.harga_sewa || 0;
        form.value.acc_pendapatan_sewa = asset.acc_pendapatan_sewa || '';
    };

    const saveRow = async () => {
        saving.value = true;
        try {
            if (form.value.id_sewa) {
                await store.dispatch('UpdateTransaksiSewaInventaris', form.value);
            } else {
                const noSewa = store.getters.NoSewa || '';
                await store.dispatch('CreateSewaInventaris', { ...form.value, noSewa });
            }
            hideModal();
            await loadData();
        } catch (error) {
            window.Swal?.fire({ icon: 'error', title: error.response?.data?.message || 'Gagal menyimpan transaksi' });
        } finally {
            saving.value = false;
        }
    };

    const deleteRow = async (row) => {
        const result = await window.Swal.fire({ title: 'Hapus transaksi?', text: 'Nilai buku dan jurnal penyusutan akan dikembalikan.', icon: 'warning', showCancelButton: true, confirmButtonText: 'Hapus', cancelButtonText: 'Batal' });
        if (!result.isConfirmed) return;
        try {
            await store.dispatch('DeleteTransaksiSewaInventaris', { id_sewa: row.id_sewa });
            await loadData();
        } catch (error) {
            window.Swal?.fire({ icon: 'error', title: error.response?.data?.message || 'Gagal menghapus transaksi' });
        }
    };

    const printReport = () => window.print();

    onMounted(async () => {
        await store.dispatch('GetNoSewa');
        await loadInventaris();
        await loadData();
    });
</script>
