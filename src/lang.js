/**
 * Created by user on 6/26/2018.
 */
import Vue from 'vue'
var Lang = require('vuejs-localization');

//Notice that you need to specify the lang folder, in this case './lang'
Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);