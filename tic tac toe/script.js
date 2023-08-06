console.log("Welcome to Tic Tac Toe")
let trurn = "X"
let isgameover = false;
// function to change the turn
changeTurn=()=>{
    return trurn ==="X" ? "0" : "X"
}

//function to check for a win
const checkWin = () => {
    let boxtext=document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText!=="") ){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="90px"
        }
    
    
    })

}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() => {
    if(boxtext.innerText==='') {
        boxtext.innerText= trurn;
        trurn = changeTurn();
        checkWin();
        if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for" + trurn;
        }
    }
})
})
// add onclick listener to reset button
reset.addEventListener('click',(e)=>{
       let boxtexts = document.querySelectorAll('.boxtext');
       Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
       });
       trurn = "X"
       isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for" + trurn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
})
