<template>
    <div class="layout-px-spacing apps-invoice-add biaya-page">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Transaksi</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Biaya</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="underline-content tabs">
            <ul class="nav nav-tabs mb-3" id="lineTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="underline-home-tab" data-bs-toggle="tab" href="#underline-home" role="tab" aria-controls="underline-home" aria-selected="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Transaksi
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="underline-profile-tab" data-bs-toggle="tab" href="#underline-profile" role="tab" aria-controls="underline-profile" aria-selected="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                        Daftar
                    </a>
                </li>
            </ul>

            <div class="tab-content" id="lineTabContent-3">
                <div class="tab-pane fade show active" id="underline-home" role="tabpanel" aria-labelledby="underline-home-tab">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title biaya-head">
                                        <div class="invoice-title">Transaksi Biaya</div>
                                        <div class="biaya-subtitle">Catat biaya operasional dan hubungkan ke akun beban yang sesuai.</div>
                                    </div>

                                    <div class="invoice-detail-header biaya-card">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">
                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">No Nota</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.noNota" id="number" class="form-control form-control-sm" disabled />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Tgl</label>
                                                        <div class="col-sm-9">
                                                            <flat-pickr v-model="params.tglNota" class="form-control form-control-sm flatpickr active" placeholder="Tanggal Biaya"></flat-pickr>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-5 invoice-address-client">
                                                <div class="biaya-summary-box">
                                                    <div class="biaya-summary-label">Jumlah Item</div>
                                                    <div class="biaya-summary-value">{{ items.length }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items biaya-card">
                                        <div class="table-responsive biaya-table-wrap">
                                            <table class="table table-hover align-middle mb-0 biaya-entry-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 60px;">Aksi</th>
                                                        <th>Keterangan</th>
                                                        <th style="width: 180px;">Biaya</th>
                                                        <th style="width: 160px;">Satuan</th>
                                                        <th style="width: 280px;">Akun</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="item.id">
                                                        <td>
                                                            <button type="button" class="btn btn-outline-danger btn-sm biaya-action-btn" @click="remove_item(item)" :disabled="items.length === 1">
                                                                Hapus
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <input type="text" v-model="item.name" class="form-control form-control-sm" placeholder="Keterangan biaya" />
                                                        </td>
                                                        <td>
                                                            <input type="text" v-model="item.biaya" :id="'biaya' + index" class="form-control form-control-sm text-end" placeholder="Nominal" @input="syncBiayaValue(item)" @keypress="onlyNumber" />
                                                        </td>
                                                        <td>
                                                            <input type="text" v-model="item.satuan" :id="'satuan' + index" class="form-control form-control-sm" placeholder="Satuan" />
                                                        </td>
                                                        <td>
                                                            <select v-model="item.acc" class="form-select form-select-sm">
                                                                <option value="">Pilih akun biaya</option>
                                                                <option v-for="ac in accOptions" :key="ac.acc_id" :value="ac.acc_id">{{ ac.acc_id }} - {{ ac.name }}</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <button type="button" class="btn btn-secondary btn-sm mt-3" @click="add_item">Tambah Item</button>
                                    </div>

                                    <div class="invoice-detail-total biaya-card">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <div class="invoice-actions-btn">
                                                    <div class="invoice-action-btn">
                                                        <div class="row g-2">
                                                            <div class="col-sm-4">
                                                                <button type="button" @click="simpanBiaya" class="btn btn-success btn-download w-100" :disabled="isSaving || !canSave">
                                                                    {{ isSaving ? 'Menyimpan...' : 'Save' }}
                                                                </button>
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <button type="button" @click="resetForm" class="btn btn-outline-secondary w-100" :disabled="isSaving">Reset</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total</div>
                                                        <div class="invoice-summary-value">
                                                            <span>{{ formatNumber(total) }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Status</div>
                                                        <div class="invoice-summary-value">
                                                            <span :class="canSave ? 'text-success fw-bold' : 'text-danger fw-bold'">
                                                                {{ canSave ? 'Siap Disimpan' : 'Lengkapi item biaya' }}
                                                            </span>
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

                <div class="tab-pane fade" id="underline-profile" role="tabpanel" aria-labelledby="underline-profile-tab">
                    <div class="col-xl-12">
                        <div class="invoice-content">
                            <div class="invoice-detail-body">
                                <div class="invoice-detail-header biaya-card">
                                    <div class="row justify-content-between align-items-end g-3">
                                        <div class="col-xl-9">
                                            <div class="row g-2">
                                                <div class="col-sm-4">
                                                    <label class="form-label form-label-sm">Awal</label>
                                                    <flat-pickr v-model="sorting.startDate" :config="{ dateFormat: 'd-m-Y' }" class="form-control form-control-sm"></flat-pickr>
                                                </div>
                                                <div class="col-sm-4">
                                                    <label class="form-label form-label-sm">Akhir</label>
                                                    <flat-pickr v-model="sorting.endDate" :config="{ dateFormat: 'd-m-Y' }" class="form-control form-control-sm"></flat-pickr>
                                                </div>
                                                <div class="col-sm-4 d-flex align-items-end gap-2">
                                                    <button type="button" @click="cari" class="btn btn-success btn-download w-100" :disabled="isLoadingList">
                                                        {{ isLoadingList ? 'Memuat...' : 'Cari' }}
                                                    </button>
                                                    <button type="button" class="btn btn-secondary w-100" @click="export_table('print')" :disabled="isLoadingList || !listbiaya.length">Print</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="biaya-card">
                                    <v-client-table :data="listbiaya" :columns="columns" :options="table_option">
                                        <template #kd_trans="props">{{ props.row.kd_trans }}</template>
                                        <template #tglBiaya="props">{{ moment(props.row.tglBiaya).format('DD-MM-YYYY') }}</template>
                                        <template #keterangan_biaya="props">{{ props.row.keterangan_biaya }}</template>
                                        <template #jumlah="props">{{ formatNumber(props.row.jumlah) }}</template>
                                        <template #action="props">
                                            <router-link :to="{ name: 'editBiaya', params: { startDate: props.row.tglBiaya, kd_trans: props.row.kd_trans } }" class="me-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                </svg>
                                            </router-link>
                                            <a href="javascript:void(0);" @click="delete_row(props.row)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </a>
                                        </template>
                                    </v-client-table>
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

import moment from 'moment';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';

useMeta({ title: 'Input Biaya' });

const store = useStore();
const router = useRouter();

const items = ref([]);
const listbiaya = ref([]);
const isSaving = ref(false);
const isLoadingList = ref(false);

const params = ref({
    noNota: '',
    tglNota: moment().format('YYYY-MM-DD'),
});

const sorting = ref({
    startDate: moment().subtract(30, 'd').format('D-M-YYYY'),
    endDate: moment().format('D-M-YYYY'),
});

const columns = ref(['kd_trans', 'tglBiaya', 'keterangan_biaya', 'jumlah', 'action']);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { action: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['kd_trans', 'tglBiaya', 'keterangan_biaya', 'jumlah'],
    sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc',
    },
    resizableColumns: true,
    resizableRows: true,
});

