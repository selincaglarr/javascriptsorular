
function loop(value,result,doo,test,update,body){
    if(test(value) == false){
              return(body(result));}
        else {    
          value=update(value);
          result=doo(result);
          update(value);
          doo(result);};
       loop(value,result,result=>(result*3)+1,n => n >=0, n => n - 1, console.log);
      }
      loop(4,0,result=>(result*3)+1,n => n>=0, n => n - 1, console.log)


      