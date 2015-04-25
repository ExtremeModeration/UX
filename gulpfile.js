var gulp = require('gulp'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    bower_components = 'bower_components',
    bs_assets = bower_components + '/bootstrap-sass-official/assets';

gulp.task('css', function(){
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('fonts', function(){
    return gulp.src(bs_assets + '/fonts/bootstrap/*.*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('js', function(){
    var scriptSrc = [
        bower_components + '/jquery/dist/jquery.js',
        bs_assets + '/javascripts/bootstrap.js',
        'assets/js/**/*.js'
    ];

    return gulp.src(scriptSrc)
        .pipe(uglify({mangle: false}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function(){
    // watch for scss changes
    gulp.watch('assets/sass/*.scss', ['css']);

    // watch for js changes
    gulp.watch('assets/js/**/*.js', ['js']);
});

gulp.task('bower', function(){
    bower({cmd: 'install'});
});

var task_dependencies = ['css', 'fonts', 'js'],
    watch_task_dependencies = task_dependencies.slice(0);

watch_task_dependencies.push('watch');

gulp.task('start', watch_task_dependencies, function(){
    nodemon({
        script: 'bin/www'
    });
});
gulp.task('production', task_dependencies);
gulp.task('default', watch_task_dependencies);
