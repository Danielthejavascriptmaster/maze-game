const end = document.getElementById("end");
const start = document.getElementById("start");
const maze = document.getElementById("maze");

const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");
const loadingFill = document.querySelector("#loading-fill");

let gameActive = false;



window.onload = function () {

    loadingFill.style.width = "100%";

   
    setTimeout(function () {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 5000);
};

start.addEventListener("mouseenter", function(event){
    gameActive = true;
});

maze.addEventListener("mouseover", function(event){
    if(event.target === maze){
        gameOver();
    };
});

end.addEventListener("mouseenter", function(event){
    gameActive = false;

    console.log("END TOUCHED");

  
    setTimeout(function(){
    window.location.href = "../level-3/level-3.html";
    }, 100);
});


function gameOver(){
    gameActive = false;

    window.alert("you touched the wall dummy")
}









   






