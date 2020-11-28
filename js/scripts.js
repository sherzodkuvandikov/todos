var elTodoForm = $_('.todos-form');
var elTodoList = $_('.todo-list', elTodoForm);
var elTodoTemplate = $_('#todo-item').content;
var elTodoInput = $_('.todo-input', elTodoForm);
var elClearBtn = $_('.clear-btn');

var todoCheckbox = $_('.todo-checkbox');
var elShowAllBtn = $_('.show-all');
var elShowActiveBtn = $_('.show-active');
var elShovCompletedBtn = $_('.show-completed');

console.log(todoCheckbox,elShowAllBtn,elShowActiveBtn,elShovCompletedBtn);

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

  createNewTodo();
  elTodoInput.value = '';

});

  elClearBtn.addEventListener('click', function(evt){
    elTodoList.innerHTML = '';
       = [];
    localStorage.clear();
  });
