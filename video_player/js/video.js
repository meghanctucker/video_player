
//create array to pull data start attribute value and set it as new array value. 

//const spanItems = document.getElementsByTagName("span")[0];
//const testing = document.getElementsByClassName("testClick");
const dStart = document.querySelectorAll("span[data-start]");

//spanItems.addEventListener("click", () => {
//    spanItems.textContent = spanItems.textContent.toUpperCase();
//});

  let myValue = dStart.getAttribute("data-start"); //This should get the data start value
  console.log(myValue);

// use data-start and data-end attributes to span each target

//create an event listener
//trigger as video time updates
//inside listener loop
  //over each listener
    //inside loop use conditional
      //video current time > data-attribute-start && <data-attribute-end
    //IF conditions == true
      //set <span> {color: #f7ac57;}
    //else <span> {color: original color;}
    for (let i = 0; dStart.length; i += 1) {
    dStart[i].addEventListener("mouseover", () => {
      dStart[i].style.color = "#f7ac57";
    });

    dStart[i].addEventListener("mouseout", () => {
      dStart[i].style.color = "black";
    })
    }


//EXTRA CREDIT:
  //IF <Span> is clicked, jump video to that place.
