let FirstNumber = "";
let SecondNumber = "";
let Operator = "";

function append(number) {
    if (Operator === "") {
        FirstNumber += number;
        document.getElementById('result').value = FirstNumber;
        playsound();
    } else {
        SecondNumber += number;
        document.getElementById('result').value = FirstNumber + Operator + SecondNumber;
        playsound();
    }
}

function Operation(char) {
    Operator = char;
    document.getElementById('result').value = FirstNumber + Operator;
    playsound1();
}

function calculate() {
    let result;
    switch (Operator) {
        case '+':
            result = parseInt(FirstNumber) + parseInt(SecondNumber);
            break;
        case '-':
            result = parseInt(FirstNumber) - parseInt(SecondNumber);
            break;
        case '*':
            result = parseInt(FirstNumber) * parseInt(SecondNumber);
            break;
        case '/':
            result = parseInt(FirstNumber) / parseInt(SecondNumber);
            break;
    }
    document.getElementById('result').value = result;
    playsound2();
}

function clearresult() {
    FirstNumber = "";
    SecondNumber = "";
    Operator = "";
    document.getElementById('result').value = "";
    playsound2();
}

var clicksound=new Audio("num.mp3");
function playsound(){
    clicksound.currentTime=0;
    clicksound.play();
}

var clicksound1=new Audio("optor.mp3");
function playsound1(){
    clicksound.currentTime=0;
    clicksound1.play();
}

var clicksound2=new Audio("ec.mp3");
function playsound2(){
    clicksound.currentTime=0;
    clicksound2.play();
}