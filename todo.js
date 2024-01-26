// Add event listener for 'Enter' key
document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  
  function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
  
    if (todoInput.value.trim() !== '') {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
  
      const todoText = document.createElement('span');
      todoText.innerText = todoInput.value;
      todoItem.appendChild(todoText);
  
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash';
      deleteIcon.onclick = function () {
        todoItem.remove();
      };
      todoItem.appendChild(deleteIcon);
  
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  }
  document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  
  function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
  
    if (todoInput.value.trim() !== '') {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
  
      const todoText = document.createElement('span');
      todoText.innerText = todoInput.value;
      todoItem.appendChild(todoText);
  
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash';
      deleteIcon.onclick = function () {
        todoItem.remove();
      };
      todoItem.appendChild(deleteIcon);
  
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  }
  