import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { TodoListModule } from './todo-list/todo-list.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ProductsModule,
    TodoListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
