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
                                    <span class="m-nav__link-text"> {{$lang.main.proposals.upload_proposals}}</span>
                                </a>
                            </li>
                            <li class="m-nav__separator">-</li>

                            <li class="m-nav__item">
                                <a href="http://www.hivephing.com/dashboard/contact/mastery" class="m-nav__link">
                                    <span class="m-nav__link-text">{{$lang.main.proposals.contact}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END: Subheader -->

            <div class="m-content" v-if="status=='success'" style="background-color:#0ac6dc;margin-left:15%;margin-right:15%;color:white;font-weight:bold;font-size:22px;">
                ေအာင္ျမင္စြာ ေပးပုိ႔ျပီးပါျပီ </div>

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
                                    <h1 class="detail_h"> Mastery Co.,Ltd. </h1>
                                    <br>

                                    <p style="font-size: 17px; color: #606c71;word-wrap: break-word;">
                                    </p>
                                    <strong style="color:#67809f;"><span
                                            style="color:#36c6d3"> {{$lang.main.project_detail.address}} </span>: </strong> <span
                                        style="font-weight:bold;">NO.112 (B2),Myin Thar(9th)
                                    Street,South Okkalapa Township,Yangon.</span>
                                    <br>
                                    <br>

                                    <p>
                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3"> {{$lang.main.auth.phone}} :</span>09456114442,09773777445</strong>
                                        <span class="badge badge-danger">
                                        </span>
                                    </p>
                                    <br>
                                    <br>
                                    <br>
                                    {{$lang.main.contact.title}}
                                    <h1 class="detail_h"> {{$lang.main.contact.stm}} </h1>
                                    <br>

                                    <form @submit.prevent="contact()">
                                        <div class="field-wrap">
                                            <span style="font-size: 18px;font-weight:bold;color:#606c71">
                                               {{$lang.main.contact.subject}}  <span class="req">*</span>
                                            </span>
                                            <input type="text" v-model="title" required autocomplete="off"
                                                   style="border-color:green;color:#606c71"/>
                                            <template v-if="status === 'error'">
                                                <template v-if="error.title !== undefined">
                                                 <span class="label label-danger">
                                                  <strong v-for="epp in error.title">{{epp}}</strong>
                                                 </span>
                                                </template>
                                            </template>
                                        </div>
                                        <div class="field-wrap">
                                            <span style="font-size: 18px;font-weight:bold;color:#606c71">
                                               {{$lang.main.contact.Des}} <span class="req">*</span>
                                            </span>
                                            <textarea type="text" v-model="subscription" required autocomplete="off"
                                                      style="border-color:green;color:#606c71;"/>
                                            <template v-if="status === 'error'">
                                                <template v-if="error.subscription !== undefined">
                                                <span class="label label-danger">
                                                <strong v-for="epps in error.subscription">{{epps}}</strong>
                                                </span>
                                                </template>
                                            </template>

                                        </div>
                                        <button style="margin-top: 20px;margin-left:85%;" type="submit"
                                                class="btn btn-lg btn-accent">
                                            {{$lang.main.contact.send}}
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
                title: '',
                subscription: '',
                status:'',
                error:''
            }
        },
        methods: {
            contact: function () {
                var self=this;
                return axios({
                method: 'post',
                url: 'http://www.hivephing.com/constructback/api/dashboard/contact',
                data: {
                    title: self.title,
                    subscription: self.subscription,
                    token:localStorage.getItem('token'),

                }, headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                console.log('sending');
                console.log(response.data);

                if (response.data.success === 'error') {

                    self.status = 'error';
                    self.error = response.data.error;
                    console.log(self.error);
                }
                if (response.data.success === 'success') {

                    console.log(response.data.success);
                    self.status='success';
                    self.title='';
                    self.subscription='';
                }

            });
            }

        }
    }
</script>