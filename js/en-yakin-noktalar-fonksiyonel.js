function array(arr){
  const double = (x,y) => x*x + y*y;	
  const NewArray = arr.map( subarray => subarray.reduce(double),0);
    console.log( Math.min(...NewArray))
}
array([[1,9],[6,1],[3,1],[7,8],[0,9]]);
