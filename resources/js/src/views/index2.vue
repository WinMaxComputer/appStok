<template>
    <div class="layout-px-spacing dashboard-home">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Home</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing g-3">
            <div class="col-12">
                <div class="panel br-6 p-3">
                    <div class="row g-2 align-items-end">
                        <div class="col-12">
                            <div class="preset-group">
                                <button
                                    class="btn btn-outline-secondary btn-sm"
                                    :class="{ active: activePreset === 'today' }"
                                    type="button"
                                    @click="applyPreset('today')"
                                >
                                    Today
                                </button>
                                <button
                                    class="btn btn-outline-secondary btn-sm"
                                    :class="{ active: activePreset === '7days' }"
                                    type="button"
                                    @click="applyPreset('7days')"
                                >
                                    7 Hari
                                </button>
                                <button
                                    class="btn btn-outline-secondary btn-sm"
                                    :class="{ active: activePreset === '30days' }"
                                    type="button"
                                    @click="applyPreset('30days')"
                                >
                                    30 Hari
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-3">
                            <label class="form-label form-label-sm">Start Date</label>
                            <flat-pickr v-model="sorting.startDate" :config="dateConfig" class="form-control form-control-sm" />
                        </div>
                        <div class="col-sm-4 col-md-3">
                            <label class="form-label form-label-sm">End Date</label>
                            <flat-pickr v-model="sorting.endDate" :config="dateConfig" class="form-control form-control-sm" />
                        </div>
                        <div class="col-sm-4 col-md-2">
                            <button class="btn btn-primary btn-sm w-100" :disabled="loading" @click="loadDashboard">
                                {{ loading ? 'Loading...' : 'Refresh' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-xl-3">
                <div class="dash-card">
                    <p class="dash-label">Total Penjualan</p>
                    <h4>{{ formatNumber(totalPenjualan) }}</h4>
                    <small>Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</small>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="dash-card">
                    <p class="dash-label">Total Pembelian</p>
                    <h4>{{ formatNumber(totalPembelian) }}</h4>
                    <small>Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</small>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="dash-card">
                    <p class="dash-label">Jumlah Transaksi Jual</p>
                    <h4>{{ salesRows.length }}</h4>
                    <small>Invoice penjualan dalam periode</small>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="dash-card">
                    <p class="dash-label">Jumlah Transaksi Beli</p>
                    <h4>{{ purchaseRows.length }}</h4>
                    <small>Invoice pembelian dalam periode</small>
                </div>
            </div>
        </div>

        <div class="row layout-top-spacing g-3">
            <div class="col-xl-8">
                <div class="panel br-6 p-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="mb-0">Grafik Penjualan vs Pembelian</h5>
                    </div>
                    <ApexChart v-if="salesChartOptions" height="320" type="line" :options="salesChartOptions" :series="salesChartSeries" />
                </div>
            </div>

            <div class="col-xl-4">
                <div class="panel br-6 p-3 mb-3">
                    <h5 class="mb-2">Most Pelanggan</h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="(item, idx) in mostPelanggan" :key="`${item.name}-${idx}`" class="list-group-item px-0 d-flex justify-content-between">
                            <span>{{ item.name }}</span>
                            <strong>{{ formatNumber(item.total) }}</strong>
                        </li>
                        <li v-if="mostPelanggan.length === 0" class="list-group-item px-0 text-muted">Belum ada data.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row layout-top-spacing g-3">
            <div class="col-12">
                <div class="sale-horizontal-grid">
                    <div class="panel br-6 p-3">
                        <h5 class="mb-2">Most Sale Barang</h5>
                        <ul class="list-group list-group-flush">
                            <li v-for="(item, idx) in mostSaleBarang" :key="`${item.name}-${idx}`" class="list-group-item px-0 d-flex justify-content-between">
                                <span class="rank-label-wrap">
                                    <span class="rank-badge" :class="`rank-${idx + 1}`">#{{ idx + 1 }}</span>
                                    <span>{{ item.name }}</span>
                                </span>
                                <strong>{{ formatNumber(item.qty) }}</strong>
                            </li>
                            <li v-if="mostSaleBarang.length === 0" class="list-group-item px-0 text-muted">Belum ada detail barang.</li>
                        </ul>
                    </div>

                    <div class="panel br-6 p-3">
                        <h5 class="mb-2">Most Sale Jasa</h5>
                        <ul class="list-group list-group-flush">
                            <li v-for="(item, idx) in mostSaleJasa" :key="`${item.name}-${idx}`" class="list-group-item px-0 d-flex justify-content-between">
                                <span class="rank-label-wrap">
                                    <span class="rank-badge" :class="`rank-${idx + 1}`">#{{ idx + 1 }}</span>
                                    <span>{{ item.name }}</span>
                                </span>
                                <strong>{{ formatNumber(item.qty) }}</strong>
                            </li>
                            <li v-if="mostSaleJasa.length === 0" class="list-group-item px-0 text-muted">Belum ada detail jasa.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row layout-top-spacing">
            <div class="col-12">
                <div class="panel br-6 p-3">
                    <h5 class="mb-3">Latest Penjualan</h5>
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>No Penjualan</th>
                                    <th>Tanggal</th>
                                    <th>Pelanggan</th>
                                    <th class="text-end">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in latestPenjualan" :key="row.noPenjualan">
                                    <td>
                                        <a href="javascript:void(0);" @click="viewNota(row.noPenjualan)">{{ row.noPenjualan }}</a>
                                    </td>
                                    <td>{{ formatDate(row.tglPenjualan) }}</td>
                                    <td>{{ row.nmPelanggan }}</td>
                                    <td class="text-end">{{ formatNumber(row.totalPenjualan) }}</td>
                                </tr>
                                <tr v-if="latestPenjualan.length === 0">
                                    <td colspan="4" class="text-center text-muted">Belum ada data penjualan.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import moment from 'moment';
import axios from 'axios';
import ApexChart from 'vue3-apexcharts';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';

useMeta({ title: 'Dashboard Home' });

const store = useStore();
const router = useRouter();
const sorting = ref({
    startDate: moment().subtract(30, 'd').format('D-M-YYYY'),
    endDate: moment().format('D-M-YYYY'),
});
const activePreset = ref('30days');
const dateConfig = { dateFormat: 'd-m-Y' };
const loading = ref(false);

const salesRows = ref([]);
const purchaseRows = ref([]);
const mostSaleBarang = ref([]);
const mostSaleJasa = ref([]);

const totalPenjualan = computed(() => salesRows.value.reduce((sum, item) => sum + Number(item.totalPenjualan || 0), 0));
const totalPembelian = computed(() => purchaseRows.value.reduce((sum, item) => sum + Number(item.total || 0), 0));

const latestPenjualan = computed(() => {
    return [...salesRows.value]
        .sort((a, b) => new Date(b.tglPenjualan) - new Date(a.tglPenjualan))
        .slice(0, 10);
});

const mostPelanggan = computed(() => {
    const map = new Map();
    salesRows.value.forEach((row) => {
        const key = row.nmPelanggan || 'Unknown';
        map.set(key, (map.get(key) || 0) + Number(row.totalPenjualan || 0));
    });

    return [...map.entries()]
        .map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 5);
});

const aggregateByDate = (rows, dateKey, valueKey) => {
    const map = new Map();

    rows.forEach((row) => {
        const date = row?.[dateKey];
        const key = date ? moment(date).format('YYYY-MM-DD') : null;
        if (!key || key === 'Invalid date') {
            return;
        }
        map.set(key, (map.get(key) || 0) + Number(row?.[valueKey] || 0));
    });

    return map;
};

const salesByDate = computed(() => aggregateByDate(salesRows.value, 'tglPenjualan', 'totalPenjualan'));
const purchaseByDate = computed(() => aggregateByDate(purchaseRows.value, 'tglPembelian', 'total'));

const chartDateKeys = computed(() => {
    const keys = new Set([...salesByDate.value.keys(), ...purchaseByDate.value.keys()]);
    return [...keys].sort((a, b) => new Date(a) - new Date(b));
});

const salesChartSeries = computed(() => [
    {
        name: 'Pembelian',
        type: 'column',
        data: chartDateKeys.value.map((key) => Number(purchaseByDate.value.get(key) || 0)),
    },
    {
        name: 'Penjualan',
        type: 'area',
        data: chartDateKeys.value.map((key) => Number(salesByDate.value.get(key) || 0)),
    },
    {
        name: 'Profit Estimasi',
        type: 'line',
        data: chartDateKeys.value.map((key) => Number(salesByDate.value.get(key) || 0) - Number(purchaseByDate.value.get(key) || 0)),
    },
]);

const salesChartOptions = computed(() => ({
    chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'Nunito, sans-serif',
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            columnWidth: '45%',
        },
    },
    stroke: { curve: 'smooth', width: [0, 4, 3] },
    fill: {
        type: ['solid', 'gradient', 'solid'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.65,
            opacityTo: 0.15,
            stops: [0, 90, 100],
        },
    },
    markers: { size: [0, 4, 4], strokeWidth: 0, hover: { size: 6 } },
    dataLabels: { enabled: false },
    xaxis: {
        categories: chartDateKeys.value.map((key) => moment(key).format('DD MMM')),
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    yaxis: { labels: { formatter: (v) => formatNumber(v) } },
    colors: ['#f59e0b', '#0ea5e9', '#22c55e'],
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '13px',
        labels: { colors: '#334155' },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: (value) => formatNumber(value),
        },
    },
    grid: {
        borderColor: '#e2e8f0',
        strokeDashArray: 4,
    },
}));

