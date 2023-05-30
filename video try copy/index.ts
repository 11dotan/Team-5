const videoContainer = document.querySelector(".videoContainer") as HTMLDivElement;
const videoElement = document.getElementById('video') as HTMLVideoElement;
const inputfile = document.getElementById('inputfile') as HTMLInputElement;
function playVideo(file: File) {
    const videoURL = URL.createObjectURL(file);
    videoElement.src = videoURL;
  }
function HandleAddVideo(e){
    e.preventDefault();
    const div = document.createElement("div");
    const vid = document.createElement("video");
    const src = document.createElement("source");
    vid.controls = true;
    vid.appendChild(src)
    div.appendChild(vid);
    const file = inputfile.files?.[0];
    if(file){
        const videoURL = URL.createObjectURL(file);
        src.src = videoURL;
    }
    else{
        console.log("cant find file"); 
    }
    document.body.appendChild(div);
}