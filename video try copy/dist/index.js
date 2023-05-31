//---------------video
function HandleAddVideo(e) {
    var _a;
    e.preventDefault();
    var div = document.createElement("div");
    var vid = document.createElement("video");
    var src = document.createElement("source");
    vid.controls = true;
    vid.appendChild(src);
    div.appendChild(vid);
    var file = (_a = inputfile.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var videoURL = URL.createObjectURL(file);
        src.src = videoURL;
    }
    else {
        console.log("cant find file");
    }
    document.body.appendChild(div);
}
courseVideo.addEventListener("click", function (e) {
    lecturerInner.style.display = "none";
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerLessons.style.display = "none";
    lecturerInnerLessonsV.style.display = "flex";
    lecturerInnerVideos.style.display = "none";
    lecturerInnerVideos.style.display = "none";
    videoCourse();
});
function videoCourse() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    var datesArr = courses[_courseindex].datesCourse;
    var html = "";
    for (var i = 0; i < datesArr.length; i++) {
        html += "\n      <div class=\"cardDate\" onclick=\"markVideos()\">\n      <h1>Lesson " + (i + 1) + "</h1>\n      <h3>Date: " + datesArr[i] + "</h3>\n    </div>\n    ";
    }
    lecturerInnerLessonsV.innerHTML = html;
}
function markVideos() {
    var data = localStorage.getItem("courseIndex");
    if (!data)
        throw new Error("data is null");
    var _courseindex = JSON.parse(data);
    lecturerInnerLessons.style.display = "none";
    lecturerInnerLessonsV.style.display = "none";
    lecturerInnerVideos.style.display = "flex";
    var _loop_1 = function (i) {
        var div = document.createElement("div");
        var inputfile = document.createElement("input");
        inputfile.type = "file";
        inputfile.accept = "video/mp4";
        var btn = document.createElement("button");
        btn.id = "btn";
        var btnd = document.getElementById("btn");
        div.appendChild(inputfile);
        div.appendChild(btn);
        btnd === null || btnd === void 0 ? void 0 : btnd.addEventListener("click", function (e) {
            var _a;
            var file = (_a = inputfile.files) === null || _a === void 0 ? void 0 : _a[0];
            var video = document.createElement("video");
            video.controls = true;
            if (file) {
                var videoURL = URL.createObjectURL(file);
                video.src = videoURL;
            }
        });
        saveCourseToLS(courses);
    };
    // lecturerInnerLessonsV.style.flexDirection = "column";
    for (var i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
        _loop_1(i);
    }
}
