function register(){
    var x =document.getElementById("login");

    if(x.type === "password"){
        x.type = "email";
    }
    else{
        x.type = "password";
    }
}

function login() {
    var y = document.getElementById("register");
    document.getElementById("register");

    if(password.value.length >= 4){
        alert("Login Succesfull");
        window.location.replace("parth.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}