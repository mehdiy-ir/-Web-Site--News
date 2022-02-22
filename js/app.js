const slides = document.querySelector('.up-right');
const slider= slides.childElementCount;
const maxleft = (slider -1) * 100 * -1;

let changer = 0;

 setInterval(function(){
    if(changer > maxleft){
        changer -= 100;
        slides.style.right = changer + '%'
    }
    else{
        changer =0
        slides.style.right = 0
    }
 },4000)