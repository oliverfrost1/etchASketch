function makeGrid(size){
    for(let i = size; i>0;i--){
        const newVerticalGridSquare = document.createElement("div");
        newVerticalGridSquare.classList.add("gridSquareVertical");
        for(let i = size; i>0;i--){
            const newHorisontalGridSqure = document.createElement("div");
            newHorisontalGridSqure.classList.add("gridSquare");
            newVerticalGridSquare.appendChild(newHorisontalGridSqure);
        }
        gridHolder.appendChild(newVerticalGridSquare);
    }
}

function changeColor() {
    this.style.backgroundColor = "grey";
}
//Define the div that holds all the other divs.
const gridHolder = document.querySelector(".gridHolder");
makeGrid(16);
const gridSquare = document.querySelectorAll(".gridSquare");
gridSquare.forEach((grid) => grid.addEventListener("mouseover",changeColor));
