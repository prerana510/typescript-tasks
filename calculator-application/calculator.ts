function calculate(num1: number, num2: number, operator: string): number | null {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 !== 0) {
                return num1 / num2;
            } else {
                console.error("Error: Division by zero");
                return null;
            }
        default:
            console.error("Error: Invalid operator");
            return null;
    }
}

const num1 = -1;
const num2 = 5;
const operator: string = "*";

const answer = calculate(num1,num2,operator);
if(answer != null) {
    console.log(`${num1} ${operator} ${num2} = ${answer}`);
}

