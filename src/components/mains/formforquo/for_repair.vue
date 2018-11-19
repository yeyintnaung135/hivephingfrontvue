<template>
  <div>
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
                              <span class="m-nav__link-text">စံုစမ္းမည္</span>
                          </a>
                      </li>
                      <li class="m-nav__item">
                          <a href="http://www.hivephing.com/dashboard/contact/mastery" class="m-nav__link">
                              <span class="m-nav__link-text">ဆက္သြယ္ရန္</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <div>
      <div class="for_intro">
        သင္ ဘာလုပ္ခ်င္ပါသလဲ သင့္အတြက္ Company မ်ားစြာမွ ေစ်းႏႈန္းမ်ားကို စံုစမ္းေပးၿပီး သင္ ေရြးခ်ယ္ေသာ Company မွ
      </div>
      <div class="row">&nbsp;</div>

      <div class="col-sm-5" >
        <button class="btn purple btn-block fl little-height" @click.prevent="go(fr1)">ေရလုိင္း
          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>

        <button class="btn red btn-block fl little-height " @click.prevent="go(fr3)">လၽွပ္စစ္သြယ္တန္းျခင္း

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>
        <button class="btn yellow btn-block fl little-height " @click.prevent="go(fr4)">Air-con တပ္ဆင္ျခင္း

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>
        <button class="btn blue btn-block fl little-height " @click.prevent="go(fr5)">အလူမီနီယံလုပ္ငန္း

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>

      </div>

      <div class="col-sm-5">
        <button class="btn pink btn-block fl little-height" @click.prevent="go(fr6)">ေဆးသုတ္မည္
          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>
        <button class="btn dark btn-block fl little-height " @click.prevent="go(fr7)">ၾကမ္းခင္း၊ ပါေကးခင္းမည္

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>

        <button class="btn purple-seance btn-block fl little-height " @click.prevent="go(fr8)">CCTV ႏွင့္
          လံုျခံဳေရးပစၥည္းမ်ား တပ္ဆင္မည္

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
        <br>



        <button class="btn grey-gallery btn-block fl little-height " @click.prevent="go(fr10)">Elevator

          <i style="" class="fa fa-arrow-circle-right font-arrow"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                fr1: 'fr1',
                fr2: 'fr2',
                fr3: 'fr3',
                fr4: 'fr4',
                fr5: 'fr5',
                fr6: 'fr6',
                fr7: 'fr7',
                fr8: 'fr8',
                fr9: 'fr9',
                fr10: 'fr10',
            }
        },
        methods: {
            go: function (data) {

                window.location = '/dashboard/for_repair/' + data;
            }
        }
    }
</script>
