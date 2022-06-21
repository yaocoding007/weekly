/**
 * 633. 平方数之和
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
 * https://leetcode.cn/problems/sum-of-square-numbers/description/
 */

 function judgeSquareSum(c: number): boolean {
    if([0, 1].includes(c)) {
        return true
    }   
    let min = 0, max = Math.floor(Math.sqrt(c));
    while(min <= max) {
        const target = Math.pow(min, 2) + Math.pow(max, 2)
        if(target === c) {
            return true
        }else if(target < c) {
            min++;
        }else {
            max--;
        }
    }
    return false
};

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(3)); // false
