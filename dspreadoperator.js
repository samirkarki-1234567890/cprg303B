const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

//  a function called mergeArrays that takes two arrays as arguments and
//  returns a new array containing all elements from both arrays using '...'

function mergeArrays(a, b, c) {
    return [].concat(...a, ...b, ...c);
}

console.log(mergeArrays(a, b, c));

/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */