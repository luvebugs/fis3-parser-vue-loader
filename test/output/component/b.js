define('src/component/b.vue', function(require, exports, module) {

  'use strict';
  
  module.exports = {
    created: function created() {
      console.log('component b created !');
    },
  
    methods: {
      hello: function hello() {
        alert('hello!');
      }
    }
  };
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div class=\"component-b\">\n  Component B <a href=\"javascript:;\" @click=\"hello\">Click Me</a>\n</div>");

});
