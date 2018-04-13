import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Category } from "./categories";

@Injectable()
export class ViewOpenAuctionsService {

    constructor(private http_client_: HttpClient) { };

    getCategories() {
        //return this.http_client_.get<Category[]>(""); //=> Put correct url
    };
}
