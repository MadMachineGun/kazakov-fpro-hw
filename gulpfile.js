const {src, dest} = require(`gulp`);
const scss = require('gulp-sass')(require('sass'));

function convertScss() {
    return src(`app/scss/styles.scss`)
        .pipe(scss())
        .pipe(dest(`app/css`));

}
exports.convertScss = convertScss;