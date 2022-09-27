const query = document.querySelectorAll("li.item");

console.log("Number of categories:", query[0].parentElement.childElementCount);

for (let elem of query) {
	console.log(`Category: ${elem.firstElementChild.textContent}`);
	console.log(`Elements: ${elem.lastElementChild.children.length}`);
}