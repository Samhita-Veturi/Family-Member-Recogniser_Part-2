function preload(){}
function setup(){
    Canvas = createCanvas(500,400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(500, 400);
    Video.hide();
}
function draw(){
    image(Video, 0, 0, 500, 400);
}