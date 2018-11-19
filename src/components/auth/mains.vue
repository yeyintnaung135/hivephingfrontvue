<template>
    <div class="">
        <div class="col-xs-12 top_banner">
            <div class="top_header">
                <div class="col-xs-4  col-sm-4 col-md-2" style="">
                    <img src="../../assets/newpublic/photo/logo/logo.png" class="logo"
                         style="width:112px;height:63px;float:right;"/>
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 logo_lyric" style="">HivePhing</div>
            </div>
            <div style="">
                <button class="btn btn-info" @click="cc(lang='mm')">mm</button>
                <button class="btn btn-info" v-if="lang=='mm'" @click="zawgyi()">Unicode</button>
                <button class="btn btn-info" @click="cc(lang='en')">en</button>
            </div>
        </div>
        <div id="page" style="top:0px;">
            <aside id="colorlib-hero">
                <div class="flexslider">
                    <ul class="slides">
                        <li v-bind:style="{ 'background-image':'url(' + image1+ ')' }">
                            <div class="overlay"></div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                        <div class="slider-text-inner text-center">
                                            <div style="background:rgba(66, 60, 60, 0.37);color:yellow;">
                                                <h1 style="color:yellow;">HivePhing</h1>
                                                <h2>The best real time search engine to browse skillful contractors in
                                                    Myanmar.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li v-bind:style="{ 'background-image':'url('  + image2+  ')' }">
                            <div class="overlay"></div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                        <div class="slider-text-inner text-center">
                                            <div style="background:rgba(66, 60, 60, 0.37);color:yellow;">
                                                <h1 style="color:yellow;">HivePhing</h1>
                                                <h2>Save time and no cost to get the best reliable contractors</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li v-bind:style="{ 'background-image':'url('  + image4 +  ')' }">
                            <div class="overlay"></div>
                            <div class="container-fluids">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                        <div class="slider-text-inner text-center">
                                            <div style="background:rgba(66, 60, 60, 0.37);color:yellow;">
                                                <h1 style="color:yellow;">HivePhing</h1>
                                                <h2>Trust us ,we always provide you the best services </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li v-bind:style="{ 'background-image':'url('  + image3 +  ')' }">
                            <div class="overlay"></div>
                            <div class="container-fluids">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                        <div class="slider-text-inner text-center">
                                            <div style="background:rgba(66, 60, 60, 0.37);color:yellow;">
                                                <h1 style="color:yellow;">HivePhing</h1>
                                                <h2>We are dedicated to your home endurance</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>

        <div class="row">
            &nbsp;
            &nbsp;
            &nbsp;
        </div>
        <div class="col-sm-12">

            <div class="uni" v-if="ffonts=='unicode'">
                <div class="tr-bg-overlay"></div>
                <div class="col-md-12 tr-bg">
                </div>
                <div class="te">
                    <div class="col-sm-6 col-md-6 col-lg-6">

                        <div style="padding: 30px 85px;">

                        </div>
                        <div class="clearfix"></div>
                        <div id="login_letter"
                             style="text-align: left; color: rgba(95, 90, 107, 0.81); font-weight: bold;">
                            <h3 class="heading"><span>{{$lang.main.auth.welcome2}}</span></h3>
                            {{$lang.main.auth.welcome}}
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form" style="width: 458px;">
                            <ul class="tab-group">
                                <li class="tab active"><a href="#login"> {{$lang.main.auth.login}}
                                </a></li>
                                <li class="tab"><a href="#signup">{{$lang.main.auth.register}}</a></li>
                            </ul>

                            <div class="tab-content">

                                <div id="login">

                                    <form v-on:submit.prevent="gologin">


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.phone}}<span class="req">*</span>
                                            </label>
                                            <input type="text" v-model="phone" required autofocus autocomplete="off"/>


                                            <template v-if="status === 'vfalse'">
                                                <template v-if="error.phone !== undefined">
                                          <span class="help-block">
                  <strong v-for="ep in error.phone" style="color: red; font-size: 15px;">
                      {{ep}}
                  </strong>
                </span>
                                                </template>

                                            </template>

                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.password}}<span class="req">*</span>
                                            </label>
                                            <input type="password" v-model="password" required autocomplete="off"/>

                                            <template v-if="status === 'vfalse'">
                                                <template v-if="error.phone !== undefined">
                                          <span class="help-block">
                                                <strong v-for="eps in error.password"
                                                        style="color: red; font-size: 15px;">
                                                    {{eps}}
                                                </strong>
                                             </span>
                                                </template>
                                            </template>
                                        </div>

                                        <!--<p class="forgot"><a href="#">စကား၀ွက္ ေမ့ေနပါသလား</a></p>-->

                                        <button type='submit' class="button button-block">
                                            {{$lang.main.auth.login}}
                                        </button>
                                        <br>
                                        <div style="font-size:2rem;font-weight:bold;color:white;">
                                            {{$lang.main.auth.login_as_company}}
                                            <a href="http://www.hivephing.com/companies/" class="btn btn-info">{{$lang.main.auth.click_here}}</a>
                                        </div>
                                    </form>
                                    <template v-if="status == 'jfalse'">
                                        <div>
                                            <div class="alert alert-danger" style="font-size:17px;">
                                                <strong>{{error}}</strong>
                                            </div>
                                        </div>
                                    </template>
                                </div>

                                <div id="signup">

                                    <form v-on:submit.prevent="goregister">


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.proposal_form.name}}<span class="req">*</span>
                                            </label>
                                            <input type="text" autofocus required autocomplete="off" v-model="name"/>


                                        </div>


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.phone}}<span class="req">*</span>
                                            </label>
                                            <input type="text" required autocomplete="off" v-model="phone"/>

                                            <template v-if="success === false">
                                                <template v-if="error.phone !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;" v-for="ep in error.phone">
                                                {{ep}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.password}}<span class="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off" v-model="password"/>

                                            <template v-if="success === false">
                                                <template v-if="error.password !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;" v-for="epsw in error.password">
                                                {{epsw}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.confirm_psw}}<span class="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off"
                                                   v-model="password_confirmation"/>


                                            <template v-if="success === false">
                                                <template v-if="error.password_confirmation !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;"
                                                    v-for="epswc in error.password_confirmation">
                                                {{epswc}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <button type="submit" class="button button-block">
                                            {{$lang.main.auth.register}}
                                        </button>
                                        <br>
                                        <div style="font-size:2rem;font-weight:bold;color:white;">
                                            {{$lang.main.auth.login_as_company}}
                                            <a href="http://www.hivephing.com/companies/" class="btn btn-info">{{$lang.main.auth.click_here}}</a>
                                        </div>

                                    </form>

                                </div>

                            </div><!-- tab-content -->

                        </div> <!-- /form -->
                    </div>
                </div>

                <div class="clearfix">&nbsp;</div>

                <div class="poor">
                    <h1>HivePhing</h1>
                    <br>
                    <p>
                        {{$lang.main.auth.sub_welcome}}
                    </p>
                </div>

                <div class="clearfix"></div>

                <div id="footer" class="col-md-12" style="background:#302d67;">
                    <div style="margin-left:2%;margin-right:2%;margin-top:2%;">
                        <div class="col-xs-6 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>
                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-envelope" style="font-size:22px;"></span>
                                <span style="font-weight:bolder;"> Email</span>
                                info@masterymyanmar.com
                                info@hivephing.com
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>

                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-phone" style="font-size:22px;"></span>

                                <span style="font-weight:bolder;">Call Us</span><br>
                                09456114442<br>
                                09773777445
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>
                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-map-marker" style="font-size:22px;"></span>

                                <span style="font-weight:bolder;">Address</span><br>
                                No.112 myin thar 9 street,south okkalarpa township<br>
                                Yangon
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">

                        <ul>
                            <span style="float: left; font-size: 20px; padding-top: 20px; color: #fff;"> Follow us : </span>
                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on linkedin"
                                   href="https://www.facebook.com/businessnetwork.hivephing/"
                                   class="linkedin">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on linkedin"
                                   href="https://www.linkedin.com/in/hivephing-business-network-a90767159/"
                                   class="linkedin">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on instagram"
                                   href="https://www.instagram.com/hivephingmyanmar" class=instagram>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on twitter"
                                   href="https://www.twitter.com/hive_phingmm/" class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>


                    </div>
                    <div class="col-md-6 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12"
                         style="padding-bottom:22px;">
                        COPYRIGHT © 2016-2018 HivePhing ALL RIGHTS RESERVED .
                    </div>
                </div>
            </div>
            <div class="zaw " v-if="ffonts=='zawgyi'">
                <div class="tr-bg-overlay"></div>
                <div class="col-md-12 tr-bg">
                </div>
                <div class="te">
                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <div style="padding: 30px 85px;">

                        </div>
                        <div class="clearfix"></div>
                        <div id="login_letter"
                             style="text-align: left; color: rgba(125, 124, 128, 0.81); font-weight: bold;">
                            <h3 class="heading"><span>{{$lang.main.auth.welcome2}}</span></h3>

                            {{$lang.main.auth.welcome}}

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <div class="form" style="width: 458px;">

                            <ul class="tab-group">
                                <li class="tab active"><a href="#login"> {{$lang.main.auth.login}}
                                </a></li>
                                <li class="tab"><a href="#signup">{{$lang.main.auth.register}}</a></li>
                            </ul>

                            <div class="tab-content">

                                <div id="login">

                                    <form v-on:submit.prevent="gologin">


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.phone}}<span class="req">*</span>
                                            </label>
                                            <input type="text" v-model="phone" required autofocus autocomplete="off"/>


                                            <template v-if="status === 'vfalse'">
                                                <template v-if="error.phone !== undefined">
                                          <span class="help-block">
                                          <strong v-for="ep in error.phone" style="color: red; font-size: 15px;">
                                          {{ep}}
                                          </strong>
                                          </span>
                                                </template>

                                            </template>

                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.password}}<span class="req">*</span>
                                            </label>
                                            <input type="password" v-model="password" required autocomplete="off"/>

                                            <template v-if="status === 'vfalse'">
                                                <template v-if="error.phone !== undefined">
                                          <span class="help-block">
                                                <strong v-for="eps in error.password"
                                                        style="color: red; font-size: 15px;">
                                                    {{eps}}
                                                </strong>
                                             </span>
                                                </template>
                                            </template>
                                        </div>

                                        <!--<p class="forgot"><a href="#">စကား၀ွက္ ေမ့ေနပါသလား</a></p>-->

                                        <button type='submit' class="button button-block">
                                            {{$lang.main.auth.login}}
                                        </button>
                                        <br>
                                        <div style="font-size:2rem;font-weight:bold;color:white;">
                                            {{$lang.main.auth.login_as_company}}
                                            <a href="http://www.hivephing.com/companies/" class="btn btn-info">{{$lang.main.auth.click_here}}</a>
                                        </div>
                                    </form>
                                    <template v-if="status == 'jfalse'">
                                        <div>
                                            <div class="alert alert-danger" style="font-size:17px;">
                                                <strong>{{error}}</strong>
                                            </div>
                                        </div>
                                    </template>
                                </div>

                                <div id="signup">

                                    <form v-on:submit.prevent="goregister">


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.proposal_form.name}}<span class="req">*</span>
                                            </label>
                                            <input type="text" autofocus required autocomplete="off" v-model="name"/>


                                        </div>


                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.phone}}<span class="req">*</span>
                                            </label>
                                            <input type="text" required autocomplete="off" v-model="phone"/>

                                            <template v-if="success === false">
                                                <template v-if="error.phone !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;" v-for="ep in error.phone">
                                                {{ep}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.password}}<span class="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off" v-model="password"/>

                                            <template v-if="success === false">
                                                <template v-if="error.password !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;" v-for="epsw in error.password">
                                                {{epsw}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <div class="field-wrap">
                                            <label>
                                                {{$lang.main.auth.confirm_psw}}<span class="req">*</span>
                                            </label>
                                            <input type="password" required autocomplete="off"
                                                   v-model="password_confirmation"/>


                                            <template v-if="success === false">
                                                <template v-if="error.password_confirmation !== undefined">

                                             <span class="help-block">
                                            <strong style="color: red; font-size: 15px;"
                                                    v-for="epswc in error.password_confirmation">
                                                {{epswc}}
                                            </strong>
                                           </span>
                                                </template>

                                            </template>
                                        </div>

                                        <button type="submit" class="button button-block">
                                            {{$lang.main.auth.register}}
                                        </button>
                                        <br>
                                        <div style="font-size:2rem;font-weight:bold;color:white;">
                                            {{$lang.main.auth.login_as_company}}
                                            <a href="http://www.hivephing.com/companies/" class="btn btn-info">{{$lang.main.auth.click_here}}</a>
                                        </div>

                                    </form>

                                </div>

                            </div><!-- tab-content -->

                        </div>
                        <!-- /form -->

                    </div>
                </div>

                <div class="clearfix">&nbsp;</div>


                <div class="poor">
                    <h1>HivePhing</h1>
                    <br>
                    <p>
                        {{$lang.main.auth.sub_welcome}}
                    </p>
                </div>

                <div class="clearfix"></div>

                <div id="footer" class="col-md-12" style="background:#302d67;">
                    <div style="margin-left:2%;margin-right:2%;margin-top:2%;">
                        <div class="col-xs-6 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>
                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-envelope" style="font-size:22px;"></span>
                                <span style="font-weight:bolder;"> Email</span>
                                info@masterymyanmar.com
                                info@hivephing.com
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>

                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-phone" style="font-size:22px;"></span>

                                <span style="font-weight:bolder;">Call Us</span><br>
                                09456114442<br>
                                09773777445
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4" style="text-align: center;">
                            <div class="col-xs-3 col-sm-3">
                            </div>
                            <div class="col-xs-12 col-sm-6" style="text-align:left;margin-top:4%;">
                                <span class="fa fa-map-marker" style="font-size:22px;"></span>

                                <span style="font-weight:bolder;">Address</span><br>
                                No.112 myin thar 9 street,south okkalarpa township<br>
                                Yangon
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">

                        <ul>
                            <span style="float: left; font-size: 20px; padding-top: 20px; color: #fff;"> Follow us : </span>
                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on linkedin"
                                   href="https://www.facebook.com/businessnetwork.hivephing/"
                                   class="linkedin">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on linkedin"
                                   href="https://www.linkedin.com/in/hivephing-business-network-a90767159/"
                                   class="linkedin">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on instagram"
                                   href="https://www.instagram.com/hivephingmyanmar" class=instagram>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a rel="nofollow" target="_blank" title="Follow us on twitter"
                                   href="https://www.twitter.com/hive_phingmm/" class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>


                    </div>
                    <div class="col-md-6 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12"
                         style="padding-bottom:22px;">
                        COPYRIGHT © 2016-2018 HivePhing ALL RIGHTS RESERVED .
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    @import "../../assets/newpublic/css/bootstrap.min.css";
    @import "../../assets/newpublic/css/style.css";
    @import "../../assets/public/font-awesome/css/font-awesome.css";
    @import "../../assets/newpublic/slider/flexslider.css";
    @import "../../assets/newpublic/slider/style.css";
    @import "../../assets/newpublic/slider/yankee_custom.css";
    @import "../../assets/newpublic/slider/animate.css";

    @font-face {
        font-family: 'Ours-Unicode';
        src: local('Ours-Unicode'), url('https://mmwebfonts.comquas.com/fonts/oursunicode.woff') format('woff'), url('https://mmwebfonts.comquas.com/fonts/oursunicode.ttf') format('ttf');
    }

    @font-face {
        font-family: 'Zawgyi-One';
        src: local('Zawgyi-One'), url('https://mmwebfonts.comquas.com/fonts/zawgyi.woff') format('woff'), url('https://mmwebfonts.comquas.com/fonts/zawgyi.ttf') format('ttf');
    }

    .tr-bg {
        top: 0;
        height: 56%;
        left: 0;
        right: 0;
        position: absolute;

        background: url('../../assets/newpublic/slider/images/bacCopy.jpg');
        z-index: -1;

    }

    .te {
        postition: relative;
        z-index: 2;
    }

    .tr-bg-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: .8;
        background: #00b7ea;
        /* Old browsers */
        background: -moz-linear-gradient(45deg, #9daeaf00 0%, #b0afc6 100%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #9daeaf00 0%, #b0afc6 100%);
        /* Chrome10-25,Safari5.1-6 */
        background: -o-linear-gradient(45deg, #9daeaf00 0%, #b0afc6 100%);
        background: linear-gradient(45deg, #9daeaf00 0%, #b0afc6 100%);
        z-index: 0;

    }

    .uni {
        font-family: "Ours-Unicode"

    }

    .zaw {
        font-family: "Zawgyi-One"

    }
</style>
<script>
    import Login from './login.vue'
    import Register from './register.vue'
    import axios from 'axios'
    import change_lang from '../../mixins/change_lang'


    export default {
        mixins: [change_lang],

        data(){
            return {
                phone: '',
                password: '',
                error: '',
                name: "",
                image1: require("../../assets/newpublic/images/img_bg_1.jpg"),
                image2: require("../../assets/newpublic/images/img_bg_2.jpg"),
                image3: require("../../assets/newpublic/images/img_bg_3.jpg"),
                image4: require("../../assets/newpublic/images/img_bg_4.jpg"),
                hastoken: '',
                status: 'true',
                password_confirmation: '',
                success: '',
                lang: 'mm',

                type: this.$route.params.type
            }
        },
        methods: {
            //to sert external js file
            gologin: function () {
                var self = this;
                self.error = '';
                self.status = '';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/login',
                    cache: false,
                    data: {
                        phone: self.phone,
                        password: self.password
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    if (response.data.success === 'vfalse') {
                        self.status = 'vfalse';
                        self.error = response.data.error;
                    } else if (response.data.success === 'jfalse') {
                        self.status = 'jfalse';
                        self.error = response.data.error;
                    } else {
                        localStorage.setItem("token", response.data.data.token);
                        console.log(localStorage.getItem("token"));
                        window.location = '/dashboard/proposals/all';
                    }

                });

            },
            goregister: function () {
                var self = this;
                self.error = '';
                self.success = '';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/register',
                    data: {
                        phone: self.phone,
                        password: self.password,
                        password_confirmation: self.password_confirmation,
                        name: self.name
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data.success == false) {
                        self.success = false;
                        self.error = response.data.data;
                        console.log(self.error.phone);
                    }
                    if (response.data.success == true) {
                        localStorage.setItem('token', response.data.data);
                        window.location = '/dashboard/formq/all';
                    }
                });
            },
            crnode: function (data) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'http://' + window.location.hostname + '/' + data)
                recaptchaScript.setAttribute('type', 'application/javascript')
                document.getElementById('as').appendChild(recaptchaScript)
            },

            check: function () {
                var self = this;
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/api/dashboard',
                    data: {
                        token: localStorage.getItem("token"),
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    self.hastoken = response.data[0];
                    if (self.hastoken === 'true') {
                        window.location = '/dashboard/proposals/all';

                    }
                    console.log(response.data[0]);
                });


            }
        },
        created() {
            this.crnode('dist/js/index.js');

            this.crnode('dist/js/jquery.waypoints.min.js');
            this.crnode('dist/js/jquery.flexslider-min.js');
            this.crnode('dist/js/jquery.magnific-popup.min.js');
            this.crnode('dist/js/magnific-popup-options.js');
            this.crnode('dist/js/jquery.countTo.js');
            this.crnode('dist/js/main.js');
            this.check();

        }


    }
</script>