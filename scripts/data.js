const userName = document.querySelector('.js-username');
const userPassword = document.querySelector('.js-password');
const userEmail = document.querySelector('.js-email');
const submitButton = document.querySelector('.js-submit-button');
const popUp = document.querySelector('.js-popup');

const usersData = JSON.parse(localStorage.getItem('userdata')) || [{}];

submitButton.addEventListener('click', () => {
    const userNameValue = userName.value;
    const userPasswordValue = userPassword.value;
    const userEmailValue = userEmail.value;

    


   

    if(userNameValue === '' || userPasswordValue === '' || userEmailValue === ''){
        console.log('null')
    }
    else{
        usersData.push({
            name: userNameValue,
            password: userPasswordValue,
            email: userEmailValue
        })

        setTimeout(() => {
            popUp.style.display = 'flex';
        }, 1000)
        
        setTimeout(() => {
            
           

            userName.value = '';
            userPassword.value = '';
            userEmail.value = '';

            document.open('portfolio.html');
        }, 3000)

        
    }

    localStorage.setItem('userdata', JSON.stringify(usersData));

    console.log(usersData)


})


console.log(usersData)