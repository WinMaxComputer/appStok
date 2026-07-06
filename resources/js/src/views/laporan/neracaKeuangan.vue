<template>
    <div class="layout-px-spacing">
        <div class="print-only-neraca">
            <div class="print-neraca-header">
                <div class="print-neraca-title">Neraca Keuangan</div>
                <div class="print-neraca-period">Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</div>
                <div v-if="showRawSign" class="print-neraca-mode">Mode Audit: Nilai Asli GL</div>
            </div>

            <div class="print-neraca-body">
                <div class="print-neraca-section">
                    <div class="print-neraca-section-title">Detail Akun</div>
                    <div class="print-neraca-columns">
                        <div v-for="row in visibleRows" :key="'print-' + row.acc_id" :class="['print-neraca-row', levelClass(row.level), { 'print-total-row': isHeadingRow(row) }]">
                            <div class="print-neraca-name">
                                <span v-if="row.jenis !== 'Total'" class="print-neraca-code">{{ row.acc_id }}</span>
                                <span>{{ row.name }}</span>
                            </div>
                            <div class="print-neraca-amount">{{ formatAmount(row.amount, row.acc_id) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                            <div class="invoice-container screen-neraca-report">
                                <div class="invoice-inbox">
                                    <div id="ct">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="neraca-report-shell">
                                                        <div v-if="load" class="la-ball-circus" id="loading-indicator">
                                                            <h2 class="text-center mt-3">Loading</h2>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>

                                                        <div class="neraca-period-banner">
                                                            <div class="neraca-period-label">Neraca Keuangan</div>
                                                            <div class="neraca-period-range">Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</div>
                                                        </div>

                                                        <div class="neraca-breakdown-box neraca-detail-box">
                                                            <div class="neraca-breakdown-title">Detail Akun</div>
                                                            <div class="neraca-list-wrap">
                                                                <div class="neraca-accounts-wrap">
                                                                    <div
                                                                        v-for="row in visibleRows"
                                                                        :key="row.acc_id"
                                                                        :class="['neraca-list-row', levelClass(row.level), { 'head-total-row': isHeadingRow(row), 'detail-soft-row': !isHeadingRow(row) }]"
                                                                    >
                                                                        <div class="neraca-list-main">
                                                                            <div v-if="row.jenis !== 'Total'" class="neraca-list-code">{{ row.acc_id }}</div>
                                                                            <div class="neraca-list-name" :class="{ 'fw-bold': isHeadingRow(row) }">
                                                                                {{ row.name }}
                                                                            </div>
                                                                        </div>
                                                                        <div class="neraca-list-amount text-end">
                                                                            <span v-if="row.jenis === 'Detail' || row.jenis === 'Total'">{{ formatAmount(row.amount, row.acc_id) }}</span>
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

                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-secondary btn-print action-print w-100" @click="printPage">Cetak</button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <div class="form-check form-switch text-start mb-2 mt-1">
                                                <input class="form-check-input" type="checkbox" id="rawSignToggle" v-model="showRawSign">
                                                <label class="form-check-label" for="rawSignToggle">Mode Audit (Nilai Asli GL)</label>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <div class="row mb-4">
                                                <div class="col-sm">
                                                    <label for="inputState">Awal</label>
                                                    <flat-pickr v-model="sorting.startDate" :config="{ dateFormat: 'd-m-Y' }" class="form-control form-control-sm"></flat-pickr>
                                                </div>
                                                <div class="col-sm">
                                                    <label for="inputState">Akhir</label>
                                                    <flat-pickr v-model="sorting.endDate" :config="{ dateFormat: 'd-m-Y' }" class="form-control form-control-sm"></flat-pickr>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" @click="cari" class="btn btn-success btn-download w-100" :disabled="load">
                                                <span v-if="load" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                {{ load ? 'Memuat...' : 'Cari' }}
                                            </button>
                                        </div>
                                        <div class="col-xl-12 col-md-6 col-sm-12">
                                            <div class="neraca-breakdown-box mt-2">
                                                <div class="neraca-breakdown-title">Ringkasan Tampilan</div>
                                                <div class="neraca-breakdown-row">
                                                    <span>Jumlah Baris</span>
                                                    <strong>{{ visibleRows.length }}</strong>
                                                </div>
                                                <div class="neraca-breakdown-row">
                                                    <span>Mode</span>
                                                    <strong>{{ showRawSign ? 'Audit' : 'Normal' }}</strong>
                                                </div>
                                                <div class="neraca-breakdown-row total">
                                                    <span>Rentang</span>
                                                    <strong>{{ sorting.startDate }} - {{ sorting.endDate }}</strong>
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
import { computed, onMounted, ref } from 'vue';

import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/tables/table-basic.scss';
import '@/assets/sass/apps/invoice-preview.scss';

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';

import moment from 'moment';
import { useStore } from 'vuex';
import { useMeta } from '@/composables/use-meta';

useMeta({ title: 'Neraca Keuangan' });

const store = useStore();
const sorting = ref({
    startDate: moment().startOf('month').format('D-M-YYYY'),
    endDate: moment().format('D-M-YYYY'),
});
const load = ref(false);
const showRawSign = ref(false);
const hartalist = ref([]);

const isSupportedLevel = (level) => ['1', '2', '3', '4'].includes(String(level));
const isHeadingRow = (row) => row?.jenis === 'Total' || String(row?.jenis || '').startsWith('H');
const levelClass = (level) => `print-level-${String(level || '1')}`;
const visibleRows = computed(() => {
    return (Array.isArray(hartalist.value) ? hartalist.value : []).filter((row) => isSupportedLevel(row?.level));
});

const isNegativeAccount = (accId) => ['2', '3', '4', '7'].includes(String(accId || '').substring(0, 1));
const formatAmount = (amount, accId) => {
    const numericAmount = Number(amount || 0);
    if (showRawSign.value) {
        return Number(numericAmount).toLocaleString();
    }
    const finalAmount = isNegativeAccount(accId) ? -1 * numericAmount : numericAmount;
    return Number(finalAmount).toLocaleString();
};

const loadData = async () => {
    load.value = true;
    try {
        const payload = { ...sorting.value, group: '1,2,3', mode: 'position' };
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

const escapeHtml = (value) => {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

const printPage = () => {
    const rows = visibleRows.value.map((row) => {
        const level = String(row?.level || '1');
        const indent = {
            '1': 0,
            '2': 12,
            '3': 24,
            '4': 36,
        }[level] || 0;
        const amount = escapeHtml(formatAmount(row.amount, row.acc_id));
        const code = row.jenis !== 'Total' ? `<span class="code">${escapeHtml(row.acc_id)}</span>` : '';
        const rowClass = isHeadingRow(row) ? 'row total-row' : 'row';

        return `
            <div class="${rowClass}">
                <div class="name-wrap" style="padding-left:${indent}px;">${code}<span class="name">${escapeHtml(row.name)}</span></div>
                <div class="amount">${amount}</div>
            </div>
        `;
    }).join('');

    const printMarkup = `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Neraca Keuangan</title>
                <style>
                    @page { size: A4 portrait; margin: 6mm; }
                    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        color: #1d2738;
                        font-size: 10px;
                        line-height: 1.2;
                        background: #fff;
                    }
                    .page { width: 100%; }
                    .header { margin-bottom: 6px; }
                    .title { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
                    .period { font-size: 10px; }
                    .mode { font-size: 9px; margin-top: 2px; }
                    .panel {
                        background: #f8fbff;
                        padding: 6px 8px;
                    }
                    .panel-title {
                        font-size: 10px;
                        font-weight: 700;
                        margin-bottom: 4px;
                        color: #32425e;
                    }
                    .rows { display: grid; gap: 2px; }
                    .row {
                        break-inside: avoid;
                        page-break-inside: avoid;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 6px;
                        padding: 1px 0;
                    }
                    .name-wrap {
                        display: flex;
                        gap: 5px;
                        min-width: 0;
                        flex: 1 1 auto;
                    }
                    .code {
                        white-space: nowrap;
                        font-weight: 700;
                        color: #5a6980;
                    }
                    .amount {
                        white-space: nowrap;
                        font-weight: 700;
                        min-width: 72px;
                        text-align: right;
                    }
                    .total-row {
                        font-weight: 700;
                        background: rgba(238,245,255,0.8);
                    }
                </style>
            </head>
            <body>
                <div class="page">
                    <div class="header">
                        <div class="title">Neraca Keuangan</div>
                        <div class="period">Periode ${escapeHtml(sorting.value.startDate)} s/d ${escapeHtml(sorting.value.endDate)}</div>
                        <div class="mode">${showRawSign.value ? 'Mode Audit: Nilai Asli GL' : 'Mode Tampilan: Normal'}</div>
                    </div>
                    <div class="panel">
                        <div class="panel-title">Detail Akun</div>
                        <div class="rows">${rows}</div>
                    </div>
                </div>
            </body>
        </html>
    `;

    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) {
        return;
    }

    printWindow.document.open();
    printWindow.document.write(printMarkup);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
};
</script>

<style scoped>
.print-only-neraca {
    display: none;
}

.neraca-report-shell {
    display: grid;
    gap: 14px;
}

.neraca-period-banner {
    border-radius: 12px;
    padding: 14px 16px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
    box-shadow: 0 10px 24px rgba(31, 42, 68, 0.06);
}

.neraca-period-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #5b6b84;
    margin-bottom: 4px;
}

.neraca-period-range {
    font-size: 16px;
    font-weight: 700;
    color: #23314d;
}

.neraca-list-wrap {
    display: grid;
    gap: 0;
}

.neraca-accounts-wrap {
    display: grid;
    gap: 0;
}

.neraca-list-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 5px 0 7px;
}

.neraca-list-main {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    flex: 1 1 auto;
}

.neraca-list-code {
    color: #52627c;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 700;
    min-width: 70px;
}

.neraca-list-name {
    min-width: 0;
    color: #22314a;
    font-size: 11px;
    line-height: 1.35;
}

.neraca-list-amount {
    min-width: 170px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 700;
    color: #22314a;
    font-size: 11px;
    margin-left: 10px;
}

.detail-soft-row:hover {
    background: transparent;
}

.print-level-1 .neraca-list-name { padding-left: 2px !important; }
.print-level-2 .neraca-list-name { padding-left: 14px !important; }
.print-level-3 .neraca-list-name { padding-left: 26px !important; }
.print-level-4 .neraca-list-name { padding-left: 38px !important; }

.head-total-row {
    font-weight: 700;
    padding-bottom: 8px;
    margin-bottom: 2px;
    background: rgba(238, 245, 255, 0.65);
}

.neraca-detail-box {
    padding: 12px 14px;
}

.invoice-actions-btn .row {
    row-gap: 10px;
}

.neraca-breakdown-box {
    padding: 10px;
    background: #f8fbff;
    box-shadow: 0 10px 24px rgba(31, 42, 68, 0.05);
}

.neraca-breakdown-title {
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #2f3c56;
}

.neraca-breakdown-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font-size: 11px;
    padding: 4px 0;
}

.neraca-breakdown-row.total {
    margin-top: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: 700;
    background: rgba(238, 245, 255, 0.75);
    padding-left: 8px;
    padding-right: 8px;
}

@media (max-width: 991px) {
    .invoice-actions-btn {
        margin-top: 16px;
    }

    .neraca-list-row {
        gap: 10px;
    }

    .neraca-list-amount {
        min-width: 140px;
    }
}

@media (max-width: 767px) {
    .neraca-list-row {
        flex-direction: column;
        align-items: stretch;
    }

    .neraca-list-main {
        flex-direction: column;
        align-items: flex-start;
    }

    .neraca-list-amount {
        width: 100%;
        min-width: 0;
    }
}

@media print {
    .print-only-neraca {
        display: none !important;
    }
}
</style>
