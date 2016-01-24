'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            options: {
                force: true
            },
            dist: {
							files: {
              	src: "dist"
							}
						},
            output: ['debug']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean']);
};
