const receiver = document.getElementById("receiver");
const receiverContainer = document.getElementById("receiverContainer");
const contentContainer = document.getElementById("content-container");
const submitButton = document.getElementById("submitButton");
const placeholderMessage = "Be a reason someone smiles today...";
const form = document.getElementById("form");
const successColor="#4eb352";
const failColor="#ff2929";
var selectedColour="";

setTimeout(function(){receiverContainer.classList.remove("receiver-container")},8000);


var colourScheme = [
  "#fbd35b",
  "#fb9d5b",
  "#62e484",
  "#5b9bfb",
  "#e462b6",
];

function valid()
{
  if (receiver && receiver.value) {
    return true;
  }
  else{
    return false;
    
  }
}

function colourSelector() {
  let random = Math.floor(Math.random() * 5);
  console.log(random);
  selectedColour = colourScheme[random];
  console.log(selectedColour);
  setColor();

}

function setColor()
{
  receiver.style.backgroundColor = selectedColour;
  contentContainer.style.color = selectedColour;
  submitButton.style.backgroundColor = selectedColour;
  submitButton.style.borderColor = "black";
  submitButton.style.filter = "hue-rotate(325deg)";
  receiver.style.borderColor = "black";

}

function blinker() {
  blink = setInterval(function () {
    if (receiver.placeholder == placeholderMessage) receiver.placeholder = " ";
    else receiver.placeholder = placeholderMessage;
  }, 1300);
}

function stopBlinker() {
  receiver.placeholder = " ";
  clearInterval(blink);
}

function submissionStatus (status)
{
  if(status)
  {

    stateSetter(successColor);

    receiverContainer.classList.add("zoomer");
    setTimeout(function(){receiverContainer.classList.remove("zoomer")},600);


    form.reset(); 
    setTimeout(function() {alert("Thank you for your compliment, have a nice day!")},1200);
    setTimeout(function() {window.location.reload()},1900);
  }

  else
  {

    stateSetter(failColor);

    receiverContainer.classList.add("shaker");
    setTimeout(function(){receiverContainer.classList.remove("shaker")},800);

    setTimeout(function() {alert("Please fill in your compliment!")},900);
    
    inputCheck=setInterval(()=> {
      var isValid =valid();
      if(isValid)
      {
        setColor();
        clearInterval(inputCheck);
      }
    },600)
  }


}

function stateSetter(color)
{
  submitButton.style.borderColor=color;
  submitButton.style.backgroundColor=color;
  submitButton.style.filter="brightness(1)"
  receiver.style.borderColor=color;
}


colourSelector();
blinker();