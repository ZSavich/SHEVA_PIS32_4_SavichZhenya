"use strict";

const slidPrev = document.querySelector('.slider__prev');
const slidNext = document.querySelector('.slider__next');

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
        }
    };
}

slidNext.addEventListener('click', () => {sliderControl().nextSlide()});
slidPrev.addEventListener('click', () => {sliderControl().prevSlide()});