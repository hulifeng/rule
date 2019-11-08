const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('public/static/layui/layui.all.js', 'public/js')
    .css('public/static/layui/css/layui.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .version();
