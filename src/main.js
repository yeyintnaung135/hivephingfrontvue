import Vue from 'vue'
import App from './App.vue'
import Router from './route.js'
import Lang from './lang.js'
import {store} from './store.js'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VuePaginate from 'vue-paginate'
Vue.use(VueLodash, lodash);
Vue.use(VuePaginate);

new Vue({
    el: '#f-root',
    store:store,
    router:Router,
    lang:Lang,
    render: h => h(App),

})
