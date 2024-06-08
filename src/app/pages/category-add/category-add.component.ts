import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../interfaces/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent {
  constructor(private categoryService: CategoryService, 
    private router:Router
  ) {}

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  onAdd() {
    this.categoryService.AddCategory(this.addForm.value as ICategory).subscribe(
      () => {
        alert('Thêm danh mục thành công');
        this.addForm.reset();
        this.router.navigate(['/admin/categories'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
