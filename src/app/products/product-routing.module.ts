import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
    imports: [
        RouterModule.forChild([ // forChild assures we dont register the router service provider more than once
            { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent },
        ])
    ],

    exports:[
        RouterModule
    ]
  })

export class ProductRoutingModule { }