const accOptions = computed(() => store.getters.StateCoaList || []);
const total = computed(() => items.value.reduce((sum, item) => sum + Number(item.biaya || 0), 0));
const canSave = computed(() => {
    return items.value.length > 0 && items.value.every((item) => item.name && item.acc && Number(item.biaya || 0) > 0);
});

const formatNumber = (value) => Number(value || 0).toLocaleString();

const createEmptyItem = (id = 1) => ({
    id,
    name: '',
    biaya: '',
    satuan: '',
    acc: '',
});

const syncBiayaValue = (item) => {
    item.biaya = String(item.biaya || '').replace(/[^\d.]/g, '');
};

const resetForm = () => {
    items.value = [createEmptyItem(1)];
};

const loadAccs = async () => {
    await store.dispatch('GetCoaList', { acc: '6' });
};

const loadNoBiaya = async () => {
    await store.dispatch('GetNoBiaya');
    params.value.noNota = store.getters.NoBiaya || '';
};

const getListBiaya = async () => {
    isLoadingList.value = true;
    try {
        await store.dispatch('GetListBiaya', sorting.value);
        listbiaya.value = store.getters.StateListBiaya || [];
    } finally {
        isLoadingList.value = false;
    }
};

const simpanBiaya = async () => {
    if (!canSave.value) {
        window.Swal.fire({ icon: 'warning', title: 'Lengkapi data biaya', padding: '2em' });
        return;
    }

    isSaving.value = true;
    try {
        const header = {
            ...params.value,
            total: total.value,
        };
        const detail = items.value.map((item) => ({
            name: item.name,
            biaya: Number(item.biaya || 0),
            satuan: item.satuan || '-',
            acc: item.acc,
        }));

        await store.dispatch('CreateBiaya', [header, detail]);
        resetForm();
        await loadNoBiaya();
        await getListBiaya();
    } finally {
        isSaving.value = false;
    }
};

