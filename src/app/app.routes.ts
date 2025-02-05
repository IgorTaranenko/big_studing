import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

export const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'todos', component: TodoListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products'}
];
