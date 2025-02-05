import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent {
    @Input() label: string = "Click me!";
}