let image = new Image()
image.src = './boat asset.png';
setInterval(() => {
    let watercanvas = document.getElementById("Water").getElementsByClassName("watercanvas")[0];
    const ctx = watercanvas.getContext("2d");
    const imglayer = watercanvas.getContext("2d")
    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight)
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 4, 248, 1)";
    ctx.fillStyle = "rgba(0, 4, 248, 1)";
    let d = new Date();
    let t = d.getTime();
    let t2 = d.getTime()%window.innerWidth;

    //console.log(ctx)
    //console.log(t2)

    let i = Math.round(window.innerWidth/2)
    let waveHeightPositive = ((Math.sin((i+t)/300)+1.5)*(90/*+(Math.abs(i-t2)<=200?(getwaveinc(Math.abs(200-Math.abs(i-t2)))):0)*/))+80
    let y2 = ((Math.sin((i+t+1)/300)+1.5)*(90/*+(Math.abs(i-t2)<=200?(getwaveinc(Math.abs(200-Math.abs(i-t2)))):0)*/))+80
    let direction = 360-angle(i,waveHeightPositive,i+1,y2)
    drawRotated(imglayer, image, i, window.innerHeight-waveHeightPositive-50, direction);
    //ctx.rotate();

    for(let i = 0; i < window.innerWidth; i++) {
        let waveHeight = ((Math.sin((i+t)/300)+1.5)*(-90/*-(Math.abs(i-t2)<=200?(getwaveinc(Math.abs(200-Math.abs(i-t2)))):0)*/))-80
        // Commented out code is a idea for a possible future wave thingy, currently too difficult to impliment.
        ctx.fillRect(i, window.innerHeight, 10, waveHeight);
    }


}, 20);
function drawRotated(context, image, imageX, imageY, degrees) {
    context.save();
  	context.translate(imageX, imageY);
    context.rotate(0.017453292519943295 * degrees);  // 0.017453292519943295 == Math.PI / 180
    context.drawImage(image, -0.5 * image.width, -0.5 * image.width);
    context.restore();
}
function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}
function getwaveinc(num) {
    console.log(Math.abs(200*(num/200)))
    return Math.abs(80*(num/200))
}