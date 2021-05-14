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
