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
                                {{$lang.main.proposal_form.name}} <span class="req">*</span>
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
                                {{$lang.main.auth.phone}} <span class="req">*</span>
                            </h3>
                            <input type="text" v-model="phone" required autocomplete="off"
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
                                {{$lang.main.project_detail.address}} <span class="req">*</span>
                            </h3>
                            <textarea type="text" v-model="address" required autocomplete="off" rows="4"
                                      style="color:rgb(0, 186, 255);">
                                </textarea>
                            <template v-if="status === 'error'">
                                <template v-if="error.address !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="ead in error.address">{{ead}}</strong>
                                        </span>
                                </template>
                            </template>
                        </div>

                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                {{$lang.main.proposal_form.description}}<span class="req">*</span>
                            </h3>
                            <textarea v-model='description' required autocomplete="off" rows="5"
                                      style="color:rgb(0, 186, 255);">
                                </textarea>
                            <template v-if="status === 'error'">
                                <template v-if="error.description !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edes in error.description">{{edes}}</strong>
                                        </span>
                                </template>
                            </template>
                        </div>

                        <div class="clearfix"></div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Attachment
                                <span class="req">*</span>
                            </h3>
                            <!--<input type="file" name="file" @change="touploadfile" class="col-sm-12 col-md-4"-->
                            <!--autofocus required autocomplete="off"-->
                            <!--style="color:rgb(0, 186, 255);float:left;"/>-->
                            <input type="file" name="file1" ref="file1" @change="touploadfile"
                                   class="col-sm-12 col-md-4"
                                   autofocus required autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>

                            <input type="file" name="file2" ref="file2" @change="touploadfile2"
                                   class="col-sm-12 col-md-4"
                                   autofocus required autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>

                            <input type="file" name="file3" ref="file3" @change="touploadfile3"
                                   class="col-sm-12 col-md-4"
                                   autofocus required autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>


                        </div>
                        <div class="field-wrap">
                            <div class="col-sm-12 col-md-4">
                                <template v-if="status === 'error'">
                                    <template v-if="error.file1 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf1 in error.file1">{{edesf1}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                            <div class="col-sm-12 col-md-4">

                                <template v-if="status === 'error'">
                                    <template v-if="error.file2 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf2 in error.file2">{{edesf2}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                            <div class="col-sm-12 col-md-4">

                                <template v-if="status === 'error'">
                                    <template v-if="error.file3 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf3 in error.file3">{{edesf3}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <br>
                        <br>

                        <div class="field-wrap">
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                {{$lang.main.proposal_form.choose}} <span class="req">*</span>
                            </label>
                            <div class="">
                                <select name="" class="col-md-8" v-model="quotation_type">
                                    <option value="0"> {{$lang.main.proposal_form.sub_choose1}}</option>
                                    <option value="1">{{$lang.main.proposal_form.sub_choose2}}</option>

                                </select>
                            </div>

                        </div>

                        <div class="clearfix"></div>

                        <div class="field-wrap">
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                {{$lang.main.proposal_form.count_com}}<span class="req">*</span>
                            </label>
                            <div class="">
                                <select name="" id="" class="col-md-8" v-model="quotation">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>


                                </select>
                            </div>

                        </div>

                        <div class="clearfix"></div>


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

                        <div class="field-wrap" v-else>
                            <label style="font-size: 18px; padding-bottom: 20px;" class="col-md-4">
                                Cities/Towns <span class="req">*</span>
                            </label>
                            <div class="">
                                <select class="col-md-8" v-model="city">
                                    <option v-for="city in cities" :value="city.id">
                                        {{ city.name }}
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