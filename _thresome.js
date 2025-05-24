/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let result = []
	let i = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					let triplet = [nums[i], nums[j], nums[k]];
					triplet.sort((a, b) => a - b);
					let isDuplicate = result.some((r) => {
						return r[0] === triplet[0] && r[1] === triplet[1] && r[2] === triplet[2]
					})
					if (isDuplicate) {
						continue;
					}else{
						result.push(triplet);
					}
				}
			}
		}


	};
	return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

