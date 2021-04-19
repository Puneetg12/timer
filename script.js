var timer

//Interval of timer

function interval(){
    sec=document.getElementById('sec')
    timer=setInterval(() => {
        if(sec.value>0){
            sec.value--
        }

        if(sec==0){
            clearInterval(timer)
        }
    }, 1000);
}
function startTimer(){
    interval()
    document.getElementById('start').disabled=true;
}
function pauseTimer(){
    clearInterval(timer)
    document.getElementById('start').disabled=false;
}