import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product';
import { ICategory } from '../../interfaces/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  listProducts: IProduct[] = [];
  total = 0;
  listCategory: ICategory[] = [];
  params: {
    categoryId: string[];
    name_like: string;
  } = {
    categoryId: [],
    name_like: '',
  };

  constructor(
    private categorySV: CategoryService,
    private productSV: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const nameSearch = this.route.snapshot.queryParams['name'];
    if (nameSearch) {
      this.params.name_like = nameSearch;
    }

    this.categorySV.GetAllCategories().subscribe((categories) => {
      this.listCategory = categories;
      this.total = categories.reduce(
        (total, cate) => (total += cate.products.length),
        0
      );
    });

    this.getProductsByParams({
      name_like: this.params.name_like,
    });
  }

  getProductsByParams(params = {}) {
    this.productSV.GetAllProducts(params).subscribe((products) => {
      this.listProducts = products;
    });
  }

  onFilterByCategory(categoryId: any) {
    const currentCategoryIds = this.params.categoryId;

    if (currentCategoryIds.indexOf(categoryId) !== -1) {
      this.params.categoryId = this.params.categoryId.filter(
        (id) => id !== categoryId
      );
    } else {
      this.params.categoryId.push(categoryId);
    }

    this.getProductsByParams({
      ...this.params,
      categoryId: this.params.categoryId.includes('all')
        ? []
        : this.params.categoryId,
    });
  }
}
