function setup() { //設定函數，設定初始值的地方
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB);
}

function draw() { //畫圖函數，畫圖的地方
  //畫布背景顏色為HSB(210, 30%, 66%)
  background(210, 30, 66);

  // 根據滑鼠的 X 座標計算色相，範圍從 0 到 360
  let hue = map(mouseX, 0, width, 0, 360);
  // 根據滑鼠的 Y 座標計算亮度，範圍從 0 到 100
  let brightness = map(mouseY, 0, height, 0, 100);

  // 設定圓的顏色為HSB
  fill(hue, 100, brightness);
  // 設定圓的邊框顏色為HSB(210, 10%, 85%)
  stroke(210, 10, 85);
  // 設定圓的邊框寬度
  strokeWeight(10);
  // 在滑鼠位置畫一個圓，圓的直徑為100
  ellipse(mouseX, mouseY, 100, 100);
}

//當視窗改變的大小時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

