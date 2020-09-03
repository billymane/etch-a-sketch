const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");


function mouseover() {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.toggle("hover");
        })
    })
}

// function rmGridItem() {
//     gridItem.forEach((item) => {
//         item.classList.remove("hover");
//     })
// }

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(8, 8);
mouseover();

resetBtn.addEventListener("click", function() {
    let squares = parseInt(prompt("How many squares per side?"))
    console.log(squares);
    container.innerHTML = ""
    makeRows(squares, squares);
    mouseover();
})

