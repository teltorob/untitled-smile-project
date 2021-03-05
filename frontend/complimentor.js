const receiver = document.getElementById("receiver")
var isReceiverFocused = (document.activeElement === receiver);
console.log(isReceiverFocused)
const contentContainer = document.getElementById("content-container")

var colourScheme= ["#fbd35b","#fb9d5b","#5bfb76","#5bfb76","#fb5b79","#5b9bfb","#e462b6"]
function colourSelector()
{
    let random = Math.floor(Math.random() * 7);
    console.log(random)
    let selectedColour = colourScheme[random]
    console.log(selectedColour)
    receiver.style.backgroundColor =selectedColour
    contentContainer.style.color = selectedColour
}

colourSelector()

var blink = setInterval(function() {
    var isReceiverFocused = (document.activeElement === receiver);

    if(receiver.placeholder== "Be a reason someone smiles today...")
    receiver.placeholder= " "

    else
    receiver.placeholder="Be a reason someone smiles today..."

    if(isReceiverFocused)
    {
        receiver.placeholder= " "
        clearInterval(blink)
    }
    

},1300
)
