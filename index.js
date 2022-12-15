function createList(items, parent) {
const ul = document.createElement("ul");
  parent.appendChild(ul);
  items.forEach(function generateList(item) {
   let li = document.createElement("li");
    ul.appendChild(li);
    if (Array.isArray(item)) {
      createList(item, li);
    } else {
      li.innerHTML = item;
    }
  });
}

let array = [1, 2, [1.1, 1.2, 1.3], 3];
let list = document.getElementById("list");

createList(array, list);
