// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const detector = document.querySelector("h2");
const superEventHandler = {
    rightclickEvent: function () {
        detector.style.color = colors[0];
        detector.innerHTML = "right clicked";
    },
    mouseOnEvent: function () {
        detector.style.color = colors[1];
        detector.innerHTML = "we need tom";
    },
    mouseOffEvent: function () {
        detector.style.color = colors[2];
        detector.innerHTML = "my cheese!";
    },
    resizeEvent: function () {
        detector.style.color = colors[3];
        detector.innerHTML = "my size!";
    }
};

detector.addEventListener("contextmenu", superEventHandler.rightclickEvent);
detector.addEventListener("mouseover", superEventHandler.mouseOnEvent);
detector.addEventListener("mouseleave", superEventHandler.mouseOffEvent);
window.addEventListener("resize", superEventHandler.resizeEvent);
