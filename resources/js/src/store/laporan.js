//store/modules/auth.js

import axios from 'axios';
const state = {
    laporanbbm: [],
    laporanbarang: [],
    pembelianpersediaan: [],
    laporanopnum: [],
    aplusan: [],
    listaplusan: [],
    listpenjualankupon: [],
    listbiaya: [],
    listbbmdatang: [],
    listpenyusutan: [],
    bukubesar: [],
    periodeList: [],
    bukubesarmeta: {
        opening_balance: 0,
        closing_balance: 0,
    },
    jurnalumum: [],
    costbbm: [],
    listkartustok: [],
    generalledger: [],
    generalledgermeta: {
        opening_balance: 0,
        closing_balance: 0,
    },
    cashflow: [],
    cashflowmeta: {
        opening_balance: 0,
        cash_in: 0,
        cash_out: 0,
        net_cash_flow: 0,
        closing_balance: 0,
    },
    cashflowsections: {
        operating: { in: 0, out: 0, net: 0 },
        investing: { in: 0, out: 0, net: 0 },
        financing: { in: 0, out: 0, net: 0 },
    },
    detailbiaya: [],
    listbayarpenjualan: [],
    listbayarpembelian: [],
  };
  
const getters = {
    SlaporanBbm: state => state.laporanbbm,
    SlaporanBarang: state => state.laporanbarang,
    SlaporanPembelian: state => state.pembelianpersediaan,
    SlaporanOpnum: state => state.laporanopnum,
    StateListBiaya: state => state.listbiaya,
    Saplusan: state => state.aplusan,
    SlistAplusan: state => state.listaplusan,
    SlistPenjualanKupon: state => state.listpenjualankupon,
    SlistBbmDatang: state => state.listbbmdatang,
    SlistPenyusutan: state => state.listpenyusutan,
    SBukuBesar: state => state.bukubesar,
    SBukuBesarMeta: state => state.bukubesarmeta,
    SPeriodeList: state => state.periodeList,
    StateGjList: state => state.jurnalumum,
    StateCostBbm: state => state.costbbm,
    StateListKartuStok: state => state.listkartustok,
    StateGL: state => state.generalledger,
    StateGLMeta: state => state.generalledgermeta,
    StateCashFlow: state => state.cashflow,
    StateCashFlowMeta: state => state.cashflowmeta,
    StateCashFlowSections: state => state.cashflowsections,
    StateBiayaDetail: state => state.detailbiaya,
    SlistBayarPenjualan: state => state.listbayarpenjualan,
    SlistBayarPembelian: state => state.listbayarpembelian,
};

