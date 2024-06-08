import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {}

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
  onDelete = (id: any) => {
    if (confirm('Bạn chắc chẵn muốn xóa sản phẩm?')) {
      this.categoryService.Delete_category(id).subscribe((data) => {
        alert('Xóa thành công.');
        this.categories = this.categories.filter((item) => item.id !== id);
      });
    }
  };
}
