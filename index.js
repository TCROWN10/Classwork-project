function validateform(){
 const firstName = document.getElementById('fname');
 const lastName = document.getElementById('lname');
 const email = document.getElementById('email1');
 const password = document.getElementById('password1');


 const errorMessage1 = document.getElementById('errormessage1');
 const errorMessage2 = document.getElementById('errormessage2');
 const errorMessage3 = document.getElementById('errormessage3');
 const validateEmail = document.getElementById('validateEmail');
 const errorMessage4 = document.getElementById('errormessage4');


 const thanks = document.getElementById('thanks');
 const general = document.getElementById('General');
 

 let isValid = true; 
//  my regex expression
 function validateEmailInput(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
if (validateEmailInput(email.value)) {
    isValid = true;
    validateEmail.style.display = 'none'
} else {
    isValid = false;
    validateEmail.style.display = 'block'
}

 if (firstName.value === '') {
    errorMessage1.style.display = "block";
    isValid = false;
 } else {
    errorMessage1.style.display = 'none';
 }

 if (lastName.value === '') {
    errorMessage2.style.display = "block";
    isValid = false;
 } else {
    errorMessage2.style.display = 'none';
 }

 if (email.value === '') {
    errorMessage3.style.display = "block";
    isValid = false;
 } else {
    errorMessage3.style.display = 'none';
 }

 if (password.value === '') {
    errorMessage4.style.display = "block";
    isValid = false;
 } else {
    errorMessage4.style.display = 'none';
 }
 
 if (isValid) {
    thanks.style.display = 'block';
    general.style.display = 'none';
 }
}