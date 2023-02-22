/*
In this exercise, we will explore the most
common string methods in JavaScript
*/

var greetings = 'Welcome';
var user = 'Jane';
var animal = 'hippopotamus'

//length
console.log(greetings.length);          // 7
//charAt
console.log(greetings.charAt(0));       // W
console.log(greetings.charAt(3));       // c
//concat
console.log('Wo'.concat('rl').concat('d'));         // World
console.log(greetings.concat(' ').concat(user));        // Welcome Jane
//indexOf
console.log(animal.indexOf('h'));        // 0
console.log(animal.indexOf('p'));       // 2
console.log(animal.indexOf('o'));       // 4
console.log('hi'.indexOf('h'));         // 0
//lastIndexOf
console.log('awesome'.lastIndexOf('e'));        // 6
//split
console.log('ho-ho-ho'.split('-'));             // ['ho', 'ho', 'ho']
//toUpperCase()
console.log(greetings.toUpperCase());           // WELCOME
//toLowerCase()
console.log(greetings.toLowerCase());           // welcome
