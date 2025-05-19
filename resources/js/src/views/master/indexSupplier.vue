<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Daftar</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Supplier</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        

        <div class="row layout-top-spacing" ref="content">
            <div class="col-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table panel-body p-0">
                        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                            <button class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Tambah</button>
                            <button class="btn btn-primary mb-2 me-2" @click="export_table('print')">Print</button>
                            <button class="btn btn-primary mb-2 me-2" @click="export_table('pdf')">PDF</button>
                            <button class="btn btn-primary mb-2 me-2" @click="downloadWithCSS()">CSV</button>
<!-- <span>{{ barangs }}</span> -->
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #action="props">

                                <a href="javascript:void(0);" @click="view_row(props.row)" >
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
                                        class="feather feather-edit-2"
                                    >
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </a>
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

            <Modal 
                v-model:visible="isVisible" 
                :draggable="true" 
                :title="'Edit Data Pelanggan'"
                :showCancelButton="false" 
                :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                :okButton="{text: 'SAVE', onclick: () => {edit_supplier()}, loading: false}"
                width="60%">
                <div class="row mb-4">
                    <div class="col-sm-4">
                        <label for="inputState">Kode</label>
                        <input v-model="edit.kdSupplier" class="form-control" placeholder="Kode" disabled />
                    </div>
                    <div class="col-sm">
                        <label for="inputState">Nama</label>
                        <input v-model="edit.nmSupplier" class="form-control" placeholder="Nama Pelanggan" />
                    </div>
                    <div class="col-sm">
                        <label for="inputState">No Tlp</label>
                        <input v-model="edit.tlpSupplier" class="form-control" placeholder="Satuan" @keypress="onlyNumber" />
                    </div>
                    
                </div>
                <div class="row mb-4">
                    <div class="col-sm">
                        <label for="inputState">Alamat</label>
                        <input v-model="edit.almtSupplier" class="form-control" placeholder="Alamat"  />
                    </div>                    
                </div>
                <div class="row mb-4">
                    <div class="col-sm">
                        <label for="inputState">Sales</label>
                        <input v-model="edit.picSupplier" class="form-control" placeholder="Alamat"  />
                    </div>                    
                </div>
            </Modal>

            <!-- <div v-show="modalinput" > -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Tambah Data Supplier</h5>
                                <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-4">
                                    <div class="col-sm-4">
                                        <label for="inputState">Kode</label>
                                        <input v-model="input.kdSupplier" class="form-control" placeholder="Kode" disabled />
                                    </div>
                                    <div class="col-sm">
                                        <label for="inputState">Nama</label>
                                        <input v-model="input.nmSupplier" class="form-control" placeholder="Nama Pelanggan" />
                                    </div>
                                    <div class="col-sm">
                                        <label for="inputState">No HP</label>
                                        <input v-model="input.tlpSupplier" class="form-control" placeholder="No HP" @keypress="onlyNumber" />
                                    </div>
                                </div>
                                <div class="row mb-8">
                                    <div class="col-sm">
                                        <label for="inputState">Alamat</label>
                                        <input v-model="input.almtSupplier" class="form-control" placeholder="Alamat"  />
                                    </div>
                                </div>
                                 <div class="row mb-8">
                                    <div class="col-sm">
                                        <label for="inputState">Sales</label>
                                        <input v-model="input.picSupplier" class="form-control" placeholder="Nama Sales"  />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                                <button type="button" class="btn btn-primary" @click="simpan_supplier()">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->


        </div>
        <!--  -->
    
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';

    //pdf export
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import html2canvas from "html2canvas"

    import { Modal } from 'usemodal-vue3';
    import { useStore } from 'vuex';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Daftar Pelanggan' });

    const store = useStore();

    const columns = ref(['kdSupplier', 'nmSupplier', 'almtSupplier', 'tlpSupplier', 'picSupplier', 'action']);

    const modalinput = ref(false);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['kdSupplier', 'nmSupplier', 'picSupplier'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: true,
    });

    const isVisible = ref(false);
    const edit = ref({});
    const content = ref(null);

    const kdSupplier = ref([])
    const input = ref({
        kdSupplier: kdSupplier,
        nmSupplier: '',
        almtSupplier: '',
        noHpSupplier: '',
    })

    

    onMounted(() => {
        bind_data();
        getkd();
    });

    const downloadWithCSS = () => {
        const doc = new jsPDF();
        /** WITH CSS */
        var canvasElement = document.createElement('canvas');
        html2canvas(content.value, { canvas: canvasElement 
        }).then(function (canvas) {
            const img = canvas.toDataURL("image/jpeg", 0.8);
            doc.addImage(img,'JPEG',100,100);
            doc.save("sample.pdf");
        });
    }
    
    const bind_data = () => {
        store.dispatch('GetSupplier')
        .then(response => {
            items.value = store.getters.StateSupplier;
        }).catch(error => {
            // console.log('error: ', error)
            return
        })
    }

    const barangs = computed(() => {
        // items.value = store.getters.StateBarang;
        kdbrg.value = store.getters.NoBarang;
        // console.log(items)
        // return { kdbrg }
    });

    // input.value = computed(() => {
    //     kdbrg.value = store.getters.NoBarang;
    // })

    // const kdbrg = ref([])
    const getkd = async () => {
        await store.dispatch('GetNoSupplier')
        .then(response => {
            kdSupplier.value = store.getters.NoSupplier;
        }).catch(error => {
            // console.log('error: ', error)
            return
        })
        // console.log(kdbrg.value)
    }

    const simpan_supplier = () => {

        const isi = input.value
        store.dispatch('CreateSupplier', isi )
        .then(response => {
            bind_data();
            getkd()
            modalinput.value = false
            new window.Swal('Success!', 'Supplier saved.', 'success');
        }).catch(error => {
            // console.log('error: ', error)
            return
        })        
    }

    const edit_supplier = () => {
        
        const isi = edit.value
        store.dispatch('CreateSupplier', isi )
        .then(response => {
            bind_data();
            getkd()
            isVisible.value = false;
            new window.Swal('Success!', 'Supplier saved.', 'success');
        }).catch(error => {
            // console.log('error: ', error)
            return
        })        
    }

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
                cols.map((d) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
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
    const view_row = (item) => {
        modalinput.value = true
        isVisible.value = true;
        edit.value = ({
            kdSupplier: item.kdSupplier,
            nmSupplier: item.nmSupplier,
            almtSupplier: item.almtSupplier,
            tlpSupplier: item.tlpSupplier,
            picSupplier: item.picSupplier,
        });
    };

    const delete_row = (item) => {
        modalinput.value = true
        // alert('ID: ' + item.kdBarang + ', Name: ' + item.nmBarang);
        new window.Swal({
            title: 'Anda Yahin?',
            text: "Hapus Nama Supplier !" +item.nmSupplier,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em'
        }).then(result => {
            if (result.value) {
                store.dispatch('DeleteSupplier', item.id)
                .then(response => {
                    bind_data();
                    new window.Swal('Deleted!', 'Your supplier has been deleted.', 'success');
                }).catch(error => {
                    // console.log('error: ', error)
                    return
                })

            }
        });
    };

    function onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }   
    }
</script>
