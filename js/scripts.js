var elTodoForm = $_('.todos-form');
var elTodoList = $_('.todo-list', elTodoForm);
var elTodoTemplate = $_('#todo-item').content;
var elTodoInput = $_('.todo-input', elTodoForm);

console.log(elTodoForm,elTodoInput,elTodoList,elTodoTemplate);

// ARRAYS

var todosArray = JSON.parse(localStorage.getItem('todos')) || [];


var createNewTodo = function () {
  var newTodoFragment = document.createDocumentFragment();

  todosArray.forEach(function(todo){
    var newTodo = elTodoTemplate.cloneNode(true);

    $_('.todo-text', newTodo).textContent = todo;

    newTodoFragment.appendChild(newTodo);
    return newTodo;
  });

  elTodoList.appendChild(newTodoFragment);
}
createNewTodo();

  elTodoForm.addEventListener('submit', evt => {
    evt.preventDefault();
    elTodoList.innerHTML = '';


    var enteredValue = elTodoInput.value.trim();
    if (!todosArray.includes(enteredValue)) {
      todosArray.push(enteredValue);
      localStorage.setItem('todos', JSON.stringify(todosArray));
    }

  });
