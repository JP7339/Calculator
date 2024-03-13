
const display = document.getElementById('screen');


function appendToDisplay(input){
    console.log(input);
    display.value += input;
    console.log(display);
}
s
function subDisplay(){
    let screen = display.value;
    screen = screen.substring(0,screen.length-1);
    display.value = screen;
}

function clearDisplay(){
    display.value = null;
}

function calculate(){
    display.value = eval(display.value);
    console.log(display.value);
}