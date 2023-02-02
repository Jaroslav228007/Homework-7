function spliceArray(array){
    const start = array.indexOf('JavaScript');
    const arr = array.splice(start, 3);
    return arr;
}
const secondPart = spliceArray(['I', 'study', 'JavaScript', 'right', 'now']);
// --------------------------------------
function sliceArray(array){
    const arr = array.slice(0, 2);
    return arr;
}
const firstPart = sliceArray(['I', 'study', 'JavaScript', 'right', 'now']);
console.log(firstPart);
// -------------------------------------
function concatArr(array1, array2){
    const arr = array1.concat(array2);
    const a = arr.join(' ');
    return a;
}
const message = concatArr(firstPart, secondPart);
console.log(message);
