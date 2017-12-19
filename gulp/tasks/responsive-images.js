var gulp = require('gulp'),
    responsive = require('gulp-responsive');



gulp.task('responsive-images', function() {
    return gulp.src(['events/**/*.png', 'events/**/*.jpg','events/**/*.jpeg','events/**/*.PNG', 'events/**/*.JPG','events/**/*.JPEG','!events/**/*@2x*'])
        .pipe(responsive({
            // produce multiple images from one source
            '**/*': [{
                width: '100%'
            }, {
                rename: {
                    suffix: '@2x'
                }
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            errorOnUnusedImage: false,
            progressive: true,
            silent: false,
            withMetadata: false,
        }))
        .pipe(gulp.dest('events'));
});
