console.log("Hello, this is a counter")
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counterValue = document.getElementById("counterValue")

plus.addEventListener('click', (e) =>{
    console.log("Plus Button Clicked!");
    let num = Number(counterValue.innerText);
    console.log(num);
    num = num+1;
    counterValue.innerText = num;
});

minus.addEventListener('click', (e)=>{
    console.log("Minus Button Clicked");
    let num = Number(counterValue.innerText);
    console.log(num);
    num = num-1;
    counterValue.innerText = num;
});