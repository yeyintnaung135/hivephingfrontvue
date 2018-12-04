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
        <v-detail></v-detail>
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
    import Detail from './without_auth/detail.vue'

    import axios from 'axios'
    export default{
        data(){
            return {
                ftype: 'detail'
            }
        },
       created(){
            this.ftype=
                console.log(localStorage.getItem('token'));
        },
        components: {
            'v-detail': Detail,

        },
    }
</script>