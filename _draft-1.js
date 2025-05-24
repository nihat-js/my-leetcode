
function findPairs(arr, sum) {
	let numbers = []
	let obj = {}
	for (let i = 0; i < arr.length; i++) {
		let firstPart = arr[i]
		let secondPart = sum - firstPart
		console.log(firstPart, secondPart)
		if (firstPart in obj) {
			numbers.push(firstPart, secondPart)
			break
		}
		obj[secondPart] = true

	}
	console.log(obj)
	return numbers

}

const arr = [1, 5, 3, 8, 2, 3]
const numbers = findPairs(arr, 9)
console.log(numbers.join(' '))