const user = document.getElementById('username');
const pass = document.getElementById('password');
function signin(){
   if(user.value=="admin"){
      if(pass.value=="admin"){
         window.location.href="./html/admin.html";
      }else{
         console.log("hi1");
      }
   }else{
      console.log("hi2");
   }
}