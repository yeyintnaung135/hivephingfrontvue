<template>
    <div>

        <div id="content-bg"
             class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12">

            <div class="m-grid__item m-grid__item--fluid m-wrapper" style="padding-bottom: 444px;">
                <div class="col-md-8 col-md-offset-2">
                    <div class="add_form">

                        <br>
                        <h1 style="font-size: 25px; color: #00baff; padding-bottom: 20px; text-align: left;">
                            {{$lang.main.proposal_form.title}}
                        </h1>

                        <!--<form action="" method="post">-->

                        <!--{{ csrf_field() }}-->


                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Area <span class="req">*</span>
                            </h3>
                            <input type="text" name="name" v-model="name" autofocus required autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>
                            <template v-if="status === 'error'">
                                <template v-if="error.name !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="ep in error.name">{{ep}}</strong>
                                        </span>
                                </template>
                            </template>
                        </div>


                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Storey <span class="req">*</span>
                            </h3>
                            <input type="number" v-model.number="storey" required autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>
                            <template v-if="status === 'error'">
                                <template v-if="error.phone !== undefined">
                                    <span class="label label-danger">
                                     <strong v-for="epp in error.phone">{{epp}}</strong>
                                    </span>
                                </template>
                            </template>

                        </div>

                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Frame <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect1"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Roof <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect2"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works_roof" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Wall <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect3"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works_wall" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Door and window <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect4"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works_dnw" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Normal Floor <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect5"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works_nfloor" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Ceiling Floor <span class="req">*</span>
                            </h3>
                            <select class="form-control" id="exampleFormControlSelect6"
                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                <option v-for="dw in data_works_cfloor" :value="dw.id">
                                    {{ dw.name }}
                                </option>
                            </select>

                        </div>
                        <div class="field-wrap">
                            <h2 style="font-size: 28px;font-weight:bold;color:#1ec5dc;">
                                For Room <span class="req">*</span>
                                <h3 style="font-size: 18px;font-weight:bold;">
                                    For {{n}} Floor <span class="req">*</span>
                                </h3>
                            </h2>

                            <div v-for="n in storey">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">

                                        <div class="field-wrap">
                                            <h3 style="font-size: 18px;font-weight:bold;">
                                                How many room? <span class="req">*</span>
                                                <input type="rooms" v-model.number="rooms" required autocomplete="off"
                                                       style="color:rgb(0, 186, 255);"/>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">

                                        <div class="field-wrap">
                                            <h3 style="font-size: 18px;font-weight:bold;">
                                              Shower and restroom<span class="req">*</span>
                                            </h3>
                                            <select class="form-control" id="exampleFormControlSelect11"
                                                    style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                                <option value="0">
                                                    Yes
                                                </option>
                                                <option value="1">
                                                    No
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>

                        <div class="field-wrap">
                            <h2 style="font-size: 28px;font-weight:bold;color:#1ec5dc;">
                                Painting <span class="req">*</span>
                                <h3 style="font-size: 18px;font-weight:bold;">
                                    Painting <span class="req">*</span>
                                </h3>
                                <select class="form-control" id="exampleFormControlSelect1111"
                                        style="background-color:rgba(68, 42, 127, 0.12);color:rgb(0, 186, 255);">
                                    <option v-for="dw in data_works_paint" :value="dw.id">
                                        {{ dw.name }}
                                    </option>
                                </select>
                            </h2>
                        </div>


                        <div class="clearfix"></div>

                        <div class="field-wrap" v-if="$lang.main.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                ျပည္နယ္၊ တိုင္း <span class="req">*</span>
                            </label>
                            <div class="">
                                <select class="col-md-8" v-model="state" @change="get_cities(id=state)">
                                    <option v-for="state in states" :value="state.id">
                                        {{ state.mm_name }}
                                    </option>

                                </select>
                            </div>

                        </div>
                        <div class="field-wrap" v-else>
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                States/Divisions <span class="req">*</span>
                            </label>
                            <div class="">
                                <select class="col-md-8" v-model="state" @change="get_cities(id=state)">
                                    <option v-for="state in states" :value="state.id">
                                        {{ state.name }}
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div class="clearfix"></div>

                        <div class="field-wrap" v-if="$lang.main.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                ၿမိဳ့နယ္ <span class="req">*</span>
                            </label>
                            <div class="">
                                <select class="col-md-8" v-model="city">
                                    <option v-for="city in cities" :value="city.id">
                                        {{ city.myan_name }}
                                    </option>
                                </select>
                            </div>

                        </div>


                        <button style="margin-top: 20px;" type="submit" class="btn btn-lg btn-accent"
                                @click.prevent="gotosave()">
                            {{$lang.main.auth.login}}
                        </button>

                        <!--</form>-->
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>
<style scoped>
    .control-label {
        float: left;
    }
