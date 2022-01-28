/* Selecting all elements */

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const reset = document.querySelector("#reset");
const firstSpan = document.querySelector("#first");
const secondSpan = document.querySelector("#second");
const opt = document.querySelector("#select");
/* Defining variables that interact with page */

let p1Score = 0;
let p2Score = 0;
let win = 5;
let isGameOver = false;

/* Button function for Player One */

one.addEventListener("click",function(){
    if(!isGameOver){
        p1Score += 1
     if(p1Score === win){
        isGameOver = true;
        firstSpan.classList.add("winner");
        secondSpan.classList.add("loser");
    }
    firstSpan.textContent = p1Score;

}
})

/* Button function for Player Two */

two.addEventListener("click", function(){
   if(!isGameOver){
        p2Score += 1
     if(p2Score === win){
        isGameOver = true;  
        secondSpan.classList.add("winner");
        firstSpan.classList.add("loser");
    }
    secondSpan.textContent = p2Score;
} 
})

/* Change function for select drop-down */

opt.addEventListener("change",function(){
   win = parseInt(this.value);
})

/* Reset button function */

reset.addEventListener("click", function(){
    isGameOver = false
    firstSpan.textContent = 0;
    secondSpan.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    secondSpan.classList.remove("winner");
    firstSpan.classList.remove("winner");
    secondSpan.classList.remove("loser");
    firstSpan.classList.remove("loser");
})

