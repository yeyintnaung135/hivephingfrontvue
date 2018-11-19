<template>

  <div class="bg">
    <!--header-->
    <template v-if="forcheck==='true'">
      <div class="page-wrapper">
        <v-header></v-header>
        <div class="clearfix"></div>
        <v-body></v-body>
        <div class="clearfix"></div>
        <div class="page-footer" style="position:relative;bottom:0px;">

          <p style="text-align: center; color: #fff;"> © 2018 - Mastery Co.,Ltd. </p>
          <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
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



  @import "http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all";
  @import "../../assets/public/font-awesome/css/font-awesome.css";
  @import "../../assets/public/global/plugins/simple-line-icons/simple-line-icons.min.css";
  @import "../../assets/public/global/plugins/bootstrap/css/bootstrap.min.css";
  @import "../../assets/public/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css";
  @import "../../assets/public/global/plugins/select2/css/select2.min.css";
  @import "../../assets/public/global/plugins/select2/css/select2-bootstrap.min.css";
  @import "../../assets/public/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css";
  @import "../../assets/public/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css";
  @import "../../assets/public/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css";
  @import "../../assets/public/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css";
  @import "../../assets/public/global/plugins/morris/morris.css";
  @import "../../assets/public/global/plugins/fullcalendar/fullcalendar.min.css";
  @import "../../assets/public/global/plugins/jqvmap/jqvmap/jqvmap.css";
  @import "../../assets/public/global/css/components.min.css";
  @import "../../assets/public/global/css/plugins.min.css";
  @import "../../assets/public/layouts/layout/css/layout.min.css";
  @import "../../assets/public/layouts/layout/css/themes/darkblue.min.css";
  @import "../../assets/public/layouts/layout/css/custom.min.css";
  @import "../../assets/public/css/custom.min.css";
  @import "../../assets/public/css/custom.css";
  @import "../../assets/public/css/jquery.bxslider.css";
  @import "../../assets/public/css/normalize.css";
  @import "../../assets/public/css/stylesheet.css";
  @import "../../assets/public/css/github-light.css";

  .red {
    color: red;
  }

  .bg{
    background-color:#3d4957;
  }
  .input-title {
    font-weight: bold;
    color: #888;
  }

  .pannel-title {
    font-weight: bold;
    color: #888;
    margin: 22px;
    font-size: 18px;
  }

  .detail-title {
    color: lightseagreen;
    font-weight: bolder;
    font-size: 16px;
  }

  .animated {

    -webkit-animation-duration: 10s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .mt-widget-2 .mt-body {
    padding-top: 74px;
  }

</style>
<script>
    import Header from './headermsg.vue'
    import Body from './messages.vue'
    import axios from 'axios'
    export default {
        data(){
            return {
                forcheck: ''
            }
        },
        components: {
            'v-header': Header,
            'v-body': Body
        },
        methods: {
            //to sert external js file
            crnode: function (data) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'http://'+window.location.hostname+'/'+data)
                document.getElementById('as').appendChild(recaptchaScript)
            }


        },
        created() {
            this.crnode('src/assets/public/global/plugins/bootstrap/js/bootstrap.min.js');
            this.crnode('src/assets/public/global/plugins/js.cookie.min.js');
            this.crnode('src/assets/public/global/plugins/jquery.blockui.min.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js');
            this.crnode('src/assets/public/global/plugins/select2/js/select2.full.min.js');
            this.crnode('src/assets/public/global/plugins/jquery-validation/js/jquery.validate.min.js');
            this.crnode('src/assets/public/global/plugins/jquery-validation/js/additional-methods.min.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js');
            this.crnode('src/assets/public/global/plugins/ckeditor/ckeditor.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-markdown/lib/markdown.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-markdown/js/bootstrap-markdown.js');
            this.crnode('src/assets/public/global/plugins/moment.min.js');
            this.crnode('src/assets/public/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js');
            this.crnode('src/assets/public/global/plugins/morris/morris.min.js');
            this.crnode('src/assets/public/global/plugins/morris/raphael-min.js');
            this.crnode('src/assets/public/global/plugins/counterup/jquery.waypoints.min.js');
            this.crnode('src/assets/public/global/plugins/counterup/jquery.counterup.min.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/serial.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/pie.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/radar.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/themes/light.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/themes/patterns.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amcharts/themes/chalk.js');
            this.crnode('src/assets/public/global/plugins/amcharts/ammap/ammap.js');
            this.crnode('src/assets/public/global/plugins/amcharts/ammap/maps/js/worldLow.js');
            this.crnode('src/assets/public/global/plugins/amcharts/amstockcharts/amstock.js');
            this.crnode('src/assets/public/global/plugins/fullcalendar/fullcalendar.min.js');
            this.crnode('src/assets/public/global/plugins/horizontal-timeline/horizontal-timeline.js');
            this.crnode('src/assets/public/global/plugins/flot/jquery.flot.resize.min.js');
            this.crnode('src/assets/public/global/plugins/flot/jquery.flot.categories.min.js');
            this.crnode('src/assets/public/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js');
            this.crnode('src/assets/public/global/plugins/jquery.sparkline.min.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/jquery.vmap.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js');
            this.crnode('src/assets/public/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js');

            this.crnode('src/assets/public/global/scripts/app.min.js');
            this.crnode('src/assets/public/pages/scripts/form-validation.min.js');

            this.crnode('src/assets/public/pages/scripts/dashboard.min.js');

            this.crnode('src/assets/public/layouts/layout/scripts/layout.min.js');
            this.crnode('src/assets/public/layouts/layout/scripts/demo.min.js');
            this.crnode('src/assets/public/layouts/global/scripts/quick-sidebar.min.js');
            this.crnode('src/assets/public/layouts/global/scripts/quick-nav.min.js');
            this.crnode('src/assets/public/js/jquery.bxslider.js');

            this.crnode('src/assets/public/js/loading/loadingoverlay.min.js');
            this.crnode('src/assets/public/js/loading/loadingoverlay_progress.min.js');

            this.crnode('src/assets/public/js/jquery.imagereader-1.1.0.min.js');

            console.log(this.$store.state.token);
            var self = this;
            return axios({
                method: 'post',
                url: 'http://www.hivephing.com/constructback/api/dashboard',
                data: {
                    token: localStorage.getItem('token'),
                }, headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                if(response.data.status === 'error'){
                    window.location='/auth/login';
                }else {
                    self.forcheck = response.data[0];
                    self.forcheck='true';
                }
                console.log(response.data.status);

            });
        }


    }
</script>