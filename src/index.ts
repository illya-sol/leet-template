function twoSum(nums: number[], target: number): number[] {
  for (let i = nums.length; i > 0; i--)
    for (let j = 0; j < nums.length && i !== j; j++)
      if (nums[i] + nums[j] === target) return [j, i];

  return [0, 0];
}

console.log(twoSum([2, 7, 11, 15], 2));
