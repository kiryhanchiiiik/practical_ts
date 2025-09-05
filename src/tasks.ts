const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isComplete: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storageTasks = localStorage.getItem("tasks");
  return storageTasks ? JSON.parse(storageTasks) : [];
}

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isComplete: false,
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update local storage
    updateStorage();
    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
taskForm?.addEventListener("submit", createTask);
