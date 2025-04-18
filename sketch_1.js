function setup() { //設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //畫布的背景顏色為778da9
    background("#778da9");
  
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布背景顏色為778da9
    background("#778da9");
    //畫圓的顏色為343a40
    fill("#343a40");
    //畫圓的邊框顏色("#ced4da")
    stroke("#ced4da")
    //圓的邊框
    strokeWeight(10);
    //在視窗的中間畫一個圓，圓的寬高為200
    //ellipse(width/2, height/2, 200, 200);
    //依照上面的圓顏色與邊框顏色，從視窗最左邊畫到最右邊，產生連續的圓
    for (let i = 0; i < width; i+=50) {
      ellipse(i, height/2, 200, 200);
    }
  
    //
  }
  