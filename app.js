const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('pass');
const loginPage1 = document.getElementById('loginPage1');

// /////////////////// ((Sign Up Page Element Get))/////////////////////////////
const usernamePage2 = document.getElementById('username-create-Acc');
const mobNumPage2 = document.getElementById('mob-create-Acc');
const passPage2 = document.getElementById('pass-create-Acc');
const ConPassPage2 = document.getElementById('con-pass-create-Acc');
const gendPage2 = document.getElementById('gender-create-Acc');


loginPage1.addEventListener('submit' , (loginData) => {

    loginData.preventDefault();
console.log(login);


})


var  createAccount = () => {

window.location.assign('./createAccount.html')



}


var  loginAccount = () => {

window.location.assign('./index.html')



}


