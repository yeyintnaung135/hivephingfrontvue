<template>
    <div id="content-bg"
         class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12 ">
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


            <div class="m-content" style="padding-bottom: 844px;">

                <div style="padding-bottom: 35px;" class="row">
                    <div class="col-md-8 col-sm-12">

                        <a class="btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air"
                           @click.prevent="get_by_type(type='fr')">
                        <span>
                            <span>{{$lang.main.proposals.Setup}} </span>
                        </span>
                        </a> <a @click.prevent="get_by_type(type='fn')"
                                class="btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                        <span>
                            <span> {{$lang.main.proposals.inner_beauty}} </span>
                        </span>
                    </a> <a @click.prevent="get_by_type(type='rb')"
                            class="btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                        <span>
                            <span> {{$lang.main.proposals.rebuild}}</span>
                        </span>
                    </a> <a @click.prevent="get_by_type(type='b')"
                            class="btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                        <span>
                            <span> {{$lang.main.proposals.build}}</span>
                        </span>
                    </a>

                    </div>
                    <div class="col-md-4 col-sm-12">
                        <a @click.prevent="gotoaddnew()"
                           class="btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                        <span>
                            <span> {{$lang.main.proposals.upload_proposals}}</span>
                        </span>
                        </a>
                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="col-xs-12">
                    <paginate-links for="repairdatas" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"

                    >
                    </paginate-links>
                    <br>

                    <paginate
                            name="repairdatas"
                            :list="repairdata"
                            :per="6"
                    >
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="data in paginated('repairdatas')">
                            <!--begin::Portlet-->
                            <div class="m-portlet m-portlet--success m-portlet--head-solid-bg m-portlet--rounded "
                                 style="width:100%;">

                                <div class="m-portlet__head">
                                    <div class="m-portlet__head-caption">
                                        <div class="m-portlet__head-title">
                                        <span class="m-portlet__head-icon">
                                            <i class="fa fa-bookmark"></i>
                                        </span>

                                            <h3 class="m-portlet__head-text">
                                                {{ _.truncate(data.name, {'length': 12,'separator': '...'})}}

                                            </h3>
                                        </div>
                                    </div>
                                    <div class="m-portlet__head-tools">
                                        <ul class="m-portlet__nav">
                                            <li class="m-portlet__nav-item">
                                                <a href="#" class="m-btn m-btn--pill mr-2">
                                                    <button class="m-btn btn btn-outline-light"
                                                            @click.prevent="gotodetail(id=data.id)">
                                                        Read More
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
                                    <strong>
                                        <template v-if="$lang.main.proposals.upload_proposals=='စံုစမ္းမည္'">
                                            <template v-if="spantype=='fr'">
                                                <span class="label" style="background-color:#555555;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                            </template>
                                            <template v-if="spantype=='fn'">
                                                <span class="label" style="background-color:#1BA39C;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                            </template>
                                            <template v-if="spantype=='rb'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                            </template>
                                            <template v-if="spantype=='b'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                            </template>
                                        </template>
                                        <template v-else>
                                            <template v-if="spantype=='fr'">
                                                <span class="label" style="background-color:#555555;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                            </template>
                                            <template v-if="spantype=='fn'">
                                                <span class="label" style="background-color:#1BA39C;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                            </template>
                                            <template v-if="spantype=='rb'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                            </template>
                                            <template v-if="spantype=='b'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                            </template>
                                        </template>
                                        <div>&nbsp;</div>
                                        <div class="col-lg-6">Need Q:
                                            <template v-if="data.quotation=='0'">
                                                directly
                                            </template>
                                            <template v-else>{{data.quotation}}</template>
                                        </div>


                                    </strong> <br> <br>
                                    <div style="word-wrap: break-word;height:89px;">
                                        {{ _.truncate(data.description, {'length': 132,'separator': '...'})}}<br>
                                        <strong style="font-weight:bold;color:#34bfa3"> Date :
                                            {{data.created_at}}</strong>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <template v-if="data.att1">
                                                <i class="fa fa-paperclip" style="font-size:18px;"></i> Draw 1 <br>
                                                <a @click="download(dwn_file=data.att1)"
                                                   class="btn btn-sm btn-link"><span class="label"
                                                                                     style="background-color:#F36A5A;"><i
                                                        class="fa fa-download"
                                                        style="font-size:18px;"></i>Download</span></a>
                                            </template>
                                            <template v-else>
                                                <i class="fa fa-paperclip"
                                                   style="font-size:18px;visibility:hidden;"></i> <br>
                                                <a @click="download(dwn_file=data.att1)" style="visibility:hidden;"
                                                   class="btn btn-sm btn-link"><span class="label"
                                                                                     style="background-color:#F36A5A;"><i
                                                        class="fa fa-download"
                                                        style="font-size:18px;"></i>Download</span></a>
                                            </template>
                                        </div>
                                        <div class="col-md-4">

                                            <template v-if="data.att2">
                                                <i class="fa fa-paperclip" style="font-size:18px;"></i> Draw 2 <br>
                                                <a @click="download(dwn_file=data.att2)"
                                                   class="btn btn-sm btn-link"><span class="label"
                                                                                     style="background-color:#F36A5A;"><i
                                                        class="fa fa-download"
                                                        style="font-size:18px;"></i>Download</span></a>
                                            </template>
                                            <template v-else>
                                                <span class="label" style="background-color:#F36A5A;visibility:hidden;"><i
                                                        class="fa fa-home" style="font-size:18px;"></i></span>
                                                {{data.att2}}
                                            </template>
                                        </div>
                                        <div class="col-md-4">
                                            <template v-if="data.att3">
                                                <i class="fa fa-paperclip" style="font-size:18px;"></i> Draw 3 <br>
                                                <a @click="download(dwn_file=data.att3)"
                                                   class="btn btn-sm btn-link"><span class="label"
                                                                                     style="background-color:#F36A5A;"><i
                                                        class="fa fa-download"
                                                        style="font-size:18px;"></i>Download</span></a>
                                            </template>
                                            <template v-else>
                                                <span class="label" style="background-color:#F36A5A;visibility:hidden;"><i
                                                        class="fa fa-home" style="font-size:18px;"></i></span>
                                                {{data.att3}}
                                            </template>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end::Portlet-->


                    </paginate>
                    <br>

                    <paginate-links for="repairdatas" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"
                    >

                    </paginate-links>
                </div>
            </div>
        </div>

    </div>

    </div>
