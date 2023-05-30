var videoContainer = document.querySelector(".videoContainer");
var videoElement = document.getElementById('video');
var inputfile = document.getElementById('inputfile');
function playVideo(file) {
    var videoURL = URL.createObjectURL(file);
    videoElement.src = videoURL;
}
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
