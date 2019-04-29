var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/assets/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()
    .addEntry('js/app', './app/Resources/public/js/app.js')
;

module.exports = Encore.getWebpackConfig();