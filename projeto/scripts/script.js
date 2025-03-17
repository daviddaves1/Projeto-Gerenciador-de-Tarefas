// Evento de click que adiciona tarefa
const addTask = document.querySelector("#add-task");

addTask.addEventListener("click", (e)=> {
    e.preventDefault();
    addTaskList();
});

function addTaskList() {
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {

        const newTask = document.createElement("li");
        newTask.classList.add("task-box");

        const taskTitleElement = document.createElement("span");
        taskTitleElement.classList.add("task-title");
        taskTitleElement.textContent = taskTitle;

        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined", "delete-forever");
        deleteIcon.textContent = "delete_forever";
        deleteIcon.addEventListener("click", ()=> {
            removeTask(newTask);
        });

        const checkIcon = document.createElement("span");
        checkIcon.classList.add("material-symbols-outlined", "check-circle");
        checkIcon.textContent = "check_circle";
        checkIcon.addEventListener("click", ()=>{
            completeTask(newTask);
        });

        newTask.appendChild(taskTitleElement);
        newTask.appendChild(deleteIcon);
        newTask.appendChild(checkIcon);

        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // Limpa o texto
        document.querySelector("#task-title").value = "";
    }
}

function removeTask(task) {
    task.remove();
}

// Função que marca a tarefa como concluída  
function completeTask(task) {
    task.classList.toggle("completed-task");

    const taskTitle = task.querySelector(".task-title");
    taskTitle.classList.toggle("completed-task-title");

    if (task.classList.contains("completed-task")) {
        task.style.backgroundColor = "#34073d";
        task.style.color = "white";
        task.style.border = "1px solid #ffffff7b";
        taskTitle.style.textDecoration = "line-through";
    } else {
        task.style.backgroundColor = "white";
        task.style.color = "#34073d";
        taskTitle.style.textDecoration = "none"; 
    }
}
