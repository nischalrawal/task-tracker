import { Task } from './tasks.types.js';
import { type CreateTaskInput } from './tasks.types.js';
import { type UpdateTaskInput } from './tasks.types.js';
import { generateId } from '../utils/id.js';
import { tasks } from './tasks.store.js';

export function createTask(input: CreateTaskInput): Task {
  if (!input.title.trim()) {
    throw new Error('Title missing');
  }

  //date
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

export function crateManyTask(inputs: CreateTaskInput[]): Task[] {
  const userCreatedTask = inputs.map((input) => {
    return createTask(input);
  });

  return userCreatedTask;
}
