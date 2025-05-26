<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Laporan</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Pembelian</span></li>
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

                        <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Daftar Hutang</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Daftar Pembayaran Hutang</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="simpletabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="input-group sm-4">
                                                <flat-pickr v-model="sorting.startDate"
                                                :config="{dateFormat: 'd-m-Y'}" 
                                                    class="form-control form-control-sm">
                                                </flat-pickr>
                                                
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="input-group sm-4">
                                                <flat-pickr v-model="sorting.endDate"
                                                :config="{dateFormat: 'd-m-Y'}" 
                                                    class="form-control form-control-sm">
                                                </flat-pickr>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="input-group sm-4">
                                                <label>Total Hutang :</label>
                                                <label>{{ Number(totalHutang).toLocaleString() }}</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <!-- <div class="input-group mb-4"> -->
                                                <button variant="primary" class="btn m-1 btn-primary" @click="bind_data()" >CARI</button>
                                                <button variant="primary" class="btn m-1 btn-primary" @click="export_table('print')">Print</button>
                                            <!-- </div> -->
                                        </div>
                                    </div>
                                </div>
                                <v-client-table :data="items.filter(item => Number(item.hutangPembelian) !== 0)" :columns="columns" :options="table_pembelian">
                                    <template #tglPembelian="props"> {{ moment(props.row.tglPembelian).format("D-M-YYYY") }} </template>
                                    <template #hutangPembelian="props"> {{ Number(props.row.hutangPembelian).toLocaleString() }} </template>
                                    <template #total="props"> {{ Number(props.row.total).toLocaleString() }} </template>
                                    <template #typeBayar="props">
                                        {{ props.row.typeBayar === '0' ? 'Cash' : 'Kredit' }}
                                    </template>
                                    <template #action="props">
                                        <a @click="openModal(id = props.row.noNota, sisa = props.row.hutangPembelian)" >
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
                                        </a>
                                        

                                    </template>
                                    <table class="custom-footer">
                                    <tfoot>
                                        <tr>
                                        <td>Total</td>
                                        <td>34235</td>
                                        </tr>
                                    </tfoot>
                                    </table>



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
                                                            <span style="font-size: 30px;">{{ new Intl.NumberFormat().format(Math.floor(sisaHutang)) }}</span>
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
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                
                                <div class="col-md-12 mb-3">
                                    <v-client-table :data="listPembayaran" :columns="columns_bayar" :options="table_optionb">
                                        <template #tglBayar="props"> {{ moment(props.row.tglBayar).format("DD-MM-YYYY") }} </template>
                                        <template #jmlBayar="props"> {{ Number(props.row.jmlBayar).toLocaleString() }} </template>
                                        <template #action="props">
                                            <a href="javascript:void(0);" @click="delete_row(props.row)" >
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
                                                    class="feather feather-trash-2"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </a>
                                        </template>
                                    </v-client-table>
                                    
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
<style>
.table-footer {
  font-weight: bold;
  background-color: #f8f8f8;
  padding: 10px;
  text-align: right;
}
</style>

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

    useMeta({ title: 'Data Laporan Hutang Pembelian Barang' });

    const store = useStore();
    const router = useRouter()

    const columns = ref(['noNota', 'tglPembelian', 'nmSupplier', 'typeBayar', 'hutangPembelian', 'total', 'action']);
    const items = ref([]);
    const table_pembelian = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50, 100],
        perPageSelect: true,
        filterable: true,
        filterable: ['noNota', 'tglPembelian', 'nmSupplier', 'typeBayar', 'hutangPembelian', 'total'],
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['noNota', 'tglPembelian', 'nmSupplier', 'subTotal', 'disc', 'total',],
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

    const isVisible = ref(false);
    const columns_bayar = ref(['noBayar', 'tglBayar', 'jmlBayar', 'metodeBayar', 'action']);
    const table_optionb = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50, 100],
        perPageSelect: true,
        filterable: true,
        filterable: ['noBayar', 'tglBayar', 'jmlBayar', 'metodeBayar'],
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['noBayar', 'tglBayar', 'jmlBayar', 'metodeBayar'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: true,
    });
    const listPembayaran = ref([]);
    const sisaHutang = ref(0);
    const totalHutang = ref(0);
    const paramsbayar = ref({
        noBeli: '',
        noBayar: null,
        tglBayar: moment().format("YYYY-MM-DD"),
        jmlBayar: '',
        metodeBayar: 'cash',
    });

    onMounted(() => {
        bind_data();
        // console.log('on mount pagr')
    });
    onBeforeMount(() => {
        // console.log(' before onmount')
        
    })

    
    const bind_data = () => {
        store.dispatch('GetLaporanPembelian', sorting.value).then(() => {
            // console.log('get laporan pembelian')
            items.value = store.getters.SlaporanPembelian;
        });
        // items.value = store.getters.SlaporanPembelian;
        store.dispatch('GetListBayarPembelian', sorting.value).then(() => {
            listPembayaran.value = store.getters.SlistBayarPembelian;
        });
    }

    const bbm = computed(() => {
        items.value = store.getters.SlaporanPembelian;

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
                rowhtml += '<td>'+item.noNota+'</td>';
                rowhtml += '<td>'+moment(item.tglPembelian).format("DD-MM-YYYY")+'</td>';
                rowhtml += '<td>'+item.nmSupplier+'</td>';
                rowhtml += '<td>'+Number(item.subTotal).toLocaleString()+'</td>';
                rowhtml += '<td>'+Number(item.disc).toLocaleString()+'</td>';
                // rowhtml += '<td>'+Number(item.taxPenjualan).toLocaleString()+'</td>';
                rowhtml += '<td>'+Number(item.total).toLocaleString()+'</td>';
                rowhtml += '</tr>';
                // cols.map((d) => {
                //     let val = item[d] ? item[d] : '';
                //     rowhtml += '<td>' + val + '</td>';
                // }); 'noNota', 'tglPembelian', 'nmSupplier', 'subTotal', 'disc', 'total'
                rowhtml += '</tr>';
            });
            // tot =+val[d];
            let sum = 0;
            // let sumtax = 0;
            records.forEach(element => {
            sum +=  parseInt(element.total);
            // sumtax +=  parseInt(element.taxPenjualan);
            });

            // console.log(sum)

            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody>';
            rowhtml += '<tfoot><tr>'

            // rowhtml += '<th></th><th></th><th>Total</th><th>'+Number(sumtax).toLocaleString()+'</th><th>'+Number(sum).toLocaleString()+'</th></tr>'
            // rowhtml += '<th></th><th></th><th>Total Net</th><th></th><th>'+Number(sum - sumtax).toLocaleString()+'</th>'
            rowhtml += '<tr><th></th><th></th><th></th><th>Total Net</th><th></th><th>'+Number(sum).toLocaleString()+'</th>'
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

    const getNoPembayaran = async () => {
        await store.dispatch('GetNoBayarPembelian').then(() => {
            paramsbayar.value.noBayar = store.getters.NoBayarPembelian;
        });
    };

    const openModal = (id, sisa) => {
        getNoPembayaran()
        // Logic to open the modal
        sisaHutang.value = sisa;
        paramsbayar.value.noBeli = id;
        isVisible.value = true;
        store.dispatch('GetListBayarPembelian', { noBeli: id }).then(() => {
            listPembayaran.value = store.getters.SlistBayarPembelian;
        });
        
    };

    const simpanPembayaran = async () => {

        paramsbayar.value.jmlBayar = parseInt(paramsbayar.value.jmlBayar);

        if (!paramsbayar.value.noBayar || !paramsbayar.value.tglBayar || !paramsbayar.value.jmlBayar || !paramsbayar.value.metodeBayar) {
            alert('Lengkapi data pembayaran!');
            return;
        }
        if (Number(paramsbayar.value.jmlBayar) > Number(sisaHutang.value)) {
            alert('Jumlah bayar melebihi sisa hutang!');
            return;
        }
        try {
            await store.dispatch('SimpanPembayaranPembelian', {
                ...paramsbayar.value,
                sisaHutang: sisaHutang.value
            });
            // Refresh payment list
            store.dispatch('GetListBayarPembelian', { noBeli: paramsbayar.value.noBeli }).then(() => {
                listPembayaran.value = store.getters.SlistBayarPembelian;
            });
            isVisible.value = false;
            bind_data();
        } catch (e) {
            alert('Gagal menyimpan pembayaran!');
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
    // const edit_row = (item) => {
    //     store.dispatch('GetDetailPembelian', {noNota : item.noNota})
    //     store.dispatch('CreateEditPembelian', item);
    //     // router.push({ path: '/editpenjualan' })
    //     // alert('ID: '+ item.noPenjualan);
    // };
    const delete_row = (data) => {
        new window.Swal({
            title: 'Anda Yakin?',
            text: "Hapus Pembayaran !" +data.noBayar,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em'
        }).then(result => {
            if (result.isConfirmed) {
                store.dispatch('DeletePembayaranHutang', { id:data.noBayar})
                .then(response => {
                    bind_data();
                    new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
                }).catch(error => {
                    // console.log('error: ', error)
                    return
                })
            }
        });
    }
</script>
