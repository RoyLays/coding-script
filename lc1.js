let nums = [2,6,5,7,9]
target = 7

for(let i=0;i<nums.length;i++){
    for(let f=0;i<nums.length;f++){
        
        if(i!=f){
            let sum = nums[i]+nums[f]
            let sumarr = [nums[f],nums[i]]
            if(sum == target){
                console.log(sumarr)
            }
        }

        
    }
}