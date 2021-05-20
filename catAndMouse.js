var x=1;
var y=2;
var z=3;
console.log(Math.abs(y-z));
if((Math.abs(x-z)>Math.abs(y-z))){
    console.log("Cat A")
}else if((Math.abs(x-z)<Math.abs(y-z))){
    console.log("Cat B")
}else{
    console.log("Cat c")
}