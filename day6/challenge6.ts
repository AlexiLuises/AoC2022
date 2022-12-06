import fs from 'fs';

const checker = (step: number) =>{
    var variations: string[][] = [[]]
    let resultToReturn = false
    let count = 0;
    let firstInstance: string = ''
    const dataStream = fs.readFileSync('./datastream.txt', 'utf-8');
    for (let i = 0; i < dataStream.length -step-1; i++) {
        if (variations[i] == undefined) {
            variations[i] = []
        }
        for (let j = 0; j < step; j++) {
            let q = i + j
            variations[i].push(dataStream[q])
        }
    }
    variations.forEach((element,i) => {
        resultToReturn = variations[i].some((element, index) => {
            return variations[i].indexOf(element) !== index})
        if (!resultToReturn) {
            count += 1
                if (count == 1) {
                    firstInstance = variations[i].join('').toString()
                }
            }
    });
    console.log(dataStream.indexOf(firstInstance)+step);   
}
checker(4)
checker(14)


