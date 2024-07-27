
function removeTask (el) {
    el.currentTarget.closest('.task').remove();
}

function addTask() {
    event.preventDefault();
    if (document.getElementById('task__input').value) {
        let task = document.createElement('div')
        task.classList.add('task');
        let taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = document.getElementById('task__input').value;
        task.appendChild(taskTitle);
        let taskRemove = document.createElement('a');
        taskRemove.setAttribute('href','#');
        taskRemove.innerHTML = '&times;';
        taskRemove.classList.add('task__remove');
        taskRemove.addEventListener('click', removeTask, false)
        task.appendChild(taskRemove)
        document.getElementById('tasks__list').appendChild(task)
    }
    else {
        console.log('enter some text');
    }
    document.querySelector('form').reset();
}

document.querySelector('form').addEventListener('submit', addTask, false);