video= "";
status= "";
objects= [];
input="";
label= objects[i].label;
function preload(){
   
}
 
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("object_found").innerHTML = "Number of objects detected are: " +objects.length;
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
   mark if(input=label )

}
function gotResult(error, results){
if(error) {
    console.log(error);
}
console.log(results);
objects = results;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    input= document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}