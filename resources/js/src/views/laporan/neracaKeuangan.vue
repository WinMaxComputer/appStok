<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Neraca Keuangan</span></li>
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
                            <div class="invoice-container">
                                <div class="invoice-inbox">
                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="row invoice layout-top-spacing layout-spacing apps-invoice"></div>

                                                    <div class="table-responsive">
                                                            <div v-if="load" class="la-ball-circus" id="loading-indicator">
                                                                <h2 class="text-center mt-3">Loading</h2>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                            </div>                                       
                                                            <table class="table table-sm neraca-table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="width: 140px;">Kode</th>
                                                                        <th>Nama Akun</th>
                                                                        <th class="text-end" style="width: 220px;">Jumlah</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody v-for="hrt in hartalist" :key="hrt.acc_id">
                                                                    <tr v-if="isSupportedLevel(hrt.level)" :class="{ 'header-total-row': isHeadingRow(hrt) }">
                                                                        <td :style="codeCellStyle(hrt)">{{ hrt.jenis !== 'Total' ? hrt.acc_id : '' }}</td>
                                                                        <td :class="[levelClass(hrt.level), { 'fw-bold': isHeadingRow(hrt) }]" :style="nameCellStyle(hrt.level, hrt)">
                                                                            {{ hrt.name }}
                                                                        </td>
                                                                        <td :class="['text-end', { 'fw-bold total-line': hrt.jenis === 'Total' }]" :style="amountCellStyle(hrt)">
                                                                            <span v-if="hrt.jenis === 'Detail' || hrt.jenis === 'Total'">
                                                                                {{ formatAmount(hrt.amount, hrt.acc_id) }}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                      
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-secondary btn-print action-print w-100" @click="printPage">Cetak</button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <div class="row mb-4">
                                                <div class="col-sm">
                                                    <label for="inputState">Awal</label>
                                                    <flat-pickr v-model="sorting.startDate" 
                                                        :config="{dateFormat: 'd-m-Y'}"
                                                        class="form-control form-control-sm">
                                                    </flat-pickr>
                                                </div>
                                                <div class="col-sm">
                                                    <label for="inputState">Akhir</label>
                                                    <flat-pickr v-model="sorting.endDate" 
                                                        :config="{dateFormat: 'd-m-Y'}"
                                                        class="form-control form-control-sm">
                                                    </flat-pickr>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" @click="cari" class="btn btn-success btn-download w-100" :disabled="load">
                                                <span v-if="load" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                {{ load ? 'Memuat...' : 'Cari' }}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!--  -->
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/tables/table-basic.scss';
    import '@/assets/sass/apps/invoice-preview.scss';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import moment from "moment";

    import { useStore } from 'vuex';

    import { useMeta } from '@/composables/use-meta';

    useMeta({ title: 'Neraca Keuangan' });

    const store = useStore();

    const sorting = ref({
        startDate: moment().startOf('month').format("D-M-YYYY"), // moment().subtract(30,'d').format("D-M-YYYY"),
        endDate: moment().format("D-M-YYYY")
    });

    const load = ref(false);

    const hartalist = ref([]);

    const isSupportedLevel = (level) => ['1', '2', '3', '4'].includes(String(level));

    const isHeadingRow = (row) => row?.jenis === 'Total' || String(row?.jenis || '').startsWith('H');

    const rowUnderlineStyle = (row) => (isHeadingRow(row) ? { borderBottom: '1px solid #000' } : {});

    const codeCellStyle = (row) => ({
        minWidth: '70px',
        ...rowUnderlineStyle(row),
    });

    const nameCellStyle = (level, row) => {
        const indentByLevel = {
            '1': '8px',
            '2': '20px',
            '3': '32px',
            '4': '44px',
        };

        return {
            minWidth: '300px',
            paddingLeft: indentByLevel[String(level)] || '8px',
            ...rowUnderlineStyle(row),
        };
    };

    const amountCellStyle = (row) => ({
        ...rowUnderlineStyle(row),
    });

    const levelClass = (level) => `print-level-${String(level || '1')}`;

    const isNegativeAccount = (accId) => ['2', '3', '4', '7'].includes(String(accId || '').substring(0, 1));

    const formatAmount = (amount, accId) => {
        const numericAmount = Number(amount || 0);
        const finalAmount = isNegativeAccount(accId) ? -1 * numericAmount : numericAmount;
        return Number(finalAmount).toLocaleString();
    };

    const loadData = async () => {
        load.value = true;
        try {
            const payload = { ...sorting.value, group: '1,2,3' };
            await store.dispatch('GetHarta', payload);
            hartalist.value = store.getters.StateHarta;
        } finally {
            load.value = false;
        }
    };

    onMounted(async () => {
        await loadData();
    });

    const cari = async () => {
        await loadData();
    };

    const printPage = () => {
        window.print();
    };
</script>

<style scoped>
.neraca-table :deep(td),
.neraca-table :deep(th) {
    vertical-align: middle;
    white-space: nowrap;
}

.neraca-table {
    font-size: 12px;
}

.total-line {
    border-top: 1px solid #000;
}

.header-total-row :deep(td) {
    border-bottom: 1px solid #000;
}

.invoice-actions-btn .row {
    row-gap: 10px;
}

@media (max-width: 991px) {
    .invoice-actions-btn {
        margin-top: 16px;
    }
}

@media print {
    .layout-px-spacing {
        padding: 0 !important;
    }

    .invoice-actions-btn,
    .page-header,
    .la-ball-circus,
    .btn,
    .row.invoice.layout-top-spacing.layout-spacing.apps-invoice > .col-xl-12 > .doc-container > .row > .col-xl-3 {
        display: none !important;
    }

    .row.invoice.layout-top-spacing.layout-spacing.apps-invoice > .col-xl-12 > .doc-container > .row > .col-xl-9 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }

    .doc-container,
    .invoice-container,
    .invoice-inbox,
    .content-section,
    .inv--detail-section {
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        border: 0 !important;
    }

    .neraca-table {
        width: 100% !important;
        font-size: 10px !important;
    }

    .neraca-table :deep(th),
    .neraca-table :deep(td) {
        color: #000 !important;
        border-color: #bbb !important;
        white-space: nowrap !important;
        padding-top: 3px !important;
        padding-right: 6px !important;
        padding-bottom: 3px !important;
        padding-left: 6px !important;
    }

    .neraca-table :deep(td.print-level-1) { padding-left: 8px !important; }
    .neraca-table :deep(td.print-level-2) { padding-left: 20px !important; }
    .neraca-table :deep(td.print-level-3) { padding-left: 32px !important; }
    .neraca-table :deep(td.print-level-4) { padding-left: 44px !important; }

    .neraca-table :deep(tr.header-total-row td) {
        border-bottom: 1px solid #000 !important;
    }

    .neraca-table :deep(tr.header-total-row) {
        page-break-inside: avoid !important;
    }
}

@page {
    size: A4 portrait;
    margin: 10mm;
}
</style>
