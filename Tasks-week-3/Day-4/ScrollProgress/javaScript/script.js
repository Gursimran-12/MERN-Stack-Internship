window.addEventListener('scroll', function()
{
    console.log("Window is Scrolling..........");
    const scrolledY = this.window.scrollY;
    console.log("Scrolled Position y: ", scrolledY);
    const val = this.document.getElementById("val");
    val.innerText= scrolledY;
})