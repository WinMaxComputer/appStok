<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>HTML5 Export</span></li>
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
                            <h5>Daftar Piutang Penjualan</h5>
<span>{{ bbm }}</span>
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
                                        <button variant="primary" class="btn m-1 btn-primary" @click="bind_data()" >CARI</button>
                                        <button variant="primary" class="btn m-1 btn-primary" @click="export_table('print')">Print</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <v-client-table :data="items.filter(item => Number(item.piutangPenjualan) !== 0)" :columns="columns" :options="table_option">
                            <template #tglPenjualan="props"> {{ moment(props.row.tglPenjualan).format("DD-MM-YYYY") }} </template>
                            <template #piutangPenjualan="props"> {{ Number(props.row.piutangPenjualan).toLocaleString() }} </template>
                            <template #totalPenjualan="props"> {{ Number(props.row.totalPenjualan).toLocaleString() }} </template>
                            <template #taxPenjualan="props"> {{ Number(props.row.taxPenjualan).toLocaleString() }} </template>
                            <template #typeBayar="props">
                                {{ props.row.typeBayar === '0' ? 'Cash' : 'Kredit' }}
                            </template>
                            <template #action="props">
                                <router-link :to="{name: 'invoice-penjualan', params: {id: props.row.noPenjualan}}">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-eye"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </router-link>
                                <button class="btn btn-primary" @click="openModal(id = props.row.noPenjualan, sisa = props.row.piutangPenjualan)" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-dollar-sign"
                                    >
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M16 7c-4 0-4 3-4 3s0 3 4 3"></path>
                                        <path d="M8 17c4 0 4-3 4-3s0-3-4-3"></path>
                                    </svg>
                                </button>
                                

                            </template>
                        </v-client-table>

                        <Modal 
                            v-model:visible="isVisible" 
                            :draggable="true" 
                            :title="'PEMBAYARAN NOTA'"
                            :showCancelButton="false" 
                            :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                            :okButton="{text: 'SAVE', onclick: () => {simpanPembayaran()}, loading: false}"
                            width="60%">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Riwayat Pembayaran</label>
                                    <table class="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th>No Bayar</th>
                                                <th>Tanggal</th>
                                                <th>Jumlah</th>
                                                <th>Metode</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="bayar in listPembayaran" :key="bayar.noBayar">
                                                <td>{{ bayar.noBayar }}</td>
                                                <td>{{ bayar.tglBayar }}</td>
                                                <td>{{ new Intl.NumberFormat().format(bayar.jmlBayar) }}</td>
                                                <td>{{ bayar.metodeBayar }}</td>
                                            </tr>
                                            <tr v-if="!listPembayaran || listPembayaran.length === 0">
                                                <td colspan="4" class="text-center">Belum ada pembayaran</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-12">
                                    <div class="totals-row">
                                        <div class="invoice-totals-row ">
                                            <div style="font-size: 20px;">
                                                Sisa
                                            </div>
                                            <!-- <div class="invoice-summary-label"></div> -->
                                            <div class="invoice-summary-value">
                                                <div class="balance-due-amount">
                                                    <span style="font-size: 30px;">{{ new Intl.NumberFormat().format(Math.floor(sisaPiutang)) }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="totals-row">
                                        <div class="invoice-totals-row ">
                                            <div style="font-size: 20px;">Method</div>
                                            <!-- <div class="invoice-summary-label"></div> -->
                                            <div class="invoice-summary-value">
                                                <div class="balance-due-amount">
                                                    <select v-model="paramsbayar.metodeBayar" >
                                                        <option value="cash" selected>Cash</option>
                                                        <option value="credit_card">Credit Card</option>
                                                        <option value="bank_transfer">Bank Transfer</option>
                                                        <option value="ewallet">E-Wallet</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="totals-row">
                                        <div class="invoice-totals-row">
                                            <div style="font-size: 20px;">Jumlah Bayar</div>
                                            <div class="invoice-summary-value">
                                                <div class="balance-due-amount">
                                                    <input
                                                        type="number"
                                                        v-model="paramsbayar.jmlBayar"
                                                        class="form-control"
                                                        placeholder="Masukkan jumlah bayar"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Modal>
                        
                    </div>
                </div>
            </div>
        </div>


        <!--  -->
        
    </div>
</template>

<script setup>
    import { computed, onMounted, ref, onBeforeMount } from 'vue';

    //pdf export
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { useStore } from 'vuex';
    import { useRouter, useRoute } from 'vue-router'

    import { Modal } from 'usemodal-vue3';
    import moment from "moment";

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Data Laporan Penjualan' });

    const store = useStore();
    const router = useRouter()

    const columns = ref(['noPenjualan', 'tglPenjualan', 'nmPelanggan', 'typeBayar', 'piutangPenjualan' ,'totalPenjualan', 'action']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50, 100],
        perPageSelect: true,
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['noPenjualan', 'tglPenjualan', 'nmPelanggan', 'typeBayar', 'totalPenjualan'],
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

    const listPembayaran = ref({});
    const isVisible = ref(false);
    const paramsbayar = ref({
        noJual: '',
        noBayar: null,
        tglBayar: moment().format("YYYY-MM-DD"),
        jmlBayar: '',
        metodeBayar: 'cash',
    });
    const sisaPiutang = ref(0);

    onMounted(() => {
        bind_data();
        console.log('on mount pagr')
    });
    onBeforeMount(() => {
        console.log(' before onmount')
        
    })

    const getNoPembayaran = async () => {
        await store.dispatch('GetNoBayarPenjualan').then(() => {
            paramsbayar.value.noBayar = store.getters.NoBayarPenjualan;
        });
    };


    const openModal = (id, sisa) => {
        getNoPembayaran()
        // Logic to open the modal
        sisaPiutang.value = sisa;
        paramsbayar.value.noJual = id;
        isVisible.value = true;
        store.dispatch('GetListBayarPenjualan', { noJual: id }).then(() => {
            listPembayaran.value = store.getters.SlistBayarPenjualan;
        });
        
    };

    const simpanPembayaran = async () => {

        paramsbayar.value.jmlBayar = parseInt(paramsbayar.value.jmlBayar);

        if (!paramsbayar.value.noBayar || !paramsbayar.value.tglBayar || !paramsbayar.value.jmlBayar || !paramsbayar.value.metodeBayar) {
            alert('Lengkapi data pembayaran!');
            return;
        }
        if (Number(paramsbayar.value.jmlBayar) > Number(sisaPiutang.value)) {
            alert('Jumlah bayar melebihi sisa piutang!');
            return;
        }
        try {
            await store.dispatch('SimpanPembayaranPenjualan', {
                ...paramsbayar.value,
                sisaPiutang: sisaPiutang.value
            });
            // Refresh payment list
            store.dispatch('GetListBayarPenjualan', { noJual: paramsbayar.value.noJual }).then(() => {
                listPembayaran.value = store.getters.SlistBayarPenjualan;
            });
            isVisible.value = false;
            bind_data();
        } catch (e) {
            alert('Gagal menyimpan pembayaran!');
        }
    };

    const bind_data = () => {
        store.dispatch('GetLaporanBarang', sorting.value);
        // items.value = store.getters.SlaporanBbm;
    }

    const bbm = computed(() => {
        items.value = store.getters.SlaporanBarang;

        let sum = 0;
        items.value.forEach(element => {
        sum +=  parseInt(element.total);
        });

        

        // console.log(sum)
        // return { items }
    });

    const export_table = (type) => {
        let cols = columns.value.filter((d) => d != 'profile' && d != 'action');
        let records = items.value;
        let filename = 'table';

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
            records.map((item) => {
                rowhtml += '<tr>';
                rowhtml += '<td>'+item.noPenjualan+'</td>';
                rowhtml += '<td>'+moment(item.tglPenjualan).format("DD-MM-YYYY")+'</td>';
                rowhtml += '<td>'+item.nmPelanggan+'</td>';
                rowhtml += '<td>'+Number(item.subTotalPenjualan).toLocaleString()+'</td>';
                rowhtml += '<td>'+Number(item.totalPenjualan).toLocaleString()+'</td>';
                rowhtml += '</tr>';
                // cols.map((d) => {
                //     let val = item[d] ? item[d] : '';
                //     rowhtml += '<td>' + val + '</td>';
                // });
                rowhtml += '</tr>';
            });
            // tot =+val[d];
            let sum = 0;
            let sumtax = 0;
            records.forEach(element => {
            sum +=  parseInt(element.totalPenjualan);
            sumtax +=  parseInt(element.taxPenjualan);
            });

            // console.log(sum)

            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody>';
            rowhtml += '<tfoot><tr>'

            rowhtml += '<tr><th></th><th></th><th></th><th>Total</th><th></th><th>'+Number(sum).toLocaleString()+'</th></tr>'
            // rowhtml += '<tr><th></th><th></th><th></th><th></th><th>Total Net</th><th></th><th>'+Number(sum - sumtax).toLocaleString()+'</th>'
            rowhtml += '</tr></tfoot></table>'
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
    const edit_row = (item) => {
        store.dispatch('GetDetailPenjualan', {kd : item.noPenjualan})
        store.dispatch('CreateEditPenjualan', item);
        // router.push({ path: '/editpenjualan' })
        // alert('ID: '+ item.noPenjualan);
    };
    
</script>
