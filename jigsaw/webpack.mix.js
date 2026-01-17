const mix = require('laravel-mix');

mix.setPublicPath('source/assets/build');
mix.options({ processCssUrls: false });

mix.sass('src/assets/sass/resume.scss', 'css/resume.css');
mix.js('source/_assets/js/main.js', 'js/main.js');

mix.copyDirectory('src/assets/images', 'source/assets/images');
mix.copyDirectory('src/assets/img', 'source/assets/img');
mix.copyDirectory('src/assets/fonts', 'source/assets/fonts');
mix.copyDirectory('src/assets/sass/fontawesome/webfonts', 'source/assets/build/webfonts');
