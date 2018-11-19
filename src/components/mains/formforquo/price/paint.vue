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
                <div class="m-content" style="padding-bottom: 844px;">

                <!--<div id="content-bg"-->
                 <!--class="m-grid__item m-grid__item&#45;&#45;fluid m-grid m-grid&#45;&#45;ver-desktop m-grid&#45;&#45;desktop m-body col-sm-12">-->

                <!--<div class="m-grid__item m-grid__item&#45;&#45;fluid m-wrapper" style="">-->
                    <!--<div class="col-md-8 col-md-offset-2">-->
                        <!--<div class="col-xs-12 add_form">-->
                            <!--<h3 style="font-size:25px;font-weight:bolder;color:#00c5dc;">{{$lang.main.paint.place}}</h3>-->

                            <!--<br>-->
                            <!--<div class="field-wrap">-->
                                <!--<div class="">-->
                                    <!--<select name="place_to_paint" class="col-md-8" v-model="paint_place">-->
                                        <!--<option value="1"> {{$lang.main.paint.Old}}</option>-->
                                        <!--<option value="2">{{$lang.main.paint.New}}</option>-->
                                        <!--<option value="3">{{$lang.main.paint.Other}}</option>-->
                                    <!--</select>-->
                                <!--</div>-->
                            <!--</div>-->
                                  <a @click.prevent="go_paint_places(pp=1)" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                    <span>
                                    <span> {{$lang.main.paint.Old}}</span>
                                    </span>
                                  </a>

                                  <a @click.prevent="go_paint_places(pp=2)" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                    <span>
                                    <span> {{$lang.main.paint.New}} </span>
                                    </span>
                                  </a>

                                  <a @click.prevent="go_paint_places(pp=3)" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
                                    <span>
                                    <span> {{$lang.main.paint.Other}} </span>
                                    </span>
                                  </a>
                            <!--<button style="margin-top: 20px;" type="submit" class="btn btn-lg btn-accent"-->
                                    <!--@click.prevent="store()">-->
                                <!--Next-->
                            <!--</button>-->
                                <!--</form>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        </div>
        </div>
        </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                paint_place: '',
                pp:1,
                pp_name:'old'
            }
        },
        methods: {
            store: function () {
                self=this;
                localStorage.setItem('paint_place',self.paint_place)
                if(self.paint_place == 1) {
                    window.location = '../../dashboard/paint/old';
                }
                else if(self.paint_place== 2)
                {
                    window.location = '../../dashboard/paint/new';

                }else{
                    window.location = '../../dashboard/paint/other';

                }
            },
            go_paint_places:function(pp){
                self=this;
                localStorage.setItem('paint_place',pp)

                 if(pp==1){
                    self.pp_name='old'

                 }else if(pp==2)
                 {
                     self.pp_name='new'

                 }else
                 {
                     self.pp_name='other'

                 }
                window.location = '../../dashboard/paint/'+self.pp_name;


            }
        }
    }
</script>