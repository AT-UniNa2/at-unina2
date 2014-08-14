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
            src: ['index.html', 'js/**', 'css/**', 'pic/**', 'fonts/**'],
            dest: 'dist/'
          },
        ]
      }
    },

    htmlbuild: {
      dist: {
        src: 'app/lectures/*.html',
        dest: 'dist/lectures/',
        options: {
          sections: {
            menu: 'app/lectures/snippets/menu.snippet',
            foot: 'app/lectures/snippets/foot.snippet',
            head: 'app/lectures/snippets/head.snippet',
            navbar: 'app/lectures/snippets/navbar.snippet'
          }
        }
      }
    },

    clean: {
      dist: ['dist/'],
      all: ['dist/', 'node_modules']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('default', ['copy:dist', 'htmlbuild:dist']);
}
