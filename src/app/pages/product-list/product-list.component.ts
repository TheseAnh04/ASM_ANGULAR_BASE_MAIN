import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.GetAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onDelete = (id: any) => {
    if (confirm('Bạn chắc chẵn muốn xóa sản phẩm?')) {
      this.productService.Delete_product(id).subscribe((data) => {
        alert('Xóa thành công.');
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  };
}
