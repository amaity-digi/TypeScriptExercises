//1. Write a TypeScript program that declares a variable `name` and assigns it a string value.
// Also declare a variable `age` and assign it a number value. Finally print the values of 
//name and age.

let name1 : string = "AJ";
let age: number = 24;
console.log("1", name1, age);

//2. Write a TypeScript program that declares variables using let, const, and var.
// Then, describe how each declaration type behaves with respect to scoping and mutability.

let user: string = "Moni";
user = "Rohan";
console.log("2", user);
// using let we can mutate and it's block scope.

const user1: number = 101;
//user1 = "Jha"; // getting error: Cannot assign to 'user1' because it is a constant
console.log("3", user1);
// const is immutable , we can't change it and it's also block scope.

var user2: boolean = false;
user2 = true;
console.log("4", user2);
// var is function scope and we can mutate.

//3. Write a TypeScript program that declares variables of the following data types: number, 
//string, boolean, and undefined. Assign values to them and perform basic operations.

let number1: number = 10;
let student: string = "Sai";
let bool: boolean = true;
let define: undefined = undefined;

let mutability: number = number1 * 5;
console.log("5", mutability);

let behaves: string = student + " " + "is a good boy!";
console.log("6", behaves);

//4. Write a TypeScript program that declares a variable as a number and 
// then tries to assign a string to it to see type checking in action.

let newNum: number = 90;
//newNum = "John"; // getting error:  Type 'string' is not assignable to type 'number'
console.log("7", newNum);


//5. Write a TypeScript program that declares a variable without specifying its type and shows 
//how TypeScript infers the type based on the assigned value. 

let infers = 92;
infers = 100;
console.log("8", infers,"Type: ", typeof(infers));

//6. Write a TypeScript program that converts a variable of one type to another using
// type assertions and type conversion functions like parseInt().  

//convert number to string.
let numVariable: number = 1000;
let str: string = numVariable.toString();
console.log("convert num to Str: ", typeof(str));

// convert string to number.
let stringVariable: string = "100";
let numVar: number = parseInt(stringVariable);
console.log("Convert number to string: ", typeof(numVar));

//7.. Write a TypeScript program that creates type aliases for complex data types
// such as objects or custom types. Use them to define variables and
// explain how they improve code readability. 

type Person = {
    id: number,
    name: string,
    sal: string
}

const person: Person = {
    id: 101,
    name: "Aj",
    sal: "25Lpa"
}
console.log("type Alias: ", person);

//8. Write a TypeScript program that declares an array of a specific data type. 
//It will demonstrates common array operations like adding elements, removing elements,
// and iterating through the array.

const userData: string[] = ["Toni", "Ram", "Virat", "Rahul"];
const addingData = userData.push("Rohit"); //adding at the last index.
console.log("Adding: ", userData);
const removeUser = userData.pop(); // removing at the last index
console.log("Remove: ", userData)
const addFirstIndex = userData.unshift("Maxwell"); //adding at the 1st index.
console.log("adding 1st Index: ", userData);
const removeUserAtFirst = userData.shift(); // removing at the 1st index
console.log("Remove at 1st Index: ", userData);

for(let singleUser of userData){
    console.log(singleUser, "Itarating");
}

//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 
//'White' and Blue. Create a variable 'selectedColor' of type 'Color' and 
//assign it one of the enumeration values.

enum Color {'Red', 'Green','White', 'Blue' };
const selectedColor: Color = Color.Red;
console.log("Enum: ", selectedColor); // it will return index, value is 0;

//10. Write a TypeScript program that declares a variable 'isNull' and assigns it null.
// You should also declare a variable called 'isUndefined' and assign it an undefined value.

const isNull: null = null;
const isUndefined: undefined = undefined;
console.log("IsNull: ", isNull);
console.log("isUndefine: ", isUndefined);


