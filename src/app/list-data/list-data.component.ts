import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { DataApiService } from '../data-api.service';
import {Product} from '../product';


@Component({
  selector: 'app-list-data',
  imports: [FormsModule,
    CommonModule, 
    RouterModule],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent implements OnInit {
  products: Product[] = [];
  product: Product = new Product();

  constructor(private productService: DataApiService) {} // Now inside the class

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }
}