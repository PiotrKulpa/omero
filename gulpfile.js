var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var npmDist = require('gulp-npm-dist');

//paths
var paths = {
  scripts: ['src/assets/js/**/*.js', '!src/assets/js/*min.js'],
  static: ['src/assets/css/*', 'src/assets/fonts/*', 'src/assets/images/*', 'src/index.html'],
  node: ['node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/jquery/dist/jquery.min.js']
};

//copy libs from node_modules
// Copy dependencies to dist/assets/libs/
gulp.task('node', function() {
  return gulp.src(paths.node)
    .pipe(gulp.dest('dist/assets/libs/'));
});


//copy all statics from src
gulp.task('static', function() {
  return gulp.src(paths.static, {base: 'src'})
    .pipe(gulp.dest('dist'));
});

//contact and minify js
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)


      .pipe(uglify())
      .pipe(concat('main.min.js'))

    .pipe(gulp.dest('assets/js'));
});

//wstrzyknij do finalnego index

gulp.task('inject', ['node', 'scripts'], function() {
  gulp.src('./dist/index.html')
    .pipe(inject(gulp.src('dist/assets/libs/jquery.min.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->'}))
    .pipe(inject(gulp.src(['/assets/js/main.min.js', '/assets/css/*.css', 'dist/assets/libs/*.css'], {read: false})))
    .pipe(gulp.dest('./dist'));
});

//final production
gulp.task('default', ['static', 'inject'], function() {

});