</template>
<style>
    .active {
        width: 23px;
        border-radius: 53% !important;
        color: white !important;
        text-align: center;
        color: blue;
        background: #32c5d2;
        color: white !important;
    }

    li {
        display: inline;
        padding: 12px;
        color: white
    }

    .dd {
        color: black;
    }

    @media screen and (max-width: 42em) {
        .for_this_btn {
            display: block;
            width: 48%;
            padding: 0.75rem;
            font-size: 0.9rem;
            float: left;
        }
    }
</style>
<script>
    import axios from 'axios'
    import change_lang from '../../../mixins/change_lang'
    export default{
        mixins: [change_lang],
        data(){
            return {
                type: 'fr',
                repairdata: [],
                paginate: ['repairdatas'],
                spantype: 'fr',
                id: '',
                dwn_file: '',

            }
        },
        methods: {
            gotoaddnew: function () {
                window.location = '../formq/all';
            },
            download: function (dwn_file) {

                var url = window.URL.createObjectURL(new Blob(['http://www.hivephing.com/constructback/public/user_attachments/'+dwn_file]));
                console.log(dwn_file);
                var link = document.createElement('a');
                link.href ='http://www.hivephing.com/constructback/public/user_attachments/'+dwn_file;
                link.setAttribute('download', dwn_file); //or any other extension
                document.body.appendChild(link);
                link.click();
                console.log(url);
//                axios({
//                    url: 'http://www.hivephing.com/constructback/api/rr/'+dwn_file,
//                    method: 'GET',
//                    responseType: 'blob', // important
//                }).then((response) => {
//                    if (!window.navigator.msSaveOrOpenBlob){
//                        // BLOB NAVIGATOR
//                        const url = window.URL.createObjectURL(new Blob([response.data]));
//                        const link = document.createElement('a');
//                        link.href = url;
//                        link.setAttribute('download', 'download.pdf');
//                        document.body.appendChild(link);
//                        link.click();
//                    }else{
//                        // BLOB FOR EXPLORER 11
//                        const url = window.navigator.msSaveOrOpenBlob(new Blob([response.data]),"download.pdf");
//                    }
//                });
            },
            get_by_type: function (type) {
                this.repairdata = [];
                var self = this;
                return axios({
                    method: 'get',
                    url: "http://www.hivephing.com/constructback/api/dashboard/" + type + "/proposals?token=" + localStorage.getItem('token'),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.success);
                    self.repairdata = _.orderBy(response.data.data, ['id'], ['desc'])
                    self.spantype = type;
                    console.log(response.data.data);

                });
            },
            gotodetail: function (id) {
                window.location = '../detail/' + id;

            },

        },
        mounted() {
            console.log(localStorage.getItem('token'))

            var self = this;
            return axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/dashboard/fr/proposals?token=' + localStorage.getItem('token'),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data.success);
                self.repairdata = _.orderBy(response.data.data, ['id'], ['desc'])
                console.log(response.data.data);

            });

        },


    }

</script>