<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>COA Biaya</span></li>
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

                            <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
                                <div class="statbox panel box box-shadow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4>Biaya</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive coa-table-wrap">
                                            <table class="table table-sm coa-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 140px;">Kode</th>
                                                        <th>Nama Akun</th>
                                                        <th class="text-end" style="width: 220px;">Jumlah</th>
                                                    </tr>
                                                </thead>
                                                <tbody  v-for="hrt in hartalist" :key="hrt.acc_id" :set="amount = hrt.amount">
                                                    
                                                        <tr v-if="hrt.level === '1'" >
                                                            <td v-if="hrt.jenis != 'Total'" style="min-width:100px">{{ hrt.acc_id }} 
                                                                <a href="javascript:void(0);" title="Ubah" class="edit-link" @click="edit_acc(hrt)">
                                                                    <i class="far fa-address-book"></i>
                                                                </a>
                                                            </td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 400px;" ><b>&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 400px;">&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td v-else-if="hrt.jenis === 'Total'"><b>
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </b></td>
                                                            <td v-else></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '2'">
                                                            <td v-if="hrt.jenis != 'Total'" >{{ hrt.acc_id }}
                                                                <a href="javascript:void(0);" title="Ubah" class="edit-link" @click="edit_acc(hrt)">Ubah</a>
                                                            </td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 300px;"><b>&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td></td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td v-else-if="hrt.jenis === 'Total'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td v-else></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '3'">
                                                            <td v-if="hrt.jenis != 'Total'">{{ hrt.acc_id }}
                                                                <a href="javascript:void(0);" title="Ubah" class="edit-link" @click="edit_acc(hrt)">Ubah</a>
                                                            </td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 300px;"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td v-else-if="hrt.jenis === 'Total'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '4'">
                                                            <td>{{ hrt.acc_id }}
                                                                <a href="javascript:void(0);" title="Ubah" class="edit-link" @click="edit_acc(hrt)">Ubah</a>
                                                            </td>
                                                            <td style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td>
                                                                <div v-if="hrt.acc_id.substring(0,1) === '6'|| hrt.acc_id.substring(0,1) === '3' || hrt.acc_id.substring(0,1) === '4' || hrt.acc_id.substring(0,1) === '5'"> 
                                                                    {{ Number(-1*amount).toLocaleString() }}
                                                                </div>
                                                                <div v-else>{{ Number(amount).toLocaleString() }}</div>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal v-model:visible="isVisible" :draggable="true" :title="modalTitle">
                            <input type="text" class="form-control" v-model="selected.oldid" />
                            <div class="input-group input-group-sm mb-4">
                                <select v-model="selected.parent" class="form-control">
                                    <option v-for="hrt in hartalist" :key="hrt.acc_id" :value="hrt.parent">Akun Induk {{ hrt.parent }}</option>
                                </select>
                            </div>
                            <div class="input-group input-group-sm mb-4">
                                <select v-model="selected.level" class="form-control">
                                    <option v-for="hrt in hartalist" :key="hrt.acc_id" :value="hrt.level">Level {{ hrt.level }}</option>
                                </select>
                            </div>
                            <div class="input-group mb-4">
                                <select v-model="selected.jenis" class="form-control" >
                                    <option v-for="hrt in hartalist" :key="hrt.acc_id" :value="hrt.jenis">{{ hrt.jenis }}</option>
                                </select>
                                
                            </div>
                            <div class="input-group input-group-sm mb-4">
                                <select v-model="selected.accid" class="form-control" disabled>
                                    <option v-for="hrt in hartalist" :key="hrt.acc_id" :value="hrt.acc_id">{{ hrt.name }}</option>
                                </select>
                            </div>
                            <div class="input-group input-group-sm mb-4">
                                <input type="text" class="form-control" v-model="selected.name" />
                            </div>
                            <div class="input-group input-group-sm mb-4">
                                <button type="button" @click="simpan_acc()" class="btn btn-success btn-download" :disabled="isSaving">
                                    <span v-if="isSaving" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                    {{ isSaving ? 'Menyimpan...' : 'Simpan' }}
                                </button>
                            </div>
                        </Modal>
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
                                            <button type="button" @click="cari" class="btn btn-success btn-download w-100" :disabled="isLoadingList">
                                                <span v-if="isLoadingList" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                {{ isLoadingList ? 'Memuat...' : 'Cari' }}
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
    import '@/assets/sass/apps/invoice-preview.scss';

    import { computed, ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    import { Modal } from 'usemodal-vue3';
    import moment from "moment";

    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'COA Biaya' });
    
    const store = useStore();

    const isVisible = ref(false);
    const isLoadingList = ref(false);
    const isSaving = ref(false);
    const selected = ref({
        accid: '',
        name: '',
        level: '',
        parent: '',
        jenis: '',
        oldid: '',
        amount: 0
    });
    const sorting = ref({
        startDate: moment().subtract(30,'d').format("D-M-YYYY"),
        endDate: moment().format("D-M-YYYY"),
        group: '6',
    });

    const hartalist = ref([]);

    const modalTitle = computed(() => (selected.value.oldid ? 'Ubah Akun Biaya' : 'Tambah Akun Biaya'));

    const showToast = (icon, title) => {
        if (window.Swal) {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
            });
            toast.fire({ icon, title, padding: '10px 20px' });
            return;
        }
        window.alert(title);
    };

    const loadData = async (payload = { group: '6' }) => {
        isLoadingList.value = true;
        try {
            await store.dispatch('GetHarta', payload);
            hartalist.value = store.getters.StateHarta || [];
        } finally {
            isLoadingList.value = false;
        }
    };

    onMounted(async () => {
        await loadData({ group: '6' });
    });

    const resetSelected = () => {
        selected.value = {
            accid: '',
            name: '',
            level: '',
            parent: '',
            jenis: '',
            oldid: '',
            amount: 0
        };
    };

    const cari = async () => {
        await loadData(sorting.value);
    };

    const edit_acc = (hrt) => {
        selected.value.accid = hrt.acc_id || '';
        selected.value.oldid = hrt.acc_id || '';
        selected.value.level = hrt.level || '';
        selected.value.parent = hrt.parent || '';
        selected.value.name = hrt.name || '';
        selected.value.jenis = hrt.jenis || '';
        selected.value.amount = hrt.amount || 0;
        isVisible.value = true;
    };

    const simpan_acc = async () => {
        isSaving.value = true;
        try {
            const res = await store.dispatch('CreateAcc', selected.value);
            if (res?.data?.success === true) {
                await loadData({ group: '6' });
                isVisible.value = false;
                showToast('success', 'Data akun berhasil disimpan');
                return;
            }
            showToast('error', 'Gagal menyimpan data akun');
        } finally {
            isSaving.value = false;
        }
    };

    const printPage = () => {
        window.print();
    };
    
</script>

<style scoped>
.coa-table-wrap {
    overflow-x: auto;
}

.coa-table :deep(td),
.coa-table :deep(th) {
    vertical-align: middle;
    white-space: nowrap;
}

.edit-link {
    margin-left: 8px;
    font-size: 12px;
}

.invoice-actions-btn .row {
    row-gap: 10px;
}

@media (max-width: 991px) {
    .invoice-actions-btn {
        margin-top: 16px;
    }
}
</style>
