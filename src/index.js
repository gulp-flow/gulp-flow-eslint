/**
 * This file is part of gulp-flow-eslint.
 *
 * (c) Nicolas Tallefourtane <dev@nicolab.net>
 *
 * For the full copyright and license information, please view the LICENSE file
 * distributed with this source code
 * or visit https://github.com/gulp-flow/gulp-flow-eslint.
 */

'use strict';

let flow = require('gulp-flow');
let {cfg} = flow;

cfg.eslint = {
  options : {
    configFile: '.eslintrc',
    emitWarning: true
  }
};

cfg.webpack.module.rules.push({
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: cfg.eslint.options
});

