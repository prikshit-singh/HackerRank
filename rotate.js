var a=[1,2,3,4,5];
var n = a.length;
var d=4;
function rotate(a,d){
    var n = a.length;
    for(let i=0;i<d;i++)
        rotateLe(a,n);
        
    


    function rotateLe(a,n){
        var temp,i;
        temp=a[0];
        for(i=0;i<n;i++)
            a[i]=a[i+1];
            a[n-1]=temp;
       
        }
    
    }


// function printArray(arr,n){
//     for(let i=0;i<n;i++)
//     console.log(arr[i])
// }

rotate(a,d)
// printArray(a,n)
console.log(a)