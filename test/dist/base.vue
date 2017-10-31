
(function(template){

module && module.exports && (module.exports.template = template);

exports && exports.default && (exports.default.template = template);

})("<h2 class=\"red\">{{msg}}</h2>");

module && module.exports && (module.exports.template = "");

exports && exports.default && (exports.default.template = "");
//

export default {
  data () {
    return {
      msg: 'Hello from Component A!'
    }
  }
}