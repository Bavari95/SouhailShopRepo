import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string) {    
    let brandIdString = '';
    let typeIdString = '';

    if (brandId !== 0){
      brandIdString = brandId.toString();
    }

    if (typeId !== 0){
      typeIdString = typeId.toString();
    }
            
    return this.http.get<IPagination>(this.baseUrl + 'products?brandId=' +
    brandIdString + '&typeId=' + typeIdString + '&sort=' + sort )
      .pipe(
        map(response => {
          return response;
        }));
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
