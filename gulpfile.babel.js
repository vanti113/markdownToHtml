import gulp from "gulp";
import markdown from "gulp-markdown";
import del from "del";

const routes = {
  md_route: "src/md/*.md",
  build_route: "build/",
  save_md: "src/saves/",
};

const saveClasses = () =>
  gulp.src(routes.md_route).pipe(gulp.dest(routes.save_md));

const markToHtml = () =>
  gulp
    .src(routes.md_route)
    .pipe(markdown())
    .pipe(gulp.dest(routes.build_route));

const cleanUp = () => del(routes.md_route);

export const build = gulp.series([saveClasses, markToHtml, cleanUp]);
