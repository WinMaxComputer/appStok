<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>COA Neraca</span></li>
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
                                                <h4>{{ judulPage }}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive neraca-table-wrap">
                                            <table class="table table-sm neraca-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 140px;">Kode</th>
                                                        <th>Nama Akun</th>
                                                        <th class="text-end" style="width: 220px;">Jumlah</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="hrt in hartalist" :key="hrt.acc_id">
                                                    <tr v-if="isSupportedLevel(hrt.level)">
                                                        <td style="min-width:100px">
                                                            <template v-if="hrt.jenis !== 'Total'">
                                                                {{ hrt.acc_id }}
                                                                <a href="javascript:void(0);" title="Ubah" class="edit-link" @click="edit_acc(hrt)">Ubah</a>
                                                            </template>
                                                        </td>
                                                        <td :class="{ 'fw-bold': isHeadingRow(hrt) }" :style="nameCellStyle(hrt.level)">
                                                            {{ hrt.name }}
                                                        </td>
                                                        <td :class="['text-end', { 'fw-bold total-line': hrt.jenis === 'Total' }]">
                                                            <span v-if="hrt.jenis === 'Detail' || hrt.jenis === 'Total'">
                                                                {{ formatAmount(hrt.amount) }}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal v-model:visible="isVisible" :draggable="true" :title="modalTitle">
                            <input type="text" v-model="selected.oldid" class="form-control" />
                            <div class="input-group input-group-sm mb-4">
                                <select v-model="selected.parent" class="form-control">
                                    <option 
                                        v-for="hrt in parentOptions" 
                                        :key="hrt.acc_id" 
                                        :value="hrt.acc_id">
                                        Akun Induk {{ hrt.acc_id }} - {{ hrt.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="input-group input-group-sm mb-4">
                                <select v-model="selected.level" class="form-control">
                                    <option 
                                        v-for="level in [...new Set(hartalist.map(h => h.level))]" 
                                        :key="level" 
                                        :value="level">
                                        Level {{ level }}
                                    </option>
                                </select>
                            </div>
                            <div class="input-group mb-4">
                                <select v-model="selected.jenis" class="form-control" >
                                    <option 
                                        v-for="jenis in [...new Set(hartalist.map(h => h.jenis))]" 
                                        :key="jenis" 
                                        :value="jenis">
                                        Jenis {{ jenis }}
                                    </option>
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
                                            <button type="button" class="btn btn-primary btn-send w-100" @click="openCreateModal">Baru</button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-success btn-download w-100" @click="show_harta" :disabled="isLoadingList">
                                                <span v-if="isLoadingList" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                {{ isLoadingList ? 'Memuat...' : 'Harta' }}
                                            </button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-success btn-download w-100" @click="show_hutang" :disabled="isLoadingList">
                                                <span v-if="isLoadingList" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                Hutang
                                            </button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-success btn-download w-100" @click="show_modal" :disabled="isLoadingList">
                                                <span v-if="isLoadingList" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                Modal
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

    import feather from 'feather-icons';

    import { Modal } from 'usemodal-vue3';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'COA Neraca' });

    
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
    const hartalist = ref([]);
    const judulPage = ref('Harta');

    const isSupportedLevel = (level) => ['1', '2', '3', '4'].includes(String(level));

    const isHeadingRow = (row) => row?.jenis === 'Total' || String(row?.jenis || '').startsWith('H');

    const nameCellStyle = (level) => {
        const indentByLevel = {
            '1': '8px',
            '2': '20px',
            '3': '32px',
            '4': '44px',
        };

        return {
            minWidth: '300px',
            paddingLeft: indentByLevel[String(level)] || '8px',
        };
    };

    const formatAmount = (amount) => Number(amount || 0).toLocaleString();

    const modalTitle = computed(() => (selected.value.oldid ? 'Ubah Akun Neraca' : 'Tambah Akun Neraca'));

    const parentOptions = computed(() => {
        if (!hartalist.value?.length) {
            return [];
        }

        if (!selected.value.parent || selected.value.parent.length < 2) {
            return hartalist.value.filter((h) => h?.acc_id);
        }

        const parentPrefix = selected.value.parent.substring(0, 2);
        return hartalist.value.filter((h) => h?.acc_id && h.acc_id.substring(0, 2) === parentPrefix);
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

    const loadGroup = async (group, title) => {
        feather.replace();
        isLoadingList.value = true;
        try {
            await store.dispatch('GetHarta', { group });
            hartalist.value = store.getters.StateHarta || [];
            judulPage.value = title;
        } finally {
            isLoadingList.value = false;
        }
    };

    onMounted(async () => {
        feather.replace();
        await loadGroup('1', 'Harta');
    });

    const show_harta = async () => {
        await loadGroup('1', 'Harta');
    }

    const show_hutang = async () => {
        await loadGroup('2', 'Hutang');
    }

    const show_modal = async () => {
        await loadGroup('3', 'Modal');
    }

    const openCreateModal = () => {
        resetSelected();
        isVisible.value = true;
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

    const simpan_acc = async () => {
        isSaving.value = true;
        try {
            const res = await store.dispatch('CreateAcc', selected.value);
            if (res?.data?.success === true) {
                await loadGroup('1', 'Harta');
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
.neraca-table-wrap {
    overflow-x: auto;
}

.neraca-table {
    width: 100%;
}

.neraca-table :deep(td),
.neraca-table :deep(th) {
    vertical-align: middle;
    white-space: nowrap;
}

.edit-link {
    margin-left: 8px;
    font-size: 12px;
}

.total-line {
    border-top: 1px solid #000;
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
