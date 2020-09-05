let result=0;
    function ucgen(n){
       a=n; 
        do{
           result=(result*3)+1;
           n--;
        } 
         while(n>=0);
console.log(a +" .seviyede " +result+ "tane ucgen")} ;          
console.log(ucgen(4));