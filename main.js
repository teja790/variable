var score=0;
function decrease(){
    
    score=score-10;
    document.getElementById("scorelabel").textContent=score;
}
function increase(){
    score=score+30;
    document.getElementById("scorelabel").textContent=score;
}