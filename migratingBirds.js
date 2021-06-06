var ar = [1,4,4,4,5,3]
function migratoryBirds(arr) {
    // Write your code here
    var largest = 1;
    var counter = largest;
    var type = 0;    
    arr.sort();    
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.indexOf(arr[i]))
        // console.log(arr.lastIndexOf(arr[i]))
    largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
    console.log(largest)
    if (largest > counter) {
         counter = largest;
          type = arr[i];
    }
    
    }
    console.log(type);
}
migratoryBirds(ar)