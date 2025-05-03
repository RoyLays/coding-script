let arr1 = [12,52,65,84]
let arr2 = [89,65,98,73,78]

// let arr3 = [...arr1,...arr2]
// console.warn(arr3) Shotcut To Merge Array SPREAD OPARATOR
let mergearr = []

for(let i=0;i<arr1.length;i++){
    mergearr[i] = arr1[i]
}
console.log(mergearr)

for(i=0;i<arr2.length;i++){
    mergearr[arr1.length+i]=arr2[i]
}
console.log(mergearr)

console.log(mergearr.reverse())
