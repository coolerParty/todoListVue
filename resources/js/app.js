require('./bootstrap');

import {createApp} from 'vue/dist/vue.esm-bundler';

import ExampleComponent1 from './components/ExampleComponent1.vue';

const rootComponent1 = createApp({
        data() {
            return {
                message: 'Hello root Component 1'
            };
        },
        components: {ExampleComponent1},
    });
rootComponent1.mount('#root-component-1');

