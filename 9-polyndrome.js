/**
 * @param {number} x
 * @return {boolean}
 */
// stringe cevir reverse ele join ele


var isPalindrome = function(x) {
    return ("" + x).split("").reverse().join("") === "" + x
};