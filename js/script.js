//define variables
let userName = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    confirmPass = document.getElementById('confirm'),
    userMessage = document.querySelector('.usermessage'),
    passMessage = document.querySelector('.passmessage'),
    submitBtn = document.getElementById('submit');

//add event to the button submit
submitBtn.addEventListener('click',function(event){
  // check the validation of username and mail
    if(userName.value == "" || email.value == ""  ){
        event.preventDefault();
        userMessage.style.display = 'block';
        userMessage.innerHTML = 'these feilds are requird**';
       
  // check the validation of password and confirm password
    }else if(password.value == "" || confirmPass.value == ""){
        event.preventDefault();
        passMessage.style.display = 'block';
        passMessage.innerHTML = 'these feilds are requird**';
       
  //check the length of username
    }else if(userName.value.length < '6'){
           event.preventDefault();
           userMessage.style.display = 'block';
           userMessage.innerHTML = '*username should be more than 6 letter'
  //check the length of password
    }else if(password.value.length < '8' || password.value.length > '20' ){
        event.preventDefault();
        passMessage.style.display = 'block';
        passMessage.innerHTML = 'password should be between 8 : 20 letter';
  //check the confirm password
    }else if(password.value != confirmPass.value){
        event.preventDefault();
        passMessage.style.display = 'block';
        passMessage.innerHTML = 'write the right password'
    }
})