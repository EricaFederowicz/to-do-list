document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('input-box');
    const addButton = document.querySelector('.add-button');
    const taskList = document.getElementById('task-list');
  
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(storedTasks);
  
    addButton.addEventListener('click', function () {
      const taskName = inputBox.value.trim();
  
      if (taskName !== '') {
        const newTask = {
          name: taskName,
          completed: true
        };
  
        storedTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
  
        renderTasks(storedTasks);
  
        inputBox.value = '';
      }
    });
  
    taskList.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.classList.contains('complete-button')) {
        const listItem = target.closest('.list-item');
        const index = Array.from(listItem.parentNode.children).indexOf(listItem);
  
        storedTasks[index].completed = !storedTasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
  
        renderTasks(storedTasks);
      }
    });
  
    function renderTasks(tasks) {
      taskList.innerHTML = '';
  
      tasks.forEach(function (task, index) {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
  
        listItem.innerHTML = `
          <button class="complete-button ${task.completed ? 'marked' : ''}">
            <img src="img/check.png">
          </button>
          <section class="task ${task.completed ? 'marked' : ''}">
            <span class="task-name">${task.name}</span>
          </section>
        `;
  
        taskList.appendChild(listItem);
      });

      applyStylesToDynamicButtons();
    }

    function applyStylesToDynamicButtons() {
        const completeButtons = document.getElementsByClassName('complete-button');

        for (const button of completeButtons) {
            
            button.addEventListener('click', function() {
                this.classList.toggle('marked');
            });
        }
    }

    applyStylesToDynamicButtons();
});


  