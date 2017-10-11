const compiler = require('vue-template-compiler');
const hash = require('hash-sum');
const deindent = require('de-indent');
// vi my-proj/node_modules/fis3-<type>-<name>/index.js

var emptyRE = /(^[\r\n]*)|([\r\n]*$)|(\/\/\n?)/g

module.exports = function (content, file, settings) {
    // console.log(content, file, settings);
    const {filename, dirname} = file;
    const cacheKey = hash(filename + content)
    const defaultLang = {
        template: 'html',
        style: 'css',
        script: 'js'
    }
    const parts = parser(content);
    console.log(parts);
    const {script, styles, template} = parts;
    let output = '';

    if (styles) {
        styles.forEach((item, index) => {
            const type = defaultLang[item.type] || item.type;
            const styleFileName = file.realpathNoExt + `_${index}.${cacheKey}.${type}`;
            styleFile = fis
                .file
                .wrap(styleFileName);
            // css也采用片段编译，更好的支持less、sass等其他语言
            const styleContent = complier(item.content, type);
            styleFile.setContent(styleContent);
            file.derived.push(styleFile);
            file.addRequire(styleFile.getId());
        });
    }
    if (template) {
        const type = defaultLang[template.type] || template.type;
        console.log('template', type);
        const templateContent = complier(template.content, type);
        output += '\n(function(template){\n'
        output += '\nmodule && module.exports && (module.exports.template = template);\n';
        output += '\nexports && exports.default && (exports.default.template = template);\n';
        output += '\n})(' + JSON.stringify(templateContent) + ');\n';
        output += '\nmodule && module.exports && (module.exports.template = "");\n';
        output += '\nexports && exports.default && (exports.default.template = "");\n';
    }
    if (script) {
        const type = defaultLang[script.type] || script.type;
        console.log('script', type);
        output += complier(script.content, type);
    }
    return output;

    function parser(content) {
        const output = compiler.parseComponent(content, {pad: 'line'});
        return output;
    }
    function complier(output, type) {
        output = output.replace(emptyRE, '');
        output = replaceScopedFlag(output);
        return fis.compile.partial(output, file, {
            ext: type,
            isJsLike: true
        });
    }
    // replace scoped flag
    function replaceScopedFlag(str) {
        var reg = new RegExp('([^a-zA-Z0-9\-_])(__vuec__)([^a-zA-Z0-9\-_])', 'g');
        str = str.replace(reg, function($0, $1, $2, $3) {
        return $1 + cacheKey + $3;
        });
        return str;
    }
}