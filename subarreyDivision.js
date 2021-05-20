var s=[2,2,1,3,2];
var d=4;
m=2;
function birthday(s, d, m) {
    var n = s.length;
    var t=0;
    for(let i=0;i<n;i++){
        if(m===0){
            return;
        }
         if(m===1 && (s[i])===d){
    
            t+=1;
        }
         if(m===2 && (s[i]+s[i+1])===d){
            t+=1;
        }
         if(m===3 && (s[i]+s[i+1]+s[i+2])===d){
            t+=1;
        }
        if(m===4 && (s[i]+s[i+1]+s[i+2]+s[i+3])===d){
            t+=1;
        }
        if(m===5 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4])===d){
            t+=1;
        }
        if(m===6 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5])===d){
            t+=1
        }
        if(m===7 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6])===d){
            t+=1
        }
        if(m===8 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6]+s[i+7])===d){
            t+=1
        }
        if(m===9 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6]+s[i+7]+s[i+8])===d){
            t+=1
        }
        if(m===10 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6]+s[i+7]+s[i+8]+s[i+9])===d){
            t+=1
        }
        if(m===11 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6]+s[i+7]+s[i+8]+s[i+9]+s[i+10])===d){
            t+=1
        }
        if(m===12 && (s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]+s[i+5]+s[i+6]+s[i+7]+s[i+8]+s[i+9]+s[i+10]+s[i+11])===d){
            t+=1
        }
    }
    return t;
    }
    console.log(birthday(s, d, m));