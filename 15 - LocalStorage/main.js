const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const displayItems = (items = [], itemsList) => {
  itemsList.innerHTML = items
    .map((item, i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      } />
      <label for="item${i}">${item.name}</label>
    </li>`;
    })
    .join("");
};

const storeInLocalStorage = () =>
  localStorage.setItem("items", JSON.stringify(items));

const addToItems = e => {
  // Preventing from refresh the page
  e.preventDefault();
  // Adding new item to items array
  const input = e.target.querySelector("[name=item]").value;
  items.push({ name: input, done: false });
  // Storign into local storage
  storeInLocalStorage();
  // Updating the item list display
  displayItems(items, itemsList);
  // Reseting the input form
  e.target.reset();
};

const doneUpdate = e => {
  // Ignoring other than checkbox
  if (!e.target.matches("input")) return;
  // Getting index from dataset
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  storeInLocalStorage();
  displayItems(items, itemsList);
};

// As loading
displayItems(items, itemsList);
// Eventlistener
addItems.addEventListener("submit", addToItems);
itemsList.addEventListener("click", doneUpdate);
