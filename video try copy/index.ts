//---------------video



function HandleAddVideo(e) {
    e.preventDefault();
    const div = document.createElement("div");
    const vid = document.createElement("video");
    const src = document.createElement("source");
    vid.controls = true;
    vid.appendChild(src);
    div.appendChild(vid);
    const file = inputfile.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      src.src = videoURL;
    } else {
      console.log("cant find file");
    }
    document.body.appendChild(div);
  }
  courseVideo.addEventListener("click", (e) => {
    lecturerInner.style.display = "none";
    lecturerInnerLessonsG.style.display = "none";
    lecturerInnerLessons.style.display = "none";
    lecturerInnerLessonsV.style.display = "flex";
    lecturerInnerVideos.style.display = "none";
    lecturerInnerVideos.style.display = "none";
    videoCourse()
  });
  
  function videoCourse() {
    let data = localStorage.getItem("courseIndex");
    if (!data) throw new Error("data is null");
    const _courseindex = JSON.parse(data);  
    const datesArr = courses[_courseindex].datesCourse;
    let html: string = "";
    for (let i = 0; i < datesArr.length; i++) {
      html += `
      <div class="cardDate" onclick="markVideos()">
      <h1>Lesson ${i + 1}</h1>
      <h3>Date: ${datesArr[i]}</h3>
    </div>
    `;
    }
    lecturerInnerLessonsV.innerHTML = html;
  }
  
  
  function markVideos() {
    let data = localStorage.getItem("courseIndex");
    if (!data) throw new Error("data is null");
    const _courseindex = JSON.parse(data);
    lecturerInnerLessons.style.display = "none";
    lecturerInnerLessonsV.style.display = "none";
    lecturerInnerVideos.style.display = "flex"
    // lecturerInnerLessonsV.style.flexDirection = "column";
    for (let i = 0; i < courses[_courseindex].studentsCourse.length; i++) {
      const div = document.createElement("div");
      const inputfile = document.createElement("input");
        inputfile.type = "file";
        inputfile.accept = "video/mp4";
      const btn = document.createElement("button");
      btn.id = "btn";
      const btnd = document.getElementById("btn");
      div.appendChild(inputfile);
      div.appendChild(btn);
      btnd?.addEventListener("click", (e) =>{
        const file = inputfile.files?.[0]
        const video = document.createElement("video")
        video.controls = true;
        if(file){
          const videoURL = URL.createObjectURL(file);
          video.src = videoURL;
      }
      })
      saveCourseToLS(courses);
    }
  }
  