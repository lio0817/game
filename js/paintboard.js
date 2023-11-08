
const canvas = document.getElementById("canvas");
const lineWidth = document.getElementById("line-width");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const btnMode = document.getElementById("btnMode");
const btnInit = document.getElementById("btnInit");
const btnEraser = document.getElementById("btnEraser");
const inputFile = document.getElementById("file");
const inputText = document.getElementById("text");
const btnSave = document.getElementById("save");

let canvasBgColor = "";

const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

function onMouseMove(event){

    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event){
    isPainting = true;
}

function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();

}

function onChangeLineWidth(event){
    ctx.lineWidth = event.target.value;
}

function onClickColor(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    if (isFilling){
        canvasBgColor = colorValue;
    }
}

function onMode(){
    if (isFilling){
        isFilling = false;
        btnMode.innerText = "채우기";
    }else {    
        isFilling = true;
        btnMode.innerText = "그리기";
    }
}

function onClickCanvas(event){
    if (isFilling) {
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
    
}

function onClickInit(){
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onClickEraser(event){
    ctx.strokeStyle = canvasBgColor;
    isFilling = false;
    btnMode.innerText = "채우기"

}

function onChangeFile(event){
    console.log(event);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url ;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };

}

function onDoubleClick(event){
    const text = inputText.value;
    if (text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "60px 'consolas'";
        ctx.strokeText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function saveImage(){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onClickCanvas);
lineWidth.addEventListener("change", onChangeLineWidth);

colorOptions.forEach((color) =>
    color.addEventListener("click", onClickColor));

btnMode.addEventListener("click", onMode);

btnInit.addEventListener("click", onClickInit);

btnEraser.addEventListener("click", onClickEraser);

inputFile.addEventListener("change", onChangeFile);
canvas.addEventListener("dblclick", onDoubleClick);

btnSave.addEventListener("click", saveImage);