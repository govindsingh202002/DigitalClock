const clock=document.querySelector('.clock');
setInterval(function(){
let data=new Date();
let num=Math.round(Math.random*10+1);
clock.innerHTML=`${data.toLocaleTimeString()}` ;
},0)