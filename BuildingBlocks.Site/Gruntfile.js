module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			compile: {
				files: {
				    'css/main.css': 'css/main.scss'
				}
			}
		},
		watch: {
			css: {
			    files: 'css/**/*.scss',
				tasks: ['sass']
			}
		},
		svgmin: {
	        dist: { 
		        files: [{
		        	expand: true,
		        	cwd: 'images',
        			src: ['**/*.svg'],
        			dest: 'images'
		        }]
		    }
		},
		bower: {
		    install: {
		        production: true
		    }
		},
		copy: {
		    css: {
		        expand: true,
		        cwd: './lib/',
		        src: '**/*.css',
		        dest: './css/lib/'
		    },
		    js: {
		        expand: true,
		        cwd: './lib/',
		        src: '**/*.js',
		        dest: './scripts/lib/'
		    }
		}
	});
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.registerTask('default', ['bower:install', 'copy', 'sass']);
	grunt.registerTask('svgcompress', ['svgmin']);
}