console.log("Enter the number")

let inp = Number(prompt("number Do"))//31
var va = inp ;

if(inp>0){
    
    var sum = 0;
    while(inp>0){//145
        var rem = inp%10;
        var fac = 1;
        for(i=1;i<=rem;i++){
            fac = fac*i;
        }
        var sum = sum + fac;
        inp = Math.floor(inp/10);
    }

(sum===va)?console.log(va+" is a strong number"):console.log(va+" is a not strong number")
}
