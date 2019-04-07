"use strict";

const slidPrev = document.querySelector('.slider__prev');
const slidNext = document.querySelector('.slider__next');
const sliders = document.querySelectorAll('.slider__item');
let status = document.querySelector('.slider__status i');
let length = document.querySelector('.slider__status b');

length.innerHTML = '\\0'+sliders.length;

function sliderControl() {
    const slider = document.querySelector('.slider__list');
    let activeSlide = slider.querySelector('.slider__item:not(.hidden');





    return {
        nextSlide: function() {
            if(activeSlide === slider.querySelector('.slider__item:last-child')) {
                let nextSlide = slider.querySelector('.slider__item');
                activeSlide.classList.toggle('hidden');
                nextSlide.classList.toggle('hidden');
                activeSlide = nextSlide;
            } else {
                let nextSlide = activeSlide.nextElementSibling;
                activeSlide.classList.toggle('hidden');
                nextSlide.classList.toggle('hidden');
                activeSlide = nextSlide;
            }

            for(let i = 0 ; i < sliders.length ; i++) {
                if(sliders[i] === activeSlide)
                    status.innerHTML = '0'+(i+1);
            }
        },
        prevSlide: () => {
            if(activeSlide === slider.querySelector('.slider__item:first-child')) {
                let prevSlide = slider.querySelector('.slider__item:last-child');
                activeSlide.classList.toggle('hidden');
                prevSlide.classList.toggle('hidden');
                activeSlide = prevSlide;
            } else {
                let prevSlide = activeSlide.previousElementSibling;
                activeSlide.classList.toggle('hidden');
                prevSlide.classList.toggle('hidden');
                activeSlide = prevSlide;
            }
            for(let i = 0 ; i < sliders.length ; i++) {
                if(sliders[i] === activeSlide)
                    status.innerHTML = '0'+(i+1);
            }
        }
    };
}

slidNext.addEventListener('click', () => {sliderControl().nextSlide()});
slidPrev.addEventListener('click', () => {sliderControl().prevSlide()});