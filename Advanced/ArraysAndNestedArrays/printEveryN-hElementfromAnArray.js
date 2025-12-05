function printNthElement(arr, step){
    const result = [];

    for (let index = 0; index < arr.length; index++) {
        result.push(arr[index]);
    }

    return result;
}
printNthElement(['5',
'20',
'31',
'4',
'20'],
2);