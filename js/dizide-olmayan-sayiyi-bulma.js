let nn=[];
function compare(arr){
 let n = Math.max(arr); //n eleman sayisi
 
  for(let i=1;i<=n;i++){
     nn.push(i)
  }
 let difference = nn.filter(x => arr.indexOf(x) === -1);
 console.log(difference);
  
};
console.log(compare([1,2,4,5,6]));