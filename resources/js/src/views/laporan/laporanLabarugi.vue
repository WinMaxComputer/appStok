<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Laba Rugi</span></li>
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
                                                    
                                                    <div class="invoice-detail-title">
                                                        <div class="invoice-title">
                                                            Laporan Laba Rugi
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div v-if="load" class="la-ball-circus" id="loading-indicator">
                                                            <h2 class="text-center mt-3">Loading</h2>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div> 
                                                            <table class="table table-sm laba-table mb-0">
                                                                <tr>
                                                                    <td><h6>LAPORAN LABA RUGI PERIODE TGL {{ sorting.startDate }} S/D {{ sorting.endDate }}</h6></td>
                                                                </tr>
                                                                <tr style="vertical-align:top">
                                                                    <td>
                                                                        <table border="1" cellspacing="3" width="75%" class="laba-detail-table">
                                                                            <tbody v-for="hrt in biayalist" :key="hrt.acc_id" style="border: 1px;">
                                                                                <tr v-if="shouldRenderRow(hrt)" :class="{ 'head-total-row': isHeadTotalRow(hrt) }">
                                                                                    <td :style="codeCellStyle(hrt)">{{ hrt.jenis !== 'Total' ? hrt.acc_id : '' }}</td>
                                                                                    <td :class="[levelClass(hrt.level), { 'fw-bold': isHeadingRow(hrt), 'is-total-row': hrt.jenis === 'Total' }]" :style="nameCellStyle(hrt)">
                                                                                        {{ hrt.name }}
                                                                                    </td>
                                                                                    <td class="text-end" :style="amountCellStyle(hrt)">
                                                                                        <strong v-if="hrt.jenis === 'Total'">{{ formatAmount(hrt.amount, hrt.acc_id) }}</strong>
                                                                                        <span v-else-if="hrt.jenis === 'Detail'">{{ formatAmount(hrt.amount, hrt.acc_id) }}</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- {{ labarugi }} -->
                                                                        <table border="1" cellspacing="3" width="100%" class="laba-summary-table">
                                                                            <tbody >
                                                                                <tr class="summary-total-row">
                                                                                    <td style="padding-left: 8px; border-bottom: 1px solid #000;"><b>{{ labarugi['name'] }}</b></td>
                                                                                    <td class="text-end" style="min-width: 160px; border-bottom: 1px solid #000;"><strong>{{ Number(labarugi['amount']).toLocaleString() }}</strong></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
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

    useMeta({ title: 'Laba Rugi' });

    const store = useStore();

    const load = ref(false);

    const sorting = ref({

        startDate: moment().startOf('month').format("D-M-YYYY"),
        endDate: moment().format("D-M-YYYY")
    });

    const labarugi = ref({ amount: 0, name: 'Laba Rugi' });
    const biayalist = ref([]);

    const isHeadingRow = (row) => row?.jenis === 'Total' || String(row?.jenis || '').startsWith('H');

    const isHeadTotalRow = (row) => isHeadingRow(row) || row?.jenis === 'Total';

    const isSupportedLevel = (level) => ['1', '2', '3', '4'].includes(String(level));

    const shouldRenderRow = (row) => {
        if (!isSupportedLevel(row?.level)) {
            return false;
        }

        if (String(row.level) === '1') {
            return true;
        }

        return Number(row.amount || 0) !== 0;
    };

    const rowUnderlineStyle = (row) => (isHeadTotalRow(row) ? { borderBottom: '1px solid #000' } : {});

    const codeCellStyle = (row) => ({
        minWidth: '80px',
        ...rowUnderlineStyle(row),
    });

    const levelClass = (level) => `level-${String(level || '1')}`;

    const nameCellStyle = (row) => {
        return {
            minWidth: '260px',
            paddingRight: '24px',
            ...rowUnderlineStyle(row),
        };
    };

    const formatAmount = (amount, accId) => {
        const numericAmount = Number(amount || 0);
        const isExpense = String(accId || '').substring(0, 1) === '6';
        const finalAmount = isExpense ? -1 * numericAmount : numericAmount;
        return Number(finalAmount).toLocaleString();
    };

    const amountCellStyle = (row) => {
        const isExpense = String(row?.acc_id || '').substring(0, 1) === '6';
        const style = {
            minWidth: '160px',
            paddingLeft: '24px',
            textAlign: 'right',
            ...rowUnderlineStyle(row),
        };

        if (isExpense && String(row?.level) === '2') {
            style.borderTop = '1px solid black';
        }

        if (isExpense && (String(row?.level) === '1' || String(row?.level) === '3') && row?.jenis === 'Total') {
            style.borderBottom = '1px solid black';
        }

        return style;
    };

    const loadReport = async () => {
        load.value = true;
        try {
            const payload = { ...sorting.value, group: '2,4,5,6' };
            await store.dispatch('GetHarta', payload);
            let alldata = store.getters.StateHarta;
            biayalist.value = alldata.filter(p => p.acc_id >= '40000');
            let lb = store.getters.StateHarta;
            labarugi.value = lb.find(n => n.acc_id === '69999') || { amount: 0, name: 'Laba Rugi' };
        } finally {
            load.value = false;
        }
    };

    onMounted(async () => {
        await loadReport();
    });
    
    const cari = async () => {
        await loadReport();
    };
    
    const printPage = () => {
        window.print();
    };
