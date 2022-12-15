
function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false) 
    {
        swal({
            title: "Error",
            text: "Email address is not valid",
            icon: "error",
          });
        return false;
    }
    return true;
}


function signup(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == ""){
        swal({
            text: "Please enter full information!",
            icon: "warning",
        })
    }
    else {
    var user = {
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    swal({
        text: "You have successfully registered!",
        icon: "success",
      });
      setTimeout(()=> {window.location.href="login.html"},3000)
    }
}

function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    if(email == ""){
        swal({
            text: "Please enter email and password!",
            icon: "warning",
        })
    }
    else {
        var password = document.getElementById("password").value;
        var user = localStorage.getItem(email);
        var data = JSON.parse(user);
        if(user == null) {
            swal({
                text: "Email or password is incorrect",
                icon: "error",
            })
        }
        else if (email == data.email && password == data.password) {
            swal({
                text: "Logged in successfully",
                icon: "success",
            })
            setTimeout(()=> {window.location.href="index.html"},3000)
        }
        else {
            swal({
                text: "Email or password is incorrect",
                icon: "error",
            })
        }
    }
    
}

