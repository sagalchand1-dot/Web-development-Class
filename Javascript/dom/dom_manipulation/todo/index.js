const addBtn = document.getElementById("addBtn");
const fruitList = document.getElementById("fruitList");

console.log(addBtn);
console.log(fruitList);

addBtn.addEventListener("click", () => {
    console.log("clicked");

    const newItem = document.createElement("li");
    newItem.textContent = "Kiwi";

    fruitList.appendChild(newItem);
});