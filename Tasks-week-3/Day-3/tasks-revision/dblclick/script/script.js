// Theme Mode Switcher
// Create a Light/Dark theme toggle using a click event that dynamically updates the UI by adding/removing CSS classes

const theme = document.getElementById("theme");
const icon = document.getElementById("icon")

icon.addEventListener('dblclick', (e) => {
    const elem = document.getElementById("icon")
    elem.style.color = "red";
    console.log("You liked the content")
})