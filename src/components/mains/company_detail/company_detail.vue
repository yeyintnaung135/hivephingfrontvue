<template>
    <div id="content-bg" class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12"
         style="height:auto;min-height:955px;">

        <div class="m-grid__item m-grid__item--fluid m-wrapper">

            <!-- BEGIN: Subheader -->
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

                <!-- END: Subheader -->

            <div class="m-content">


                <div class="col-md-10 col-md-offset-1" id="detail">

                    <h1 class="other-h"> {{com_data.name}} company's အခ်က္အလက္
                    </h1>

                    <div class="panel panel-info">
                        <div class="panel-heading">
                            {{com_data.name}}
                            <span>

                                 <button href="" class="btn btn-success m--pull-right"
                                         @click.prevent="ratethis(com_id=1)">
                            Rating Point :
                            {{rate}}
                            <span class="fa fa-plus" v-if="rate_sign==0"></span>
                            <span class="fa fa-minus" v-if="rate_sign==1"></span>
                        </button>

                            </span>
                        </div>
                        <div class="panel-body">

                            <div class="f-detail">
                                <div class="col-md-2">
                                    <img :src="'http://www.hivephing.com/companies/public/users/entro/photo/'+com_data.logo"
                                         class="img-circle" alt="Logo Image" width="100" height="100">
                                </div>
                                <div class="col-md-10" style="word-wrap:break-word;">
                                    {{com_data.description}}
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="col-md-12" style="margin-top: 80px;">
                                <div class="col-md-6">
                                    Looking for Investment : <i class="fa fa-close" style="color:darkred;"
                                                                v-if="com_data.investment == '0'"></i>
                                    <i class="fa fa-check" style="color:#32c5d2;" v-if="com_data.investment == '1'"></i>
                                </div>

                                <div class="col-md-6">
                                    Registration Status : <i class="fa fa-check" style="color:#32c5d2;"
                                                             v-if="com_data.registration_status == '0'"></i>
                                    <i class="fa fa-check" style="color:#32c5d2;"
                                       v-if="com_data.registration_status == '1'"></i>
                                </div>

                                <div class="col-md-6">
                                    City : {{com_data.city_name}}

                                </div>

                                <div class="col-md-6">
                                    Country : Myanmar
                                </div>

                                <div class="col-md-6">
                                    Business Type :
                                    <span v-if="com_data.business_hub==1">ေရလိုင္း</span>
                                    <span v-if="com_data.business_hub==2">
မီးလိုင္း</span>
                                    <span v-if="com_data.business_hub==3">လွ်ပ္စစ္သြယ္တန္းျခင္း</span>
                                    <span v-if="com_data.business_hub==4">Air-con တပ္ဆင္ျခင္း</span>
                                    <span v-if="com_data.business_hub==5">
