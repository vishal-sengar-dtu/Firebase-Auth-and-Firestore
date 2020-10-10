//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //sign up the user
  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {

      // clear input fields and close signup modal 
      const modal = document.querySelector("#modal-signup")
      M.Modal.getInstance(modal).close();
      signupForm.reset();
  });
})

//logout
const logout = document.querySelector("#logout")
logout.addEventListener("click", (e) => {
  e.preventDefault();

  //logging out user
  auth.signOut().then(() => {
    alert("user signed out")
  })
})

//login
const loginForm = document.querySelector("#login-form")
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  //sign in the user
  auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);

      // clear input fields and close login modal 
      const modal = document.querySelector("#modal-login")
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
})