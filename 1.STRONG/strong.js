//Using Prompt module to take the input
//Command to install it :--   "npm install prompt-sync"

//defining the prompt
const prompt = require("prompt-sync")();
//taking the input
let input = prompt("Enter the number");

let steps = [];

//function to find the strong number
function strong(number) {
  let result = "";
  let num = [...number];
  while (num.length != 0) {
    if (num.length > 1) {
      let first = parseInt(num.shift());
      let last = parseInt(num.pop());
      if (first != last) {
        res = Math.max(first, last);
        result = result + res;
      }
    } else {
      result = result + num.pop();
    }
  }
  steps.push(result);
  return result;
}

//looping till the number becomes 1 digit
while (input.length != 1) {
  input = strong(input);
}

//printing of the values
console.log(`Strongest digit is ${input}`);
console.log(steps);
