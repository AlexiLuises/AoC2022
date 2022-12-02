import { readFileSync } from 'fs';

const elFood: number[][] = [[]];
const sumArr:number[] = []
const numberArray:number[] = [];
let count: number = 0
let sum: number = 0
let highestSum: number = 0
let highestSumIndex: number = 0


const file = readFileSync('./food.txt', 'utf-8').split(/\r?\n/);
for (let index = 0; index < file.length; index++) {
   numberArray.push(parseInt(file[index]));
   if (isNaN(numberArray[index])) {
    count ++;
    elFood[count] = []
}
else {
    elFood[count].push(numberArray[index])
}
}
for (let index = 0; index < elFood.length; index++) {
        sum = 0
    for (let j = 0; j < elFood[index].length; j++) {
        sum += elFood[index][j]
        sumArr.push(sum)
        if (sum > highestSum){
            highestSum = sum;
            highestSumIndex = index
        } 
    }
}
sumArr.sort((n1,n2) => n1 - n2)
const lastthree = sumArr.slice(-3)
const sumOfThree = lastthree.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

console.log(sumOfThree)
// console.log(highestSum,elFood[highestSumIndex],lastthree )

