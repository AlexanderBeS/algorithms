const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    if (!arr || !arr.length) return null;
    if (arr.length <= 1) return arr;

    const middlePos = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, middlePos);
    const rightSide = arr.slice(middlePos);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}


const arr = Array.from({length: 11}, (() => parseInt(Math.floor(Math.random() * 40))));
console.log('Start array = ' + arr);
sortedArr = mergeSort(arr);
console.log('Sorted array = ' + sortedArr);



