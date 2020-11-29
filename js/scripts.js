var elTodoForm = $_('.todos-form');
var elTodoInput = $_('.todo-input', elTodoForm);
var elTodoList = $_('.todo-list', elTodoForm);

var elTodoTemplate = $_('#todo-item').content;
var elTodoCheckbox= $_('.todo-checkbox', elTodoTemplate);

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
    $_('.todo-checkbox', newTodo).dataset.id = todo.id;
    $_('.todo-text', newTodo).dataset.id = todo.id;

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
  });

  var i = todosArray.length;
  if (!isExist) {
    todosArray.push({
      title: enteredValue,
      id: i+1,
      complated: false
    })

    localStorage.setItem('todos', JSON.stringify(todosArray));
  };

  createNewTodo();
  elTodoInput.value = '';
});

elTodoList.addEventListener('click', function(evt){
  evt.target.matches('.todo-checkbox');

  if (evt.target.matches('.todo-checkbox').checked) {
    console.log('Bosvoldiz')
  } else {
    console.log('Bosmadizku kuch bormi ozi')
  }

});


elClearBtn.addEventListener('click', function(evt){
  elTodoList.innerHTML = '';
  todosArray = [];
  localStorage.clear();
});
