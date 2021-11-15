//меняем местами рядом стоящие, если они стоят не в правильном порядке

const arr = Array.from({length: 10}, (() => parseInt(Math.floor(Math.random() * 40))));
//const arr = [10, 24, 28, 29, 33, 1, 13, 16, 4, 30];
let isSorted = false;
let counter = 0;

console.log('Start array = ' + arr);
for (let i = 0; i < arr.length; i++) {
    isSorted = true;
    for (let j = 1; j < arr.length; j++) {
        counter++;
        if (arr[j] < arr[j - 1]) {
            isSorted = false;
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        }
    }
    if (isSorted) break;
}

console.log('counter = ' + counter);
console.log('Sorted array = ' + arr);
