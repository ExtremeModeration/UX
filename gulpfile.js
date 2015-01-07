var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    bower_components = 'bower_components',
    bs_assets = bower_components + '/bootstrap-sass-official/assets';

gulp.task('css', function(){
    return gulp.src('assets/sass/*.scss')
        .pipe(compass({
            sass: 'assets/sass',
            css: 'public/stylesheets',
            import_path: 'bower_components'
        }))
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('js', function(){
    var scriptSrc = [
        bower_components + '/jquery/dist/jquery.js',
        bs_assets + '/javascripts/bootstrap.js',
        'assets/js/app.js'
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

var task_dependencies = ['css', 'js'],
    watch_task_dependencies = task_dependencies.slice(0);

watch_task_dependencies.push('watch');

gulp.task('production', task_dependencies);
gulp.task('default', watch_task_dependencies);