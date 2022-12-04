import fs from 'fs';
import { range } from 'yutolity';

const fileArray = fs.readFileSync('./pairs.txt', 'utf-8').split(/\r?\n/);

let count: number = 0
let c2Count: number = 0

fileArray.forEach((line,i,arr)=>{
    const arrayFormat = line.replace(/[^0-9 ]/g, ' ').split(' ');
    const pairings = arrayFormat.map(Number)
    let firstOne = range(pairings[0],pairings[1])
    let secondOne = range(pairings[2],pairings[3])
    
    if (firstOne[0] == 0) {
        firstOne[0] = pairings[0]
    }
    if(secondOne[0] == 0) {
        secondOne[0] = pairings[3]
    }

    const areaMatch = firstOne.every(element => {
        return secondOne.includes(element);
      });
    const areaTwoMatch = secondOne.every(element => {
        return firstOne.includes(element);
      });

      if (areaMatch == true || areaTwoMatch == true) {
        count +=1
      }
      const challenge2found = firstOne.some(e => {
          return secondOne.includes(e)
        })
        if (challenge2found == true) {
          c2Count +=1
        }
    })
    console.log(count)
    console.log(c2Count)