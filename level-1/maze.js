const maze = document.getElementById("maze")
const start = document.getElementById("start")
const end = document.getElementById("end")

const loadingScreen = document.getElementById("loadingScreen");
const loadingFill = document.querySelector(".loading-fill");



let gameActive = false;
//just adding the id so that the game works


start.addEventListener("mouseenter", function(event){
    gameActive = true;
});

//this makes it so that the game starts as soon as you 
//enter the blue box thing whatever you wanna call it (maze is what i meant)

maze.addEventListener("mouseover", function(event){


    
     if(event.target === maze){
        gameOver();
    }

    
   
});


//adding this allows the script to make it so that
//the game is over as soon as you touch the black

function gameOver(){
    gameActive = false;

    window.alert("you touched the wall loser 📛")

}


//we added the gameover function so that whenevr you touch the wall
// the game is over and it gives an alert as we can see




end.addEventListener("mouseenter", function(){

    
    console.log("END TOUCHED");

  
    setTimeout(function(){
        window.location.href = "../level-2/level-2.html";
    }, 100);

    
});



    console.log("we still running ")
//added this so that there isnt to much comments and to make it easier to read code

window.onload = function () {

    

    const loadingScreen = document.getElementById("loadingScreen");
    const mainContent = document.getElementById("mainContent");
    const loadingFill = document.querySelector(".loading-fill");

    
    loadingFill.style.width = "100%";

   
    setTimeout(function () {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 5000);
};








