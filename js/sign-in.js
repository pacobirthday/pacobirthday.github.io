/**
 * Created by nima on 4/30/17.
 */

function login() {
    console.log('Sending log in request');
    var password_field = document.getElementById("password").value;
    if(password_field === "Paco"){
        window.location.href = "home.html";
    }else{
        alert("Try Again!");
        password_field.value = "";
    }
    
}