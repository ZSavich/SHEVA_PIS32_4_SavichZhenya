"use strict";

const searchShow = document.querySelector('.main-header__search');
let navBtn = document.querySelector('.navigation__toggle');

function searchVisible() {
    const search = document.querySelector('.search');
    search.classList.toggle('hidden');
}

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('navigation__toggle--active');
    navBtn.parentElement.classList.toggle('navigation--close');
    document.querySelector('.main-header--index').classList.toggle('main-header--active');
});
searchShow.addEventListener('click', () => {searchVisible()});
