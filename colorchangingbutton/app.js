const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['red','blue','green','yellow','orange'];
button.addEventListener('click',colorgm);
function colorgm(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

}
