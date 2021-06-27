/**
 * Created by nima on 4/30/17.
 */

function login() {
    console.log('Sending log in request');
    var password_field = document.getElementById("password").value;
    if(password_field === "Mia"){
        window.location.href = "home.html";
    }else{
        alert("Try Again Dumbass!");
        password_field.value = "";
    }
    
}