var arr = [[2, 3, 4], [5, 3, -1], [9, 8, -2]];
var n =arr.length
function diagonalDifference(arr) {
    // Write your code here
    var n=arr.length;
    var a=0;
    var b=0;
    console.log(n)
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j){
                a=a+arr[i][j];
            }
            if((i+j)===(n-1)){
                b=b+arr[i][j];
            }
        }
        
    }
    if(a>b){
        a=a-b;
    }else if(b>a){
        a=b-a;
    }else{
        a=0;
    }
    console.log(n);

}
diagonalDifference(arr)