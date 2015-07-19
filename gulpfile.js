var gulp = require('gulp');
//var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var buildJsTasks = ['js', 'js-includes'];
var buildHtmlTasks = ['html'];
var buildCssTasks = ['css-includes'];
var buildTasks = buildHtmlTasks.concat(buildJsTasks, buildCssTasks);

gulp.task('default', ['serve'], function() {
});

gulp.task('serve', buildTasks, function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch("app/js/**/*.js", ['js-watch']);
    gulp.watch("app/**/*.html", ['html-watch']);
});

gulp.task('js', function() {
   return gulp.src('app/js/**/*.js')
       //.pipe(concat('minified.js'))
       //.pipe(uglify())
       .pipe(gulp.dest('build/js'));
       //.pipe(reload({stream:true}));
});

gulp.task('js-includes', function() {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest('build/js/includes'));
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('css-includes', function() {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/normalize.css/normalize.css'
    ]).pipe(gulp.dest('build/css'));
});

gulp.task('js-watch', buildJsTasks, browserSync.reload);
gulp.task('html-watch', buildHtmlTasks, browserSync.reload);
gulp.task('css-watch', buildCssTasks, browserSync.reload);
