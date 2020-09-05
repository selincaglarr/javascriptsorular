function array(...arr){
    let max = Math.max(...arr)
        for(let i=1 ; i<=max+1;i++){
            newarray=newarray.push(i);
        }
        let difference = newarray.filter(x => arr.indexOf(x) === -1 && x>0);
        console.log(difference);
}

console.log(array([1,2,0]));