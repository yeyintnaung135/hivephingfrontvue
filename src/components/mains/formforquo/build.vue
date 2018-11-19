<template>
    <div>
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


                <div class="m-content">

                    <div style="padding-bottom: 544px;" class="col-sm-12 col-md-12">
                        <h1 class="title">
                            {{$lang.main.project_detail.desform_title}}
                        </h1>

                        <ul class="tab-group">
                            <li class="tab tab-title" style="color: #00baff;"> <a @click="gotofirst()" > {{$lang.main.proposals.Setup}}  </a></li>
                            <li class="tab tab-title" style="color: #00baff;"> <a @click="gotosecond()" > {{$lang.main.proposals.inner_beauty}} </a></li>
                            <li class="tab tab-title" style="color: #00baff;"> <a @click="gotothird()" > {{$lang.main.proposals.rebuild}}  </a></li>
                            <li class="active tab tab-title" style="background-color:#00baff;color:white;"><a @click="gotofourth()" style='background-color:#00baff;color:white;'> {{$lang.main.proposals.build}} </a></li>

                        </ul>

                        <div class="">
                            <div>
                                <a @click.prevent="go_b(b1='b1')" class="col-md-4 btn btn-block btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                <span>
                                    <span>{{$lang.main.project_detail.Build}}</span>
                                </span>
                                </a>


                                <a @click.prevent="go_b(b1='b2')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                <span>
                                    <span>{{$lang.main.project_detail.Road}} </span>
                                </span>
                                </a>

                                <a @click.prevent="go_b(b1='b3')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                <span>
                                    <span>  {{$lang.main.project_detail.Bridge}} </span>
                                </span>
                                </a>



                            </div>

                            <!--<div id="decoration">-->
                            <!--<a href="#" class="col-md-4 btn-block btn btn-outline-primary m-btn m-btn&#45;&#45;custom m-btn&#45;&#45;icon m-btn&#45;&#45;outline-2x m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                            <!--<span>-->
                            <!--<span> အိမ္ခန္းအတြင္း အလွဆင္ျခင္း </span>-->
                            <!--</span>-->
                            <!--</a>-->

                            <!--<a href="#" class="col-md-4 btn-block btn btn-outline-primary m-btn m-btn&#45;&#45;custom m-btn&#45;&#45;icon m-btn&#45;&#45;outline-2x m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                            <!--<span>-->
                            <!--<span> ဆိုင္ခန္းအတြင္း အလွဆင္ျခင္း </span>-->
                            <!--</span>-->
                            <!--</a>-->

                            <!--<a href="#" class="col-md-4 btn-block btn btn-outline-primary m-btn m-btn&#45;&#45;custom m-btn&#45;&#45;icon m-btn&#45;&#45;outline-2x m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                            <!--<span>-->
                            <!--<span> အေဆာက္အဦးအတြင္း အလွဆင္ျခင္း </span>-->
                            <!--</span>-->
                            <!--</a>-->

                            <!--<a href="#" class="col-md-4 btn-block btn btn-outline-primary m-btn m-btn&#45;&#45;custom m-btn&#45;&#45;icon m-btn&#45;&#45;outline-2x m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                            <!--<span>-->
                            <!--<span> Shopping Mall အတြင္း အလွဆင္ျခင္း </span>-->
                            <!--</span>-->
                            <!--</a>-->
                            <!--</div>-->

                            <!--<div id="construct">-->
                            <!--<a href="#" class="col-md-4 col-md-offset-4 btn-block btn btn-outline-info m-btn m-btn&#45;&#45;custom m-btn&#45;&#45;icon m-btn&#45;&#45;outline-2x m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                            <!--<span>-->
                            <!--<span> အေဆာက္အဦးအား ျပန္လည္တည္ေဆာက္ျခင္း </span>-->
                            <!--</span>-->
                            <!--</a>-->
                            <!--</div>-->
                        </div>

                    </div>

                </div>
            </div>


        </div>
    </div>
</template>
<style scoped>
    .btn.btn-outline-accent.active, .btn.btn-outline-accent.focus, .btn.btn-outline-accent:focus, .btn.btn-outline-accent{
        color:#00baff;
        font-weight:bolder;
    }
    .tab-group li a{
        color:#00baff;

    }
    .tab-group li a:hover{
        color:white;

    }
</style>
<script>
    export default{
        data(){
            return {
                b1: 'b1',
            }
        },
        methods: {
            go_b: function (data) {

                window.location = '../../dashboard/build/' + data;
            },
            gotofirst: function () {
                window.location = '../../dashboard/formq/all';
            },
            gotosecond: function () {
                window.location = "../../dashboard/forinner/all"
            },
            gotothird: function () {
                window.location = '../../dashboard/rebuild/all'
            },
            gotofourth: function () {
                window.location = '../../dashboard/build/all'
            }
        }
    }
</script>
