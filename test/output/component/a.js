define('src/component/a.vue', function(require, exports, module) {

  "use strict";
  
  module.exports = {
    created: function created() {
      console.log('component a created !');
    },
  
    methods: {
      //
    }
  };
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div class=\"component-a\" _v-16c48809=\"\">\n  Component A\n</div>");

});
