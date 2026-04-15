const end = document.getElementById("end");
const start = document.getElementById("start");
const maze = document.getElementById("maze");

const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");
const loadingFill = document.querySelector("#loading-fill");
const jumpscare = document.getElementById("jumpscare");
const jumpscareAudio = jumpscare.querySelector("audio");


let gameActive = false;
let failCount = 0;


loadingScreen.style.display = "none"


//!starta

start.addEventListener("mouseenter", function(event){
    gameActive = true;
});




//!maze
maze.addEventListener("mouseover", function(event){
    if(event.target === maze){
        gameOver();
    };
});



//!end
end.addEventListener("mouseenter", function(event){
    gameActive = false;

    console.log("END TOUCHED");

  
    setTimeout(function(){
    window.location.href = "../winning-page/win.html";

    }, 100);

})

//!gameover function
function gameOver(){
    gameActive = false;

    failCount++;
    console.log(failCount);

    
     if(failCount >= 2){
            triggerJumpscare();
            return; // ❗ stops alert from running
        }


        window.alert("you touched the wall dummy");

    };


function triggerJumpscare(){

    gameActive = false;

    setTimeout(() => {
        jumpscare.style.display = "block";
        document.body.style.background = "black";
    }, 1500); // adjust delay here

    setTimeout(() => {
        jumpscareAudio.currentTime = 0;
        jumpscareAudio.play();
    }, 500);
}


