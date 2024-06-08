import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent {
  router = new Router();

  formSearchProd = new FormGroup({
    name: new FormControl(''),
  });

  onHandleSearch() {
    this.router.navigate(['/products'], {
      queryParams: {
        name: this.formSearchProd.value.name,
      },
    });
  }
}
