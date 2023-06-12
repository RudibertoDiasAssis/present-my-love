let container = document.querySelector("#container");
let heart = document.querySelector("#heart")

setTimeout(function() {
    container.style.visibility = "hidden";
    heart.style.display = "block"
  }, 60000);

document.querySelector("#heart").style.display = "none";

function refreshPage(){
    window.location.reload();
} 