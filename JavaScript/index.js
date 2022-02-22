/***************** lifeInWeeks *******************/

function lifeInWeeks(age) {
    var x = (~~(100 - age) * 365);
    var y = (~~(100 - age) * 56);
    var z = (~~(100 - age) * 12);
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}



/***************** bmiCalculator *******************/

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

var bmi = bmiCalculator(90, 1.85);
console.log(bmi);

/************** */
function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    if (bmi < 18.5) {
        return ("Your BMI is " + bmi + ", so you are underweight.");
}
    if (bmi >= 18.5 && bmi <= 24.9) {
        return ("Your BMI is " + bmi + ", so you have a normal weight.");
}
    else if (bmi > 24.9) {
        return ("Your BMI is " + bmi + ", so you are overweight.");
    }
}



/***************** pseudoRandom *******************/

// Math.floor向下取整
// Math.ceil向上取整
// Math.round四舍五入
// Math.random 随机数0-0.9999999999999999(16 decimal)
// === check both value and datatype
// == only check value, not datatype
// x ^= y === x = x ^ y XOR异或, bitwise operator
var name1 = prompt("What is your name?");
var name2 = prompt("What is the another person's name?");
var n = Math.ceil(Math.random() * 100);
alert("Your match rate is " + n + "%!");



/************** LeapYear ****************/

function isLeap(year) {
    if (year % 400 === 0) {
        return ("Leap year.");
    }
    else if ((year % 4 === 0) && (year % 100 !== 0)) {
        return ("Leap year");
    }
    else {
        return ("Not leap year.");
    }
}

console.log(isLeap(1948));



/************** Array ****************/


var name = ["Bear", "Panda", "Jing", "Joonas"];
var input = prompt("what's your name?");
if (name.includes(input)) {
    alert("welcome");
} else {
    alert("see you");
}



/************** fizzBuzz ****************/

// checking order matters: first check the more selective option

var numbers = [];
var count = 1;

function fizzBuzz() {

while (count <= 100){
    if (count % 3 === 0 && (count % 5 === 0))
        numbers.push("fizzBuzz");
    else if (count % 3 === 0)
        numbers.push("fizz");
    else if (count % 5 === 0)
        numbers.push("Buzz");
    else
        numbers.push(count);
    count += 1;
    console.log(numbers);
    }
}



/********** who is buying lunch ***********/

//Math.floor 向下取整
//Math.ceil 向上取整
function whosPaying(names) {
    var the_chosen_one = names[Math.floor(Math.random() * names.length)];
    return(the_chosen_one + " is going to buy lunch today!");
}

var names = ["Jing", "Bear", "Panda", "Don", "Christina", "Joonas"];
console.log(whosPaying(names));


/********** Fibonacci ***********/

function fibonacciGenerator(n) {
    var sequence = [];
    for (var i = 0; i < n; i++) {
        if (i < 2)
            sequence.push(i);
        else
            sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return (sequence);
}

num = fibonacciGenerator(5);
console.log(num);
