const {src, dest, watch} = require(`gulp`);
const scss = require('gulp-sass')(require('sass'));
const concat = require(`gulp-concat`);
const uglify = require(`gulp-uglify-es`).default;

function convertScss() {
    return src(`app/scss/styles.scss`)
        .pipe(concat(`style.min.css`))
        .pipe(scss({outputStyle: `compressed`}))
        .pipe(dest(`app/css`));

}

function convertJS() {
    return src(`app/js/main.js`)
        .pipe(concat(`main.min.js`))
        .pipe(uglify())
        .pipe(dest(`app/js`));
}

exports.convertScss = convertScss;
exports.convertJS = convertJS;