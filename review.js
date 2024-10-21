//review/exam[ple
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


//1   // Use `.map()` to iterate over the following array:



//Create a new array where each value is multiplied by 2 and log the new array.

//Your code here
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const newArray = nums.map((currentElement)=>{
    return currentElement  * 2;
})
console.log(newArray);

////////////////////////////////////////// 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTopping,secondToppings] = pizzaToppings;
console.log(firstTopping);
console.log(secondToppings);


///////////////////////3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const {make,model} = car;

// object destructuring:

console.log(make);
console.log(model);

// Equivalent in traditional dot notation:
console.log(car.make)
console.log(car.model)


////////////4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
// I put Caps on 
const PizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const duplicatePizzaToppings = [...PizzaToppings]
console.log(PizzaToppings)


///////////////5

// Duplicate the following object and spread its values into a new variable `myCar`.
// change cars to Car with capital C
const Car = {
  make: 'Audi',
  model: 'q5',
};

const myCar = {...Car};
// Change the `model` property of `myCar` to 'q7'. Log both objects.
myCar.model = 'q7'
// Your code here
console.log(myCar.model)

////////////6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
/// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const userProfile = {
 
}
const propertyName = 'username'
const propertyNames = userProfile[propertyName]
console.log(propertyName)



///////// 7


//////// Done exportingFile.js, importingFile.js





// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`


// Cats('dog','fluffy')

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const Cats = (noun ="The cat",adjective = "is white")=>
  { 
    console.log(noun ,adjective)

}
Cats()




///////9
// Convert the following `if...else` statement in to a ternary:

const pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here




let pizzas = 'tasty';

pizza === 'tasty' ?   console.log('yum') : console.log('yuck');
 

///////////////10


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = 'en';  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'fr';
// Log the result
console.log('Language setting:', LANG);




/////////////11

// 2. SET WEBSITE THEME

const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);
