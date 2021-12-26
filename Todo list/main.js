//select the elements

const dataElement = document.getElementById("date");
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//Show todays date

const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();
const year = time.getFullYear();
dataElement.innerHTML =
  days[day] + ", " + date + " " + months[month] + " " + year;

//Save our "todos" to local Storage
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  //Build li Items

  if (todoText) {
    const todoE1 = document.createElement("li");
    if (todo && todo.completed) {
      todoE1.classList.add("completed");
    }
    todoE1.innerText = todoText;

    //mark as completed

    todoE1.addEventListener("click", () => {
      todoE1.classList.toggle("completed");
      updateLS();
    });

    //Delete

    todoE1.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoE1.remove();
      updateLS();
    });

    //add it to the DOM

    todosUL.appendChild(todoE1);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  todoE1 = document.querySelectorAll("li");
  const todos = [];

  todoE1.forEach((todoE1) => {
    todos.push({
      text: todoE1.innerText,
      completed: todoE1.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
