<template>
    <div>
        <div>
            <div id="content-bg"
                 class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body col-sm-12">

                <div class="m-grid__item m-grid__item--fluid m-wrapper" style="">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="col-xs-12 add_form">
                            <h3 style="font-size:25px;font-weight:bolder;color:#00c5dc;">{{$lang.main.paint.New}}</h3>

                            <br>
                            <div class="field-wrap">
                                <div class="">
                                    <select name="place_to_paint" class="col-md-8" v-model="iob">
                                        <option value="1">{{$lang.main.paint.inner}}</option>
                                        <option value="2">{{$lang.main.paint.outer}}</option>
                                        <option value="3">{{$lang.main.paint.both}}</option>

                                    </select>
                                </div>
                            </div>
                            <button style="margin-top: 20px;" type="submit" class="btn btn-lg btn-accent"
                                    @click.prevent="to_io()">
                                Next
                            </button>
                            <!--</form>-->
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
                iob: 1,

            }
        },
        methods:{
            to_io:function(){
                self=this;

                localStorage.setItem('iob',self.iob)

                if(self.iob == 1) {
                    window.location = '../../dashboard/paint/inner';

                }
                else
                {
                    window.location = '../../dashboard/paint/outer';


                }
            }
        }
    }
</script>
