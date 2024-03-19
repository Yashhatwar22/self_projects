(function(){
const input =document.querySelector(".input");
const submit =document.querySelector("#btn");
const output =document.querySelector(".output");
const feedback =document.querySelector(".feedback");
submit.addEventListener('click',function(e){
    e.preventDefault()
    if(input.value===''){
        feedback.classList.add('show')
        output.textContent =''
        setTimeout(function(){
            feedback.classList.remove('show')
        },4000)
    }else{
        output.textContent = input.value
        input.value = ''
    }

})


})()