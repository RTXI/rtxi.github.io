module.exports = function(grunt) {

   grunt.loadNpmTasks('grunt-shell');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-build-control');

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      /*
       *  Create path variables for ease of use later. Don't run this as a command.
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
         font_awesome: {
            less: 'bower_components/font-awesome/less',
            css: 'bower_components/font-awesome/css',
            fonts: 'bower_components/font-awesome/fonts'
         },
         octicons: 'bower_components/octicons/octicons'
      },

      less: {
         bootstrap: {
            options: {
               compress: true,
               paths: '<%= paths.bootstrap.less %>/'
            },
            files: { 
               '<%= paths.assets.css %>/bootstrap.min.css' : '<%= paths.assets.less %>/bootstrap-base.less'
            }
         },
         font_awesome: {
            options: {
               compress: true,
               paths: '<%= paths.font_awesome.less %>/'
            },
            files: { 
               '<%= paths.assets.css %>/font-awesome.min.css' : '<%= paths.assets.less %>/font-awesome-base.less'
            }
         },
         octicons: {
            options: {
               comporess: true,
               paths: '<% paths.octicons %>'
            },
            files: {
               '<%= paths.assets.css %>/octicons.min.css' : '<%= paths.assets.less %>/octicons.less'
            }
         }
      },

      /*
       *  Deploys changes to _site to the master branch on GitHub.
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
       *  Set of shell scripts to have bower, bundler, and npm install and/or update packages
       */
      shell: {
         build: {
            command: 'bundle exec jekyll build --quiet' 
         },
         serve: {
            command: 'bundle exec jekyll serve'
         },
         init: {
            command: [
               'bower install',
               'npm install',
               'bundle install',
/*
               'mkdir -p assets',
               'mkdir -p assets/less',
*/
            ].join(' && ')
         },
         update: {
            command: [ 
               'bower update', 
               'bundle update',
               'echo "check if npm update is still broken"'
            ].join(' && ')
         }
      },

      /*
       *  Copy files from bootstrap bower_components files to the base directory
       */
      copy: {
         main: {
            files: [
               {
                  cwd: '<%= paths.bootstrap.less %>/',
                  src: ['bootstrap.less', 'variables.less'], 
                  dest: '<%= paths.assets.less %>/.bootstrap/',
                  expand: true
               },
               {
                  cwd: '<%= paths.bootstrap.js %>/',
                  src: 'bootstrap.min.js', 
                  dest: '<%= paths.assets.js %>/',
                  expand: true
               },
               {
                  cwd: '<%= paths.bootstrap.fonts %>/',
                  src: '*',
                  dest: '<%= paths.assets.fonts %>/',
                  expand: true
               },
               {
                  cwd: '<%= paths.font_awesome.fonts %>/',
                  src: '*',
                  dest: '<%= paths.assets.fonts %>/',
                  expand: true
               },
               {
                  cwd: '<%= paths.font_awesome.less %>/',
                  src: ['font-awesome.less', 'variables.less'], 
                  dest: '<%= paths.assets.less %>/.font-awesome/',
                  expand: true
               },
               {
                  cwd: '<%= paths.octicons %>/',
                  src: ['*.svg', '*.eot', '*.ttf', '*.woff'],
                  dest: '<%= paths.assets.fonts %>/',
                  expand: true
               },
               {
                  cwd: '<%= paths.octicons %>/',
                  src: 'octicons.less', 
                  dest: '<%= paths.assets.less %>/.octicons/',
                  expand: true
               },
               {
                  cwd: '<%= paths.jquery %>/',
                  src: 'jquery.min.js',
                  dest: '<%= paths.assets.js %>/',
                  expand: true
               },
               {
                  cwd: '<%= paths.isotope %>/',
                  src: '*.min.js',
                  dest: '<%= paths.assets.js %>',
                  expand: true
               }
            ]
         }
      },

      /*
       *  
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
       *  
       */
      watch: {
         content: {
            files: [
               '_includes/*',
               '_layouts/*',
               '_posts/**',
               '_plugins/*',
               'conference/**',
               'papers/**',
               'install/*',
               'contact/*',
               'docs/*',
					'stats/*',
               'modules/index.html',
               'assets/img/**',
               '_config.yml',
               'index.html',
               'favicon.ico'
            ],
            tasks: ['shell:build'],
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

   grunt.registerTask('default', ['shell:build', 'connect', 'watch']);
   grunt.registerTask('init', ['shell:init','copy','less']);
   grunt.registerTask('update', ['shell:update','copy','less']);
   grunt.registerTask('deploy', ['htmlmin', 'buildcontrol:master'])
};
