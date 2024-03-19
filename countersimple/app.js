(function(){
const a =document.querySelector(".lower")
const b=document.querySelector(".add")
const display=document.querySelector(".output")
let count=0;
a.addEventListener('click',function(e){
   count--;
   display.textContent=count;
})
b.addEventListener('click',function(e){
   count++;
   display.textContent=count;
 })



})()