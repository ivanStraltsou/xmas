'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['styles/{,**/}*.css'],
        tasks: ['cssmin:combine', 'cssmin:minify']
      },
      scripts: {
        files: ['scripts/{,**/}*.js'],
        tasks: ['copy:dev']
      }
    },
    concat: {
      dev: {
        files: {
          'public/javascripts/core.js': [
            'bower_components/jquery/jquery.js',
            'bower_components/jquery-snowfall/snowfall.jquery.js',
            'bower_components/pace/pace.js',
            'scripts/lib/swipe.min.js'
          ]
        }
      },
      prod: {

      }
    },

    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: './scripts/',
            src: ['{,**/}*.js', '!lib/*.js'],
            dest: './public/javascripts/'
          },
          {
            expand: true,
            cwd: './images/',
            src: '**',
            dest: './public/images/'
          },
          {
            expand: true,
            cwd: './files/sounds',
            src: '*',
            dest: './public/sounds/'
          },
          {
            expand: true,
            cwd: './styles/fonts/',
            src: '**',
            dest: './public/stylesheets/fonts/'
          }
        ]
      },
      build: {
        files: {
          'dist/': [
            './public/{css/**, img/**}',
            'views/**',
            'server.js',
            'node_modules/**'
          ]
        }
      }
    },

    clean: {
      dist: {
        src: ['<%= config.dist %>', './.tmp'],
        force: true
      }
    },

    uglify: {
      build: {
        files: {
          './dist/card.min.js': [
            './js/jquery-2.0.3.min.js',
            './js/snowfall.min.jquery.js',
            './js/swipe.min.js',
            './js/main.js'
          ]
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '.tmp/style.css': ['styles/normalize.css', 'styles/style.css']
        }
      },
      minify: {
        expand: true,
        cwd: '.tmp',
        src: ['style.css'],
        dest: 'public/stylesheets/',
        ext: '.min.css'
      }
    }
  });

  grunt.registerTask('default', ['concat:dev', 'cssmin:combine', 'cssmin:minify']);
  grunt.registerTask('build', ['uglify:build', 'cssmin:combine', 'cssmin:minify']);
};
