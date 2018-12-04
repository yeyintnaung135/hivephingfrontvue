<template>
    <!-- BEGIN CONTENT BODY -->
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



            <div class="m-content" style="padding-bottom: 844px;">

                <div style="padding-bottom: 35px;" class="row">

                    <div v-if="per_close=='yes'" class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2" style="padding:22px;text-align:center;background-color:#d61f1f;font-size:22px;color:white;font-weight:bolder;">သင့္ Project အား Admin မွ ပိတ္ထားပါသျဖင့္ Admin ထံသုိ႔ ဆက္သြယ္ပါ။ Phone:09-456114442</div>


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
                                                {{$lang.main.project_detail.detail}}
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="m-portlet__head-tools"  v-if="coro=='open'">
                                        <ul class="m-portlet__nav">
                                            <li class="m-portlet__nav-item">
                                                <a href="#" class="m-btn m-btn--pill mr-2">
                                                    <button class="m-btn btn btn-danger btn-outline-light" @click.prevent="gotoclose(close_id=detail_data.id)">
                                                        {{$lang.main.project_detail.close}}
                                                    </button>

                                                </a>
                                            </li>
                                            <!--<li class="m-portlet__nav-item m-dropdown m-dropdown&#45;&#45;inline m-dropdown&#45;&#45;arrow m-dropdown&#45;&#45;align-right m-dropdown&#45;&#45;align-push" aria-expanded="true">-->
                                            <!--<a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-primary m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                                            <!--Read More-->
                                            <!--</a>-->
                                            <!--</li>-->
                                        </ul>
                                    </div>
                                    <div class="m-portlet__head-tools"  v-if="coro=='closed'">
                                        <ul class="m-portlet__nav">
                                            <li class="m-portlet__nav-item">
                                                <a href="#" class="m-btn m-btn--pill mr-2">
                                                    <button class="m-btn btn btn-outline-light" @click.prevent="gotoopen(close_id=detail_data.id)">
                                                        {{$lang.main.project_detail.open}}
                                                    </button>

                                                </a>
                                            </li>
                                            <!--<li class="m-portlet__nav-item m-dropdown m-dropdown&#45;&#45;inline m-dropdown&#45;&#45;arrow m-dropdown&#45;&#45;align-right m-dropdown&#45;&#45;align-push" aria-expanded="true">-->
                                            <!--<a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-primary m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;air">-->
                                            <!--Read More-->
                                            <!--</a>-->
                                            <!--</li>-->
                                        </ul>
                                    </div>
                                </div>

                                <div class="m-portlet__body">
                                    <h1 class="detail_h"> {{detail_data.name}} </h1>

                                    <p style="font-size: 17px; color: #606c71;word-wrap: break-word;">
                                        {{detail_data.description}}
                                    </p>
                                    <strong style="color:#67809f;"><span
                                            style="color:#36c6d3"> {{$lang.main.project_detail.address}} </span> : </strong> {{detail_data.address}}

                                    <p>
                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3">City :</span>{{detail_data.cname}} </strong>
                                        <span class="badge badge-danger">
                                        </span>
                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3">{{$lang.main.project_detail.div}} :</span>{{detail_data.sname}} </strong>
                                        <br>
                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3"> {{$lang.main.proposal_form.count_com}}:</span>{{detail_data.quotation}}
                                        </strong> &nbsp;&nbsp;
                                        <br>
                                        <strong style="color:#67809f;" v-if="qtype == '1'"><span
                                                style="color:#36c6d3">{{$lang.main.proposal_form.choose}}	:</span>Company မ်ားမွ တုိက္ရိုက္ဆက္သြယ္လာသည္ကို ေစာင့္မည္။
                                        </strong> &nbsp;&nbsp;
                                        <strong style="color:#67809f;" v-if="qtype == '0'"><span
                                                style="color:#36c6d3">   {{$lang.main.proposal_form.choose}}	:</span>Hive Phing မွ ေစ်းႏႈန္း အစအဆံုး စံုစမ္းေပးျခင္းကို ေစာင့္မည္။
                                        </strong> &nbsp;&nbsp;
                                        <strong style="color:#67809f;">
                                        </strong> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <br>
                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3">Phone :</span>{{detail_data.phone}} </strong>

                                        <strong style="color:#67809f;"><span
                                                style="color:#36c6d3">{{$lang.main.project_detail.Date}} :</span>{{detail_data.created_at}}
                                        </strong> &nbsp;&nbsp;
                                        <strong style="color:#67809f;"> <span
                                                style="color:#36c6d3">Status : {{status}}</span>
                                        </strong> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <strong style="color:#67809f;"> <span
                                                style="color:#36c6d3">Request Counts : {{rq_count}}</span>
                                        </strong> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <br>


                                    </p>
                                </div>
                            </div>
                            <!--end::Portlet-->
                            <div class="clearfix" style="padding: 20px 0px;"></div>

                            <div class="panel panel-info">
                                <div class="panel-heading"> Requested Companies</div>
                                <div class="panel-body">
                                    <div class="col-md-6 col-md-offset-6">
                                        <div class="btn-group pull-right">

                                        </div>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" id="datatable">
                                            <thead>
                                            <tr>
                                                <th class="text-center"> {{$lang.main.Message.No}}</th>
                                                <th class="text-center">{{$lang.main.proposal_form.name}}</th>
                                                <th class="text-center"> {{$lang.main.Message.detail}}</th>

                                                <th class="text-center"> {{$lang.main.project_detail.Date}}</th>
                                                <th class="text-center"> Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="rq in rq_data">
                                                <td>
                                                    {{rq.id}}
                                                </td>
                                                <td>
                                                    {{rq.name}}
                                                </td>

                                                <td>
                                                    {{rq.description}}
                                                </td>
                                                <td>
                                                    {{rq.created_at}}
                                                </td>
                                                <td>
                                                    <template v-if="rq.id != undefined">

                                                        <a href="#" class="btn btn-small btn-info"
                                                           @click="gotocomdetail(cdetailid=rq.id)">See
                                                            Company Detail</a>
                                                    </template>
                                                    <template v-if="rq.com_status == 'rq'">
                                                        <a href="#" class="btn btn-small btn-info"
                                                           @click="gotoconfirm(con_id=rq.user_id,post_id=rq.post_id)">
                                                            Confirm</a>
                                                    </template>
                                                    <template v-if="rq.com_status == 'con'">
                                                        <span class="badge  badge-pill badge-success" style="padding-top:6px;padding-bottom:6px;">Confirmed</span>

                                                    </template>
                                                </td>
                                            </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix" style="padding: 20px 0px;"></div>

                            <div class="panel panel-info">
                                <div class="panel-heading">ရရွိေသာ စာမ်ား</div>
                                <div class="panel-body">
                                    <div class="col-md-6 col-md-offset-6">
                                        <div class="btn-group pull-right">

                                        </div>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" id="datatable">
                                            <thead>
                                            <tr>
                                                <th class="text-center"> {{$lang.main.Message.No}}</th>
                                                <th class="text-center"> {{$lang.main.Message.detail}}</th>
                                                <th class="text-center"> {{$lang.main.Message.Sender_Com}}</th>
                                                <th class="text-center"> Send</th>
                                                <th class="text-center"> {{$lang.main.project_detail.Date}}</th>
                                                <th class="text-center"> Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr v-for="ms in message">
                                                <td>
                                                    {{ms.id}}
                                                </td>
                                                <td>
                                                    {{ms.message | strcat}}
                                                </td>

                                                <td>
                                                    {{ms.com_name}}
                                                </td>

                                                <td>
                                                    {{ms.from_user}}
                                                </td>


                                                <td>
                                                    {{ms.created_at}}
                                                </td>
                                                <td>

                                                    <a href="#" class="btn btn-small btn-success"
                                                       @click.prevent="gotosend(com_id=ms.com_id,post_id=ms.post_id)"
                                                       v-if="btm=='dd'">Send</a>
                                                    <a href="#" class="btn btn-small btn-info"
                                                       @click="gotocomdetail(cdetailid=ms.com_id)" v-if="btm=='dd'">See
                                                        Company Detail</a>
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix" style="padding: 20px 0px;"></div>

                            <div class="panel panel-info">
                                <div class="panel-heading">  ေပးပို႔ေသာ စာမ်ား</div>
                                <div class="panel-body">
                                    <div class="col-md-6 col-md-offset-6">
                                        <div class="btn-group pull-right">

                                        </div>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" id="datatable">
                                            <thead>
                                            <tr>
                                                <th class="text-center"> {{$lang.main.Message.No}}</th>
                                                <th class="text-center"> {{$lang.main.Message.detail}}</th>
                                                <th class="text-center">{{$lang.main.Message.Received_com}}</th>
                                                <th class="text-center"> Send By</th>
                                                <th class="text-center"> {{$lang.main.project_detail.Date}}</th>
                                                <th class="text-center"> Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr v-for="rms in rmessage">
                                                <td>
                                                    {{rms.id}}
                                                </td>
                                                <td>
                                                    {{rms.message | strcat}}
                                                </td>
                                                <td>
                                                    {{rms.com_name}}
                                                </td>
                                                <td>
                                                    {{rms.from_user}}
                                                </td>

                                                <td>
                                                    {{rms.created_at}}
                                                </td>
                                                <td>
                                                    <!--<div class="btn-group" v-if="rms.com_name != null">-->
                                                    <!--<button type="button" class="btn green dropdown-toggle"-->
                                                    <!--data-toggle="dropdown">View <i-->
                                                    <!--class="fa fa-angle-down"></i></button>-->
                                                    <!--</div>-->
                                                </td>
                                            </tr>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <!-- END CONTENT -->
    <!-- BEGIN QUICK SIDEBAR -->
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                detail_data: "",
                status: '',
                message: [],
                rmessage: [],
                com_id: '',
                post_id: '',
                cdetailid: '',
                con_id:'',
                post_id:'',
                btm: '',
                close_id:'',
                coro:'',
                qtype:'',
                per_close:'',
                rq_count:'',
                rq_data:[],

            }
        }
        ,
        methods: {
            gotoconfirm:function(con_id,post_id){
                console.log('user'+con_id  + 'post'+post_id);
                var self = this;
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/dashboard/confirm_project',
                    data:{
                        token:localStorage.getItem('token'),
                        user_id:con_id,
                        post_id:post_id,

                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    var self=this;
                    console.log(response.data);
                    window.location = '../detail/' + response.data.data;


                });

            },
            gotoclose:function(close_id){
                var self = this;
                self.coro='';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/dashboard/proposals/close_project',
                    data:{
                        token:localStorage.getItem('token'),
                        id:close_id,

                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.data);

                    self.coro='closed';
                });

            },
            gotoopen:function(close_id){
                var self = this;
                self.coro='';
                self.per_close='';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/dashboard/proposals/open_project',
                    data:{
                        token:localStorage.getItem('token'),
                        id:close_id,

                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.data);
                    if(response.data.data == 'open') {
                        self.coro = 'open';
                    }else
                    {
                        self.coro='closed';

                        self.per_close='yes';
                        console.log( self.coro);
                    }
                });
            },
            gotosend: function (com_id, post_id) {
                localStorage.setItem('com_id', com_id);
                localStorage.setItem('post_id', post_id);
                window.location = '../send_msg/user';

            },
            gotocomdetail: function (cdetailid) {
                window.location = '../company_detail/' + cdetailid;
            }
        },
        filters: {
            strcat: function (value) {
                return _.truncate(value, {'length': 50});
            }
        },
        beforeCreate() {
             axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_token/' + this.$route.params.user_id ,
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                localStorage.setItem('token',response.data.token);


            });
            console.log(localStorage.getItem('token'));
            console.log(this.$route.params.id);
            var self = this;
            return axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/dashboard/proposals/detail/' + this.$route.params.id + '?token=' + localStorage.getItem('token'),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                //console.log(response.data.success);
                console.log(response.data.requested_com);

                self.rq_data=response.data.requested_com;
                console.log('fff'+self.rq_data);

                self.rq_count=response.data.rq_count;
                if (response.data.data != '') {
                    self.detail_data = response.data.data;
                    if(self.detail_data.close=='1'){
                        self.coro='closed';
                    }else{
                        self.coro='open';

                    }
                    if(self.detail_data.quotation_type == 1)
                    {
                        self.qtype='1';
                        console.log(self.qtype);
                    }
                    else{
                        self.qtype='0';

                    }
                    console.log(response.data.data);
                    self.message = response.data.tmessage;
                    self.rmessage = response.data.fmessage;
                    if (response.data.tmessage != '') {
                        self.btm = 'dd';
                    }
                    if (response.data.data.full != 'full') {
                        self.status = 'open';
                    }
                }
                else {
                    self.detail_data = '';
                }
                console.log(response.data.data);

            });

        },

    }
</script>
