//TODO: buttons for colormodes, style it, restart button, blacker color mode.


//Makes the grid.
function makeGrid(size){
    //First delete existing grid
    gridHolder.innerHTML = "";
    //makes one vertical line at first and adds x horisontal squares.
    //Then it adds that to the container and goes to next.
    for(let i = size; i>0;i--){
        const newVerticalGridSquare = document.createElement("div");
        newVerticalGridSquare.classList.add("gridSquareVertical");
        //makes and appends horisontal squares
        for(let i = size; i>0;i--){
            const newHorisontalGridSqure = document.createElement("div");
            newHorisontalGridSqure.classList.add("gridSquare");
            newVerticalGridSquare.appendChild(newHorisontalGridSqure);
        }
        //Appends it all to the exising div.
        gridHolder.appendChild(newVerticalGridSquare);
    }
    addHoverEvent();
}
//Changes the color of this - triggered with mouseover event
function changeColor() {
    if(colorMode === "grey") {
        this.style.backgroundColor = "grey";
    }
    if(colorMode === "rainbow") {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#"+randomColor;
    }
}

function getSize() {
    let newSize = prompt("What size should the new grid be? (1-100)");
    if(newSize > 0 && newSize < 101) {
        console.log("making grid!")
        makeGrid(newSize);
    } else {
        console.log(Number.isInteger(newSize));
        console.log(newSize);
    }
}

//adds hover event to change the color of the elements.
function addHoverEvent() {
    //Define the squares
    const gridSquare = document.querySelectorAll(".gridSquare");
    //Change their color with a function if mouse is over.
    gridSquare.forEach((grid) => grid.addEventListener("mouseover",changeColor));
}
//Define the div that holds all the other divs.
const gridHolder = document.querySelector(".gridHolder");
//Make default square
makeGrid(16);

let colorMode = "rainbow";


