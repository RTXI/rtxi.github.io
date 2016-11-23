module.exports = function(grunt) {

  /*
   * All the grunt plugins used for building the site. (They are all node
   * modules.)
   */ 
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-build-control');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
     * Create path variables for ease of use later. Don't run this as a
     * command.
     */
    paths: {
      assets: {
        css: 'assets/css',
        js: 'assets/js',
        fonts: 'assets/fonts',
        less: 'assets/less'
      },
      bootstrap: {
        css: 'bower_components/bootstrap/dist/css',
        fonts: 'bower_components/bootstrap/dist/fonts',
        js: 'bower_components/bootstrap/dist/js',
        less: 'bower_components/bootstrap/less'
      },
      jquery: 'bower_components/jquery/dist',
      isotope: 'bower_components/isotope/dist',
      // font_awesome: {
      //   less: 'bower_components/font-awesome/less',
      //   css: 'bower_components/font-awesome/css',
      //   fonts: 'bower_components/font-awesome/fonts'
      // },
      datatables: {
        js: "bower_components/datatables.net/js"
      },
      datatables_bs: {
        js: "bower_components/datatables.net-bs/js",
        css: "bower_components/datatables.net-bs/css"
      },
      datatables_responsive: {
        js: "bower_components/datatables.net-responsive/js"
      },
      datatables_responsive_bs: {
        css: "bower_components/datatables.net-responsive-bs/css"
      }
    },

    /*
     * Compiles CSS using less. Uses the customized less files in assets folder
     * and searches the bower_components folder for @imports. 
     */
    less: {
      bootstrap: {
        options: {
          compress: true,
          paths: '<%= paths.bootstrap.less %>/'
        },
        files: { 
          '<%= paths.assets.css %>/src/bootstrap.min.css' : 
            '<%= paths.assets.less %>/bootstrap-base.less'
        }
      // },
      // font_awesome: {
      //   options: {
      //     compress: true,
      //     paths: '<%= paths.font_awesome.less %>/'
      //   },
      //   files: { 
      //     '<%= paths.assets.css %>/src/font-awesome.min.css' : 
      //       '<%= paths.assets.less %>/font-awesome-base.less'
      //   }
      }
    },

    /*
     * Deploys changes to _site to the master branch on GitHub.
     */
    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Rebuild %sourceName%',
      },
      master: {
        options: {
          branch: 'master',
          remote: 'git@github.com:rtxi/rtxi.github.io'
        }
      }
    },

    /*
     * Set of shell scripts to have bower, bundler, and npm install and/or
     * update packages
     */
    shell: {
      build: {
        command: 'bundle exec jekyll build --future --quiet' 
      },
      serve: {
        command: 'bundle exec jekyll --future serve'
      },
      init: {
        command: [
          'bower install',
          'npm install',
          'bundle install',
        ].join(' && ')
      },
      update: {
        command: [ 
          'bower update', 
          'bundle update',
          'npm update',
        ].join(' && ')
      }
    },

    /*
     * Copy files from bootstrap bower_components files to the base directory
     */
    copy: {
      main: {
        files: [
          // {
          //   cwd: '<%= paths.bootstrap.less %>/',
          //   src: ['*.less', 'mixins/'], 
          //   dest: '<%= paths.assets.less %>/src/bootstrap/',
          //   expand: true
          // },
          {
            cwd: '<%= paths.bootstrap.js %>/',
            src: 'bootstrap.min.js', 
            dest: '<%= paths.assets.js %>/src/',
            expand: true
          },
          {
            cwd: '<%= paths.bootstrap.fonts %>/',
            src: '*',
            dest: '<%= paths.assets.fonts %>/',
            expand: true
          },
          // {
          //   cwd: '<%= paths.font_awesome.fonts %>/',
          //   src: '*',
          //   dest: '<%= paths.assets.fonts %>/',
          //   expand: true
          // },
          // {
          //   cwd: '<%= paths.font_awesome.less %>/',
          //   src: ['font-awesome.less', 'variables.less'], 
          //   dest: '<%= paths.assets.less %>/src/font-awesome/',
          //   expand: true
          // },
          {
            cwd: '<%= paths.jquery %>/',
            src: 'jquery.min.js',
            dest: '<%= paths.assets.js %>/src',
            expand: true
          },
          {
            cwd: '<%= paths.isotope %>/',
            src: '*.min.js',
            dest: '<%= paths.assets.js %>',
            expand: true
          },
          {
            cwd: '<%= paths.datatables.js %>/',
            src: 'jquery.dataTables.min.js',
            dest: '<%= paths.assets.js %>/src/',
            expand: true
          },
          {
            cwd: '<%= paths.datatables_bs.js %>/',
            src: 'dataTables.bootstrap.min.js',
            dest: '<%= paths.assets.js %>/src/',
            expand: true
          },
          {
            cwd: '<%= paths.datatables_bs.css %>/',
            src: 'dataTables.bootstrap.min.css',
            dest: '<%= paths.assets.css %>/src/',
            expand: true
          },
          {
            cwd: '<%= paths.datatables_responsive.js %>/',
            src: 'dataTables.responsive.min.js',
            dest: '<%= paths.assets.js %>/src/',
            expand: true
          },
          {
            cwd: '<%= paths.datatables_responsive_bs.css %>/',
            src: 'responsive.bootstrap.min.css',
            dest: '<%= paths.assets.css %>/src/',
            expand: true
          }
        ]
      }
    },

    /*
     * Concatenate JavaScript and CSS files. 
     */
    concat: {
      options: {
        separator: ';\n'
      },
      datatables_js: {
        src: [
          '<%= paths.assets.js %>/src/jquery.dataTables.min.js',
          '<%= paths.assets.js %>/src/dataTables.bootstrap.min.js',
          '<%= paths.assets.js %>/src/dataTables.responsive.min.js'
        ],
        dest: '<%= paths.assets.js %>/src/dataTables.js'
      },
      datatables_css: {
        src: [
          '<%= paths.assets.css %>/src/dataTables.bootstrap.min.css',
          '<%= paths.assets.css %>/src/responsive.bootstrap.min.css'
        ],
        dest: '<%= paths.assets.css %>/src/dataTables.css'
      },
      default_js: {
        src: [
          '<%= paths.assets.js %>/src/jquery.min.js',
          '<%= paths.assets.js %>/src/bootstrap.min.js'
        ],
        dest: '<%= paths.assets.js %>/src/default.js'
      },
      default_css: {
        src: [
          '<%= paths.assets.css %>/src/bootstrap.min.css',
          // '<%= paths.assets.css %>/src/font-awesome.min.css',
          '<%= paths.assets.css %>/src/syntax.css'
        ],
        dest: '<%= paths.assets.css %>/src/default.css'
      }
    },

    /*
     *  
     */
    uglify: {
      default_js: {
        files: {
          '<%= paths.assets.js %>/default.min.js': [
            '<%= paths.assets.js %>/src/default.js'
          ]
        }
      },
      datatables_js: {
        files: {
          '<%= paths.assets.js %>/dataTables.min.js': [
            '<%= paths.assets.js %>/src/dataTables.js'
          ]
        }
      }
    },

    /*
     *  
     */
    cssmin: {
      default_css: {
        files: {
          '<%= paths.assets.css %>/default.min.css': [
            '<%= paths.assets.css %>/src/default.css'
          ]
        }
      },
      dataTables_css: {
        files: {
          '<%= paths.assets.css %>/dataTables.min.css': [
            '<%= paths.assets.css %>/src/dataTables.css'
          ]
        }
      }
    },


    /*
     * Minify HTML in the _site folder. Don't do this in the build directory,
     * or I will hurt you. 
     */
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '_site/',
          src: ['*.html', '**/*.html'],
          dest: '_site/'
        }]
      }
    },

    /*
     * Directories to watch. Wildcards probably would have sufficed.
     */
    watch: {
      content: {
        files: [
          '_drafts/**',
          '_data/**',
          '_includes/**',
          '_layouts/**',
          '_posts/**',
          '_plugins/**',
          'conference/**',
          'community/**',
          'papers/**',
          'install/**',
          'contact/**',
          'docs/**',
          'manual/**',
          'stats/**',
          'modules/**',
          'assets/img/**',
          '_config.yml',
          'index.html',
          'manual.html',
          '404.html',
          'README.md',
          'favicon.ico'
        ],
        tasks: ['shell:build'],
        options: {
          livereload: true
        }
      },
      css: {
        files: [ '<%= paths.assets.css %>/src/*.css' ],
        tasks: [
          'concat:default_css', 
          'concat:datatables_css', 
          'cssmin', 
          'shell:build'
        ],
        options: {
          livereload: true
        }
      },
      js: {
        files: [ '<%= paths.assets.js %>/src/*.js' ],
        tasks: [
          'concat:default_js', 
          'concat:datatables_js', 
          'uglify', 
          'shell:build'
        ],
        options: {
          livereload: true
        }
      },
      less: {
        files: [ '<%= paths.assets.less %>/*.less' ],
        tasks: ['less', 'shell:build'],
        options: {
          livereload: true
        }
      }
    },
    
    /*
     * Builds the server on your localhost domain and refreshes the site when
     * the build changes. 
     */
    connect: {
      server: {
        options: {
          port: 4000,
          base: '_site',
          livereload: true
        }
      }
    }
  });

  /*
   * Set of available grunt tasks: 'grunt', 'grunt init', 'grunt update', and
   * 'grunt deploy'. 
   */
  grunt.registerTask('default', 
    ['shell:build', 'connect', 'watch']);
  grunt.registerTask('init', 
    ['shell:init','copy','less', 'concat', 'cssmin', 'uglify']);
  grunt.registerTask('rebuild', 
    ['copy', 'less', 'concat', 'cssmin', 'uglify'])
  grunt.registerTask('update', 
    ['shell:update','copy','rebuild']);
  grunt.registerTask('deploy', 
    ['htmlmin', 'buildcontrol:master']);
};
