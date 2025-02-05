import { NgModule } from "@angular/core";
import { CustomButtonComponent } from "./custom-button/custom-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CustomButtonComponent],
    imports: [CommonModule],
    exports: [CustomButtonComponent, CommonModule]
})
export class SharedModule { }