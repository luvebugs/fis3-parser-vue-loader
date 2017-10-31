
(function(template){

module && module.exports && (module.exports.template = template);

exports && exports.default && (exports.default.template = template);

})("<div class=\"component-a\" __vuec__>\n  Component A\n</div>");

module && module.exports && (module.exports.template = "");

exports && exports.default && (exports.default.template = "");
//

module.exports = {
  created() {
    console.log('component a created !');
  },
  methods: {
      }
}