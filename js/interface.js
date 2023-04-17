const user = document.getElementsByName('username');
const pass = document.getElementsByName('password');
const form = document.getElementById('interface-form');

form.addEventListener('submit',(e)=>{
   // e.preventDefault();
   if(user==='admin'){
      if(pass==='admin'){
         console.log(1);
         window.location.assign("//html/admin.html");
         console.log(2);
      }
   }
})