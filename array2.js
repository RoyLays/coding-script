console.log("Insert a Array")
let arr = [23,58,94,78,52]
console.log("Your Array is "+arr)
console.log("Enter your new element")
let newe = 1000
let position = 4

for(let i=arr.length-1;i>=0;i--){
    
    if(i>=position)
    {
        arr[i+1] = arr[i]
        if(i==position)
        {
            arr[i]=newe;
        }
    }

}
console.log(arr)