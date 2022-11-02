let num=prompt( );
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}if(count==2){
    console.log("This is a Prime  Number");
}else{
    console.log("This is not a Prime  Number");
}
