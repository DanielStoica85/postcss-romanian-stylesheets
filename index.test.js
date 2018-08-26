var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

/* Write tests here

it('does something', () => {
    return run('a{ }', 'a{ }', { });
});

*/

describe('postcss-romanian-stylesheets', () => {
    it('converts fundal to background.', () => {
        return run('a{ fundal: red; }', 'a{ background: red; }', {});
    });
});

