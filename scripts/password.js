const userPassword = document.querySelector('.js-password');
const passwordIcon = document.querySelector('.js-password-view-icon');

passwordIcon.addEventListener('click', () => {
    if(userPassword.type == 'password'){
        userPassword.type = 'text';
        passwordIcon.src = './icons/eye-closed.png'
    }
    else{
        userPassword.type = 'password';
        passwordIcon.src = './icons/eye-open.png'
    }
})