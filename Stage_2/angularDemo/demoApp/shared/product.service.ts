import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { Categories, IProduct } from "src/app/products/product-list/product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

  constructor(private http: HttpClient){}

    // getProducts():Observable<IProduct[]>{
    //     return this.http.get<IProduct[]>('../api/products.json')
    //     .pipe(
    //         tap(),
    //         catchError()
    //     );
    // }


    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>('api/products.json');
    }
    
}