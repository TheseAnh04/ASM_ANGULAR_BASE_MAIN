import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  AddProduct = (data: IProduct): Observable<IProduct> => {
    return this.http.post<IProduct>(this.API_URL, data);
  };

  GetAllProducts = (params = {}): Observable<IProduct[]> => {
    return this.http.get<IProduct[]>(this.API_URL, {
      params: {
        _expand: 'category',
        ...params,
      },
    });
  };

  Delete_product = (id: any) => {
    return this.http.delete(this.API_URL + '/' + id);
  };

  Get_Product_By_Id = (id: any): Observable<any> => {
    return this.http.get(this.API_URL + '/' + id, {
      params: {
        _expand: 'category',
      },
    });
  };

  Update_Product = (id: any, data: IProduct) => {
    return this.http.put(this.API_URL + '/' + id, data);
  };
}
