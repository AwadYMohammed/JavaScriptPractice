et newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
const  hobbies  = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(hobbies)

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem  = famousSayings[0];
console.log(listItem);
console.log(famousSayings[3]);
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils[3])
//The .push() Method
/*Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push() allows us to add items to the end of an array. Here is an example of how this is used:*/
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
/*
So, how does .push() work?

We access the push method by using dot notation, connecting push to itemTracker with a period.
Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!

*/

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('item 3', 'item 4');
console.log(chores);

//The .pop() Method
//Another array method, .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/*
In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
.pop() does not take any arguments, it simply removes the last element of newItemTracker.
.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
.pop() is a method that mutates the initial array.
When you need to mutate an array by removing the last element, use .pop().*/

onst chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores.pop();
console.log(chores);
/*
More Array Methods
There are many more array methods than just .push() and .pop(). You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation.

.pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check MDN to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the MDN documentation to learn what each method does!

*/


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);

roceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));

console.log(groceryList);
const  pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
/*
Arrays and Functions
Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:

*/
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
/*

et’s go over what happened in the example:

The flowers array that has 3 elements.
The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
We call addFlower() with an argument of flowers which will execute the code inside addFlower.
We check the value of flowers and it now includes the 'lily' element! The array was mutated!
So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.
*/

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
