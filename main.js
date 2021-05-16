const leftBars = document.getElementById("inner-left").children;
const rightBars = document.getElementById("inner-right").children;
const h1 = document.getElementById("name");
const p = document.getElementById("sub-text");
const links = document.getElementById("links");

const transitionTime = .5;
const initDelay = 1;

const barCount = leftBars.length;
const boxShadow = "0 0 5px rgba(0, 0, 0, .5)";
const transitions = `transform ${transitionTime}s ease-in-out ${initDelay}s, box-shadow ${transitionTime}s ease-in-out ${initDelay}s`;

for (let i = 0; i < barCount; ++i)
{
    leftBars[i].style.transition = transitions;
    rightBars[i].style.transition = transitions;

    leftBars[i].style.transform = "scaleX(1)";
    rightBars[i].style.transform = "scaleX(1)";
}

// drop shadow
setTimeout(() =>
{
    for (let i = 0; i < barCount; ++i)
    {
        leftBars[i].style.boxShadow = boxShadow;
        rightBars[i].style.boxShadow = boxShadow;
    }

    h1.style.transition = `opacity ${transitionTime}s ease-in-out ${initDelay + transitionTime}s`;
    h1.style.opacity = "1";

    p.style.transition = `opacity ${transitionTime}s ease-in-out ${(initDelay + 2 * transitionTime)}s`;
    p.style.opacity = "1";

    links.style.transition = `opacity ${transitionTime}s ease-in-out ${initDelay + 3 * transitionTime}s`;
    links.style.opacity = "1";
}, 1000 * transitionTime);
