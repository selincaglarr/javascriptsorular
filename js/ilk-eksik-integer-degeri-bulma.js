let fullarray=[]
function order(arr){
   let currentarray= arr.sort((a,b)=> a-b);
   let max=(Math.max(...arr))
      for(let i=1;i<=max;i++){
         fullarray.push(i)
      }
   let difference = fullarray.find(x => currentarray.indexOf(x) === -1);
   console.log(difference);
}
order([1,9,-2,6,3,2,7])
