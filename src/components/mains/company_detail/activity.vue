<template>
    <div id="content-bg" class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12">

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

            <div class="m-content" style="padding-bottom: 844px;">



                <div class="col-xs-12">
                    <paginate-links for="activities" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"

                    >
                    </paginate-links>
                    <paginate
                            name="activities"
                            :list="activity"
                            :per="6"
                    >
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"   v-for="data in paginated('activities')">
                            <!--begin::Portlet-->
                            <div class="m-portlet m-portlet--success m-portlet--head-solid-bg m-portlet--rounded " style="width:100%;" >

                                <div class="m-portlet__head">
                                    <div class="m-portlet__head-caption">
                                        <div class="m-portlet__head-title">
                                            <span class="m-portlet__head-icon">
                                            <i class="fa fa-bookmark"></i>
                                        </span>
                                            <h3 class="m-portlet__head-text">
                                              Activity
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="m-portlet__head-tools">
                                        <ul class="m-portlet__nav">

                                            <!--<li class="m-portlet__nav-item m-dropdown m-dropdown&#45;&#45;inline m-dropdown&#45;&#45;arrow m-dropdown&#45;&#45;align-right m-dropdown&#45;&#45;align-push" aria-expanded="true">-->
                                            <!--<a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-primary m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                                            <!--Read More-->
                                            <!--</a>-->
                                            <!--</li>-->
                                        </ul>
                                    </div>
                                </div>
                                <div class="m-portlet__body" >
                                    <img v-bind:src="'http://www.hivephing.com/users/entro/photo/'+data.image" width="152" style=" vertical-align: text-top;float:left;margin:9px;">

                                    <div style="word-wrap: break-word;height:189px;">
                                        {{ _.truncate(data.description, {'length': 932,'separator': '...'})}}<br>
                                        <strong style="font-weight:bold;color:#34bfa3"> Date : {{data.created_at}}</strong>
                                    </div>
                                </div>
                            </div>
                            <!--end::Portlet-->
                        </div>

                    </paginate>

                    <paginate-links for="activities" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"
                    >
                    </paginate-links>

                </div>
            </div>
        </div>


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
                empty:'',
                activity:[],
                paginate:['activities'],
            }
        },
        methods:{
            getactivity:function(){
                var self=this;
                self.empty='';

                return axios({
                        method: 'post',
                        url: 'http://www.hivephing.com/constructback/api/dashboard/getactivity',
                        data: {
                            'com_id':this.$route.params.fr,
                            'token':localStorage.getItem('token'),
                        },
                        headers: {
                            'Content-type':'application/json'
                        }
                    }
                ).then(function (response) {
                    console.log(response.data.data.length);
                    if(response.data.data.length == 0){
                        self.empty='yes';

                    }
                    else{
                        self.empty='no';
                        self.activity=response.data.data;
                    }
                });

            }
        },
        created(){
            this.getactivity();

        }

    }

</script>