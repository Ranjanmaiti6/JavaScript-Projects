let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let turnX = true // player X and player O

//  let arr = [[],[],[]];   //2D array
//Wining pattens
const win = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const resetGame = ()=>{
    turnX = true;
    enabledBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    });
    document.querySelector("#r").innerText = ""
    res.style.background = "#574ae2";
}

boxes.forEach((b) => {
    b.addEventListener('click' ,()=>{
        if(turnX){
            b.innerText = 'X';
            turnX = false;
            b.disabled = true
            b.style.color = "green"
        }
        else{
            b.innerText = 'O';
            turnX = true;
            b.disabled = true
            b.style.color = "blue"
        }
        checkWin();
    })
})

let res = document.querySelector(".result");
const checkWin = () => {
    for(let pat of win){
        let posVal1 = boxes[pat[0]].innerText
        let posVal2 = boxes[pat[1]].innerText
        let posVal3 = boxes[pat[2]].innerText

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                document.querySelector("#r").innerText = `${posVal1} is the winner`
                res.style.background = "#09fe5b";
                disabledBoxes();
                return;
            }
        }
    }
}

reset.addEventListener("click",resetGame);