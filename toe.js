let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".messageContainer");
let turnO = true; 
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if (turnO){
        box.innerText = "X";
        turnO = false;
        } else{
        box.innerText = "O";
        turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


reset.addEventListener("click", () => {
    location.reload();
});

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    disableBtns();

}

const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = () => {
    for(let pattern of winCombos){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            }
        }
    }

};

