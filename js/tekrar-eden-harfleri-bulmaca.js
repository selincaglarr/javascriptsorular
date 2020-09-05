function string(str){
    let lowstr=str.toLowerCase();
    let usingSplit =lowstr.split('');
    cnt(usingSplit);
 } 
 
function cnt(arr){
    let result = {};
    arr.forEach(function(x) {
    result[x] = (result[x] || 0) + 1;});
    console.log(result);
};

console.log(string("Hello World"));