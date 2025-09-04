const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isComplete: boolean;
};

const tasks: Task[] = [];

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isComplete: false,
    };
    addTask(task);
    // add task to list
    // render tasks
    // update local storage
    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

taskForm?.addEventListener("submit", createTask);
