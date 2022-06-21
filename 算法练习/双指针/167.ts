/**
 * 167. 两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 */

 function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if(sum === target) {
            return [left+1, right+1]
        } else if(sum > target) {
            right--;
        }else {
            left++;
        }
    }
    return []
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]