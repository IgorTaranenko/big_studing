import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    exports: [ProductListComponent, ProductDetailComponent]
})
export class ProductsModule { }