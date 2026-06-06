const title = document.querySelector("#title");
console.log("titletitletitletitle");
console.log(title.textContent, "textContent");
title.textContent = "New Document";

const changeTitleBtn = document.getElementById("change_title_btn");
console.log(changeTitleBtn, "changeTitleBtn");
changeTitleBtn.addEventListener("click", () => {
    console.log("i am clicked");
    title.textContent = "New Document";
});

const paragraph = document.querySelector(".paragraph");
console.log(paragraph, "paragraphparagraph");

const paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs, "paragraphsparagraphs");

const elementById = document.getElementById("elementId");
console.log(elementById, "elementById");

const elementsByClass = document.getElementsByClassName('my-class');
console.log(elementsByClass, "elementsByClass");

const content = document.getElementById("content");
content.innerHTML = "<p> Hello <span> World </span> </p>";
console.log(content, "content");