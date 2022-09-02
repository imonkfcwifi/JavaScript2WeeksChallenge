const animation = document.querySelector(".nah");

function handleAnimation() {
    if (animation.className === "active") {
        animation.className = "";
    }
    else {
        animation.className = "active";
    }
}

animation.addEventListener("click", handleAnimation);

