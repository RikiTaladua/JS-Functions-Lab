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