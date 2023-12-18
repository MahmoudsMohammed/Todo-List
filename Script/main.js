// Select elements
const add = document.getElementById('add'),
  submit = document.getElementById('submit'),
  filter = document.getElementById('filter'),
  tasks = document.querySelector('.tasks'),
  clear = document.getElementById('clear');

// Event Listeners
submit.addEventListener('click', addTask);
tasks.addEventListener('click', removeTask);
clear.addEventListener('click', clearAll);
filter.addEventListener('keyup', filterTasks);
document.addEventListener('DOMContentLoaded', loadTasks);

// Our Functions
// check for input value and create task
function addTask(e) {
  if (add.value === '') {
    alert('Add a Task First');
  } else {
    createTask(add.value);
    store(add.value);
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

// Clear All Task List
function clearAll(e) {
  while (tasks.firstElementChild) {
    tasks.firstElementChild.remove();
  }
}

// Filter tasks
function filterTasks(e) {
  let all = Array.from(document.getElementsByTagName('li'));
  all.forEach((text) => {
    if (
      text.textContent
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    ) {
      text.style.display = 'flex';
    } else {
      text.style.display = 'none';
    }
  });
}

// Load Tasks
function loadTasks(e) {
  let tasks;
  if (localStorage.tasks === undefined) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.tasks);
  }
  tasks.forEach((task) => createTask(task));
}

// Store in local storage
function store(task) {
  let tasks;
  if (localStorage.tasks === undefined) {
    tasks = [];
    tasks.push(task);
    localStorage.tasks = JSON.stringify(tasks);
  } else {
    tasks = JSON.parse(localStorage.tasks);
    tasks.push(task);
    localStorage.tasks = JSON.stringify(tasks);
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
