// Easy Going:
// Write a for loop that will log the numbers 1 through 20.
//  The commit message should read: "Easy Going answered"

for (let i = 1; i <=20; i++) {
    console.log(i);
}
console.log("Easy Going answered");

// Get Even:
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.
// The commit message should read: "Get Even answered"

for (let even=0; even <=200; even++){
    if (even % 2 === 0) {
        console.log(`${even} is an even number!`);
    }  else {
        console.log(`${even} is not an even number!`);
    }
}
console.log("Get Even answered");


// Fizz Buzz:
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.

//     Write a Javascript Application that logs all numbers from 1 - 100.
//     If a number is divisible by 3, log "Fizz" instead of the number.
//     If a number is divisible by 5, log "Buzz" instead of the number.
//     If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.

//     The commit message should read: "Fizz Buzz answered"

for (classic = 0; classic <= 100; classic++) {
    if (classic % 3 ) {
        console.log("Fizz");
    } else if (classic % 5) {
        console.log("Buzz") 
    } else if (classic % 3 && classic % 5) {
        console.log("FizzBuzz");
    }
}
console.log("Fizz Buzz answered");