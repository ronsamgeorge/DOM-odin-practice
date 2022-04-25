


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


/* a <div> with a black border and pink background color with the following elements inside of it:
a.  another <h1> that says “I’m in a div”
b.  a <p> that says “ME TOO!” */

const newContainer = document.createElement('div');
newContainer.style.cssText = 'background-color : pink, border: 2px solid black';

const h1Div = document.createElement('h1');
h1Div.textContent="I'm in a div"

const textInDiv = document.createElement('p');
textInDiv.textContent = 'ME TOO!';

newContainer.appendChild(h1Div);
newContainer.appendChild(textInDiv);

console.log(newContainer);
container.appendChild(newContainer);