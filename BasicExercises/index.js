//1. Write a TypeScript program that declares a variable `name` and assigns it a string value.
// Also declare a variable `age` and assign it a number value. Finally print the values of 
//name and age.
var name1 = "AJ";
var age = 24;
console.log("1", name1, age);
//2. Write a TypeScript program that declares variables using let, const, and var.
// Then, describe how each declaration type behaves with respect to scoping and mutability.
var user = "Moni";
user = "Rohan";
console.log("2", user);
// using let we can mutate and it's block scope.
var user1 = 101;
//user1 = "Jha"; // getting error: Cannot assign to 'user1' because it is a constant
console.log("3", user1);
// const is immutable , we can't change it and it's also block scope.
var user2 = false;
user2 = true;
console.log("4", user2);
// var is function scope and we can mutate.
//3. Write a TypeScript program that declares variables of the following data types: number, 
//string, boolean, and undefined. Assign values to them and perform basic operations.
var number1 = 10;
var student = "Sai";
var bool = true;
var define = undefined;
var mutability = number1 * 5;
console.log("5", mutability);
var behaves = student + " " + "is a good boy!";
console.log("6", behaves);
//4. Write a TypeScript program that declares a variable as a number and 
// then tries to assign a string to it to see type checking in action.
var newNum = 90;
//newNum = "John"; // getting error:  Type 'string' is not assignable to type 'number'
console.log("7", newNum);
//5. Write a TypeScript program that declares a variable without specifying its type and shows 
//how TypeScript infers the type based on the assigned value. 
var infers = 92;
infers = 100;
console.log("8", infers, "Type: ", typeof (infers));
//6. Write a TypeScript program that converts a variable of one type to another using
// type assertions and type conversion functions like parseInt().  
//convert number to string.
var numVariable = 1000;
var str = numVariable.toString();
console.log("convert num to Str: ", typeof (str));
// convert string to number.
var stringVariable = "100";
var numVar = parseInt(stringVariable);
console.log("Convert number to string: ", typeof (numVar));
var person = {
    id: 101,
    name: "Aj",
    sal: "25Lpa"
};
console.log("type Alias: ", person);
//8. Write a TypeScript program that declares an array of a specific data type. 
//It will demonstrates common array operations like adding elements, removing elements,
// and iterating through the array.
var userData = ["Toni", "Ram", "Virat", "Rahul"];
var addingData = userData.push("Rohit"); //adding at the last index.
console.log("Adding: ", userData);
var removeUser = userData.pop(); // removing at the last index
console.log("Remove: ", userData);
var addFirstIndex = userData.unshift("Maxwell"); //adding at the 1st index.
console.log("adding 1st Index: ", userData);
var removeUserAtFirst = userData.shift(); // removing at the 1st index
console.log("Remove at 1st Index: ", userData);
for (var _i = 0, userData_1 = userData; _i < userData_1.length; _i++) {
    var singleUser = userData_1[_i];
    console.log(singleUser, "Itarating");
}
//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 
//'White' and Blue. Create a variable 'selectedColor' of type 'Color' and 
//assign it one of the enumeration values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var selectedColor = Color.Red;
console.log("Enum: ", selectedColor); // it will return index, value is 0;
//10. Write a TypeScript program that declares a variable 'isNull' and assigns it null.
// You should also declare a variable called 'isUndefined' and assign it an undefined value.
var isNull = null;
var isUndefined = undefined;
console.log("IsNull: ", isNull);
console.log("isUndefine: ", isUndefined);
