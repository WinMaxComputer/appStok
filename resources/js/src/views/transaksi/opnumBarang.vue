<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <!-- <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#tableSimple" class="nav-link">Simple</a>
                    <a href="#tableHover" class="nav-link">Hover</a>
                    <a href="#tableStriped" class="nav-link">Striped</a>
                    <a href="#tableLight" class="nav-link">Light</a>
                    <a href="#tableCaption" class="nav-link">Caption</a>
                    <a href="#tableProgress" class="nav-link">Progress</a>
                    <a href="#tableContextual" class="nav-link">Contextual</a>
                    <a href="#tableDropdown" class="nav-link">Dropdown</a>
                    <a href="#tableFooter" class="nav-link">Footer</a>
                    <a href="#tableCheckbox" class="nav-link">Checkbox</a>
                </div>
            </div> -->
            <div class="row layout-top-spacing">
                <div class="col-lg-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
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
                            class="feather feather-bell"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        Stok Opnum 
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">

                <div id="tableHover" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <!-- <h4>Hover Table</h4> -->
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start px-3 pt-3 pb-0">
                            <!-- <div class="row"> -->
                                <div class="col-md-4">
                                    <div class="input-group mb-4">
                                        <input type="text" class="form-control form-control-sm" v-model="headopnum.kdOpnum" disabled>
                                        <flatPickr v-model="headopnum.tglOpnum" 
                                            :config="{dateFormat: 'd-m-Y'}"
                                            class="form-control form-control-sm">
                                        </flatPickr>
                                        <button variant="primary" class="btn m-1 btn-primary" @click="simpanOpnum()">Simpan</button>
                                        <!-- <button variant="primary" class="btn m-1 btn-primary" @click="export_table('pdf')">PDF</button> -->
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                        <div class="panel-body">
                            <v-client-table :data="table_1" :columns="columns" :options="table_option">
                                <template #kdBarang="props">
                                    <div class="d-flex align-items-center gap-2">
                                        <select v-model="posting[props.row.kdBarang]" class="form-select form-select-sm w-auto">
                                            <option value="0">Tidak</option>
                                            <option value="1">Ya</option>
                                        </select>
                                        <span>{{ props.row.kdBarang }}</span>
                                    </div>
                                </template>
                                <template #nmBarang="props">{{ props.row.nmBarang }}</template>
                                <template #stokPersediaan="props">{{ props.row.stokPersediaan }}</template>
                                <template #namaKtg="props">{{ props.row.namaKtg }}</template>
                                <template #qty="props">
                                    <div :style="{ width: inp + 'px' }">
                                        <input type="text" class="form-control form-control-sm" v-model="item_now[props.row.kdBarang]" @keypress="onlyNumber" />
                                    </div>
                                </template>
                                <template #keterangan="props">
                                    <div :style="{ width: inp + 'px' }">
                                        <input type="text" class="form-control form-control-sm" v-model="keterangan[props.row.kdBarang]" />
                                    </div>
                                </template>
                                <template #selisih="props">{{ Number(props.row.stokPersediaan || 0) - Number(item_now[props.row.kdBarang] || 0) }}</template>
                            </v-client-table>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, computed } from 'vue';

    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/tables/table-basic.scss';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { useStore } from 'vuex';
    
    import moment from "moment";

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Opnum Barang' });

    const store = useStore();
    const table_1 = ref([]);
    const item_now = ref({});
    const posting = ref({});
    const keterangan = ref({});
    const noopnum = ref('');
    const total = ref(0);
    const inp = ref(80);
    const columns = ref(['kdBarang', 'nmBarang', 'stokPersediaan', 'namaKtg', 'qty', 'keterangan', 'selisih']);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        perPageSelect: true,
        skin: 'table table-hover table-bordered',
        columnsClasses: { action: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['kdBarang', 'nmBarang', 'stokPersediaan', 'namaKtg'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: true,
    });
    const headopnum = ref({
        kdOpnum: '',
        tglOpnum: moment().format('D-M-YYYY'),
        userOpnum: '1',
        totalOpnum: 0,
    });

    onMounted(() => {
        bind_data();
        getNoOpnum();
    });

    const getNoOpnum = async () => {
        await store.dispatch('GetNoOpnum');
        noopnum.value = store.getters.NoOpnum;
        headopnum.value.kdOpnum = noopnum.value;
    };

    const bind_data = async () => {
        await store.dispatch('GetBarang');
        table_1.value = store.getters.StateBarang || [];
        item_now.value = {};
        keterangan.value = {};
        posting.value = {};

        table_1.value.forEach((item) => {
            item_now.value[item.kdBarang] = item.qty ?? '';
            keterangan.value[item.kdBarang] = item.keterangan ?? '';
            posting.value[item.kdBarang] = item.posting ?? '0';
        });
    };

    const simpanOpnum = async () => {
        const dataArr = table_1.value || [];
        const arr = [];
        let tota = 0;

        for (let i = 0; i < dataArr.length; i++) {
            const rowId = dataArr[i].kdBarang;
            const qty = Number(item_now.value[rowId] ?? 0);
            const stok = Number(dataArr[i].stokPersediaan || 0);
            const selisih = stok - qty;
            const subtotal = Number(dataArr[i].hrgPokok || 0) * selisih;
            const ket = keterangan.value[rowId] || '-';

            if (!Number.isNaN(subtotal) && qty > 0) {
                arr.push({
                    kdBarang: dataArr[i].kdBarang,
                    nmBarang: dataArr[i].nmBarang,
                    accid_persediaan: dataArr[i].accid_persediaan,
                    accid_biaya: dataArr[i].accid_biaya,
                    keterangan: ket,
                    posting: posting.value[rowId] ?? '0',
                    qty: qty,
                    selisih: selisih,
                    total: subtotal,
                });
                tota += subtotal;
            }

            item_now.value[rowId] = '';
            keterangan.value[rowId] = '';
            posting.value[rowId] = '0';
        }

        if (!arr.length) {
            return;
        }

        total.value = tota;
        headopnum.value.totalOpnum = tota;

        await store.dispatch('CreateOpnum', [headopnum.value, arr]);
        await getNoOpnum();
        await bind_data();
    };


    const random_class = (index) => {
        if (index == 0) {
            return 'default';
        } else if (index == 1) {
            return 'primary';
        } else if (index == 2) {
            return 'secondary';
        } else if (index == 3) {
            return 'success';
        } else if (index == 4) {
            return 'dark';
        } else if (index == 5) {
            return 'danger';
        } else if (index == 6) {
            return 'info';
        } else if (index == 7) {
            return 'warning';
        }
        return 'dark';
    };

    function onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }   
    }

</script>
