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

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

