let sum=0
let ucgensayisi=(n)=>{
    if(n==0) return;
    sum=(sum*3)+1
    ucgensayisi(n-1) 
    console.log(sum)
} 
ucgensayisi(4)