Aluminium လုပ္ငန္း</span>
                                    <span v-if="com_data.business_hub==6">Painting</span>
                                    <span v-if="com_data.business_hub==7">ကမ္းခင္း/ ပါေကးခင္းျခင္း</span>
                                    <span v-if="com_data.business_hub==8">CCTV ႏွင့္ လံုျခံဳေရးပစၥည္းမ်ား တပ္ဆင္ျခင္း</span>
                                    <span v-if="com_data.business_hub==9">အေဆာက္အဦးေဆာက္လုပ္ျခင္း</span>
                                </div>

                                <div class="col-md-6">
                                    Website Link : <span><a :href="website" style="word-wrap: break-word;">{{com_data.website}}</a></span>
                                </div>
                                <a href="" class="btn btn-info m--pull-right" @click.prevent="activity()">
                                    Activity
                                </a>

                                <div class="col-md-6">
                                    Facebook Link : <a :href="facebook" style="word-wrap: break-word;">{{facebook}}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="m-content" style="padding-bottom: 844px;">
                <div class="col-xs-12">
                    <paginate-links for="ports" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"

                    >
                    </paginate-links>
                    <paginate
                            name="ports"
                            :list="port"
                            :per="6"
                    >
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" v-for="data in paginated('ports')">
                            <!--begin::Portlet-->
                            <div class="m-portlet m-portlet--success m-portlet--head-solid-bg m-portlet--rounded " style="width:100%;" >

                                <div class="m-portlet__head">
                                    <div class="m-portlet__head-caption">
                                        <div class="m-portlet__head-title">
                                            <span class="m-portlet__head-icon">
                                            <i class="fa fa-bookmark"></i>
                                                 {{data.project_name}}
                                        </span>
                                            <h3 class="m-portlet__head-text">


                                            </h3>
                                        </div>
                                    </div>
                                    <div class="m-portlet__head-tools">
                                        <ul class="m-portlet__nav">

                                            <!--<li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" aria-expanded="true">-->
                                            <!--<a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-primary m-btn m-btn--pill m-btn--air">-->
                                            <!--Read More-->
                                            <!--</a>-->
                                            <!--</li>-->
                                        </ul>
                                    </div>
                                </div>
                                <div class="m-portlet__body" >
                                    <div class="col-sm-4" style="float:left;height: 166px;">
                                        <img v-bind:src="'http://localhost/companies/public/users/entro/photo/portfolio/'+data.photo" width="152" style=" vertical-align: text-top;float:left;margin:9px;">
                                    </div>

                                    <div style="word-wrap: break-word;height:189px;">
                                        {{data.description}}<br>
                                        {{data.address}}<br>
                                        <strong style="font-weight:bold;color:#34bfa3"> Start Date : {{data.start_date}}</strong>
                                        <br>
                                        <strong style="font-weight:bold;color:#34bfa3"> End Date : {{data.end_date}}</strong>
                                    </div>
                                </div>
                            </div>
                            <!--end::Portlet-->
                        </div>

                    </paginate>

                    <paginate-links for="ports" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"
                    >
                    </paginate-links>

                </div>
            </div>

        </div>
        <br>



    </div>
</template>
<style>
    .active{
        width: 23px;
        border-radius: 53% !important;
        color: white !important;
        text-align: center;
        color: blue;
        background: #32c5d2;
        color: white !important;
    }
    li{
        display:inline;
        padding:12px;
    }
    @media screen and (max-width: 42em) {
        .for_this_btn {
            display: block;
            width: 48%;
            padding: 0.75rem;
            font-size: 0.9rem;
            float:left;
        }
    }
</style>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                com_data: '',
                website: '',
                port:[],
                paginate:['ports'],
                facebook: '',
                rate: '',
                com_id: '',
                rate_sign: ''
            }
        },
        methods: {

            ratethis: function () {
                var self = this;
                self.rate_sign = '';
                return axios({
                        method: 'post',
                        url: 'http://www.hivephing.com/constructback/api/dashboard/addrate',
                        data: {
                            'com_id': self.com_id,
                            'token': localStorage.getItem('token'),
                        },
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }
                ).then(function (response) {
                    self.rate = response.data.rate;
                    self.rate_sign = response.data.rate_sign;
                    console.log(response);

                });
            },
            activity: function () {
                window.location = '../activity/' + this.$route.params.fr;
            }
        },
        created(){
            var self = this;
            console.log(this.$route.params.fr);
            return axios({
                    method: 'get',
                    url: 'http://localhost/constructback/api/dashboard/comdetail/' + this.$route.params.fr + '?token=' + localStorage.getItem('token'),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            ).then(function (response) {
                self.com_data = response.data.data;

                self.website = response.data.data.website;
                self.facebook = response.data.data.facebook;
                self.rate = response.data.data.rate;
                self.rate_sign = response.data.data.rate_sign;
                self.port=response.data.port;
                console.log(response.data);


//                console.log(response.data.data);

            });
        }
    }
</script>