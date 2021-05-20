var n=9;
ar=[10, 20, 20, 10, 10, 30, 50, 10, 20];
ar1=ar.sort();
var pair=0;
console.log(ar1)
for(let i=0;i<n;i++){
    if(ar1[i]===ar1[i+1]){
        pair++;
        i=i+1;
    }
}
console.log(pair)