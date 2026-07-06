let score = Number(prompt("Enter Your Score"));

if (score >= 70 && score <= 100) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else if (score >= 45) {
    console.log("D");
} else if (score >= 40) {
    console.log("E");
} else if (score >= 0) {
    console.log("F");
} else {
    console.log("Invalid Score");
}