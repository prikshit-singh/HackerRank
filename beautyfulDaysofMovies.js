var i=20;
var j=23;
var k=6;
var num=0;
for(let x=i;x<=j;x++){
    var i3=x.toLocaleString().split('').reverse().join('');
     i3=parseInt(i3);
     i3=Math.abs(i3-x);
    if(i3%k===0){
      num++;
    }
}
console.log(num)




//driver code;

// function beautifulDays(i, j, k) {
//     let count = 0;
//     // Step 1.
//     for (let x = i; x <= j; x++) {
//         // Step 4.
//         if (isBeautifulDay(x, k)) {
//             count++;
//         }
//     }
//     // Step 5.
//     return count;
// }

// function isBeautifulDay(x, k) {
//     // Step 3.
//     return differenceOfReverse(x) % k === 0;
// }

// function differenceOfReverse(x) {
//     let reversedX = parseInt(
//         x
//             .toString()
//             .split('')
//             .reverse()
//             .join('')
//     );
//     // Step 2.
//     return Math.abs(x - reversedX);
// }

// console.log(beautifulDays(i, j, k))