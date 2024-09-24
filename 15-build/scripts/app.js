
import { Task } from './task.js';
import { User } from './user.js';

const task = new Task('Пойти гулять');

new User(task).do();