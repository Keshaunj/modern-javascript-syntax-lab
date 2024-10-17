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
