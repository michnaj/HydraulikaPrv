module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['js/*.js'],
        tasks: ['eslint'],
        options: {
          spawn: false
        }
      }
    },
    eslint: {
      target: ['js/*.js']
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            'js/*.js',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/styles.min.css': ['css/cards-gallery.css', 'css/style.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images_src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    }
  });

  //Load the plugins tasks}
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default tasks
  grunt.registerTask('default', ['sass', 'eslint', 'cssmin', 'browserSync', 'watch']);
};