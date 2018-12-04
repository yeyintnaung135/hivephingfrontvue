<template>

    <div class="m-grid m-grid--hor m-grid--root m-page">
        <!--header-->
        <template v-if="forcheck==='true'">

            <v-body></v-body>
            <div id="content-bg" class="m-grid__item m-footer ">
                <div class="m-container m-container--fluid m-container--full-height m-page__container">
                    <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                        <div class="m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--last">
				<span class="m-footer__copyright">
				Copyright © 2017, All rights reserved.<a href="https://www.hivephing.com" class="m-link"> Hive Phing </a>
				</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="forcheck=='false'">
            <div class="row cc">
                <div class="col-md-12 page-404">
                    <div class="number font-red" style="font-size:122px;"> 404</div>
                    <div class="details">
                        <h3>Oops! You're lost.</h3>
                        <p> You are not authorized user </p><br>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
        </template>

    </div>


</template>
<style scoped>
    .m-footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: center;
    }


    @import "../../assets/newpublic/css/bootstrap.min.css";
    @import "../../assets/newpublic/css/style.css";
    @import "../../assets/newpublic/css/vendors.bundle.css";
    @import "../../assets/newpublic/css/style.bundle.css";

</style>
<script type="application/javascript">
    import Header from './header.vue'
    import WABody from './without_auth_body.vue'
    import axios from 'axios'
    export default {
        data(){
            return {
                forcheck: 'true',

            }
        },
        components: {
            'v-header': Header,
            'v-body': WABody
        },
        methods: {
            //to sert external js file
            crnode: function (data) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'http://www.hivephing.com/' + data)
                recaptchaScript.setAttribute('type', 'application/javascript')
                document.getElementById('as').appendChild(recaptchaScript)
            },



        },
        created() {
            this.crnode('dist/js/vendors.bundle.js');
            this.crnode('dist/js/scripts.bundle.js');
            this.crnode('dist/js/tools.js');

            console.log(this.$store.state.token);

            var self = this;
//            axios({
//                method: 'post',
//                url: 'http://www.hivephing.com/constructback/api/dashboard',
//                data: {
//                    token: localStorage.getItem('token'),
//                }, headers: {
//                    'Content-type': 'application/json'
//                }
//            }).then(function (response) {
//                if(response.data.status === 'error'){
//                    window.location='/auth/login';
//                }else {
//                    self.forcheck = response.data[0];
//                    self.forcheck='true';
//                }
//                console.log(response.data.status);
//
//            });
            this.$lang.setLang('mm');

        }


    }
</script>