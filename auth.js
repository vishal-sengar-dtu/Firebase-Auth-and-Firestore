//listen for auth status change
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("guides").onSnapshot(snapshot => {
      setupGuides(snapshot.docs);
      setupUI(user);
    }).catch((err) => {
      alert(err.message);
    })
  } else {
    setupGuides([]);
    setupUI();
  }
})

//create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  db.collection("guides").add({
    title: createForm["title"].value,
    content: createForm["content"].value,
  }).then(() => {

    // clear input fields and close the modal 
    const modal = document.querySelector("#modal-create")
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch((err) => {
    alert(err.message);
  })
})

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
    }).catch((err) => {
      alert(err.message);
  })
})


//logout
const logout = document.querySelector("#logout")
logout.addEventListener("click", (e) => {
  e.preventDefault();

  //logging out user
  auth.signOut();
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

      // clear input fields and close login modal 
      const modal = document.querySelector("#modal-login")
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    }).catch((err) => {
      alert(err.message);
  })
})