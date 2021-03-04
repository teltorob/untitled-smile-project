const receiver = document.getElementById("receiver")
const contentContainer = document.getElementById("content-container")

var colourScheme= ["#fbd35b","#fb9d5b","#5bfb76","#5bfb76"]
function colourSelector()
{
    let random = Math.floor(Math.random() * 5);
    console.log(random)
    let selectedColour = colourScheme[random]
    console.log(selectedColour)
    receiver.style.backgroundColor =selectedColour
    contentContainer.style.color = selectedColour
}

colourSelector()

var blink = setInterval(function() {
    if(receiver.placeholder== "Be a reason someone smiles today...")
    receiver.placeholder= " "

    else
    receiver.placeholder="Be a reason someone smiles today..."

},1300
)
