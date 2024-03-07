function preload() {

}

function setup() {
    canvas = createCanvas(800,600);
    canvas.position(110,250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(220);
    image(video,240,156,300,300)
    // Use color() function 
    let c = color('green'); 
  
    // Use fill() function to fill color 
    fill(c); 
    
    // Draw a circle  
    circle(200, 100, 150);
    circle(200, 500, 150);
    circle(600, 100, 150);
    circle(600, 500, 150);
    // draw a rectange
    c = color('blue');
    fill(c)

    rect(240,55,310,100);
    rect(240,450,310,100);
    rect(140,150,100,300);
    rect(540,150,100,300);
    //draw top circle
    c = color('green'); 
    fill(c);
    circle(200, 100, 150);
    circle(200, 500, 150);
    circle(600, 100, 150);
    circle(600, 500, 150);
}

function take_snapshot() {
    save("0.png");
}