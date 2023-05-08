/* 
- variables
- data types

----------------
--> return --> the results of some code that's been executed AND is useable in different contexts/parts of the code
--> console.log() --> printing the code as it's being executed to the console/terminal
-- named/anonymous, parameters, code to execute, return
- variables --> values
- declarations (variables) --> keywords: var (NEVER USE THIS), let (DYNAMIC), const (STATIC)
*/

// example 1
// DECLARATIVE FUNCTIONS ALWAYS END IN PARENTHESIS WHEN INVOKED* --> 

// function someFunctionName(...) { 
//    // - some code to execute here -
// };

// someFunctionName()
// aFunction()
// thisThing()
// iDoThis()
// ...

// function nameOfTheFunction(param) {...}
function addFive(num) { // parameter is pretty much a label for the argument (value) being sent in
    const sum = num + 5 // logic here (num + 5)
    return sum;
};

// invoke/call the function with the value you want to pass to the function 
console.log(addFive(7)) // 7 + 5 => 12 
console.log(addFive(5)) // 5 + 5 => 10
console.log(addFive(2)) // 2 + 5 => 7
console.log(addFive(22)) // 22 + 5 => 27

let x = 20;

const xAndAddFive = x + addFive(5)
 
// keyword: const
// variable: xAndAddFive
// assignment operator: =
// variable x: value --> 20
// plus operator: +
// function addFive(5): value --> 10
// const xAndAddFive = 20 + 10 
// const xAndAddFive = 30

