
//a <p> with red text that says “Hey I’m red!”

console.log("working");

const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = 'red';
redText.textContent = "Hey I'm red!";

container.appendChild(redText);