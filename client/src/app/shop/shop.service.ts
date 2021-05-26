import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {    
    let brandIdString = '';
    let typeIdString = '';
    let searchString = '';

    if (shopParams.brandId !== 0){
      brandIdString = shopParams.brandId.toString();
    }

    if (shopParams.typeId !== 0){
      typeIdString = shopParams.typeId.toString();
    }
    
    if (shopParams.search !== '' && shopParams.search !== undefined){
      searchString = shopParams.search;
    }
       
    return this.http.get<IPagination>(this.baseUrl + 'products?&search=' + searchString + '&brandId=' +
    brandIdString + '&typeId=' + typeIdString + '&sort=' + shopParams.sort + '&pageIndex=' + shopParams.pageNumber.toString()
    + '&pageSize=' + shopParams.pageSize.toString())
      .pipe(
        map(response => {
          return response;
        }));
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
