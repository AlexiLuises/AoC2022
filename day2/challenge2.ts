import { readFileSync } from 'fs';

let fullRoundScore: number = 0; 
let challengeTwoScore: number = 0;
var rps: [string, number, number][] = [["A X", 4, 3], ["B X", 1, 1], ["C X", 7, 2], ["A Y", 8, 4], ["B Y", 5, 5], ["C Y", 2, 6], ["A Z", 3, 8],["B Z", 9, 9],["C Z", 6, 7] ]

const file = readFileSync('./rps.txt', 'utf-8').split(/\r?\n/);
file.map((index,i) => {
    rps.map((rpsindex,j)=>{
        switch (rps[j][0] == file[i]) {
            case true:
               fullRoundScore += rps[j][1];
               challengeTwoScore += rps[j][2]; 
            break;
        }
    })
});
console.log(fullRoundScore, challengeTwoScore)