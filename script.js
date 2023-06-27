const htmlSlider = document.getElementById("html-slider");
const cssSlider = document.getElementById("css-slider");
const jsSlider = document.getElementById("js-slider");
const reactSlider = document.getElementById("react-slider");

const htmlSelector = document.getElementById("htmlSelector");
const cssSelector = document.getElementById("cssSelector");
const jsSelector = document.getElementById("jsSelector");
const reactSelector = document.getElementById("reactSelector");


const htmlValue = document.getElementById("htmlValue");
const cssValue = document.getElementById("cssValue");
const jsValue = document.getElementById("jsValue");
const reactValue = document.getElementById("reactValue");


const htmlBar = document.getElementById("htmlBar");
const cssBar = document.getElementById("cssBar");
const jsBar = document.getElementById("jsBar");
const reactBar = document.getElementById("reactBar");



// function slider() {
//     valPercent = (mySlider.value / mySlider.max) * 100;
//     mySlider.style.background = "linear-gradient(to right, #3264fe ${valPercent}%. #d5d5d5 ${valPercent}%";
//     selector.textContent = mySlider.value;
// }

comments = [
    "Still figuring it out!",
    "Quite decent !",
    "Solid foundation :)"
];




htmlSlider.oninput = function hSlider(){
    htmlValue.innerHTML = htmlSlider.value
    htmlSelector.style.left = this.value + "%";
    htmlBar.style.width = this.value + "%";
    if(this.value >= 70) {
        document.getElementById("html-comment").innerHTML = comments[2];
    } else if(this.value <= 40) {
        document.getElementById("html-comment").innerHTML = comments[0];
    } else {
        document.getElementById("html-comment").innerHTML = comments[1];
    }
}

cssSlider.oninput = function cSlider(){
    cssValue.innerHTML = cssSlider.value
    cssSelector.style.left = this.value + "%";
    cssBar.style.width = this.value + "%";
    if(this.value >= 70) {
        document.getElementById("css-comment").innerHTML = comments[2];
    } else if(this.value <= 40) {
        document.getElementById("css-comment").innerHTML = comments[0];
    } else {
        document.getElementById("css-comment").innerHTML = comments[1];
    }
}

jsSlider.oninput = function jSlider(){
    jsValue.innerHTML = jsSlider.value
    jsSelector.style.left = this.value + "%";
    jsBar.style.width = this.value + "%";
    if(this.value >= 70) {
        document.getElementById("js-comment").innerHTML = comments[2];
    } else if(this.value <= 40) {
        document.getElementById("js-comment").innerHTML = comments[0];
    } else {
        document.getElementById("js-comment").innerHTML = comments[1];
    }
}

reactSlider.oninput = function rSlider(){
    reactValue.innerHTML = reactSlider.value
    reactSelector.style.left = this.value + "%";
    reactBar.style.width = this.value + "%";
    if(this.value >= 70) {
        document.getElementById("react-comment").innerHTML = comments[2];
    } else if(this.value <= 40) {
        document.getElementById("react-comment").innerHTML = comments[0];
    } else {
        document.getElementById("react-comment").innerHTML = comments[1];
    }
}