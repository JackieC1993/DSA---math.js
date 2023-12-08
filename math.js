// Basic Definitions
// Integer: a whole number that is not a fraction
// Float/Floating point: approximate value for a decimal/fraction, as calculated by a computer
// Positive number: greater than zero
// Negative: less than zero
// Non-negative: greater than or equal to zero
// NaN: the only number that is not a number
// console.log(typeof 2) => 'number'
// console.log(typeof NaN) => 'number'
// console.log(typeof 'snake') => 'string'
// console.log('building' / 'house') => NaN
// + is the addition operator but in terms of strings, it is the concatenation operator
// let start = "Hello, ";
// let introduce = "my name is ";
// let name = "E.T.";
// let expression = start + introduce + name;
// console.log(expression);
// Multiplying strings (dividing strings, subtracting strings) will not work!
// These are mathematical operations! and they do not apply to strings
// let manyCats = "cat " * 5;
// console.log(manyCats); => NaN
// let ductTapePrice = 5;
// let amountOfDuctTape = 4;
// let total = ductTapePrice * amountOfDuctTape;
// if (amountOfDuctTape >= 3) {
//     total = total - (total * 10) / 100;
// }
// console.log(total)
// console.log(`The price of ${amountOfDuctTape} duct tape rolls is ${total}`);
// PEMDAS
// Easy way to remember how to get a percentage of a number:
// - multiply the number by the percentage(number)
// - divide product by 100 (to get the percentage)
// total = total - (total * 10) / 100;
// console.log(total)
let ductTapePrice = 5;
let amountOfDuctTape = 4;
let percentage = 0.1;
let getDiscountedTotal = 1 - percentage;
let total = ductTapePrice * amountOfDuctTape;
if (amountOfDuctTape >= 3) {
    // Multiplication assignment operator:
    // - runs calculation and assigns the value at the same time for shorter code
  total *= getDiscountedTotal;
  // Line below does the same thing as the line above
//   total = total * getDiscountedTotal;
}
// console.log(total)
// Math Library
let ourPrice = 5;
let competitorPrices = [2, 3, 4, 6, 7, 8];
let compPrices = [4,5,56,67,8,89]
const comparePriceRange = (prices) => {
  let min = Math.min(...prices)
  let max = Math.max(...prices)
  let priceRange = max - min;
  return priceRange;
};
// console.log(comparePriceRange(competitorPrices));
// console.log(comparePriceRange(compPrices));
const upperLimit = 10
// console.log( Math.ceil(Math.random() * 10) )
// Math.floor() => rounds down to the nearest integer
// Math.ceil() => rounds up to the next integer
// Math.round() => rounds to the NEAREST integer(up or down)
// Math.min() => takes numbers in, returns lowest number
// Math.max() => takes numbers in, returns highest number
// Math.random() =>  returns a float between 0 and 1
// Math.abs() => returns the absolute value of a positive or negative number
// Math.trunc() => returns the integer version of the number (gets rid of everything after the decimal point)
// Math.sqrt() => returns the square root of a number
// Math.pow(x, y) => takes two numbers in, returns the value of the first argument raised to the power of the second argument
// Polya's Problem Solving Methodology: Find the Median
// 1. Understand the Problem
    // - what is a median? => middle number
    // - is it a clean data set, or are there repeating numbers?
    // - if the length of the data set is even, we take the average of the two middle numbers
// 2. Devise a Plan
// 3. Carry out the Plan
// 4. Revise for Edge Cases

const nums = [
    14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
    17, 12, 71, 18, 15, 12,
	@@ -138,5 +135,34 @@ const findTheMedian = (arr) => {
    // Return that number
    return uniqueArr[medianIndex]
}
// console.log(findTheMedian(nums))
// console.log(findTheMedian(five))



const unsortedNums = [735, 123, 23, 87, 3, -2, 0, 546]

// Sort() w no callback function passed to it
// Only looks at the first value/digit in the number/string
// console.log(unsortedNums.sort())

// Function below uses a ternary, which is short hand for an if statement
// In a ternary, we evaulate the expression that comes before the question mark
// If the value is truthy, then we return what comes after the question mark
// If the value i falsy, then we return what comes after the colon
const func = (a, b) => a < b ? -1 : 1

console.log(unsortedNums.sort(func))
console.log(unsortedNums.sort((a, b) => a < b ? -1 : 1))

const func2 = (a, b) => {
    if(a < b){
        return - 1
    } else {
        return 1
    }
}

console.log(unsortedNums.sort(func2))