import { NgModule, Optional } from "@angular/core";

@NgModule({

})
export class CoreModule { 
    constructor(@Optional() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        console.log('CoreModule loaded');
    }
 }