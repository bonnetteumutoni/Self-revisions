//Write a JavaScript function that reverses a number.
function numberReverse(number){
  let numSplit=number.toString().split("");
  let result=numSplit.reverse().join("");
  return result;
}
console.log(numberReverse(32456));

function numRev(number){
    let revNum="";
    for(let i=0; i<number.toString().length;i++){
        revNum=number.toString()[i]+revNum;
    }
    return revNum
}
console.log(numRev(7634578));

//Write a JavaScript function that checks whether a passed string is a palindrome or not?
function palindrome(word){
    let wordRev="";
    for(let i=0;i<word.length;i++){
        wordRev=word[i]+wordRev;
    }
    if(wordRev===word){
        console.log("The word is palindrome")
    }else{
        console.log("The word is not palindrome")
    }
}
palindrome("mariam");

//Write a JavaScript function that generates all combinations of a string.

//Example string : 'dog'

//Expected Output : d,do,dog,o,og,g



const posssibleCombination = (str)=>{
  let combination = [];
  for(let i =0;i<str.length;i++){
    for(let j=0; j<str.length+1;j++){
      combination.push(str.slice(i,j));
    }
  }
  const combinationSet= new Set(combination)
  return combinationSet;
}
console.log(posssibleCombination('Dog'))


//factorial
function factorialOfNumber(number){
  if(number==0){
    console.log("Factorial is one");
  }else{
    let result=1;
    let i=1;
    while(i<=number){
      result*=i;
      i++
    }
    return `Factorial is ${result}`
  }
}
console.log(factorialOfNumber(13))

//Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabeticOrder(word){
  return word.toLowerCase().split("").sort().join("");
}
console.log(alphabeticOrder("webmaster"));

//Capitalize First Letter of Each Word
function capitalizeFirstLetter(word){
  let wordSplit=word.toLowerCase().split(" ");
  let newArray=[];
  for(let i=0;i<wordSplit.length;i++){
    newArray.push(wordSplit[i].at(0).toUpperCase()+wordSplit[i].slice(1).toLowerCase())
  }
return newArray.join(" ")
}
console.log(capitalizeFirstLetter("Hello world"))

//Find Longest Word
function longestWords(word){
  let wordSplit=word.split(" ");
  for(let i=0;i<wordSplit.length;i++){
    if(wordSplit[i].length>wordSplit[i+1].length){
      return wordSplit[i];
    }else{
      return wordSplit[i+1];
    }
  }
}
console.log(longestWords("National Development fund"));
//combine first name and lastname with space between
function combineNames(firstname,lastname){
  return firstname+" "+lastname;
}
console.log(combineNames("Anna","Jane"))




// //classessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
// class Person {  constructor(name) { this.name = name; }
//   greet() { console.log(`Hello ${this.name}`); }
// }
// // inheriting parent class
// class Student extends Person {
// constructor(name) {
//         super(name);   // call the super class constructor and pass in the name parameter. Super refers to the parent class’s constructor   }
// }}
// let student1 = new Student('Jack');
// student1.greet();


class People{
  constructor(name,age,nationality){
    this.name=name;
    this.age=age;
    this.nationality=nationality;
  }

  personalInformation(){
    console.log(`My name is ${this.name}, I am ${this.age} years old and my nationality is ${this.nationality}`);
  }}

  class Citizen extends People{
       constructor(name,age,nationality){
        super(name,age,nationality);
       }
  }
 let citizen=new Citizen("Anna",34,"Rwandese")
citizen.personalInformation();

// //These are a way of creating objects using functions in JS. They act as blueprints and were used before the introduction of classes in ES6 2015. 
function Person(name, age) {
  this.name = name; // this refers to the object instance that will be created
  this.age = age;
  this.greet = function () { //object methods
        return ('Hi' + ' ' + this.name);
    }
    Person.prototype.name = 'Peter';
    Person.prototype.age = 23
}
const john = new Person('John', 30);
console.log(Person.prototype); 
Person.prototype.gender = 'male';
Person.prototype.age =  50;


