import { createTask, deleteTask, filterTasks, updateTasks } from './tasks/tasks.service.js';
import { crateManyTask } from './tasks/tasks.service.js';
import { getAllTasks } from './tasks/tasks.service.js';
import { getTaskById } from './tasks/tasks.service.js';
import { tasks } from './tasks/tasks.store.js';

const userCreatedTask = createTask({
  title: 'Learning Js',
  description: 'Started learning Js',
  priority: 'HIGH',
  status: 'IN_PROGRESS',
});
console.log('Sucessfully created Task', userCreatedTask);

// create many tasks

const createManytasks = crateManyTask([
  {
    title: 'WorldCup final 2026',
    description: 'Watching Worldcup final 2026',
    priority: 'LOW',
  },
  {
    title: 'Coding',
    description: 'Coding While Watching world cup final',
    priority: 'MEDIUM',
  },
]);

// fetch all tasks
const fetchedAllTasks = getAllTasks();
console.log('Fetched all task', fetchedAllTasks);

// fetch task by id
const fetchTaskById = getTaskById(tasks[0].id);
console.log('Fetched Task Sucessfully by [getTaskById]', fetchTaskById);

// update Task
const userUpdatedTask = updateTasks(userCreatedTask.id, {
  title: 'id',
});

if (!userUpdatedTask) {
  console.log('task not found');
} else console.log('Task Updated Sucessfully', userUpdatedTask);

// delete task
// const userDeletedTask = deleteTask(userCreatedTask.id);
// console.log('Task deleted successfully', userDeletedTask);

//filter task
const filterTask = filterTasks({ priority: 'HIGH', status: 'IN_PROGRESS' });

if (filterTask.length === 0) {
  console.log('No task found');
} else console.log('Filtered task fetch Sucessfully', filterTask);
