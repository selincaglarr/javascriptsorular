function array(arr){
  const NewArray = arr.map( subarray => subarray.reduce((x,y) => x*x + y*y),0);
  console.log(Math.min(...NewArray))
}
array([[1,9],[6,1],[3,1]]);
