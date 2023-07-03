let outputHTML = document.getElementById("clock-html");
let outputCSS = document.getElementById("clock-css");
let outputJavascript = document.getElementById("clock-javascript");
let outputReactjs = document.getElementById("clock-reactjs");


function elapsedHTML(difference){

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference %  (1000 * 60)) / (1000));

    outputHTML.innerHTML += "Total time elapsed is: " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds!"
    outputCSS.innerHTML += "Total time elapsed is: " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds!"
}

let start = new Date("February 21, 2023 08:00:00");
let end = new Date();
let difference = end - start;
elapsedHTML(difference);


function elapsedJavascript(differenceJavascript){

    let days = Math.floor(differenceJavascript / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differenceJavascript %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differenceJavascript %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differenceJavascript %  (1000 * 60)) / (1000));

    outputJavascript.innerHTML += "Total time elapsed is: " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds!"
}

let startJavaScript = new Date("April 11, 2023 08:00:00");
let differenceJavascript = end - startJavaScript;

elapsedJavascript(differenceJavascript);


function elapsedReactjs(differenceReactjs){

    let days = Math.floor(differenceReactjs / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differenceReactjs %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differenceReactjs %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differenceReactjs %  (1000 * 60)) / (1000));

    outputReactjs.innerHTML += "Total time elapsed is: " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds!"
}

let startReactjs = new Date("May 21, 2023 08:00:00");
let differenceReactjs = end - startReactjs;

elapsedReactjs(differenceReactjs);