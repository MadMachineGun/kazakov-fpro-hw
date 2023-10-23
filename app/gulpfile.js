const {src, dest} = require(`gulp`);
const sass = require('gulp-sass')(require('sass'));

function convertScss() {
    return src(`app/scss/style.scss`)
        .pipe(scss())
        .pipe(dest(app/css));

}
