const postcss = require('postcss');
const properties = require('./properties');
const values = require('./values');


module.exports = postcss.plugin('postcss-romanian-stylesheets', (opts) => {
    opts = opts || {};

    // Work with options here

    return (root) => {

        // Transform CSS AST here
        root.walkDecls((decl) => {
            // Convert Properties
            Object.keys(properties).forEach((property) => {
                if (decl.prop === properties[property]) {
                    decl.prop = property;
                }
            });
            // Convert values
            Object.keys(values).forEach((value) => {
                decl.value = decl.value.replace(values[value], value);
            });
        });
    };
});
