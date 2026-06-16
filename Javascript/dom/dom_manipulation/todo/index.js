
const button = document.getElementById("fruitButton");

const list = document.getElementById("fruitList");

const input = document.getElementById("fruitInput");


function addAction(li){
    const listText = li.textContent;
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    const fruitDelete = document.createElement("button");
    fruitDelete.textContent = "Delete";

    edit.addEventListener("click", () => {
        input.value = listText;
        li.remove();

    });

    fruitDelete.addEventListener("click", () => {
        li.remove();
    });
    
    li.appendChild(edit);
    li.appendChild(fruitDelete);
}

document.querySelectorAll("#fruitList li").forEach((li) => {
    addAction(li);
});

button.addEventListener("click", () => {

    const fruitName = input.value;

    if (fruitName != ""){
        const newFruit = document.createElement("li");
        newFruit.textContent = fruitName;
        addAction(newFruit);
        list.appendChild(newFruit);
        
        input.value = "";
        input.focus();
    }
});
    