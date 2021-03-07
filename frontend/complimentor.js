const receiver = document.getElementById("receiver");
const contentContainer = document.getElementById("content-container");
const submitButton = document.getElementById("submitButton");
const placeholderMessage = "Be a reason someone smiles today...";
const successColor="green";
const failColor="red";

var colourScheme = [
  "#fbd35b",
  "#fb9d5b",
  "#62e484",
  "#5b9bfb",
  "#e462b6",
  "black",
];

function colourSelector() {
  let random = Math.floor(Math.random() * 6);
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
    submitButton.style.borderColor, 
    submitButton.style.backgroundColor,
    receiver.style.borderColor=successColor;
  }

  else
  {
    submitButton.style.borderColor, 
    submitButton.style.backgroundColor,
    receiver.style.borderColor=failColor;
  }


}

colourSelector();
blinker();