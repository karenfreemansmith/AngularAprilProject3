import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  inputs: [ "customerName", "customerAddress", "customerCity", "customerState", "customerPhone" ],
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerName = "My Name";
  customerAddress = "123 Main St";

  constructor() { }

  ngOnInit() {
  }

}
