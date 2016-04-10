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

cfg.webpack.eslint = {
  configFile: '.eslintrc',
  emitWarning: true
};

cfg.webpack.module.preLoaders[0].loader = 'eslint';
