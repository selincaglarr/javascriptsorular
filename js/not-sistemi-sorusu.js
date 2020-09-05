
let score=[100,89,79,69,64,59,49,30,0];
let scoreletter=["AA","BA","BB","CB","CC","DD","FD","FF",];
function compare(scr){
    for(let i=score.length-1;i>0;i--){
        if(scr<score[i-1] && scr>=score[i]){
               console.log(scoreletter[i-1]);
        }
        else if (scr==100){
          console.log(scoreletter[0]);
        }
     }
}
 console.log(compare(0));
