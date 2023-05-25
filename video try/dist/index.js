var input = document.getElementById('file-input');
var video = document.getElementById('video');
var videoSource = document.createElement('source');
input.addEventListener('change', function () {
    var files = this.files || [];
    if (!files.length)
        return;
    var reader = new FileReader();
    reader.onload = function (e) {
        videoSource.setAttribute('src', e.target.result);
        video.appendChild(videoSource);
        video.load();
        video.play();
    };
    reader.onprogress = function (e) {
        console.log('progress: ', Math.round((e.loaded * 100) / e.total));
    };
    reader.readAsDataURL(files[0]);
});
