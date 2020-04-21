
//create array to pull data start attribute value and set it as new array value.

//const spanItems = document.getElementsByTagName("span")[0];
//const testing = document.getElementsByClassName("testClick");
const dStart = document.querySelectorAll("span[data-start]");
const video = document.querySelector("video");


//const startTime = dStart[0].dataset.start;
//spanItems.addEventListener("click", () => {
//    spanItems.textContent = spanItems.textContent.toUpperCase();
//});

//  let myValue = dStart.getAttribute("data-start"); //This should get the data start value
//  console.log(myValue);

// use data-start and data-end attributes to span each target
video.addEventListener("timeupdate", () => {
//  console.log(video.currentTime);
  for (let i = 0; dStart.length; i += 1) {
    let myDStart = dStart[i];
    let startTime = dStart[i].dataset.start;
    let endTime = dStart[i].dataset.end;
    let playTime = video.currentTime;
  //  if startTime >= currenttime && endTime <= currenttime { myDStart.style.color = "#f7ac57;"}
  // else if (false) { myDStart.style.color = "black";}

//  }
        if (startTime <= playTime && endTime >= playTime) {
          myDStart.style.color = "#f7ac57";
        }
        else {
          myDStart.style.color = "black";
        }


      //    myDStart.addEventListener("mouseover", () => {
//          myDStart.style.color = "";
  //      });
//
  //        myDStart.addEventListener("mouseout", () => {
    //      myDStart.style.color = "";
      //  });
  //console.log(startTime);
  //console.log(endTime);
};
});
//create an event listener
//trigger as video time updates
//inside listener loop
  //over each listener
    //inside loop use conditional
      //video current time > data-attribute-start && <data-attribute-end
    //IF conditions == true
      //set <span> {color: #f7ac57;}
    //else <span> {color: original color;}


  //  for (let i = 0; dstart.length; i += 1) {
dStart.addEventListener( 'click', () => {
  //get the current span
  //set video playback time to data-start
})



//EXTRA CREDIT:
  //IF <Span> is clicked, jump video to that place.
