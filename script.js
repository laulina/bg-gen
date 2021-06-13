let rgbHeader = document.querySelector("h3");
let colorInputStart = document.querySelector(".colorInputStart");
let colorInputEnd = document.querySelector(".colorInputEnd");
let body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to left, " + colorInputStart.value + ", " + colorInputEnd.value + ")" ;

    rgbHeader.textContent = body.style.background;
};

colorInputStart.addEventListener("input", setGradient);


colorInputEnd.addEventListener("input", setGradient);


