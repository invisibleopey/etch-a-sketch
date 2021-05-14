const container = document.querySelector('#container');
// Creates 16 x 16 divs inside the Div Container
function createDivs () {
    for (let i = 1; i <= 256; i++) {
        container.innerHTML += '<div class="box">  </div>';
    }
}

// Call the function to create the divs
createDivs();


// Coloring the Boxes
const boxes = document.querySelectorAll('.box');
// Add event listener to the boxes
boxes.forEach(box => box.addEventListener('mouseover', colorDiv));

function colorDiv (e) {
    let redValue = Math.floor(Math.random() * 255);
    let greenValue = Math.floor(Math.random() * 255);
    let blueValue = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = "rgb(" + redValue + "," + 
    greenValue + "," + blueValue + ")";
}

// Button that clears and reset the sizes
const btn = document.querySelector("#btn");
btn.addEventListener('click', changeSize);

let selection = "";
function changeSize () {
    // Ask number from user, keep on asking until its a number
    do{
        selection = parseInt(prompt("Please enter a number from 1 to 30", ""), 10);
    }while(isNaN(selection) || selection > 30 || selection < 1);
    
    // Remove all previous Divs
    removeAllChildNodes(container);

    // create divs using the inputed number
    for (let i = 1; i <= selection * selection; i++) {
        container.innerHTML += '<div class="box">  </div>';
    }
    
    // Style 
    container.style.gridTemplateColumns = "repeat(" + selection+ ", 2fr)";
    container.style.gridTemplateRows = "repeat(" + selection+ ", 2fr)";

    // Color the new boxes
    const newBoxes = document.querySelectorAll('.box');
    newBoxes.forEach(box => box.addEventListener('mouseover', colorDiv));

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}