<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="page-sidebar-wrapper">

    <div class="page-sidebar navbar-collapse collapse">

      <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
              data-slide-speed="200">
        <li class="sidebar-toggler-wrapper hide">
          <div class="sidebar-toggler">
            <span></span>
          </div>
        </li>
        <li class="nav-item ">

          <a class="nav-link "> <i class="icon-bar-chart"></i> <span class="title" @click="go">Dashboard </span>
            <span class="selected"></span> </a>

        </li>

      </ul>

    </div>

  </div>
</template>
<script>
  export default{

    methods: {
      go: function () {

        window.location = '../../proposals/all';
      }
    }
  }
</script>

