const form = document.getElementById("myForm");
const emailId = document.getElementById("emailId");
const emailError = document.getElementById("emailError");
const uPassword = document.getElementById("uPassword");
const passError = document.getElementById("passError");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    if (emailId.value.trim() === "") {
        emailError.style.display = "block";
        event.preventDefault();
    }
    else if (uPassword.value.trim() === "") {
        passError.style.display = "block";
        event.preventDefault();
    }
    else {
        emailError.innerText = "";
        result.style.display = "block";
        event.preventDefault();
        
    }
});






