<template>
    <div>
        <template v-if="to_hide == 1">
            <div id="content-bg"
                 class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12">

                <div class="m-grid__item m-grid__item--fluid m-wrapper" style="">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="col-xs-12 add_form">
                            <h3 style="font-size:25px;font-weight:bolder;color:#00c5dc;">{{$lang.main.paint.Old}}</h3>
                            <br>
                            <div class="field-wrap col-md-12">
                                <div class="">
                                    <div style="font-size:22px;font-weight:bolder;color:white;">
                                        {{$lang.main.paint.Type}}
                                    </div>
                                    <select name="class" class="col-md-8" v-model="iob">
                                        <option value="1">{{$lang.main.paint.inner}}</option>
                                        <option value="2">{{$lang.main.paint.outer}}</option>
                                    </select>
                                </div>
                            </div>
                            <br>
                            <div class="field-wrap col-md-12">
                                <div class="">
                                    <div style="font-size:22px;font-weight:bolder;color:white;">
                                        {{$lang.main.paint.Type}}
                                    </div>
                                    <select name="class" class="col-md-8" v-model="paint_class">
                                        <option value="normal">{{$lang.main.paint.normal}}</option>
                                        <option value="middle">{{$lang.main.paint.middle}}</option>
                                        <option value="high">{{$lang.main.paint.high}}</option>
                                    </select>
                                </div>
                            </div>
                            <br>
                            <br>
                            <br>
                            <!--<div class="field-wrap col-md-8">-->

                            <!--<div style="font-size:22px;font-weight:bolder;color:white;">-->
                            <!--Putty-->
                            <!--</div>-->
                            <!--<input type="number" name="class" class="col-md-12" v-model.number="Putty">-->
                            <!--</div>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<div class="field-wrap col-md-8">-->

                            <!--<div style="font-size:22px;font-weight:bolder;color:white;">-->
                            <!--Selar-->
                            <!--</div>-->
                            <!--<input type="number" name="class" class="col-md-12" v-model.number="Selar">-->
                            <!--</div>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<div class="field-wrap col-md-8">-->

                            <!--<div style="font-size:22px;font-weight:bolder;color:white;">-->
                            <!--Testion-->
                            <!--</div>-->
                            <!--<input type="number" name="class" class="col-md-12" v-model.number="Testion">-->
                            <!--</div>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<div class="field-wrap col-md-8">-->

                            <!--<div style="font-size:22px;font-weight:bolder;color:white;">-->
                            <!--Color-->
                            <!--</div>-->
                            <!--<input type="number" name="class" class="col-md-12" v-model.number="Color">-->
                            <!--</div>-->
                            <!--<br>-->
                            <!--<br>-->
                            <!--<br>-->


                            <template v-if="one_sf === '' || one_sf=== 0">

                                <div class="field-wrap col-md-4" style="clear:left;">

                                    <div style="font-size:22px;font-weight:bolder;color:white;">
                                        {{$lang.main.paint.one_t_sf}}
                                    </div>
                                    <input type="number" name="class" class="col-md-12" v-model.number="one_t_sf">
                                </div>
                            </template>

                            <template v-if="one_t_sf === '' || one_t_sf===0 ">
                                <div class="field-wrap col-md-4">

                                    <div style="font-size:22px;font-weight:bolder;color:white;">
                                        {{$lang.main.paint.one_sf}}
                                    </div>
                                    <input type="number" name="class" class="col-md-12" v-model.number="one_sf">
                                </div>
                            </template>
                            <div class="field-wrap col-md-4" style="clear:left;">
                                <div style="font-size:22px;font-weight:bolder;color:white;">
                                    {{$lang.main.paint.custom}}
                                </div>

                                <template v-if="custom === 1">
                                    <button type="number" name="class" class="btn btn-sm btn-accent"
                                            @click.prevent="ad_sf()">{{$lang.main.paint.custom}}
                                    </button>
                                </template>

                                <template v-if="custom === 0">
                                    <div>
                                        <div v-for="(form_sq,index) in form_sqs">
                                            <input type="text" name="name" v-model="form_sq.val" autofocus required
                                                   autocomplete="off"
                                                   style="color:white !important;float:right;" placeholder="Ex:1 * 2"/>
                                            <span @click.prevent="del_sf(index)">*</span>

                                        </div>
                                        <span @click.prevent="new_sf()">+</span>
                                        <button type="number" name="class" class="btn btn-sm btn-accent"
                                                @click.prevent="hi_ad_sf()">{{$lang.main.paint.back}}
                                        </button>
                                    </div>
                                </template>
                            </div>
                            <br>
                            <br>
                            <br>
                            <div class="field-wrap col-md-12"
                                 v-if="$lang.main.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                                <div style="font-size:22px;font-weight:bolder;color:white">
                                    ျပည္နယ္၊ တိုင္း <span class="req">*</span>
                                </div>
                                <div class="">
                                    <select class="col-md-8" v-model="state" @change="get_cities(id=state)">
                                        <option v-for="state in states" :value="state.id">
                                            {{ state.mm_name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="field-wrap col-md-12" v-else>
                                <div style="font-size:22px;font-weight:bolder;color:white">
                                    States/Divisions <span class="req">*</span>
                                </div>
                                <div class="">.0
                                    <select class="col-md-8" v-model="state" @change="get_cities(id=state)">
                                        <option v-for="state in states" :value="state.id">
                                            {{ state.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <br>
                            <br>
                            <br>

                            <div class="field-wrap col-md-12"
                                 v-if="$lang.main.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                                <div style="font-size:22px;font-weight:bolder;color:white;">
                                    ၿမိဳ့နယ္ <span class="req">*</span>
                                </div>
                                <div class="">
                                    <select class="col-md-8" v-model="city">
                                        <option v-for="city in cities" :value="city.id">
                                            {{ city.myan_name }}
                                        </option>
                                    </select>
                                </div>

                            </div>

                            <div class="field-wrap col-md-12" v-else>
                                <div style="font-size:22px;font-weight:bolder;color:white;">
                                    Cities/Towns <span class="req">*</span>
                                </div>
                                <div class="">
                                    <select class="col-md-8" v-model="city">
                                        <option v-for="city in cities" :value="city.id">
                                            {{ city.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="field-wrap col-md-8">
                                <button style="margin-top: 20px;float:right;" type="submit"
                                        class="btn btn-lg btn-accent"
                                        @click.prevent="search()">
                                    Search
                                </button>
                            </div>
                            <!--</form>-->
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="to_hide == 2">

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
            </paginate>
            <br>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="data in paginated('repairdatas')">
                <template v-if="data.result_price > 0">
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
                                            <template v-if="cu[data.id] == false">

                                                <button class="m-btn btn btn-outline-light"
                                                        v-on:click="show_custom_form(cid=data.id)">
                                                    Custom
                                                </button>
                                                <div style="display: none;">
                                                    {{testerror}}
                                                </div>
                                            </template>
                                            <template v-if="cu[data.id] == true">
                                                <button class="m-btn btn btn-outline-light"
                                                        v-on:click="hide_custom_form(cid=data.id)">
                                                    yahiee
                                                </button>
                                                <div style="display: none;">
                                                    {{testerror}}
                                                </div>
                                            </template>

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
                        <!--company price list-->
                        <template v-if="cu[data.id] == false">
                            <div class="m-portlet__body">

                                <h3>{{$lang.main.paint.service}} </h3>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Selar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{data.Selar}} {{$lang.main.paint.coat}}
                                    </strong>
                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Putty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{data.Putty}} {{$lang.main.paint.coat}}</strong>
                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Color&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{data.Color}} {{$lang.main.paint.coat}}</strong>
                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> {{$lang.main.paint.price}} &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                                        {{data.result_price}}</strong>
                                </div>

                            </div>
                        </template>


                        <!--end company price list-->


                        <template v-if="cu[data.id] == true">
                            <div class="m-portlet__body">



                                <h3> {{$lang.main.paint.custom}} </h3>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Selar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{ser_selar}}
                                    </strong>
                                    <button type="submit" class="btn btn-sm btn-primary" @click="add_custom(type='selar',data)">+</button>


                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Putty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{ser_putty}} </strong>
                                    <button type="submit" class="btn btn-sm btn-primary" @click="add_custom(type='putty',data)">+</button>

                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> Color&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        :&nbsp;&nbsp;&nbsp;
                                        {{ser_color}} </strong>
                                    <button type="submit" class="btn btn-sm btn-primary" @click="add_custom(type='color',data)">+</button>

                                </div>
                                <div style="word-wrap: break-word;">
                                    <strong style="font-weight:bold;color:#34bfa3"> {{$lang.main.paint.price}} &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                                        {{data.result_price}}</strong>
                                </div>

                            </div>
                        </template>


                    </div>
                </template>
            </div>

            <paginate-links for="repairdatas" class="col-md-12"
                            :async="true"
                            :limit="8"
                            :show-step-links="true"
            >

            </paginate-links>
        </template>
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
    export default{
        data(){
            return {
                iob: 1,
                testerror: 0,
                paint_class: 'normal',
                cleaning: 1,
                Putty: 1,
                Selar: 1,
                repairdata: [],
                paginate: ['repairdatas'],
                Color: 1,
                Testion: 1,
                one_t_sf: 0,
                one_sf: 0,
                city: '',
                states: [],
                state: '2551',
                cu: [],
                cid: 0,
                type:'',
                ser_selar:'',
                ser_putty:'',
                ser_color:'',
                csf1: '',
                custom: [],
                cities: [],
                to_hide_if_zero: 0,
                form_sqs: [{
                    val: ""
                }],
                to_hide: '1',
            }

        },
        methods: {
//            testsearch: function () {
//                console.log('one_sf' + this.one_sf);
//                console.log('one_t_sf' + this.one_t_sf);
//                console.log('city' + this.city);
//                console.log(this.form_sqs);
//                console.log(this.one_sf);
//
//            },
//            new_sf: function () {
//                self = this;
//                self.form_sqs.push({
//                    val: ''
//                });
//                console.log(val)
//            },
//            del_sf: function (index) {
//                self.form_sqs.splice(index, 1);
//                console.log('remove')
//
//            },
//            hi_ad_sf: function () {
//                var self = this;
//                self.one_t_sf = 0,
//                    self.one_sf = 0,
//                    self.custom = 1;
//            },
//            get_cities: function (id) {
//                const self = this;
//                return axios({
//                    method: 'get',
//                    url: 'http://www.hivephing.com/constructback/api/get_cities/' + id + '?token=' + localStorage.getItem('token'),
//                }).then(function (response) {
//                    self.cities = _.orderBy(response.data.cities, ['name'], ['asc']);
//                    self.city = self.cities[0].id;
//                    console.log(ss.cities);
//                });
//            },
            search: function () {
                self = this;
                localStorage.setItem('class', self.paint_class)
                return axios({
                    method: 'post',
                    url: 'http://localhost/constructback/api/test2',
                    data: {
                        paint_class: self.paint_class,
                        cleaning: self.cleaning,
                        Putty: self.Putty,
                        Selar: self.Selar,
                        Color: self.Color,
                        one_t_sf: self.one_t_sf,
                        one_sf: self.one_sf,
                        Testion: self.Testion,
                        iob: self.iob,
                        paint_place: localStorage.getItem('paint_place'),
                        city_id: self.city,
                        token: localStorage.getItem('token'),
                    }
                }).then(function (response) {
//                    console.log(response);
                    self.repairdata = response.data.data;
                    for (var i = 0; i < self.repairdata.length; i++) {
                        self.ser_selar=self.repairdata[i].Selar;
                        self.ser_putty=self.repairdata[i].Putty;
                        self.ser_color=self.repairdata[i].Color;
                        self.cu[self.repairdata[i].id] = false;
                        console.log(self.cu[self.repairdata[i].id] + i + 'fff');
                    }


                    self.to_hide = 2;
                });

            },
            show_custom_form: function (cid) {
                this.cu[cid] = true;


                this.testerror += 1;
                console.log(this.cu[cid]);
            },
            hide_custom_form: function (cid) {
                this.cu[cid] = false;


                this.testerror += 1;
                console.log(this.cu[cid]);
            },
            add_custom:function(type){
                if(type == 'selar') {

                    var p = parseInt(this.ser_selar);
                    p += 1;
                    this.ser_selar = p;

                    console.log(type, p);
                }
                if(type == 'putty'){
                    var pp = parseInt(this.ser_putty);
                    pp += 1;
                    this.ser_putty = pp;

                    console.log(type, pp);

                }
                if(type == 'color'){
                    var pc = parseInt(this.ser_color);
                    pc += 1;
                    this.ser_color = pc;

                    console.log(type, pc);

                }
            }
//            ad_sf: function () {
//                self = this,
//                    self.one_t_sf = null,
//                    self.one_sf = null,
//                    self.custom = 0
//            }

        },
        created(){
            var ss = this;
            ss.custom = 1

            axios({
                method: 'get',
                url: 'http://localhost/constructback/api/get_states?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.states = _.orderBy(response.data.states, ['mm_name'], ['asc']);
                console.log('states');

            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_cities/' + 2551 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.cities = _.orderBy(response.data.cities, ['myan_name'], ['asc']);
                ss.city = ss.cities[0].id;
                console.log(ss.cities);
            });

        },
    }
</script>
