var k=3;
var a=[-1,-3,4,2];
var n=a.length;
var b =a.filter((a)=> a<=0);
console.log(b);
if(b.length>=k){
    console.log("NO")
}else{
    console.log("YES")
}