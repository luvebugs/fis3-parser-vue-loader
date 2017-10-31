import Vue from  'vue';

import Index from '../../component/index';

var app = new Vue({
  el: '#app',
  methods: {

  },
  components: {
    Index: Index,
    App: require('src/component/index.vue').default
  },
  created() {
    console.log('created');
  }
});

/**
 * @require 'src/less/index.less'
 */
