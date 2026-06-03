// ******** GETTING ELEMENT BY ID  **************
// const elem = document.getElementById("area")
// elem
// (Here element having the index area will be shown) 
// elem.style.fontSize = "26px" (Here the font of the element having the id area will be changed)
// '26px'


// *********** PARENT ELEMENT**************
// Getting the parent element(which is class- header)
// elem.parentElement

// ************ PARENT OF PARENT ELEMENT **************
// Getting the parent of the parent Element (Which is body)
// elem.parentElement.parentElement

// ****************** CHILD ELEMENT *********************
// Getting the child Elements
// elem.parentElement.firstElementChild
// elem.parentElement.lastElementChild

// *************** CHILD ELEMENT COUNT *****************
// Getting the child Element count
// elem.childElementCount

// ************* SIBLINGS *******************
// Getting the information related to siblings
// elem.parentElement.nextElementSibling
// elem.parentElement.previousElementSibling

// ************** GETTING ELEMENT BY CLASS *************
// document.getElementsByClassName("header") // Returns the HTML collections
// document.getElementsByClassName("header")[0].style.backgroundColor = "Red"

// ************* QUERY SELECTORS ********************
// document.querySelector("#area") (Returns the id named area)


// ******************* QUERT SELECTOR ALL ************
// document.querySelectorAll(".header") // Returns nodelist (which can be further converted to array and operations )
// Array.from(document.querySelectorAll(."header"))
// Array.from(document.querySelectorAll(."header")).pop();


// ***************** GETTING THE ELEMENTS USING THE TAGNAME ************
// document.getElementsByTagName("h2") // Returns html collection


// ******************* GETTING ATTRIBUTES ***********************
// const input = document.getElementById("area");
// input.attributes (Returns NameNodeMap and tell what is present inside a attribute like id or class)

// ************** SETTING ATTRIBUTES *******************
// const input = document.getElementById("area");
// input.setAttribute('class', 'abc')
// Output: <h1 id="area" class="abc">Welcome to My Website</h1>

// ****************** GETTING ATTRIBUTES (GET ATTRIBUTE) ********
// input.getAttribute('id')
// (It will return the name of the id)
// input.getAttribute('id')

// **************** REMOVING ATTRIBUTES **************************
// input.removeAttribute('id')
// (Now, Id will be removed from here)

// *********** CHECKING WHETHER AN ATTRIBUTE IS PRESENT OR NOT **********
// input.hasAttribute('isopened') // false 
// input.toggleAttribute('isopened') // true


// ************ TO CHECK THE NODE OF ANY ATTRIBUTE **************
// input.getAttributeNode('id')
// returns id

// ************* ADD EVENT LISTENERS ***************
// const inout = document.getElementsByClassName('nav-links') [0];
// inout.addEventListener('click', (event) =>{
//  console.log("clicked")
// })

// *************** TASK **********************
// When I Click on any Button, then it must show a modal
const navLink = document.querySelector('.nav-links');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

navLink.addEventListener('click', (e) => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
}); 

// ********** CHANGING THE TEXT ***************
// input.innerText = "This is my website"
// Ouput: Text will be changed

// ************** CHANGIGN THE TAGS ***************
// input.innerHTML = "<h3> This is my website </h3>"
// Headings will be changed 








