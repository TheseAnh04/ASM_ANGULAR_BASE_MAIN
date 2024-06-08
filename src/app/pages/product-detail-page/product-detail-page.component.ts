import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  productDetail!: IProduct;

  constructor(
    private productSV: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productSV.Get_Product_By_Id(productId).subscribe(
      (r) => {
        this.productDetail = r;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
