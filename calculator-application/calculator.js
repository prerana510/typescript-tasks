function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            }
            else {
                console.error("Error: Division by zero");
                return null;
            }
        default:
            console.error("Error: Invalid operator");
            return null;
    }
}
var num1 = -1;
var num2 = 5;
var operator = "*";
var answer = calculate(num1, num2, operator);
if (answer != null) {
    console.log("".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(answer));
}
