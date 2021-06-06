var arr =[1,4,3,2];
var n= arr.length;
var start=0;
var end = n-1;
while(start<end){
    var temp = arr[start];
    var temp1=arr[end];
    arr[start]=temp1;
    arr[end]=temp;
    start++;
    end--;
    
}
console.log(arr);