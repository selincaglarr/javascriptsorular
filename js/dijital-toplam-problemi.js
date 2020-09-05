let sum=0;
function sayi(n){   
    let difference=Math.floor(n%9);
    let count=Math.floor(n/9);
  if(n<=9){
       console.log(1*10+(n-1));
  }
  else{
           for(let i=0;i<count;i++){
              sum=sum+Math.pow(10,i)*9
            }
    let totalsum=sum+difference*Math.pow(10,count);
      console.log(Math.floor(totalsum));
  }
}
console.log(sayi(66));




