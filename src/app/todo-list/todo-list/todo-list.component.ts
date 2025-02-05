import { Component } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.less'
})
export class TodoListComponent {
  currentTask: string = '';
  constructor(private taskService: TodoListService) {
    this.updateList();
  }
  tasks: string[] = [];
  removeTask(index: number) {
    this.taskService.deleteTask(index);
  }
  updateList() {
    this.tasks = this.taskService.getList();
  }
  addTask() {
    this.taskService.addTask(this.currentTask);
    this.currentTask = '';
    this.updateList();
  }
}
