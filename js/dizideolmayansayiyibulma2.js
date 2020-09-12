let full=[];
function compare(arr){
   let max= Math.max(arr); //n eleman sayisi
    dongu(max) 
}
function dongu(n){
   if(n==0)return;
   full.push(n)
   dongu(n-1)
} 
let difference = full.filter(x=>arr.indexOf(x) === -1);
console.log(difference);
compare([1,2,4,5,6]);
