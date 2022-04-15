
//statistics counting
let nums =document.querySelectorAll(".nums .num");
let statistics = document.getElementById('statistics')
let started = false;

window.onscroll = function(){
if(window.scrollY >= statistics.offsetTop){
        if(!started)
            nums.forEach(num =>startCount(num))
        started =true;
        }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        incress = el.textContent++;
        if(incress == goal){
            clearInterval(count)
        }
    },1000/goal)
}
window.requestAnimationFrame(startCount)



