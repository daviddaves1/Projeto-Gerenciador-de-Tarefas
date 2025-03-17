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

        // Limpa o texto
        document.querySelector("#task-title").value = "";
    }
}

