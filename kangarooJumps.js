function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    if(v1 < v2 || (x2 - x1) % (v1 - v2) !== 0){
        return "NO";
    }else{
        return "YES";
    }

}
x1=0,v1=1,x2=1,v2=2;
kangaroo(x1, v1, x2, v2)