const inp = document.querySelector('#inp-todo');
const addBtn = document.querySelector('#add_btn');
const todoBox = document.querySelector('#todo-list');
let newTask = "";


const createNewTask = ((task) =>{
 let time = new Date();
        let hours = time.getHours() 
        let minutes = time.getMinutes()
        let days = time.getDate()
        let months = time.getMonth()
        let years = time.getFullYear()
       

    const newElem = document.createElement('div');
    newElem.classList.add('todo-elem');
    newElem.innerHTML = `<span class = "task">${task} <span class = "time">${hours}:${minutes} <span class = "date">${days}.0${1+months}.${years}</span>`
   
       

    todoBox.appendChild(newElem);
   inp.value = "";
   newTask = "";    
});
addBtn.addEventListener('click',() => {
    if (newTask) {
        createNewTask(newTask)
    } else {
        alert('None')
    }
})
inp.addEventListener("input", (e)=>{
    newTask = e.target.value;
});


inp.addEventListener('keyup',(e) => {
    if (e.key === 'Enter') {
        newTask = e.target.value;
        if (newTask) {
            createNewTask(newTask);
        }else{
            alert('None')
        }
    }
})

























