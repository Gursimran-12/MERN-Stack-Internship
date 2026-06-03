let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
const cakeShop = document.getElementById("cakeShop");
const light = document.getElementById("light");
const btn = document.getElementById("btn");
const iIcon = document.getElementById("iIcon");
const lIcon = document.getElementById("lIcon");
const form = document.getElementById("myForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const search = document.getElementById("search");
const listItems = document.querySelectorAll("#nameList li");
const nameList = document.getElementById("nameList");


// Adding Event listener, when the user will click the hamburger then it must add the class "show"
menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle("show");
})


// Adding Event Listener, which will change the theme when the button is pressed
btn.addEventListener('click', (e) => {
    cakeShop.classList.toggle("theme")
    light.classList.toggle("dark")


    {
        if (cakeShop.classList.contains("theme")) {
            btn.innerHTML = "Light Mode"
            iIcon.style.color = "black";
            lIcon.style.color = "black";

        }
        else {
            btn.innerHTML = "Dark Mode"
            iIcon.style.color = "white";
            lIcon.style.color = "white";
        }
    }
})


// Adding Event Listener which will come into play when the user will submit the form 
form.addEventListener("submit", function (event) {
    let valid = true;

    if (userName.value.trim() === "") {
        nameError.style.display = "inline";  // Checking if Username is empty
        valid = false;
    }

    else if (userEmail.value.trim() === "") { //Checking if UserEmail is empty
        emailError.style.display = "inline";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        return;
    }

    event.preventDefault(); 
    result.style.display = "inline";

    setTimeout(() => {
        form.reset();
        result.style.display = "none";
    }, 3000);
});


userName.addEventListener('input', () => { // If the name field is empty then it must show this error 
    nameError.style.display =
        userName.value.trim() === "" ? "inline" : "none";
});

userEmail.addEventListener('input', () => { // If the email field is empty then it must show the error
    emailError.style.display =
        userEmail.value.trim() === "" ? "inline" : "none";
});


//It is used for Searching Purpose

search.addEventListener('keyup', function()
{
    const text = search.value.toLowerCase();
    listItems.forEach(item =>
    {
        const listText = item.textContent.toLowerCase();
        if(listText.includes(text))
        {
            nameList.style.display = "block";
            item.style.display = "block";
        }
        else
        {
            item.style.display = "none";
        }
        if(text === "")
        {
            nameList.style.display= "none";
        }
    })

})