
(function(template){

module && module.exports && (module.exports.template = template);

exports && exports.default && (exports.default.template = template);

})("<div class=\"component-b\">\n  Component B <a href=\"javascript:;\" @click=\"hello\">Click Me</a>\n</div>");

module && module.exports && (module.exports.template = "");

exports && exports.default && (exports.default.template = "");
//

module.exports = {
  created() {
    console.log('component b created !');
  },
  methods: {
    hello() {
      alert('hello!');
    }
  }
}