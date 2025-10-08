
const todoList = [{ name: 'make dinner', dueDate: '2025-10-07' }, { name: 'wash clothes', dueDate: '2025-10-07' }];
function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach( (todoObject, index) =>{
    const { name, dueDate } = todoObject; //destructuring, does the same thing as the line of code above
    const html = `<div> ${name}</div> <div> ${dueDate}</div>
    <button class="delete-button" onclick="
    todoList.splice(${index}, 1); renderTodoList()"
    >Delete</button> `;
    todoListHTML += html;
  }
  );


  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}


const firstInput = document.querySelector('.first-todo-input');
function addTodo() {
  const todoName = firstInput.value;
  todoList.push(todoName);
  renderTodoList()
}
const secondInput = document.querySelector('.second-todo-input');
function addsecondTodo() {
  const todoName = secondInput.value;
  todoList.push(todoName);
  renderTodoList()
}
const dateInput = document.querySelector('.date-todo-input')
const FinalInput = document.querySelector('.todo-input');
function addFinalTodo() {
  const name = FinalInput.value;
  const dueDate = dateInput.value;
  todoList.push({ name, dueDate });
  renderTodoList()
}
