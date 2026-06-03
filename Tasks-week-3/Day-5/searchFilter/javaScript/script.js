const search = document.getElementById("search");
const listItems = document.querySelectorAll("#nameList li");
const nameList = document.getElementById("nameList");

search.addEventListener('keyup', function () {
    const text = search.value.toLowerCase();
    listItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(text)) {
            nameList.style.display = "block";
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
        if (text === "") {
            nameList.style.display = "none";
        }
    })
})
