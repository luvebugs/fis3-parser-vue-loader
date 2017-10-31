
(function(template){

module && module.exports && (module.exports.template = template);

exports && exports.default && (exports.default.template = template);

})("<div class=\"component-c\">\n  Component C\n<img src=\"/src/image/1.jpg\" alt=\"\" />\n</div>");

module && module.exports && (module.exports.template = "");

exports && exports.default && (exports.default.template = "");
//

export default {
  created() {
    console.log('component c created !');
  },
  methods: {
      }
}