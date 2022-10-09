// Selectors
const body = document.querySelector("html")
const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");
const tostMessage = document.querySelector(".TostMessage");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// Functions
function changeModeLight(){
  // body.classList.contains("lightMode")
  //   ? body.classList.remove("lightMode")
  //   : body.classList.add("lightMode");
  if(!body.classList.contains("lightMode")) body.classList.add("lightMode");
}
function changeModeDark() {
  // body.classList.contains("lightMode")
  //   ? body.classList.remove("lightMode")
  //   : body.classList.add("lightMode");
  if (body.classList.contains("lightMode")) body.classList.remove("lightMode");
}
function hideTost() {
  tostMessage.classList.remove("TostMessageShow");
}
function showTost() {
  tostMessage.classList.add("TostMessageShow");
  setTimeout(hideTost, 2500);
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
    filterTodos(filterOption.value);
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
  filterTodos(filterOption.value);
}
function filterTodos(value) {
  const todos = [...todoList.childNodes];
  todos.forEach((todo) => {
    if (value == "all") todo.style.display = "flex";
    if (value == "completed") {
      todo.classList.contains("completed")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    }
    if (value == "uncompleted") {
      !todo.classList.contains("completed")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    }
  });
}

// Events
moon.addEventListener("click", changeModeLight);
sun.addEventListener("click", changeModeDark);
todoList.addEventListener("click", checkRemove);
todoAddButton.addEventListener("click", addTodo);
filterOption.addEventListener("change", (e) => filterTodos(e.target.value));
