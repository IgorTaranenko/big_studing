import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/logger.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products = ['Ноутбук', 'Смартфон', 'Планшет'];
    constructor(private logger: LoggerService) {}
    
    getProducts(): string[] {
        this.logger.log('Получение списка продуктов');
        return this.products;
    }
}