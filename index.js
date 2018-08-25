var postcss = require('postcss');

module.exports = postcss.plugin('postcss-romanian-stylesheets', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {

        // Transform CSS AST here
        root.walkDecls((decl) => {

            // Properties
            decl.prop = decl.prop.replace('fundal', 'background');
            decl.prop = decl.prop.replace('familie-font', 'font-family');
            
            // Values
            decl.value = decl.value.replace('rosu', 'red');
        });
        
    };
});
