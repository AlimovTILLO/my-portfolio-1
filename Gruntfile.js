module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dynamic: {
        files: [{
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          expand: true,
          cwd: 'images/src/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/dist/'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
          processors: [
              require('autoprefixer')({browsers: ['last 6 version']}),
              require('precss'),
              require('cssnext'),
              require('postcss-import')
          ]
      },
      dist: {
        src: 'styles/src/style.css',
        dest: 'styles/dest/style.css'
      }
    },

    watch: {
			css: {
		    files: [
          'styles/src/*.css'
        ],
		    tasks: ['postcss', 'watch'],
		    options: {
            livereload: true,
		        spawn: false,
		        event: ['all'],
		    }
      },
      imgs: {
        files: [
          'images/src/*.css'
        ],
		    tasks: ['imagemin', 'watch'],
			}
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['imagemin', 'postcss', 'watch']);
};