const formatNumber = (value) => Number(value || 0).toLocaleString();
const formatDate = (value) => (value ? moment(value).format('DD-MM-YYYY') : '-');

const applyPreset = async (preset) => {
    activePreset.value = preset;

    if (preset === 'today') {
        sorting.value.startDate = moment().format('D-M-YYYY');
        sorting.value.endDate = moment().format('D-M-YYYY');
    } else if (preset === '7days') {
        sorting.value.startDate = moment().subtract(7, 'd').format('D-M-YYYY');
        sorting.value.endDate = moment().format('D-M-YYYY');
    } else {
        sorting.value.startDate = moment().subtract(30, 'd').format('D-M-YYYY');
        sorting.value.endDate = moment().format('D-M-YYYY');
    }

    await loadDashboard();
};

const loadMostSaleBarang = async () => {
    try {
        const response = await axios.post('/api/most-sale-barang', {
            startDate: sorting.value.startDate,
            endDate: sorting.value.endDate,
            limit: 5,
        });

        const rows = response?.data?.data || [];
        mostSaleBarang.value = rows.map((row) => ({
            name: row.nmBarang || row.kdBarang || 'Unknown',
            qty: Number(row.totalQty || 0),
        }));
    } catch (error) {
        mostSaleBarang.value = [];
        console.log('load most sale barang error', error);
    }
};

