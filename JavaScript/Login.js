const loginbtn = document.getElementById('login-button-customer');

loginbtn.addEventListener('click', function () {
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    const enteredGmail = document.getElementById('floating-login-gmail').value;
    const enteredPassword = document.getElementById('floating-login-password').value;
    if (!storedCredentials) {
        alert('Invalid Gmail or password');
        return;
    }
    let isLoggedIn = false;
    console.log(storedCredentials);
    for (const credentials of storedCredentials) {
        const storedGmail = credentials.gmail;
        const storedPassword = credentials.password;
        console.log(storedGmail,storedPassword,enteredGmail,enteredPassword)
        if (enteredGmail === storedGmail && enteredPassword === storedPassword) {
            isLoggedIn = true;
            window.location.href = './Main.html'
            break;
        }
    }
    if (!isLoggedIn) {
        alert('Invalid Gmail or password');
    }
});
