
const todoList = ['make dinner', 'wash clothes'];
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML)

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}


const firstInput = document.querySelector('.first-todo-input');
function addTodo() {
  const todoName = firstInput.value;
  todoList.push(todoName);
  console.log(todoList);
  renderTodoList()
}
const secondInput = document.querySelector('.second-todo-input');
function addsecondTodo() {
  const todoName = secondInput.value;
  todoList.push(todoName);
  console.log(todoList);
  renderTodoList()
}