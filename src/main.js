import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//引用bootstrap 需安裝
// @popperjs/core
//  bootstrap
//  bootstrap-vue
//  core-js
//  jquery
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



createApp(App).use(store).use(router).mount("#app");
