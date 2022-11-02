let number=9;
let factor=0;
for(let i=1;i<=number;i++){
    if(number%i==0){
        factor++;
    }
}if(factor==2){
    console.log("This is a Prime Number");
}else{
    console.log("This is not a Prime Number");
}
