const numberClick = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".rbtn");
const equalBtn = document.querySelector(".equal-btn");
const special = document.querySelectorAll(".special-btn")

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

numberClick.forEach(number => {
    number.addEventListener("click", () => {
        if (!operator) {
            result = "";
            firstNumber += number.innerHTML;
            document.getElementsByTagName("input")[0].value = firstNumber;
        } else {
            secondNumber += number.innerHTML;
            document.getElementsByTagName("input")[0].value = secondNumber;
        }
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        operator = operatorBtn.innerHTML;
        if (result) {
            firstNumber = result;
        }
        document.querySelector(".old-result").innerHTML = firstNumber + operator;
    });
});

equalBtn.addEventListener("click", () => {
    result = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
    document.getElementsByTagName("input")[0].value = result;
    document.querySelector(".old-result").innerHTML = firstNumber + operator + secondNumber + " = " + result;
    firstNumber = "";
    secondNumber = "";
    operator = "";

});

special.forEach(spBtn => {
    spBtn.addEventListener("click", () => {
        let btn = spBtn.innerHTML;
        if (btn == "AC") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            document.getElementsByTagName("input")[0].value = "";
            document.querySelector(".old-result").innerHTML = "";

        }
        if (btn == "+/-") {

            let temp = document.getElementsByTagName("input")[0].value *= -1;
            if (firstNumber) {
                firstNumber = temp;
            } else if (secondNumber) {
                secondNumber = temp;
            }
            else {
                result = temp;
            }
        }
        if (btn == "%") {

            if (firstNumber) {
                firstNumber = (parseFloat(firstNumber) / 100).toString();
                document.getElementsByTagName("input")[0].value = firstNumber;

            }
        }

        if (btn == "C") {

            if (firstNumber) {
                firstNumber = firstNumber.slice(0,-1);
                document.getElementsByTagName("input")[0].value = firstNumber;
            } else if (secondNumber) {
                secondNumber = secondNumber.slice(0,-1);
                document.getElementsByTagName("input")[0].value = secondNumber;
            }
            else{
                result=result.toString();
                result=result.slice(0,-1);
                document.getElementsByTagName("input")[0].value = result;
            }
        }
    });
});



function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return "Error";
    }
}
