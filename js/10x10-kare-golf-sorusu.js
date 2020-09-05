//kac kez isteniliyorsa o kadar yildiz yazmali 
let    arrays=[]   
for(let i=0;i<10;i++){
      arrays.push(`*`); 
      arrays=arrays.join("");
}
function repeat(n){
    for(let i=0;i<=n;i++)
 console.log(arrays);
}
repeat(10);

//kac kez isteniliyorsa o kadar yildiz yazmali 
let    arrays=[]   
function repeat(n,action){
    for(let i=0;i<n;i++){
        arrays.push("*")
    }
    for(let k=0; k<n ; k++){
        action(arrays.join(""))
    }
}
repeat(10,console.log);
