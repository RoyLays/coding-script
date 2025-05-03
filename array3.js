let arr = [78,12,62,74,36]
let item = 74;
let index = undefined

for(let i = 0;i<arr.length;i++){
    if (arr[i]==item)
    {
        index=i;
        break;
    }
}
console.log(index)
console.warn(arr)
arr.splice(1,1)
console.log(arr)
