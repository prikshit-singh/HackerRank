var scores=[3,4,21,36,10,28,35,5,24,42]
function breakingRecords(scores) {
    // Write your code here
    var highestScore=scores[0];
   var lowerScore=scores[0];
    var score=[0,0];
    
    for(let i in scores){
        if(scores[i]>highestScore){
            highestScore=scores[i];
            score[0]+=1;
            
        }
        if(scores[i]<lowerScore){
            lowerScore=scores[i];
            score[1]+=1;
            
        }
    }
   return score;
}
console.log(breakingRecords(scores))