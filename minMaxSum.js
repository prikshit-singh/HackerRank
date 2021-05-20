var arr=[1,3,5,7,9]
function miniMaxSum(arr) {
    // Write your code here
    arr=arr.sort((a,b)=>{return a-b})
    var n=arr.length;
    var min=0;
    var max=0;
    for(let i=0;i<n-1;i++){
        min=min+arr[i];
    }
    for(let i=1;i<n;i++){
        max=max+arr[i];
    }
   console.log(min,max);
}
miniMaxSum(arr)