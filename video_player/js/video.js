

const testing = document.getElementsByClassName("testClick");



for (let i = 0; testing.length; i += 1) {
testing[i].addEventListener("mouseover", () => {
  testing[i].style.color = "#f7ac57";
});

testing[i].addEventListener("mouseout", () => {
  testing[i].style.color = "black";
})
}


//const spanItems = document.getElementsByTagName("span")[0];

//spanItems.addEventListener("click", () => {
//    spanItems.textContent = spanItems.textContent.toUpperCase();
//});
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


//EXTRA CREDIT:
  //IF <Span> is clicked, jump video to that place.
