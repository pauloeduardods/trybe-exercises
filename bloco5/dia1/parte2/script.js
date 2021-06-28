const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
const title = document.getElementById("page-title");
title.innerText = 'Salve salve familia';
const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = 'outro';
secondParagraph.style.color = "green";
const subtitle = document.getElementById("subtitle");
subtitle.style.color = 'magenta';
const paragraphs = document.getElementsByClassName("paragraph");
for(let paragraph of paragraphs){
  paragraph.innerHTML = `<strong>${paragraph.innerText}</strong>`;
};
const h4 = document.getElementsByTagName("h4");
for(tag of h4){
  tag.style.fontSize = "30px"
}