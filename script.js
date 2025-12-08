setInterval(() => {
    
    var watercanvas = document.getElementById("Water").getElementsByClassName("myCanvas")[0];
    const ctx = watercanvas.getContext("2d");
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight)
    ctx.fillStyle = "blue";
    var d = new Date();
    var t = d.getTime();
    for(let i = 0; i < window.innerWidth; i++) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, Math.sin(i+t)*5);
        ctx.stroke();
    }
}, 10);