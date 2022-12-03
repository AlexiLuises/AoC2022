import fs from 'fs';

const fileArray = fs.readFileSync('./inventory.txt', 'utf-8').split(/\r?\n/);

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars: string[] = []
let score: number = 0

type Group = string[];
const groups: Group[] = [];
let currentGroup: string[] = [];
let groupScore: number = 0

fileArray.forEach((line)=>{
    const first = line.slice(0, line.length/2).split('')
    const second = line.slice(line.length/2, line.length)
    for(const c of first){
        if(second.includes(c)){
            chars.push(c)
            break;
        }
    }
})
chars.forEach((c) =>{
    score += priorities.indexOf(c)+1;
})
console.log(score)


// Challenge 2
fileArray.forEach((line, i) => {
	currentGroup.push(line);

	if ((i > 0 && !((i + 1) % 3)) || i == fileArray.length - 1) {
		groups.push(currentGroup);
		currentGroup = [];
	}
});
groups.forEach((group: string[]) => {
	const [line1, line2, line3] = group;

	for (const l of line1) {
		if (line2.includes(l) && line3.includes(l)) {
			groupScore += priorities.indexOf(l) + 1;
			break;
		}
	}
});
console.log(groupScore);








