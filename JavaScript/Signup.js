let user = document.getElementById("floatingFullName");
let gmail = document.getElementById("floatingemail");
let password = document.getElementById("floatingPassword");
let signUp = document.getElementById("signUp-button");

function clearField() {
    user.innerText = "";
    user.gmail = "";
    user.password = "";
}
function isGmailAlreadyExsist(userGmail) {
    let credentials = JSON.parse(localStorage.getItem("credentials"));
    if (!credentials) {
        return true;
    }

    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i].gmail == userGmail) return false;
    }

    return true;
}

signUp.addEventListener("click", ((e) => {
    e.preventDefault();
    let form = document.getElementById("signup-form");


    let gmail_val = gmail.value;
    let password_val = password.value;
    let user_val = user.value;

    if (gmail_val == '' || password_val == '' || user_val == '') {
        alert("All feilds are mandatory");
    }
    else if (isGmailAlreadyExsist(gmail_val)) {
        let credentials = JSON.parse(localStorage.getItem("credentials"));
        credentials = credentials ? credentials : [];
        credentials.push({ gmail: gmail_val, password: password_val, name: user_val });
        localStorage.setItem("credentials", JSON.stringify(credentials));
        window.location.href = "./Login.html";
    } else {
        alert("Email Aready Exist");
        clearField();
    }
}))
