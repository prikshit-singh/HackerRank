var a=[1,2,3,4];
var b=[3,2,1,2];
function compareTriplets(a, b) {
    // Write your code here
    var c=[0,0];
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            c[0]=c[0]+1;
        }else if(a[i]<b[i]){
            c[1]+=1;
        }
    }
console.log(c)
}
compareTriplets(a, b)