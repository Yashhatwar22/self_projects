(function() {
    const pictures = [
       "1",
       "2",
       "3",
       "4"
    ];
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const bkg = document.querySelector(".image-container"); // Added "document."
    let counter = 0;

    left.addEventListener('click', function(e) {
        counter--;
        if (counter < 0) {
            counter = pictures.length - 1;
        }
        bkg.style.background = `url('img/${pictures[counter]}.jpeg')`; // Used backticks (`) for the string
    })

    right.addEventListener('click', function(e) {
        counter++;
        if (counter >pictures.length - 1) {
            counter = 0;
        }
        bkg.style.background = `url('img/${pictures[counter]}.jpeg')`; // Used backticks (`) for the string
    })
})()
// (function(){
//     const pictures = [
//         "1",
//         "2",
//         "3",
//         "4"
//     ];
//     const buttons = document.querySelectorAll(".btn")
//     const imgdiv = document.querySelector(".image-container")
//     let counter=0;
//     buttons.forEach(function(button){
//         button.addEventListener('click',function(e){
//             if(button.classList.contains('btn-left')){
//                 counter--;
//                 if(counter<0){
//                     counter= pictures.length-1
//                 }
//                 imgdiv.style.background =`url('img/${pictures[counter]}.jpeg')`
//             }
//             if(button.classList.contains('btn-right')){
//                 counter++;
//                 if(counter>pictures.length-1){
//                     counter= 0
//                 }
//                 imgdiv.style.background =`url('img/${pictures[counter]}.jpeg')`
//             }
            
//         })
//     })


// })()
