// Select elements
const add = document.getElementById('add'),
  submit = document.getElementById('submit'),
  filter = document.getElementById('filter'),
  tasks = document.querySelector('.tasks'),
  clear = document.getElementById('clear');

// Event Listeners
submit.addEventListener('click', addTask);
tasks.addEventListener('click', removeTask);

// Our Functions
// check for input value and create task
function addTask(e) {
  if (add.value === '') {
    alert('Add a Task First');
  } else {
    createTask(add.value);
    add.value = '';
  }
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('remove')) {
    if (confirm('Are You Sure ?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Create Task and Set on List
function createTask(task) {
  let e = document.createElement('li'),
    text = document.createTextNode(task),
    link = document.createElement('a');
  link.classList.add('remove');
  e.append(text);
  link.innerHTML = '<i class="fa fa-remove"></i>';
  e.append(link);
  tasks.append(e);
}
