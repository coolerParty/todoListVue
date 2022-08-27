// require('./bootstrap');

// import Vue from 'vue'

// import App from './vue/app.vue'

// const app = new Vue({
//     el: '#app',
//     components: { App }
// });

// createApp(app).mount('#app')

import { createApp } from "vue"
import App from './vue/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faTrash)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
