module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      dist: {
        files: [
          { 
            expand: true,
            flatten: false,
            cwd: 'app/',
            src: ['index.html', 'js/**', 'css/**', 'pic/**', 'fonts/**', 'lib/**', 'plugin/**'],
            dest: 'dist/'
          },
        ]
      }
    },

    clean: {
      dist: ['dist/', 'node_modules']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['copy:dist']);
}
