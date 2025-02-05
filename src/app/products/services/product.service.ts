import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/logger.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Продукт 1' },
    { id: 2, name: 'Продукт 2' },
    { id: 3, name: 'Продукт 3' }
  ];
  constructor(private logger: LoggerService) {}
  
  getProducts(): {id: number, name: string}[] {
    this.logger.log('Получение списка продуктов');
    return this.products;
  }
}