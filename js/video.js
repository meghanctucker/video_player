
//create variables targeting the transcript spans and video
const dStart = document.querySelectorAll("span[data-start]");
const video = document.querySelector("video");

//create an event listener
//trigger as video time updates
video.addEventListener("timeupdate", () => {
  //inside listener loop
  for (let i = 0; dStart.length; i += 1) {
    //over each listener
    let myDStart = dStart[i];
    let startTime = dStart[i].dataset.start;
    let endTime = dStart[i].dataset.end;
    let playTime = video.currentTime;
        //inside loop use conditional
        //IF conditions == true
        if (startTime <= playTime && playTime <= endTime) {
          //set <span> {color: #f7ac57;}
          myDStart.style.color = "#f7ac57";
        }
        //else <span> {color: original color;}
        else {
          myDStart.style.color = "black";
        }
      }
});