</style>
<script>
    import axios from 'axios'
    import change_lang from '../../../mixins/change_lang'

    export default{
        mixins: [change_lang],
        data(){
            return {
                name: '',
                phone: '',
                address: '',
                description: '',
                status: '',
                cities: [],
                states: [],
                city: '',
                state: '2537',
                quotation_type: '0',
                quotation: '1',
                id: '',
                file1: '',
                file2: '',
                file3: '',
                data_works: "",
                data_works_roof: "",
                data_works_wall: "",
                data_works_dnw: "",
                data_works_cfloor: "",
                data_works_nfloor: "",
                data_works_paint: "",
                storey: 0,

            }
        },
        created(){
            var ss = this;
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_states?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.states = _.orderBy(response.data.states, ['mm_name'], ['asc']);
                console.log('states');
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_cities/' + 2537 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.cities = _.orderBy(response.data.cities, ['myan_name'], ['asc']);
                ss.city = ss.cities[0].id;
                console.log(ss.cities);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 1 + '/' + 2 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log(ss.data_works);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 1 + '/' + 3 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_roof = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log(ss.data_works_roof);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 1 + '/' + 4 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_wall = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log(ss.data_works_wall);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 2 + '/' +7 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_dnw = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log(ss.data_works_dnw);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 2 + '/' + 8 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_nfloor = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log(ss.data_works_nfloor);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 2 + '/' + 9 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_cfloor = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log('ccccc' + ss.data_works_cfloor);
            });
            axios({
                method: 'get',
                url: 'http://www.hivephing.com/constructback/api/get_work/' + 4 + '/' + 16 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.data_works_paint = _.orderBy(response.data.data, ['name'], ['asc']);
                console.log('ccccc' + ss.data_works_paint);
            });
        },
        methods: {
            touploadfile: function () {
                var self = this;
                self.file1 = this.$refs.file1.files[0];
                console.log(self.file1);
            },
            touploadfile2: function () {
                var self = this;
                self.file2 = this.$refs.file2.files[0];
                console.log(self.file2);
            },
            touploadfile3: function () {
                var self = this;
                self.file3 = this.$refs.file3.files[0];

            },
            get_cities: function (id) {
                const self = this;
                return axios({
                    method: 'get',
                    url: 'http://www.hivephing.com/constructback/api/get_cities/' + id + '?token=' + localStorage.getItem('token'),
                }).then(function (response) {
                    self.cities = _.orderBy(response.data.cities, ['name'], ['asc']);
                    self.city = self.cities[0].id;
                    console.log(ss.cities);
                });
            },

            gotosave: function () {
                const self = this;
                self.status = '';
                var formData = new FormData()
                formData.append('file1', self.file1)
                formData.append('file2', self.file2)
                formData.append('file3', self.file3)
                formData.append('token', localStorage.getItem('token'))
                formData.append('name', self.name)
                formData.append('phone', self.phone)
                formData.append('address', self.address)
                formData.append('description', self.description)
                formData.append('quotation', self.quotation)
                formData.append('city', self.city)
                formData.append('quotation_type', self.quotation_type)
                formData.append('state', self.state)
                formData.append('fr', self.$route.params.fr)
                formData.append('close', 0)
                formData.append('state', self.state)
//                var self = this;
//
//                console.log(self.file1);
//
                //if you send  data as formData you will use axios.post
                return axios.post('http://www.hivephing.com/constructback/api/dashboard/addfr', formData
//                    method: 'post',
//                    url: 'http://www.hivephing.com/constructback/api/dashboard/addfr',
//                    data: {
//////                        name: self.name,
//////                        phone: self.phone,
//////                        address: self.address,
//////                        description: self.description,
//////                        quotation: self.quotation,
//////                        city: self.city,
//////                        quotation_type:self.quotation_type,
//////                        state: self.state,
//                          token: localStorage.getItem('token'),
//////                        fr: self.$route.params.fr,
//////                        file1:reader.readAsDataURL(self.file1),
//////                        file2:self.file2,
//////                        file3:self.file3,
//////                        close:0
//                    }
//            }
                ).then(function (response) {
                    console.log(response)
                    if (response.data.success === 'error') {
                        self.status = 'error';
                        self.error = response.data.error;
                        console.log(self.error);
                    }
                    if (response.data.success === 'true') {
                        window.location = '/dashboard/proposals/all';
                    } else {
                        console.log(response.data.success);
                    }
                });
            }

        }
    }
</script>