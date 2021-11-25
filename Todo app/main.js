const addTaskBtn = document.getElementById('add-task-btn'),
      descTaskInput = document.getElementById('description-task'),
      inputs = document.getElementsByClassName('input'),
      todosWrapper = document.querySelector('.todos-wrapper'),
      clearAllTaskCompleted = document.getElementById('clear-task'),
      numberOfItemsComp = document.getElementById('number-of-items-completed'),
      numberOfItems = document.getElementById('number-of-items');

let todoItemElems = [];
let tasks;
localStorage.length < 1 ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

numberOfItems.innerText = localStorage.getItem('leftItems');
numberOfItemsComp.innerText = localStorage.getItem('completedItems');

const createTemplate = (task, index) =>{
    return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <div class="check">
                <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
            </div>
            <div class="description">${task.description}</div>
            <div class="delete">
                <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
            </div>
        </div>
    `
}

const addTaskToDos = () =>{
    todosWrapper.innerHTML = "";
    if(tasks.length > 0){
        tasks.forEach((item, index) =>{
            todosWrapper.innerHTML += createTemplate(item, index);
        })
        todoItemElems = document.querySelectorAll('.todo-item');
    }
}

addTaskToDos();

const updateLocalStorage = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const countItemsComp = number =>{
    numberOfItemsComp.innerText = +numberOfItemsComp.innerText + number;
    localStorage.setItem('completedItems', numberOfItemsComp.innerText);
}

const updateItemsLeft = number =>{
    numberOfItems.innerText = +numberOfItems.innerText + number;
    localStorage.setItem('leftItems', numberOfItems.innerText);
}

const completeTask = index =>{
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        todoItemElems[index].classList.add('checked');
        updateItemsLeft(-1);
        countItemsComp(1);
    }else{
        todoItemElems[index].classList.remove('checked');
        updateItemsLeft(1);
        countItemsComp(-1);
    }
    appearenceBtnClearComp();
    updateLocalStorage();
    addTaskToDos();
}

const deleteTask = index =>{
    todoItemElems[index].classList.add('delition');
    setTimeout(()=>{
        //console.log(tasks[index]);
        tasks.splice(index, 1);
        if(!todoItemElems[index].classList.contains('checked')){
            updateItemsLeft(-1);
        }
        else{
            countItemsComp(-1);
        }
        appearenceBtnClearComp();
        updateLocalStorage();
        addTaskToDos();
    },500)
}

const appearenceBtnClearComp = () =>{
    if(numberOfItemsComp.innerText > 0){
        clearAllTaskCompleted.classList.add('active');
    }else{
        clearAllTaskCompleted.classList.remove('active');
    }
}

appearenceBtnClearComp();

function Task(description){
    this.description = description;
    this.completed = false;
}

clearAllTaskCompleted.addEventListener('click', e =>{
    todoItemElems.forEach( index =>{
        if(index.classList.value === 'todo-item checked'){
            index.classList.add('delition');
            tasks.splice(index, 1);
            countItemsComp(-1);
        }
    })
    appearenceBtnClearComp();
    updateLocalStorage();
    addTaskToDos();
})

addTaskBtn.addEventListener('click', () =>{
    if(descTaskInput.value.length < 1){
        for(let key of inputs){
            key.classList.add('error');
            alert('You must enter the task!');
        }
    }else{
        for(let key of inputs){
            key.classList.remove('error');
        }
        tasks.push(new Task(descTaskInput.value));
        updateItemsLeft(1);
        updateLocalStorage();
        addTaskToDos();
        descTaskInput.value = "";
    }
    
})
