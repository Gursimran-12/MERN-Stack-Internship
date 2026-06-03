// Theme Mode Switcher
// Create a Light/Dark theme toggle using a click event that dynamically updates the UI by adding/removing CSS classes

const theme = document.getElementById("theme");
const btn = document.getElementById("btn")

btn.addEventListener('click',(e)=> {
    theme.classList.toggle("dark")
    {
        if(theme.classList.contains("dark"))
        {
            btn.innerHTML = "Light Mode"
            theme.classList.remove("light");
        }
        else
        {
            theme.classList.add("light")
            btn.innerHTML = "Dark Mode"
        }
    }
})