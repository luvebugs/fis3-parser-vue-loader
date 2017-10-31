
(function(template){

module && module.exports && (module.exports.template = template);

exports && exports.default && (exports.default.template = template);

})("<div class=\"index __vuec__\" >\n  <p>fis3-parser-vue-component demo runing ~</p>\n  <component-a></component-a>\n  <component-b></component-b>\n  <component-c></component-c>\n  <component-jade></component-jade>\n</div>");

module && module.exports && (module.exports.template = "");

exports && exports.default && (exports.default.template = "");
//

import ComponentA from './a';
import ComponentB from './b';
import ComponentJade from './jade';

 @require '../less/other2.less';

export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentJade,
    ComponentC: require('src/component/c.vue').default
  },
  created() {
    console.log('Index page created!');
  },
  methods: {
      }
}