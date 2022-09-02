const widthControl = document.body;

const violet = "violet";
const yellow = "yellow";
const blue = "blue";

function handleControlAnimation() {
    const inner = window.innerWidth;

    if (inner > 1400) {
        widthControl.classList.add(violet);
        widthControl.classList.remove(yellow);

    }

    else if (inner <= 1400 && inner > 500) {
        widthControl.classList.add(yellow);
        widthControl.classList.remove(violet, blue);
    }

    else {
        widthControl.classList.add(blue);
        widthControl.classList.remove(yellow);
    }
}

window.addEventListener("resize", handleControlAnimation);

