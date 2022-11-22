import '../scss/style.scss'

import * as _ from 'lodash';
import axios from 'axios';
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next';

import router from './routes';
// import store from './store';
import cookie from './cookie';

import App from '../App.vue'

VueCookieNext.config(cookie);

createApp(App)
    .use(router)
    // .use(store)
    .use(VueCookieNext)
    .mount('#app')
