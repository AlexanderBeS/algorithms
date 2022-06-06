let arr = [];
let maxNumber = 100;
let sum = 0;
let sumArr = [];
let sumArr2 = [];
let simpleNumber = 2;
let i;

function sieve() {
    // ключи, это по сути сами цифры
    for (let i = 2; i < maxNumber; i++) {
        arr[i] = true;
    }

    do {
        // помечаем как false все элементы, ключи которых делятся на текущий p
        for (i = 2 * simpleNumber; i < maxNumber; i += simpleNumber) { //i - по факту число, которое мы помечаем, как не простое
            arr[i] = false;
        }

        for (i = simpleNumber + 1; i < maxNumber; i++) {
            if (arr[i]) break; //поиск в уже отфильтрованных числах, простого числа, С КОТОРОГО начинать следующую проверку!!!!
        }

        simpleNumber = i;
    } while (simpleNumber * simpleNumber < maxNumber); // нет смысла считать, если p*p > n.

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += i;
            sumArr.push(i);
        }
    }

    console.log(sum);
    console.log(sumArr);

    return sumArr;
}

console.log(sieve(maxNumber))


// ВТОРОЙ СПОСОБ
let S;
let k;
let l;

function sieve2(n) {
    S = [];
    S[1] = false; // 1 - не простое число
    // заполняем решето единицами
    for (k = 2; k <= n; k++) S[k] = true;

    for (k = 2; k * k <= n; k++) {
        // если k - простое (не вычеркнуто)
        if (S[k] === true) {
            // то вычеркнем кратные k
            for (l = k * k; l <= n; l += k) {
                S[l] = false;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sumArr2.push(i);
        }
    }

    return sumArr2;
}

console.log(sieve2(100))
