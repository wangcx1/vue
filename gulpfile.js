var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  imagemin = require('gulp-imagemin'),
  cssmin = require('gulp-minify-css'),
  cssver = require('gulp-make-css-url-version');
gulp.task('teststylus', function () {
  return gulp.src('src/common/stylus/index.styl')
    .pipe(stylus({
      compress: true//压缩stylus
    }))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('testImagemin', function () {
  return gulp.src('src/components/star/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
      optimizationLevel: 5,//类型：Number 默认：3 取值范围：0-7（优化等级）
      progressive: true,//类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true,//类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true//类型：Boolean 默认:false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('dist/img'))
});
gulp.task('testCssmin',function () {
  return gulp.src('dist/css/*.css')
    .pipe(cssver())
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css1'));
  }
);
gulp.task('default', ['teststylus', 'testImagemin','testCssmin']);
