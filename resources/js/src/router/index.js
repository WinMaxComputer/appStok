import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    { 
        path: '/', 
        name: 'Home', 
        redirect: '/auth/login-boxed'
        // component: Home 
    },

    {
        path: '/index2',
        name: 'index2',
        component: () => import(/* webpackChunkName: "index2" */ '../views/index2.vue'),
    },
    //======================COA
    {
        path: '/coa',
        name: 'coa',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/coa.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/coa/neraca',
        name: 'neraca',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/coa/neraca.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/coa/pendapatan',
        name: 'pendapatan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/coa/pendapatan.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/coa/biaya',
        name: 'biaya',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/coa/biaya.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/coa/biayaPenjualan',
        name: 'biayaPenjualan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/coa/biayaPenjualan.vue'),
        // meta: { requiresAuth: true },
    },
    //============end oof coa
    //============master
    {
        path: '/pelanggan',
        name: 'pelanggan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexPelanggan.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/supplier',
        name: 'supplier',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexSupplier.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/barang',
        name: 'barang',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexBarang.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/jasa',
        name: 'jasa',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexJasa.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/buku-besar',
        name: 'buku-besar',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/bukuBesar.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/persediaan',
        name: 'persediaan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexPersediaan.vue'),
        // meta: { requiresAuth: true },
    },
    {
        path: '/inventaris',
        name: 'inventaris',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/indexInventaris.vue'),
        // meta: { requiresAuth: true },
    },

    //================end of master
    // transaksi
    {
        path: '/pembelian',
        name: 'pembelian',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/pembelian.vue'),
        props: true,
    },
    {
        path: '/editpembelian',
        name: 'editpembelian',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/editPembelian.vue'),
        props: true,
    },
    {
        path: '/pembelian-inventaris',
        name: 'pembelian-inventaris',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/pembelianInventaris.vue'),
        props: true,
    },
    {
        path: '/penjualan',
        name: 'penjualan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/penjualan.vue'),
        props: true,
    },
    {
        path: '/pembayaran-penjualan',
        name: 'pembayaran-penjualan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/pembayaranPiutang.vue'),
        props: true,
    },
    {
        path: '/pembayaran-pembelian',
        name: 'pembayaran-pembelian',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/pembayaranHutang.vue'),
        props: true,
    },
    {
        path: '/invoice/penjualan',
        name: 'invoice-penjualan',
        component: () => import(/* webpackChunkName: "apps-invoice-preview" */ '../views/transaksi/invoicePenjualan.vue'),
        props: true,
    },
    {
        path: '/invoice/penjualan/max',
        name: 'invoice-penjualan-max',
        component: () => import(/* webpackChunkName: "apps-invoice-preview" */ '../views/transaksi/invoicePenjualanMax.vue'),
        props: true,
    },
    
    {
        path: '/editpenjualan',
        name: 'editpenjualan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/editPenjualan.vue'),
        props: true,
        // meta: { requiresAuth: true },
    },
    {
        path: '/opnum',
        name: 'opnum',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/opnum.vue'),
        // props: true,
        // meta: { requiresAuth: true },
    },
    {
        path: '/opnum-barang',
        name: 'opnum-barang',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/opnumBarang.vue'),
        // props: true,
        // meta: { requiresAuth: true },
    },
    {
        path: '/biaya',
        name: 'transaksi-biaya',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/transaksiBiaya.vue'),
        // props: true,
        // meta: { requiresAuth: true },
    },
    {
        path: '/edit-biaya',
        name: 'editBiaya',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/editBiaya.vue'),
        props: true,
        // meta: { requiresAuth: true },
    },
    {
        path: '/jurnal-umum',
        name: 'jurnal-umum',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/transaksi/jurnalUmum.vue'),
        // props: true,
        // meta: { requiresAuth: true },
    },
    


    // laporan
    {
        path: '/rekapan/kartu-stok',
        name: 'kartu-stok',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/master/kartuStok.vue'),
        props: true,
    },
    {
        path: '/laporan/penyusutan',
        name: 'laporan-penyusutan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/laporanPenyusutan.vue'),
        props: true,
    },
    {
        path: '/laporan/penjualan-barang',
        name: 'penjualan-barang',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/penjualanBarang.vue'),
        props: true,
    },
    {
        path: '/laporan/pembelian-persediaan',
        name: 'pembelian-persediaan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/pembelianPersediaan.vue'),
        props: true,
    },
    {
        path: '/laporan/pembelian-inventaris',
        name: 'laporan-pembelian-inventaris',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/pembelianInventaris.vue'),
        props: true,
    },
    {
        path: '/laporan/opnum',
        name: 'laporan-opnum',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/laporanOpnum.vue'),
        props: true,
    },
    {
        path: '/laporan/labarugi',
        name: 'laporan-labarugi',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/laporanLabarugi.vue'),
        // props: true,
    },
    {
        path: '/laporan/neraca',
        name: 'neraca-keuangan',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/neracaKeuangan.vue'),
        // props: true,
    },
    {
        path: '/laporan/ledger',
        name: 'ledger',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/laporan/generalLedger.vue'),
        // props: true,
    },


    //fonts
    {
        path: '/font-icons',
        name: 'font-icons',
        component: () => import(/* webpackChunkName: "font-icons" */ '../views/font_icons.vue'),
    },

    

    //auth
    {
        path: '/auth/login-boxed',
        name: 'login-boxed',
        component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/auth/login_boxed.vue'),
        meta: { layout: 'auth' },
    },
    // {
    //     path: '/auth/register-boxed',
    //     name: 'register-boxed',
    //     component: () => import(/* webpackChunkName: "auth-register-boxed" */ '../views/auth/register_boxed.vue'),
    //     meta: { layout: 'auth' },
    // },
    // {
    //     path: '/auth/lockscreen-boxed',
    //     name: 'lockscreen-boxed',
    //     component: () => import(/* webpackChunkName: "auth-lockscreen-boxed" */ '../views/auth/lockscreen_boxed.vue'),
    //     meta: { layout: 'auth' },
    //     // children: [{ path: '', name: 'Home', component: Home }],
    // },
    // {
    //     path: '/auth/pass-recovery-boxed',
    //     name: 'pass-recovery-boxed',
    //     component: () => import(/* webpackChunkName: "auth-pass-recovery-boxed" */ '../views/auth/pass_recovery_boxed.vue'),
    //     meta: { layout: 'auth' },
    // },
    // {
    //     path: '/auth/login',
    //     name: 'login',
    //     component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
    //     meta: { layout: 'auth' },
    // },
    // {
    //     path: '/auth/register',
    //     name: 'register',
    //     component: () => import(/* webpackChunkName: "auth-register" */ '../views/auth/register.vue'),
    //     meta: { layout: 'auth' },
    // },
    // {
    //     path: '/auth/lockscreen',
    //     name: 'lockscreen',
    //     component: () => import(/* webpackChunkName: "auth-lockscreen" */ '../views/auth/lockscreen.vue'),
    //     meta: { layout: 'auth' },
    // },
    // {
    //     path: '/auth/pass-recovery',
    //     name: 'pass-recovery',
    //     component: () => import(/* webpackChunkName: "auth-pass-recovery" */ '../views/auth/pass_recovery.vue'),
    //     meta: { layout: 'auth' },
    // },

    

    //tables
    {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "tables" */ '../views/tables.vue'),
    },

    //users
    {
        path: '/users/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "users-profile" */ '../views/users/profile.vue'),
    },
    {
        path: '/users/account-setting',
        name: 'account-setting',
        component: () => import(/* webpackChunkName: "users-account-setting" */ '../views/users/account_setting.vue'),
    },

    //drag&drop
    // {
    //     path: '/dragndrop',
    //     name: 'dragndrop',
    //     component: () => import(/* webpackChunkName: "dragndrop" */ '../views/dragndrop.vue'),
    // },

    //charts
    {
        path: '/charts/apex-chart',
        name: 'apex-chart',
        component: () => import(/* webpackChunkName: "charts-apex-chart" */ '../views/charts/apex_chart.vue'),
    },


    

    
    
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// if (store.getters.isAuthenticated) {
//     console.log('authenticated user');
//     next('timeline')
//   }

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (store.getters.isAuthenticated) { // jika user sudah login maka route akan diteruskan
//         next()
//         return
//       }
//       next('/auth/login-boxed') // jika tidak maka akan redirect ke halaman login
//     } else {
//       next()
//     }
//   })

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        
        // console.log('unauthenticated user');
        // console.log(to)
        // if(to.matched.some(record => record.meta.requiresAuth)) {
            if (store.getters.isAuthenticated) { // jika user sudah login maka route akan diteruskan
                store.commit('setLayout', 'app');
                console.log(store.getters.isAuthenticated);
                next()
                return
            }else {
                console.log('unauthenticated user');
                next('/auth/login-boxed')
            }

            next('/auth/login-boxed') // jika tidak maka akan redirect ke halaman login
        //   } else {
        //     next()
        //   }
    }
    next(true);
});

export default router;
