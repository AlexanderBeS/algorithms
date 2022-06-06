const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let numbersNumber = 4;

for (let i = 0; i < numbersNumber; i++) {
    sum += arr[i];
}

console.log(sum); // сумма первых 4-ёх

for (let i = 1; i <= arr.length - numbersNumber; i++) {
    sum = sum - arr[i - 1] + arr[i + numbersNumber - 1]; //потому что мы отталкиваемся каждый раз от предыдущей суммы
    console.log(sum);
}

// работает за O(n) + O(numbersNumber)
