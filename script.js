

const selectLevelBtn = document.getElementById("selectLevelBtn");
const sidebar = document.getElementById("levelSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const creditsBtn = document.getElementById("creditsBtn")


selectLevelBtn.addEventListener("click", function() {
    sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", function() {
    sidebar.classList.remove("active");
});




creditsBtn.addEventListener("click", function(){
    window.alert("the Goat which is none other than Daniel")
});


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


