let amt = Number(prompt("Enter the total amount of RS. you want to diposit."));//Rs.5555

let famt=amt;
console.log("🏧We Support Tansaction atlesat of Rs.10")
console.log("🏧Money Requested : Rs."+amt)

    if(amt<10 && amt>0){
        console.log("Sorry,Request Not Complete")
    }

    if (amt>=500){
        console.log("No. of 500 Notes :"+Math.trunc(amt/500))
        amt-= 500*(Math.trunc(amt/500))
    }
    if (amt>=200 && amt<500){
        console.log("No. of 200 Notes :"+Math.trunc(amt/200))
        amt-= 200*(Math.trunc(amt/200))
    }
    if (amt>=100 && amt<200){
        console.log("No. of 100 Notes :"+Math.trunc(amt/100))
        amt-= 100*(Math.trunc(amt/100))
    }
    if (amt>=50 && amt<100){
        console.log("No. of 50 Notes :"+Math.trunc(amt/50))
        amt-= 50*(Math.trunc(amt/50))
    }
    if (amt>=20 && amt<50){
        console.log("No. of 20 Notes :"+Math.trunc(amt/20))
        amt-= 20*(Math.trunc(amt/20))
    }
    if (amt>=10 && amt<20){
        console.log("No. of 10 Notes :"+Math.trunc(amt/10))
        amt-= 10*(Math.trunc(amt/10))
    }
    
console.log("🏧Remaning Money can't be withdrawed "+(amt));    