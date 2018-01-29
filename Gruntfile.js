module.exports = function(grunt) {
  grunt.initConfig({
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
			}
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['postcss', 'watch']);
};
