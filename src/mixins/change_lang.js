/**
 * Created by user on 6/27/2018.
 */

import Vue from 'vue'


const change_lang = Vue.mixin({
    data:function(){
        return {
                lang:"mm",
                ffonts:'zawgyi',
        }
    },
    methods: {
        cc: function (data) {
            var self = this;
            self.lang = data;
            self.$lang.setLang(data)
            localStorage.setItem('lang',data);
            if(data == 'mm'){
                self.ffonts='zawgyi';
                console.log('zawgyi');

            }
            console.log(data);
        },
        zawgyi:function(){
            var self=this;
            self.ffonts='unicode';
            localStorage.setItem('fonts','unicode');

            console.log(self.ffonts);
        },
        unicode:function(){
            var self=this;
            self.ffonts='zawgyi';
            localStorage.setItem('fonts','zawgyi');

            console.log(self.ffonts);

        }
    },
    created(){
        var self=this;
        if(localStorage.getItem('lang') != null){
            self.$lang.setLang(localStorage.getItem('lang'));
            self.lang=localStorage.getItem('lang');
            if(self.lang == 'mm'){
                if(localStorage.getItem('fonts') == 'zawgyi')
                {
                    self.ffonts = 'zawgyi';

                }else {
                    self.ffonts = 'unicode';
                }

            }
        }else{
            self.$lang.setLang('mm');
            self.lang='mm';
            self.ffonts='zawgyi';
            localStorage.setItem('fonts','zawgyi');

        }
    }
});
export default change_lang
