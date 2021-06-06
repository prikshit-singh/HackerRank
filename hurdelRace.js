var k=4; 
var height=[1,6,3,5,2];

function hurdleRace(k, height) {
    // Write your code here
    height=height.sort((a,b)=>{return b-a});
// console.log(height);
if(k<height[0]){
    return height[0]-k;
}else{
    return 0;
}
}

console.log(hurdleRace(k,height))