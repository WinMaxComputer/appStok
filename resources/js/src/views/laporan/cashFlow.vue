<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Arus Kas</span></li>
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
                            <h5>Laporan Arus Kas</h5>
                        </div>

                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group mb-3">
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
                                        <button type="button" class="btn m-1 btn-primary" @click="bindData" :disabled="isLoading">
                                            {{ isLoading ? 'Memuat...' : 'Cari' }}
                                        </button>
                                        <button type="button" class="btn m-1 btn-primary" @click="printTable">Print</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-3 pb-3">
                            <div class="table-responsive">
                                <table class="table table-sm table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <th class="w-25">Saldo Awal Kas</th>
                                            <td class="text-end">{{ formatNumber(summary.opening_balance) }}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Kas Masuk</th>
                                            <td class="text-end text-success">{{ formatNumber(summary.cash_in) }}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Kas Keluar</th>
                                            <td class="text-end text-danger">{{ formatNumber(summary.cash_out) }}</td>
                                        </tr>
                                        <tr>
                                            <th>Arus Kas Bersih</th>
                                            <td class="text-end fw-bold">{{ formatNumber(summary.net_cash_flow) }}</td>
                                        </tr>
                                        <tr class="table-primary">
                                            <th>Saldo Akhir Kas</th>
                                            <td class="text-end fw-bold">{{ formatNumber(summary.closing_balance) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="px-3 pb-3">
                            <div class="table-responsive">
                                <table class="table table-sm table-bordered mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Aktivitas</th>
                                            <th class="text-end">Kas Masuk</th>
                                            <th class="text-end">Kas Keluar</th>
                                            <th class="text-end">Net</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Operasi</td>
                                            <td class="text-end">{{ formatNumber(sections.operating.in) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.operating.out) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.operating.net) }}</td>
                                        </tr>
                                        <tr>
                                            <td>Investasi</td>
                                            <td class="text-end">{{ formatNumber(sections.investing.in) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.investing.out) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.investing.net) }}</td>
                                        </tr>
                                        <tr>
                                            <td>Pendanaan</td>
                                            <td class="text-end">{{ formatNumber(sections.financing.in) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.financing.out) }}</td>
                                            <td class="text-end">{{ formatNumber(sections.financing.net) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="tableOption" v-if="items.length">
                            <template #tgl="props">{{ moment(props.row.tgl).format('D-M-YYYY') }}</template>
                            <template #activity="props">{{ activityLabel(props.row.activity) }}</template>
                            <template #cash_account="props">{{ props.row.cash_acc_id }} - {{ props.row.cash_acc_name }}</template>
                            <template #counter_account="props">{{ formatCounterAccount(props.row) }}</template>
                            <template #cash_in="props">{{ formatNumber(props.row.cash_in) }}</template>
                            <template #cash_out="props">{{ formatNumber(props.row.cash_out) }}</template>
                            <template #net_amount="props">{{ formatNumber(props.row.net_amount) }}</template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';
import flatPickr from 'vue-flatpickr-component';

import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';

import { useMeta } from '@/composables/use-meta';

useMeta({ title: 'Arus Kas' });

const store = useStore();
const isLoading = ref(false);
const items = ref([]);
const summary = ref({
    opening_balance: 0,
    cash_in: 0,
    cash_out: 0,
    net_cash_flow: 0,
    closing_balance: 0,
});
const sections = ref({
    operating: { in: 0, out: 0, net: 0 },
    investing: { in: 0, out: 0, net: 0 },
    financing: { in: 0, out: 0, net: 0 },
});

const columns = ref(['tgl', 'notrans', 'memo', 'cash_account', 'counter_account', 'activity', 'cash_in', 'cash_out', 'net_amount']);
const tableOption = ref({
    perPage: 100,
    perPageValues: [100, 200],
    skin: 'table table-hover',
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
});

const formatNumber = (value) => Number(value || 0).toLocaleString();

const activityLabel = (activity) => {
    if (activity === 'investing') return 'Investasi';
    if (activity === 'financing') return 'Pendanaan';
    return 'Operasi';
};

const formatCounterAccount = (row) => {
    if (row.counter_status === 'cash_transfer') {
        return 'Transfer antar akun kas';
    }
    if (row.counter_status === 'missing_counter') {
        return 'Tanpa akun lawan (cek jurnal)';
    }

    const acc = row.counter_acc_id || '-';
    const name = row.counter_name || 'Nama akun tidak ditemukan';
    return `${acc} - ${name}`;
};

const bindData = async () => {
    isLoading.value = true;
    try {
        await store.dispatch('GetCashFlow', sorting.value);
        items.value = store.getters.StateCashFlow || [];
        summary.value = store.getters.StateCashFlowMeta || summary.value;
        sections.value = store.getters.StateCashFlowSections || sections.value;
    } finally {
        isLoading.value = false;
    }
};

const printTable = () => {
    let html = '<p>Laporan Arus Kas</p>';
    html += `<p>Periode: ${sorting.value.startDate} s/d ${sorting.value.endDate}</p>`;
    html += '<table><thead><tr>';
    html += '<th>Tanggal</th><th>No. Transaksi</th><th>Memo</th><th>Akun Kas</th><th>Akun Lawan</th><th>Aktivitas</th><th>Kas Masuk</th><th>Kas Keluar</th><th>Arus Kas</th>';
    html += '</tr></thead><tbody>';

    items.value.forEach((row) => {
        html += '<tr>';
        html += `<td>${moment(row.tgl).format('DD-MM-YYYY')}</td>`;
        html += `<td>${row.notrans || ''}</td>`;
        html += `<td>${row.memo || ''}</td>`;
        html += `<td>${row.cash_acc_id || ''} - ${row.cash_acc_name || ''}</td>`;
        html += `<td>${formatCounterAccount(row)}</td>`;
        html += `<td>${activityLabel(row.activity)}</td>`;
        html += `<td class="num">${formatNumber(row.cash_in)}</td>`;
        html += `<td class="num">${formatNumber(row.cash_out)}</td>`;
        html += `<td class="num">${formatNumber(row.net_amount)}</td>`;
        html += '</tr>';
    });

    html += '</tbody></table>';

    html += '<h4>Ringkasan</h4>';
    html += '<table><tbody>';
    html += `<tr><th>Saldo Awal Kas</th><td class="num">${formatNumber(summary.value.opening_balance)}</td></tr>`;
    html += `<tr><th>Total Kas Masuk</th><td class="num">${formatNumber(summary.value.cash_in)}</td></tr>`;
    html += `<tr><th>Total Kas Keluar</th><td class="num">${formatNumber(summary.value.cash_out)}</td></tr>`;
    html += `<tr><th>Arus Kas Bersih</th><td class="num">${formatNumber(summary.value.net_cash_flow)}</td></tr>`;
    html += `<tr><th>Saldo Akhir Kas</th><td class="num">${formatNumber(summary.value.closing_balance)}</td></tr>`;
    html += '</tbody></table>';

    html += '<style>body{font-family:Arial;color:#495057;padding:12px;}p{text-align:center;margin:6px 0;font-weight:bold;}table{width:100%;border-collapse:collapse;margin-bottom:12px;}th,td{font-size:12px;text-align:left;padding:4px;border:1px solid #ddd;}th{background:#eff5ff;} .num{text-align:right;}</style>';

    const winPrint = window.open('', '', 'left=0,top=0,width=1200,height=700,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Laporan Arus Kas</title>' + html);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
};

onMounted(() => {
    bindData();
});
</script>
