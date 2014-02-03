module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> -' +
            ' Licensed under the <%= pkg.license %> License\n*/\n\n',

    // JSHint JavaScript files
    jshint: {
      files: ['Gruntfile.js', 'package.json', 'server.js', 'app/assets/javascripts/app.js', 'config/**/*.js', 'config/**/*.json']
    },

    // Concatenate all JavaScript files
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        separator: ';',
      },
      dist: {
        src: ['app/assets/javascripts/jquery.js', 'app/assets/javascripts/bootstrap.js', 'app/assets/javascripts/app.js'],
        dest: 'public/assets/javascripts/app.js'
      },
    },

    // Minify JavaScript with Uglify
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: false
      },
      dist: {
          files: {
            'public/assets/javascripts/app.min.js': ['<%= concat.dist.dest %>']
          }
        }
    },

    // Compile Sass to CSS -  destination : source
    sass: {
      compile: {
        options: {
          style: 'compressed',
          banner: '<%= banner %>'
        },
        files: {
          'public/assets/stylesheets/app.css': 'app/assets/stylesheets/app.scss'
        },
      },
    },

    // Simple config to run sass, jshint and uglify any time a js or sass file is added, modified or deleted
    watch: {
      sass: {
        files: ['app/assets/stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      concat: {
        files : ['<%= concat.dist.src %>'],
        tasks: ['concat']
      },
      uglify: {
        files: ['<%= concat.dist.src %>'],
        tasks: ['uglify']
      },
    },

  });

  // Load the plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'concat', 'sass', 'uglify']);

};
