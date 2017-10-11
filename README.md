# fis3-parser-vue-component

parser 阶段插件，用于在fis3中编译Vue组件

## 使用

```
    const parserVuePlugin = require('../index');
    // fis-conf.js fis.match('*.js', {     parser: parserVuePlugin })

    fis.set('project.fileType.text', 'vue');
    fis.hook('commonjs', {
        extList: [
            '.js', '.coffee', '.es6', '.jsx', '.vue'
        ],
        umd2commonjs: true,
        ignoreDependencies: []
    });

    fis.match('*.vue', {parser: parserVuePlugin})

    // 发布
    fis.match('(**)', {
        release: '$1'
    });
```



