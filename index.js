function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; i < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  接收一个数组，目标整数
  二层嵌套，遍历 index为i
  遍历第二遍 index为j = i++
  如果数组【i】 + 数组【j】 = target
  返回true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
