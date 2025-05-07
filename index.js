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