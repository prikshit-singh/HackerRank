
for(let i=0;i<n;i++){
var x=Math.floor(first/2);
 Cumulative+=x;
 first=Math.floor(x*3);
}
//driver code
var n=5;
var first=5;
var Cumulative=0;
console.log(Cumulative);