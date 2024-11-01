const nums = [2,4,7,8,11,14]
const target = 18


let results = []

for(let i=0; i<nums.length;i++){
    for(let j=1;j<nums.length-1;j++){
        sumOfTwo = nums[i]+nums[j];
        if(sumOfTwo == target)
        {
            results = results.push(nums[i], nums[j])
        }

    }
}
console.log(results)