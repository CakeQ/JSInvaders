function draw_grid(ctx, minor, major) {
minor = minor || 10;
major = major || minor * 5;
for(var x = 0; x < ctx.canvas.width; x += minor) {
ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, ctx.canvas.height);
ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
ctx.stroke();
if(x % major == 0 ) {ctx.fillText(x, x, 10);}
}
for(var y = 0; y < ctx.canvas.height; y += minor) {
ctx.beginPath();
ctx.moveTo(0, y);
ctx.lineTo(ctx.canvas.width, y);
ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
ctx.stroke();
if(y % major == 0 ) {ctx.fillText(y, 0, y + 10);}
}
}

function draw_canvas(c) {
c.beginPath();
c.rect(0,740,900,5);
c.fillStyle = "#00FF00";
c.closePath();
c.fill();
}

function draw_defender(c, x, y){
  c.beginPath();
  c.rect(x,y+20,80,20);
  c.rect(x+5,y+15,70,5);
  c.rect(x+34,y+5,12,15);
  c.rect(x+37.5,y,5,10);
  c.fillStyle = "#00FF00";
  c.fill();
}

function draw_Bullet(c, x, y, color){
  c.beginPath();
  c.rect(x,y,4,30);
  c.fillStyle = color;
  c.fill();
}

function draw_Invader11(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+20,y,10,5);
  c.rect(x+15,y+5,20,5);
  c.rect(x+10,y+10,30,5);
  c.rect(x+5,y+15,10,5);
  c.rect(x+20,y+15,10,5);
  c.rect(x+35,y+15,10,5);
  c.rect(x+5,y+20,40,5);

  c.rect(x+10,y+25,5,5);
  c.rect(x+20,y+25,10,5);
  c.rect(x+35,y+25,5,5);
  c.rect(x+5,y+30,5,5);
  c.rect(x+40,y+30,5,5);
  c.rect(x+10,y+35,5,5);
  c.rect(x+35,y+35,5,5);
  c.fill();
  }
function draw_Invader12(c, x, y){
    c.beginPath();
    c.fillStyle = "#FFFFFF";
    c.rect(x+20,y,10,5);
    c.rect(x+15,y+5,20,5);
    c.rect(x+10,y+10,30,5);
    c.rect(x+5,y+15,10,5);
    c.rect(x+20,y+15,10,5);
    c.rect(x+35,y+15,10,5);
    c.rect(x+5,y+20,40,5);

    c.rect(x+15,y+25,5,5);
    c.rect(x+20,y+30,10,5);
    c.rect(x+30,y+25,5,5);
    c.rect(x+10,y+30,5,5);
    c.rect(x+35,y+30,5,5);
    c.rect(x+15,y+35,5,5);
    c.rect(x+30,y+35,5,5);
    c.rect(x+5,y+35,5,5);
    c.rect(x+40,y+35,5,5);
    c.fill();
}

function draw_Invader21(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+10,y,5,5);
  c.rect(x+40,y,5,5);
  c.rect(x+15,y+5,5,5);
  c.rect(x+35,y+5,5,5);
  c.rect(x+10,y+10,35,5);
  c.rect(x+5,y+15,10,5);
  c.rect(x+20,y+15,15,5);
  c.rect(x+40,y+15,10,5);
  c.rect(x+5,y+20,45,5);

  c.rect(x+0,y+20,5,15);
  c.rect(x+50,y+20,5,15);
  c.rect(x+10,y+25,35,5);
  c.rect(x+10,y+30,5,5);
  c.rect(x+40,y+30,5,5);
  c.rect(x+15,y+35,5,5);
  c.rect(x+35,y+35,5,5);
  c.fill();
}

function draw_Invader22(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+10,y,5,5);
  c.rect(x+40,y,5,5);
  c.rect(x+15,y+5,5,5);
  c.rect(x+35,y+5,5,5);
  c.rect(x+10,y+10,35,5);
  c.rect(x+5,y+15,10,5);
  c.rect(x+20,y+15,15,5);
  c.rect(x+40,y+15,10,5);
  c.rect(x+5,y+20,45,5);

  c.rect(x+0,y+5,5,20);
  c.rect(x+50,y+5,5,20);
  c.rect(x+5,y+25,45,5);
  c.rect(x+10,y+30,5,5);
  c.rect(x+40,y+30,5,5);
  c.rect(x+5,y+35,5,5);
  c.rect(x+45,y+35,5,5);
  c.fill();
}

function draw_Invader31(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+20,y,20,5);
  c.rect(x+5,y+5,50,5);
  c.rect(x,y+10,60,5);
  c.rect(x,y+15,15,5);
  c.rect(x+25,y+15,10,5);
  c.rect(x+45,y+15,15,5);
  c.rect(x,y+20,60,5);

  c.rect(x+10,y+25,15,5);
  c.rect(x+35,y+25,15,5);
  c.rect(x+5,y+30,10,5);
  c.rect(x+45,y+30,10,5);
  c.rect(x+25,y+30,10,5);
  c.rect(x+10,y+35,10,5);
  c.rect(x+40,y+35,10,5);
  c.fill();
}

