function setup() { //設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //設定顏色模式為HSB
    colorMode(HSB);
    //畫布的背景顏色為HSB(210, 30%, 66%)
    background(210, 30, 66);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布背景顏色為HSB(210, 30%, 66%)
    background(210, 30, 66);
  
    // 根據滑鼠的 X 座標計算大小，範圍從 100 到 500
    let size = map(mouseX, 0, width, 100, 500);
    let spacing = size + 20; // 設定間距，確保圖形不會重疊
  
    //==============================================
    //畫一整排的方框與圓
    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        //畫方框
        //畫方框的顏色為HSB(0, 0%, 54%)
        fill(0, 0, 54);
        //畫方框的邊框顏色HSB(210, 10%, 85%)
        stroke(210, 10, 85);
        //方框的邊框
        strokeWeight(10);
        //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為動態大小
        rectMode(CENTER); //設定方框的中心點
        rect(x, y, size, size); //畫方框
  
        //畫圓
        //圓的顏色為HSB(150, 20%, 56%)
        fill(150, 20, 56);
        //圓的邊框顏色HSB(210, 10%, 85%)
        stroke(210, 10, 85);
        //在視窗的中間畫一個圓，圓的寬高為動態大小
        ellipse(x, y, size, size);
      }
    }
  }
  
    //當視窗改變的大小時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  
  