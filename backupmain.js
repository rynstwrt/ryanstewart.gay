const innerLeft = document.getElementById("inner-left");
const innerRight = document.getElementById("inner-right");

const speedFactor = 8;

function revealBars1()
{
    const bars = innerLeft.children;

    for (let i = 0; i < bars.length; ++i)
    {
        bars[i].style.transition = "transform .25s ease-in-out " + (i / speedFactor) + "s";
        bars[i].style.transform = "scaleX(1)";
    }
}
revealBars1();


function revealBars2()
{
    const bars = innerRight.children;

    for (let i = 0; i < bars.length; ++i)
    {
        bars[i].style.transition = "transform .25s ease-in-out " + (i / speedFactor) + "s";
        bars[i].style.transform = "scaleX(1)";
    }
}

const completeTime = 1000 * (innerLeft.children.length / speedFactor);

setTimeout(() =>
{
    revealBars2();
}, completeTime);

setTimeout(() =>
{
    const bars = innerRight.children;
    const bars2 = innerLeft.children;

    for (let i = 0; i < bars.length; ++i)
    {
        bars[i].style.transition = "box-shadow .25s ease-in-out";
        bars2[i].style.transition = "box-shadow .25s ease-in-out";
        bars[i].style.boxShadow = "0 0 5px rgba(0, 0, 0, .3)";
        bars2[i].style.boxShadow = "0 0 5px rgba(0, 0, 0, .3)";
    }

    setTimeout(() =>
    {
        const header = document.getElementsByTagName("h1")[0];
        header.style.transition = "opacity .5s ease-in-out .5s";
        header.style.opacity = "1";

        setTimeout(() =>
        {
            const paragraph = document.getElementsByTagName("p")[0];
            paragraph.style.transition = "opacity .5s ease-in-out .5s";
            paragraph.style.opacity = "1";
        }, 700);
    }, 1000 * .25);
}, completeTime * 2);




