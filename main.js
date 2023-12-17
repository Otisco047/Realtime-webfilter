nose_x = "";
nose_y = "";

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/R0CQVJ78/pngkey-com-nose-png-111427.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    poseNET = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300)
    // fill("red");
    // stroke("black");
    // circle(nose_x, nose_y, 20);
    image(clown_nose,nose_x-15,nose_y-15,30,30);
}

function take_pic() {
    save("my_filter_image.png")
}

function modelLoaded() {
    console.log("poseNET is initialized");
    poseNET.on("pose", getResults);
}

function getResults(results) {
    if (results.length > 0) {
        //console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x, nose_y);
    }
}