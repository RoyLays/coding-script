arr1= [10,20,30,40,50,60]
arr2=[25,32,41,59]
arr3 = []
n1 = 0
n2 = 0
n3 = 0

while(n1<arr1.length && n2<arr2.length && n3<(arr1.length+arr2.length-1)){
    if(arr1[n1]<arr2[n2])
    {
        arr3[n3]=arr1[n1]
        n1++
    }
    else
    {
        arr3[n3]=arr2[n2]
        n2++
    }
    n3++
}
console.log(arr3)
console.log(n2)