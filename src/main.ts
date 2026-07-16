import { createTask, deleteTask, updateTasks } from './tasks/tasks.service.js';
import { crateManyTask } from './tasks/tasks.service.js';
import { getAllTasks } from './tasks/tasks.service.js';
import { getTaskById } from './tasks/tasks.service.js';

const userCreatedTask = createTask({
  title: 'Learning Js',
  description: 'Started learning Js',
  priority: 'HIGH',
});
console.log('Sucessfully created Task', userCreatedTask);

// create many tasks

// const tasks = crateManyTask([
//   {
//     title: 'Learning Js',
//     description: 'Started learning Js',
//     priority: 'HIGH',
//   },
//   {
//     title: 'Learning Js',
//     description: 'Started learning Js',
//     priority: 'HIGH',
//   },
// ]);

// fetch all tasks
const fetchedAllTasks = getAllTasks();
console.log('Fetched all task', fetchedAllTasks);



// fetch task by id
const fetchTaskById = getTaskById(userCreatedTask.id);
console.log('Fetched Task Sucessfully by [getTaskById]', fetchTaskById);

// update Task
const userUpdatedTask = updateTasks(userCreatedTask.id, {
  title: 'id',
});

if(!userUpdatedTask){
  console.log('task not found');
} else
console.log('Task Updated Sucessfully', userUpdatedTask);


// delete task
const userDeletedTask = deleteTask(userCreatedTask.id);
console.log('Task deleted successfully', userDeletedTask);





