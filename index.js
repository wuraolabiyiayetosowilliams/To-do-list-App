function addTask() {
  const inputField = document.getElementById('taskInput');
  const inputValue = inputField.value.trim();

  if (inputValue === '') {
    alert('Please enter a valid task.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = function() {
    listItem.classList.toggle('completed', checkbox.checked);
  };

  const taskText = document.createElement('span');
  taskText.textContent = inputValue;

  const removeButton = document.createElement('button');
  removeButton.className = 'removeButton';
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    listItem.classList.add('fade-out');
    setTimeout(() => {
      listItem.remove();
    }, 500);
  };

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(removeButton);
  listItem.onclick = function() {
    listItem.classList.toggle('completed');
  };

  listItem.classList.add('fade-in');
  taskList.appendChild(listItem);

  // Add double-click event for editing
  listItem.addEventListener('dblclick', function() {
    const newTaskName = prompt('Enter the new task name:', taskText.textContent);
    if (newTaskName !== null) {
      taskText.textContent = newTaskName;
    }
  });


  inputField.value = '';

}
