const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.arc(370, 150, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(340,180,8, Math.PI, 2*Math.PI);
ctx.arc(380,180,8, Math.PI, 2*Math.PI);
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(350, 220, 60, 200);

ctx.beginPath();
ctx.fillStyle="black";
ctx.fillRect(310, 220, 15, 100);
ctx.fillRect(430, 220, 15, 100);

ctx.beginPath();
ctx.arc(360,430,18, 2*Math.PI, 3*Math.PI);
ctx.arc(400,430,18, 2*Math.PI, 3*Math.PI);
ctx.fillStyle="black";
ctx.fill();