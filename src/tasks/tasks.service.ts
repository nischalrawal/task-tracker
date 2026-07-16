import { Task } from './tasks.types.js';
import { type CreateTaskInput } from './tasks.types.js';
import { type UpdateTaskInput } from './tasks.types.js';
import { generateId } from '../utils/id.js';
import { tasks } from './tasks.store.js';

export function createTask(input: CreateTaskInput): Task {
  if (!input.title.trim()) {
    throw new Error('Title missing');
  }

  //create date
  const now = new Date();

  const task: Task = {
    id: generateId(),
    title: input.title.trim(),
    description: input.description,
    status: input.status ?? 'TODO',
    priority: input.priority ?? 'MEDIUM',
    createdAt: now,
    updatedAt: now,
  };

  tasks.push(task);

  return task;
}

// create many tasks
export function crateManyTask(inputs: CreateTaskInput[]): Task[] {
  const userCreatedTask = inputs.map((input) => {
    return createTask(input);
  });

  return userCreatedTask;
}

//get all tasks
export function getAllTasks(): Task[] {
  return [...tasks];
}

// fetch task by id
export function getTaskById(id: string): Task | null {
  if (!id) {
    throw new Error('Must provide a task id');
  }
  const task = tasks.find((task) => task.id === id);
  return task ?? null;
}

export function updateTasks(id: string, input: UpdateTaskInput): Task | null {

  //check if the id exist of that task
  if (!id.trim()) {
    throw new Error('Must provide task id to update');
  }

  if (Object.keys(input).length === 0) {
    throw new Error('Must provide one field to update');
  }

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return null;
  }

  if (input.title !== undefined) {
    const trimmedTitle = input.title.trim();

    if (!trimmedTitle) {
      throw new Error('Title cannot be empty');
    }

    task.title = trimmedTitle;
  }

  if (input.status !== undefined) {
    task.status = input.status;
  }

  if (input.priority !== undefined) {
    task.priority = input.priority;
  }

  task.updatedAt = new Date();

  return task;
}

//delete function

export function deleteTask(id: string): Task | null{


  if(!id.trim()){
    throw new Error('Must provide id to delete task');
  }

  const taskIndex = tasks.findIndex((task)=> {
    return task.id === id
  });

  if (taskIndex === -1){
    return null;
  }

  const deletedTasks = tasks.splice(taskIndex, 1);
  const deleteTask = deletedTasks[0];

  return deleteTask;


}