<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Buku Kas</span></li>
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
                            <!-- <button variant="primary" class="btn m-1 btn-primary" @click="export_table('print')">Print</button> -->
                            <!-- <button variant="primary" class="btn m-1 btn-primary" @click="export_table('pdf')">PDF</button> -->
                            <h5>Kas</h5>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="input-group mb-4">
                                        <flat-pickr v-model="sorting.startDate"
                                            :config="{dateFormat: 'd-m-Y'}" 
                                            class="form-control form-control-sm">
                                        </flat-pickr>
                                        <flat-pickr v-model="sorting.endDate" 
                                            :config="{dateFormat: 'd-m-Y'}"
                                            class="form-control form-control-sm">
                                        </flat-pickr>
                                        <button type="button" class="btn m-1 btn-primary" @click="bind_data" :disabled="isLoading">{{ isLoading ? 'Memuat...' : 'Cari' }}</button>
                                        <button type="button" class="btn m-1 btn-primary" @click="export_table('print')">Print</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="showSummary" class="px-3 pb-2">
                            <table class="table table-sm table-bordered mb-0">
                                <tbody>
                                    <tr class="table-primary">
                                        <th class="w-25">Saldo Awal</th>
                                        <td class="text-end fw-bold">{{ Number(summary.openingBalance).toLocaleString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option" v-if="items.length">
                            <template #tgl="props"> {{ moment(props.row.tgl).format("D-M-YYYY") }} </template>
                            <template #debet="props"> {{ Number(props.row.debet || 0).toLocaleString() }} </template>
                            <template #kredit="props"> {{ Number(props.row.kredit || 0).toLocaleString() }} </template>
                            <template #mutasi="props"> {{ Number(props.row.mutasi || 0).toLocaleString() }} </template>
                            <template #saldo="props"> {{ Number(props.row.saldo || 0).toLocaleString() }} </template>
                        </v-client-table>

                        <div v-if="showSummary" class="px-3 pb-3">
                            <div class="table-responsive">
                                <table class="table table-sm table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <th class="w-25">Saldo Awal</th>
                                            <td class="text-end">{{ Number(summary.openingBalance).toLocaleString() }}</td>
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
                        </div>

                        
                        
                    </div>
                </div>
            </div>
        </div>


        <!--  -->
        
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';

    //pdf export
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { useStore } from 'vuex';

    import moment from "moment";

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Buku Kas' });

    const store = useStore();
    const isLoading = ref(false);
    const bukuBesarMeta = computed(() => store.getters.SBukuBesarMeta || { opening_balance: 0, closing_balance: 0 });

    const columns = ref(['notrans', 'acc_id','name', 'memo' ,'tgl', 'debet', 'kredit', 'mutasi', 'saldo']);
    const items = ref([]);
    const table_option = ref({
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
        // sortable: ['noNota', 'tglPembelian', 'nmSupplier', 'subTotal', 'disc', 'total',],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: true,
    });
    const sorting = ref({
        startDate: moment().subtract(30,'d').format("D-M-YYYY"),
        endDate: moment().format("D-M-YYYY")
    });

    

    onMounted(() => {
        bind_data();
    });

    const toNumber = (value) => Number(value || 0);

    const normalizeRows = (rows) => {
        const list = Array.isArray(rows) ? [...rows] : [];

        if (!list.length) {
            return [];
        }

        // Keep transaction order stable while ensuring dates are processed chronologically.
        list.sort((a, b) => {
            const t1 = new Date(a.tgl).getTime();
            const t2 = new Date(b.tgl).getTime();
            if (t1 === t2) {
                return String(a.notrans || '').localeCompare(String(b.notrans || ''));
            }
            return t1 - t2;
        });

        const first = list[0];
        const firstMovement = toNumber(first.debet) - toNumber(first.kredit);
        let running = toNumber(first.saldo) ? toNumber(first.saldo) - firstMovement : 0;

        return list.map((row) => {
            const debet = toNumber(row.debet);
            const kredit = toNumber(row.kredit);
            const mutasi = debet - kredit;
            running += mutasi;

            return {
                ...row,
                debet,
                kredit,
                mutasi,
                saldo: running,
            };
        });
    };
    
    const bind_data = async () => {
        isLoading.value = true;
        try {
            await store.dispatch('GetBukuBesar', sorting.value);
            const rows = store.getters.SBukuBesar || [];
            items.value = normalizeRows(rows);
        } finally {
            isLoading.value = false;
        }
    };

    const showSummary = computed(() => {
        return items.value.length || toNumber(bukuBesarMeta.value.opening_balance) !== 0 || toNumber(bukuBesarMeta.value.closing_balance) !== 0;
    });

    const summary = computed(() => {
        let totalDebet = 0;
        let totalKredit = 0;

        items.value.forEach((row) => {
            totalDebet += toNumber(row.debet);
            totalKredit += toNumber(row.kredit);
        });

        const closingBalance = items.value.length
            ? toNumber(items.value[items.value.length - 1].saldo)
            : toNumber(bukuBesarMeta.value.closing_balance);
        const openingBalance = toNumber(bukuBesarMeta.value.opening_balance);

        return {
            openingBalance,
            totalDebet,
            totalKredit,
            closingBalance,
        };
    });

    // const bbm = computed(() => {
    //     items.value = store.getters.SlaporanPembelian;

    //     let sum = 0;
    //     items.value.forEach(element => {
    //     sum +=  parseInt(element.total);
    //     });

    //     // console.log(sum)
    //     // return { items }
    // });

    const export_table = (type) => {
        let cols = columns.value.filter((d) => d != 'profile' && d != 'action');
        let records = items.value;
        let filename = 'Buku Kas';

        if (type == 'csv') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = cols
                .map((d) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item) => {
                cols.map((d, index) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type == 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            cols.map((d) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            rowhtml += '<tr>';
            rowhtml += '<td>-</td>';
            rowhtml += '<td>-</td>';
            rowhtml += '<td>-</td>';
            rowhtml += '<td><b>Saldo Awal</b></td>';
            rowhtml += '<td>-</td>';
            rowhtml += '<td class="num">-</td>';
            rowhtml += '<td class="num">-</td>';
            rowhtml += '<td class="num">-</td>';
            rowhtml += '<td class="num"><b>'+Number(summary.value.openingBalance).toLocaleString()+'</b></td>';
            rowhtml += '</tr>';

            records.map((item) => {
                rowhtml += '<tr>';
                rowhtml += '<td>'+ (item.notrans || '') +'</td>';
                rowhtml += '<td>'+ (item.acc_id || '') +'</td>';
                rowhtml += '<td>'+ (item.name || '') +'</td>';
                rowhtml += '<td>'+ (item.memo || '') +'</td>';
                rowhtml += '<td>'+moment(item.tgl).format("DD-MM-YYYY")+'</td>';
                rowhtml += '<td class="num">'+Number(item.debet || 0).toLocaleString()+'</td>';
                rowhtml += '<td class="num">'+Number(item.kredit || 0).toLocaleString()+'</td>';
                rowhtml += '<td class="num">'+Number(item.mutasi || 0).toLocaleString()+'</td>';
                rowhtml += '<td class="num">'+Number(item.saldo || 0).toLocaleString()+'</td>';
                rowhtml += '</tr>';
            });
            let totalDebet = 0;
            let totalKredit = 0;
            let totalMutasi = 0;
            records.forEach((element) => {
                totalDebet += toNumber(element.debet);
                totalKredit += toNumber(element.kredit);
                totalMutasi += toNumber(element.mutasi);
            });
            const saldoAkhir = records.length ? toNumber(records[records.length - 1].saldo) : 0;

            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;border:1px solid #ddd;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }.num{text-align:right;}</style>';
            rowhtml += '</tbody>';
            rowhtml += '<tfoot><tr>';
            rowhtml += '<th colspan="5" style="text-align:right;">Total</th><th class="num">'+Number(totalDebet).toLocaleString()+'</th><th class="num">'+Number(totalKredit).toLocaleString()+'</th><th class="num">'+Number(totalMutasi).toLocaleString()+'</th><th class="num">'+Number(saldoAkhir).toLocaleString()+'</th></tr>';
            rowhtml += '</tfoot></table>';
            var winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
            // winPrint.close();
        } else if (type == 'pdf') {
            cols = cols.map((d) => {
                return { header: capitalize(d), dataKey: d };
            });
            const doc = new jsPDF('l', 'pt', cols.length > 10 ? 'a3' : 'a4');
            doc.autoTable({
                headStyles: { fillColor: '#eff5ff', textColor: '#515365' },
                columns: cols,
                body: records,
                styles: { overflow: 'linebreak' },
                pageBreak: 'auto',
                margin: { top: 45 },
                didDrawPage: () => {
                    doc.text('Export Table', cols.length > 10 ? 535 : 365, 30);
                },
            });
            doc.save(filename + '.pdf');
        }
    };

    const excel_columns = () => {
        return {
            Name: 'name',
            Position: 'position',
            Office: 'office',
            Age: 'age',
            'Start Date': 'start_date',
            Salary: 'salary',
        };
    };
    const excel_items = () => {
        return items.value;
    };
    const capitalize = (text) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
</script>
