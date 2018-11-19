<template>

  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12" id="content-bg"
       style="height:auto;min-height:999px;">

    <div class="m-grid__item m-grid__item--fluid m-wrapper">
      <div class="m-subheader ">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
              <li class="m-nav__item m-nav__item--home">
                <a href="#" class="m-nav__link m-nav__link--icon">
                  <i class="m-nav__link-icon fa fa-home" style="font-size:42px;"></i>
                </a>
              </li>
              <li class="m-nav__separator">-</li>
              <li class="m-nav__item">
                <a href="http://www.hivephing.com/dashboard/proposals/all" class="m-nav__link">
                  <span class="m-nav__link-text">Proposals</span>
                </a>
              </li>
              <li class="m-nav__separator">-</li>
              <li class="m-nav__item">
                <a href="http://www.hivephing.com/dashboard/formq/all" class="m-nav__link">
                  <span class="m-nav__link-text">စံုစမ္းမည္</span>
                </a>
              </li>
              <li class="m-nav__item">
                <a href="http://www.hivephing.com/dashboard/contact/mastery" class="m-nav__link">
                  <span class="m-nav__link-text">ဆက္သြယ္ရန္</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="m-content" v-if="status=='success'" style="background-color:#0ac6dc;margin-left:15%;margin-right:15%;color:white;font-weight:bold;font-size:22px;">
        ေအာင္ျမင္စြာ ေပးပုိ႔ျပီးပါျပီ
      </div>

      <div class="m-content" style="padding-bottom: 844px;">

        <div style="padding-bottom: 35px;" class="row">
          <div class="col-md-12" style="padding: 50px 0px;">
            <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <!--begin::Portlet-->
              <div class="m-portlet m-portlet--success m-portlet--head-solid-bg m-portlet--rounded">
                <div class="m-portlet__head">
                  <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                                        <span class="m-portlet__head-icon">
                                             <i class="fa fa-bookmark"></i>
                                        </span>
                      <h3 class="m-portlet__head-text">
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="m-portlet__body">
                  <h1 class="detail_h">
                  </h1>
                  <br>
                  <p style="font-size: 17px; color: #606c71;word-wrap: break-word;">
                  </p>
                   <form @submit.prevent="realsend()">
                    <div class="field-wrap">
                                            <span style="font-size: 18px;font-weight:bold;color:#606c71">
                                               ေဖာ္ျပခ်က္ <span class="req">*</span>
                                            </span>
                      <textarea type="text" v-model="message" required autocomplete="off" rows="12"
                                style="border-color:green;color:#606c71;"/>
                      <template v-if="status === 'error'">
                        <template v-if="error.message !== undefined">
                                                <span class="label label-danger">
                                                <strong v-for="epps in error.message">{{epps}}</strong>
                                                </span>
                        </template>
                      </template>

                    </div>
                    <button style="margin-top: 20px;margin-left:85%;" type="submit"
                            class="btn btn-lg btn-accent">
                      ေပးပုိ႔မည္
                    </button>


                  </form>
                </div>
              </div>
              <!--end::Portlet-->

              <div class="clearfix" style="padding: 20px 0px;"></div>


            </div>
          </div>
        </div>
      </div>
    </div>


  </div>


</template>
<script>
  import axios from 'axios'
    export default{
        data(){
            return {
                com_id: '',
                post_id: '',
                message:'',
                title:'',
                status:'',
                error:''
            };
        },
        methods: {
            realsend: function () {
                var self = this;

                    self.status='';
                return axios({
                    method: 'post',
                    url: "http://www.hivephing.com/constructback/api/dashboard/send_msg",
                    cache: false,
                    data: {
                        com_id: self.com_id,
                        post_id: self.post_id,
                        message:self.message,
                        token:localStorage.getItem('token')
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if(response.data.success == 'error'){
                        self.status='error';
                        self.error = response.data.error;
                    }
                    else if(response.data.success == 'null_error'){
                        self.status='error';
                    }else{
                        self.status='success';
                        self.message='';

                    }
                });

            }
        },
        created() {
            console.log(localStorage.getItem('com_id'));
            this.com_id = localStorage.getItem('com_id');
            console.log(localStorage.getItem('post_id'));
            this.post_id = localStorage.getItem('post_id');
        }
    }
</script>