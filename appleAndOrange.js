
var a=4;
var b=12;
var apple=[2,3,-4];
var orange =[3,-2,-4];
var s=7;
var t =10;

var j=0;
var k=0;
function appOrg(s,t,a,b,apple,orange){
    var m=apple.length;
    var n=orange.length; 
    for(let i=0;i<n;i++){
        // apple[i]= a+apple[i];
        
        if((a+apple[i])>=s && (a+apple[i])<=t){
               j=j+1;
        }
    }
        for(let i=0;i<m;i++){
        // orange[i]=b+orange[i];
        if((b+orange[i])>=s && (b+orange[i])<=t){
            k=k+1;
        }
    }
    console.log(j)
    console.log(k)

}

appOrg(s,t,a,b,apple,orange)