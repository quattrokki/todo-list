const inp = document.querySelector('#inp');
const createBtn = document.querySelector('#create_btn');
const editeBtn = document.querySelector('#edit_btn');
const deleteBtn = document.querySelector('#delete_btn');
const todoBox = document.querySelector('#todo-list');
let newTask = "";



const createNewTask = (task) => {
    const newElem = document.createElement("div");
    newElem.classList.add('todo-item');
    
    newElem.innerHTML = `<span>${task}</span>
    <div class="btn_container">
        <button id="edit_btn">update</button>
        <button id="delete_btn">delete</button>
    </div>`;

    todoBox.appendChild(newElem);
    inp.value = "";
    newTask = "";

const deleteButton = newElem.querySelector('#delete_btn');
deleteButton.addEventListener('click', (e) => {
   todoBox.removeChild(newElem);
});

const editButton = newElem.querySelector('#edit_btn');
editButton.addEventListener('click', () => {
    const span = newElem.querySelector('span');
    const newTaskName = prompt("enter new task name", span.innerText);
    if (newTaskName) {
        span.innerText = newTaskName;
    }else{
        alert('nichego net ')
    }
   
});
};

inp.addEventListener("input", (e)=>{
    newTask = e.target.value;
});

inp.addEventListener('keyup',(e) => {
    if (e.key === 'Enter') {
        newTask = e.target.value;
        if (newTask) {
            createNewTask(newTask);
        }else{
            alert('Pusto, piwi normalno')
        }
    }
})

createBtn.addEventListener('click', () => {
    if (newTask) {
        createNewTask(newTask);
    }else{
        alert('Pusto,  piwi normalno')
    }
    
})

deleteBtn?.addEventListener('click', (e) =>{
    console.log("click");
    
});





















