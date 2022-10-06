// Selectors
const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");
const tostMessage = document.querySelector(".TostMessage");

// Functions
function hideTost() {
  tostMessage.classList.remove("TostMessageShow");
}
function showTost() {
  tostMessage.classList.add("TostMessageShow");
  setTimeout(hideTost, 1500);
}
function addTodo(e) {
  e.preventDefault();
  const todoMaker = document.createElement("div");
  todoMaker.classList.add("todo");
  const newTodo = `<span>${todoInput.value}</span>
<div class="todo-childs">
<span> <i class="far fa-check-square"></i> </span>
<span> <i class="far fa-trash-alt"></i> </span>
</div>`;
  todoMaker.innerHTML = newTodo;
  if (todoInput.value != "") {
    todoList.appendChild(todoMaker);
    todoInput.value = "";
  } else {
    showTost();
  }
}
function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const todo = item.parentElement.parentElement.parentElement;
  if (classList[1] === "fa-check-square") todo.classList.toggle("completed");
  if (classList[1] === "fa-trash-alt") todo.remove();
}
function filterTodos(e) {
  const todos = [...todoList.childNodes];
  const filter = e.target.value;
  todos.forEach((todo) => {
    if (filter == "all") todo.style.display = "flex";
    if (filter == "completed") {
      todo.classList.contains("completed")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    }
    if (filter == "uncompleted") {
      !todo.classList.contains("completed")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    }
  });
}

// Events
todoList.addEventListener("click", checkRemove);
todoAddButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodos);