import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  inputs: [ "imgURL", "productPrice", "productName" ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName = "Cute Thing";
  productPrice = "$9.99";
  constructor() { }

  ngOnInit() {
  }

}
