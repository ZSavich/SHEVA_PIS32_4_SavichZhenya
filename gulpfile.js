"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const del = require("del");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgmin = require("gulp-svgmin");
const jsmin = require("gulp-jsmin");

sass.compiler = require('node-sass');

gulp.task("style", ()=>{
    return gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./style/"))
        .pipe(gulp.dest("./build/style/"))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./build/style"))
        .on('end', server.reload)
});

gulp.task("del", ()=>{
    return del("./build");
});

gulp.task("copyhtml", ()=>{
    return gulp.src(["*.html"])
        .pipe(gulp.dest("./build"))
});

gulp.task("copyfonts", ()=>{
    return gulp.src("./fonts/*.{woff,woff2}")
        .pipe(gulp.dest("./build/fonts"))
});

gulp.task("imagemin", ()=>{
   return gulp.src("./photo/*")
       .pipe(imagemin())
       .pipe(gulp.dest("./build/photo"))
});

gulp.task("svgmin", ()=>{
    return gulp.src("./icons/*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest("./build/icons"));
});

gulp.task("jsmin", function(){
    return gulp.src("./js/*.js")
        .pipe(gulp.dest('./build/js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./build/js"))
});

gulp.task("serve", gulp.series(gulp.parallel("style"), ()=>{
    server.init({
        server: {
            baseDir: "."
        },
        notify: false
    });

    gulp.watch("sass/**/*.scss", gulp.series("style"));
    gulp.watch("js/*.js"), gulp.series("jsmin");
    gulp.watch("*.html", gulp.series("copyhtml"));
    gulp.watch("*.html").on("change", server.reload);
}));

gulp.task('build', gulp.series('del', gulp.parallel("style", "copyhtml", "copyfonts", "imagemin", "svgmin", "jsmin")));


