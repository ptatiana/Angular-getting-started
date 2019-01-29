
import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
  
    filteredProducts: IProduct[];

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[];

    
    // private _productService;
    // constructor(productService: ProductService)
    // {
    //     this._productService = productService;
    // }
    // Instead of using this, all at one go is done like is seen from the real constructor below:

    // No componenet inicialization in constructor! USe ngOnInit hook
    constructor(private productService: ProductService)
    {
      
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List:' + message;
    }
    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //console.log("OnInit");
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage= <any>error
        );
       
    }
    performFilter(filterBy :  string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((p: IProduct)=> 
        p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}