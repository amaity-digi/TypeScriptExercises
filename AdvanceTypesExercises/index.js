// 1. Write a TypeScript program that declares a variable 'result' that can 
//hold either a 'string', 'number' or a 'number'. Now write a function that takes 
//an argument of type 'string | number | boolean' and logs its type.
var result;
function multipleType(argument) {
    if (typeof argument === "string") {
        console.log("Type is String");
    }
    else if (typeof argument === "number") {
        console.log("Type is Number");
    }
    else if (typeof argument === "boolean") {
        console.log("Boolean Value");
    }
}
console.log(multipleType("Rahul")); // String
console.log(multipleType(false)); // Boolean
console.log(multipleType(100)); // number
//2. Write a TypeScript program that creates a function combine that accepts
// two parameters of types boolean and number. It returns a value that can be 
//either a boolean or a number. Use a union type to achieve this.
function combine(bool, num) {
    if (bool) {
        return num + 10;
    }
    else {
        return !bool;
    }
}
console.log("1", combine(false, 87));
console.log("2", combine(true, 7));
//3. Write a TypeScript function that takes an argument of type string | number. 
//Inside the function, use a type guard to check whether the argument is a string or a number.
// Then, log the appropriate message accordingly.  
function messageOrNumber(param) {
    if (typeof (param) === "string") {
        console.log("Type is string");
    }
    else if (typeof (param) === "number") {
        console.log("Type is number");
    }
    else {
        console.log("Nothing");
    }
}
console.log("checking:1 ", messageOrNumber(101));
console.log("checking:2 ", messageOrNumber("John"));
var car = { make: "Omni", model: "old" };
var bus = {
    make: "Express",
    model: "Bajaj",
    payloadCapacity: 100
};
var vahicle = [car, bus];
console.log("Vehical Array: ", vahicle);
//6. Write a TypeScript program that declares an array containing both numbers and strings.
// Use type assertions to extract number, string and boolean values from the array. 
var containingNumAndString = ["Aj", 101, "Abhi", 34, 21, true, "Rahul"];
var filerString = containingNumAndString.filter(function (item) { return typeof (item) === "string"; });
console.log("filerString", filerString);
var filerBool = containingNumAndString.filter(function (item) { return typeof (item) === "boolean"; });
console.log("filerBool", filerBool);
var filerNumber = containingNumAndString.filter(function (item) { return typeof (item) === "number"; });
console.log("filerNumber", filerNumber);
//7. Write a TypeScript program that declares a variable as type any and uses 
//a type assertion to explicitly cast it to type string.
var subject = 10;
var num = subject;
console.log("num", num, typeof (num));
//8. Write a TypeScript function that accepts a parameter of type string | string[] and
// returns the length of the input string. It also returns the sum of the lengths 
//of all strings in the array. Use type assertions to let TypeScript know the parameter type. 
// Doubt  ??
// function student(param: string | string[]) : number{
// }
//9. Write a TypeScript generic function that accepts an argument of any type
// and returns the same value. Test the function with various data types.  
function genericFUn(param) {
    return param;
}
var str = genericFUn("Monalisha");
console.log("generic Str: ", str);
var numGen = [82, 72, 5];
console.log("NUmGeneric: ", genericFUn(numGen));
