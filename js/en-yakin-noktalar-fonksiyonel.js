function array(arr){
  const NewArray = arr.map( subarray => subarray.reduce((x,y) => x*x + y*y),0);
  console.log(Math.min(...NewArray))
}
