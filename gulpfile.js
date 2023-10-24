const {src, dest, watch, parallel} = require(`gulp`);
const scss = require('gulp-sass')(require('sass'));
const concat = require(`gulp-concat`);
const uglify = require(`gulp-uglify-es`).default;
const browserSync = require('browser-sync').create();

function convertScss() {
    return src(`app/scss/styles.scss`)
        .pipe(concat(`style.min.css`))
        .pipe(scss({outputStyle: `compressed`}))
        .pipe(dest(`app/css`))
        .pipe(browserSync.stream());

}

function convertJS() {
    return src(`app/js/main.js`)
        .pipe(concat(`main.min.js`))
        .pipe(uglify())
        .pipe(dest(`app/js`))
        .pipe(browserSync.stream());
}

function watching() {
    watch([`app/js/main.js`], convertJS);
    watch([`app/scss/styles.scss`], convertScss);
}

function browserAutoUpdate() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        // files: [
        //     "app/css/*.css"
        // ]
    });
}

exports.convertScss = convertScss;
exports.convertJS = convertJS;
exports.watching = watching;
exports.browserAutoUpdate = browserAutoUpdate;

exports.default = parallel(convertScss, convertJS, browserAutoUpdate, watching);