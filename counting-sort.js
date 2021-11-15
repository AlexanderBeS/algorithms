
//ищем минимальный и максимальный элемент
//создаем массив с ключами по ключу от минимума до максимума
//подсчитываем сколько тех или иных цифр в изначальном массиве и записываем во второй
//создаём новый массив, который по порядку наполняем данными из 2-го массива

const arr = Array.from({length: 10}, (() => parseInt(Math.floor(Math.random() * 40))));
console.log('Start array = ' + arr);

let countArr = [];
let sortedArr = [];
let max = Math.max.apply(Math, arr);
let min = Math.min.apply(Math, arr);

// empty array with keys
for (let i = min; i <= max; i++) {
    countArr[i] = 0;
}

// count values
for (let i = 0; i <= arr.length-1; i++) {
    countArr[arr[i]] += 1;
}

// fill resulted array
for (let i = min; i <= max; i++) {
    while(countArr[i] > 0) {
        sortedArr.push(i);
        --countArr[i];
    }
}

console.log('Sorted array = ' + sortedArr);