</script>

<style scoped>
.laba-table {
    font-size: 12px;
}

.laba-table :deep(td),
.laba-table :deep(th) {
    vertical-align: middle;
    white-space: nowrap;
}

.laba-detail-table :deep(td),
.laba-summary-table :deep(td) {
    padding: 3px 8px;
}

.laba-detail-table :deep(td.level-1) { padding-left: 8px !important; }
.laba-detail-table :deep(td.level-2) { padding-left: 16px !important; }
.laba-detail-table :deep(td.level-3) { padding-left: 24px !important; }
.laba-detail-table :deep(td.level-4) { padding-left: 32px !important; }

.laba-detail-table :deep(td.is-total-row.level-1) { padding-left: 8px !important; }
.laba-detail-table :deep(td.is-total-row.level-2) { padding-left: 16px !important; }
.laba-detail-table :deep(td.is-total-row.level-3) { padding-left: 24px !important; }
.laba-detail-table :deep(td.is-total-row.level-4) { padding-left: 32px !important; }

.head-total-row :deep(td),
.summary-total-row :deep(td) {
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

    .page-header,
    .invoice-actions-btn,
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

    .invoice-detail-title,
    .invoice-title {
        margin: 0 0 8px 0 !important;
        padding: 0 !important;
    }

    .laba-table {
        width: 100% !important;
        font-size: 10px !important;
    }

    .laba-table :deep(td),
    .laba-table :deep(th) {
        color: #000 !important;
        border-color: #bbb !important;
        white-space: nowrap !important;
        padding: 3px 6px !important;
    }

    .laba-detail-table :deep(td.level-1) { padding-left: 8px !important; }
    .laba-detail-table :deep(td.level-2) { padding-left: 16px !important; }
    .laba-detail-table :deep(td.level-3) { padding-left: 24px !important; }
    .laba-detail-table :deep(td.level-4) { padding-left: 32px !important; }

    .laba-detail-table :deep(td.is-total-row.level-1) { padding-left: 8px !important; }
    .laba-detail-table :deep(td.is-total-row.level-2) { padding-left: 16px !important; }
    .laba-detail-table :deep(td.is-total-row.level-3) { padding-left: 24px !important; }
    .laba-detail-table :deep(td.is-total-row.level-4) { padding-left: 32px !important; }

    .head-total-row :deep(td),
    .summary-total-row :deep(td) {
        border-bottom: 1px solid #000 !important;
    }
}

@page {
    size: A4 portrait;
    margin: 10mm;
}
</style>
