module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            responsive_task: {
                options: {
                    sizes: [
                        {
                            name: '_1200',
                            width: 1200,
                        },
                        {
                            name: '_992',
                            width: 992,
                        },
                        {
                            name: '_768',
                            width: 768,
                        },
                        {
                            name: '_576',
                            width: 576
                        },
                        {
                            name: '_350',
                            width: 350,
                        },
                        {
                            name: '_290',
                            width: 290,
                        },
                        {
                            name: '_210',
                            width: 210,
                        },
                        {
                            name: '_original',
                            width: '100%'
                        }
                    ]
                },
                files: [{
                    expand:true,
                    src: ['image_watcher/**.{jpg, jpeg}'],
                    cwd: 'src/assets/',
                    dest: 'src/assets/images'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['responsive_images']);

};