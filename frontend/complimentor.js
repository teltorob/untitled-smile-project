const receiver = document.getElementById("receiver");
const contentContainer = document.getElementById("content-container");
const placeholderMessage = "Be a reason someone smiles today...";

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

colourSelector();
blinker();
