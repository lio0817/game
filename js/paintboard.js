/**
*paintBoard.js
*최초작성일 : 2023.10.04
*최초작성자 : 노지민
*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 5;

ctx.fillStyle = "black"; 
ctx.fillRect(50, 200, 300, 200);


ctx.fillStyle = "darkblue";
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 100);
ctx.lineTo(350, 200);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "brown";
ctx.fillRect(175, 300, 50, 100);

ctx.fillStyle = "cyan";
ctx.fillRect(80, 250, 80, 50);
ctx.fillRect(240, 250, 80, 50); 