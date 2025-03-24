import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { DataApiService } from '../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {
product:Product;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private productService: DataApiService
) {
  this.product = new Product();
}


OnSubmit() {
  this.productService.save(this.product).subscribe(result => this.gotoProductList());
}


gotoProductList() {
  this.router.navigate(['/view-product']);
}

}