let rgb = document.getElementById("RGB");
let colorbox = document.getElementById("color-box");
let slider = document.getElementById("Slider");
let redslider = document.getElementById("redslider");
let greenslider = document.getElementById("greenslider");
let blueslider = document.getElementById("blueslider");
let redvalue = document.getElementById("red-value");
let greenvalue = document.getElementById("green-value");
let bluevalue = document.getElementById("blue-value");
let button1 = document.getElementById("btn1");

rgb.textContent = "rgb(121,25,36)";

function colorpicker() {
    greenvalue.textContent='';
    bluevalue.textContent='';

    let input1 = redslider.value;
    redvalue.textContent = input1;
   
    let input2 = greenslider.value;
    greenvalue.textContent = input2;
  
    let input3 = blueslider.value;
    bluevalue.textContent = input3;
}
slider.addEventListener("input", colorpicker);
