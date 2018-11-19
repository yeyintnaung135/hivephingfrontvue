import Vue from 'vue'
import Vuex from 'vuex'
// ./ is root file src
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        token:'',
    }
});