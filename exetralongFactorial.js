var n=25;
var total=0;
function extraLongFactorials(n) {
    // Write your code here
        let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    console.log(String(factorial(BigInt(n))));

    
}
extraLongFactorials(n)
