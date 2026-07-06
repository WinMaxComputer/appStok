<template>
    <div class="layout-px-spacing">
        <div class="print-only-lr">
            <div class="print-lr-header">
                <div class="print-lr-title">Laporan Laba Rugi</div>
                <div class="print-lr-period">Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</div>
            </div>

            <div class="print-lr-body">
                <div class="print-lr-section">
                    <div class="print-lr-section-title">Detail Akun</div>
                    <div class="print-lr-columns">
                        <div v-for="hrt in visibleRows" :key="'print-' + hrt.acc_id" :class="['print-lr-row', levelClass(hrt.level), { 'print-total-row': isHeadTotalRow(hrt) }]">
                            <div class="print-lr-name">
                                <span v-if="hrt.jenis !== 'Total'" class="print-lr-code">{{ hrt.acc_id }}</span>
                                <span>{{ hrt.name }}</span>
                            </div>
                            <div class="print-lr-amount">
                                {{ formatAmount(hrt.amount, hrt.acc_id) }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="print-lr-section print-lr-summary">
                    <div class="print-lr-section-title">Ringkasan Periode</div>
                    <div class="print-lr-summary-row">
                        <span>Pendapatan</span>
                        <strong>{{ Number(summaryBreakdown.pendapatan).toLocaleString() }}</strong>
                    </div>
                    <div class="print-lr-summary-row">
                        <span>HPP</span>
                        <strong>{{ Number(summaryBreakdown.hpp).toLocaleString() }}</strong>
                    </div>
                    <div class="print-lr-summary-row">
                        <span>Beban Operasional</span>
                        <strong>{{ Number(summaryBreakdown.bebanOperasional).toLocaleString() }}</strong>
                    </div>
                    <div class="print-lr-summary-row print-lr-summary-final">
                        <span>{{ labarugi['name'] }}</span>
                        <strong>{{ Number(labarugi['amount']).toLocaleString() }}</strong>
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
                            <div class="invoice-container screen-lr-report">
                                <div class="invoice-inbox">
                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="laba-report-shell">
                                                        <div v-if="load" class="la-ball-circus" id="loading-indicator">
                                                            <h2 class="text-center mt-3">Loading</h2>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>

                                                        <div class="laba-period-banner">
                                                            <div class="laba-period-label">Laporan Laba Rugi</div>
                                                            <div class="laba-period-range">Periode {{ sorting.startDate }} s/d {{ sorting.endDate }}</div>
                                                        </div>

                                                        <div class="laba-breakdown-box laba-detail-box">
                                                            <div class="laba-breakdown-title">Detail Akun</div>
                                                            <div class="laba-list-wrap">
                                                                <div class="laba-accounts-wrap">
                                                                    <div
                                                                        v-for="hrt in visibleRows"
                                                                        :key="hrt.acc_id"
                                                                        :class="['laba-list-row', levelClass(hrt.level), { 'head-total-row': isHeadTotalRow(hrt), 'detail-soft-row': !isHeadTotalRow(hrt) }]"
                                                                    >
                                                                        <div class="laba-list-main" :style="nameCellStyle(hrt)">
                                                                            <div v-if="hrt.jenis !== 'Total'" class="laba-list-code" :style="codeCellStyle(hrt)">{{ hrt.acc_id }}</div>
                                                                            <div
                                                                                class="laba-list-name"
                                                                                :class="[{ 'fw-bold': isHeadingRow(hrt), 'is-total-row': hrt.jenis === 'Total' }]"
                                                                            >
                                                                                {{ hrt.name }}
                                                                            </div>
                                                                        </div>
                                                                        <div class="laba-list-amount text-end" :style="amountCellStyle(hrt)">
                                                                            <strong v-if="hrt.jenis === 'Total'">{{ formatAmount(hrt.amount, hrt.acc_id) }}</strong>
                                                                            <span v-else-if="hrt.jenis === 'Detail'">{{ formatAmount(hrt.amount, hrt.acc_id) }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="laba-breakdown-row total laba-final-row mt-2">
                                                                    <span class="laba-summary-name">{{ labarugi['name'] }}</span>
                                                                    <strong class="laba-summary-amount">{{ Number(labarugi['amount']).toLocaleString() }}</strong>
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
                                        <div class="col-xl-12 col-md-6 col-sm-12">
                                            <div class="laba-breakdown-box mt-2">
                                                <div class="laba-breakdown-title">Ringkasan Periode</div>
                                                <div class="laba-breakdown-row">
                                                    <span>Pendapatan</span>
                                                    <strong>{{ Number(summaryBreakdown.pendapatan).toLocaleString() }}</strong>
                                                </div>
                                                <div class="laba-breakdown-row">
                                                    <span>HPP</span>
                                                    <strong>{{ Number(summaryBreakdown.hpp).toLocaleString() }}</strong>
                                                </div>
                                                <div class="laba-breakdown-row">
                                                    <span>Beban Operasional</span>
                                                    <strong>{{ Number(summaryBreakdown.bebanOperasional).toLocaleString() }}</strong>
                                                </div>
                                                <div class="laba-breakdown-row total">
                                                    <span>Laba Bersih</span>
                                                    <strong :class="{ 'is-loss': Number(summaryBreakdown.labaBersih) < 0 }">
                                                        {{ Number(summaryBreakdown.labaBersih).toLocaleString() }}
                                                    </strong>
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

    const summaryBreakdown = computed(() => {
        const rows = Array.isArray(biayalist.value) ? biayalist.value : [];
        const detailRows = rows.filter((row) => row?.jenis === 'Detail');
        const sumByPrefix = (prefix) => {
            return detailRows
                .filter((row) => String(row?.acc_id || '').startsWith(prefix))
                .reduce((total, row) => total + Number(row?.amount || 0), 0);
        };

        const pendapatan = -1 * sumByPrefix('4');
        const hpp = sumByPrefix('5');
        const bebanOperasional = sumByPrefix('6');
        const pendapatanLain = -1 * sumByPrefix('7');
        const bebanLain = sumByPrefix('8');
        const labaBersih = (pendapatan - hpp - bebanOperasional + pendapatanLain - bebanLain);

        return {
            pendapatan,
            hpp,
            bebanOperasional,
            labaBersih,
        };
    });

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

    const visibleRows = computed(() => {
        return (Array.isArray(biayalist.value) ? biayalist.value : []).filter((row) => shouldRenderRow(row));
    });

    const rowUnderlineStyle = () => ({});

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
        const prefix = String(accId || '').substring(0, 1);

        // Revenue classes are stored as credit-dominant (negative in debet-kredit view).
        // Present them as positive values for readability in profit/loss rows.
        if (prefix === '4' || prefix === '7') {
            return Number(-1 * numericAmount).toLocaleString();
        }

        return Number(numericAmount).toLocaleString();
    };

    const amountCellStyle = (row) => {
        return {
            minWidth: '160px',
            paddingLeft: '24px',
            textAlign: 'right',
            ...rowUnderlineStyle(row),
        };
    };

    const loadReport = async () => {
        load.value = true;
        try {
            const payload = { ...sorting.value, group: '2,4,5,6', mode: 'period' };
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
            const nameClass = isHeadTotalRow(row) ? 'name total' : 'name';
            const rowClass = isHeadTotalRow(row) ? 'row total-row' : 'row';

            return `
                <div class="${rowClass}">
                    <div class="name-wrap" style="padding-left:${indent}px;">${code}<span class="${nameClass}">${escapeHtml(row.name)}</span></div>
                    <div class="amount">${amount}</div>
                </div>
            `;
        }).join('');

        const summaryRows = [
            ['Pendapatan', Number(summaryBreakdown.value.pendapatan).toLocaleString()],
            ['HPP', Number(summaryBreakdown.value.hpp).toLocaleString()],
            ['Beban Operasional', Number(summaryBreakdown.value.bebanOperasional).toLocaleString()],
            [labarugi.value.name, Number(labarugi.value.amount).toLocaleString(), true],
        ].map(([label, amount, isFinal]) => `
            <div class="summary-row${isFinal ? ' final' : ''}">
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(amount)}</strong>
            </div>
        `).join('');

        const printMarkup = `
            <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Laporan Laba Rugi</title>
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
                        .page {
                            width: 100%;
                            padding: 0;
                        }
                        .header {
                            margin-bottom: 6px;
                        }
                        .title {
                            font-size: 14px;
                            font-weight: 700;
                            margin-bottom: 2px;
                        }
                        .period {
                            font-size: 10px;
                        }
                        .content {
                            display: grid;
                            gap: 8px;
                            align-items: start;
                        }
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
                        .detail-columns {
                            display: grid;
                            gap: 2px;
                        }
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
                        .name {
                            min-width: 0;
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
                        .summary-row {
                            display: flex;
                            justify-content: space-between;
                            gap: 8px;
                            padding: 2px 0;
                        }
                        .summary-row.final {
                            margin-top: 4px;
                            padding-top: 4px;
                            font-weight: 700;
                            background: rgba(238,245,255,0.8);
                        }
                    </style>
                </head>
                <body>
                    <div class="page">
                        <div class="header">
                            <div class="title">Laporan Laba Rugi</div>
                            <div class="period">Periode ${escapeHtml(sorting.value.startDate)} s/d ${escapeHtml(sorting.value.endDate)}</div>
                        </div>
                        <div class="content">
                            <div class="panel">
                                <div class="panel-title">Detail Akun</div>
                                <div class="detail-columns">${rows}</div>
                            </div>
                            <div class="panel">
                                <div class="panel-title">Ringkasan Periode</div>
                                ${summaryRows}
                            </div>
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
.print-only-lr {
    display: none;
}

.laba-report-shell {
    display: grid;
    gap: 14px;
}

.laba-period-banner {
    border-radius: 12px;
    padding: 14px 16px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
    box-shadow: 0 10px 24px rgba(31, 42, 68, 0.06);
}

.laba-period-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #5b6b84;
    margin-bottom: 4px;
}

.laba-period-range {
    font-size: 16px;
    font-weight: 700;
    color: #23314d;
}

.laba-table {
    font-size: 11px;
}

.laba-list-wrap {
    display: grid;
    gap: 0;
}

.laba-accounts-wrap {
    display: grid;
    gap: 0;
}

.laba-list-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 5px 0 7px;
}

.laba-list-main {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    flex: 1 1 auto;
}

.laba-list-code {
    color: #52627c;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 700;
}

.laba-list-name {
    min-width: 0;
    color: #22314a;
    font-size: 11px;
    line-height: 1.35;
}

.laba-list-amount {
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

.laba-list-row.level-1 .laba-list-name { padding-left: 2px !important; }
.laba-list-row.level-2 .laba-list-name { padding-left: 14px !important; }
.laba-list-row.level-3 .laba-list-name { padding-left: 26px !important; }
.laba-list-row.level-4 .laba-list-name { padding-left: 38px !important; }

.head-total-row {
    font-weight: 700;
    padding-bottom: 8px;
    margin-bottom: 2px;
    background: rgba(238, 245, 255, 0.65);
}

.laba-summary-name {
    font-size: 13px;
    font-weight: 700;
    color: #22314a;
}

.laba-summary-amount {
    font-size: 18px;
    font-weight: 800;
    color: #22314a;
}

.laba-detail-box {
    padding: 12px 14px;
}

.laba-final-row {
    margin-top: 8px;
}

.invoice-actions-btn .row {
    row-gap: 10px;
}

.laba-breakdown-box {
    padding: 10px;
    background: #f8fbff;
    box-shadow: 0 10px 24px rgba(31, 42, 68, 0.05);
}

.laba-breakdown-title {
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #2f3c56;
}

.laba-breakdown-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font-size: 11px;
    padding: 4px 0;
}

.laba-breakdown-row.total {
    margin-top: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: 700;
    background: rgba(238, 245, 255, 0.75);
    padding-left: 8px;
    padding-right: 8px;
}

.is-loss {
    color: #c62828;
}

@media (max-width: 991px) {
    .invoice-actions-btn {
        margin-top: 16px;
    }

    .laba-list-row {
        gap: 10px;
    }

    .laba-list-amount {
        min-width: 140px;
    }
}

@media (max-width: 767px) {
    .laba-list-row {
        flex-direction: column;
        align-items: stretch;
    }

    .laba-list-main {
        flex-direction: column;
        align-items: flex-start;
    }

    .laba-list-amount {
        width: 100%;
        min-width: 0;
    }
}

@media print {
    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    html,
    body {
        width: 210mm;
        min-height: 297mm;
        overflow: hidden !important;
    }

    .layout-px-spacing {
        padding: 0 !important;
        width: 100% !important;
    }

    .page-header,
    .invoice-actions-btn,
    .la-ball-circus,
    .btn,
    .screen-lr-report,
    .row.invoice.layout-top-spacing.layout-spacing.apps-invoice > .col-xl-12 > .doc-container > .row > .col-xl-3 {
        display: none !important;
    }

    .print-only-lr {
        display: block !important;
        width: 100% !important;
        font-family: Arial, sans-serif;
        color: #000;
    }

    .print-lr-header {
        margin-bottom: 4mm;
    }

    .print-lr-title {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 1mm;
    }

    .print-lr-period {
        font-size: 9px;
    }

    .print-lr-body {
        display: grid;
        gap: 3mm;
    }

    .print-lr-section {
        break-inside: avoid;
        page-break-inside: avoid;
    }

    .print-lr-section-title {
        font-size: 9px;
        font-weight: 700;
        margin-bottom: 1.5mm;
    }

    .print-lr-columns {
        display: grid;
        gap: 0.8mm;
    }

    .print-lr-row {
        break-inside: avoid;
        page-break-inside: avoid;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3mm;
        font-size: 7px;
        line-height: 1.15;
        padding-bottom: 0.6mm;
        margin-bottom: 0.6mm;
    }

    .print-lr-name {
        display: flex;
        gap: 2mm;
        min-width: 0;
        flex: 1 1 auto;
    }

    .print-lr-code {
        white-space: nowrap;
        font-weight: 700;
    }

    .print-lr-amount {
        white-space: nowrap;
        font-weight: 700;
        text-align: right;
    }

    .print-total-row {
        font-weight: 700;
    }

    .print-lr-row.level-1 .print-lr-name { padding-left: 0; }
    .print-lr-row.level-2 .print-lr-name { padding-left: 3mm; }
    .print-lr-row.level-3 .print-lr-name { padding-left: 6mm; }
    .print-lr-row.level-4 .print-lr-name { padding-left: 9mm; }

    .print-lr-summary-row {
        display: flex;
        justify-content: space-between;
        gap: 4mm;
        font-size: 8px;
        line-height: 1.2;
        padding: 0.8mm 0;
    }

    .print-lr-summary-final {
        font-weight: 700;
        padding-top: 1.5mm;
    }

}

@page {
    size: A4 portrait;
    margin: 2mm;
}
</style>
