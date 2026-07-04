<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>General Ledger</span></li>
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
                        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                            <h5>General Ledger</h5>
                        </div>

                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group mb-4">
                                        <flat-pickr
                                            v-model="sorting.startDate"
                                            :config="{ dateFormat: 'd-m-Y' }"
                                            class="form-control form-control-sm"
                                        />
                                        <flat-pickr
                                            v-model="sorting.endDate"
                                            :config="{ dateFormat: 'd-m-Y' }"
                                            class="form-control form-control-sm"
                                        />
                                        <select v-model="sorting.acc_id" class="form-control">
                                            <option value="-">Pilih Akun</option>
                                            <option v-for="coa in items_coa" :key="coa.acc_id" :value="coa.acc_id">
                                                {{ coa.acc_id }} - {{ coa.name }}
                                            </option>
                                        </select>
                                        <button type="button" class="btn m-1 btn-primary" @click="bindData" :disabled="isLoading">
                                            {{ isLoading ? 'Memuat...' : 'Cari' }}
                                        </button>
                                        <button type="button" class="btn m-1 btn-primary" @click="exportTable('print')" :disabled="isLoading || !hasData">
                                            Print
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-danger btn-lg mb-3 ms-3 me-3" v-if="isLoading">
                            <span class="spinner-border text-white me-2 align-self-center loader-sm"></span> Loading
                        </button>

                        <div v-if="showSummary" class="px-3 pb-2">
                            <table class="table table-sm table-bordered mb-0">
                                <tbody>
                                    <tr class="table-primary">
                                        <th class="w-25">Saldo Awal</th>
                                        <td class="text-end fw-bold">{{ Number(summary.openingBalance).toLocaleString() }}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Debet</th>
                                        <td class="text-end">{{ Number(summary.totalDebet).toLocaleString() }}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Kredit</th>
                                        <td class="text-end">{{ Number(summary.totalKredit).toLocaleString() }}</td>
                                    </tr>
                                    <tr>
                                        <th>Saldo Akhir Periode</th>
                                        <td class="text-end fw-bold">{{ Number(summary.closingBalance).toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div v-if="hasData" class="px-3 pb-3">
                            <v-client-table :data="items" :columns="columns" :options="tableOption">
                                <template #Tanggal="props">{{ moment(props.row.Tanggal).format('D-M-YYYY') }}</template>
                                <template #Debet="props">{{ Number(props.row.Debet || 0).toLocaleString() }}</template>
                                <template #Kredit="props">{{ Number(props.row.Kredit || 0).toLocaleString() }}</template>
                                <template #Saldo="props">{{ Number(props.row.Saldo || 0).toLocaleString() }}</template>
                            </v-client-table>
                        </div>

                        <div v-else-if="!isLoading" class="px-3 pb-3 text-muted">
                            Tidak ada data ledger untuk rentang tanggal dan akun yang dipilih.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';
import { useStore } from 'vuex';
import moment from 'moment';
import { useMeta } from '@/composables/use-meta';

useMeta({ title: 'General Ledger' });

const store = useStore();
const isLoading = ref(false);
const columns = ref(['NoTransaksi', 'Memo', 'Tanggal', 'Debet', 'Kredit', 'Saldo']);
const items = ref([]);
const items_coa = ref([]);
const glMeta = computed(() => store.getters.StateGLMeta || { opening_balance: 0, closing_balance: 0 });

const tableOption = ref({
    perPage: 100,
    perPageValues: [100, 200],
    skin: 'table table-hover',
    columnsClasses: { action: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc',
    },
    resizableColumns: true,
});

const sorting = ref({
    startDate: moment().subtract(30, 'd').format('D-M-YYYY'),
    endDate: moment().format('D-M-YYYY'),
    acc_id: '-',
});

const toNumber = (value) => Number(value || 0);

const normalizeRows = (rows) => {
    const list = Array.isArray(rows) ? [...rows] : [];
    return list.map((row) => ({
        ...row,
        Debet: toNumber(row.Debet),
        Kredit: toNumber(row.Kredit),
        Saldo: toNumber(row.Saldo),
    }));
};

const hasData = computed(() => Array.isArray(items.value) && items.value.length > 0);

const summary = computed(() => {
    const openingBalance = toNumber(glMeta.value.opening_balance);

    let totalDebet = 0;
    let totalKredit = 0;
    items.value.forEach((row) => {
        totalDebet += toNumber(row.Debet);
        totalKredit += toNumber(row.Kredit);
    });

    const closingBalance = items.value.length
        ? toNumber(items.value[items.value.length - 1].Saldo)
        : toNumber(glMeta.value.closing_balance);

    return {
        openingBalance,
        totalDebet,
        totalKredit,
        closingBalance,
    };
});

const showSummary = computed(() => {
    return hasData.value || toNumber(glMeta.value.opening_balance) !== 0 || toNumber(glMeta.value.closing_balance) !== 0;
});

const bindData = async () => {
    isLoading.value = true;
    try {
        await store.dispatch('GetGL', { ...sorting.value, acc_id: sorting.value.acc_id || '-' });
        items.value = normalizeRows(store.getters.StateGL || []);
    } finally {
        isLoading.value = false;
    }
};

const bindAcc = async () => {
    isLoading.value = true;
    try {
        await store.dispatch('GetListCoa');
        items_coa.value = store.getters.StateListCoa || [];
    } finally {
        isLoading.value = false;
    }
};

onMounted(async () => {
    await bindAcc();
    await bindData();
});

const capitalize = (text) => {
    return text
        .replace('_', ' ')
        .replace('-', ' ')
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
};

const exportTable = (type) => {
    const cols = columns.value.filter((d) => d !== 'profile' && d !== 'action');
    const records = items.value;
    const filename = 'General Ledger';

    if (type !== 'print') {
        return;
    }

    let rowhtml = '<p>' + filename + '</p>';
    rowhtml +=
        '<table style="width: 100%;" cellpadding="0" cellspacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact;">';
    rowhtml += '<th colspan="6" style="text-align:left;">LAPORAN GENERAL LEDGER</th>';
    rowhtml += '</tr><tr>';
    cols.forEach((d) => {
        rowhtml += '<th>' + capitalize(d) + '</th>';
    });
    rowhtml += '</tr></thead><tbody>';

    rowhtml += '<tr>';
    rowhtml += '<td>-</td>';
    rowhtml += '<td><b>Saldo Awal</b></td>';
    rowhtml += '<td>-</td>';
    rowhtml += '<td class="num">-</td>';
    rowhtml += '<td class="num">-</td>';
    rowhtml += '<td class="num"><b>' + Number(summary.value.openingBalance).toLocaleString() + '</b></td>';
    rowhtml += '</tr>';

    records.forEach((item) => {
        rowhtml += '<tr>';
        rowhtml += '<td>' + (item.NoTransaksi || '') + '</td>';
        rowhtml += '<td>' + (item.Memo || '') + '</td>';
        rowhtml += '<td>' + (item.Tanggal ? moment(item.Tanggal).format('DD-MM-YYYY') : '') + '</td>';
        rowhtml += '<td class="num">' + Number(item.Debet || 0).toLocaleString() + '</td>';
        rowhtml += '<td class="num">' + Number(item.Kredit || 0).toLocaleString() + '</td>';
        rowhtml += '<td class="num">' + Number(item.Saldo || 0).toLocaleString() + '</td>';
        rowhtml += '</tr>';
    });

    rowhtml += '</tbody><tfoot><tr>';
    rowhtml += '<th colspan="3" style="text-align:right;">Total</th>';
    rowhtml += '<th class="num">' + Number(summary.value.totalDebet).toLocaleString() + '</th>';
    rowhtml += '<th class="num">' + Number(summary.value.totalKredit).toLocaleString() + '</th>';
    rowhtml += '<th class="num">' + Number(summary.value.closingBalance).toLocaleString() + '</th>';
    rowhtml += '</tr></tfoot></table>';

    rowhtml +=
        '<style>body{font-family:Arial;color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{border-collapse:collapse;border-spacing:0;}th,td{font-size:12px;text-align:left;padding:4px;border:1px solid #ddd;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7;}.num{text-align:right;}</style>';

    const winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Print</title>' + rowhtml);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
};
</script>
