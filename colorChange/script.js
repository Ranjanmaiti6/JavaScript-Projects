const bodyCol = document.querySelector('body');
const text = document.querySelector('h1');

const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const yellowBtn = document.getElementById("yello");
const pinkBtn = document.getElementById("pink");
const whiteBtn = document.getElementById("white");

redBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'red';
    text.textContent = "Color is Red Now";
    text.style.color = 'red';
})
greenBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'green';
    text.textContent = "Color is Green Now";
    text.style.color = 'green';
})
blueBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'blue';
    text.textContent = "Color is Blue Now";
    text.style.color = 'blue';
})
yellowBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'yellow';
    text.textContent = "Color is Yellow Now";
    text.style.color = 'yellow';
})
pinkBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'pink';
    text.textContent = "Color is Pink Now";
    text.style.color = 'pink';
})
whiteBtn.addEventListener('click' , ()=>{
    bodyCol.style.backgroundColor = 'white';
    text.textContent = "Color is White Now";
    text.style.color = 'white';
})