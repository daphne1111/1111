let x, y, c;
let capture;
let screenshots = [];

let showButton = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  frameRate(10);
  // 設置視頻解析度
  capture.size(640, 360);
  capture.hide();
}

function draw() {
  background(220);

  //image(capture, 0, 0, width, height);

  drawloading();

  // 這裡確保在x達到某個數值時顯示按鈕
  if (x >= 200) {
    showButton = true;
  }

  if (showButton) {
    drawButton("     ", windowWidth / 2+60, windowHeight / 2 + 100, 80, 50+sin(c), 20+sin(c));
  }
  }
  if (mouseIsPressed === true) {
    cursor("progress");
  } else {
    cursor("WAIT");
  }
}

function drawButton(label, x, y, w, h) {
  fill(250,200,0); // 按鈕背景色
  rect(x, y, w, h, 10); // 按鈕區域

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2); // 按鈕文字
}

// 滑鼠點擊儲存當前截圖
function takeScreenshot() {
  let pg = createGraphics(width, height);
  pg.image(capture, 0, 0, width, height);
  screenshots.push(pg);
  console.log("已儲存一張截圖，共 " + screenshots.length + " 張");
}

function mergeAndSaveScreenshots() {
  if (screenshots.length > 0) {
    // 設定縮小比例（例如 0.5 為減半解析度）
    let scaleFactor = 0.2;

    // 計算縮小後的寬度和高度
    let scaledWidth = width * scaleFactor;
    let scaledHeight = height * scaleFactor;

    // 建立合併後的畫布
    let finalImage = createGraphics(
      scaledWidth * screenshots.length,
      scaledHeight
    );

    // 將每個截圖按縮小比例繪製到畫布上
    for (let i = 0; i < screenshots.length; i++) {
      finalImage.image(
        screenshots[i],
        i * scaledWidth,
        0,
        scaledWidth,
        scaledHeight
      );
    }

    // 儲存縮小解析度的合併圖檔
    save(finalImage, "look_at_yourself.png");
    console.log("已合併並儲存所有截圖，解析度已降低");
  } else {
 let blankCanvas = createGraphics(1000, 1000);
    blankCanvas.background(255); // 設置背景為白色
    save(blankCanvas, "you_are_willing_to_wait_Thanks.png");
    console.log("沒有可合併的截圖，已儲存一張 1000x1000 的空白畫布");
  }
}

function drawloading() {
  m();
  x = frameCount * 2;
  console.log(x);
  y = sqrt(x) * 10;
  let r;
  r = random(200, 300);
  c = map(sin(frameCount * 0.01), -0.2, 1.2, 450, 300 + r);
  fill(225);
  rect(windowWidth / 2 - 200, windowHeight / 2, 600, 50);

  if (c < 590) {
    fill(0);
    rect(windowWidth / 2 - 200, windowHeight / 2, c - 100, 50);
    c = c + 10;
  } else {
    fill(0);
    rect(windowWidth / 2 - 150, windowHeight / 2, 590, 50);
  }
}

function m() {
  for (let i = -windowWidth; i < windowWidth; i += 50) {
    for (let j = -windowHeight; j < windowHeight; j += 50) {
      noStroke();
      fill(random(0, 10), random(0, 10), random(0, 10), random(60, 90));
      square(i + mouseY * 0.5, j + mouseX * 0.5, 49 + frameCount * 0.0001);//生成背景可隨滑鼠移動
      if (i > 3000) {
        i = 0;
        j = 100;
      }
    }
  }
}

function mousePressed() {
  let buttonX = width / 2;
  let buttonY = height / 2+100;
  let buttonWidth = 200;
  let buttonHeight = 50;

  // 檢測是否點擊按鈕
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    mergeAndSaveScreenshots();
    console.log(mouseX, mouseY);
  } else {
    takeScreenshot();
    // 如果不在按鈕範圍內，進行截圖
  }
}
