let score=[100,90,80,70,65,60,50,30,0];
let scoreletter=["AA","BA","BB","CB","CC","DD","FD","FF","FF"];
function compare(scr){
    for(let i=score.length-1 ; i>=0 ; i--){
        if( scr>=score[i] && scr<score[i-1]){
            console.log(scoreletter[i-1]);
        }
     }
}
console.log(compare(29));
