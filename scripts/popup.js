const submitBtn = document.querySelector('.js-submit-button');
const popUp = document.querySelector('.js-popup');

submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        popUp.style.display = 'flex';
    }, 1000)
})