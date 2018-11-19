<template>
<div>
<div style="float:right;margin-right:12px;clear:both;">
    <button class="btn btn-info" @click="cc(lang='mm')">mm</button>
    <button class="btn btn-info" v-if="lang=='mm'" @click="zawgyi()">Unicode</button>
    <button class="btn btn-info" @click="cc(lang='en')">en</button>
</div>
    <div>&nbsp;</div>
    <component v-bind:is="ftype" v-if="ffonts=='unicode'" class="uni"></component>
    <component v-bind:is="ftype" v-if="ffonts=='zawgyi'" class="zaw"></component>
</div>
                <!-- END CONTENT BODY -->
</template>
<style>
    @font-face {
        font-family:'Ours-Unicode';
        src:local('Ours-Unicode'),url('https://mmwebfonts.comquas.com/fonts/oursunicode.woff') format('woff'), url('https://mmwebfonts.comquas.com/fonts/oursunicode.ttf') format('ttf');
    }
    @font-face {
        font-family:'Zawgyi-One';
        src:local('Zawgyi-One'),url('https://mmwebfonts.comquas.com/fonts/zawgyi.woff') format('woff'), url('https://mmwebfonts.comquas.com/fonts/zawgyi.ttf') format('ttf');
    }
    .uni{
        font-family:"Ours-Unicode"

    }
    .zaw{
        font-family:"Zawgyi-One"

    }
</style>
<script>
    import Formqone from './formforquo/formq.vue'
    import Old from './formforquo/price/Old.vue'
    import Inner from './formforquo/price/inner.vue'
    import New from './formforquo/price/New.vue'
    import Paint from './formforquo/price/paint.vue'
    import Forrepair from './formforquo/for_repair.vue'
    import Desform from './formforquo/desform.vue'
    import Proposals from './dashboard/proposals.vue'
    import Detail from './dashboard/detail.vue'
    import SendMsg from './dashboard/msgform.vue'
    import Forinner from './formforquo/for_inner_repair.vue'
    import Rebuild from './formforquo/for_rebuild.vue'
    import Profile from './profile/profile.vue'
    import Comdetail from './company_detail/company_detail.vue'
    import activity from './company_detail/activity.vue'
    import build from './formforquo/build.vue'
    import contact from './company_detail/contact.vue'
    import com_form from './com_form/main_form.vue'
    import axios from 'axios'
    export default{
        data(){
            return {
                ftype: ''
            }
        },
        methods: {
            back: function () {
                return history.go(-1);
            },
            go: function () {

                window.location = 'http://www.hivephing.com/dashboard/proposals/all';
            },
            tt: function () {
                if (this.$route.params.ftype === 'for_repair' && this.$route.params.fr === 'all') {
                    this.ftype = this.$route.params.ftype
                }
                else if (this.$route.params.ftype === 'for_repair' && (this.$route.params.fr === 'fr1' || this.$route.params.fr === 'fr2' ||
                                this.$route.params.fr === 'fr3' || this.$route.params.fr === 'fr4' || this.$route.params.fr === 'fr5' || this.$route.params.fr === 'fr6'
                                || this.$route.params.fr === 'fr7' || this.$route.params.fr === 'fr8' || this.$route.params.fr === 'fr9' || this.$route.params.fr === 'fr10'
                        )) {
                    this.ftype = 'desform'

                }
                else {

                }
                if (this.$route.params.ftype === 'formq') {
                    this.ftype = 'formq'
                }
                if (this.$route.params.ftype === 'contact' && this.$route.params.fr === 'mastery') {
                    this.ftype = 'contact'
                }
                if (this.$route.params.ftype === 'paint' && this.$route.params.fr === 'old') {
                    this.ftype = 'Old'
                }
                if (this.$route.params.ftype === 'paint' && this.$route.params.fr === 'new') {
                    this.ftype = 'New'
                }
                if (this.$route.params.ftype === 'paint' && this.$route.params.fr === 'inner') {
                    this.ftype = 'Inner'
                }
                if (this.$route.params.ftype === 'build' && this.$route.params.fr === 'all') {
                    this.ftype = 'build'
                }else if(this.$route.params.ftype === 'build' ){
                    this.ftype = 'desform'
                }
                if (this.$route.params.ftype === 'activity') {
                    this.ftype = 'activity'
                }
                if (this.$route.params.ftype === 'company_detail') {
                    this.ftype = 'comdetail'
                }
                if (this.$route.params.ftype === 'detail') {
                    this.ftype = 'detail'
                }
                if (this.$route.params.ftype === 'send_msg') {
                    this.ftype = 'sendmsg'
                }
                if (this.$route.params.ftype === 'proposals' && this.$route.params.fr === 'all') {
                    this.ftype = 'proposals'
                }
                if (this.$route.params.ftype === 'com_form' && this.$route.params.fr === 'all') {
                    this.ftype = 'com_form'
                }
                if (this.$route.params.ftype === 'forinner' && this.$route.params.fr === 'all') {
                    this.ftype = 'forinner'
                }
                else if (this.$route.params.ftype === 'forinner' && (this.$route.params.fr === 'fn1' || this.$route.params.fr === 'fn2' ||
                                this.$route.params.fr === 'fn3' || this.$route.params.fr === 'fn4' || this.$route.params.fr === 'fn5'
                        )) {
                    this.ftype = 'desform'

                }
                else {

                }
                if (this.$route.params.ftype === 'rebuild' && this.$route.params.fr === 'all') {
                    this.ftype = 'rebuild'
                }
                else if (this.$route.params.ftype === 'rebuild' && (this.$route.params.fr === 'rb1' || this.$route.params.fr === 'rb2' ||
                    this.$route.params.fr === 'rb3' || this.$route.params.fr === 'rb4' || this.$route.params.fr === 'rb5'))
                {
                    this.ftype = 'desform'

                }
                else {

                }
                if (this.$route.params.ftype === 'profile' && this.$route.params.fr === 'user') {
                    this.ftype = 'profile'
                }
                //for paint price

                if (this.$route.params.ftype === 'price' && this.$route.params.fr === 'paint') {
                    this.ftype = 'paint'
                }
            }
        },
        created(){
            this.tt(),
                    console.log(localStorage.getItem('token'));
        },
        components: {
            'formq': Formqone,
            'Old':Old,
            'Inner':Inner,
            'New':New,
            'paint': Paint,
            'for_repair': Forrepair,
            'desform': Desform,
            'proposals': Proposals,
            'forinner': Forinner,
            'rebuild': Rebuild,
            'detail': Detail,
            'sendmsg': SendMsg,
            'comdetail': Comdetail,
            'profile':Profile,
            'activity':activity,
            'build':build,
            'contact':contact,
            'com_form':com_form

        },
    }
</script>