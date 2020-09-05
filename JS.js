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
