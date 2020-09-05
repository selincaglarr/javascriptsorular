function loop(value,test,update,body){

  if(test(value) == false){
     
  }
  else {
   body(value)
   update(value)
  value=update(value);
  loop(value,n => n > 0, n => n - 1, console.log)
}

}
loop(3, n => n > 0, n => n - 1, console.log)
 