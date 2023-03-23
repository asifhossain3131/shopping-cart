document.getElementById('btn-login').addEventListener('click', function(){
    const emailField=document.getElementById('email-field');
    const email=emailField.value;
    const passField=document.getElementById('pass-field');
    const pass=passField.value;
    if(email==="" && pass===""){
        alert('Please provide your email and password')
        return;
    }
    if(email==="example@gmail.com" && pass==="123456"){
        window.location.href='pin-matcher.html';
    }
    else{
        alert('Provided wrong Email or Password')
    }
})

function myFunction() {
    const x = document.getElementById("pass-field");
    if (x.type === "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
  }