// из всего массива выбираем одно число.
// по отношению к нему сортируем слева, те которые меньше, справа, которые больше.
// и так проходимся по частям, пока не отсортируются
// потом все части объединяем

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let leftPart = [];
    let rightPart = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            leftPart.push(arr[i]);
        }
        if (pivot <= arr[i]) {
            rightPart.push(arr[i]);
        }
    }

    return quickSort(leftPart).concat(pivot, quickSort(rightPart));
}

const arr = Array.from({length: 10}, (() => parseInt(Math.floor(Math.random() * 40))));
console.log('Start array = ' + arr);

sortedArr = quickSort(arr);


console.log('Sorted array = ' + sortedArr);
