import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private  baseurl: string;

  constructor(private http: HttpClient) { 
    this.baseurl='http://localhost:5577/product/v1/'; // Double-check this URL.
    ;
  }

  public findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl+'listall');
  }
  public save(prod: Product){
    return this.http.post<Product> (this.baseurl+'create',prod);
  }
}
