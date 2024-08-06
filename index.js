const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})

function timer () {
    const date = new Date("September 1, 2024 15:00");
    const now = new Date();

    const diff = date - now;

    const sec = 1000;
    const min = 60 * 1000;
    const hour = 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/day);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%day)/hour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMin = Math.floor((diff%hour)/min);
    document.querySelector('.minutes').textContent = displayMin;

    const displaySec = Math.floor((diff%min)/sec);
    document.querySelector('.seconds').textContent = displaySec;

if (diff <= 0) {
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;

    clearInterval(timerID);
}
}

let timerID = setInterval(timer,1000);
timer();