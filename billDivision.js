var bill = [3,10,2,9];
var n=4;
var k=1;
var b=12;
function bonAppetit(bill, k, b) {
    // Write your code here
    var n=bill.length;
    var total = bill.reduce((a,b)=>{return a+b})
    var Bactual = (total-bill[k])/2;
    if(b-Bactual === 0){
        console.log("Bon Appetit");
    }else{
        console.log(b-Bactual)
    }

}bonAppetit(bill, k, b)