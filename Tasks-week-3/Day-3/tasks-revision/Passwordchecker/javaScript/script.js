const password = document.getElementById("password");

password.addEventListener('input', (e) => {
    const val = password.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;


    if(score>=3)
    {
        const strongPass = document.getElementById("strongPass")
        strongPass.style.display = "block";
        const weakPass = document.getElementById("weakPass")
        weakPass.style.display = "none";
    
    }
    else
    {
        console.log('Weak Password')
        const weakPass = document.getElementById("weakPass")
        weakPass.style.display = "block";
        const strongPass = document.getElementById("strongPass")
        strongPass.style.display = "none";

    }

    

})