// // Create a constructor function Driver that takes in a driver's name, carModel, and rating.
// // Add a method using the prototype called getDetails() that returns a formatted string with the driver’s name and car model.
// // Add another method on the prototype called isTopRated() that returns true if the rating is above 4.5.
// // Create at least two drivers and test the methods.

function Driver(name,carModel,rating){
  this.name=name;
  this.carModel=carModel;
  this.rating=rating;
}
Driver.prototype.getDetails=function(){
  console.log(`My name is ${this.name} and the car model is ${this.carModel}`)
}
Driver.prototype.isTopRated=function(){
  if(this.rating>4.5){
    return true;
  }else{
    return false
  }
}
const jay=new Driver("Jay","Honda",4.7);
jay.getDetails();
console.log(jay.isTopRated());


const timmy=new Driver("Timmy","Toyota",3);
timmy.getDetails();
console.log(timmy.isTopRated());

// You are creating a backend structure for an online course platform.
//  Write a Student class that accepts name, course, and scores (an array of numbers) as arguments.
// Add a method using Student.prototype called getAverageScore() that returns the average score.
// Add another method called isPassing() that returns true if the average is 50 or more.c
// Add another method called totalScores() that returns the total scores of the student.
// Create two students and test all the methods.

class Student{
  constructor(name,course,scores){
    this.name=name;
    this.course=course;
    this.scores=scores;
  }
  isPassing(){
    let sum=this.scores.reduce((item,acc)=>item+acc,0);
    let average=sum/this.scores.length;
    if(average>=50){
      return true;
    }else{
      return false
    }
  }
totalScores(){
  let sum=this.scores.reduce((item,acc)=>item+acc,0)
    return sum

}}
Student.prototype.getAverageScore=function(){
   let sum=this.scores.reduce((item,acc)=>item+acc,0)
  let average=sum/this.scores.length;
  return average;
  }
const anna=new Student("Anna","Backend",[50,70,89,92])

console.log(anna.getAverageScore());
console.log(anna.isPassing());
console.log(anna.totalScores());


const jane=new Student("Jane","Backend",[20,70,59,12])
console.log(jane.getAverageScore());
console.log(jane.isPassing());
console.log(jane.totalScores());

//Write a JavaScript function that accepts an argument and returns the type.

function argumentType(arg){
  return typeof(arg);
}
console.log(argumentType(34));
console.log(argumentType("Hello"))

//Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {
    // Initialize variables i and j for row and column indices
    var i;
    var j;

    // Iterate through each row
    for (i = 0; i < n; i++) {
        // Iterate through each column
        for (j = 0; j < n; j++) {
            // Check if the current position is on the diagonal (i equals j)
            if (i === j) {
                // Print 1 if on the diagonal
                console.log(' 1 ');
            } else {
                // Print 0 if not on the diagonal
                console.log(' 0 ');
            }
        }
        // Print a line of dashes to separate rows
        console.log('----------');
    }
}

// Call the matrix function with the parameter 4
matrix(4); 


//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

function secondLowestGreatest(numbers){
  let sortedNumbers=numbers.sort((a,b)=>a-b);
  let number=[];
  number.push(sortedNumbers[1]);
  number.push(sortedNumbers[sortedNumbers.length-2]);
  return number;
}
console.log(secondLowestGreatest([1,2,3,9,8]));

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

function test_prime(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;  
  }
}
console.log(test_prime(10));

// The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
//  Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumber(number){
    let divisors=[];
  for(let i=1;i<number;i++){
    if(number%i==0){
     divisors.push(i)
    }
  }
  let res=divisors.reduce((item,acc)=>item+acc,0);
  if(res==number && (res+number)/2==number){
    console.log(`${number} is a perfect number`)
  }else{
    console.log(`${number} is not a perfect number`)
  }
}
perfectNumber(18);