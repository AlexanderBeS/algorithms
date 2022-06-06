//1) разбиение входного массива данных на более мелкие, затем снова их дробление и так до тех пор,
// пока не останутся части из одного элемента;
// 2) слияние в правильном порядке (по умолчанию мы рассматриваем сортировку по возрастанию)
// всех мелких частей снова в более и более крупные и получение в итоге единого отсортированного массива.


const merge = (arrFirst, arrSecond) => {
    console.log('--------------------');
    console.log('arrFirst ', arrFirst, 'arrSecond ', arrSecond)
    const arrSort = [];
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        console.log(' Before push ', arrSort, arrFirst[i], '<', arrSecond[j]);
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++] //записывается текущий, а в while входит с +1
        );
        console.log(' After push ' + arrSort);
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    console.log('...arrSort', ...arrSort);
    console.log('...arrFirst.slice(i)', ...arrFirst.slice(i));
    console.log('...arrSecond.slice(j)', ...arrSecond.slice(j));
    console.log('--------------------');

    return [ //тут 'spread operator' (...) по сути значит, что мы из каждого массива выносим сами элементы
        ...arrSort,
        ...arrFirst.slice(i), //slice i потому что мы уже перенесли i элементов в arrSort
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    console.log('Вход в mergeSort' , arr);
    if (!arr || !arr.length) return null;
    if (arr.length <= 1) return arr;

    const middlePos = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, middlePos);
    const rightSide = arr.slice(middlePos);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}


const arr = Array.from({length: 8}, (() => parseInt(Math.floor(Math.random() * 40))));
console.log('Start array = ' + arr);
sortedArr = mergeSort(arr);
console.log('Sorted array = ' + sortedArr);
