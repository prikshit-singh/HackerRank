var candles=[4,4,1,3]
function birthdayCakeCandles(candles) {
    // Write your code here
    var arr=candles.sort((a,b)=>{return a-b});
    var n=arr.length;
    var largest = arr[n-1];
    let count=0;
    for(let i=0;i<n;i++){
        if(arr[i]===largest){
            count=count+1;
        }
    }
     return count;
}
birthdayCakeCandles(candles) 