// Selecting necessary elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#newtask');
const todoList = document.querySelector('#todo-list');

// Array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
  // Clearing the todo list
  todoList.innerHTML = '';

  // Looping through each todo item
  todos.forEach((todo, index) => {
    // Creating a list item
    const listItem = document.createElement('li');
    listItem.textContent = todo;

    // Creating a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('child');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('child');

    // Adding event listener to delete button
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });

    editButton.addEventListener('click',() =>{
      editTodo(index);
    });

    // Appending the list item and delete button to the todo list
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    todoList.appendChild(listItem);
  });
}

// Function to add a new todo
function addTodo() {
  // Getting the value from the input field
  const todoText = todoInput.value.trim();
  if(todoText == ''){
    alert("Please enter some text!!!");
  }
  // Adding the todo to the array
  else if (todoText !== '') {
    todos.push(todoText);
    todoInput.value = '';
    renderTodos();
  }
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
function  editTodo(index){
  var editedTodo = prompt("Edit todo", todos[index]);
        if (editedTodo === null || editedTodo === "") {
          alert("Please enter some text!!!");
          return;
        }
        todos[index] = editedTodo;
  renderTodos();
}

// Adding event listener to the form
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});
