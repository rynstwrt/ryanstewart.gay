const circle = document.getElementById("circle");
const innerCircle = document.getElementById("circle-inner");

circle.addEventListener("animationend", (e) =>
{
    innerCircle.style.transition = "opacity .2s ease-in-out";
    innerCircle.style.opacity = 1;
});