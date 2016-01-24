//#!/usr/bin/node

module.exports = function(grunt){
    "use strict";

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
        },

				jshint: {
					options: {
					},
					files: ['./*/*.js']
				}
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['clean','jshint']);
};
