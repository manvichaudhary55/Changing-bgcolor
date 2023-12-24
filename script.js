let num1;
let num2; 
let num3;
let intervalId;
function generateColor () {
    num1 =  Math.floor(Math.random()*255);  
    num2 =  Math.floor(Math.random()*255);  
    num3 =  Math.floor(Math.random()*255);
    return `rgba(${num1},${num2},${num3})`;     
}

const changeColor = function(){
    document.body.style.backgroundColor = generateColor();
}
const startChangingColor = function() {
    if(!intervalId){
    intervalId = setInterval(changeColor,1000)  
    }
    
}
const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#one").addEventListener('click',startChangingColor)
document.querySelector("#two").addEventListener('click',stopChangingColor)
