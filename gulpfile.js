const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
};

function css(done) {
  src(paths.scss).pipe(plumber()).pipe(sass()).pipe(dest("build/css"));
  done();
}
function javascript(done) {
  src(paths.js).pipe(dest("build/js"));
  done();
}

function watchArchivos() {
  watch(paths.scss, css);
  watch(paths.js, javascript);
}

exports.default = parallel(css, javascript, watchArchivos);
