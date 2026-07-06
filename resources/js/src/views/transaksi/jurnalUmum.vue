<template>
    <div class="layout-px-spacing apps-invoice-add jurnal-umum-page">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Transaksi</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Jurnal Umum</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <!-- <div class="row invoice layout-top-spacing layout-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container"> -->
        <div class="underline-content tabs">
            <ul class="nav nav-tabs mb-3" id="lineTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="underline-home-tab" data-bs-toggle="tab" href="#underline-home" role="tab" aria-controls="underline-home" aria-selected="true">
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
                            class="feather feather-home"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Transaksi
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="underline-profile-tab" data-bs-toggle="tab" href="#underline-profile" role="tab" aria-controls="underline-profile" aria-selected="false"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Daftar
                    </a>
                </li>
            </ul>

            <div class="tab-content" id="lineTabContent-3">
                <div class="tab-pane fade show active" id="underline-home" role="tabpanel" aria-labelledby="underline-home-tab">

                    <div class="row">
                        <div class="col-xl-12">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title ju-head">
                                        <div class="invoice-title">Jurnal Umum</div>
                                        <div class="ju-subtitle">Pastikan total debet dan kredit seimbang sebelum disimpan.</div>
                                        <div v-if="isEditMode" class="ju-edit-badge">
                                            Mode Edit: {{ editSourceNoTrans }}
                                        </div>
                                    </div>

                                    <div class="invoice-detail-header">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">

                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">No Nota</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.noNota" id="number" class="form-control form-control-sm" placeholder="#0001" disabled />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Tgl</label>
                                                        <div class="col-sm-9">
                                                            <flat-pickr v-model="params.tglNota" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-xl-5 invoice-address-client">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items ju-section-card">
                                        <div class="table-responsive ju-table-wrap">
                                            <table>
                                                <thead>
                                                    <tr style="padding:0;margin:0;">
                                                        <th class=""></th>
                                                        <th class="text-end">Akun</th>
                                                        <th>Keterangan</th>
                                                        <th class="">Debet</th>
                                                        <th class="">Kredit</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index">
                                                        <td style="padding:0;margin:0;">
                                                            <ul >
                                                                <li>
                                                                    <a href="javascript:void(0);" class="delete-item" @click="remove_item(item)">
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
                                                                            class="feather feather-x-circle"
                                                                        >
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td style="padding:0;margin:0;">
                                                            <!-- <input type="text" v-model="item.kredit" :id="'total'+index" width="100%" placeholder="Quantity" /> -->
                                                            <select id="inputState" v-model="item.acc" class="form-select">
                                                                <option :value="ac.acc_id" v-for="ac in accs" :key="ac.acc_id" selected>{{ ac.name }}</option>
                                                            </select>
                                                        </td>
                                                        <td style="padding:0;margin:0;" >
                                                            <input type="text" v-model="item.name" class="form-control form-control-sm" placeholder="Deskripsi jurnal" />
                                                            <!-- <select id="inputState" v-model="item.title" style="width: 100%;height: 25px;">
                                                                <option :value="br" v-for="br in barangs" :key="br.id" selected>{{ br.nama_bbm }}</option>
                                                            </select> -->
                                                        </td>
                                                        <td style="padding:0;margin:0;">
                                                            <input
                                                                type="text"
                                                                v-model="item.debet"
                                                                :id="'debet'+index"
                                                                width="100%"
                                                                @input="getTotal()"
                                                                placeholder="Debet"
                                                                class="form-control form-control-sm"
                                                                @keypress="onlyNumber($event)"
                                                            />
                                                            <!-- <input type="text" v-model="item.kdPersediaan.kdPersediaan" :id="'rate'+index" class="form-control form-control-sm" placeholder="Price" /> -->
                                                        </td>
                                                        <td style="padding:0;margin:0;">
                                                            <input
                                                                type="text"
                                                                v-model="item.kredit"
                                                                :id="'kredit'+index"
                                                                width="100%"
                                                                @input="getTotal()"
                                                                placeholder="Kredit"
                                                                class="form-control form-control-sm"
                                                                @keypress="onlyNumber($event)"
                                                            />
                                                        </td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <button type="button" class="btn btn-secondary additem btn-sm" @click="add_item()">Add Item</button>
                                    </div>


                                    <div class="invoice-detail-total ju-section-card">
                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="invoice-actions-btn">
                                                    <div class="invoice-action-btn">
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                <a href="javascript:;" @click="simpanBiaya" class="btn btn-success btn-download">
                                                                    {{ isEditMode ? 'Update' : 'Save' }}
                                                                </a>
                                                            </div>
                                                            <div v-if="isEditMode" class="col-sm-4">
                                                                <a href="javascript:;" @click="cancelEditMode" class="btn btn-outline-secondary btn-download">Batal Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            

                                            <div class="col-md-6">
                                                <div class="totals-row">

                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total Debet</div>
                                                        <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <span>{{ formatNumber(totalDebet) }}</span>
                                                        </div>
                                                    </div>

                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total Kredit</div>
                                                        <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <span>{{ formatNumber(totalKredit) }}</span>
                                                        </div>
                                                    </div>

                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Status</div>
                                                        <div class="invoice-summary-label"></div>
                                                        <div class="invoice-summary-value">
                                                            <span :class="isBalanced ? 'text-success fw-bold' : 'text-danger fw-bold'">
                                                                {{ isBalanced ? 'Seimbang' : 'Belum Seimbang' }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-note">
                                        <div class="row">
                                            <div class="col-md-12 align-self-center">
                                                <div class="form-group row invoice-note">
                                                    <label for="invoice-detail-notes" class="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                    <div class="col-sm-12">
                                                        <textarea
                                                            v-model="params.notes"
                                                            rows="3"
                                                            id="invoice-detail-notes"
                                                            class="form-control"
                                                            placeholder='Notes - For example, "Thank you for doing business with us"'
                                                        ></textarea>
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
                <div class="tab-pane fade" id="underline-profile" role="tabpanel" aria-labelledby="underline-profile-tab">

                    <div class="col-xl-12">
                        <div class="invoice-content">
                            <div class="invoice-detail-body">
                                <!-- <div class="invoice-detail-title">
                                    
                                    <div class="invoice-title">
                                    PO BBM
                                    </div>
                                </div> -->

                                <div class="invoice-detail-header ju-list-card">
                                    <div class="row justify-content-between">

                                       <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="doc-container">
                                                    <div class="row">
                                                        <div class="col-xl-9">
                                                            <div class="invoice-container">
                                                                <div class="custom-table panel-body p-0 ju-list-table-wrap">

                                                                    <v-client-table :data="list" :columns="columns" :options="table_option">
                                                                        <template #notrans="props"> {{ props.row.notrans }} </template>
                                                                        <template #tgl="props"> {{ moment(props.row.tgl).format("DD-MM-YYYY") }} </template>
                                                                        <template #name="props"> {{ props.row.name || '-' }} </template>
                                                                        <template #memo="props"> {{ props.row.memo || '-' }} </template>
                                                                        <template #debet="props"> {{ Number(props.row.debet).toLocaleString() }} </template>
                                                                        <template #kredit="props"> {{ Number(props.row.kredit).toLocaleString() }} </template>
                                                                        <template #action="props">
                                                                            <a href="javascript:void(0);" @click="edit_row(props.row)">
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
                                                                            <a href="javascript:void(0);" @click="delete_row(props.row)">
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
                                                                            <!-- <a href="javascript:void(0);" @click="delete_row(props.row)"> Delete </a> -->
                                                                        </template>
                                                                    </v-client-table>

                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="ju-filter-panel">
                                                                <div class="row g-2">
                                                                    <div class="col-xl-12 col-md-3 col-sm-6">
                                                                        <a href="javascript:;" class="btn btn-secondary btn-print w-100" @click="export_table('print')">Print</a>
                                                                    </div>
                                                                    <div class="col-xl-12 col-md-6 col-sm-12">
                                                                        <label for="inputState">Awal</label>
                                                                        <flat-pickr v-model="sorting.startDate"
                                                                            :config="{dateFormat: 'd-m-Y'}"
                                                                            class="form-control form-control-sm">
                                                                        </flat-pickr>
                                                                    </div>
                                                                    <div class="col-xl-12 col-md-6 col-sm-12">
                                                                        <label for="inputState">Akhir</label>
                                                                        <flat-pickr v-model="sorting.endDate"
                                                                            :config="{dateFormat: 'd-m-Y'}"
                                                                            class="form-control form-control-sm">
                                                                        </flat-pickr>
                                                                    </div>
                                                                    <div class="col-xl-12 col-md-3 col-sm-6">
                                                                        <a href="javascript:;" @click="cari" class="btn btn-success btn-download w-100">Cari</a>
                                                                    </div>
                                                                </div>

                                                                <div class="ju-list-summary mt-3">
                                                                    <div class="ju-summary-row">
                                                                        <span>Total Baris</span>
                                                                        <strong>{{ list.length }}</strong>
                                                                    </div>
                                                                    <div class="ju-summary-row">
                                                                        <span>Total Debet</span>
                                                                        <strong>{{ formatNumber(daftarDebet) }}</strong>
                                                                    </div>
                                                                    <div class="ju-summary-row">
                                                                        <span>Total Kredit</span>
                                                                        <strong>{{ formatNumber(daftarKredit) }}</strong>
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

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    import '@/assets/sass/apps/invoice-add.scss';

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import moment from 'moment';

    import { computed, ref, onMounted, watch } from 'vue';
    import { useStore } from 'vuex';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Jurnal Umum' });

    const store = useStore();

    const items = ref([]);
    const list = ref([]);
    const accs = ref([]);
    const nobiaya = ref('');
    const isEditMode = ref(false);
    const editSourceNoTrans = ref('');

    const params = ref({
        noNota: '',
        tglNota: moment().format('YYYY-MM-DD'),
        total: 0,
        notes: '',
    });

    const columns = ref(['notrans', 'tgl', 'name' ,'memo' ,'debet', 'kredit' ,'action']);
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
        sortable: ['notrans', 'tgl', 'name', 'memo', 'debet', 'kredit'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: true,
        resizableRows: true,
    });


    const sorting = ref({
        startDate: moment().subtract(30, 'd').format('D-M-YYYY'),
        endDate: moment().format('D-M-YYYY')
    });

    const totalDebet = computed(() => items.value.reduce((sum, row) => sum + Number(row.debet || 0), 0));
    const totalKredit = computed(() => items.value.reduce((sum, row) => sum + Number(row.kredit || 0), 0));
    const isBalanced = computed(() => totalDebet.value === totalKredit.value && totalDebet.value > 0);
    const daftarDebet = computed(() => list.value.reduce((sum, row) => sum + Number(row.debet || 0), 0));
    const daftarKredit = computed(() => list.value.reduce((sum, row) => sum + Number(row.kredit || 0), 0));

    const formatNumber = (num) => new Intl.NumberFormat().format(Number(num || 0));

    const notify = (icon, title, text = '') => {
        if (window.Swal && typeof window.Swal.fire === 'function') {
            window.Swal.fire({ icon, title, text, padding: '2em' });
            return;
        }
        new window.Swal({ title, text, type: icon, padding: '2em' });
    };

    const GetCoaList = async () => {
        await store.dispatch('GetCoaList', { acc: '' });
        accs.value = store.getters.StateCoaList || [];
    };

    const GetNoJurnalUmum = async () => {
        await store.dispatch('GetNoJurnalUmum');
        nobiaya.value = store.getters.NoJurnalUmum || '';
    };

    const GetJurnalUmum = async () => {
        await store.dispatch('GetJurnalUmum', sorting.value);
        list.value = normalizeJurnalRows(store.getters.StateGjList || []);
    };

    const normalizeJurnalRows = (rows) => {
        const seen = new Set();
        const result = [];

        for (const row of rows) {
            const key = [
                row.notrans || '',
                row.tgl || '',
                row.acc_id || '',
                Number(row.debet || 0),
                Number(row.kredit || 0),
                row.memo || '',
                row.name || ''
            ].join('|');

            if (seen.has(key)) {
                continue;
            }

            seen.add(key);
            result.push(row);
        }

        return result;
    };


    const getTotal = () => {
        params.value.total = totalDebet.value;
    };


    const simpanBiaya = async () => {
        const detail = items.value.filter((row) => row.acc && (Number(row.debet || 0) > 0 || Number(row.kredit || 0) > 0));

        if (!detail.length) {
            notify('warning', 'Detail jurnal kosong', 'Isi akun dan nominal minimal satu baris.');
            return;
        }

        if (!isBalanced.value) {
            notify('warning', 'Jurnal belum seimbang', 'Total debet dan kredit harus sama.');
            return;
        }

        const header = {
            ...params.value,
            total: totalDebet.value,
        };

        try {
            if (isEditMode.value && editSourceNoTrans.value) {
                await store.dispatch('UpdateJurnalUmum', {
                    targetNoTrans: editSourceNoTrans.value,
                    header,
                    detail,
                });
            } else {
                await store.dispatch('insertJuurnalUmum', [header, detail]);
            }
            notify('success', 'Berhasil', 'Jurnal umum berhasil disimpan.');
            await Promise.all([GetNoJurnalUmum(), GetJurnalUmum()]);
            resetItems();
            isEditMode.value = false;
            editSourceNoTrans.value = '';
        } catch (error) {
            notify('error', 'Gagal menyimpan', 'Terjadi kendala saat menyimpan jurnal umum.');
        }
    };

    const resetItems = () => {
        items.value = [
            { id: 1, name: '', satuan: '', acc: '', debet: 0, kredit: 0 },
            { id: 2, name: '', satuan: '', acc: '', debet: 0, kredit: 0 },
        ];
        getTotal();
    };

    onMounted( async () => {
        resetItems();

        let dt = new Date();
        params.value.invoice_date = JSON.parse(JSON.stringify(dt));
        dt.setDate(dt.getDate() + 5);
        params.value.due_date = dt;

        // console.log(paramssupplier.value)
       
        await Promise.all([GetCoaList(), GetNoJurnalUmum(), GetJurnalUmum()]);
        
    });

    watch(
        () => nobiaya.value,
        (val) => {
            params.value.noNota = val || '';
        },
        { immediate: true }
    );


    const add_item = () => {
        
        let max_id = 0;
        // let sub = 0
        // for(let i = 0; i < items.value.length; i++){
        //     sub = items.value[i].rate * items.value[i].quantity;
        // }
        if (items.value && items.value.length) {
            max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
            // items.title.value.focus();
        }
        items.value.push({ id: max_id + 1, name: '', biaya:'', satuan: '', acc: '', debet: 0, kredit: 0 });
        // items.value[1].title.focus();
    };

    const remove_item = (item) => {
        items.value = items.value.filter((d) => d.id != item.id);
    };

    function onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }   
    }
    const cari = async () => {
        await GetJurnalUmum();
    };

    const export_table = (type) => {
        if (type === 'print') {
            window.print();
        }
    };

    const edit_row = (row) => {
        const notrans = row.notrans || '';
        if (!notrans) {
            notify('warning', 'Data tidak valid', 'Nomor transaksi tidak ditemukan.');
            return;
        }

        const detailRows = list.value.filter((d) => d.notrans === notrans);
        if (!detailRows.length) {
            notify('warning', 'Detail tidak ditemukan', 'Baris detail jurnal tidak tersedia.');
            return;
        }

        const first = detailRows[0];

        isEditMode.value = true;
        editSourceNoTrans.value = notrans;
        params.value.noNota = notrans;
        params.value.tglNota = first.tgl ? moment(first.tgl).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD');
        params.value.notes = first.memo || '';

        items.value = detailRows.map((d, idx) => ({
            id: idx + 1,
            name: d.memo || '',
            satuan: '',
            acc: d.acc_id || '',
            debet: Number(d.debet || 0),
            kredit: Number(d.kredit || 0),
        }));
        getTotal();

        const transaksiTab = document.getElementById('underline-home-tab');
        transaksiTab?.click();
    };

    const cancelEditMode = async () => {
        isEditMode.value = false;
        editSourceNoTrans.value = '';
        resetItems();
        params.value.notes = '';
        await GetNoJurnalUmum();
    };

    const delete_row = (data) => {
        // alert(data.kd_trans);
        new window.Swal({
            title: 'Anda Yakin?',
            text: "Hapus Jurnal !" +data.notrans,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em'
        }).then(result => {
            if (result.value) {
                store.dispatch('DeleteJurnalUmum', { id:data.notrans})
                .then(response => {
                    GetNoJurnalUmum();
                    GetJurnalUmum();
                    new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
                }).catch(error => {
                    // console.log('error: ', error)
                    return
                })
            }
        });
    };
