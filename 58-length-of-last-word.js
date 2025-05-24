/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(" ").filter(item => item.trim() != "" ).at(-1).length
};

// asan