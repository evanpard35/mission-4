const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const categorySelect = document.querySelector('#categorySelect');
const deleteAllBtn = document.querySelector('.deleteAll');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addList(e);
    }
});
deleteAllBtn.addEventListener('click', deleteAllTasks);

function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskName = document.createElement('span');
    const dateTime = document.createElement('span');
    const category = document.createElement('span');
    const delBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    taskName.className = 'task-name';
    dateTime.className = 'date-time';
    category.className = 'category';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        taskName.textContent = input.value;
        dateTime.textContent = `${date} ${time}`;
        category.textContent = categorySelect.value;
        input.value = '';

        newLi.appendChild(checkbox);
        newLi.appendChild(taskName);
        newLi.appendChild(dateTime);
        newLi.appendChild(category);
        newLi.appendChild(delBtn);
        notCompleted.appendChild(newLi);

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                newLi.classList.add('completed');
                Completed.appendChild(newLi);
            } else {
                newLi.classList.remove('completed');
                notCompleted.appendChild(newLi);
            }
        });

        delBtn.addEventListener('click', function () {
            newLi.remove();
        });
    }
}

function deleteAllTasks() {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    notCompleted.innerHTML = '<h3>TO DO</h3>'; 
    Completed.innerHTML = '<h3>DONE</h3>'; 
}
