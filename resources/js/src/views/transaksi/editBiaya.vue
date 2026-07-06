<template>
    <div class="layout-px-spacing apps-invoice-add biaya-page">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Transaksi</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Edit Biaya</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row">
            <div class="col-xl-12">
                <div class="invoice-content">
                    <div class="invoice-detail-body">
                        <div class="invoice-detail-title biaya-head">
                            <div class="invoice-title">Edit Transaksi Biaya</div>
                            <div class="biaya-subtitle">Perbarui item biaya lalu simpan ulang transaksi.</div>
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
                                                        {{ isSaving ? 'Menyimpan...' : 'Update' }}
                                                    </button>
                                                </div>
                                                <div class="col-sm-4">
                                                    <router-link :to="{ name: 'biaya' }" class="btn btn-outline-secondary w-100">Kembali</router-link>
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

useMeta({ title: 'Edit Biaya' });

const props = defineProps({
    kd_trans: String,
    startDate: String,
});

const store = useStore();
const router = useRouter();

const items = ref([]);
const isSaving = ref(false);
const params = ref({
    noNota: props.kd_trans,
    tglNota: moment(props.startDate).format('YYYY-MM-DD'),
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

const loadAccs = async () => {
    await store.dispatch('GetCoaList', { acc: '6' });
};

const loadDetail = async () => {
    await store.dispatch('GetBiayaDetail', {
        kd_trans: props.kd_trans,
        startDate: moment(props.startDate).format('YYYY-MM-DD'),
    });

    const details = store.getters.StateBiayaDetail || [];
    items.value = details.length
        ? details.map((item, index) => ({
            id: index + 1,
            name: item.keterangan_biaya,
            biaya: String(item.jumlah || ''),
            satuan: item.satuan || '-',
            acc: item.accid || '',
        }))
        : [createEmptyItem(1)];
};

const simpanBiaya = async () => {
    if (!canSave.value) {
        window.Swal.fire({ icon: 'warning', title: 'Lengkapi data biaya', padding: '2em' });
        return;
    }

    isSaving.value = true;
    try {
        await store.dispatch('DeleteBiaya', { id: params.value.noNota });

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
        router.push({ name: 'biaya' });
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
        items.value = [createEmptyItem(1)];
    }
};

function onlyNumber($event) {
    const keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
    }
}

onMounted(async () => {
    await loadAccs();
    await loadDetail();
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
