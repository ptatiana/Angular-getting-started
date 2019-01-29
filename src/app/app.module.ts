import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule} from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, // Always neeeded
    HttpClientModule, // http client server provider
    ProductModule, // feature module
    AppRoutingModule // This always last as it declares the routes for **, order is important! Otherwise would never navigate to product route
  ],
  bootstrap: [AppComponent] // bootstrap component, whose template is loaded when application is launched
})
export class AppModule { }
