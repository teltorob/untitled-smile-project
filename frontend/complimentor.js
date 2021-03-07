const receiver = document.getElementById("receiver");
const receiverContainer = document.getElementById("receiverContainer");
const contentContainer = document.getElementById("content-container");
const submitButton = document.getElementById("submitButton");
const placeholderMessage = "Be a reason someone smiles today...";
const form = document.getElementById("form");
const successColor="#4eb352";
const failColor="#ff2929";

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
    receiverContainer.classList.add("zoomer");
    setTimeout(function(){receiverContainer.classList.remove("zoomer")},600);

    return true;
  }
  else{
    receiverContainer.classList.add("shaker");
    setTimeout(function(){receiverContainer.classList.remove("shaker")},800);
    return false;
    
  }
}

function colourSelector() {
  let random = Math.floor(Math.random() * 5);
  console.log(random);
  let selectedColour = colourScheme[random];
  console.log(selectedColour);
  receiver.style.backgroundColor = selectedColour;
  contentContainer.style.color = selectedColour;
  submitButton.style.backgroundColor = selectedColour;
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
    submitButton.style.borderColor=successColor;
    submitButton.style.backgroundColor=successColor;
    submitButton.style.filter="brightness(1)"
    receiver.style.borderColor=successColor;
    form.reset(); 
    setTimeout(function() {alert("Thank you for your compliment, have a nice day!")},1800);
  }

  else
  {
    submitButton.style.borderColor=failColor;
    submitButton.style.backgroundColor=failColor;
    submitButton.style.filter="brightness(1)"
    receiver.style.borderColor=failColor;
    setTimeout(function() {alert("Please fill in your compliment!")},1800);
  }


}

colourSelector();
blinker();