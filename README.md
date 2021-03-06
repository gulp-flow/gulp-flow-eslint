# gulp-flow-eslint

ESLint bundle for [gulp-flow](https://github.com/gulp-flow/gulp-flow).


## Requirements

* [gulp-flow](https://github.com/gulp-flow/gulp-flow) must be installed.
* [gulp-flow-webpack](https://github.com/gulp-flow/gulp-flow-webpack) must be installed.


## Install

```sh
npm install --save-dev gulp-flow-eslint
```


## Usage

This bundle configure `cfg.webpack` and adds:

* a rule to `cfg.webpack.module.rules`.
* `cfg.eslint.options` (passed to the Webpack rule).

### Task

A simple example:

_gulpfile.js_
```js
require('gulp-flow-webpack');
require('gulp-flow-eslint');
```

That's all! You can run your tasks.


## LICENSE

[MIT](https://github.com/gulp-flow/gulp-flow-eslint/blob/master/LICENSE) (c) 2016, Nicolas Tallefourtane.


## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](https://nicolab.net) |
|---|
| [Nicolas Talle](https://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |