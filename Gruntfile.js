module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                destPrefix: 'web'
            },
            custom: {
                options: {
                    destPrefix: 'web',
                    srcPrefix: 'app/Resources/public'
                },
                files: {
                    'assets/img': 'img'
                }
            }
        },
        copy: {
            img: {
                expand: true,
                cwd: 'app/Resources/public/img/',
                src: '**',
                dest: 'web/assets/img'
            }
        },
        less: {
            css: {
                files: {
                    "web/assets/css/main.css": "app/Resources/public/less/main.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['app/Resources/public/less/*.less','app/Resources/public/less/themes/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['app/Resources/**/*.*','app/Resources/**/**/*.*']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['copy','less','watch']);
};