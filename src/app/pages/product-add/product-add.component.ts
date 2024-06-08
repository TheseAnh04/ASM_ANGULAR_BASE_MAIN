import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/product';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../interfaces/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  addForm = new FormGroup({
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
  }

  onAdd() {
    this.productService.AddProduct(this.addForm.value as IProduct).subscribe(
      () => {
        alert('Thêm sản phẩm thành công');
        this.addForm.reset();
        this.router.navigate(['/admin/products'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
