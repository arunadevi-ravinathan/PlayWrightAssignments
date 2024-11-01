//count of occurance in the array

const k=2

function numOfOccurance(nums,k){
    counter = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==k){
            counter++
        }
    }
    return counter;
}
let occurance= numOfOccurance([2,4,5,2,1,2],2) //nums=2,4,5,2,1,2 and k=2
console.log(`the occurance of ${k} in the array is ${occurance}`)