const add_item = () => {
    const maxId = items.value.length ? Math.max(...items.value.map((item) => item.id)) : 0;
    items.value.push(createEmptyItem(maxId + 1));
};

const remove_item = (item) => {
    items.value = items.value.filter((row) => row.id !== item.id);
    if (!items.value.length) {
        resetForm();
    }
};

function onlyNumber($event) {
    const keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
    }
}

const capitalize = (text) => {
    return text.replace('_', ' ').replace('-', ' ').toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
};

const export_table = (type) => {
    const cols = columns.value.filter((d) => d !== 'profile' && d !== 'action');
    const records = listbiaya.value;
    const filename = 'Daftar Biaya | Periode Tgl :';

    if (type !== 'print') {
        return;
    }

    let rowhtml = '<p>' + filename + sorting.value.startDate + ' s/d ' + sorting.value.endDate + '</p>';
    rowhtml += '<table style="width: 95%;" cellpadding="0" cellcpacing="0" border="1"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact;">';
    cols.forEach((d) => {
        rowhtml += '<th>' + capitalize(d) + '</th>';
    });
    rowhtml += '</tr></thead><tbody>';

    records.forEach((item) => {
        rowhtml += '<tr>';
        rowhtml += '<td>' + item.kd_trans + '</td>';
        rowhtml += '<td>' + moment(item.tglBiaya).format('DD-MM-YYYY') + '</td>';
        rowhtml += '<td>' + item.keterangan_biaya + '</td>';
        rowhtml += '<td>' + formatNumber(item.jumlah) + '</td>';
        rowhtml += '</tr>';
    });

    const sum = records.reduce((totalValue, element) => totalValue + Number(element.jumlah || 0), 0);

    rowhtml += '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:8px;font-weight:bold;margin:15px;}table{border-collapse:collapse;border-spacing:0;}th,td{font-size:8px;text-align:left;padding:4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7;}</style>';
    rowhtml += '</tbody><tfoot><tr><th></th><th></th><th>Total</th><th>' + formatNumber(sum) + '</th></tr></tfoot></table>';

    const winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Print</title>' + rowhtml);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
};

const delete_row = (data) => {
    new window.Swal({
        title: 'Anda Yakin?',
        text: 'Hapus Biaya ' + data.keterangan_biaya,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        padding: '2em',
    }).then((result) => {
        if (result.value) {
            store.dispatch('DeleteBiaya', { id: data.kd_trans }).then(async () => {
                await getListBiaya();
                await loadNoBiaya();
                new window.Swal('Deleted!', 'Data biaya telah dihapus.', 'success');
            }).catch(() => {
                return;
            });
        }
    });
};

const cari = async () => {
    await getListBiaya();
};

onMounted(async () => {
    resetForm();
    await loadAccs();
    await loadNoBiaya();
    await getListBiaya();
});
</script>

<style scoped>
.biaya-page {
    --biaya-border: #e8edf5;
    --biaya-soft: #f7faff;
}

.biaya-card {
    background: #ffffff;
    border: 1px solid var(--biaya-border);
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 14px;
}

.biaya-head {
    margin-bottom: 14px;
}

.biaya-subtitle {
    font-size: 13px;
    color: #6c7a92;
    margin-top: 4px;
}

.biaya-summary-box {
    background: linear-gradient(180deg, #ffffff 0%, var(--biaya-soft) 100%);
    border: 1px solid var(--biaya-border);
    border-radius: 12px;
    padding: 14px;
    min-height: 100%;
}

.biaya-summary-label {
    font-size: 12px;
    color: #6c7a92;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.biaya-summary-value {
    font-size: 24px;
    font-weight: 700;
    color: #1f2a44;
}

.biaya-table-wrap {
    border: 1px solid #edf1f7;
    border-radius: 10px;
    overflow-x: auto;
}

.biaya-entry-table thead th {
    background: var(--biaya-soft);
    white-space: nowrap;
}

.biaya-entry-table td,
.biaya-entry-table th {
    vertical-align: middle;
}

.biaya-action-btn {
    min-width: 72px;
}

@media (max-width: 991px) {
    .biaya-card {
        padding: 12px;
    }
}
</style>
