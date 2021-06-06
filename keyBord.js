var b=5;
var keyboard=[4]
var drives = [5];
var k1 = keyboard.sort();
var d1=drives.sort();
var sum=0;
var final=-1;


for(let i =0;i<k1.length;i++){
    for(let j=0;j<d1.length;j++){
        sum=k1[i]+d1[j];
        
        
        if(sum>final && sum<b && final<b){
            final=sum;
        }
        
    }
    
}


console.log(final)

var Pos = Math.abs(20);
