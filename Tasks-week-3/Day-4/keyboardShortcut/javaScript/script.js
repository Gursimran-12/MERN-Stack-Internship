const short = document.getElementById("short");
const btn = document.getElementById("btn")
const keybtns = document.getElementById("keybtns")

window.addEventListener('keydown', (e) => {
    console.log(e);
    keybtns.innerText = keybtns.innerText.concat(e.key)
    let val = keybtns.innerText;
    console.log(val);
    if (val == "Controlb") {
        btn.innerText = "Light Mode"
        short.classList.remove("box");
        console.log(`The key pressed are ${val}`)
    }
    if (val == "Escape") {
        keybtns.innerText = "Esc is pressed";
        short.classList.remove("box", "dark");
        btn.style.display = "none";
        console.log(`The key pressed are ${val}`)
    }
})

btn.addEventListener('click', (e) => {
    short.classList.toggle("dark")
    if (short.classList.contains("dark")) {
        btn.innerHTML = "Light Mode"
        short.classList.remove("box");
    }
    else {
        short.classList.add("box")
        btn.innerHTML = "Dark Mode"
    }
})
