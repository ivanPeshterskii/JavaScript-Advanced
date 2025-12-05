function printArrayWithDelimiter(arr, delimiter){

    const result = arr.join(delimiter);

    console.log(result);
}
printArrayWithDelimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'*');