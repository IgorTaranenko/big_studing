import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/logger.service";

@Injectable()
export class TodoListService {
  constructor(private logger: LoggerService) {}
  tasks: string[] = [];
  getList() {
    this.logger.log('Getting tasks');
    return this.tasks;
  }
  addTask(task: string) {
    this.logger.log('Adding task: ' + task);
    this.tasks.push(task);
  }
  deleteTask(index: number) {
    this.logger.log('Deleting task: ' + this.tasks[index]);
    this.tasks.splice(index, 1);
  }
}