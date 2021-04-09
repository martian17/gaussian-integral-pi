var canvas = document.getElementById("canvas");
var width = 500;
var height = 200;
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");


var drawGraph = function(xx){
    ctx.beginPath();
    ctx.moveTo(0,height);
    for(var i = 0; i < width; i++){
        var x = (i-(width/2))/width*5;
        var y = Math.E**(-(x*x));
        ctx.lineTo(i,height-y*height);
    }
    ctx.lineTo(width,height);
    ctx.strokeStyle = "#f00";
    ctx.stroke();
    
    //now drawing the filler portion
    xx = xx*width/5+width/2;
    if(xx < 0){
        xx = 0;
    }else if(xx > width){
        xx = width;
    }
    /*
    ctx.beginPath();
    ctx.moveTo(0,height);
    for(var i = 0; i < xx; i++){
        var x = (i-(width/2))/width*5;
        var y = Math.E**(-(x*x));
        ctx.lineTo(i,height-y*height);
    }
    var x = (xx-(width/2))/width*5;
    var y = Math.E**(-(x*x));
    ctx.lineTo(i,height-y*height);
    ctx.lineTo(xx,height);
    ctx.closePath();
    ctx.fillStyle = "#f00";
    ctx.fill();
    */
    var half = Math.floor(width/2)
    ctx.beginPath();
    ctx.moveTo(width-xx,height);
    for(var i = Math.floor(width-xx); i < xx; i++){
        var x = (i-(width/2))/width*5;
        var y = Math.E**(-(x*x));
        ctx.lineTo(i,height-y*height);
    }
    ctx.lineTo(xx,height);
    ctx.closePath();
    ctx.fillStyle = "#f00";
    ctx.fill();
};



var dx = 0.001;
var x = dx/2;
var pisqrt = 0;

var start = 0;
var animate = function(t){
    if(start === 0)start = t;
    var dt = (t - start)/1000;//now things are in seconds, not in milliseconds
    start = t;
    ctx.clearRect(0,0,width,height);
    
    for(var i = 0; i < 10; i++){
        pisqrt += (Math.E**(-(x*x)))*dx;
        x += dx;
    }
    
    
    drawGraph(x);
    
    ctx.font = "30px Serif";
    ctx.fillStyle = "#000";
    ctx.fillText("π="+(pisqrt*2)**2,10,30);
    
    requestAnimationFrame(animate);
};
console.log(pisqrt**2);

requestAnimationFrame(animate);



