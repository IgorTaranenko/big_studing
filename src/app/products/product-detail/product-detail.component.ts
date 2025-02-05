import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.less'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = "";
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}