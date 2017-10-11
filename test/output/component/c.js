define('src/component/c.vue', function(require, exports, module) {

  "use strict";
  
  exports.__esModule = true;
  exports["default"] = {
    created: function created() {
      console.log('component c created !');
    },
  
    methods: {
      //
    }
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div class=\"component-c\">\n  Component C\n<img src=\"/image/1.jpg\" alt=\"\">\n</div>");

});
