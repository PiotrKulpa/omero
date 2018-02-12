var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var npmDist = require('gulp-npm-dist');

//paths
var paths = {
  scripts: ['./src/assets/js/*.js', '!src/assets/js/*min.js'],
  static: ['src/assets/css/*', 'src/assets/fonts/*', 'src/assets/images/*']
};

//copy libs from node_modules
// Copy dependencies to dist/assets/libs/
// gulp.task('node', function() {
//   return gulp.src(paths.node)
//     .pipe(gulp.dest('dist/assets/libs/'));
// });

// Copy dependencies to ./public/libs/
gulp.task('copy:libs', function() {
  gulp.src(npmDist(), {base:'./node_modules'})
    .pipe(gulp.dest('./dist/libs'));
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

    .pipe(gulp.dest('./dist/assets/js'));
});

//final production
//01: copy all statics and libs to dist
gulp.task('copy', ['static', 'copy:libs', 'scripts'], function() {

});

//02: inject to index
gulp.task('inject', function() {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src('/libs/jquery/dist/jquery.min.js', {base: './dist'}), {starttag: '<!-- inject:head:{{ext}} -->'}))
    .pipe(inject(gulp.src(['/assets/js/main.min.js', '/assets/css/*.css', '/libs/font-awesome/css/font-awesome.min.css'], {base: './dist'})))
    .pipe(gulp.dest('./dist'));
});
