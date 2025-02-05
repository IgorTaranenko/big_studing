import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { TodoListService } from "./services/todo-list.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    providers: [TodoListService],
    declarations: [TodoListComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [TodoListComponent]
})

export class TodoListModule {}