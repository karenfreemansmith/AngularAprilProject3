"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
require('hammerjs');
var app_component_1 = require('./app.component');
var products_component_1 = require('./components/products/products.component');
var product_detail_component_1 = require('./components/product-detail/product-detail.component');
var cart_component_1 = require('./components/cart/cart.component');
var order_component_1 = require('./components/order/order.component');
var customers_component_1 = require('./components/customers/customers.component');
var customer_detail_component_1 = require('./components/customer-detail/customer-detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                products_component_1.ProductsComponent,
                product_detail_component_1.ProductDetailComponent,
                cart_component_1.CartComponent,
                order_component_1.OrderComponent,
                customers_component_1.CustomersComponent,
                customer_detail_component_1.CustomerDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: products_component_1.ProductsComponent },
                    { path: 'product', component: product_detail_component_1.ProductDetailComponent },
                    { path: 'cart', component: cart_component_1.CartComponent },
                    { path: 'order', component: order_component_1.OrderComponent },
                    { path: 'customers', component: customers_component_1.CustomersComponent },
                    { path: 'customer', component: customer_detail_component_1.CustomerDetailComponent }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
