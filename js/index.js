function draw() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    const img = document.getElementById("dogPaw");
    ctx.drawImage(img, 20, 0, 120, 120);
  } 
  draw();