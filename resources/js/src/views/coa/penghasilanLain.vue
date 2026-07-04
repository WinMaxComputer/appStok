<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>COA Penghasilan Lain</span></li>
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
                                                <h4>Penghasilan Lain</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <!-- <div class="table-responsive"> -->

                                            
                                            <table>
                                                <tbody  v-for="(hrt, index) in hartalist" :key="hrt.acc_id" :set="amount = hrt.amount">
                                                    
                                                        <tr v-if="hrt.level === '1'" >
                                                            <td v-if="hrt.jenis != 'Total'" style="min-width:70px">{{ hrt.acc_id }}</td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 400px;" ><b>&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 400px;">&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">
                                                                <div v-if="hrt.acc_id.substring(0,1) === '2'|| hrt.acc_id.substring(0,1) === '2'"> 
                                                                    {{ Number(amount).toLocaleString() }}
                                                                </div>
                                                                <div>{{ Number(amount += hrt.amount[index]).toLocaleString() }}</div>
                                                                
                                                            </td>
                                                            <td v-else-if="hrt.jenis === 'Total'"><b>{{ Number(amount).toLocaleString() }}</b></td>
                                                            <td v-else></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '2'">
                                                            <td v-if="hrt.jenis != 'Total'" >{{ hrt.acc_id }}</td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 300px;"><b>&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td></td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">{{ Number(amount).toLocaleString() }}</td>
                                                            <td v-else-if="hrt.jenis === 'Total'">{{ Number(amount).toLocaleString() }}</td>
                                                            <td v-else></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '3'">
                                                            <td v-if="hrt.jenis != 'Total'">{{ hrt.acc_id }}</td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Total' || hrt.jenis.substring(0,1) === 'H'" style="min-width: 300px;"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</b></td>
                                                            <td v-else style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td v-if="hrt.jenis === 'Total'" style="border-top: 1px solid black"></td>
                                                            <td v-else></td>
                                                            <td v-if="hrt.jenis === 'Detail'">{{ Number(amount).toLocaleString() }}</td>
                                                            <td v-else-if="hrt.jenis === 'Total'">{{ Number(amount).toLocaleString() }}</td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr v-if="hrt.level === '4'">
                                                            <td>{{ hrt.acc_id }}</td>
                                                            <td style="min-width: 300px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hrt.name }}</td>
                                                            <td>{{ Number(amount).toLocaleString() }}</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>

                                                </tbody>
                                            </table>
                                        <!-- </div> -->

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-secondary btn-print action-print" @click="printPage">Cetak</button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-primary btn-send" @click="loadData" :disabled="isLoadingList">Muat Ulang</button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-success btn-download" @click="loadData" :disabled="isLoadingList">
                                                <span v-if="isLoadingList" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                                {{ isLoadingList ? 'Memuat...' : 'Muat Data' }}
                                            </button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <button type="button" class="btn btn-dark btn-edit" @click="reloadPage">Muat Ulang</button>
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

    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'COA Penghasilan Lain' });

    
    const store = useStore();


    // const modalRef = ref(null);
    // const openModal = () => Modal.getInstance(modalRef.value)?.show();
    const hartalist = ref([]);
    const isLoadingList = ref(false);

    const loadData = async () => {
        isLoadingList.value = true;
        try {
            await store.dispatch('GetHarta', { group: '7' });
            hartalist.value = store.getters.StateHarta || [];
        } finally {
            isLoadingList.value = false;
        }
    };

    onMounted(async () => {
        await loadData();
    });

    const printPage = () => {
        window.print();
    };

    const reloadPage = () => {
        window.location.reload();
    };
    
</script>
