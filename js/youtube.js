function array(arr){
    for(let i=0;i<arr.length;i++){
        let sum=0;
            for(let k=0;k<2;k++){
                sum=sum+Math.pow(arr[i][k],2);
            } 
            sumarray.push(sum);
         } 
    let minsum=Math.min(...sumarray);
     console.log(minsum);
}
console.log(array([[1,9],[6,1],[3,1],[7,8],[0,9]]));