function draw_Invader32(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+20,y,20,5);
  c.rect(x+5,y+5,50,5);
  c.rect(x,y+10,60,5);
  c.rect(x,y+15,15,5);
  c.rect(x+25,y+15,10,5);
  c.rect(x+45,y+15,15,5);
  c.rect(x,y+20,60,5);

  c.rect(x+15,y+25,10,5);
  c.rect(x+35,y+25,10,5);
  c.rect(x+10,y+30,10,5);
  c.rect(x+40,y+30,10,5);
  c.rect(x+25,y+30,10,5);
  c.rect(x+0,y+35,10,5);
  c.rect(x+50,y+35,10,5);
  c.fill();
}

function draw_shield3(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,30,30);
  c.fill();
}

function draw_shield2(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y+5,10,5);
  c.rect(x+20,y+5,10,5);
  c.rect(x,y+10,30,20);
  c.fill();
}

function draw_shield1(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y+5,5,5);
  c.rect(x+25,y+5,5,5);
  c.rect(x,y+10,10,5);
  c.rect(x+20,y+10,10,5);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldD3(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,30,30);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_shieldD2(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y+20,10,5);
  c.rect(x+20,y+20,10,5);
  c.rect(x,y,30,20);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_shieldD1(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y+20,5,5);
  c.rect(x+25,y+20,5,5);
  c.rect(x,y+15,10,5);
  c.rect(x+20,y+15,10,5);
  c.rect(x,y,30,15);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_shieldL3(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x+15,y,15,3);
  c.rect(x+12,y+3,18,3);
  c.rect(x+9,y+6,21,3);
  c.rect(x+6,y+9,24,3);
  c.rect(x+3,y+12,27,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldL2(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x+17,y,13,3);
  c.rect(x+16,y+3,14,3);
  c.rect(x+15,y+6,15,3);
  c.rect(x+14,y+9,16,3);
  c.rect(x+3,y+12,3,3)
  c.rect(x+11,y+12,19,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldL1(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x+19,y+6,11,3);
  c.rect(x+16,y+9,14,3);
  c.rect(x+3,y+12,3,3)
  c.rect(x+11,y+12,19,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldR3(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,15,3);
  c.rect(x,y+3,18,3);
  c.rect(x,y+6,21,3);
  c.rect(x,y+9,24,3);
  c.rect(x,y+12,27,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldR2(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,13,3);
  c.rect(x,y+3,14,3);
  c.rect(x,y+6,15,3);
  c.rect(x,y+9,16,3);
  c.rect(x,y+12,3,3)
  c.rect(x,y+12,19,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldR1(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y+6,11,3);
  c.rect(x,y+9,14,3);
  c.rect(x,y+12,3,3)
  c.rect(x,y+12,19,3);
  c.rect(x,y+15,30,15);
  c.fill();
}

function draw_shieldU3(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,30,10);
  c.rect(x,y+10,5,5);
  c.rect(x+25,y+10,5,5);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_shieldU2(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,30,8);
  c.rect(x,y+8,5,5);
  c.rect(x+28,y+8,3,5);
  c.rect(x+25,y+8,5,3);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_shieldU1(c, x, y, color){
  c.beginPath();
  c.fillStyle = "#00FF00";
  c.rect(x,y,20,4);
  c.rect(x,y+4,14,4);
  c.rect(x+25,y,5,5);

  c.rect(x,y-5,10,5);
  c.rect(x+20,y-5,10,5);
  c.rect(x,y-10,5,5);
  c.rect(x+25,y-10,5,5);
  c.fill();
}

function draw_explosion1(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+15,y+5,5,5);
  c.rect(x+40,y+15,5,5);
  c.rect(x+35,y+5,5,5);
  c.rect(x+25,y+15,5,5);
  c.rect(x+15,y+20,5,5);
  c.rect(x+30,y+30,5,5);
  c.fill();
}

function draw_explosion2(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+15,y+20,5,5);
  c.rect(x+40,y+5,5,5);
  c.rect(x+35,y+30,5,5);
  c.rect(x+25,y+15,5,5);
  c.rect(x+15,y+5,5,5);
  c.rect(x+30,y+15,5,5);
  c.fill();
}

function draw_explosion3(c, x, y){
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.rect(x+40,y+5,5,5);
  c.rect(x+15,y+15,5,5);
  c.rect(x+30,y+5,5,5);
  c.rect(x+15,y+15,5,5);
  c.rect(x+35,y+20,5,5);
  c.rect(x+25,y+30,5,5);
  c.fill();
}
