const box = document.querySelectorAll(".column");
const inputContainer = document.querySelector(".gridInput");
const button = document.querySelector(".grid");
const website = document.querySelector("body")
const buttonCollection = document.querySelector(".button");

document.querySelector(".gridInput label").remove();
document.querySelector(".gridInput input").remove();

box.forEach((item) => item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#69432D";
    }
))

document.querySelector(".erase").addEventListener("click", () => {
    box.forEach((item) => item.style.backgroundColor = "white");
})

button.addEventListener("click", (e) => {
    if (e.target.innerText == "Change Grid") {
        document.querySelector(".container").remove();
        inputContainer.innerHTML = '<label for="gridSize" type="number" min="16" max="100"><b>Input:</b> <i>n</i> (returns an n×n grid)</label>'
        inputContainer.innerHTML += '<input class="gridSize" type="number" max="100" min="16">'
        button.textContent = "Submit";
        document.querySelector(".erase").remove();
    }
    else if (e.target.innerText == "Submit") {
        const input = document.querySelector(".gridInput input")
        if (input.value >= 16 && input.value <= 100) {
            submission();
        }
        else {
            const label = inputContainer.querySelector("label");
            label.innerHTML = "<b>Invalid</b> <i>(Should be in-between 16 and 100)</i><br> <b>Input:</b> <i>n</i> (returns an n×n grid)"

        }
    }
    else if (e.target.innerText == "Erase") {
        box.forEach((item) => item.style.backgroundColor = "white");
    }
})

function gridCreator() {
    const newContainer = document.createElement("div");
    const input = document.querySelector(".gridInput input")
    newContainer.className = "container";

    const newRow = document.createElement("div");
    newRow.className = "row";
    
    const newColumn = document.createElement("div");
    newColumn.className = "column";

    console.log(input.value);

    website.appendChild(newContainer);

    //create 1st row element
    newContainer.appendChild(newRow);
    //create columns
    for (let i = 0; i < input.value; i++) {
        newRow.appendChild(newColumn);
        newRow.innerHTML += "";
    }

    //attach remaining rows
    for (let j = 1; j < input.value; j++) {
        newContainer.innerHTML += "";
        newContainer.appendChild(newRow);
    }

}

function submission() {

        gridCreator();
        const box = document.querySelectorAll(".column");
        box.forEach((item) => item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "#69432D";
            }
        ))
        document.querySelector(".gridInput label").remove();
        document.querySelector(".gridInput input").remove();
        button.textContent = "Change Grid";

        const newEraser = document.createElement("button");
        newEraser.className = "erase";
        newEraser.textContent = "Erase";
        buttonCollection.insertBefore(newEraser, button);

        document.querySelector(".erase").addEventListener("click", () => {
            box.forEach((item) => item.style.backgroundColor = "white");
        })

}





