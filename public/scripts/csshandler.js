const anchors = document.getElementsByTagName("a");
for (let i = 0; i < anchors.length; ++i)
    anchors[i].style.transition = "color .1s linear";

const points = document.getElementsByClassName("point");
for (let i = 0; i < points.length; ++i)
{
    const point = points[i];

    point.style.transition = "width .1s linear, height .1s linear";

    point.addEventListener("mouseover", () =>
    {
        point.children[0].style.transition = "opacity .2s linear";
        point.children[0].style.opacity = 1;
    });

    point.addEventListener("mouseout", () =>
    {
        point.children[0].style.transition = "opacity .1s linear";
        point.children[0].style.opacity = 0;
    });
};
