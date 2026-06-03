/*
const elem = document.getElementsByTagName("div")[0];
elem.classList
// Output will be: DOMTokenList(4) ['first', 'second', 'third', 'fourth', value: 'first second third fourth']

// Adding more classes in the classList
elem.classList.add("fifth");
elem.classList.add("sixth");

// Removing the classes from the classList
elem.classList.remove("fifth", "sixth");
console.log(elem);

// For Toggling
elem.classList.toggle("third"); // toggle for one time: Disappears
elem.classList.toggle("third"); // Again toggle(): Appears

// To check whether class is present in the classlist or not
const isExits = elem.classList.contains("third");
console.log("Is Exists: ", isExits);

// To check the length of the classList
const len = elem.classList.length;
console.log("The length of the classList is: ", len);

// Task for showing whether the specific class exists or not 

if(elem.classList.contains("third"))
{
    console.log("Light mode enabled");
}
else
{
    console.log("Dark mode enabled");
}

// There should be a button when the user press the button, then theme will be changed

// Adding the eventListener for click
const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener('click',(e) => {
    console.log("Clicked!");
    title.classList.toggle("dark");
    if(title.classList.contains("dark"))
    {
        btn.innerHTML = "Light";
    }
    else
    {
        btn.innerHTML = "dark"
    }

    console.log(e.target.textContent);
})

// Program: To on and off the bulb
const sav = document.getElementById("sav");
const bul = document.getElementById("bul");



bul.addEventListener('click',(e) => {
    sav.classList.toggle("on")
    console.log("clicked!");
    if(sav.classList.contains("on"))
        {
            bul.innerHTML = "Bulb on !"
        }
        else
        {
            bul.innerHTML = "Bulb off !"
        }
    })

*/

// EventListening using double click
// For getting heart icon: <span class="heart-icon">&#9829;</span>
const sample = document.getElementById("sample")
const butn = document.getElementById("butn")

butn.addEventListener('dblclick', (e) => {
    const elem = document.getElementById("icon")
    elem.style.color = "red";
    console.log("You liked the content")
})


// Using Input
const inputValue = document.getElementById("inputValue")
const name = document.getElementById("name");
name.addEventListener('input', (e) => {
    let string = e.target.value;
    console.log(string);

})

// For submit
const form = document.getElementsByTagName("form")[0]
{
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("submitted!");
        setTimeout(() => {
            form.reset()
        }, 1000);
    })
}

// Keydown
const keyBtns = document.getElementById("keyBtns")
window.addEventListener('keydown', (e)=>{
    console.log(e);
    keyBtns.innerText = keyBtns.innerText.concat(e.key)
})

// scroll
window.addEventListener('scroll', function()
{
    console.log("Window is Scrolling")
    const scrolledY = window.scrollY;
    console.log("Scrolled position y: ", scrolledY)
})