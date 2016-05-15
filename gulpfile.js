const gulp = require("gulp");
const merge = require("merge2");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");

gulp.task("tslint", () => {
    return gulp.src("src/*.ts")
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

gulp.task("tsc", () => {
    return gulp.src("src/**/*.ts")
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest("src"));
});

gulp.task("dist", function() {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(ts());
 
    return merge([
        tsResult.dts.pipe(gulp.dest("dist")),
        tsResult.js.pipe(gulp.dest("dist"))
    ]);
});

gulp.task("default", ["tslint", "tsc", "dist"]);

gulp.task("watch", ["default"], () => {
    gulp.watch("src/**/*.ts", ["default"]);
});

