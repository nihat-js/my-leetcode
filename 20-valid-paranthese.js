/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	openArray = []

	for (const character of s) {
		if (character == "(" || character == "{" || character == "[") {
			openArray.push(character)
		}
		else if ((character == ")" && openArray.at(-1) == "(")
			|| (character == "}" && openArray.at(-1) == "{")
			|| (character == "]" && openArray.at(-1) == "[")
		) {
			openArray.pop()
		} else {
			return false
		}
	}
	return openArray.length === 0
};

case1 = "()[}{}"


console.log(isValid(case1))