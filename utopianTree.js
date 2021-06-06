function utopianTree(n) {
    // Write your code here
    
    var height=1;
    if(n===0){
         return height;
            
        }else{
            for(let i=1;i<=n;i++){
                if(i%2!==0){
                    height=height*2;
                }else{
                    height=height+1;
                }
            }
        }
        
        return height;
}


//calling function
var n=4;
console.log(utopianTree(n))