const box = document.querySelectorAll(".column");
const container = document.querySelector(".container");

box.forEach((item) => item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "pink";
    }
))
