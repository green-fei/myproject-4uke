// 请求gulp
const gulp=require("gulp");
const sass=require('gulp-sass');

// 执行监听任务
//复制项目下的所有代码复制到服务器下的发布目录下
    gulp.task('copyfile',async ()=>{
        gulp.src('./**/*')
        .pipe(gulp.dest('C:\\phpStudy\\WWW\\publish'));
    })
// 监听文件，当开发文件有改动的时候，就会自动保存到www
gulp.task('copyfile',async ()=>{
    gulp.watch('sass/**/*',async ()=>{
        gulp.src('sass/**/*')
        .pipe(sass())
        .pipe(gulp.dest('C:\\phpStudy\\WWW\\publish\\css'));

    });
    gulp.watch('*.html',async ()=>{
        gulp.src('*.html')
        .pipe(gulp.dest('C:\\phpStudy\\WWW\\publish'));
    });
    gulp.watch('css/**/*',async ()=>{
        gulp.src('css/**/*')
        .pipe(gulp.dest('C:\\phpStudy\\WWW\\publish\\css'));
    });
});