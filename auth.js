//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  console.log(email);
  console.log(password);

  //sign up the user
  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);

      // clear input fields and close modal 
      const modal = document.querySelector("#modal-signup")
      M.Modal.getInstance(modal).close();
      signupForm.reset();
  });
})
