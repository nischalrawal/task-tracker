import { createTask, updateTasks } from './tasks/tasks.service.js';
import { crateManyTask } from './tasks/tasks.service.js';
import { getAllTasks } from './tasks/tasks.service.js';
import { getTaskById } from './tasks/tasks.service.js';

const userTask = createTask({
  title: 'Learning Js',
  description: 'Started learning Js',
  priority: 'HIGH',
});

const tasks = crateManyTask([
  {
    title: 'Learning Js',
    description: 'Started learning Js',
    priority: 'HIGH',
  },
  {
    title: 'Learning Js',
    description: 'Started learning Js',
    priority: 'HIGH',
  },
]);

// fetch all tasks
const allTasks = getAllTasks();

// fetch task by id

const fetchTaskById = getTaskById(userTask.id);

const changedTask = updateTasks(userTask.id, {
  title: 'id',
});

console.log('Sucessfully created Task', userTask);
console.log(allTasks);
console.log('Fetched Task Sucessfully by [getTaskById]', fetchTaskById);