</script>

<style scoped>
    .jurnal-umum-page .ju-head {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 0.5rem;
    }

    .jurnal-umum-page .ju-subtitle {
        font-size: 0.85rem;
        color: #6b7280;
    }

    .jurnal-umum-page .ju-edit-badge {
        margin-top: 0.25rem;
        display: inline-flex;
        align-items: center;
        font-size: 0.78rem;
        font-weight: 600;
        color: #92400e;
        background: #fef3c7;
        border: 1px solid #fde68a;
        border-radius: 999px;
        padding: 0.2rem 0.55rem;
        width: fit-content;
    }

    .jurnal-umum-page .ju-section-card {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 14px;
        background: #fff;
    }

    .jurnal-umum-page .ju-table-wrap table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 8px;
    }

    .jurnal-umum-page .ju-table-wrap thead th {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #6b7280;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 8px;
    }

    .jurnal-umum-page .ju-table-wrap tbody tr {
        background: #f9fafb;
    }

    .jurnal-umum-page .ju-table-wrap tbody td {
        vertical-align: middle;
        border-top: 1px solid #eceff4;
        border-bottom: 1px solid #eceff4;
        padding: 6px;
    }

    .jurnal-umum-page .ju-table-wrap tbody td:first-child {
        border-left: 1px solid #eceff4;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .jurnal-umum-page .ju-table-wrap tbody td:last-child {
        border-right: 1px solid #eceff4;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .jurnal-umum-page .ju-list-card {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 12px;
        background: #fff;
    }

    .jurnal-umum-page .ju-filter-panel {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 10px;
        background: #f8fafc;
    }

    .jurnal-umum-page .ju-list-summary {
        border-top: 1px dashed #cbd5e1;
        padding-top: 10px;
        display: grid;
        gap: 8px;
    }

    .jurnal-umum-page .ju-summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
    }

    .jurnal-umum-page .ju-list-table-wrap {
        border: 1px solid #eef2f7;
        border-radius: 10px;
        overflow: hidden;
    }

    @media (max-width: 991px) {
        .jurnal-umum-page .invoice-detail-total .col-md-6 {
            margin-top: 12px;
        }

        .jurnal-umum-page .ju-list-card {
            padding: 8px;
        }
    }
</style>
