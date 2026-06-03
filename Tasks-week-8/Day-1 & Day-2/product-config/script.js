const options = document.getElementById("options")
const summary = document.getElementById("Summary");
const cart = [];
const price = document.getElementById("price");


// Main Function to add the elements to the Cart
function addtoCart(category, name, price) {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].category === category) {
            cart.splice(i, 1);
            console.log(cart);
            break;
        }
    }

    cart.push({ category, name, price });
    totalMoney();
    updateSummary();
}

// Function to update the Summary which is to be displayed on Screen
function updateSummary() {
    summary.innerHTML = " ";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} (+Rs ${item.price})`;
        summary.appendChild(li);
    })
}

// Function to compute Total Money and Displaying it on the Screen
function totalMoney() {
    const money = cart.reduce((acc, n) => acc + n.price, 0);
    price.innerText = money;

}

// Another validity function to check whether RAM of 8GB and 16GB should be added or not if the storage is 512 GB
function check() {
    const has512Storage = cart.some(item =>
        item.category === "Storage" && item.name === "512GB"
    );
    return has512Storage
}

// Creation of three divs inside the container to shoe RA, Storage and color of the Laptop
const div1 = document.createElement("div");
options.appendChild(div1)
div1.classList.add("optionStyle")
addRam();

const div2 = document.createElement("div");
options.appendChild(div2)
div2.classList.add("optionStyle")
addStorage();

const div3 = document.createElement("div");
options.appendChild(div3)
div3.classList.add("optionStyle")
addColor();


// Function to add headings and buttons in the RAM part
function addRam() {

    const h2 = document.createElement("h2")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    const btn3 = document.createElement("button")
    const ramBtns = [btn1, btn2, btn3]

    h2.textContent = "RAM"
    btn1.textContent = "8GB (+Rs 0)"
    btn1.classList.add("optionBtn");
    btn1.addEventListener("click", () => {
        if (check()) {
            alert("As your Storage is 512GB, you cannot select RAM as 8GB")
            return
        }

        addtoCart("Ram", "8GB", 0);

        ramBtns.forEach(b => b.classList.remove("selected"));
        btn1.classList.add("selected");

    })

    btn2.textContent = "16GB (+Rs 8000)"
    btn2.classList.add("optionBtn");
    btn2.addEventListener("click", () => {

        if (check()) {
            alert("As your Storage is 512GB, you cannot select RAM as 16GB")
            return
        }

        addtoCart("Ram", "16GB", 8000);

        ramBtns.forEach(b => b.classList.remove("selected"));
        btn2.classList.add("selected");

    })

    btn3.textContent = "32GB (+Rs 16000)"
    btn3.classList.add("optionBtn");
    btn3.addEventListener("click", () => {
        addtoCart("Ram", "32GB", 16000);
        ramBtns.forEach(b => b.classList.remove("selected"));
        btn3.classList.add("selected");
    })


    div1.appendChild(h2);
    div1.appendChild(btn1);
    div1.appendChild(btn2);
    div1.appendChild(btn3);
}

// Function to add headings and buttons in the Storage part
function addStorage() {

    const h2 = document.createElement("h2")
    h2.textContent = "STORAGE"
    const btn4 = document.createElement("button")
    const btn5 = document.createElement("button")
    const storageBtn = [btn4, btn5]

    btn4.textContent = "256GB (+Rs 0)"
    btn4.classList.add("optionBtn");
    btn4.addEventListener("click", () => {
        addtoCart("Storage", "256GB", 0);

        storageBtn.forEach(b => b.classList.remove("selected"));
        btn4.classList.add("selected");
    });


    btn5.textContent = "512GB (+Rs 5000)"
    btn5.classList.add("optionBtn");
    btn5.addEventListener("click", () => {
        const has32 = cart.some(item => item.category === "Ram" && item.name === "32GB");

        if (!has32) {
            alert("You can only select 512GB storage if you have 32GB RAM.");

            storageBtn.forEach(b => b.classList.remove("selected"));
            return;
        }

        addtoCart("Storage", "512GB", 5000);

        storageBtn.forEach(b => b.classList.remove("selected"));
        btn5.classList.add("selected");
    })

    div2.appendChild(h2);
    div2.appendChild(btn4);
    div2.appendChild(btn5);
}


// Function to add headings and buttons in the Color part
function addColor() {

    const h2 = document.createElement("h2")
    h2.textContent = "COLOR"
    const btn6 = document.createElement("button")
    btn6.textContent = "Silver (+Rs 0)"
    btn6.classList.add("optionBtn");
    btn6.addEventListener("click", () => {
        addtoCart("color", "Silver", 0);

    })

    const btn7 = document.createElement("button")
    btn7.textContent = "Black (+Rs 2000)"
    btn7.classList.add("optionBtn");
    btn7.addEventListener("click", () => {
        addtoCart("color", "Black", 2000);
    })
    const colorBtn = [btn6, btn7]
    colorBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            colorBtn.forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

        });
    });

    div3.appendChild(h2);
    div3.appendChild(btn6);
    div3.appendChild(btn7);
}