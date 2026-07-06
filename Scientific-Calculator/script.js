function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}
function square(number) {
    return number ** 2;
}

function cube(number) {
    return number ** 3;
}

function power(base, exponent) {
    return base ** exponent;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function absolute(number) {
    return Math.abs(number);
}

function sine(angle) {
    return Math.sin(angle);
}

function cosine(angle) {
    return Math.cos(angle);

}

function tangent(angle) {
    return Math.tan(angle);
}

console.log(add(10, 5));

console.log(subtract(50, 8));

console.log(multiply(4, 9));

console.log(divide(40, 5));

console.log(square(7));

console.log(cube(3));

console.log(power(2, 10));

console.log(squareRoot(81));

console.log(absolute(-15));

console.log(sine(Math.PI / 2));