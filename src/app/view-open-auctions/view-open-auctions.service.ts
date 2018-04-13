import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { of as rxOf } from "rxjs/observable/of";
import { Category } from "./categories";

const test_categories = (<Category[]>[
    { 
        name: "root",
        children: [1, 2]
    },
    {
        name: "Category 1",
        children: [3, 4]
    },
    {
        name: "Category 2",
        children: [5, 6]
    },
    {
        name: "Child Category A",
        children: [7, 8]
    },
    {
        name: "Child Category B"
    },
    {
        name: "Child Category C"
    },
    {
        name: "Child Category D"
    },
    {
        name: "Grandchild Catergory E"
    },
    {
        name: "Grandchild Catergory F"
    }
]);

@Injectable()
export class ViewOpenAuctionsService {

    constructor(private http_client_: HttpClient) { };

    getCategories() {
        return this.http_client_.get<{ categories: Category[] }>("/test") //=> Put correct url
            .pipe(
                catchError((err) => rxOf<{ categories: Category[] }>({ categories: test_categories }) )
            ); 
    };
        
}
