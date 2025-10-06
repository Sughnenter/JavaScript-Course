const firstInput = document.querySelector('.first-todo-input');
const todoList = [];


function addTodo() {
  const todoName = firstInput.value;
  todoList.push(todoName);
  console.log(todoList);
}