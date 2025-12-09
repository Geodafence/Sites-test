setInterval(() => {
    var watercanvas = document.getElementById("Water").getElementsByClassName("watercanvas")[0];
    const ctx = watercanvas.getContext("2d");
    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight)
    ctx.stroke();
    ctx.strokeStyle = "rgba(0, 4, 248, 1)";
    ctx.fillStyle = "rgba(0, 4, 248, 1)";
    var d = new Date();
    var t = d.getTime();
    var t2 = d.getTime()%window.innerWidth;
    console.log(ctx)
    //console.log(t2)
    for(let i = 0; i < window.innerWidth; i++) {
        ctx.beginPath();
        console.log(i-t2)
        ctx.rect(i, 0, 1, Math.sin(i+t)*(Math.abs(i-t2)<=20?10-Math.abs(i-t2):1)*50);
        ctx.stroke();
    }
}, 1);