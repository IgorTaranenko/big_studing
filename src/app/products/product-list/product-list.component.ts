import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products: {id: number, name: string}[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.refreshProducts();
  }

  refreshProducts() {
    this.products = this.productService.getProducts();
  }
}