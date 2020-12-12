// Variables
const shoppingList = document.querySelector('.shopping-list ul');
const addItemBtn = document.querySelector('.add-item');
const itemInput = document.querySelector('.list-item-input');
const deleteListBtn = document.querySelector('.delete-all button');

// Event Listeners
addItemBtn.addEventListener('click', addListItem);
shoppingList.addEventListener('click', checkProgress);
deleteListBtn.addEventListener('click', deleteList);

// Adding an item to the shopping list
function addListItem() {
  if (itemInput.value) {
    // Create a div element
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');
    // Create an li element
    const itemList = document.createElement('li');
    itemList.textContent = itemInput.value;
    itemList.classList.add('item-li');
    itemDiv.appendChild(itemList);
    // Check button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
    completeBtn.classList.add('complete');
    itemDiv.appendChild(completeBtn);
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.classList.add('delete');
    itemDiv.appendChild(deleteBtn);
    // Append the element to the shopping list ul
    shoppingList.appendChild(itemDiv);
    // Clear input value back to an empty string
    itemInput.value = '';
  } else {
    alert('Input field must involve words or characters');
  }
}

// Checking off or deleting single list items
function checkProgress(e) {
  const item = e.target;
  // Check item
  if (item.classList[0] === 'complete') {
    item.parentElement.classList.toggle('checked-off');
  }
  // Remove item
  if (item.classList[0] === 'delete') {
    item.parentElement.remove();
  }
}

// Key press event to run addListItem function
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    addListItem();
  }
});

// Delete entire shopping list
function deleteList() {
  if (confirm('WARNING! Clicking OK will delete your entire shopping list.')) {
    const items = document.querySelectorAll('.item-div');
    for (let i = 0; i < items.length; i++) {
      items[i].remove();
    }
  }
}
