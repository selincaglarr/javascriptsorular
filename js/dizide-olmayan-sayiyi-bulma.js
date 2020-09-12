let newarray=[]
function array(arr){
   let max=(Math.max(...arr))
       for(let i=1;i<=max;i++){
        newarray.push(i)
       }
let difference = newarray.filter(x => arr.indexOf(x) === -1);
console.log(difference);
}
array([1,3,0,7]);
