var arr= [-4, 3, -9, 0, 4, 1];
n=arr.length;
function frection(arr,n){
    var l=0,j=0,k=0;
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            j=j+1;
        }else if(arr[i]<0){
            k=k+1;
        }else{
            l=l+1;
        }
    }
    l=(l/n).toFixed(6);
    j=(j/n).toFixed(6);
    k=(k/n).toFixed(6);
    console.log(j,k,l);
}

frection(arr,n)
