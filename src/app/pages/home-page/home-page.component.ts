import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  feedbacks = [
    {
      id: 1,
      name: 'Savannah Nguyen',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-1.png',
    },
    {
      id: 2,
      name: 'Esther Howard',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-2.png',
    },
    {
      id: 3,
      name: 'Esther Howard',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-3.png',
    },
  ];

  listCategory: ICategory[] = [];
  categoryId!: string;
  listProducts: IProduct[] = [];

  constructor(
    private categorySV: CategoryService,
    private productSV: ProductService
  ) {}

  ngOnInit() {
    this.categorySV.GetAllCategories().subscribe((list) => {
      this.listCategory = list;

      this.getProductsByCategoryId(list[0].id);
    });
  }

  getProductsByCategoryId(id: any) {
    this.productSV.GetAllProducts({ categoryId: id }).subscribe((products) => {
      this.listProducts = products;
      this.categoryId = id;
    });
  }

  onClickCategory(id: any) {
    this.getProductsByCategoryId(id);
  }
}
