function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(560,150);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
