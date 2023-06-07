// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3, 9));
// 2.
const maxOfThree = function (x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
};

console.log(maxOfThree(5, 10, 1));
// 3.
function isCharAVowel(s) {
    s = s.toLowerCase();
    return ('aeiouy'.indexOf(s) > -1);
}

console.log(isCharAVowel('b'));
// 4.
const sumArray = function (arr) {
    let sum = 0;
    arr.forEach(function (n) {
        sum += n;
    });
    return sum;
};

console.log(sumArray([5, 10, 1]));
// 5.
function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

console.log(multiplyArray([5, 10, 2]));
// 6.
const numArgs = function (...args) {
    return args.length;
};

console.log(numArgs('test', true, 5));
// 7.
function reverseString(s) {
    let arr = s.split('');
    return arr.reverse().join('');
}

console.log(reverseString('rockstar'));
