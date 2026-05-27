// let firstvalue="";
// let secondvalue="";
// let operator="";
// let result="";

// let display = document.getElementById("display");

// function DataClicked(a){
//     console.log(a);
//     if(operator.length<0){
//         firstvalue+=a
//     display.value=firstvalue;
//     }
//     else{
//         console.log("First value")
//         secondvalue+=a
//     display.value+= a;
//     }
//     //
// }

// function opt(a){
//     operator=a;
//     display.value+=operator;
// }

// function ResultData(){
//  if (operator=="+"){
//     result=Number(firstvalue)+Number(secondvalue);
//  }
//  else if(operator=="-"){
//     result=Number(firstvalue)-Number(secondvalue);
//  }
//  else if(operator=="×"){
//     result=Number(firstvalue)*Number(secondvalue);
//  }
//  else if(operator=="/"){
//     result=Number(firstvalue)/Number(secondvalue);
//  }
//  else {
//     result="Invalid operator";
// } 
//     console.log(result);
//     display.value=result;
//     firstvalue=result;
//     secondvalue="";
//     operator="";
// }

// function ClearData(){

//     firstvalue="";
//     secondvalue="";
//     operator="";
//     result="";
//     display.value="0";
// }

// function clearLast(){
//     if (secondvalue.length > 0) {
//         secondvalue = secondvalue.slice(0, -1);
//         display.value = firstvalue + operator + secondvalue;
//     } else if (operator.length > 0) {
//         operator = "";
//         display.value = firstvalue;
//     } else if (firstvalue.length > 0) {
//         firstvalue = firstvalue.slice(0, -1);
//         display.value = firstvalue;
//     }
// }


// Get display element
const display = document.getElementById("display");

let currentInput = "";

// Function for number and symbol clicks
function DataClicked(value) {

    // If "=" is pressed
    if (value === "=") {
        try {
            // Replace × with *
            currentInput = currentInput.replace(/×/g, "*");

            // Calculate result
            currentInput = eval(currentInput).toString();

            display.value = currentInput;
        } 
        catch (error) {
            display.value = "Error";
            currentInput = "";
        }

        return;
    }

    // Remove default 0
    if (display.value === "0" || display.value === "Error") {
        currentInput = value;
    } else {
        currentInput += value;
    }

    display.value = currentInput;
}

// Function for operators
function opt(operator) {

    // Prevent empty operator input
    if (currentInput === "") return;

    const lastChar = currentInput[currentInput.length - 1];

    // Prevent multiple operators together
    if (["+", "-", "/", "*", "×"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }

    currentInput += operator;

    display.value = currentInput;
}

// Clear all
document.querySelector(".clear").addEventListener("click", () => {
    currentInput = "";
    display.value = "0";
});

// Clear last character
function clearLast() {

    currentInput = currentInput.slice(0, -1);

    if (currentInput === "") {
        display.value = "0";
    } else {
        display.value = currentInput;
    }
}

// Decimal button support
document.querySelector("button:last-child").addEventListener("click", () => {
    DataClicked(".");
});

// Zero button support
document.querySelector(".zero").addEventListener("click", () => {
    DataClicked("0");
});