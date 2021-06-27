function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WsW2H4DLi/model.json", modelloaded);

}
function draw() {
    background("white");
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
}
function gotresults(error, results) {
    if (error)
        console.error(error);
    else {
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}
function modelloaded() {
console.log("model has been loaded correctly");
}