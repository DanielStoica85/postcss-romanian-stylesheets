var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

describe('postcss-romanian-stylesheets', () => {
    // Properties
    it('converts fundal to background.', () => {
        return run('a{ fundal: red; }', 'a{ background: red; }', {});
    });
    it('converts nume-animatie to animation-name.', () => {
        return run('a{ nume-animatie: a; }', 'a{ animation-name: a; }', {});
    });
    it('converts animatie to animation.', () => {
        return run('a{ animatie: cool; }', 'a{ animation: cool; }', {});
    });
    it('converts sus to top.', () => {
        return run('a{ sus: 0; }', 'a{ top: 0; }', {});
    });
    it('converts jos to bottom.', () => {
        return run('a{ jos: 0; }', 'a{ bottom: 0; }', {});
    });
    it('converts stanga to left.', () => {
        return run('a{ stanga: 0; }', 'a{ left: 0; }', {});
    });
    it('converts dreapta to right.', () => {
        return run('a{ dreapta: 0; }', 'a{ right: 0; }', {});
    });
    // Values
    it('converts rosu to red.', () => {
        return run('a{ fundal: rosu; }', 'a{ background: red; }', {});
    });
    it('converts relativ to relative.', () => {
        return run('a{ pozitie: relativ; }', 'a{ position: relative; }', {});
    });
});
