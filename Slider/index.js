const slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next');

let index = 0;

const activeSlide = n =>{
    for(let slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n =>{
    for(let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>{
    activeSlide(index);
    activeDot(index);
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) =>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide,2000);