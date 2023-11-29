function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  todoList.appendChild(newTodo);
  todoInput.value = '';

  newTodo.onclick = function() {
    this.parentNode.removeChild(this);
  };
}
