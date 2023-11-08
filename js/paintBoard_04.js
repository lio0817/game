const canvas = document.getElementById("canvas");
const lineWidth = document.getElementById("line-width");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const btnMode = document.getElementById("btnMode");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

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
    console.dir(event);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
}

function onMode(){

}

function onClickCanvas(){
    
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