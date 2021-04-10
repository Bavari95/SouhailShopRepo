import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'SouShop is here';
  products: IProduct[];

  constructor( private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products/').subscribe((res: IPagination) => {
      console.log(res);
      this.products = res.data;
    }, error =>{
      console.log(error);
    });
  }
}
