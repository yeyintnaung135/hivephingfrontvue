<template>
    <div id="content-bg" class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12" style="height:955px;">

        <div class="m-grid__item m-grid__item--fluid m-wrapper">

            <!-- BEGIN: Subheader -->
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
            </div>


                <!-- END: Subheader -->
            <div v-if="status=='success'"class="alert alert-success">
                Your profile is has been updated!
            </div>

            <div v-if="status=='error'"class="alert alert-danger">
              <span class="label label-danger" v-for="(value,key,index) in error">
               <strong v-for="(value,key) in value">{{ value }}</strong>
              </span>
            </div>

            <div class="m-content">

                <div class="col-md-10 col-md-offset-1">
                    <h1 style="font-size: 30px; color: #00baff; text-align: left;"> Change Profile </h1>

                    <div class="add_form">
                        <div>
                            <div class="field-wrap">
                                <h3 style="font-size: 18px;font-weight:bold;">
                                    {{$lang.main.proposal_form.name}} <span class="req">*</span>
                                </h3>
                                <div class="">

                                <input type="text" v-model="name" style="color:#00baff;" >
                                </div>
                            </div>

                            <div class="field-wrap">
                                <h3 style="font-size: 18px;font-weight:bold;">
                                    Phone <span class="req">*</span>
                                </h3>
                                <div class="" >

                                <input type="text"  v-model="phone"  style="color:#00baff;"/>
                                </div>
                            </div>

                            <button class="btn btn-info" @click='edit'  style="padding: 12px 15px; font-size: 15px;"> Update </button>

                            <!--<a href="#" class="pull-right"> If you change password, </a>-->
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
                name: '',
                phone: '',
                password: '',
                status:'',
                error:''

            }
        },
        created(){
            var self = this;
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/user_data?token=' + localStorage.getItem('token'),

            }).then(function (response) {
                self.name = response.data.data.name;
                console.log(response.data);
                self.phone = response.data.data.phone;

            });
        },
        methods: {
            edit: function () {
                var self = this;
                self.status='';
                self.error='';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/user_data/edit',
                    data: {
                        token: localStorage.getItem('token'),
                        name: self.name,
                        phone: self.phone
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    if(response.data.success=='error'){
                        self.status='error';
                        self.error=response.data.error;
                        console.log(response.data.error);
                    }else {
                        self.name = response.data.data.name;
                        self.phone = response.data.data.phone;
                        self.status='success';

                        console.log(response.data);
                    }

                });
            },
            paschange:function(){
                var self=this;

            }

        }
    }
</script>