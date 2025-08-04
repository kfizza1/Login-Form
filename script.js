// document.getElementById('loginForm').addEventListener('submit', function(event){
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     if(username === "" || password === ""){
//         alert("please fill in the  both sides");
//         return;
//     }
//     console.log('Username:', username);
//     console.log('Password:', password);

//     alert("login successful!");
// });


document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    this.textContent = type === 'password' ? '👁️' : '🙈';
});

function formValidation(event){
    event.preventDefault();
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username == "" || password == ""){
        alert("password and username must not be empty");
        return false;
    }
    else if(password.length<8){
        alert("password length must be 8 characters");
        return false;
    }
    else if(username.length<6){
        alert("username is incomplete")
    }
    else if(password.search(/[0-9]/)){
        alert("password must contains atleast one number")
        return false;
    }
     else{
    alert("login successful!");
    return true;
    }
    
}

document.getElementById('loginForm').addEventListener('submit', formValidation);