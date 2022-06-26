function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {

}

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  function take_snapshot(){    
    save('student_name.png');
  }

  