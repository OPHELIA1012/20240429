var captureGraphics
 function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(640,480); //設定顯示畫面大小
  captureGraphics = captureGraphics(640,480)
  captureGraphics.translate(640,0)
  captureGraphics.scale(-1,1)
  captureGraphics.hide()
}

function draw() {
  background(220);
  push()
    translate(width/2-320,height/2-240) //把原點移到(width/2-320,height/2-240)
    image(capture,0,0) //在(0,0)
    pop()
}