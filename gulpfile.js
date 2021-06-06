let project_folder = "dist";
let source_folder = 'public';



let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js",
        assets: project_folder + "/assets/",
        fonts: project_folder + "/fonts/"
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: /* [ */source_folder + "/css/**/*.scss",
        // , "!" + source_folder + "/css/**/*fonts.scss"]
        cssFonts: source_folder + "/css/**/*fonts.scss",
        js: source_folder + "/js/**/*.js",

        jsSrc: 'script.js',
        jsFolder: source_folder + '/js/',
        jsFiles: ['script.js'],

        assets: source_folder + "/assets/**/*.{jpg,png,svg,gif,ico,mp4}",
        fonts: source_folder + "/fonts/**/*.{ttf,woff,woff2,eot,css}"
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.scss",
        js: source_folder + "/js/**/*.js",
        assets: source_folder + "/assets/**/*.{jpg,png,svg,gif,ico,mp4}"
    },
    clean: "./" + project_folder + "/"
}



let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require("gulp-file-include"),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    pxtorem = require('gulp-pxtorem'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    terser = require('gulp-terser'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    scss = require('gulp-dart-sass'),
    /*     postcss = require('gulp-postcss'), */
    uncss = require('gulp-uncss'),
    purgecss = require('gulp-purgecss'),
    svgSprite = require('gulp-svg-sprite'),
    fs = require('fs'),
    babel = require('gulp-babel'),
    webpack = require('webpack-stream'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');




function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function images() {
    return src(path.src.assets)
        /*    .pipe(
               webp({
                   quality: 100
               })
           ) */
        .pipe(dest(path.build.assets))
        /*   .pipe(dest(path.src.assets))
          .pipe(
              imagemin({
                  progressive: true,
                  svgoPlugins: [{ removeViewBox: false }],
                  interlaced: true,
                  optimazationLevel: 1
              })
          )
          .pipe(dest(path.build.assets)) */
        .pipe(browsersync.stream())
}


function html() {
    return src(path.src.html)
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}



function css() {

    return src(path.src.css)
        /*     .pipe(scss({
                outputStyle: "expanded"
            }))
            .pipe(dest(path.src.outPutCss)) */
        .pipe(concat(`style.scss`))
        .pipe(scss({
            outputStyle: "expanded"
        }).on('error', scss.logError))
        .pipe(pxtorem({
            propWhiteList: [
                '*'
            ]
        }))
        .pipe(autoprefixer({
            overrideBrowserlist: ["last 5 versions"],
            cascade: true,
        }))
        .pipe(group_media())

        .pipe(dest(path.build.css))
        .pipe(clean_css())
        /*  .pipe(scss({
             outputStyle: "expanded"
         })) */
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

/* const allCss = (params) => {
    Object.entries(cssFileObg).map((item, i) => {
        // console.log([path.src.jsMain])
        css(item[1].htmlName, item[1].cssName)
    })
    params()
} */



function js(params) {
    path.src.jsFiles.map(entry => {
        return browserify({
            entries: [path.src.jsFolder + entry]
        })
            .transform(babelify, {
                presets: ['@babel/preset-env'],
                plugins: [
                    "syntax-dynamic-import",
                    "@babel/transform-runtime",
                    "transform-async-to-generator"
                ]
            })
            .bundle()
            .pipe(source(entry))
            .pipe(dest(path.build.js))
            .pipe(
                rename({
                    extname: ".min.js"
                })
            )
            .pipe(
                buffer()
            )
            .pipe(terser())
            .pipe(dest(path.build.js))
            .pipe(browsersync.stream())
        /*    return src(path.src.js)
           .pipe(
   
           ) */
        /*     .pipe(babel({
                presets: ['@babel/env'],
                plugins: [
                    "syntax-dynamic-import",
                    "@babel/transform-runtime",
                    "transform-async-to-generator"
                ]
            })) */
        /* .pipe(webpack({
            module: {
                rules: [
                    { test: /\.js$|jsx/, loader: 'babel-loader' },
                ],
            },
        })) */
        /*      .pipe(concat("script.js"))
             .pipe(dest(path.build.js))
             .pipe(terser()) 
             .pipe(
                 rename({
                     extname: ".min.js"
                 })
             ) */
        /*  .pipe(dest(path.build.js))
         .pipe(browsersync.stream()) */
    })
    params()
}

function fontsWoff() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}


gulp.task('svgSprite', () => {
    return gulp.src([source_folder + '/assets/**/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: { // Activate the «css» mode
                    sprite: "../icons/icons.svg",
                    example: true
                }
            }
        })
        )
        .pipe(dest(path.build.assets))
})



/* gulp.task('otf2ttf', () => {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'))
})
 */

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.assets], images);
}

function clean(params) {
    return del(path.clean)
}


/* return Promise.resolve(); */
function fontsStyle(params) {

    let file_content = fs.readFileSync(source_folder + '/css/style.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/css/style.scss', '', cb);
        return fs.readdir(path.build.css, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/css/style.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
    params()
}

function cb() { }

let build = gulp.series(clean, gulp.parallel(html, css, /* fonts, */ js, images, fontsWoff, fontsStyle));
let watch = gulp.parallel(build, browserSync, watchFiles);

exports.fontsStyle = fontsStyle;
exports.fontsWoff = fontsWoff;

exports.images = images;
exports.html = html;
exports.css = css;
// exports.fonts = fonts;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch