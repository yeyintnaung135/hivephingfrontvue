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

          <div style="padding-bottom: 655px;" class="col-sm-12 col-md-12">
            <h1 class="title"> {{$lang.main.project_detail.desform_title}}</h1>

            <ul class="tab-group">
              <li class="tab tab-title" style="color: #00baff;"><a @click="gotofirst()" > {{$lang.main.proposals.Setup}}</a></li>
              <li class="tab tab-title" style="color: #00baff;"><a @click="gotosecond()"> {{$lang.main.proposals.inner_beauty}} </a></li>
              <li class="active tab tab-title" style="background-color:#00baff;color:white;"><a href="gotothird()" style='background-color:#00baff;color:white;'>{{$lang.main.proposals.rebuild}}</a></li>
              <li class="tab tab-title" style="color: #00baff;"><a @click="gotofourth()"> {{$lang.main.proposals.build}}</a></li>
            </ul>

            <div class="">

              <div>
              <a @click.prevent="go_re(rb1='rb1')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
              <span>
              <span>   {{$lang.main.project_detail.Build}} </span>
              </span>
              </a>

              <a @click.prevent="go_re(rb1='rb2')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
              <span>
              <span> {{$lang.main.project_detail.water_services}} </span>
              </span>
              </a>

              <a @click.prevent="go_re(rb1='rb3')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
              <span>
              <span> {{$lang.main.project_detail.Electric}} </span>
              </span>
              </a>

              <a @click.prevent="go_re(rb1='rb4')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
              <span>
              <span> {{$lang.main.project_detail.Air_con}} </span>
              </span>
              </a>

                <a  @click.prevent="go_re(rb1='rb5')" class="col-md-4 btn-block btn btn-outline-accent m-btn m-btn--custom m-btn--icon m-btn--outline-2x m-btn--pill m-btn--air">
              <span>
              <span>{{$lang.main.project_detail.security}}</span>
              </span>
                </a>
              </div>


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
                rb1: 'rb1',
            }
        },
        methods: {
            go_re: function (data) {

                window.location = '../../dashboard/rebuild/' + data;
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
