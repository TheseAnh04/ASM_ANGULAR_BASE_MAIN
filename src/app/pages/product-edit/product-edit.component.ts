import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ICategory } from '../../interfaces/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  categories: ICategory[] = [];

  router = new Router();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  productId = this.route.snapshot.params['id'];

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    image: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.productService
      .Get_Product_By_Id(this.productId)
      .subscribe((res) => this.editForm.reset(res));
  }

  onUpdate() {
    this.productService
      .Update_Product(this.productId, this.editForm.value as IProduct)
      .subscribe(
        () => {
          alert('Cập nhật sản phẩm thành công');

          this.router.navigate(['/admin/products']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
