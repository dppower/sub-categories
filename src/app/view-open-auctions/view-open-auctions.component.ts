import { Component, OnInit } from '@angular/core';

import { Category } from "./categories";
import { ViewOpenAuctionsService } from "./view-open-auctions.service";

@Component({
    selector: 'app-view-open-auctions',
    templateUrl: './view-open-auctions.component.html',
    styleUrls: ['./view-open-auctions.component.css']
})
export class ViewOpenAuctionsComponent implements OnInit {

    categories: Category[] = [];

    constructor(private http_service_: ViewOpenAuctionsService) { };

    ngOnInit() {
        this.http_service_.getCategories().subscribe(data => this.categories = data.categories);
    };
}
