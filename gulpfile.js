var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
          applyStyleTags: true,
          applyLinkTags: true,
          removeStyleTags: true,
          removeLinkTags: true,
          removeHtmlSelectors: true
        }))
        .pipe(gulp.dest('build/'));
});