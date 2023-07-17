const signupBtn = document.getElementById("signupBtn")
const loginBtn = document.getElementById("loginBtn")
const title = document.getElementById("title")
const nameField = document.getElementById("nameField")

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0"
    title.textContent = "Log In"
    title.style.transition = "2s ease-in 2s"
   signupBtn.classList.add("disable")
   loginBtn.classList.remove("disable")
}

// signupBtn.onclick = function(){
//     nameField.style.maxHeight = "60px"
//     title.textContent = "Sign Up"
//     title.style.transition = "2s ease-in 2s"
//    signupBtn.classList.remove("disable")
//    loginBtn.classList.add("disable")
// }


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyDFXeH6yh7iCkBZeTz7jD-_CLG_m4_Vm9w",
      authDomain: "login-acces-userv1.firebaseapp.com",
      databaseURL: "https://login-acces-userv1-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "login-acces-userv1",
      storageBucket: "login-acces-userv1.appspot.com",
      messagingSenderId: "966281482337",
      appId: "1:966281482337:web:3665cfe1f747ba96c61a20"
    };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);
  
  

  signupBtn.addEventListener("click", (e) =>{
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const full_name = document.getElementById("name").value;
  
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(database, "users/" +user.uid),{
          email : email,
          username: full_name,
          password : password
  
      })
      alert("user creat")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  });
  
   
  
  
  
   
  
  // function validate_password(password){
  //     if(password < 6){
  //         return false
  //     } else {
  //         return true
  //     }
  // }
  
  // function validate_field(field){
  //     if(field == null){
  //         return false
  //     }
  //     if(field.length <= 0){
  //         return false
  //     } else {
  //         return true
  //     }
  // }
  


