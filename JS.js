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
