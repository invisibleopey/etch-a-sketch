const container = document.querySelector('#container');

// Creates 16 x 16 divs inside the Div Container
function createDivs () {
    for (let i = 1; i <= 256; i++) {
        container.innerHTML += '<div class="box">  </div>';
    }
}

// Call the function to create the divs
createDivs();