const actions = {  
    async CreatePost({dispatch}, post) {
        await axios.post('/api/post', post)
        await dispatch('GetBarang')
    }, 

    async GetLaporanBbm({ commit }, lapbbm){
        let response
        try {
            response = await axios.post('/api/laporan-bbm', lapbbm)
            commit('setLaporanBbm', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan bbm')
            return
        }
    },
    async GetLaporanBarang({ commit }, lapbrg){
        let response
        try {
            response = await axios.post('/api/laporan-barang', lapbrg)
            commit('setLaporanBarang', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan barang')
            return
        }
    },
    async GetLaporanPembelian({ commit }, belibrg){
        let response
        try {
            response = await axios.post('/api/pembelian-barang', belibrg)
            commit('setLaporanPembelian', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan pembelian barang')
            return
        }
    },
    async GetLaporanOpnum({ commit }, opnum){
        let response
        try {
            response = await axios.post('/api/laporan-opnum', opnum)
            commit('setLaporanOpnum', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan opnum barang')
            return
        }
    },
    async GetListBayarPenjualan({ commit }, bayar){
        let response
        try {   
            response = await axios.post('/api/list-bayarpenjualan', bayar)
            commit('setListBayarPenjualan', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan list bayar penjualan')
            return
        }   

    },
    async GetListBayarPembelian({ commit }, bayar){
        let response
        try {   
            response = await axios.post('/api/list-bayarpembelian', bayar)
            commit('setListBayarPembelian', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan list bayar pembelian')
            return
        }   

    },

    async GetListPenjualanKupon({ commit }, opnum){
        let response
        try {
            response = await axios.post('/api/listpenjualan-kupon', opnum)
            commit('setListPenjualanKupon', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan list Kupon')
            return
        }
    },
    async GetListBiaya({ commit }, biaya){
        let response
        try {
            response = await axios.post('/api/list-biaya', biaya)
            commit('setListBiaya', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load laporan list Biaya')
            return
        }
    },
    async GetAplusan({ commit }, aplus){
        let response
        try {
            response = await axios.post('/api/aplusan', aplus)
            commit('setAplusan', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load Aplusan bbm')
            return
        }
    },
    async GetBiayaDetail({ commit }, biaya){
        let response
        try {
            response = await axios.post('/api/detail-biaya', biaya)
            commit('setBiayaDetail', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load Detail Biaya')
            return
        }
    },
    async GetCostBbm({ commit }, srt){
        let response
        try {
            response = await axios.post('/api/cost-bbm', srt)
            commit('setCostBbm', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load Cost bbm')
            return
        }
    },
    async GetListAplusan({ commit }, laplus){
        let response
        try {
            response = await axios.post('/api/list-aplusan', laplus)
            commit('setListAplusan', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load list Aplusan bbm')
            return
        }
    },
    async GetListBbmDatang({ commit }, bbmdatang){
        let response
        try {
            response = await axios.post('/api/list-bbmdatang', bbmdatang)
            commit('setListBbmDatang', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load list bbm datang')
            return
        }
    },
    async GetListPenyusutan({ commit }, penyusutan){
        let response
        try {
            response = await axios.post('/api/list-penyusutan', penyusutan)
            commit('setListPenyusutan', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load list penyusutan')
            return
        }
    },
    async GetBukuBesar({ commit }, buku){
        let response
        try {
            response = await axios.post('/api/buku-besar', buku)
            commit('setBukuBesar', response.data.data)
            commit('setBukuBesarMeta', {
                opening_balance: response.data.opening_balance || 0,
                closing_balance: response.data.closing_balance || 0,
            })
        } catch (ex) {
            // Handle error
            alert('error load buku besar')
            return
        }
    },
    async GetPeriodeList({ commit }) {
        const response = await axios.get('/api/periode/list')
        commit('setPeriodeList', response.data.data)
    },
    async ClosePeriode(_, payload) {
        const response = await axios.post('/api/periode/close', payload)
        return response.data
    },
    async UnlockPeriode(_, payload) {
        const response = await axios.post('/api/periode/unlock', payload)
        return response.data
    },
    async GetGL({ commit }, buku){
        let response
        try {
            response = await axios.post('/api/general-ledger', buku)
            commit('setGL', response.data.data)
            commit('setGLMeta', {
                opening_balance: response.data.opening_balance || 0,
                closing_balance: response.data.closing_balance || 0,
            })
        } catch (ex) {
            // Handle error
            alert('error load buku besar')
            return
        }
    },
    async GetCashFlow({ commit }, payload){
        let response
        try {
            response = await axios.post('/api/cash-flow', payload)
            commit('setCashFlow', response.data.data || [])
            commit('setCashFlowMeta', response.data.summary || {
                opening_balance: 0,
                cash_in: 0,
                cash_out: 0,
                net_cash_flow: 0,
                closing_balance: 0,
            })
            commit('setCashFlowSections', response.data.sections || {
                operating: { in: 0, out: 0, net: 0 },
                investing: { in: 0, out: 0, net: 0 },
                financing: { in: 0, out: 0, net: 0 },
            })
        } catch (ex) {
            alert('error load cash flow')
            return
        }
    },
    async GetJurnalUmum({ commit }, gj){
        let response
        try {
            response = await axios.post('/api/list-jurnalumum', gj)
            commit('setJurnalUmum', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load jurnal umum')
            return
        }
    },

    async GetKartuStok({ commit }, kr){
        let response
        try {
            response = await axios.post('/api/kartu-stok', kr)
            commit('setKartuStok', response.data.data)
        } catch (ex) {
            // Handle error
            alert('error load kartu stok')
            return
        }
    },
    async EditBarang({dispatch}, Brg) {
        await axios.post('/api/update/barang', Brg)
        await dispatch('GetBarang')
        // await commit('setUser', detUser.data.user)
    },
    // async editAplus({commit}, da) {
    //     commit('setAplusan', da)
    //     // await commit('setUser', detUser.data.user)
    // },
    

};
const mutations = {
    setLaporanBbm(state, bbm){
        state.laporanbbm = bbm
    },
    setLaporanBarang(state, barang){
        state.laporanbarang = barang
    },
    setListBayarPenjualan(state, bayar){
        state.listbayarpenjualan = bayar
    },
    setListBayarPembelian(state, bayar){
        state.listbayarpembelian = bayar
    },
    setLaporanPembelian(state, belibarang){
        state.pembelianpersediaan = belibarang
    },
    setLaporanOpnum(state, op){
        state.laporanopnum = op
    },
    setListPenjualanKupon(state, kp){
        state.listpenjualankupon = kp
    },
    setListBiaya(state, biaya){
        state.listbiaya = biaya
    },
    setAplusan(state, ap){
        state.aplusan = ap
    },
    setBiayaDetail(state, detbiaya){
        state.detailbiaya = detbiaya
    },
    setListAplusan(state, lisap){
        state.listaplusan = lisap
    },
    setListBbmDatang(state, listdatang){
        state.listbbmdatang = listdatang
    },
    setListPenyusutan(state, listsusut){
        state.listpenyusutan = listsusut
    },
    setBukuBesar(state, bukubesar){
        state.bukubesar = bukubesar
    },
    setBukuBesarMeta(state, meta){
        state.bukubesarmeta = meta
    },
    setPeriodeList(state, list){
        state.periodeList = list
    },
    setJurnalUmum(state, ju){
        state.jurnalumum = ju
    },
    setCostBbm(state, srt){
        state.costbbm = srt
    },
    setKartuStok(state, krt){
        state.listkartustok = krt
    },
    setGL(state, gl){
        state.generalledger = gl
    },
    setGLMeta(state, glmeta){
        state.generalledgermeta = glmeta
    },
    setCashFlow(state, rows){
        state.cashflow = rows
    },
    setCashFlowMeta(state, meta){
        state.cashflowmeta = meta
    },
    setCashFlowSections(state, sections){
        state.cashflowsections = sections
    }


};

export default {
  state,
  getters,
  actions,
  mutations
};
