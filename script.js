


console.log("working");

const container = document.querySelector('#container');

//a <p> with red text that says “Hey I’m red!”

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!";

container.appendChild(redText);


// #2 add an <h3> with blue text that says “I’m a blue h3!”

const h3Blue = document.createElement('h3');
h3Blue.style.color = 'blue';
h3Blue.textContent = "I'm a blue h3!"

container.appendChild(h3Blue);
