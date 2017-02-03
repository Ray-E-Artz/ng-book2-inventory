import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../product.model";
/**
 * @ProductRow: A component for the view of single Product
 */

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {'class': 'item'}
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
