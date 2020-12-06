const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");

var num = list.length;
let listLenght = list.lenght;

const createTodo = (todo) => {
  const html = `<li id="radio">
                  <input type="checkbox" class="radio" >
                  <label>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html;
};
function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    num = num + 1;

    document.getElementById("demo").innerHTML = num + "  tasks left";
    createTodo(todo);
    // submitForm.reset();
  }
}

function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    num = num - 1;
    document.getElementById("demo").innerHTML = num + "  tasks left";
  }
}
todoList.addEventListener("click", deleteTodos);
submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);
