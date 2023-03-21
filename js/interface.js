var form = document.forms[0];
var username = document.getElementById("username-field");
var password = document.getElementById("password-field");

form.addEventListener("submit",function(e)
{

var username_err = document.getElementById("user-err");
var password_err = document.getElementById("pass-err");
var u_val = username.value;
var p_val = password.value;


console.log("dkhlt func");
if(u_val== '' )
 {
username_err.innerText= ("invalid username (empty value) , please try again");   
console.log("condition 1 ");
e.preventDefault();
 }
 else if (u_val.length < 8 )
 {
    username_err.innerText= ("invalid username (very short) , please enter more than 8 characters"); 
    console.log("condition 2 ");
    e.preventDefault();
 }

 if(p_val== '' )
 {
password_err.innerText= ("invalid password (empty value) , please try again");   
console.log("condition 3 ");
e.preventDefault();
 }
 else if (p_val.length < 8 )
 {
    password_err.innerText= ("invalid password (very short) , please enter more than 8 characters"); 
    console.log("condition 4 ");
    e.preventDefault();
 }
 
 
});





