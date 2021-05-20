var ar=[1,4,3,2,5]

function aVeryBigSum(ar) {
    // Write your code here
    ar=ar.reduce((a,b)=>{return a+b});
    return ar;
}

console.log(aVeryBigSum(ar));