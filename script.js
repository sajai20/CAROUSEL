'use strict'

let slide_position = 0;
const slidersEl = document.querySelectorAll('.slider_item');

const btnPrev = document.querySelector('#btn_prv');
const btnNext = document.querySelector('#btn_nxt');

const dot_container = document.querySelector('.dots');
const total_lenght = slidersEl.length;


btnPrev.addEventListener('click', function () {
    prevSlide();
});

btnNext.addEventListener('click', function () {
    nextSlide();
});

function updateposition() {
    slidersEl.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    })
    slidersEl[slide_position].classList.add('active');

    dots.forEach(slide => {
        slide.classList.remove('dot_active');
    })
    dots[slide_position].classList.add('dot_active');
}

function prevSlide() {
    if (slide_position == 0)
        slide_position = total_lenght - 1;
    else
        slide_position--;
    updateposition();
}

function nextSlide() {
    if (slide_position == total_lenght - 1)
        slide_position = 0;
    else
        slide_position++;
    updateposition();
}

slidersEl.forEach(slide => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot_container.appendChild(dot);
})

const dots = document.querySelectorAll('.dot');
dots[slide_position].classList.add('dot_active');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slide_position = index;
        updateposition();
    });
});

setInterval(() => {
    if (slide_position == total_lenght - 1)
        slide_position = 0;
    else
        slide_position++;

    updateposition();
}, 5000)