<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Daftar</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Barang</span></li>
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
                            <button class="btn btn-primary mb-2 me-2" @click="openModal">Tambah</button>
                            <button class="btn btn-primary mb-2 me-2" @click="export_table('print')">Print</button>
                            <button class="btn btn-primary mb-2 me-2" @click="export_table('pdf')">PDF</button>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #hrgJual="props"> {{ Number(props.row.hrgJual).toLocaleString() }} </template>
                            <template #hrgPokok="props"> {{ Number(props.row.hrgPokok).toLocaleString() }} </template>
                            <template #kartuStok="props"> 
                                <a href="javascript:void(0);" @click="viewstok(props.row)" title="Lihat Kartu Stok">
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
                                        class="feather feather-eye text-primary"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>    
                                                    
                                </a>
                            </template>
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

            <div v-if="isKartuStokVisible" class="modal d-block" tabindex="-1" role="dialog" style="background: rgba(0,0,0,0.5);">
                <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Detail Kartu Stok</h5>
                            <button type="button" class="btn-close" @click="isKartuStokVisible = false"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-md-4"><strong>Kode Barang:</strong> {{ kartuStokHeader.kdBarang }}</div>
                                <div class="col-md-4"><strong>Nama Barang:</strong> {{ kartuStokHeader.nmBarang }}</div>
                                <div class="col-md-4"><strong>Periode:</strong> {{ kartuStokHeader.startDate }} sd {{ kartuStokHeader.endDate }}</div>
                            </div>

                            <div class="row mb-3 align-items-end">
                                <div class="col-md-3">
                                    <label class="form-label">Awal</label>
                                    <flat-pickr
                                        v-model="kartuStokHeader.startDate"
                                        :config="kartuStokPickerConfig"
                                        class="form-control form-control-sm"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label">Akhir</label>
                                    <flat-pickr
                                        v-model="kartuStokHeader.endDate"
                                        :config="kartuStokPickerConfig"
                                        class="form-control form-control-sm"
                                    />
                                </div>
                                <div class="col-md-6 d-flex gap-2 justify-content-md-end">
                                    <button class="btn btn-primary" @click="cariKartuStok" :disabled="kartuStokLoading">Cari</button>
                                </div>
                            </div>

                            <div v-if="kartuStokLoading" class="text-center py-4">
                                <h6>Loading detail kartu stok...</h6>
                            </div>

                            <div v-else class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Tanggal</th>
                                            <th class="text-end">Qty Beli</th>
                                            <th class="text-end">Nilai Beli</th>
                                            <th class="text-end">Qty Jual</th>
                                            <th class="text-end">Nilai Jual</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in kartuStokItems" :key="item.id || `${item.tgl}-${item.unit_beli}-${item.unit_jual}`">
                                            <td>{{ moment(item.tgl).format('D-M-YYYY') }}</td>
                                            <td class="text-end">{{ Number(item.unit_beli).toLocaleString() }}</td>
                                            <td class="text-end">{{ Number(item.total_beli).toLocaleString() }}</td>
                                            <td class="text-end">{{ Number(item.unit_jual).toLocaleString() }}</td>
                                            <td class="text-end">{{ Number(item.total_jual).toLocaleString() }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Total</th>
                                            <th class="text-end">{{ Number(kartuStokSummary.unitBeli).toLocaleString() }}</th>
                                            <th class="text-end">{{ Number(kartuStokSummary.totalBeli).toLocaleString() }}</th>
                                            <th class="text-end">{{ Number(kartuStokSummary.unitJual).toLocaleString() }}</th>
                                            <th class="text-end">{{ Number(kartuStokSummary.totalJual).toLocaleString() }}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="isKartuStokVisible = false">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal 
                v-model:visible="isVisible" 
                :draggable="true" 
                :title="'Edit Data Barang'"
                :showCancelButton="false" 
                :cancelButton="{text: 'cancel', onclick: () => {isVisible = false}, loading: false}"
                :okButton="{text: 'SAVE', onclick: () => {edit_barang()}, loading: false}"
                width="80%"
                v-if="loading === false">
                
                <div class="row">
                    <div class="col-md">
                        <label for="inputState">Kode</label>
                        <input v-model="edit.kdB" class="form-control" placeholder="Kode" disabled />
                    </div>
                    <div class="col-md">
                        <label for="inputState">Nama</label>
                        <input v-model="edit.nmB" class="form-control" placeholder="Nama Barang" />
                    </div>
                    <div class="col-md">
                        <label for="inputState">Satuan</label>
                        <input v-model="edit.satuanB" class="form-control" placeholder="Satuan" />
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md">
                        <label for="inputState">Kategori</label>
                        <select class="form-select" v-model="edit.kdktg">
                            <option v-for="ktg in ktgs" :value="ktg.kodeKtg" :key="ktg.id">{{ ktg.namaKtg }}</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label for="inputState">Harga Beli</label>
                        <input v-model="edit.hrgBeli" class="form-control" placeholder="Harga Beli" @keypress="onlyNumber" />
                    </div>
                    <div class="col-md">
                        <label for="inputState">Harga Jual</label>
                        <input v-model="edit.hrgJual" class="form-control" placeholder="Harga Jual" @keypress="onlyNumber" />
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md">
                        <label for="inputState">Merek</label>
                        <input v-model="edit.merek" class="form-control" placeholder="Merek" />
                    </div>
                    <div class="col-md">
                        <label for="inputState">Barcode</label>
                        <input v-model="edit.barcode" class="form-control" placeholder="Barcode" />
                    </div>
                </div>
                <div class="row" v-if="edit.qtyMax == null">
                    <div class="col-md">
                        <label for="inputState">Qty Min</label>
                        <input v-model="edit.qtyMin" class="form-control" placeholder="Qty Min" @keypress="onlyNumber" />
                    </div>
                    
                    <div class="col-md">
                        <label for="inputState">Qty Max</label>
                        <input v-model="edit.qtyMax" class="form-control" placeholder="Qty Max" @keypress="onlyNumber" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <label for="inputState">Akun Penjualan</label>
                        <select id="inputState" v-model="edit.acc_id" class="form-select">
                            <option  v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('41'))" :value="ac.acc_id" :key="ac.acc_id">{{ ac.name }}</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label for="inputState">Akun Hpp</label>
                        <select id="inputState" v-model="edit.acchpp" class="form-select">
                            <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('51'))" :key="ac.acc_id">{{ ac.name }}</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label for="inputState">Akun Persediaan</label>
                        <select id="inputState" v-model="edit.accpersediaan" class="form-select">
                            <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('116'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                        </select>
                    </div>
                    <div class="col-md">
                        <label for="inputState">Akun Tekor</label>
                        <select id="inputState" v-model="edit.accbiaya" class="form-select">
                            <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('52'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                        </select>
                    </div>
                </div>
            </Modal>
            <div v-if="loading === true" class="la-ball-circus" id="loading-indicator">
                <h2 class="text-center mt-3">Loading</h2>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

                    <Modal 
                        v-model:visible="isVisibleTambah" 
                        :draggable="true" 
                        :title="'Tambah Data Barang'"
                        :showCancelButton="false" 
                        :cancelButton="{text: 'cancel', onclick: () => {isVisibleTambah = false}, loading: false}"
                        :okButton="{text: 'SAVE', onclick: () => {simpan_barang()}, loading: false}"
                        width="80%"
                        v-if="loading === false">
                            <div class="modal-body">
                                <form>
                                    <div class="row">
                                        <div class="col-md">
                                            <label for="inputState">Kode</label>
                                            <input v-model="input.kdB" class="form-control" placeholder="Kode" disabled />
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Nama</label>
                                            <input v-model="input.nmB" class="form-control" placeholder="Nama Barang" />
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Satuan</label>
                                            <input v-model="input.satuanB" class="form-control" placeholder="Satuan" />
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md">
                                            <label for="inputState">Kategori</label>
                                            <select class="form-select" v-model="input.kdktg">
                                                <option v-for="ktg in ktgs" :value="ktg.kodeKtg" :key="ktg.id">{{ ktg.namaKtg }}</option>
                                            </select>
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Harga Beli</label>
                                            <input v-model="input.hrgBeli" class="form-control" placeholder="Harga Beli" @keypress="onlyNumber" />
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Harga Jual</label>
                                            <input v-model="input.hrgJual" class="form-control" placeholder="Harga Jual" @keypress="onlyNumber" />
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md">
                                            <label for="inputState">Merek</label>
                                            <input v-model="input.merek" class="form-control" placeholder="Merek" />
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Barcode</label>
                                            <input v-model="input.barcode" class="form-control" placeholder="Barcode" />
                                        </div>
                                    </div>
                                    <div class="row" v-if="input.qtyMax == null">
                                        <div class="col-md">
                                            <label for="inputState">Qty Min</label>
                                            <input v-model="input.qtyMin" class="form-control" placeholder="Qty Min" @keypress="onlyNumber" />
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Qty Max</label>
                                            <input v-model="input.qtyMax" class="form-control" placeholder="Qty Max" @keypress="onlyNumber" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md">
                                            <label for="inputState">Akun Penjualan</label>
                                            <select id="inputState" v-model="input.acc_id" class="form-select">
                                                <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('41'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                                            </select>
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Akun Hpp</label>
                                            <select id="inputState" v-model="input.acchpp" class="form-select">
                                                <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('51'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                                            </select>
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Akun Persediaan</label>
                                            <select id="inputState" v-model="input.accpersediaan" class="form-select">
                                                <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('116'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                                            </select>
                                        </div>
                                        <div class="col-md">
                                            <label for="inputState">Akun Tekor</label>
                                            <select id="inputState" v-model="input.accbiaya" class="form-select">
                                                <option :value="ac.acc_id" v-for="ac in accs.filter(ac => ac.acc_id.toString().startsWith('52'))" :key="ac.acc_id" selected>{{ ac.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </Modal>
        </div>
        <!--  -->
    
    </div>
</template>

<style scoped>
:deep(.flatpickr-calendar),
:deep(.flatpickr-calendar.open) {
    z-index: 100000 !important;
}
</style>

<script setup>
    import { onMounted, ref } from 'vue';

    //pdf export
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';

    import moment from "moment";
    import { Modal } from 'usemodal-vue3';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Data Barang' });

    const store = useStore();
    const router = useRouter();
    const loading = ref(false);

    const columns = ref(['kdBarang','barCode' , 'nmBarang', 'hrgPokok', 'hrgJual', 'namaKtg', 'stokPersediaan', 'kartuStok' ,'action']);

    const modalinput = ref(false);
    const items = ref([]);
    const table_option = ref({
        perPage: 20,
        perPageValues: [20, 100, 150, 200],
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
        sortable: ['kdBarang', 'nmBarang', 'hrgPokok', 'hrgJual', 'namaKtg',],
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
    const isVisibleTambah = ref(false);
    const edit = ref({});
    const isKartuStokVisible = ref(false);
    const kartuStokLoading = ref(false);
    const kartuStokItems = ref([]);
    const kartuStokHeader = ref({
        kdBarang: '',
        nmBarang: '',
        startDate: '',
        endDate: '',
    });
    const kartuStokSummary = ref({
        unitBeli: 0,
        totalBeli: 0,
        unitJual: 0,
        totalJual: 0,
        hpp: 0,
    });
    const kartuStokPickerConfig = ref({
        dateFormat: 'd-m-Y',
        static: true,
    });

    const openModal = () => {
        isVisibleTambah.value = true;
        // const modal = document.getElementById('exampleModalCenter');
        // if (modal) {
        //     const bsModal = new window.bootstrap.Modal(modal);
        //     bsModal.show();
        // }
    };

    const closeModal = () => {
        const modal = document.getElementById('exampleModalCenter');
        if (modal) {
            const bsModal = window.bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
        }
    };
    
    const kdbrg = ref([])
    const ktgs = ref([])
    const input = ref({
        kdB: '',
        kdktg: '',
        nmB: '',
        satuanB: '',
        hrgBeli: '',
        hrgJual: '',
        merek: '',
        qtyMin: '1',
        qtyMax: '999',
        acc_id: '',
        acchpp: '',
        accpersediaan: '',
        accbiaya: ''
    })


   

    onMounted(() => {
        kartuStokPickerConfig.value = {
            dateFormat: 'd-m-Y',
            static: true,
        };
        bind_data();
        GetCoaHpp();
        getKtg();
        getkd();
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, '', window.location.href);
        });
        // setTimeout(function() { accs.value = store.getters.StateCoaList; }, 1000);
    });

    
    const bind_data = () => {
        loading.value = true;
        store.dispatch('GetBarang').then(response => {
            // console.log('response: ', response)
            items.value = store.getters.StateBarang;
            loading.value = false;
        }).catch(error => {
            // console.log('error: ', error)
            loading.value = false;
            return
        })
    }

    // input.value = computed(() => {
    //     kdbrg.value = store.getters.NoBarang;
    // })
    const accs = ref([]);
    const GetCoaHpp= async() => {
        await store.dispatch('GetCoaList').then(response => {
            // console.log('response: ', response)
            accs.value = store.getters.StateCoaList;
        }).catch(error => {
            // console.log('error: ', error)
            return
        })
    }

    const getKtg = async () => {
        await store.dispatch('GetKategori').then(response => {
            // console.log('response: ', response)
            ktgs.value = store.getters.StateKategori;
        }).catch(error => {
            // console.log('error: ', error)
            return
        })
        // console.log(ktgs.value)
    }
    // const kdbrg = ref([])
    const getkd = async () => {
        await store.dispatch('GetNoBarang')
        .then(response => {
            // console.log('response: ', response)
            kdbrg.value = store.getters.NoBarang;
        }).catch(error => {
            // console.log('error: ', error)
            return
        })
        
        // console.log(kdbrg.value)
    }

    const simpan_barang = () => {
        
        if (input.value.kdB == '' || input.value.nmB == '' || input.value.satuanB == '' || input.value.kdktg == '' || input.value.hrgBeli == '' || input.value.hrgJual == '' || input.value.merek == '' || input.value.acc_id == '' || input.value.acchpp == '' || input.value.accpersediaan == '' || input.value.accbiaya == '') {
            new window.Swal({
                title: 'Perhatian',
                text: "Mohon lengkapi data yang diperlukan.",
                type: 'warning',
                padding: '2em'
            });
            // loading.value = false;
            return
        }else{
            loading.value = true;
            const isi = input.value
            store.dispatch('CreateBarang', isi )
            .then(response => {
                loading.value = false;
                bind_data();
                getkd()
                input.value = {
                    kdB: kdbrg.value,
                    kdktg: '',
                    nmB: '',
                    satuanB: '',
                    hrgBeli: '',
                    hrgJual: '',
                    merek: '',
                    qtyMin: '1',
                    qtyMax: '999',
                    acc_id: '',
                    acchpp: '',
                    accpersediaan: '',
                    accbiaya: ''
                }
            }).catch(error => {
                console.log('error: ', error)
                // window.location.reload();
                return
            })
        }
        
       
    }
    const edit_barang = () => {
        // console.log(edit.value)
        loading.value = true;
        const isi = edit.value
        store.dispatch('CreateBarang', isi )
            .then(response => {
                bind_data();
                getkd()
                isVisible.value = false;
                loading.value = false;
            }).catch(error => {
                // console.log('error: ', error)
                loading.value = false;
                return
            })
        // console.log(isi)
        
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
    const viewstok = async (item) => {
        kartuStokHeader.value = {
            kdBarang: item.kdBarang,
            nmBarang: item.nmBarang,
            startDate: sorting.value.startDate,
            endDate: sorting.value.endDate,
        };

        await loadKartuStok(item.kdBarang, kartuStokHeader.value.startDate, kartuStokHeader.value.endDate);
        isKartuStokVisible.value = true;
    };

    const cariKartuStok = async () => {
        if (!kartuStokHeader.value.kdBarang) {
            return;
        }

        await loadKartuStok(
            kartuStokHeader.value.kdBarang,
            kartuStokHeader.value.startDate,
            kartuStokHeader.value.endDate,
        );
    };

    const loadKartuStok = async (kdBarang, startDate, endDate) => {
        kartuStokLoading.value = true;

        try {
            await store.dispatch('GetKartuStok', {
                startDate,
                endDate,
                kdBarang,
            });

            const data = store.getters.StateListKartuStok || [];
            kartuStokItems.value = data;

            const summary = data.reduce((accumulator, current) => {
                accumulator.unitBeli += parseInt(current.unit_beli || 0);
                accumulator.totalBeli += parseInt(current.total_beli || 0);
                accumulator.unitJual += parseInt(current.unit_jual || 0);
                accumulator.totalJual += parseInt(current.total_jual || 0);
                return accumulator;
            }, { unitBeli: 0, totalBeli: 0, unitJual: 0, totalJual: 0 });

            kartuStokSummary.value = {
                ...summary,
                hpp: summary.unitBeli > 0 ? summary.totalBeli / summary.unitBeli : 0,
            };
        } catch (error) {
            console.log('error: ', error);
        } finally {
            kartuStokLoading.value = false;
        }
    };

    const view_row = (item) => {
        modalinput.value = true
        isVisible.value = true;
        edit.value = ({
            kdB: item.kdBarang,
            kdktg: item.ktgBarang,
            barcode: item.barCode,
            nmB: item.nmBarang,
            satuanB: item.satuanBarang,
            hrgBeli: item.hrgPokok,
            hrgJual: item.hrgJual,
            merek: item.merek,
            qtyMin: item.qtyMin,
            qtyMax: item.qtyMax,
            acc_id: item.accid,
            acchpp: item.accid_hpp,
            accpersediaan: item.accid_persediaan,
            accbiaya: item.accid_biaya
        });
        // console.log(item);
        // alert('ID: ' + item.kdBarang + ', Name: ' + item.nmBarang);
    };

    const delete_row = (item) => {
        modalinput.value = true
        // alert('ID: ' + item.kdBarang + ', Name: ' + item.nmBarang);
        store.dispatch('CheckBarangPernahJual', {kdBarang: item.kdBarang}).then(response => {
            // console.log(response)
            // items.value = store.getters.StateBarang;
            if (response.data.exist == true) {

                new window.Swal({
                    title: 'Anda Yahin?',
                    text: "Nama Barang !" +item.nmBarang+" sudah pernah tertransaksikan. harap hapus dulu transaksi yang ada.",
                    type: 'warning',
                    showCancelButton: true,
                    // confirmButtonText: 'Delete',
                    padding: '2em'
                }).then(result => {
                    // console.log(result)
                    if (result.isConfirmed) {
                        // store.dispatch('DeleteBarang', item.id)
                        // .then(response => {
                        //     bind_data();
                        //     new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
                        // }).catch(error => {
                        //     // console.log('error: ', error)
                        //     return
                        // })

                    } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                        // console.log('cancel')
                    } else if (result.isDenied) {
                        // console.log('cancel')
                    }
                    
                });

            } else {
                new window.Swal({
                    title: 'Anda Yakin?',
                    text: "Hapus Nama Barang !" +item.nmBarang,
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    padding: '2em'
                }).then(result => {
                    if (result.isConfirmed) {
                        store.dispatch('DeleteBarang', item.id)
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

        }).catch(error => {
            // console.log('error: ', error)
            return
        })
        
    };

    function onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }   
    }
</script>
