// Contains no bug or error

function addNumbers(a,b) {
    console.log(a + b);
}

addNumbers(4 , 4);              // 8
console.log('This code is error free. It contains no bug');



// This code contains a bug. Hence it returns an unexpected output

function addTwoNumbers(a,b) {
    console.log(a + b);
}

addTwoNumbers(4 , '4');         // 44
console.log('This code contains a bug and returns an unexpected output');

// This code contains an error and does not run

console.log(c + d);
console.log('This code contains an error and hence stops the execution of the program');

