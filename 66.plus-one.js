/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 999
// 1
   0

var plusOne = function(digits) {
	if (digits.at(-1) != 9 ){
		digits[digits.length-1] += 1;
		return digits;
	}
	let memory = 1
	for (let i = digits.length -1; i > -1; i--) {
		let sum = digits[i] + memory;
		if (sum < 10) {
			digits[i] = sum;
			return digits;
		}else{
			memory = 1
			digits[i]= 0
		}
	}
	if (memory === 1){
		digits.unshift(1);
	}
	return digits
};


// @lc code=end

