var ar =[1,3,2,6,1,2];
var k=3;
var n =ar.length;
function divisibleSumPairs(n, k, ar) {
    // Write your code here
var pair=0;
for(let i=0;i<n;i++){
   for(let j=i;j<n;j++){
       if((ar[i]+ar[j+1])%k===0){
           pair+=1;
       }
   } 
}
return pair;
}
console.log(divisibleSumPairs(n, k, ar));