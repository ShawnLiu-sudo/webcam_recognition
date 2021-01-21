/// <reference path="./p5/p5.global-mode.d.ts" />

let video
let classifier
let isMdelReady = false
let isImageReady = false
let display = document.getElementById('display')


let img2

let label


// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
  isMdelReady = true;

  classifier.predict(gotResults)

  display.textContent='Requesting Webcam Permission...'
}

function gotResults(error, data) {
    if(error){
        console.error(error)
    } else {
        // console.log(data)

        label = data[0].label;
        display.textContent = label

        classifier.predict(gotResults)  
    }
}
function setup(){
    let canvas = createCanvas(800, 500);
    canvas.parent('#canvasContainer')
    background('#000')
    
    video = createCapture(VIDEO)
    video.hide() 

    
    classifier = ml5.imageClassifier('MobileNet', video, modelLoaded);

}

function draw(){
    imageMode(CENTER)
    background('#000')
    image(video, 400, 250)

    // textSize(32)
    // fill(255)
    // text(label, 10, 400)
    
}

  function highlight() {
    dropzone.style('background-color', '#fff')
  }
  
  function unhighlight() {
    dropzone.style('background-color', '#000')
  }

function submitted(){
    // createImg('./banner.png', 'basketball')
}
