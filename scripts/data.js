const userName = document.querySelector('.js-username');
const userPassword = document.querySelector('.js-password');
const userEmail = document.querySelector('.js-email');
const submitButton = document.querySelector('.js-submit-button');

const usersData = [];

submitButton.addEventListener('click', () => {
    const userNameValue = userName.value;
    const userPasswordValue = userPassword.value;
    const userEmailValue = userEmail.value;

    
    userName.value = '';
    userPassword.value = '';
    userEmail.value = '';

    usersData.push({
        name: userNameValue,
        password: userPasswordValue,
        email: userEmailValue
    })


})
