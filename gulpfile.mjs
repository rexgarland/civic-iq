import gulp from "gulp";
import htmltidy from "gulp-htmltidy";

export default function html() {
  return gulp.src("public/index.html").pipe(htmltidy()).pipe(gulp.dest("dist"));
}
