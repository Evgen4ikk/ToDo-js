const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#todo-list');
const addTaskButton = document.querySelector("#add-task");
let taskId = 1;

function addTask() {
    const taskName = input.value;

  if (taskName !== "") {
    taskId++;
    const html = `
      <li class="todo-item">
        <input type="checkbox" id="${taskId}">
        <label for="${taskId}">${taskName}</label>
        <button class="delete-button">Удалить</button>
      </li>
    `;
    list.insertAdjacentHTML("afterbegin", html);

    input.value = "";
  }
}

form.addEventListener('submit', event => {
    event.preventDefault();
});

addTaskButton.addEventListener("click", addTask);

list.addEventListener('click', event => {
  if (event.target.classList.contains('delete-button')) {
    event.target.closest('li').remove();
  }
});