const loadMostSaleJasa = async () => {
    try {
        const response = await axios.post('/api/most-sale-jasa', {
            startDate: sorting.value.startDate,
            endDate: sorting.value.endDate,
            limit: 5,
        });

        const rows = response?.data?.data || [];
        mostSaleJasa.value = rows.map((row) => ({
            name: row.nmJasa || row.kdJasa || 'Unknown',
            qty: Number(row.totalQty || 0),
        }));
    } catch (error) {
        mostSaleJasa.value = [];
        console.log('load most sale jasa error', error);
    }
};

const loadDashboard = async () => {
    loading.value = true;
    try {
        await Promise.all([
            store.dispatch('GetLaporanBarang', sorting.value),
            store.dispatch('GetLaporanPembelian', sorting.value),
        ]);

        salesRows.value = store.getters.SlaporanBarang || [];
        purchaseRows.value = store.getters.SlaporanPembelian || [];

        await Promise.all([loadMostSaleBarang(), loadMostSaleJasa()]);
    } finally {
        loading.value = false;
    }
};

const viewNota = (id) => {
    store.commit('setIdnota', id);
    const user = store.state.auth.user;
    const query = {
        startDate: sorting.value.startDate,
        endDate: sorting.value.endDate,
    };

    if (user === 'root') {
        router.push({ name: 'invoice-penjualan-max', query });
    } else {
        router.push({ name: 'invoice-penjualan', query });
    }
};

onMounted(async () => {
    await loadDashboard();
});
</script>

<style scoped>
.dashboard-home .dash-card {
    background: #fff;
    border: 1px solid #e8edf5;
    border-radius: 12px;
    padding: 14px;
}

.dashboard-home .dash-label {
    color: #6b7280;
    margin-bottom: 6px;
    font-size: 13px;
}

.dashboard-home .panel {
    border: 1px solid #e8edf5;
    border-radius: 12px;
    background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
}

.dashboard-home .form-label-sm {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 6px;
}

.dashboard-home .preset-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.dashboard-home .preset-group .btn.active {
    background: #1b55e2;
    border-color: #1b55e2;
    color: #fff;
}

.dashboard-home .sale-horizontal-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

@media (max-width: 991.98px) {
    .dashboard-home .sale-horizontal-grid {
        grid-template-columns: 1fr;
    }
}

.dashboard-home .rank-label-wrap {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.dashboard-home .rank-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 34px;
    height: 22px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    background: #94a3b8;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
}

.dashboard-home .rank-1 {
    background: linear-gradient(135deg, #f59e0b, #f97316);
}

.dashboard-home .rank-2 {
    background: linear-gradient(135deg, #06b6d4, #0ea5e9);
}

.dashboard-home .rank-3 {
    background: linear-gradient(135deg, #10b981, #22c55e);
}
</style>
