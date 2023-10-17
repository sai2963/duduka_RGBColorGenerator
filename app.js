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
    
    let input1 = redslider.value;
    redvalue.textContent = input1;
   
    let input2 = greenslider.value;
    greenvalue.textContent = input2;
  
    let input3 = blueslider.value;
    bluevalue.textContent = input3;

    let rgb1="RGB ("+input1+","+input2+","+input3+")";
    let rgb2=`rgb(${input1},${input2},${input3})`
    rgb.textContent=rgb1;
    colorbox.style.backgroundColor=rgb2;

}
colorpicker();
redslider.addEventListener("input", colorpicker);


greenslider.addEventListener("input", colorpicker);


blueslider.addEventListener("input", colorpicker);

function copy(){
    let input1 = redslider.value;
    redvalue.textContent = input1;
   
    let input2 = greenslider.value;
    greenvalue.textContent = input2;
  
    let input3 = blueslider.value;
    bluevalue.textContent = input3;

    let rgb1="RGB ("+input1+","+input2+","+input3+")";
    let rgb2=`rgb(${input1},${input2},${input3})`
    navigator.clipboard.writeText(rgb2)
        .then(()=>{
            alert("RGB Color Copied"+rgb2);
        })
        .catch((error)=>{
            console.error("Failed to copy RGB Color:",error)
        })
    
}

button1.addEventListener('click',copy)