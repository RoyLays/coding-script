let unit = Number(prompt("Enter the Unit Reading"));

if(unit>=400){
    let pri = unit + (100*4.2)+(100*6)+(200*8)
}
else if(unit>200){
    let pri = unit + (100*4.2)+(100*6)
}
else if(unit>100){
    let pri = unit + (100*4.2)
}
else if(unit>0){
    let pri = unit
}
else{
    console.log("Wrong Input")
}
