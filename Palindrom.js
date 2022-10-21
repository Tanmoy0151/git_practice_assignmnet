let num=2021;
let bag="";
for(let i=num.length-1;i>=0;i--){
    bag+=num[i];
}
if(bag==num){
    console.log("This is a Palindrom");
}else {
   console.log("This is not a Palindrom");
}
