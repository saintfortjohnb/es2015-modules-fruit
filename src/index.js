// src/index.js

import fruits from './foods';
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
const myFruit = choice(fruits);

// Log the messages
console.log(`I’d like one ${myFruit}, please.`);
console.log(`Here you go: ${myFruit}`);
console.log("Delicious! May I have another?");

// Remove the fruit from the array of fruits
remove(fruits, myFruit);

// Log the last message
console.log(`I’m sorry, we’re all out. We have ${fruits.join(', ')} left.`);
