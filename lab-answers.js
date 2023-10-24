// Easy Going:
// Write a for loop that will log the numbers 1 through 20.
//  The commit message should read: "Easy Going answered"

// for (let i = 1; i <=20; i++) {
//     console.log(i);
// }
// console.log("Easy Going answered");

// // Get Even:
// // Write a for loop that will log only the even numbers in 0 through 200.
// // Hint: Think about the increment expression.
// // The commit message should read: "Get Even answered"

// for (let even=0; even <=200; even++){
//     if (even % 2 === 0) {
//         console.log(`${even} is an even number!`);
//     }  else {
//         console.log(`${even} is not an even number!`);
//     }
// }
// console.log("Get Even answered");


// // Fizz Buzz:
// // This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.

// //     Write a Javascript Application that logs all numbers from 1 - 100.
// //     If a number is divisible by 3, log "Fizz" instead of the number.
// //     If a number is divisible by 5, log "Buzz" instead of the number.
// //     If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.

// //     The commit message should read: "Fizz Buzz answered"

// for (classic = 0; classic <= 100; classic++) {
//     if (classic % 3 ) {
//         console.log("Fizz");
//     } else if (classic % 5) {
//         console.log("Buzz") 
//     } else if (classic % 3 && classic % 5) {
//         console.log("FizzBuzz");
//     }
// }
// console.log("Fizz Buzz answered");


// // Wild Wild Life:
// // Use the following arrays to answer the questions below (name, species, age, hometown).
// // You should be modifying the elements by accessing them. It is up to you which methods to use.
// // The commit message should read: "Wild Wild Life answered"

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1.) Plantee just had her birthday; change Plantee's array to reflect her being a year older.
//  const planteeNewAge = plantee[2] = 5001;
//  console.log(plantee);
// // Or...
//  const planteeAgeNow = plantee.indexOf(5000);
//  if(planteeAgeNow !== -1) {
//     plantee.splice(planteeAgeNow, 1, 5001);
//  } 
//  console.log(plantee);
//  console.log("Happy Birthday Plantee!");
//  console.log("1.) Wild Wild Life answered!");

//  // 2.) Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// const wolfyNewHomeTown = "Gotham City";
// wolfy.pop(wolfy)
// wolfy.push(wolfyNewHomeTown);
// console.log(wolfy);
// console.log("Wolfy might be Batman...");
// console.log("2.) Wild Wild Life answered!");

// //3.) Give D'Art a second hometown by adding "Hawkins"
// const dartSecondHome = "hawkins";
// for(let Home=0; Home <=dartSecondHome.length; Home++) {
//     dart.push(dartSecondHome);
// } console.log(dart);
// console.log("3.) Wild Wild Life answered to many times!");
// //comment out the loop above to see that all I needed to just simply do...
// const dartSecondHomeTwn = "Hawkins";
// dart.push(dartSecondHomeTwn);
// console.log(dart);
// console.log("3.) Wild Wild Life answered!");

// // 4.) Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// const poorWolfy = "Gameboy";
// wolfy.splice(0, 1, poorWolfy);
// console.log(wolfy);
// console.log("4.) Wild Wild Life answered!");
// //or
// const Gameboy = "Gameboy";
// const updateWolfy = wolfy.slice();
// updateWolfy[0] = Gameboy;
// console.log(updateWolfy);
// console.log("Wolfy shouldn't have to change his name.");

// Yell at the Ninja Turtles:
//     Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
//     Use a for of loop to call toUpperCase() on each of them and print out the result.

// Haven't heard of for of loops?

// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

//     The commit message should read: "Yell at the Ninja Turtles answered"
// const teenageMutantNijaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let turtleNinjas=0; turtleNinjas< teenageMutantNijaTurtle.length; turtleNinjas++) {
//     teenageMutantNijaTurtle[turtleNinjas]= teenageMutantNijaTurtle[turtleNinjas].toUpperCase();
// } console.log(teenageMutantNijaTurtle);
// console.log("Yell at the Ninja Turtles answered")
// //actually...
// for (let theTurtles of teenageMutantNijaTurtle ) {
//     theTurtles = theTurtles.toUpperCase();
// } console.log(teenageMutantNijaTurtle);
// console.log("Now I've printed the turtle as requested");
// console.log("Yell at the Ninja Turtles answered")

// Methods, Revisited:
// Here is a list of favorite movies:
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log the index of Titanic.
//console.log(favMovies[8]);
// Do the following and console.log the final results. (I have included some thought questions; you don't have to write out an answer for those marked as such).
// Note: if you have to add to the array, feel free to add any movie you'd like.

// 1.) Use the .sort method.
// favMovies.sort();
// console.log(favMovies)
// //2.) Thought Question: What did this do to the array? Did it permanently alter it?
// console.log("The movies are in alphabetical order by the first letter of each element!");
// //3.) Use the method pop.
// favMovies.pop();
// console.log(favMovies);
// console.log("Whoops the .pop did do anything.")

// const yourFavMovies = favMovies.pop();
// console.log(yourFavMovies);
// console.log("Volver was sucessfully popped!");
// // // 4.) push "Guardians of the Galaxy".
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies); 
// // //5.) Reverse the array.

// //favMovies.reverse();
// //console.log(favMovies);
// // Use the shift method.
// //favMovies.shift();
// //console.log(favMovies);
// // unshift - what does it return?
// console.log("Unshift reordered the array to the original state");
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).

// !!!!system crashed doing the methods in one function.

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 function  manipulateMovieArray(array) {
    array.sort((firstMov, secondMov) => firstMov.length - secondMov.length);
    array.pop();
    array.push("Guardians of the Galaxy");
    array.shift();
    array.unshift();
    array.splice(,,"Avatar");
const  sliceArray = array.slice(,);
return array;
 } console.log(manipulateMovieArray(favMovies));
 console.log("Methods Revisited answered");
console.log("Method Reverse is done but my system pooped out! I learn to manipulate thee array.")



// Thought Question: Did this permanently alter our array?
// slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
// Thought Question: Did this permanently alter our array?
// Store the value of your slice in a variable and console.log it.
// Thought Question: What is going on here?
// console.log your final results.

// After running the above tasks, console.log the index of "Fast and Furious."

// We removed it from the array. What value do we get when we look for the index of something that is not in the array?
// Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? Should we have used let?

// The commit message should read: "Methods Revisited answered"


