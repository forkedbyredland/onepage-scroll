'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'jquery.onepage-scroll.min.js': ['jquery.onepage-scroll.js']
        }
      }
    }
  });
  grunt.registerTask('default', [
    'uglify'
  ]);
};
