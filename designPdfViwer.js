
var h="13131413255555555555555557";
var word="abc";
function designerPdfViewer(h, word) {
    // Write your code here
    var alphabate="abcdefghijklmnopqrstuvwxyz";
    alphabate=alphabate.split('')
    word=word.split('');
    let num=new Array();
    for(let j=0;j<word.length;j++){
for(let i=0;i<26;i++){
    if(alphabate[i]===word[j]){
num[j]=h[i];   }
}
}
num=num.sort((a,b)=>{return b-a});
return num[0]*num.length;

}


// driver code
var h="13131413255555555555555557";
var word="abc";
console.log(designerPdfViewer(h, word))