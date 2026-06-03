// 1. The Text Changer
// Select the button with id btn-1.
// When clicked, change the text of h1 (id="main-heading") to "Welcome to the DOM!".

const btn1 = document.getElementById("btn-1");
const mainHeading = document.getElementById("main-heading");

btn1.addEventListener("click", () => {
    mainHeading.innerText = "Welcome to DOM";
});

// 2. The Color Painter
// Select the button btn-2.
// When clicked, change the background color of the div (id="color-box") to "blue".

const btn2 = document.getElementById("btn-2");
const colorBox = document.getElementById("color-box");

btn2.addEventListener("click", () => {
    colorBox.style.backgroundColor = "blue";
})

// 3. The Input Reader
// Select the input user-input and the button btn-3.
// When clicked, read the value from the input and show it in a standard browser alert().

const userInput = document.getElementById("user-input")
const btn3 = document.getElementById("btn-3");

btn3.addEventListener("click", () => {
    const text = userInput.value;
    alert(`The input is ${text}`)
})

// 4. The Link Update
// Select the link my-link.
// When btn-4 is clicked, change the link's href attribute to "https://youtube.com" and its text to "Go to YouTube".

const btn4 = document.getElementById("btn-4");
const myLink = document.getElementById("my-link");

btn4.addEventListener("click", () => {
    myLink.href = "https://youtube.com";
    myLink.innerText = "Go to YouTube";
});


// 5. The Vanishing Image
// Select the image my-image.
// When btn-5 is clicked, change its style.display to "none" so it disappears.

const myImage = document.getElementById("my-image");
const btn5 = document.getElementById("btn-5");

btn5.addEventListener("click", () => {
    myImage.style.display = "none";
});

// 6. The Counter (+ and -)
// You have a span counter-value that starts at 0.
// When inc-btn is clicked, increase the number by 1.
// When dec-btn is clicked, decrease the number by 1.
// Hint: You will need to convert the text to a number using parseInt() or Number().

const counterValue = document.getElementById("counter-value");
const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");

incBtn.addEventListener("click", () => {
    let value = parseInt(counterValue.innerText)
    counterValue.innerText = value + 1;
})

decBtn.addEventListener("click", () => {
    let value = parseInt(counterValue.innerText)
    counterValue.innerText = value - 1;
})

// 7. The Dark Mode Toggle
// Select the button toggle-mode.
// When clicked, toggle the CSS class "dark-mode" on the document.body.

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})

// 8. The Password Validator
// Select password-input and login-btn.
// When clicked, check if the password is less than 5 characters.
// If it is too short, show the text "Password too short!" in the error-msg paragraph.
// If it is long enough, show "Login Successful!" in green color.

const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg")

loginBtn.addEventListener("click", () => {
    let value = passwordInput.value;
    if (value.length < 5) {
        errorMsg.innerText = "Password too short!";
    }
    else {
        errorMsg.style.color = "green";
        errorMsg.innerText = "Login Successful";

    }
})

// 9. The Shopping List (Create Elements)
// Select item-input, add-item-btn, and the ul shopping-list.
// When clicked, take the text from the input, create a new <li> element, set its text, and appendChild it to the list.

const itemInput = document.getElementById("item-input");
const addItemBtn = document.getElementById("add-item-btn");
const shoppingList = document.getElementById("shopping-list")

addItemBtn.addEventListener("click", () => {
    let value = itemInput.value;
    const li = document.createElement("li");
    li.innerText = value;
    shoppingList.appendChild(li);

    itemInput.value = "";
})

// 10. The Toggle "Show/Hide" Button
// Select secret-msg and toggle-msg-btn.
// When clicked, check if the message is visible.
// If visible -> Hide it and change button text to "Show Message".
// If hidden -> Show it and change button text to "Hide Message".

const secretMsg = document.getElementById("secret-msg");
const toggleMsgBtn = document.getElementById("toggle-msg-btn");

toggleMsgBtn.addEventListener("click", () => {
    secretMsg.classList.toggle("hidden");
    if (secretMsg.classList.contains("hidden")) {
        toggleMsgBtn.innerText = "Show Message";

    }
    else {
        toggleMsgBtn.innerText = "Hide Message";
    }
})

// 12. The Shopping Cart (Objects + Math)
// Create a function addToCart(name, price).
// Push an object { name: name, price: price } into the cart array.
// Render: Loop through the cart array, create <li> tags for each item, and append them to cart-list.
// Calculate: Use a loop to calculate the total price and update the #total-price span.

const cart = [];
const laptop = document.getElementById("laptop");
const mobile = document.getElementById("mobile");
const usb = document.getElementById("usb");
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price")

laptop.addEventListener("click", () => {
    addToCart("Laptop", 50000)
})

mobile.addEventListener("click", () => {
    addToCart("Mobile", 20000)
})

usb.addEventListener("click", () => {
    addToCart("USB", 500)
})


function addToCart(name, price) {
    cart.push({ name, price });
    const li = document.createElement("li");
    li.innerText = `${name} - ${price}`;
    cartList.appendChild(li);
    totalMoney();
}

function totalMoney() {
    const Total = cart.reduce((acc, n) => acc + n.price, 0);
    totalPrice.innerText = Total;
}


// 13. The Tabbed Interface (Class Manipulation)
// • Goal: Switch between 3 views without reloading the page.
// • Logic:
// 1. Select all tab-btn buttons and all content-box divs.
// 2. Add a click listener to the buttons.
// 3. When clicked:
// Step 1: Hide ALL content boxes (add .hidden class).
// Step 2: Remove "active" class from ALL buttons.
// Step 3: Show ONLY the box that matches the button's data-target (remove .hidden).
// Step 4: Add "active" class to the clicked button.

const tabBtns = document.querySelectorAll(".tab-btn");
const boxes = document.querySelectorAll(".content-box");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        
        boxes.forEach(box => box.classList.add("hidden"));
        tabBtns.forEach(b => b.classList.remove("active"));

        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");

        btn.classList.add("active");
    });
});

// 14. The Task Filter (Array Filtering)
// • Data: let tasks = [{ text: "Learn JS", completed: false }];
// • Logic:
// 1. Add: New tasks are pushed to the array with completed: false.
// 2. Toggle: Clicking a task toggles its completed status (true/false) and adds a CSS line-through style.

// Filter:

// "Show Active" button: Uses tasks.filter(t => !t.completed) and re-renders the list.
// "Show Completed" button: Uses tasks.filter(t => t.completed).
// "Show All": Renders the whole array.

 let tasks = [{ text: "Learn JS", completed: false }];

    function render(list) {
      const ul = document.getElementById("taskList");
      ul.innerHTML = "";  

      list.forEach((task, index) => {
        const li = document.createElement("li");

        li.textContent = task.text + (task.completed ? " (done)" : "");
        li.style.textDecoration = task.completed ? "line-through" : "none";

        
        li.onclick = () => {
          tasks[index].completed = !tasks[index].completed;
          render(tasks);
        };

        ul.appendChild(li);
      });
    }

  
    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value;
      if (text === "") return;

      tasks.push({ text: text, completed: false });
      input.value = "";
      render(tasks);
    }

    function showAll() {
      render(tasks);
    }

    function showActive() {
      const active = tasks.filter(t => !t.completed);
      render(active);
    }

    function showCompleted() {
      const completed = tasks.filter(t => t.completed);
      render(completed);
    }

    render(tasks);