var ar =[1,4,3,2,5,4]

function simpleArraySum(ar) {
    // Write your code here
    var sum=0;
    for(let i=0;i<ar.length;i++){
        sum=sum+ar[i]
    }
return sum;
}

console.log(simpleArraySum(ar));