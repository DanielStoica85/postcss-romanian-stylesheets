# PostCSS Romanian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Romanian Style Sheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/DanielStoica85/postcss-romanian-stylesheets.svg
[ci]:      https://travis-ci.org/DanielStoica85/postcss-romanian-stylesheets

```css
.foo {
    fundal: rosu;
    pozitie: relativ;
    nume-animatie: cool;
    culoare-granita: albastru;
    sus: 0;
    stanga: 0;
}
```

```css
.foo {
    background: red;
    position: relative;
    animation-name: cool;
    border-color: blue;
    top: 0;
    left: 0;
}
```

## Usage

```js
postcss([ require('postcss-romanian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## Contributing

`postcss-romanian-stylesheets` has only a subset of CSS and needs your help to add more Romanian properties and values.

## Changelog

See [CHANGELOG.md](https://github.com/DanielStoica85/postcss-romanian-stylesheets/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/DanielStoica85/postcss-romanian-stylesheets/blob/master/LICENSE).