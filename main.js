


function preload() {
    img = loadImage("https://images.pexels.com/photos/5402717/pexels-photo-5402717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.position(200,200);
    video= createCapture(VIDEO);
    video.hide();
}
    function draw() {
    image(video,250,200,300,300);
        console.log("load picture");
        fill(92, 195, 247)
        rect(220,130,370,30)
        rect(185,160,30,370)
        rect(220,530,370,30)
        rect(590,160,30,370)
        fill(167, 99, 219);
        circle(200,150,60);
        circle(600,150,60);
        circle(600,550,60);
        circle(200,550,60);
    }

    function take_snapshot(){
        save('student_name.png');
    }