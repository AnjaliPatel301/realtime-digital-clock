const hourseHand=document.querySelector('#hours-hand')
const secondHand=document.querySelector('#second-hand')
const minuteHand=document.querySelector('#minute-hand')

function setdata(){
    const date=new Date()
    const second=date.getSeconds()/60;
    const minute=(second+date.getMinutes())/60;
    const hourse=(minute+date.getHours())/12;

    rotateClockHand(secondHand,second)
    rotateClockHand(minuteHand,minute)
    rotateClockHand(hourseHand,hourse)
    
}

function rotateClockHand(element,rotation){
element.style.setProperty('--rotate',rotation*360);
}

setInterval(setdata,1000);


// var sun=document.querySelector('.sun');
// var on=0;
// sun.addEventListener('click',()=>{
//     if(on == 0){
//         document.querySelector('body').style.backgroundColor="#000";
//        var className= document.getElementsByClassName('class')
//        className.style.color="#fff";
//        const clock= document.querySelector('.clock').style.backgroundColor="#000";
//        clock.style.style.boxShadow =  "15px 10px 20px 7px rgba(246, 241, 241, 0.89)"
//        on=1;
//     }
//    else{
//     on=0;
//     document.querySelector('body').style.backgroundColor="#fff";
//     var className= document.getElementsByClassName('class')
//     className.style.color="#000";
//     const clock= document.querySelector('.clock').style.backgroundColor="#fff";
//     clock.style.style.boxShadow ="  15px 10px 20px 7px rgba(79, 77, 77, 0.5)";
 
//    }
// })













//<i class="ri-moon-fill"></i>