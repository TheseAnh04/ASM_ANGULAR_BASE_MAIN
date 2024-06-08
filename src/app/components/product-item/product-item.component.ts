import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() data: IProduct = {} as IProduct;
}
