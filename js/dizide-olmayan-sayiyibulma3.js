function array(arr){
	let max=Math.max(...arr)
	let toplam=arr.reduce((x,sum)=>x+sum,0)
	return console.log(toplam-(max*(max-1)/2))
}
array([1,2,4,5,6]);
