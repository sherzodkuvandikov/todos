var elTodoForm = $_('.todos-form');
var elTodoInput = $_('.todo-input', elTodoForm);
var elTodoList = $_('.todo-list', elTodoForm);

var elTodoTemplate = $_('#todo-item').content;
var todoCheckbox = $_('.todo-checkbox', elTodoTemplate);

var elClearBtn = $_('.clear-btn');
var elShowAllBtn = $_('.show-all');
var elShowActiveBtn = $_('.show-active');
var elShovCompletedBtn = $_('.show-completed');

// ARRAYS

var todosArray = JSON.parse(localStorage.getItem('todos')) || [];


var createNewTodo = function () {
  var newTodoFragment = document.createDocumentFragment();

  todosArray.forEach(function(todo){
    var newTodo = elTodoTemplate.cloneNode(true);

    $_('.todo-text', newTodo).textContent = todo.title;
    newTodoFragment.appendChild(newTodo);
  });

  elTodoList.appendChild(newTodoFragment);
}
createNewTodo();

elTodoForm.addEventListener('submit', evt => {
  evt.preventDefault();
  elTodoList.innerHTML = '';

  var enteredValue = elTodoInput.value.trim();

  var searchWord = new RegExp(enteredValue, "gi")
  var isExist;
  todosArray.forEach(function(todo) {
    isExist = todo.title.match(searchWord);
  })

  var i = todosArray.length;
  if (!isExist) {
    todosArray.push({
      title: enteredValue,
      id: i+1,
    })
    localStorage.setItem('todos', JSON.stringify(todosArray));
  }

  createNewTodo();
  elTodoInput.value = '';

});

elClearBtn.addEventListener('click', function(evt){
  elTodoList.innerHTML = '';
  todosArray = [];
  localStorage.clear();
});
