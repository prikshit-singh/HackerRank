var a=[30,23,12];
var b=[12,15,13]

function compareTriplets(a, b) {
    // Write your code here
    var c=[0,0];
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            c[0]+=1;
        }else if(a[i]<b[i]){
            c[1]+=1;
        }
    }
return c
}

console.log(compareTriplets(a,b));