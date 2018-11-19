import Vue from 'vue'
import Router from 'vue-router'
import Headerv from './components/mains/mains.vue'
import welcome from './components/welcome/index.vue'
import Mails from './components/message/mainmsg.vue'
import AuthMain from './components/auth/mains.vue'
import Notfound from './components/notfound.vue'
import Policy from './components/mains/privacy.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/fff', component: Headerv },
        {path: '/', redirect:'/auth/login'},
        {path: '/policy', component: Policy},
        {path: '/auth/:type', component: AuthMain},
        {path: '/dashboard/:ftype/:fr', component: Headerv},
        {path: '/dashboard/mails', component: Mails},
        {path: '/*', component: Notfound},

    ]
});