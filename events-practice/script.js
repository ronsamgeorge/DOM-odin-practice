//method of event is _on_event functions in the JS file, method #2

const funcBtn2 = document.querySelector('#btn2');
funcBtn2.onclick = () => alert("Hello from btn2");


//method of using event listeners

const  funcBtn3 = document.querySelector("#btn3");

funcBtn3.addEventListener('click', function(e){
    console.log(e.target);
    e.target.style.backgroundColor = 'blue';
} );


//targetting all three of the buttons together

const funcBtnAll = document.querySelectorAll('button');

funcBtnAll.forEach((button) => {
    button.addEventListener('click', () =>{
        alert(button.id);
    });   
});