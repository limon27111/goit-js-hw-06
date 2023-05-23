const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onLoginFormRefSubmit);

function onLoginFormRefSubmit (event) {
    event.preventDefault();
    
    const {
        elements: {email , password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    loginFormRef.reset();

};
