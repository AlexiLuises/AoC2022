import fs from 'fs';

let diagram: string[][] = [[]]
let challengeDiagram: string[][] = [[]]
let instructions: number[][] = []
let arrayFormat: string[] = []
let challengeWord: string = ""
let secondChallengeWord: string = ""

const fileArray = fs.readFileSync('./instructions.txt', 'utf-8').split(/\r?\n/);

// diagram -> array
for (let i = 0; i < 8; i++) {
    for (let index = 1; index < fileArray[i].length; index+=4) {
        if (fileArray[i][index]!== " "){
            switch (index) {
                case 1:
                    diagram[0].push(fileArray[i][index])
                    break;
                case 5:
                    if(typeof diagram[1] === 'undefined') {
                        diagram[1] = []
                    }             
                        diagram[1].push(fileArray[i][index])
                    break;
                case 9:
                    if(typeof diagram[2] === 'undefined') {
                        diagram[2] = []
                    }             
                        diagram[2].push(fileArray[i][index])
                    break;
                case 13:
                    if(typeof diagram[3] === 'undefined') {
                        diagram[3] = []
                    }             
                        diagram[3].push(fileArray[i][index])
                    break;
                case 17:
                    if(typeof diagram[4] === 'undefined') {
                        diagram[4] = []
                    }             
                        diagram[4].push(fileArray[i][index])
                    break;
                case 21:
                    if(typeof diagram[5] === 'undefined') {
                        diagram[5] = []
                    }             
                        diagram[5].push(fileArray[i][index])
                    break;
                case 25:
                    if(typeof diagram[6] === 'undefined') {
                        diagram[6] = []
                    }             
                        diagram[6].push(fileArray[i][index])
                    break;
                case 29:
                    if(typeof diagram[7] === 'undefined') {
                        diagram[7] = []
                    }             
                        diagram[7].push(fileArray[i][index])
                    break;
                case 33:
                    if(typeof diagram[8] === 'undefined') {
                        diagram[8] = []
                    }             
                        diagram[8].push(fileArray[i][index])
                    break;
            }
        }
    }  
}
challengeDiagram = JSON.parse(JSON.stringify(diagram));

// converting instructions to number array
for (let index = 10; index < fileArray.length; index++) {
    arrayFormat = fileArray[index].replace(/\D+/g,' ').split(' ').splice(1);
    instructions.push(arrayFormat.map(Number))
}
// number - 1 since diagram starts from 1 and not 0
instructions.forEach((line,i) => {
    instructions[i][2] -= 1
    instructions[i][1] -= 1
});

// splicing array based on instruction and then adding it to required array
instructions.forEach((line,i,arr) => {
    let amount = instructions[i][0]
    let moveFrom = instructions[i][1]
    let moveTo = instructions[i][2]
    let movement =(diagram[moveFrom].splice(0,amount))
    let challengeMovement =(challengeDiagram[moveFrom].splice(0,amount))
    diagram[moveTo] = [...movement.reverse(),...diagram[moveTo]]
    challengeDiagram[moveTo] = [...challengeMovement,...challengeDiagram[moveTo]]
});

diagram.forEach((element,i) => {
    challengeWord += diagram[i][0] 
    secondChallengeWord += challengeDiagram[i][0]
});

console.log(challengeWord,secondChallengeWord)