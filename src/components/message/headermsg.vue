<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
      <!-- BEGIN HEADER INNER --
      <div class="page-header-inner ">


          <!-- BEGIN LOGO -->


      <div class="page-logo" style="margin-top:0px !important;">
        <a href="/entra_dashboard">
          <img src="../../assets/public/layouts/layout/img/avatar3_small.jpg" width="80px" height="50px" alt="logo" class=""/>
        </a>
      </div>
      <!-- END LOGO -->
      <!-- BEGIN RESPONSIVE MENU TOGGLER -->
      <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
              data-target=".navbar-collapse"> <span></span> </a>
      <!-- END RESPONSIVE MENU TOGGLER -->

      <!-- BEGIN TOP NAVIGATION MENU -->

      <div class="top-menu">
        <ul class="nav navbar-nav pull-right">

          <li class="dropdown dropdown-user">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                    data-close-others="true">
              <img alt="" class="img-circle" src="../../assets/public/layouts/layout/img/avatar3_small.jpg"/>
              <span class="username username-hide-on-mobile"> yankee </span> <i class="fa fa-angle-down"></i> </a>
            <ul class="dropdown-menu dropdown-menu-default">


              <li>
                <button @click="logout">
                  <i class="icon-key"></i> Log Out
                </button>

              </li>
            </ul>
          </li>
          <!-- END USER LOGIN DROPDOWN -->
          <!-- BEGIN QUICK SIDEBAR TOGGLER -->
          <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
          <li class="dropdown dropdown-quick-sidebar-toggler">
          </li>
          <!-- END QUICK SIDEBAR TOGGLER -->
        </ul>
      </div>
      <!-- END TOP NAVIGATION MENU -->
    </div>
    <!-- END HEADER INNER -->
  </div>
</template>
<script>
    export default{
        methods: {
            logout: function () {

                localStorage.removeItem('token');
                console.log('deleted');
                window.location='/auth/login';


            }
        }
    }
</script>
