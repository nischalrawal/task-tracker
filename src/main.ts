import { createTask } from './tasks/tasks.service.js';
import { crateManyTask } from './tasks/tasks.service.js';

const userTask = createTask({
  title: 'Learning Js',
  description: 'Started learning Js',
  priority: 'HIGH',
});

console.log('Sucessfully created Task', userTask);

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

console.log('Tasks created by user', tasks);
