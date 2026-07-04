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
                                                        <th style="width: 170px;">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="hrt in hartalist" :key="hrt.acc_id">
                                                    <tr v-if="isSupportedLevel(hrt.level)">
                                                        <td style="min-width:100px">
                                                            <template v-if="hrt.jenis !== 'Total'">{{ hrt.acc_id }}</template>
                                                        </td>
                                                        <td :class="{ 'fw-bold': isHeadingRow(hrt) }" :style="nameCellStyle(hrt.level)">
                                                            {{ hrt.name }}
                                                        </td>
                                                        <td :class="['text-end', { 'fw-bold total-line': hrt.jenis === 'Total' }]">
                                                            <span v-if="hrt.jenis === 'Detail' || hrt.jenis === 'Total'">
                                                                {{ formatAmount(hrt.amount) }}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <template v-if="hrt.jenis !== 'Total'">
                                                                <button type="button" class="btn btn-sm btn-outline-primary action-btn" @click="edit_acc(hrt)">Ubah</button>
                                                                <button type="button" class="btn btn-sm btn-outline-danger action-btn" @click="hapus_acc(hrt)">Hapus</button>
                                                            </template>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal
                            v-model:visible="isVisible"
                            :draggable="true"
                            :title="modalTitle"
                            :showCancelButton="true"
                            :cancelButton="{ text: 'Batal', onclick: () => { close_modal(); }, loading: false }"
                            :okButton="{ text: isSaving ? 'Menyimpan...' : 'Simpan', onclick: () => { simpan_acc(); }, loading: isSaving }"
                        >
                            <input type="hidden" v-model="selected.oldid" class="form-control" />
                            <div v-if="isEditMode" class="modal-info mb-3">
                                <div class="info-pill">Kode: {{ selected.accid }}</div>
                                <div class="info-pill">Level: {{ selected.level }}</div>
                                <div class="info-pill" v-if="selected.parent">Induk: {{ selected.parent }}</div>
                                <div class="info-pill">Jenis: {{ selected.jenis }}</div>
                            </div>

                            <template v-else>
                                <label class="form-label mb-1">Kode akun</label>
                                <div class="input-group input-group-sm mb-1">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Kode akun"
                                        v-model="selected.accid"
                                        @input="onAccidInput"
                                    />
                                    <button type="button" class="btn btn-outline-primary" @click="applySuggestedAccid" :disabled="!suggestedAccid">Auto</button>
                                </div>
                                <small v-if="suggestedAccid" class="text-muted d-block mb-3">
                                    Saran kode: {{ suggestedAccid }}
                                </small>
                                <div v-else class="mb-3"></div>

                                <label class="form-label mb-1">Level akun</label>
                                <div class="input-group input-group-sm mb-3">
                                    <select v-model="selected.level" class="form-control">
                                        <option 
                                            v-for="level in levelOptions" 
                                            :key="level" 
                                            :value="level">
                                            Level {{ level }}
                                        </option>
                                    </select>
                                </div>

                                <label class="form-label mb-1">Akun induk</label>
                                <div class="input-group input-group-sm mb-3">
                                    <select v-model="selected.parent" class="form-control" :disabled="String(selected.level) === '1'">
                                        <option v-if="String(selected.level) !== '1'" value="">Pilih akun induk</option>
                                        <option 
                                            v-for="hrt in parentOptions" 
                                            :key="hrt.acc_id" 
                                            :value="hrt.acc_id">
                                            Akun Induk {{ hrt.acc_id }} - {{ hrt.name }}
                                        </option>
                                    </select>
                                </div>

                                <label class="form-label mb-1">Jenis akun</label>
                                <div class="input-group mb-3">
                                    <select v-model="selected.jenis" class="form-control">
                                        <option value="Detail">Detail</option>
                                        <option value="Header">Header</option>
                                    </select>
                                </div>
                            </template>

                            <label class="form-label mb-1">Nama akun</label>
                            <div class="input-group input-group-sm mb-4">
                                <input type="text" class="form-control" v-model="selected.name" placeholder="Nama akun" />
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

    import { computed, ref, onMounted, watch } from 'vue';
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
    const currentGroup = ref('1');
    const currentTitle = ref('Harta');
    const isAccidManual = ref(false);

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
    const isEditMode = computed(() => !!selected.value.oldid);
    const levelOptions = ['1', '2', '3', '4'];

    const parentOptions = computed(() => {
        if (!hartalist.value?.length) {
            return [];
        }

        const level = Number(selected.value.level || 0);
        if (level <= 1) {
            return [];
        }

        const parentLevel = String(level - 1);
        return hartalist.value.filter((h) => h?.acc_id && h.jenis !== 'Total' && String(h.level) === parentLevel);
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
        isAccidManual.value = false;
    };

    const parseAccNumber = (accid) => {
        const value = Number(String(accid || '').replace(/\D/g, ''));
        return Number.isFinite(value) ? value : 0;
    };

    const suggestedAccid = computed(() => {
        if (isEditMode.value || !selected.value.level) {
            return '';
        }

        const level = String(selected.value.level);
        const parent = String(selected.value.parent || '');

        const siblings = hartalist.value.filter((row) => {
            if (String(row.level) !== level || row.jenis === 'Total') {
                return false;
            }

            if (level === '1') {
                return String(row.acc_id || '').startsWith(String(currentGroup.value));
            }

            return String(row.parent || '') === parent;
        });

        const maxSiblingAcc = siblings.reduce((max, row) => {
            const current = parseAccNumber(row.acc_id);
            return current > max ? current : max;
        }, 0);

        if (maxSiblingAcc > 0) {
            return String(maxSiblingAcc + 1);
        }

        if (level === '1') {
            return `${currentGroup.value}0000`;
        }

        const parentNum = parseAccNumber(parent);
        if (parentNum > 0) {
            return String(parentNum + 1);
        }

        return '';
    });

    const applySuggestedAccid = () => {
        if (isEditMode.value || !suggestedAccid.value) {
            return;
        }
        selected.value.accid = suggestedAccid.value;
        isAccidManual.value = false;
    };

    const onAccidInput = () => {
        if (!isEditMode.value) {
            isAccidManual.value = true;
        }
    };

    watch(
        () => [selected.value.level, selected.value.parent, isEditMode.value],
        () => {
            if (isEditMode.value || isAccidManual.value) {
                return;
            }
            selected.value.accid = suggestedAccid.value;
        }
    );

    watch(
        () => [selected.value.level, isEditMode.value, parentOptions.value.length],
        () => {
            if (isEditMode.value) {
                return;
            }

            if (String(selected.value.level) === '1') {
                selected.value.parent = '';
                return;
            }

            const parentExists = parentOptions.value.some((item) => item.acc_id === selected.value.parent);
            if (!parentExists) {
                selected.value.parent = parentOptions.value[0]?.acc_id || '';
            }
        }
    );

    const loadGroup = async (group, title) => {
        feather.replace();
        isLoadingList.value = true;
        currentGroup.value = group;
        currentTitle.value = title;
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
        selected.value.level = '4';
        selected.value.jenis = 'Detail';
        const defaultParent = hartalist.value.find((row) => String(row.level) === '3' && row.jenis !== 'Total');
        selected.value.parent = defaultParent?.acc_id || '';
        selected.value.accid = suggestedAccid.value;
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

    const hapus_acc = async (hrt) => {
        const doDelete = window.confirm(`Hapus akun ${hrt.acc_id} - ${hrt.name}?`);
        if (!doDelete) {
            return;
        }

        isSaving.value = true;
        try {
            const res = await store.dispatch('DeleteAcc', {
                accid: hrt.acc_id,
                level: hrt.level,
            });

            if (res?.data?.success === true) {
                await loadGroup(currentGroup.value, currentTitle.value);
                showToast('success', 'Akun berhasil dihapus');
                return;
            }

            showToast('error', res?.data?.message || 'Gagal menghapus akun');
        } finally {
            isSaving.value = false;
        }
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
        if (!selected.value.accid || !selected.value.name || !selected.value.level) {
            showToast('warning', 'Kode akun, level, dan nama akun wajib diisi');
            return;
        }

        isSaving.value = true;
        try {
            const res = await store.dispatch('CreateAcc', selected.value);
            if (res?.data?.success === true) {
                await loadGroup(currentGroup.value, currentTitle.value);
                isVisible.value = false;
                showToast('success', 'Data akun berhasil disimpan');
                return;
            }
            showToast('error', res?.data?.message || 'Gagal menyimpan data akun');
        } finally {
            isSaving.value = false;
        }
    };

    const close_modal = () => {
        isVisible.value = false;
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

.action-btn {
    margin-right: 6px;
    padding: 1px 6px;
    font-size: 11px;
    line-height: 1.2;
    border-radius: 3px;
}

.modal-info {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.info-pill {
    border: 1px solid #dee2e6;
    border-radius: 999px;
    padding: 3px 10px;
    font-size: 12px;
    background: #f8f9fa;
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
