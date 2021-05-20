var n=2;
var p=1;
var x=0;

if(n/2<p){
if((n%2)===0 && (n-p)===1){
    x=1;
    
} else if(n%2==1 && n-p==1){
    x=0;
}else{
    x= Math.floor((n-p)/2);
}
}


else{
    x=Math.floor(p/2)
}

console.log(x)
