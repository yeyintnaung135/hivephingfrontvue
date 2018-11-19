<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>

          <div  class="m-grid__item m-header "  data-minimize-offset="200" data-minimize-mobile-offset="200" >
              <div class="m-container m-container--fluid m-container--full-height">
                  <div class="m-stack m-stack--ver m-stack--desktop">

                      <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">

                          <!-- BEGIN: Topbar -->
                          <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general" style="width:100%;">
                              <div style="float:left;color:#ffee0d;font-size:32px;font-family:'Open Sans';font-weight:bold;">
                                  <img src="../../assets/newpublic/photo/logo/logo.png" class="" style="width:122px;"  alt=""/>
                                  HIVE PHING
                              </div>
                              <ul class="m-topbar__nav m-nav m-nav--inline" style="float:right">

                                  <li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" data-dropdown-toggle="click">
                                      <a href="#" class="m-nav__link m-dropdown__toggle">
                                    <span class="m-topbar__userpic">
                                    <img src="../../assets/newpublic/photo/logo/menu.png" class="m--img-rounded m--marginless m--img-centered"  alt=""/>
                                    </span>
                                          <span class="m-topbar__username m--hide">Nick</span>
                                      </a>
                                      <div class="m-dropdown__wrapper">
                                          <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                          <div class="m-dropdown__inner">

                                              <div class="m-dropdown__body">
                                                  <div class="m-dropdown__content">
                                                      <ul class="m-nav m-nav--skin-light">

                                                          <li class="m-nav__item">
                                                              <a @click.prevent="profile()" class="m-nav__link">
                                                                  <i class="m-nav__link-icon fa fa-user"></i>
                                                            <span class="m-nav__link-title">
                                                                <span class="m-nav__link-wrap">
                                                                    <span class="m-nav__link-text">My Profile</span>
                                                                </span>
                                                            </span>
                                                              </a>
                                                          </li>
                                                          <li class="m-nav__separator m-nav__separator--fit">
                                                          </li>
                                                          <li class="m-nav__item">
                                                              <a  @click.prevent="logout()" class="btn m-btn--pill  btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder" style="color:black !important;">Logout</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>

                              </ul>

                          </div>
                          <!-- E
                          ND: Topbar -->

                      </div>

                  </div>
              </div>
          </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
          <!-- END: Header -->
          <!-- END HEADER INNER -->
  </div>
</template>
<script>
    export default{
        methods: {
            logout: function () {

                localStorage.removeItem('token');
                console.log('deleted');
                window.location='http://'+window.location.hostname+'/auth/login';


            },
            profile:function(){
                window.location='http://'+window.location.hostname+'/dashboard/profile/user';

            }
        }
    }
</script>
