/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        let set = new Set(s[i])
        for (let j = i + 1; j < s.length; j++) {
            if (set.has(s[j])) {
                if (set.size > longest) {
                    longest = set.size
                }
                break
            }else{
                set.add(s[j])
            }
        }
    }
    return longest
};

console.log(lengthOfLongestSubstring("abcabcbb")) 