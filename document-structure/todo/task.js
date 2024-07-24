const form = document.querySelector('form');
const taskText = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskTemplate =    "<div class='task'>\
                            <div class='task__title'>\
                                Test\
                            </div>\
                            <a href='#' class='task__remove'>\
                                &times;\
                            </a>\
                        </div>";
const taskDiv = document.querySelector('.task__title');
const taskId = 'task';
const taskClass = '.task';
let taskCount = 0;

function removeTask (el) {
    document.getElementById(taskId+el.currentTarget.id).remove();
}

function addTask() {
    let taskDiv0 = document.querySelector(taskClass);
    if (taskDiv0) {
        if (taskText.value) {
            let newTsak = taskDiv0.cloneNode(true);
            newTsak.setAttribute('id', taskId+taskCount);
            tasksList.appendChild(newTsak);
        }
        else {
            console.log('enter some text');
        }
    }
    else {
        if (taskText.value) {
            tasksList.innerHTML = taskTemplate;
            document.querySelector(taskClass).setAttribute('id', taskId+taskCount);
        }
        else {
            console.log('enter some text');
        }
    }
    if (document.getElementById(taskId+taskCount)) {
        document.getElementById(taskId+taskCount).querySelector('.task__title').textContent = taskText.value.trim();
        let el = document.getElementById(taskId+taskCount).children[1];
        el.addEventListener('click', removeTask, false)
        el.id = taskCount;
        taskCount++;
    }
    form.reset();
}

form.addEventListener('submit', addTask, false);