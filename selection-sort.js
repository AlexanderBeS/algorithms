//В неотсортированном подмассиве ищется локальный максимум (минимум).
// Найденный максимум (минимум) меняется местами с последним (первым) элементом в подмассиве.
// Если в массиве остались неотсортированные подмассивы — смотри пункт 1.

let minId = 0;
const arr = Array.from({length: 10}, (() => parseInt(Math.floor(Math.random() * 40))));
console.log('Start array = ' + arr);

for (let i = 0; i < arr.length; i++) {
    minId = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minId]) {
            minId = j;
        }
    }
    [arr[i], arr[minId]] = [arr[minId], arr[i]]
}
console.log('Sorted array = ' + arr);
