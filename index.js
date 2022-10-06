const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");
const tostMessage = document.querySelector(".TostMessage");

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
  const newTodo = `
<span>${todoInput.value}</span>
<div class="todo-childs">
<span> <i class="far fa-check-square"></i> </span>
<span> <i class="far fa-trash-alt"></i> </span>
</div>
`;
  todoMaker.innerHTML = newTodo;

  if (todoInput.value != "") {
    todoList.appendChild(todoMaker);
    todoInput.value = "";
  } else {
    showTost();
    // setTimeout(showTost(), 1)
  }
}
function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;

  if (classList[1] === "fa-check-square") {
    const todo = item.parentElement.parentElement.parentElement;
    todo.classList.toggle("completed");
  } else if (classList[1] === "fa-trash-alt") {
    const todo = item.parentElement.parentElement.parentElement;
    todo.remove();
  }
}

function filterTodos(e) {
  const todos = [...todoList.childNodes];
  todos.forEach((todo) => {
    if (e.target.value == "all") {
      todo.style.display = "flex";
    }
    if (e.target.value == "completed") {
      const y = [...todo.classList];
      if (y.includes("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
    if (e.target.value == "uncompleted") {
      const y = [...todo.classList];
      if (!y.includes("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
todoList.addEventListener("click", checkRemove);
todoAddButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodos);
